import { generateGameStat } from '@/modules/display';
import { Phase } from '@/modules/engine';
import type { State } from './index';

const getBoard = (state: State) => state.board;
const getBoardSizes = (state: State) => state.boardSizes;
const getGameStat = (state: State) => {
  return generateGameStat({
    winner: state.winner,
    playerTurn: state.playerTurn,
  });
};
const isPrep = (state: State) => state.phase === Phase.prep;

const getters = {
  getBoard,
  getBoardSizes,
  getGameStat,
  isPrep,
};

export type Getters = typeof getters;

export default getters;
