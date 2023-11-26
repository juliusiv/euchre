import reduce from 'lodash/reduce'

import { VictoryChart, VictoryLegend, VictoryLine } from "victory"

const Colors = [
  "#1a202c",  // black
  "#718096",  // gray
  "#c53030",  // red
  "#dd6b20",  // orange
  "#f6e05e",  // yellow
  "#b7791f",  // dark yellow
  "#c6f6d5",  // light green
  "#2f855a",  // green
  "#319795",  // teal
  "#90cdf4",  // light blue
  "#3182ce",  // blue
  "#4c51bf",  // indigo
  "#805ad5",  // purple
  "#ed64a6",  // pink,
  "#7b341e",  // brown

]

type LineData = {
  name: string;
  color: string;
  cumulativeScores: { x: number, y: number };
};

const ProgressionChart = ({ data }: { data: any }) => {
  const lineData: LineData[] = data.map((datum: any, i: number) => {
    const cumulativeScores = reduce(datum.orderedGames, (result, value, index: number) => {
      result.push({ x: index + 1, y: result[index].y + value })
      return result
    }, [{ x: 0, y: 0 }])

    return {
      name: datum.name,
      cumulativeScores,
      color: Colors[i]
    }
  });

  return (
    <div>
      <h3 className="text-3xl font-bold pb-4">Scores Over Time</h3>

      <VictoryChart
        width={550}
        height={300}
        padding={{ top: 0, left: 35, right: 0, bottom: 35 }}
      >
        <VictoryLegend x={60} y={20}
          orientation="horizontal"
          gutter={15}
          style={{ border: { stroke: "black" }, labels: {fontSize: 10 } }}
          itemsPerRow={4}
          data={lineData.map(({ name, color }: { name: string; color: string }) => {
            return { name, symbol: { fill: color } }
          })}
        />
        {lineData.map(({ name, color, cumulativeScores }: LineData) => {
          return (
            <VictoryLine
              key={name}
              style={{
                data: { stroke: color }
              }}
              data={cumulativeScores as any}
            />
          )
        })}
      </VictoryChart>
    </div>
  )
}

export default ProgressionChart
