import { defineStore } from 'pinia';

import {
  boardSizes,
  generateBoard2D,
  getFirstTurn,
  getWinner2D,
  Phase,
  Player,
} from '@/modules/engine';
import type { Board2D, BoardSize } from '@/modules/engine';

import getters from './getters';

export type State = {
  board?: Board2D;
  boardSizes: BoardSize[];
  phase: string;
  playerTurn: string;
  winner: string;
};

const useMainStore = defineStore('main', {
  state() {
    const state: State = {
      board: undefined,
      boardSizes,
      phase: Phase.prep,
      playerTurn: '',
      winner: '',
    };

    return state;
  },
  actions: {
    newGame(inpBoardSize: number) {
      this.board = generateBoard2D(inpBoardSize as BoardSize);
      this.playerTurn = getFirstTurn();
      this.winner = '';
      this.phase = Phase.play;
    },
    playerMoves2D(payload: { cellPosition: [number, number] }) {
      if (this.winner === '') {
        const newCell = {
          pos: payload.cellPosition,
          value: this.playerTurn as Player,
        };
        const [row, col] = payload.cellPosition;

        if (this.board?.cells) {
          this.board.cells[row][col] = newCell;
        }

        if (this.playerTurn === Player.o) {
          this.playerTurn = Player.x;
        } else {
          this.playerTurn = Player.o;
        }

        this.updateWinner2D();
      }
    },
    updateWinner2D() {
      const winner = getWinner2D(this.board as Board2D);

      if (winner !== '') {
        this.winner = winner;
        this.phase = Phase.prep;
      }
    },
  },
  getters,
});

export default useMainStore;
