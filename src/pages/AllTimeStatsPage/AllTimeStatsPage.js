import React from "react"

import AllTimeStatsTable from "./AllTimeStatsTable"

const AllTimeStatsPage = ({ data, ...props }) => {
  return (
    <div className="overflow-x-auto">
      <AllTimeStatsTable data={data} />
    </div>
  )
}

export default AllTimeStatsPage
