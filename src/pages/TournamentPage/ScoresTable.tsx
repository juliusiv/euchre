import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, createColumnHelper, ColumnDef } from '@tanstack/react-table'
import { match } from 'ts-pattern';
import { PlayerTournamentData } from '../../data/types';

type ScoresTableProps = {
  data: PlayerTournamentData[];
};

const columnHelper = createColumnHelper<PlayerTournamentData>();

const ScoresTable = ({ data }: ScoresTableProps) => {
  // Dynamically get the game columns because there may be 11 games one year and 15 the next.
  const numGames = data[0].orderedGames.length;
  const gameColumns: ColumnDef<PlayerTournamentData, number>[] = [];

  for (let i = 0; i < numGames; i++) {
    const gameNumber = i + 1;
    const columnDef = columnHelper.accessor((row) => row.orderedGames[i], {
      header: `G${gameNumber}`,
      id: String(gameNumber)
    });
    gameColumns.push(columnDef);
  };

  const columns = [
    columnHelper.accessor("name", {
      header: "Player"
    }),
    columnHelper.accessor("stats.totalScore", {
      header: "Total",
      id: "totalScore"
    }),
    ...gameColumns
  ];

  const table = useReactTable({
    columns,
    data,
    initialState: {
      sorting: [{ id: "totalScore", desc: true }],
    },
    enableSortingRemoval: false,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className="w-all border border-gray-900">
      <thead className=" -mt-8 h-8 bg-gray-400">
        {table.getHeaderGroups().map(headerGroup => (
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
        {table.getRowModel().rows.map(row => {
          return (
            <tr
              className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"
            >
              {row.getVisibleCells().map(cell => {
                return (
                  <td
                    className="pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r">
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
