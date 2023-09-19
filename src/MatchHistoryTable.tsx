import { useState } from "react";
import { getMatchHistory } from "./api";
import { V1LifetimeMatchesItem } from "./valorant-api";

export function MatchHistoryTable() {
  const [playerName, setPlayerName] = useState("");
  const [playerTag, setPlayerTag] = useState("");
  const [matchHistory, setMatchHistory] = useState<V1LifetimeMatchesItem[]>();

  const onClickLoad = async () => {
    const matchHistory = await getMatchHistory(playerName, playerTag);
    setMatchHistory(matchHistory.data);
  };

  return (
    <div>
      <label>
        Player name: <input value={playerName} onChange={e => setPlayerName(e.target.value)} />
      </label>
      <label>
        Tag: <input value={playerTag} onChange={e => setPlayerTag(e.target.value)} />
      </label>
      <button onClick={onClickLoad}>Load matches</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mode</th>
            <th>Map</th>
            <th>Score</th>
            <th>Match ID</th>
          </tr>
        </thead>
        <tbody>
          {
            matchHistory && matchHistory.map(match => (
              <tr>
                <td>
                  {match.meta?.startedAt && new Date(Date.parse(match.meta?.startedAt)).toDateString()}
                </td>
                <td>
                  {match.meta?.mode}
                </td>
                <td>
                  {match.meta?.map?.name}
                </td>
                <td>
                  {match.stats?.team?.toLowerCase() === "blue" ? `${match.teams?.blue}:${match.teams?.red}` : `${match.teams?.red}:${match.teams?.blue}`}
                </td>
                <td>
                  {match.meta?.id}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
