import { createStore } from 'vuex';

import { boardSizes, Phase } from '@/modules/engine';
import type { Board2D, BoardSize } from '@/modules/engine';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export type State = {
  board?: Board2D;
  boardSizes: BoardSize[];
  phase: string;
  playerTurn: string;
  winner: string;
};

const state: State = {
  boardSizes,
  phase: Phase.prep,
  playerTurn: '',
  winner: '',
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
