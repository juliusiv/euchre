import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'

const ScoresTable = ({ data, className, ...props }) => {
  // Dynamically get the game columns because there may be 11 games one year and 15 the next.
  // const gameColumns = Object.entries(data[0].orderedGames).reduce((result, [key, _value]) => {
  const gameColumns = Object.entries(data[0].orderedGames).reduce((result, [key, _value]) => {
    const gameNumber = parseInt(key) + 1
    result[key] = {Header: `G${gameNumber}`, accessor: datum => datum.orderedGames[key]}
    return result;
  }, [])
  const columns = useMemo(
    () => [
      {
        Header: "Player",
        accessor: "name"
      },
      {
        Header: "Total",
        accessor: "stats.totalScore",
        id: "totalScore"
      },
      ...gameColumns
    ],
    // The dependency is `data` instead of `gameColumns` because the latter is derived from the
    // former. Without this, we'll hit a maximum update depth error.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  const initialState = { sortBy: [{ id: "totalScore", desc: true }]}
  const tableInstance = useTable({ columns, data, initialState, disableSortRemove: true }, useSortBy)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    // apply the table props
    <table {...getTableProps()} className="w-all border border-gray-900">
      <thead className=" -mt-8 h-8 bg-gray-400">
        {// Loop over the header rows
        headerGroups.map(headerGroup => (
          // Apply the header row props
          <tr {...headerGroup.getHeaderGroupProps()}>
            {// Loop over the headers in each row
            headerGroup.headers.map(column => (
              // Apply the header cell props
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"
              >
                {// Render the header
                column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        rows.map(row => {
          // Prepare the row for display
          prepareRow(row)
          return (
            // Apply the row props
            <tr
              {...row.getRowProps()}
              className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"
            >
              {// Loop over the rows cells
              row.cells.map(cell => {
                // Apply the cell props
                return (
                  <td {...cell.getCellProps()} className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r">
                    {// Render the cell contents
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  ) 
}

export default ScoresTable
