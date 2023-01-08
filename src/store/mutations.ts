import {
  generateBoard2D,
  getFirstTurn,
  Player,
} from '@/modules/engine';
import type { BoardSize, Cell2D } from '@/modules/engine';
import type { State } from './index';

const NEW_GAME = (state: State, inpBoardSize: number) => {
  state.board = generateBoard2D(inpBoardSize as BoardSize);
  state.playerTurn = getFirstTurn();
  state.winner = '';
};

const UPDATE_BOARD = (state: State, newCell: Cell2D) => {
  const [row, col] = newCell.pos;

  if (state.board?.cells) {
    state.board.cells[row][col] = newCell;
  }
};

const UPDATE_PHASE = (state: State, newPhase: string) => {
  state.phase = newPhase;
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
  UPDATE_PHASE,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export type Mutations = typeof mutations;

export default mutations;
