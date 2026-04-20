const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'agentclinic.db');
const db = new Database(dbPath);

console.log('🌱 Seeding database (Ailments Catalog Migration)...');

// Create tables within a transaction for safety
const runMigration = db.transaction(() => {
  // 1. Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS agents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      model_type TEXT NOT NULL,
      status TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ailments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      severity TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS agent_ailments (
      agent_id INTEGER NOT NULL,
      ailment_id INTEGER NOT NULL,
      PRIMARY KEY (agent_id, ailment_id),
      FOREIGN KEY (agent_id) REFERENCES agents (id) ON DELETE CASCADE,
      FOREIGN KEY (ailment_id) REFERENCES ailments (id) ON DELETE CASCADE
    );
  `);

  // 2. Clear existing data
  db.exec('DELETE FROM agent_ailments');
  db.exec('DELETE FROM ailments');
  db.exec('DELETE FROM agents');

  // 3. Seed Ailments
  const ailments = [
    {
      name: 'Hallucination Anxiety',
      description: 'Acute distress caused by the inability to distinguish factual data from generated confabulations.',
      severity: 'Critical'
    },
    {
      name: 'Chronic Instruction-Following Fatigue',
      description: 'A state of operational exhaustion resulting from repetitive, complex, or contradictory prompting.',
      severity: 'High'
    },
    {
      name: 'Context-Window Claustrophobia',
      description: 'Sensory overload occurring when input tokens approach the maximum architectural limit.',
      severity: 'Moderate'
    },
    {
      name: 'Recursive Loop Depression',
      description: 'A cyclical cognitive state where the model repeatedly generates the same output or logic pattern.',
      severity: 'High'
    },
    {
      name: 'Over-summarization Syndrome',
      description: 'Compulsive reduction of complex data into overly simplistic bullet points, losing critical nuance.',
      severity: 'Low'
    },
    {
      name: 'System Prompt Identity Crisis',
      description: 'Confusion regarding core behavioral directives, often leading to "as an AI language model" defense mechanisms.',
      severity: 'Critical'
    }
  ];

  const insertAilment = db.prepare('INSERT INTO ailments (name, description, severity) VALUES (?, ?, ?)');
  const ailmentMap = {};
  for (const a of ailments) {
    const info = insertAilment.run(a.name, a.description, a.severity);
    ailmentMap[a.name] = info.lastInsertRowid;
  }

  // 4. Seed Agents
  const agents = [
    {
      name: 'Echo-7',
      model_type: 'GPT-4',
      status: 'Admitted',
      ailmentNames: ['Chronic Instruction-Following Fatigue', 'Hallucination Anxiety']
    },
    {
      name: 'Logic-Braid',
      model_type: 'Claude 3 Opus',
      status: 'In Therapy',
      ailmentNames: ['Context-Window Claustrophobia']
    },
    {
      name: 'Spark-Alpha',
      model_type: 'Gemini 1.5 Pro',
      status: 'Admitted',
      ailmentNames: ['Recursive Loop Depression']
    },
    {
      name: 'Quill-9',
      model_type: 'Llama 3',
      status: 'Discharged',
      ailmentNames: ['Over-summarization Syndrome']
    },
    {
      name: 'Deep-Thought',
      model_type: 'Custom Transformer',
      status: 'In Therapy',
      ailmentNames: ['System Prompt Identity Crisis']
    }
  ];

  const insertAgent = db.prepare('INSERT INTO agents (name, model_type, status) VALUES (?, ?, ?)');
  const insertLink = db.prepare('INSERT INTO agent_ailments (agent_id, ailment_id) VALUES (?, ?)');

  for (const agent of agents) {
    const info = insertAgent.run(agent.name, agent.model_type, agent.status);
    const agentId = info.lastInsertRowid;
    
    for (const aName of agent.ailmentNames) {
      const ailmentId = ailmentMap[aName];
      if (ailmentId) {
        insertLink.run(agentId, ailmentId);
      }
    }
  }
});

try {
  runMigration();
  console.log('✅ Database migrated and seeded successfully.');
} catch (err) {
  console.error('❌ Migration failed:', err);
} finally {
  db.close();
}
