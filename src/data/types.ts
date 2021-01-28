export type TournamentData = {
  longName: string;
  shortName: string;
  playerData: PlayerTournamentData[];
  gamesPlayedTo: number;
}

export type PlayerTournamentStats = {
  totalScore: number;
  gamesWon: number;
  place: number;
}

export type PlayerTournamentData = {
  stats: PlayerTournamentStats;
  orderedGames: number[];
  name: string;
}

export type PlayerAllTimeData = {
  totalGamesWon: number;
  eloScore: number;
  firstPlaceFinishes: number;
  secondPlaceFinishes: number;
  thirdPlaceFinishes: number;
  averagePlace: number;
  name: string;
}

export type PlayerName = string
