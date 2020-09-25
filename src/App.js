import React, { useState } from 'react'

import concat from 'lodash/concat'
import Select from 'react-select'

import AllTime, { TournamentScores } from 'data'

import { AllTimeStatsPage, TournamentPage } from "pages"

const App = () => {
  const [scoresKey, setScoresKey] = useState("AllTime")
  const data = scoresKey === "AllTime" ? AllTime : TournamentScores[scoresKey]

  const sortedScores = Object.entries(TournamentScores).sort((a, b) => (a.color > b.color) ? 1 : -1)
  const options = concat(
    [{ label: "All Time Scores", value: "AllTime" }],
    sortedScores.map(([key, value]) => ({ label: value.longName, value: key })
  ))

  const customSelectStyles = {
    option: (styles) => ({
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

  const Red = ({ children }) => <span className="text-red-500">{children}</span>

  return (
    <div className="align-center bg-gray-100 text-gray-900 min-h-100vh flex flex-col items-center">
      <div className="w-7/12 flex flex-col">
        <header className="w-full font-bold mb-8 pt-4">
          <h1 className="text-4xl float-left">
            Euchre Stats ♠ <Red>♥</Red> ♦ <Red>♣</Red>
          </h1>
        </header>

        <Select
          options={options}
          defaultValue={options[0]}
          className="float-left w-64 mb-8"
          onChange={({ value }) => setScoresKey(value)}
          styles={customSelectStyles}
        />
        
        {scoresKey === "AllTime"
          ? <AllTimeStatsPage data={data} />
          : <TournamentPage data={data.allPlayerData} />
        }
      </div>
    </div>
  );
}

export default App;
