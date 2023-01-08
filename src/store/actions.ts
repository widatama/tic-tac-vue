import type { ActionContext } from 'vuex';

import { getWinner2D, Phase } from '@/modules/engine';
import type { Board2D } from '@/modules/engine';
import type { State } from './index';

type Context = ActionContext<State, unknown>;

const newGame = ({ commit }: Context, inpBoardSize: number) => {
  commit('NEW_GAME', inpBoardSize);
  commit('UPDATE_PHASE', Phase.play);
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
  const winner = getWinner2D(state.board as Board2D);

  if (winner !== '') {
    commit('UPDATE_WINNER', winner);
    commit('UPDATE_PHASE', Phase.prep);
  }
};

const actions = {
  newGame,
  playerMoves2D,
  updateWinner2D,
};

export type Actions = typeof actions;

export default actions;
