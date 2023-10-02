
import { getMatch } from "./api";
import { MatchRoundsInner, MatchRoundsInnerPlayerStatsInnerKillEventsInner } from "./valorant-api";

type DeathStats = {
  teamDeathIndex: number;
  closestAllyDistance?: number;
  averageAllyDistance?: number;
};

type TradeStats = {
  successfulTrades: number;
  missedTrades: number;
}

type Aggregate<T> = {
  [P in keyof T]: T[P][];
};

export type MatchStats = {
  team: "red" | "blue";
  averageTeamDeathIndex: number;
  lastDeaths: number;
  firstDeaths: number;
  untradeableDeaths?: number;
  averageDistanceFromTeamAtDeath?: number;
  successfulTrades?: number;
  missedTrades?: number;
  tradeRatio?: number;
}

export async function analyzeMatch(matchId: string): Promise<Map<string, MatchStats>> {
  const match = await getMatch(matchId);

  const computeDeathStats = (killEvent: MatchRoundsInnerPlayerStatsInnerKillEventsInner, index: number, killEvents: MatchRoundsInnerPlayerStatsInnerKillEventsInner[]): readonly [string, DeathStats] => {
    const name = killEvent?.victimDisplayName ?? killEvent?.victimPuuid ?? "";
    const allyDistances = killEvent.playerLocationsOnKill
      ?.filter(playerLocation => playerLocation.playerTeam === killEvent.victimTeam)
      .map(allyLocation => {
        if (!(killEvent.victimDeathLocation?.x && killEvent.victimDeathLocation.y && allyLocation.location?.x && allyLocation.location.y)) {
          return undefined;
        }
        const a = killEvent.victimDeathLocation.x - allyLocation.location.x;
        const b = killEvent.victimDeathLocation.y - allyLocation.location.y;
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) / 100; // cm -> m
      })
      .filter((distance): distance is number => distance !== undefined)
      .sort((a, b) => a - b);
    const closestAllyDistance = allyDistances?.[0];
    const averageAllyDistance = allyDistances && allyDistances.length > 0 ? allyDistances?.reduce((a, b) => a + b) / allyDistances?.length : undefined;
    const stats: DeathStats = {
      teamDeathIndex: index,
      closestAllyDistance,
      averageAllyDistance
    };
    return [name, stats] as const;
  };

  const computeRoundStats = (round: MatchRoundsInner, roundIndex: number): Map<string, DeathStats & Partial<TradeStats>> => {
    const killEvents = round.playerStats
      ?.flatMap(ps => ps.killEvents)
      .filter((k): k is MatchRoundsInnerPlayerStatsInnerKillEventsInner => k !== undefined)
      .sort((a, b) => (a?.killTimeInRound ?? 0) - (b?.killTimeInRound ?? 0));

    const roundDeathStats = partition(killEvents!, k => k.victimTeam === "Red")
      .flatMap(teamDeaths => teamDeaths.map(computeDeathStats))
      .reduce(mapEntryReducer, new Map<string, DeathStats>());


    // kill -> death -> maybe tradeable death -> maybe trade
    const roundTradeStats = killEvents?.flatMap((killEvent, index, array): [string, [number, number]][] => {
      const killTrade = array.slice(index + 1)
        .find(futureKillEvent =>
          futureKillEvent.victimPuuid === killEvent.killerPuuid
          && (futureKillEvent.killTimeInRound ?? 0) - (killEvent.killTimeInRound ?? 0) < 5000);
      if (killTrade?.killerDisplayName) {
        return [[killTrade.killerDisplayName, [1, 0]]];
      }
      const failedTraders = killEvent.playerLocationsOnKill
        ?.filter(playerLocation => playerLocation.playerTeam === killEvent.victimTeam)
        .map(allyLocation => {
          if (!(killEvent.victimDeathLocation?.x && killEvent.victimDeathLocation.y && allyLocation.location?.x && allyLocation.location.y)) {
            return undefined;
          }
          const a = killEvent.victimDeathLocation.x - allyLocation.location.x;
          const b = killEvent.victimDeathLocation.y - allyLocation.location.y;
          const distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) / 100; // cm -> m
          return distance <= 5 ? allyLocation.playerDisplayName : undefined;
        })
        .filter((ally): ally is string => ally !== undefined);
      return failedTraders?.map(name => [name, [0, 1]]) ?? [];
    }).reduce((acc, [player, [successfulTrades, missedTrades]]): Map<string, TradeStats> => {
      if (!acc.has(player)) {
        acc.set(player, { successfulTrades: 0, missedTrades: 0 });
      }
      const {
        successfulTrades: prevSuccessfulTrades,
        missedTrades: prevMissedTrades
      } = acc.get(player)!;
      acc.set(player, {
        successfulTrades: prevSuccessfulTrades + successfulTrades,
        missedTrades: prevMissedTrades + missedTrades
      });
      return acc;
    }, new Map<string, TradeStats>());

    return Array.from(roundDeathStats.entries()).map(([name, deathStats]): [string, DeathStats & Partial<TradeStats>] => {
      const tradeStats: Partial<TradeStats> = roundTradeStats?.get(name) ?? {};
      return [name, { ...deathStats, ...tradeStats }];
    }).reduce(mapEntryReducer, new Map<string, DeathStats & Partial<TradeStats>>())
  };

  if (!match.data?.rounds) throw Error();

  const matchAggregate = match.data.rounds
    .map(computeRoundStats)
    .reduce((accumulator, roundStats) => {
      roundStats.forEach((rs, player) => {
        if (!accumulator.has(player)) {
          accumulator.set(player, {
            teamDeathIndex: [],
            averageAllyDistance: [],
            closestAllyDistance: [],
            successfulTrades: [],
            missedTrades: []
          });
        }
        accumulator.get(player)!.teamDeathIndex?.push(rs.teamDeathIndex);
        accumulator.get(player)!.averageAllyDistance?.push(rs.averageAllyDistance);
        accumulator.get(player)!.closestAllyDistance?.push(rs.closestAllyDistance);
        accumulator.get(player)!.successfulTrades?.push(rs.successfulTrades);
        accumulator.get(player)!.missedTrades?.push(rs.missedTrades);
      });
      return accumulator;
    }, new Map<string, Aggregate<DeathStats & Partial<TradeStats>>>());

  const matchStats = Array.from(matchAggregate.entries())
    .map(([player, agg]) => {
      const team = match.data?.players?.blue?.find(p => `${p.name}#${p.tag}` === player) !== undefined ? "blue" : "red";
      const averageTeamDeathIndex = agg.teamDeathIndex.reduce((a, b) => a + b) / agg.teamDeathIndex.length;
      const lastDeaths = agg.teamDeathIndex.filter(i => i === 4).length;
      const firstDeaths = agg.teamDeathIndex.filter(i => i === 0).length;
      const untradeableDeaths = agg.closestAllyDistance?.filter(d => d !== undefined && d > 10).length;
      const averageDistanceFromTeamAtDeath = agg.averageAllyDistance ? agg.averageAllyDistance.filter((d): d is number => d !== undefined)?.reduce((a, b) => a + b, 0) / agg.averageAllyDistance?.filter((d): d is number => d !== undefined).length : undefined;
      const successfulTrades = agg.successfulTrades ? agg.successfulTrades.filter((n): n is number => n !== undefined).reduce((a, b) => a + b, 0) : undefined;
      const missedTrades = agg.missedTrades ? agg.missedTrades.filter((n): n is number => n !== undefined).reduce((a, b) => a + b, 0) : undefined;
      const tradeRatio = (successfulTrades !== undefined && missedTrades !== undefined) ? successfulTrades / (successfulTrades + missedTrades) : undefined
      return [
        player,
        {
          team,
          averageTeamDeathIndex,
          lastDeaths,
          firstDeaths,
          untradeableDeaths,
          averageDistanceFromTeamAtDeath,
          successfulTrades,
          missedTrades,
          tradeRatio
        }
      ] as const;
    })
    .reduce(mapEntryReducer, new Map<string, MatchStats>());

  return matchStats;
}

function mapEntryReducer<K, V>(accumulator: Map<K, V>, entry: readonly [K, V])
  : Map<K, V> {
  const [key, value] = entry;
  return accumulator.set(key, value);
}

function partition<T>(array: T[], filter: (value: T, index: number, array: T[]) => boolean): [T[], T[]] {
  const pass: T[] = [], fail: T[] = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
}
