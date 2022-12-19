import type { ActionContext } from 'vuex';

import { getWinner } from '@/modules/engine';
import type { State } from './index';

type Context = ActionContext<State, unknown>;

const newGame = ({ commit }: Context) => {
  commit('NEW_GAME');
};

const playerMoves = ({ commit, dispatch, state }: Context, payload: { cellPosition: number }) => {
  if (state.winner === '') {
    const newCell = {
      pos: payload.cellPosition,
      value: state.gameTurn,
    };

    commit('UPDATE_CELLS', newCell);
    commit('UPDATE_TURN');

    dispatch('updateWinner');
  }
};

const updateWinner = ({ commit, state }: Context) => {
  const winner = getWinner(state.cells);

  if (winner !== '') {
    commit('UPDATE_WINNER', winner);
  }
};

const actions = {
  newGame,
  playerMoves,
  updateWinner,
};

export type Actions = typeof actions;

export default actions;
