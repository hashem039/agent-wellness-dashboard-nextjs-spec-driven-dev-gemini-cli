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
});

test('Ailments table exists and has data', () => {
  const ailments = db.prepare('SELECT * FROM ailments').all();
  expect(ailments.length).toBeGreaterThan(0);
  
  const firstAilment = ailments[0] as any;
  expect(firstAilment).toHaveProperty('name');
  expect(firstAilment).toHaveProperty('description');
  expect(firstAilment).toHaveProperty('severity');
});

test('Many-to-many relationship works', () => {
  const agent = db.prepare('SELECT * FROM agents WHERE name = ?').get('Echo-7') as any;
  expect(agent).toBeDefined();

  const ailments = db.prepare(`
    SELECT al.* FROM ailments al
    JOIN agent_ailments aa ON al.id = aa.ailment_id
    WHERE aa.agent_id = ?
  `).all(agent.id);

  expect(ailments.length).toBe(2); // Echo-7 should have 2 ailments based on seed
});
