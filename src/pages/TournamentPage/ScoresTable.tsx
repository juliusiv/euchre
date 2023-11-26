// import React, { useMemo } from 'react'
import { useReactTable, getCoreRowModel, getSortedRowModel, Column, flexRender, createColumnHelper } from '@tanstack/react-table'

type ScoresTableProps = {
  data: any;
  className?: string;
};

const columnHelper = createColumnHelper<any>()

const ScoresTable = ({ data, className, ...props }: ScoresTableProps) => {
  // Dynamically get the game columns because there may be 11 games one year and 15 the next.
  const numGames = data[0].orderedGames.length;
  // const gameColumns: Column<any>[] = [];
  // for (let i = 0; i < numGames; i++) {
  //   const gameNumber = i + 1;
  //   const columnHeader = {Header: `G${gameNumber}`, accessor: (datum: any) => datum.orderedGames[i]};
  //   // gameColumns.push(columnHeader);
  //   gameColumns.push(columnHelper.accessor((datum: any) => datum.orderedGames[i], {
  //     header: () => `G${gameNumber}`,
  //     id: String(gameNumber)
  //   }));
  // };
  const columns = [
    columnHelper.accessor("name", {
      header: "Player"
    }),
    columnHelper.accessor("stats.totalScore", {
      header: "Total"
    }),
    // {
    //   Header: "Player",
    //   accessor: "name"
    // },
    // {
    //   Header: "Total",
    //   accessor: "stats.totalScore",
    //   id: "totalScore"
    // },
    // {
    //   Header: "Player",
    //   accessor: "name"
    // },
    // {
    //   Header: "Total",
    //   accessor: "stats.totalScore",
    //   id: "totalScore"
    // },
    // ...gameColumns
  ];
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Player",
  //       accessor: "name"
  //     },
  //     {
  //       Header: "Total",
  //       accessor: "stats.totalScore",
  //       id: "totalScore"
  //     },
  //     ...gameColumns
  //   ],
  //   // The dependency is `data` instead of `gameColumns` because the latter is derived from the
  //   // former. Without this, we'll hit a maximum update depth error.
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [data]
  // )

  const table = useReactTable({
    columns,
    data,
    initialState: {
      sorting: [{ id: "totalScore", desc: true }],
      // columnOrder: [{ id: "totalScore", desc: true }]
    },
    enableSortingRemoval: false,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel()
  });
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   getHeaderGroups,
  //   // rows,
  //   prepareRow,
  // } = table;
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = tableInstance;

  return (
    // apply the table props
    <table className="w-all border border-gray-900">
      <thead className=" -mt-8 h-8 bg-gray-400">
        {// Loop over the header rows
        table.getHeaderGroups().map(headerGroup => (
          // Apply the header row props
          <tr>
            {// Loop over the headers in each row
            headerGroup.headers.map((column: any) => (
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
      <tbody>
        {// Loop over the table rows
        table.getRowModel().rows.map(row => {
          // Prepare the row for display
          // prepareRow(row)
          return (
            // Apply the row props
            <tr
              // {...row.getRowProps()}
              className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"
            >
              {// Loop over the rows cells
              row.getVisibleCells().map(cell => {
                // Apply the cell props
                return (
                  <td
                    // {...cell.getCellProps()}
                    className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r">
                    {/* // Render the cell contents */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {/* cell.render('Cell') */}
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
