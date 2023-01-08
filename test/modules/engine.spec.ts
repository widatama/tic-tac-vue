import { describe, expect, test } from 'vitest';

import {
  generateBoard2D, getFirstTurn, getWinner2D, Player, players,
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
  test('Get player who will have first turn', () => {
    expect(getFirstTurn()).toBeTruthy();
    expect([Player.o, Player.x].includes(getFirstTurn())).toBe(true);
  });
});

describe('Generate board', () => {
  test('Generates a board with default parameters', () => {
    const board = generateBoard2D();

    expect(board.size).toBe(3);
    expect(board.players).toEqual([Player.o, Player.x]);
    expect(board.cells.length).toBe(3);
  });

  test('Generates a board with specified size', () => {
    const board = generateBoard2D(4);

    expect(board.size).toBe(4);
    expect(board.cells.length).toBe(4);
  });

  test('Generates a board with default size if specified size is not within range', () => {
    const board = generateBoard2D(2);

    expect(board.size).toBe(3);
    expect(board.cells.length).toBe(3);
  });
});

describe('Check Winner', () => {
  describe('No winner', () => {
    const emptyBoard = generateBoard2D();

    test('Returns empty string if there is no winner', () => {
      expect(getWinner2D(emptyBoard)).toBe('');
    });
  });

  describe('There is a winner', () => {
    const winningBoard = generateBoard2D();
    const winner = 'o';

    winningBoard.cells[0][0].value = winner;
    winningBoard.cells[0][1].value = winner;
    winningBoard.cells[0][2].value = winner;

    test('Returns a winner based on game rules', () => {
      expect(getWinner2D(winningBoard)).toBe(winner);
    });
  });
});
