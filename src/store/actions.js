import { getWinner } from '@/modules/engine';

const newGame = ({ commit }) => {
  commit('NEW_GAME');
};

const playerMoves = ({ commit, dispatch, state }, payload) => {
  if (state.winner === '') {
    const newCell = {
      pos: payload.cellPosition,
      value: state.gameTurn,
    };

    commit('UPDATE_CELLS', newCell);
    commit('UPDATE_TURN');

    dispatch('updateWinner');
  }
};

const updateWinner = ({ commit, state }) => {
  const winner = getWinner(state.cells);

  if (winner !== '') {
    commit('UPDATE_WINNER', winner);
  }
};

const actions = {
  newGame,
  playerMoves,
  updateWinner,
};

export default actions;
