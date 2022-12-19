import { describe, expect, test } from 'vitest';

import { displayXO, generateGameStat } from '@/modules/display';

describe('Display player sign', () => {
  test('Display nothing if player is not specified', () => {
    expect(displayXO('')).toBe('');
  });

  test('Display ✖ for player x', () => {
    expect(displayXO('x')).toBe('✖');
  });

  test('Display ⸰ for player o', () => {
    expect(displayXO('o')).toBe('⸰');
  });
});

describe('Generate game status', () => {
  test('Returns winning player based on application state', () => {
    const state = { winner: 'x' };

    expect(generateGameStat(state)).toEqual({
      playerDisplay: '✖',
      player: 'x',
      label: 'wins',
    });
  });

  test('Returns draw based on application state', () => {
    const state = { winner: 'draw' };

    expect(generateGameStat(state)).toEqual({
      playerDisplay: '',
      player: 'draw',
      label: 'Draw',
    });
  });

  test('Returns player turn based on application state', () => {
    const state = { gameTurn: 'o' };

    expect(generateGameStat(state)).toEqual({
      playerDisplay: '⸰',
      player: 'o',
      label: 'turns',
    });
  });
});
