import { generateGameStat } from '@/modules/display';
import type { State } from './index';

const getBoard = (state: State) => state.board;

const getGameStat = (state: State) => generateGameStat({
  winner: state.winner,
  playerTurn: state.playerTurn,
});

const getters = {
  getBoard,
  getGameStat,
};

export type Getters = typeof getters;

export default getters;
