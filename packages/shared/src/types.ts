import { z } from 'zod';

export const PlayerSchema = z.object({
  id: z.string(),
  username: z.string(),
  elo: z.number(),
  xp: z.number(),
  cosmetics: z.array(z.string()),
});
export type Player = z.infer<typeof PlayerSchema>;

export const MatchSchema = z.object({
  id: z.string(),
  players: z.array(PlayerSchema),
  winnerId: z.string().optional(),
  duration: z.number(),
  boardState: z.any(),
  startedAt: z.string(),
  endedAt: z.string().optional(),
});
export type Match = z.infer<typeof MatchSchema>;

export const GameStateSchema = z.object({
  matchId: z.string(),
  board: z.any(),
  players: z.array(PlayerSchema),
  tick: z.number(),
});
export type GameState = z.infer<typeof GameStateSchema>;

export const MessageSchema = z.object({
  type: z.string(),
  payload: z.any(),
});
export type Message = z.infer<typeof MessageSchema>;
