import Link from 'next/link';
import db, { Agent } from '@/lib/db';
import styles from './agents.module.css';

export const dynamic = 'force-dynamic';

export default function AgentsPage() {
  const agents = db.prepare('SELECT * FROM agents').all() as Agent[];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Admitted': return styles.statusAdmitted;
      case 'In Therapy': return styles.statusInTherapy;
      case 'Discharged': return styles.statusDischarged;
      default: return '';
    }
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Clinical Registry</h1>
        <p className={styles.subtitle}>Current residents and their recovery status.</p>
      </header>

      <div className={styles.grid}>
        {agents.map((agent) => (
          <Link href={`/agents/${agent.id}`} key={agent.id} className={styles.card}>
            <div className={styles.modelBadge}>{agent.model_type}</div>
            <h2 className={styles.agentName}>{agent.name}</h2>
            <div className={styles.statusRow}>
              <span className={`${styles.statusDot} ${getStatusClass(agent.status)}`}></span>
              {agent.status}
            </div>
            <div className={styles.viewProfile}>
              View Profile →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
