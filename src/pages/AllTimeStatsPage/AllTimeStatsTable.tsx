import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

type ScoresTableProps = {
  data: any;
  className?: string;
};

const columnHelper = createColumnHelper<any>();

const ScoresTable = ({ data, className, ...props }: ScoresTableProps) => {
  const columns = [
    columnHelper.accessor("name", {
      header: "Player",
    }),
    columnHelper.accessor("totalGamesWon", {
      header: "Games Won",
    }),
    columnHelper.accessor("eloScore", {
      header: "Elo Score",
    }),
    columnHelper.accessor("firstPlaceFinishes", {
      // header: "1st",
      header: "🥇",
    }),
    columnHelper.accessor("secondPlaceFinishes", {
      // header: "2nd",
      header: "🥈",
    }),
    columnHelper.accessor("thirdPlaceFinishes", {
      // header: "3rd",
      header: "🥉",
    }),
    columnHelper.accessor("averagePlace", {
      header: "Average Place",
    }),
  ];
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Player",
  //       accessor: "name"
  //     },
  //     {
  //       Header: "Games Won",
  //       accessor: "totalGamesWon",
  //     },
  //     {
  //       Header: "Elo Score",
  //       accessor: "eloScore"
  //     },
  //     {
  //       Header: "🥇",
  //       accessor: "firstPlaceFinishes",
  //     },
  //     {
  //       Header: "🥈",
  //       accessor: "secondPlaceFinishes",
  //     },
  //     {
  //       Header: "🥉",
  //       accessor: "thirdPlaceFinishes",
  //     },
  //     {
  //       Header: "Average Place",
  //       accessor: "averagePlace",
  //     },
  //   ],
  //   []
  // )

  const table = useReactTable({
    columns,
    data: Object.values(data),
    initialState: {
      sorting: [{ id: "totalGamesWon", desc: true }],
    },
    enableSortingRemoval: false,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel()
  })
  // const tableInstance = useTable({ columns, data: Object.values(data), initialState }, useSortBy)
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  // } = tableInstance

  return (
    // apply the table props
    <table className="w-full border border-gray-900">
      <thead className=" -mt-8 h-8 bg-gray-400">
        {// Loop over the header rows
        table.getHeaderGroups().map((headerGroup) => (
          // Apply the header row props
          <tr>
            {// Loop over the headers in each row
            headerGroup.headers.map((column: any) => (
              // Apply the header cell props
              <th
                // {...column.getHeaderProps(column.getSortByToggleProps())}
                className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"
              >
                {/* column.render('Header') */}
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
        table.getRowModel().rows.map((row) => {
          // Prepare the row for display
          // prepareRow(row)
          return (
            // Apply the row props
            <tr
              // {...row.getRowProps()}
              className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"
            >
              {// Loop over the rows cells
              row.getVisibleCells().map((cell) => {
                // Apply the cell props
                return (
                  <td className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r">
                    {/* // Render the cell contents */}
                    {/* {cell.render('Cell')} */}
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
