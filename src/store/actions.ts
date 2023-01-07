import type { ActionContext } from 'vuex';

import { getWinner2D } from '@/modules/engine';
import type { State } from './index';

type Context = ActionContext<State, unknown>;

const newGame = ({ commit }: Context) => {
  commit('NEW_GAME');
};

const playerMoves2D = (
  { commit, dispatch, state }: Context,
  payload: { cellPosition: [number, number] },
) => {
  if (state.winner === '') {
    const newCell = {
      pos: payload.cellPosition,
      value: state.playerTurn,
    };

    commit('UPDATE_BOARD', newCell);
    commit('UPDATE_TURN');

    dispatch('updateWinner2D');
  }
};

const updateWinner2D = ({ commit, state }: Context) => {
  const winner = getWinner2D(state.board);

  if (winner !== '') {
    commit('UPDATE_WINNER', winner);
  }
};

const actions = {
  newGame,
  playerMoves2D,
  updateWinner2D,
};

export type Actions = typeof actions;

export default actions;
