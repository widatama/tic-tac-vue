import { Player } from './engine';

export function displayXO(playerKey: string, availablePlayer = Player): string {
  let display = '';

  if (playerKey === availablePlayer.x) {
    display = '✖';
  } else if (playerKey === availablePlayer.o) {
    display = '⸰';
  }

  return display;
}

export type GameStat = {
  playerDisplay: string;
  player: string;
  label: string;
};

export function generateGameStat(
  { winner, playerTurn }: { winner: string; playerTurn: string },
): GameStat {
  let label = 'turns';
  if (winner === 'draw') {
    label = 'Draw';
  } else if (winner !== '') {
    label = 'wins';
  }

  return {
    label,
    player: winner !== '' ? winner : playerTurn,
    playerDisplay: winner === '' ? displayXO(playerTurn) : displayXO(winner),
  };
}
