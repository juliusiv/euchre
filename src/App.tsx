import React from "react"

import concat from "lodash/concat"
import Select from "react-select"
import { useLocation, useHistory } from "react-router-dom";

import AllTime, { TournamentScores } from "data"

import { AllTimeStatsPage, TournamentPage } from "pages"


const App = () => {
  const history = useHistory();
  const location = useLocation();
  const hash = location.hash;

  const scoresKey = hash === "" ? "AllTime" : hash.slice(1);
  const data = scoresKey === "AllTime" ? AllTime : TournamentScores[scoresKey]

  const sortedScores = Object.entries(TournamentScores).sort((a, b) => (a[1].shortName > b[1].shortName) ? 1 : -1)
  const options = concat(
    [{ label: "All Time Scores", value: "AllTime" }],
    sortedScores.map(([key, value]) => ({ label: value.longName, value: key })
  ))

  const customSelectStyles = {
    option: (styles: any) => ({
      ...styles,
      cursor: 'pointer',
      color: "#1a202c",
      backgroundColor: null,
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#cbd5e0"
      }
    }),
    control: (styles: any) => ({
      ...styles,
      cursor: 'pointer',
    }),
  }

  const Red = ({ children }: { children: string }) => <span className="text-red-500">{children}</span>

  return (
    <div className="align-center bg-gray-100 text-gray-900 min-h-100vh flex flex-col items-center">
      <div className="w-10/12 max-w-3xl mx-auto flex flex-col">
        <header className="w-full font-bold mb-8 pt-4">
          <h1 className="text-4xl float-left">
            Euchre Stats
            <span className="text-xl ml-2">♠ <Red>♥</Red> ♦ <Red>♣</Red></span>
          </h1>
        </header>

        <Select
          options={options}
          defaultValue={options[0]}
          className="float-left w-64 mb-8"
          onChange={({ value }: any) => {
            if (value === scoresKey) return;

            history.push({ hash: value });
          }}
          styles={customSelectStyles}
        />
        
        {scoresKey === "AllTime"
          ? <AllTimeStatsPage data={data} />
          : <TournamentPage data={data.playerData} />
        }
      </div>
    </div>
  );
}

export default App;
