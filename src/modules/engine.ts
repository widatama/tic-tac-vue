export type Cell = {
  pos: number;
  value: string;
};

export type Cell2D = {
  pos: [number, number];
  value: Player | '';
};

export type BoardSize = 3 | 4 | 5;

// export type Player = 'o' | 'x';

export enum Player {
  o = 'o',
  x = 'x',
}

export type PlayerKey = keyof typeof Player;

/*
 * tally = {
 *  o: { col: { 1: 1, 2: 1 }, row: {}, dia: {} },
 *  x: { col: { 1: 1, 2: 1 }, row: { 0: 1 }, dia: {} },
 * }
 */
export type TallyItem = Record<number, number>;
export type Tally = Record<Player, {
  col: TallyItem;
  row: TallyItem;
  dia: TallyItem;
}>;

export type Board2D = {
  cells: Cell2D[][];
  players: [PlayerKey, PlayerKey];
  size: BoardSize;
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

function checkWinCondition2D(board: Board2D): PlayerKey | '' {
  const tally: Tally = {
    [Player.o]: { col: {}, dia: {}, row: {} },
    [Player.x]: { col: {}, dia: {}, row: {} },
  };
  let winner: Player | '' = '';

  for (let rowCount = 0; rowCount < board.size; rowCount += 1) {
    for (let colCount = 0; colCount < board.size; colCount += 1) {
      const cell = board.cells[rowCount][colCount];

      if (cell.value !== '') {
        // add row tally
        if (tally[cell.value].row && tally[cell.value].row[rowCount] !== undefined) {
          tally[cell.value].row[rowCount] += 1;
        } else {
          tally[cell.value].row[rowCount] = 1;
        }

        // add column tally
        if (tally[cell.value].col[colCount] !== undefined) {
          tally[cell.value].col[colCount] += 1;
        } else {
          tally[cell.value].col[colCount] = 1;
        }

        // add first diagonal tally
        if (rowCount === colCount) {
          if (tally[cell.value].dia[0] !== undefined) {
            tally[cell.value].dia[0] += 1;
          } else {
            tally[cell.value].dia[0] = 1;
          }
        }

        // add second diagonal tally
        if (rowCount + colCount === board.size - 1) {
          if (tally[cell.value].dia[1] !== undefined) {
            tally[cell.value].dia[1] += 1;
          } else {
            tally[cell.value].dia[1] = 1;
          }
        }

        const colWin = tally[cell.value].col[colCount] === board.size;
        const dia0Win = tally[cell.value].dia[0] === board.size;
        const dia1Win = tally[cell.value].dia[1] === board.size;
        const rowWin = tally[cell.value].row[rowCount] === board.size;

        if (colWin || dia0Win || dia1Win || rowWin) {
          winner = cell.value;
          break;
        }
      }
    }
  }

  return winner;
}

function cellsFull(cells: Cell[]): boolean {
  return (cells.findIndex((cell) => cell.value === '') === -1);
}

function board2DFull(board: Board2D): boolean {
  let result = true;

  board.cells.forEach((row) => {
    row.forEach((cell) => {
      if (cell.value === '') {
        result = false;
      }
    });
  });

  return result;
}

export const players: [PlayerKey, PlayerKey] = ['o', 'x'];

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

export function getWinner2D(
  board: Board2D,
): PlayerKey | '' | 'draw' {
  if (board2DFull(board)) {
    return 'draw';
  }

  return checkWinCondition2D(board);
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

export const boardSizes: BoardSize[] = [3, 4, 5];

export function generateBoard2D(boardSize: BoardSize = 3, inpPlayers = players): Board2D {
  const cells: Cell2D[][] = [];

  for (let rowCount = 0; rowCount < boardSize; rowCount += 1) {
    cells[rowCount] = [];
    for (let colCount = 0; colCount < boardSize; colCount += 1) {
      cells[rowCount][colCount] = {
        pos: [rowCount, colCount],
        value: '',
      };
    }
  }

  return {
    cells,
    players: inpPlayers,
    size: boardSize,
  };
}
