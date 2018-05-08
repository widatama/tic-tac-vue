const winningCombo = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinCondition = (winningPosition, cellValues) => {
  if (cellValues[winningPosition[0]] !== '' && cellValues[winningPosition[0]] === cellValues[winningPosition[1]] && cellValues[winningPosition[1]] === cellValues[winningPosition[2]]) {
    return true;
  }

  return false;
};

const cellsFull = cells => (cells.filter(cell => cell.value === '').length === 0);

export const players = ['x', 'o'];

export const getWinner = cells => {
  const cellValues = cells.map(cell => cell.value);

  for (let count = 0; count < winningCombo.length; count += 1) {
    if (checkWinCondition(winningCombo[count], cellValues)) {
      return cellValues[winningCombo[count][0]];
    }
  }

  if (cellsFull(cells)) {
    return 'draw';
  }

  return '';
};

export const getFirstTurn = () => {
  const rand = Math.random() * 10;

  return players[Math.round(rand) % 2];
};

export const generateCells = cellCount => {
  if (typeof cellCount !== 'number') {
    throw new TypeError('generateCells() argument must be a number');
  }

  const cells = [];

  for (let count = 0; count < cellCount; count += 1) {
    cells[count] = {
      pos: count + 1,
      value: '',
    };
  }

  return cells;
};
