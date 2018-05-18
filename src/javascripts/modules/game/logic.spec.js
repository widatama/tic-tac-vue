import tape from 'tape';

import { players, getWinner, getFirstTurn, generateCells } from './logic';

tape('Game logic', (tape) => {

  tape.test('players', (assert) => {
    assert.equal(players.length, 2, 'Make sure there are only two players');
    assert.deepEqual(players, ['x', 'o'], 'Returns a list of players');

    assert.end();
  });

  tape.test('getFirstTurn', (assert) => {
    assert.ok(getFirstTurn(), 'Returns a player');

    assert.end();
  });

  tape.test('generateCells', (assert) => {
    assert.throws(generateCells, 'Throws type error when argument is not a number');

    assert.equal(generateCells(1).length, 1, 'Returns an array with the length specified by the argument');

    assert.end();
  });

  tape.test('getWinner', (assert) => {
    const emptyCells = generateCells(9);
    const winningCells = generateCells(9);

    winningCells[0].value = 'o';
    winningCells[1].value = 'o';
    winningCells[2].value = 'o';

    assert.equal(getWinner(emptyCells), '', 'Returns empty string if there is no winner');

    assert.equal(getWinner(winningCells), 'o', 'Returns a winner based on the game rules');

    assert.end();
  });
});
