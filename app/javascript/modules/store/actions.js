import {getWinner} from "../game/logic";

export const playerMoves = function({dispatch, state}) {
  if(this.cell.value === "" && state.winner === "") {
    let newCell = this.cell;

    newCell.value = state.gameTurn;

    dispatch("UPDATE_CELLS", newCell);
    dispatch("UPDATE_TURN");
    dispatch("UPDATE_WINNER", getWinner(state.cells));
  }
};
