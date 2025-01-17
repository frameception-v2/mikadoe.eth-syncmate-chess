export const PROJECT_ID = 'farcaster-frames-template';
export const PROJECT_TITLE = "Farcaster Frames Template";
export const PROJECT_DESCRIPTION = "A Farcaster Frames v2 Template by hellno";

// Game-related constants
export const GAME_TYPES = {
  CHESS: 'chess',
  TIC_TAC_TOE: 'tic-tac-toe'
} as const;

export const GAME_STATES = {
  WAITING: 'waiting',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
} as const;

export const PLAYER_ROLES = {
  PLAYER_1: 'player1',
  PLAYER_2: 'player2'
} as const;
