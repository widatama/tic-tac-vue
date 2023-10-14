export type Cell2D = {
  pos: [number, number];
  value: Player | '';
};

export type BoardSize = 3 | 4 | 5;
export const boardSizes: BoardSize[] = [3, 4, 5];
const DEFAULT_BOARD_SIZE: BoardSize = 3;

/* eslint-disable no-unused-vars */
export enum Player {
  o = 'o',
  x = 'x',
}
/* eslint-enable */

export type PlayerKey = keyof typeof Player;
export const players: [PlayerKey, PlayerKey] = [Player.o, Player.x];

/* eslint-disable no-unused-vars */
export enum Phase {
  prep = 'prep',
  play = 'play',
}
/* eslint-enable */

/*
 * tally = {
 *  o: { col: { 1: 1, 2: 1 }, row: {}, dia: {} },
 *  x: { col: { 1: 1, 2: 1 }, row: { 0: 1 }, dia: {} },
 * }
 */
type TallyItem = Record<number, number>;
type Tally = Record<Player, {
  col: TallyItem;
  row: TallyItem;
  dia: TallyItem;
}>;

export type Board2D = {
  cells: Cell2D[][];
  players: [PlayerKey, PlayerKey];
  size: BoardSize;
};

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

export function getWinner2D(
  board: Board2D,
): PlayerKey | '' | 'draw' {
  const winner = checkWinCondition2D(board);

  if (winner === '' && board2DFull(board)) {
    return 'draw';
  }

  return winner;
}

export function getFirstTurn(inpPlayers: [string, string] = players): string {
  const rand = Math.random() * 10;

  return inpPlayers[Math.round(rand) % 2];
}

export function generateBoard2D(
  inpBoardSize: BoardSize = DEFAULT_BOARD_SIZE,
  inpPlayers: [PlayerKey, PlayerKey] = players,
): Board2D {
  const cells: Cell2D[][] = [];
  const boardSize = boardSizes.includes(inpBoardSize) ? inpBoardSize : DEFAULT_BOARD_SIZE;

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
