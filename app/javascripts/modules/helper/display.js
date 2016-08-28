import {players} from "../game/logic";

export const displayXO = function(value) {
  let display = "";

  if (value === players[0]) {
    display = "✖";
  }
  else if (value === players[1]) {
    display = "●";
  }

  return display;
};

export const generateGameStat = function(state) {
  if(state.winner && state.winner !== "draw") {
    return {
      player: displayXO(state.winner),
      value: state.winner,
      label: "wins"
    };
  }
  else if(state.winner && state.winner === "draw") {
    return {
      player: displayXO(state.winner),
      value: state.winner,
      label: "Draw"
    };
  }
  else {
    return {
      player: displayXO(state.gameTurn),
      value: state.gameTurn,
      label: "turns"
    };
  }
};
