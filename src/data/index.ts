import mapValues from 'lodash/mapValues'

import { calculateAllTimeStats , enhanceData } from "data/calculations"
import { PlayerAllTimeData, PlayerName, TournamentData } from "data/types"
import S2020 from "data/S2020";
import DataImg6303 from "data/6303";

const TournamentScores : Record<string, TournamentData> = mapValues({
  S2020,
  DataImg6303
}, enhanceData)

const AllTime : Record<PlayerName, PlayerAllTimeData> = calculateAllTimeStats(TournamentScores)

// const calculateEloScores = () => undefined

export default AllTime;
export { TournamentScores }
