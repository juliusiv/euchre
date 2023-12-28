import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { match } from 'ts-pattern';
import { PlayerAllTimeData } from '../../data/types';

type ScoresTableProps = {
  data: PlayerAllTimeData[];
};

const columnHelper = createColumnHelper<PlayerAllTimeData>();

const ScoresTable = ({ data }: ScoresTableProps) => {
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
      header: "🥇",
    }),
    columnHelper.accessor("secondPlaceFinishes", {
      header: "🥈",
    }),
    columnHelper.accessor("thirdPlaceFinishes", {
      header: "🥉",
    }),
    columnHelper.accessor("averagePlace", {
      header: "Avg Place",
    }),
  ];

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

  return (
    <table className="w-full border border-gray-900">
      <thead className=" -mt-8 h-8 bg-gray-400">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr>
            {headerGroup.headers.map((header) => {
              const sortDirection = header.column.getIsSorted();
              const sortLabel = match(sortDirection)
                .with("asc", () => ' ▲')
                .with("desc", () => ' ▼')
                .otherwise(() => '');

              return (
                <th
                  className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"
                >
                  {header.column.columnDef.header}
                  <span>{sortLabel}</span>
                </th>
              )
            })}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100">
              {row.getVisibleCells().map((cell) => {
                return (
                  <td className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
