import { generateGameStat } from '../helper/display';

const getCells = state => state.cells;

const getGameStat = state => generateGameStat(state);

const getters = {
  getCells,
  getGameStat,
};

export default getters;
