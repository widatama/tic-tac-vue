import { generateGameStat } from '@/modules/display';
import type { State } from './index';

const getCells = (state: State) => state.cells;

const getGameStat = (state: State) => generateGameStat({
  winner: state.winner,
  gameTurn: state.gameTurn,
});

const getters = {
  getCells,
  getGameStat,
};

export type Getters = typeof getters;

export default getters;
