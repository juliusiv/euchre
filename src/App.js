import React, { useState } from 'react';
import parse from 'csv-parse/lib/sync'

import sortBy from 'lodash/sortBy'
import keys from 'lodash/keys'
import reduce from 'lodash/reduce'
import Select from 'react-select'

import YearlyData from './data'
import ScoresTable from "./ScoresTable"

const App = () => {
  const options = sortBy(keys(YearlyData)).map(value => {
    const shortSeason = value.slice(0, 1) === "S" ? "Summer" : "Winter"
    const year = value.slice(1)
    const label = `${shortSeason} ${year}`
    return { label, value }
  })
  const defaultCsv = YearlyData[options[0].value];
  const [csvData, setCsvData] = useState(defaultCsv);

  const castScore = (value, context) => {
    const isScore = !context.header && context.column.startsWith("game")
    return isScore ? parseInt(value.trim()) : value
  }
  const data = parse(csvData, {columns: true, cast: castScore }).map(
    datum => {
      const totalScore = reduce(datum, (result, value, key) => {
        if (!key.startsWith("game")) return result;
        return result + value;
      }, 0)

      const stats = { totalScore }
      return { stats, ...datum }
    }
  )

  const customSelectStyles = {
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      cursor: 'pointer',
      color: "#1a202c",
      backgroundColor: null,
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#cbd5e0"
      }
    }),
    control: (styles) => ({
      ...styles,
      cursor: 'pointer',
    }),
  }

  return (
    <div className="align-center bg-gray-100 text-gray-900 min-h-100vh flex flex-col items-center">
      <div className="w-7/12 flex flex-col">
        <header className="w-full font-bold mb-8">
          {/* <h1 className="text-4xl float-left">Euchre Stats ♠ ♡ ♦ ♧</h1> */}
          <h1 className="text-4xl float-left">
            Euchre Stats ♠ <span className="text-red-500">♥</span> ♦ <span className="text-red-500">♣</span>
          </h1>
          {/* ♠ ♥ ♦ ♣ */}
          {/* ♤	♡	♢	♧ */}
        </header>

        <Select
          options={options}
          value={options[0]}
          placeholder="Tournament"
          className="float-left w-64 mb-8"
          onChange={setCsvData}
          styles={customSelectStyles}
        />
        
        <ScoresTable data={data} />
      </div>
    </div>
  );
}

export default App;
