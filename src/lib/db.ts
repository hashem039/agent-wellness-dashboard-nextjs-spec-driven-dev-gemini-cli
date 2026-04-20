import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'agentclinic.db');

declare global {
  // eslint-disable-next-line no-var
  var __db: Database.Database | undefined;
}

const db = globalThis.__db || new Database(dbPath);

if (process.env.NODE_ENV !== 'production') {
  globalThis.__db = db;
}

// Enable foreign keys
db.pragma('foreign_keys = ON');

export default db;

export interface Agent {
  id: number;
  name: string;
  model_type: string;
  status: string;
}

export interface Ailment {
  id: number;
  name: string;
  description: string;
  severity: string;
}

export interface AgentWithAilments extends Agent {
  ailments: Ailment[];
}
