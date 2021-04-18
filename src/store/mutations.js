import { getFirstTurn, generateCells, players } from '@/modules/engine';

const NEW_GAME = (state) => {
  state.cells = generateCells(9);
  state.gameTurn = getFirstTurn();
  state.winner = '';
};

const UPDATE_CELLS = (state, newCell) => {
  state.cells[newCell.pos - 1] = newCell;
};

const UPDATE_TURN = (state) => {
  if (state.gameTurn === players[0]) {
    state.gameTurn = players[1];
  } else if (state.gameTurn === players[1]) {
    state.gameTurn = players[0];
  }
};

const UPDATE_WINNER = (state, newWinner) => {
  state.winner = newWinner;
};

const mutations = {
  NEW_GAME,
  UPDATE_CELLS,
  UPDATE_TURN,
  UPDATE_WINNER,
};

export default mutations;
