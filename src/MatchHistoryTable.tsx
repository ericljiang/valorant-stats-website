import { useState } from "react";
import { getMatchHistory } from "./api";
import { Modes, V1LifetimeMatchesItem } from "./valorant-api";
import styles from './MatchHistoryTable.module.css'

const validGameModes = [Modes.Competitive, Modes.Swiftplay, "Premier"] as const

export function MatchHistoryTable(props: { onSelectMatch: (matchId: string) => void; }) {
  const [matchHistory, setMatchHistory] = useState<V1LifetimeMatchesItem[]>();
  const [selectedMode, setSelectedMode] = useState<typeof validGameModes[number] | "">("");
  function isValidGameMode(value: string): value is typeof validGameModes[number] {
    return (validGameModes as readonly string[]).includes(value);
  }

  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          name: { value: string; };
          tag: { value: string; };
        };
        const name = target.name.value;
        const tag = target.tag.value;
        const matchHistory = (await getMatchHistory(name, tag)).data
          ?.filter(m => isValidGameMode(m.meta?.mode!));
        setMatchHistory(matchHistory);
      }}>
        <label>
          Player name: <input name="name" />
        </label>
        <label>
          Tag: <input name="tag" />
        </label>
        <button type="submit">Load matches</button>
      </form>
      <label>
        Game mode:
        <select value={selectedMode} onChange={e => {
          if (isValidGameMode(e.target.value) || e.target.value === "") {
            setSelectedMode(e.target.value);
          }
        }}>
          <option value="">All</option>
          {
            validGameModes.map(m => (
              <option value={m}>
                {m}
              </option>
            ))
          }
        </select>
      </label>
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
            matchHistory && matchHistory.filter(match => {
              if (!selectedMode) return true;
              return match.meta?.mode === selectedMode;
            }).map(match => {
              const date = match.meta?.startedAt && new Date(Date.parse(match.meta?.startedAt)).toDateString();
              const scoreLine = match.stats?.team?.toLowerCase() === "blue" ? `${match.teams?.blue}:${match.teams?.red}` : `${match.teams?.red}:${match.teams?.blue}`;
              const scoreDiff = ((match.teams?.blue ?? 0) - (match.teams?.red ?? 0)) * (match.stats?.team?.toLowerCase() === "blue" ? 1 : -1);
              const result = scoreDiff === 0 ? "tie" : scoreDiff > 0 ? "win" : "loss";
              return (
                <tr
                  className={styles[result]}
                  key={match.meta?.id}
                  onClick={() => props.onSelectMatch(match.meta?.id!)}
                >
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
