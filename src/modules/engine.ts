export type Cell = {
  pos: number;
  value: string;
};

type PointTuple = [number, number, number];

const winningCombo: PointTuple[] = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkWinCondition(winningPosition: PointTuple, cellValues: string[]): boolean {
  if (cellValues[winningPosition[0]] !== '' && cellValues[winningPosition[0]] === cellValues[winningPosition[1]] && cellValues[winningPosition[1]] === cellValues[winningPosition[2]]) {
    return true;
  }

  return false;
}

function cellsFull(cells: Cell[]): boolean {
  return (cells.findIndex((cell) => cell.value === '') === -1);
}

export const players: [string, string] = ['x', 'o'];

export function getWinner(
  cells: Cell[],
  inpWinningConditions: PointTuple[] = winningCombo,
): string {
  const cellValues = cells.map((cell) => cell.value);

  for (let count = 0; count < inpWinningConditions.length; count += 1) {
    if (checkWinCondition(inpWinningConditions[count], cellValues)) {
      return cellValues[inpWinningConditions[count][0]];
    }
  }

  if (cellsFull(cells)) {
    return 'draw';
  }

  return '';
}

export function getFirstTurn(inpPlayers: [string, string] = players): string {
  const rand = Math.random() * 10;

  return inpPlayers[Math.round(rand) % 2];
}

export function generateCells(cellCount: number): Cell[] {
  const cells: Cell[] = [];

  for (let count = 0; count < cellCount; count += 1) {
    cells[count] = {
      pos: count + 1,
      value: '',
    };
  }

  return cells;
}
