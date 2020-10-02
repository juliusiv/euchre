import mapValues from 'lodash/mapValues'

import { calculateAllTimeStats , enhanceData } from "data/calculations"
import { PlayerAllTimeData, PlayerName, TournamentData } from "data/types"
import S2020 from "data/S2020";

const TournamentScores : Record<string, TournamentData> = mapValues({
  S2020,
}, enhanceData)

const AllTime : Record<PlayerName, PlayerAllTimeData> = calculateAllTimeStats(TournamentScores)

// const calculateEloScores = () => undefined

export default AllTime;
export { TournamentScores }
