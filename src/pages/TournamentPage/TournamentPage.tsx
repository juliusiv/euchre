import ScoresTable from "./ScoresTable"
// import ProgressionChart from "./ProgressionChart"

type TournamentPageProps = {
  data: any;
};

const TournamentPage = ({ data, ...props }: TournamentPageProps) => {
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
