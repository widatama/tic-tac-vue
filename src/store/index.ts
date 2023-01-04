import { createStore } from 'vuex';

import { getFirstTurn, generateBoard2D, generateCells } from '@/modules/engine';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  board: generateBoard2D(),
  cells: generateCells(9),
  gameTurn: getFirstTurn(),
  winner: '',
};

export type State = typeof state;

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
