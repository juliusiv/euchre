import mapValues from 'lodash/mapValues'

import { calculateAllTimeStats , enhanceData } from "data/calculations"
import S2020 from "data/S2020";

const TournamentScores = mapValues({
  S2020,
}, enhanceData)

const AllTime = calculateAllTimeStats(TournamentScores)

// const calculateEloScores = () => undefined

export default AllTime;
export { TournamentScores }
