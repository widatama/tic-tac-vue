import {generateGameStat} from "../helper/display";

export const getCells = function(state) {
  return state.cells;
};

export const getGameStat = function(state) {
  return generateGameStat(state);
};
