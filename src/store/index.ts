import { createStore } from 'vuex';

import type { Board2D } from '@/modules/engine';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

type State = {
  board?: Board2D,
  playerTurn?: string,
  winner?: string,
};

const state: State = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
