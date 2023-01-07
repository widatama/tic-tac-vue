import { generateGameStat } from '@/modules/display';
import type { State } from './index';

const getBoard = (state: State) => state.board;
const getCells = (state: State) => state.cells;

const getGameStat = (state: State) => generateGameStat({
  winner: state.winner,
  gameTurn: state.gameTurn,
});

const getters = {
  getBoard,
  getCells,
  getGameStat,
};

export type Getters = typeof getters;

export default getters;
