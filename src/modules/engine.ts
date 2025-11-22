export type Cell2D = {
  pos: [number, number];
  value: Player | '';
};

export type BoardSize = 3 | 4 | 5;
export const boardSizes: BoardSize[] = [3, 4, 5];
const DEFAULT_BOARD_SIZE: BoardSize = 3;

export enum Player {
  o = 'o',
  x = 'x',
}

export type PlayerKey = keyof typeof Player;
export const players: [PlayerKey, PlayerKey] = [Player.o, Player.x];

export enum Phase {
  prep = 'prep',
  play = 'play',
}

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

  board.cells.forEach((row, rowCount) => {
    row.forEach((cell, colCount) => {
      if (cell && cell.value !== '') {
        // add row tally
        if (tally[cell.value].row[rowCount] !== undefined) {
          tally[cell.value].row[rowCount] = tally[cell.value].row[rowCount] as number + 1;
        } else {
          tally[cell.value].row[rowCount] = 1;
        }

        // add column tally
        if (tally[cell.value].col[colCount] !== undefined) {
          tally[cell.value].col[colCount] = tally[cell.value].col[colCount] as number + 1;
        } else {
          tally[cell.value].col[colCount] = 1;
        }

        // add first diagonal tally
        if (rowCount === colCount) {
          if (tally[cell.value].dia[0] !== undefined) {
            tally[cell.value].dia[0] = tally[cell.value].dia[0] as number + 1;
          } else {
            tally[cell.value].dia[0] = 1;
          }
        }

        // add second diagonal tally
        if (rowCount + colCount === board.size - 1) {
          if (tally[cell.value].dia[1] !== undefined) {
            tally[cell.value].dia[1] = tally[cell.value].dia[1] as number + 1;
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
          return;
        }
      }
    });
  });

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

  return inpPlayers[Math.round(rand) % 2] as string;
}

export function generateBoard2D(
  inpBoardSize: BoardSize = DEFAULT_BOARD_SIZE,
  inpPlayers: [PlayerKey, PlayerKey] = players,
): Board2D {
  const boardSize = boardSizes.includes(inpBoardSize) ? inpBoardSize : DEFAULT_BOARD_SIZE;

  const cells: Cell2D[][] = new Array(boardSize).fill([]).map((_, rowIdx) => {
    return new Array(boardSize).fill([]).map((__, colIdx) => {
      return {
        pos: [rowIdx, colIdx],
        value: '',
      };
    });
  });

  return {
    cells,
    players: inpPlayers,
    size: boardSize,
  };
}
