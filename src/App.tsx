import React, { useState } from 'react';
import { MatchStats, analyzeMatch } from './analysis';
import styles from './App.module.css'

type Header = Exclude<keyof MatchStats, "team"> | "player"

function App() {
  const [matchId, setMatchId] = useState<string>("");
  const [matchStats, setMatchStats] = useState<Map<string, MatchStats>>();
  const [sortKey, setSortKey] = useState<Header>("player");
  const [reverseOrder, setReverseOrder] = useState<boolean>(false);

  const onClickLoad = async () => {
    // setMatchStats(await analyzeMatch('c94b7848-860b-4d31-8340-ae97b4221da6'))
    setMatchStats(await analyzeMatch(matchId))
  }

  const onClickHeader = (header: Header) => () => {
    if (header === sortKey) {
      setReverseOrder((prev) => !prev);
    } else {
      setSortKey(header);
      setReverseOrder(false);
    }
  }

  return (
    <div className={styles.App}>
      <label>
        Match ID:
        <input value={matchId} onChange={e => setMatchId(e.target.value)} />
      </label>
      <button onClick={onClickLoad}>Load</button>
      <table>
        <thead>
          <tr>
            <th onClick={onClickHeader("player")}>Player</th>
            <th onClick={onClickHeader("averageTeamDeathIndex")}>averageTeamDeathIndex</th>
            <th onClick={onClickHeader("lastDeaths")}>lastDeaths</th>
            <th onClick={onClickHeader("firstDeaths")}>firstDeaths</th>
            <th onClick={onClickHeader("untradeableDeaths")}>untradeableDeaths</th>
            <th onClick={onClickHeader("averageDistanceFromTeamAtDeath")}>averageDistanceFromTeamAtDeath</th>
          </tr>
        </thead>
        <tbody>
          {
            matchStats && Array.from(matchStats.entries())
              .sort(([playerA, statsA], [playerB, statsB]) => {
                const reverseCoefficient = reverseOrder ? -1 : 1;
                if (sortKey === "player") {
                  if (playerA.toLowerCase() < playerB.toLowerCase()) return -1 * reverseCoefficient
                  if (playerA.toLowerCase() > playerB.toLowerCase()) return 1 * reverseCoefficient
                  return 0
                }
                return ((statsB[sortKey] ?? 0) - (statsA[sortKey] ?? 0)) * reverseCoefficient
              })
              .map(([player, stats]) => (
                <tr key={player} className={stats.team === "blue" ? styles.rowTeamBlue : styles.rowTeamRed}>
                  <td>{player}</td>
                  <td>{(stats.averageTeamDeathIndex + 1).toFixed(1)}</td>
                  <td>{stats.lastDeaths}</td>
                  <td>{stats.firstDeaths}</td>
                  <td>{stats.untradeableDeaths}</td>
                  <td>{`${stats.averageDistanceFromTeamAtDeath?.toFixed(1)}m`}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
