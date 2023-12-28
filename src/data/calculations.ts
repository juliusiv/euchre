import { sum, sumBy } from 'lodash'

import { PlayerAllTimeData, PlayerName, PlayerTournamentStats, TournamentData } from "./types"

const enhanceData = (csvData: Record<string, number[]>, shortName : string) : TournamentData => {
  const gamesPlayedTo = 8;
  const playerData = Object.entries(csvData).map(([playerName, scores]) => {
    const totalScore : number = sum(scores);
    const gamesWon : number = sumBy(scores, score => Number(score > 8));

    const stats : PlayerTournamentStats = { totalScore, gamesWon };
    return { stats, orderedGames: scores, name: playerName }
  })

  const shortSeason = shortName.slice(0, 1) === "S" ? "Summer" : "Winter"
  const year = shortName.slice(1)

  return {
    longName: `${shortSeason} ${year}`,
    shortName,
    playerData: playerData,
    gamesPlayedTo
  }
}

const calculateAllTimeStats = (tournamentScores : Record<PlayerName, TournamentData>): Record<PlayerName, PlayerAllTimeData> => {
  const playerStats : Record<PlayerName, PlayerAllTimeData>= {}

  for (const { playerData } of Object.values(tournamentScores)) {
    playerData.forEach(({ name, stats }) => {
      if (!playerStats.hasOwnProperty(name)) {
        playerStats[name] = {
          totalGamesWon: 0,
          eloScore: 100,
          firstPlaceFinishes: 0,
          secondPlaceFinishes: 0,
          thirdPlaceFinishes: 0,
          averagePlace: 0,
          name
        }
      }
      
      playerStats[name].totalGamesWon += stats.gamesWon
    })
  };

  return playerStats
}

export { calculateAllTimeStats, enhanceData }
