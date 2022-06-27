import React from "react"

import AllTimeStatsTable from "./AllTimeStatsTable"

type AllTimeStatsPageProps = {
  data: any;
};

const AllTimeStatsPage = ({ data, ...props }: AllTimeStatsPageProps) => {
  return (
    <div className="overflow-x-auto">
      <AllTimeStatsTable data={data} />
    </div>
  )
}

export default AllTimeStatsPage
