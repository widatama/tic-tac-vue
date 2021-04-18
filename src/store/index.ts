import { createStore } from 'vuex';

import { getFirstTurn, generateCells } from '@/modules/engine';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  state: {
    gameTurn: getFirstTurn(),
    cells: generateCells(9),
    winner: '',
  },
  getters,
  mutations,
  actions,
});
