import mapValues from 'lodash/mapValues'

import { calculateAllTimeStats , enhanceData } from "./calculations"
import { PlayerAllTimeData, PlayerName, TournamentData } from "./types"
import S2020 from "./S2020";
// import DataImg6303 from "./6303";

const TournamentScores : Record<string, TournamentData> = {};
// const TournamentScores : Record<string, TournamentData> = {
//   S2020: enhanceData(S2020, "S2020")
// };
// const TournamentScores : Record<string, TournamentData> = mapValues({
//   S2020,
//   // DataImg6303
// }, enhanceData)

const AllTime : Record<PlayerName, PlayerAllTimeData> = calculateAllTimeStats(TournamentScores)

// const calculateEloScores = () => undefined

export default AllTime;
export { TournamentScores }
