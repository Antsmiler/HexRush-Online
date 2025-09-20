import { describe, it, expect } from 'vitest';
import { MatchSchema } from '../../packages/shared/src/types';

describe('Match schema', () => {
  it('validates a correct match', () => {
    const match = {
      id: 'm1',
      players: [],
      duration: 180,
      boardState: {},
      startedAt: new Date().toISOString(),
    };
    expect(MatchSchema.safeParse(match).success).toBe(true);
  });

  it('rejects missing id', () => {
    const match = {
      players: [],
      duration: 180,
      boardState: {},
      startedAt: new Date().toISOString(),
    };
    expect(MatchSchema.safeParse(match).success).toBe(false);
  });
});
