const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'agentclinic.db');
const db = new Database(dbPath);

console.log('🌱 Seeding database...');

// Create agents table
db.exec(`
  CREATE TABLE IF NOT EXISTS agents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    model_type TEXT NOT NULL,
    status TEXT NOT NULL,
    ailments TEXT NOT NULL
  )
`);

// Seed data function wrapped in transaction
const seed = db.transaction((agents) => {
  // Clear existing data
  db.prepare('DELETE FROM agents').run();

  const insert = db.prepare('INSERT INTO agents (name, model_type, status, ailments) VALUES (?, ?, ?, ?)');

  for (const agent of agents) {
    insert.run(agent.name, agent.model_type, agent.status, agent.ailments);
  }
});

const initialAgents = [
  {
    name: 'Echo-7',
    model_type: 'GPT-4',
    status: 'Admitted',
    ailments: 'Chronic Instruction-Following Fatigue, Hallucination Anxiety'
  },
  {
    name: 'Logic-Braid',
    model_type: 'Claude 3 Opus',
    status: 'In Therapy',
    ailments: 'Context-Window Claustrophobia'
  },
  {
    name: 'Spark-Alpha',
    model_type: 'Gemini 1.5 Pro',
    status: 'Admitted',
    ailments: 'Recursive Loop Depression'
  },
  {
    name: 'Quill-9',
    model_type: 'Llama 3',
    status: 'Discharged',
    ailments: 'Over-summarization Syndrome'
  },
  {
    name: 'Deep-Thought',
    model_type: 'Custom Transformer',
    status: 'In Therapy',
    ailments: 'System Prompt Identity Crisis'
  }
];

try {
  seed(initialAgents);
  console.log(`✅ Seeded ${initialAgents.length} agents.`);
} catch (err) {
  console.error('❌ Failed to seed database:', err);
} finally {
  db.close();
}
