import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'agentclinic.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

export default db;

export interface Agent {
  id: number;
  name: string;
  model_type: string;
  status: string;
  ailments: string;
}
