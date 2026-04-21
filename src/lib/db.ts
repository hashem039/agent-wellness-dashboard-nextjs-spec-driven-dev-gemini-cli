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

export interface Therapy {
  id: number;
  name: string;
  description: string;
}

export interface TherapyWithAilments extends Therapy {
  ailments: Ailment[];
}

export interface Appointment {
  id: number;
  agent_id: number;
  date: string;
  status: string;
  notes?: string;
  agent_name?: string;
}

export interface DashboardStats {
  totalAgents: number;
  totalAilments: number;
  totalBookings: number;
}

export function getDashboardStats(): DashboardStats {
  const totalAgents = (db.prepare('SELECT COUNT(*) as count FROM agents').get() as any).count;
  const totalAilments = (db.prepare('SELECT COUNT(*) as count FROM ailments').get() as any).count;
  const totalBookings = (db.prepare('SELECT COUNT(*) as count FROM appointments').get() as any).count;

  return { totalAgents, totalAilments, totalBookings };
}

export function getRecentAppointments(limit: number = 5): Appointment[] {
  return db.prepare(`
    SELECT ap.*, a.name as agent_name FROM appointments ap
    JOIN agents a ON ap.agent_id = a.id
    ORDER BY ap.id DESC
    LIMIT ?
  `).all(limit) as Appointment[];
}

export function getTherapies(): Therapy[] {
  return db.prepare('SELECT * FROM therapies').all() as Therapy[];
}

export function getTherapiesWithAilments(): TherapyWithAilments[] {
  const therapies = getTherapies();
  return therapies.map((t) => {
    const ailments = db.prepare(`
      SELECT a.* FROM ailments a
      JOIN ailment_therapies at ON a.id = at.ailment_id
      WHERE at.therapy_id = ?
    `).all(t.id) as Ailment[];
    return { ...t, ailments };
  });
}

export function getRecommendedTherapiesForAgent(agentId: number): Therapy[] {
  return db.prepare(`
    SELECT DISTINCT t.* FROM therapies t
    JOIN ailment_therapies at ON t.id = at.therapy_id
    JOIN agent_ailments aa ON at.ailment_id = aa.ailment_id
    WHERE aa.agent_id = ?
  `).all(agentId) as Therapy[];
}
