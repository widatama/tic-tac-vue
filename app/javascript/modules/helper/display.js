export const displayXO = function(value) {
  let display = "";

  if (value === "x") {
    display = "✖";
  }
  else if (value === "o") {
    display = "●";
  }

  return display;
};

export const displayStat = function(state) {
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
