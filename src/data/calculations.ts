import parse from 'csv-parse/lib/sync'
import reduce from 'lodash/reduce'
import sum from 'lodash/sum'
import { PlayerAllTimeData, PlayerName, PlayerTournamentData, PlayerTournamentStats, TournamentData } from "data/types"

const castScore = (value : string, context : any ) => {
  const isScore = !context.header && context.column.startsWith("game")
  return isScore ? parseInt(value.trim()) : value
}

const enhanceData = (csvData : string, shortName : string) : TournamentData => {
  const gamesPlayedTo = 8

  const playerData = parse(csvData, {columns: true, cast: castScore }).map(
    // TODO: figure out how to type `playerScores`
    (playerScores : any) : PlayerTournamentData => {
      const orderedGames : number[] = reduce(playerScores, (result : number[], score : number, game : string) => {
        if (!game.startsWith("game")) return result;

        const gameNumber = parseInt(game.slice(4))
        result[gameNumber - 1] = score

        return result
      }, [])
      const totalScore : number = sum(orderedGames)
      const gamesWon : number = reduce(orderedGames, (result : number, score : number) => result += score >= 8 ? 1 : 0, 0)

      const stats : PlayerTournamentStats = { totalScore, gamesWon }
      return { stats, orderedGames, name: playerScores.name }
    }
  )
  playerData.sort((a : any, b : any) => a.stats.totalScore > b.stats.totalScore)
  // playerData.forEach(({ stats }, index) => {
    
  // });

  const shortSeason = shortName.slice(0, 1) === "S" ? "Summer" : "Winter"
  const year = shortName.slice(1)

  return {
    longName: `${shortSeason} ${year}`,
    shortName,
    playerData: playerData,
    gamesPlayedTo
  }
}

const calculateAllTimeStats = (tournamentScores : Record<PlayerName, TournamentData>) : Record<PlayerName, PlayerAllTimeData> => {
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
