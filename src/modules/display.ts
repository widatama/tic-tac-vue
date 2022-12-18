import { players } from './engine';

export function displayXO(player: string, inpPlayers = players): string {
  let display = '';

  if (player === inpPlayers[0]) {
    display = '✖';
  } else if (player === inpPlayers[1]) {
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
