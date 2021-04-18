import tape from 'tape';

import { displayXO, generateGameStat } from '@/modules/display';

tape('Display helper', (unit: tape.Test) => {
  unit.test('displayXO', (assert: tape.Test) => {
    assert.equal(displayXO('x'), '✖', 'Displays ✖ if x');
    assert.equal(displayXO('o'), '⸰', 'Displays ⸰ if o');
    assert.equal(displayXO(''), '', 'Displays nothing');

    assert.end();
  });

  unit.test('generateGameStat', (assert: tape.Test) => {
    const state1 = { winner: 'x' };
    const state2 = { winner: 'draw' };
    const state3 = { gameTurn: 'o' };

    assert.deepEqual(generateGameStat(state1), {
      playerDisplay: '✖',
      player: 'x',
      label: 'wins',
    }, 'Returns winning player based on application state');

    assert.deepEqual(generateGameStat(state2), {
      playerDisplay: '',
      player: 'draw',
      label: 'Draw',
    }, 'Returns draw based on application state');

    assert.deepEqual(generateGameStat(state3), {
      playerDisplay: '⸰',
      player: 'o',
      label: 'turns',
    }, 'Returns player turn based on application state');

    assert.end();
  });
});
