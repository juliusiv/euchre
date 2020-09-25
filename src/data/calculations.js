import parse from 'csv-parse/lib/sync'
import reduce from 'lodash/reduce'
import sum from 'lodash/sum'

const castScore = (value, context) => {
  const isScore = !context.header && context.column.startsWith("game")
  return isScore ? parseInt(value.trim()) : value
}

const enhanceData = (csvData, shortName) => {
  const gamesPlayedTo = 8

  const data = parse(csvData, {columns: true, cast: castScore }).map(
    playerScores => {
      // const orderedGames = Object.entries(playerScores).reduce((result, [game, score]) => {
      const orderedGames = reduce(playerScores, (result, score, game) => {
        if (!game.startsWith("game")) return result;

        const gameNumber = parseInt(game.slice(4))
        result[gameNumber - 1] = score

        return result
      }, [])
      const totalScore = sum(orderedGames)
      const gamesWon = reduce(orderedGames, (result, score) => result += score >= 8 ? 1 : 0, 0)

      const stats = { totalScore, gamesWon }
      return { stats, orderedGames, ...playerScores }
    }
  )

  const shortSeason = shortName.slice(0, 1) === "S" ? "Summer" : "Winter"
  const year = shortName.slice(1)

  return {
    longName: `${shortSeason} ${year}`,
    shortName,
    allPlayerData: data,
    gamesPlayedTo
  }
}

const calculateAllTimeStats = (tournamentScores) => {
  const playerStats = {}

  for (const { allPlayerData } of Object.values(tournamentScores)) {
    allPlayerData.forEach(({ name, stats }) => {
      if (!playerStats.hasOwnProperty(name)) {
        playerStats[name] = {
          totalGamesWon: 0,
          eloScore: "?",
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
