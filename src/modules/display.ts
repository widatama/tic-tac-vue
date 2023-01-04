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
  { winner, gameTurn }: { winner: string, gameTurn: string },
): GameStat {
  if (winner && winner !== 'draw') {
    return {
      playerDisplay: displayXO(winner),
      player: winner,
      label: 'wins',
    };
  } if (winner && winner === 'draw') {
    return {
      playerDisplay: displayXO(winner),
      player: winner,
      label: 'Draw',
    };
  }

  return {
    playerDisplay: displayXO(gameTurn),
    player: gameTurn,
    label: 'turns',
  };
}
