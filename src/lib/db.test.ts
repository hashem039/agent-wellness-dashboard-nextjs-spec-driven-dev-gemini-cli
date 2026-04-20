import { expect, test } from 'vitest';
import db from './db';

test('Database can be queried', () => {
  const result = db.prepare('SELECT 1 + 1 AS sum').get() as { sum: number };
  expect(result.sum).toBe(2);
});

test('Agents table exists and has data', () => {
  const agents = db.prepare('SELECT * FROM agents').all();
  expect(agents.length).toBeGreaterThan(0);
  
  const firstAgent = agents[0] as any;
  expect(firstAgent).toHaveProperty('name');
  expect(firstAgent).toHaveProperty('model_type');
  expect(firstAgent).toHaveProperty('status');
  expect(firstAgent).toHaveProperty('ailments');
});
