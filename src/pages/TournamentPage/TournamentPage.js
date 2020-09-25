import React from "react"

import ScoresTable from "./ScoresTable"
import ProgressionChart from "./ProgressionChart"

const TournamentPage = ({ data, ...props }) => {
  return (
    <div>
      <ScoresTable data={data} />

      <div className="pt-8">
        <ProgressionChart data={data} />
      </div>
    </div>
  )
}

export default TournamentPage
