import React from "react"

import ScoresTable from "./ScoresTable"
// import ProgressionChart from "./ProgressionChart"

const TournamentPage = ({ data, ...props }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <ScoresTable data={data} />
      </div>

      {/* <div className="pt-8">
        <ProgressionChart data={data} />
      </div> */}
    </div>
  )
}

export default TournamentPage
