import tape from 'tape';

import { displayXO, generateGameStat } from '../../../src/javascripts/modules/helper/display';

tape('Display helper', (tape) => {

  tape.test('displayXO', (assert) => {
    assert.equal(displayXO('x'), '✖', 'Displays ✖ if x');
    assert.equal(displayXO('o'), '●', 'Displays ● if o');
    assert.equal(displayXO(''), '', 'Displays nothing');

    assert.end();
  });

  tape.test('generateGameStat', (assert) => {
    const state1 = { winner: 'x' };
    const state2 = { winner: 'draw' };
    const state3 = { gameTurn: 'o' };

    assert.deepEqual(generateGameStat(state1), {
      player: '✖',
      value: 'x',
      label: 'wins',
    }, 'Returns winning player based on application state');

    assert.deepEqual(generateGameStat(state2), {
      player: '',
      value: 'draw',
      label: 'Draw',
    }, 'Returns draw based on application state');

    assert.deepEqual(generateGameStat(state3), {
      player: '●',
      value: 'o',
      label: 'turns',
    }, 'Returns player turn based on application state');

    assert.end();
  });
});
