import Vuex from "vuex";
import Vue from "vue";

import {getFirstTurn, generateCells, players} from "../game/logic";

Vue.use(Vuex);

const state = {
  gameTurn: getFirstTurn(),
  cells: generateCells(9),
  winner: ""
};

const mutations = {
  NEW_GAME(state) {
    Vue.set(state, "cells", generateCells(9));
    Vue.set(state, "gameTurn", getFirstTurn());
    Vue.set(state, "winner", "");
  },
  UPDATE_CELLS(state, newCell) {
    let newCells = state.cells;

    newCells[newCell.pos - 1] = newCell;

    Vue.set(state, "cells", newCells);
  },
  UPDATE_TURN(state) {
    if(state.gameTurn === players[0]) {
      Vue.set(state, "gameTurn", players[1]);
    }
    else if(state.gameTurn === players[1]) {
      Vue.set(state, "gameTurn", players[0]);
    }
  },
  UPDATE_WINNER(state, newWinner) {
    Vue.set(state, "winner", newWinner);
  }
};

let store = new Vuex.Store({
  state,
  mutations
});

export default store;
