import { Affinities, DefaultApi, ModesApi, V1LifetimeMatches, ValorantV2MatchMatchIdGet200Response, createConfiguration } from "./valorant-api";

const config = createConfiguration();
const api = new DefaultApi(config);

export async function getMatch(matchId: string): Promise<ValorantV2MatchMatchIdGet200Response> {
  return await api.valorantV2MatchMatchIdGet(matchId);
}

export async function getMatchHistory(name: string, tag: string): Promise<V1LifetimeMatches> {
  return await api.valorantV1LifetimeMatchesAffinityNameTagGet(Affinities.Na, name, tag, ModesApi.Competitive);
}
