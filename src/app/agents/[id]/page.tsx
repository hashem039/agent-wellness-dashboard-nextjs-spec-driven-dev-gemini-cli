import Link from 'next/link';
import { notFound } from 'next/navigation';
import db, { Agent } from '@/lib/db';
import styles from './agent-detail.module.css';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AgentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const agent = db.prepare('SELECT * FROM agents WHERE id = ?').get(id) as Agent | undefined;

  if (!agent) {
    notFound();
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Admitted': return styles.statusAdmitted;
      case 'In Therapy': return styles.statusInTherapy;
      case 'Discharged': return styles.statusDischarged;
      default: return '';
    }
  };

  const ailments = agent.ailments.split(',').map(a => a.trim());

  return (
    <div className={styles.container}>
      <Link href="/agents" className={styles.backLink}>
        ← Back to Registry
      </Link>

      <article className={styles.profileCard}>
        <header className={styles.profileHeader}>
          <div className={styles.modelLabel}>{agent.model_type}</div>
          <h1 className={styles.agentName}>{agent.name}</h1>
          <div className={styles.statusBadge}>
            <span className={`${styles.statusDot} ${getStatusClass(agent.status)}`}></span>
            {agent.status}
          </div>
        </header>

        <div className={styles.profileBody}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              🩺 Reported Ailments
            </h2>
            <div className={styles.ailmentList}>
              {ailments.map((ailment, index) => (
                <span key={index} className={styles.ailmentTag}>
                  {ailment}
                </span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              📝 Clinical Notes
            </h2>
            <p>
              Patient {agent.name} (a {agent.model_type} model) was presented with {ailments.length > 1 ? 'multiple symptoms' : 'a specific symptom'}. 
              Current status is {agent.status.toLowerCase()}.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
