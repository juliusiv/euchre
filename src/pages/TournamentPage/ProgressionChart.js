import React, { useMemo } from "react"
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

const ProgressionChart = ({ data, ...props }) => {
  const lineData = useMemo(() => data.map((datum, i) => {
    const cumulativeScores = reduce(datum.orderedGames, (result, value, index) => {
      result.push({ x: index + 1, y: result[index].y + value })
      return result
    }, [{ x: 0, y: 0 }])

    return {
      name: datum.name,
      cumulativeScores,
      color: Colors[i]
    }
  }), [data])

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
          data={lineData.map(({ name, color }) => {
            return { name, symbol: { fill: color } }
          })}
        />
        {lineData.map(({ name, color, cumulativeScores }) => {
          return (
            <VictoryLine
              key={name}
              style={{
                data: { stroke: color }
              }}
              data={cumulativeScores}
            />
          )
        })}
      </VictoryChart>
    </div>
  )
}

export default ProgressionChart
