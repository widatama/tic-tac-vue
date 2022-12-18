import { createStore } from 'vuex';

import { getFirstTurn, generateCells } from '@/modules/engine';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  gameTurn: getFirstTurn(),
  cells: generateCells(9),
  winner: '',
};

export type State = typeof state;

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
