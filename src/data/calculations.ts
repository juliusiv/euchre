import parse from 'csv-parse/lib/sync'
import invertBy from 'lodash/invertBy'
import reduce from 'lodash/reduce'
import sum from 'lodash/sum'
import { PlayerAllTimeData, PlayerName, PlayerTournamentData, PlayerTournamentStats, TournamentData } from "data/types"

const castScore = (value : string, context : any ) => {
  const isScore = !context.header && context.column.startsWith("game")
  return isScore ? parseInt(value.trim()) : value
}

const enhanceData = (csvData : string, shortName : string) : TournamentData => {
  const gamesPlayedTo = 8

  const playerData : PlayerTournamentData[] = parse(csvData, {columns: true, cast: castScore }).map(
  // const playerData = parse(csvData, {columns: true, cast: castScore }).map(
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
  playerData.sort((a, b) => a.stats.totalScore - b.stats.totalScore)
  // playerData.forEach(({ stats }, index) => {
  // });

  const shortSeason = shortName.slice(0, 1) === "S" ? "Summer" : "Winter"
  const year = shortName.slice(1)

  const rounds : Record<string, number>[] = []
  for (let game = 0; game < playerData[0].orderedGames.length; game++) {
    const round : Record<string, number> = {}
    playerData.forEach(({ orderedGames, name }) => {
      round[name] = orderedGames[game]
    })
    rounds.push(round)
  }

  const partnerGuesses = rounds.map(guessPartnersForRound)
  console.log(partnerGuesses)
  // playerData.map(({ orderedGames, name }))

  return {
    longName: `${shortSeason} ${year}`,
    shortName,
    playerData: playerData,
    gamesPlayedTo
  }
}

type RoundPartnerGuesses = {
  known: Record<string, string>;
  unkown: string[];
  errors: string[];
}

const guessPartnersForRound = (playerData : Record<string, number>) : RoundPartnerGuesses => {
  const guesses : RoundPartnerGuesses = {
    known: {},
    unkown: [],
    errors: []
  };

  const scoresToPlayers = invertBy(playerData)
  Object.entries(scoresToPlayers).forEach(([score, players]) => {
    if (players.length === 2) {
      guesses.known[players[0]] = players[1]
      guesses.known[players[1]] = players[0]
      delete scoresToPlayers[score]
    } else if (players.length % 2 !== 0) {
      guesses.errors.push(...players)
    } else {
      guesses.unkown.push(...players)
    }
  });

  return guesses
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
