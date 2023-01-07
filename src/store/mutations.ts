import {
  generateBoard2D,
  getFirstTurn,
  Player,
} from '@/modules/engine';
import type { Cell2D } from '@/modules/engine';
import type { State } from './index';

const NEW_GAME = (state: State) => {
  state.board = generateBoard2D();
  state.playerTurn = getFirstTurn();
  state.winner = '';
};

const UPDATE_BOARD = (state: State, newCell: Cell2D) => {
  const [row, col] = newCell.pos;

  state.board.cells[row][col] = newCell;
};

const UPDATE_TURN = (state: State) => {
  if (state.playerTurn === Player.o) {
    state.playerTurn = Player.x;
  } else {
    state.playerTurn = Player.o;
  }
};

const UPDATE_WINNER = (state: State, newWinner: string) => {
  state.winner = newWinner;
};

const mutations = {
  NEW_GAME,
  UPDATE_BOARD,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export type Mutations = typeof mutations;

export default mutations;
