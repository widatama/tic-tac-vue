import { getFirstTurn, generateCells, players } from '@/modules/engine';
import type { Cell } from '@/modules/engine';
import type { State } from './index';

const NEW_GAME = (state: State) => {
  state.cells = generateCells(9);
  state.gameTurn = getFirstTurn();
  state.winner = '';
};

const UPDATE_CELLS = (state: State, newCell: Cell) => {
  state.cells[newCell.pos - 1] = newCell;
};

const UPDATE_TURN = (state: State) => {
  if (state.gameTurn === players[0]) {
    [, state.gameTurn] = players;
  } else if (state.gameTurn === players[1]) {
    [state.gameTurn] = players;
  }
};

const UPDATE_WINNER = (state: State, newWinner: string) => {
  state.winner = newWinner;
};

const mutations = {
  NEW_GAME,
  UPDATE_CELLS,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export type Mutations = typeof mutations;

export default mutations;
