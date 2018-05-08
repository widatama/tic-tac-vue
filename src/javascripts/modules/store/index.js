import Vuex from 'vuex';
import Vue from 'vue';

import { getFirstTurn, generateCells } from '../game/logic';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  gameTurn: getFirstTurn(),
  cells: generateCells(9),
  winner: '',
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
