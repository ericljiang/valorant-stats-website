import { useState } from "react";
import { getMatchHistory } from "./api";
import { V1LifetimeMatchesItem } from "./valorant-api";
import styles from './MatchHistoryTable.module.css'

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
            matchHistory && matchHistory.map(match => {
              const date = match.meta?.startedAt && new Date(Date.parse(match.meta?.startedAt)).toDateString();
              const scoreLine = match.stats?.team?.toLowerCase() === "blue" ? `${match.teams?.blue}:${match.teams?.red}` : `${match.teams?.red}:${match.teams?.blue}`;
              const scoreDiff = (match.teams?.blue ?? 0) - (match.teams?.red ?? 0) * (match.stats?.team?.toLowerCase() === "blue" ? 1 : -1);
              const result = scoreDiff === 0 ? "tie" : scoreDiff > 0 ? "win" : "loss";
              return (
                <tr className={styles[result]}>
                  <td>
                    {date}
                  </td>
                  <td>
                    {match.meta?.mode}
                  </td>
                  <td>
                    {match.meta?.map?.name}
                  </td>
                  <td>
                    {scoreLine}
                  </td>
                  <td>
                    {match.meta?.id}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
