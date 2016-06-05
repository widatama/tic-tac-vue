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
  if(state.winner) {
    return displayXO(state.winner) + " wins";
  }
  else {
    return displayXO(state.gameTurn) + " turns";
  }
};
