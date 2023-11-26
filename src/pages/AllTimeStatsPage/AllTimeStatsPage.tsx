import AllTimeStatsTable from "./AllTimeStatsTable"

type AllTimeStatsPageProps = {
  data: any;
};

const AllTimeStatsPage = ({ data, ...props }: AllTimeStatsPageProps) => {
  return (
    <div className="overflow-x-auto">
      {/* Doot */}
      <AllTimeStatsTable data={data} />
    </div>
  )
}

export default AllTimeStatsPage
