const winningCombo = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const checkWinCondition = function(winningPosition, cellValues) {
  if(cellValues[winningPosition[0]] !== "" && cellValues[winningPosition[0]] === cellValues[winningPosition[1]] && cellValues[winningPosition[1]] === cellValues[winningPosition[2]]) {
    return true;
  }
  else {
    return false;
  }
};

export const players = ["x", "o"];

export const getWinner = function(cells) {
  let count = 0;
  let cellValues = cells.map((cell) => {return cell.value;});

  for(; count < winningCombo.length; count++) {
    if(checkWinCondition(winningCombo[count], cellValues)) {
      return cellValues[winningCombo[count][0]];
    }
  }

  return "";
};

export const getFirstTurn = function() {
  let rand = Math.random() * 10;

  return players[Math.round(rand) % 2];
};

export const generateCells = function(cellCount) {
  let cells = [];
  let count = 0;

  for (;count < cellCount; count++) {
    cells[count] = {
      pos: count + 1,
      value: ""
    };
  }

  return cells;
};
