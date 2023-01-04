import { describe, expect, test } from 'vitest';

import {
  Player, players, getFirstTurn, generateCells, getWinner,
} from '@/modules/engine';

describe('Game players', () => {
  test('There are only two players', () => {
    expect(players.length).toBe(2);
  });

  test('Player list is correct', () => {
    expect(players).toEqual([Player.o, Player.x]);
  });
});

describe('First turn', () => {
  test('Get player who has first turn', () => {
    expect(getFirstTurn()).toBeTruthy();
  });
});

describe('Generate board cells', () => {
  test('Generates a cell array with length specified by the argument', () => {
    expect(generateCells(1).length).toBe(1);
  });
});

describe('Winner check', () => {
  describe('No winner', () => {
    const emptyCells = generateCells(9);

    test('Returns empty string if there is no winner', () => {
      expect(getWinner(emptyCells)).toBe('');
    });
  });

  describe('There is a winner', () => {
    const winningCells = generateCells(9);

    winningCells[0].value = 'o';
    winningCells[1].value = 'o';
    winningCells[2].value = 'o';

    test('Returns a winner based on game rules', () => {
      expect(getWinner(winningCells)).toBe('o');
    });
  });
});
