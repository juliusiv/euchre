import React from "react"

import AllTimeStatsTable from "./AllTimeStatsTable"

const AllTimeStatsPage = ({ data, ...props }) => {
  return (
    <AllTimeStatsTable data={data} />
  )
}

export default AllTimeStatsPage
