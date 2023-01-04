import {
  generateBoard2D,
  getFirstTurn,
  generateCells,
  Player,
} from '@/modules/engine';
import type { Cell, Cell2D } from '@/modules/engine';
import type { State } from './index';

const NEW_GAME = (state: State) => {
  state.board = generateBoard2D();
  state.cells = generateCells(9);
  state.gameTurn = getFirstTurn();
  state.winner = '';
};

const UPDATE_CELLS = (state: State, newCell: Cell) => {
  state.cells[newCell.pos - 1] = newCell;
};

const UPDATE_BOARD = (state: State, newCell: Cell2D) => {
  const [row, col] = newCell.pos;

  state.board.cells[row][col] = newCell;
};

const UPDATE_TURN = (state: State) => {
  if (state.gameTurn === Player.o) {
    state.gameTurn = Player.x;
  } else {
    state.gameTurn = Player.o;
  }
};

const UPDATE_WINNER = (state: State, newWinner: string) => {
  state.winner = newWinner;
};

const mutations = {
  NEW_GAME,
  UPDATE_BOARD,
  UPDATE_CELLS,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export type Mutations = typeof mutations;

export default mutations;
