import Vue from 'vue';

import { getFirstTurn, generateCells, players } from '../game/logic';

const NEW_GAME = state => {
  Vue.set(state, 'cells', generateCells(9));
  Vue.set(state, 'gameTurn', getFirstTurn());
  Vue.set(state, 'winner', '');
};

const UPDATE_CELLS = (state, newCell) => {
  Vue.set(state.cells, newCell.pos - 1, newCell);
};

const UPDATE_TURN = state => {
  if (state.gameTurn === players[0]) {
    Vue.set(state, 'gameTurn', players[1]);
  } else if (state.gameTurn === players[1]) {
    Vue.set(state, 'gameTurn', players[0]);
  }
};

const UPDATE_WINNER = (state, newWinner) => {
  Vue.set(state, 'winner', newWinner);
};

const mutations = {
  NEW_GAME,
  UPDATE_CELLS,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export default mutations;
