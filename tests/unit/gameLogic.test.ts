import { describe, it, expect } from 'vitest';
import { PlayerSchema, MatchSchema, GameStateSchema } from '../../packages/shared/src/types';

describe('Player schema', () => {
  it('validates a correct player', () => {
    const player = {
      id: 'p1',
      username: 'test',
      elo: 1200,
      xp: 100,
      cosmetics: ['hat'],
    };
    expect(PlayerSchema.safeParse(player).success).toBe(true);
  });

  it('rejects missing username', () => {
    const player = {
      id: 'p1',
      elo: 1200,
      xp: 100,
      cosmetics: ['hat'],
    };
    expect(PlayerSchema.safeParse(player).success).toBe(false);
  });
});
