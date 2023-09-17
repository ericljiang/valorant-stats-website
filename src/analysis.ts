import * as henrik from "./valorant-api";
import { MatchRoundsInner, MatchRoundsInnerPlayerStatsInnerKillEventsInner, ValorantV2MatchMatchIdGet200Response } from "./valorant-api";

const config = henrik.createConfiguration();
const api = new henrik.DefaultApi(config);

async function getMatch(matchId: string): Promise<ValorantV2MatchMatchIdGet200Response> {
  return await api.valorantV2MatchMatchIdGet(matchId);
}

type DeathStats = {
  teamDeathIndex: number;
  closestAllyDistance?: number;
  averageAllyDistance?: number;
};

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
}

export async function analyzeMatch(matchId: string): Promise<Map<string, MatchStats>> {
  // const match = await getMatch('c94b7848-860b-4d31-8340-ae97b4221da6');
  const match = await getMatch(matchId);

  const computeDeathStats = (killEvent: MatchRoundsInnerPlayerStatsInnerKillEventsInner, index: number): readonly [string, DeathStats] => {
    const name = killEvent?.victimDisplayName ?? killEvent?.victimPuuid ?? "";
    const allyDistances = killEvent.playerLocationsOnKill
      ?.filter(l => l.playerTeam === killEvent.victimTeam).map(l => {
        if (killEvent.victimDeathLocation?.x === undefined || killEvent.victimDeathLocation.y === undefined || l.location?.x === undefined || l.location.y === undefined) return undefined;
        return Math.sqrt(Math.pow(killEvent.victimDeathLocation?.x - l.location?.x, 2) + Math.pow(killEvent.victimDeathLocation?.y - l.location?.y, 2)) / 100; // cm -> m
      })
      .filter((d): d is number => d !== undefined)
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

  const computeRoundStats = (round: MatchRoundsInner): Map<string, DeathStats> => {
    const killEvents = round.playerStats
      ?.flatMap(ps => ps.killEvents)
      .filter((k): k is MatchRoundsInnerPlayerStatsInnerKillEventsInner => k !== undefined)
      .sort((a, b) => (a?.killTimeInRound ?? 0) - (b?.killTimeInRound ?? 0));

    const roundDeathStats = partition(killEvents!, k => k.victimTeam === "Red")
      .flatMap(teamDeaths => {
        return teamDeaths.map(computeDeathStats);
      })
      .reduce(mapEntryReducer, new Map<string, DeathStats>());

    return roundDeathStats;
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
            closestAllyDistance: []
          });
        }
        accumulator.get(player)!.teamDeathIndex?.push(rs.teamDeathIndex);
        accumulator.get(player)!.averageAllyDistance?.push(rs.averageAllyDistance);
        accumulator.get(player)!.closestAllyDistance?.push(rs.closestAllyDistance);
      });
      return accumulator;
    }, new Map<string, Aggregate<DeathStats>>());

  const matchStats = Array.from(matchAggregate.entries())
    .map(([player, agg]) => {
      return [
        player,
        {
          team: match.data?.players?.blue?.find(p => `${p.name}#${p.tag}` === player) !== undefined ? "blue" : "red",
          averageTeamDeathIndex: agg.teamDeathIndex.reduce((a, b) => a + b) / agg.teamDeathIndex.length,
          lastDeaths: agg.teamDeathIndex.filter(i => i === 4).length,
          firstDeaths: agg.teamDeathIndex.filter(i => i === 0).length,
          untradeableDeaths: agg.closestAllyDistance?.filter(d => d !== undefined && d > 10).length,
          averageDistanceFromTeamAtDeath: agg.averageAllyDistance ? agg.averageAllyDistance.filter((d): d is number => d !== undefined)?.reduce((a, b) => a + b) / agg.averageAllyDistance?.filter((d): d is number => d !== undefined).length : undefined
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
