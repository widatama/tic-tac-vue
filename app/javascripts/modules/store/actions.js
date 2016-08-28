import {getWinner} from "../game/logic";

export const newGame = function({dispatch}) {
  dispatch("NEW_GAME");
};

export const playerMoves = function({dispatch, state}) {
  if(this.cell.value === "" && state.winner === "") {
    let newCell = this.cell;
    let winner = "";

    newCell.value = state.gameTurn;

    dispatch("UPDATE_CELLS", newCell);
    dispatch("UPDATE_TURN");

    winner = getWinner(state.cells);

    if(winner !== "") {
      dispatch("UPDATE_WINNER", winner);
    }
  }
};
