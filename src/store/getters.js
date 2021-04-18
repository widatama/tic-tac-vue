import { generateGameStat } from '@/modules/display';

const getCells = (state) => state.cells;

const getGameStat = (state) => generateGameStat({ winner: state.winner, gameTurn: state.gameTurn });

const getters = {
  getCells,
  getGameStat,
};

export default getters;
