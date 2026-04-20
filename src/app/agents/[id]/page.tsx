import Link from 'next/link';
import { notFound } from 'next/navigation';
import db, { Agent, Ailment } from '@/lib/db';
import StatusBadge from '@/components/StatusBadge';
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

  // Fetch ailments via join table
  const ailments = db.prepare(`
    SELECT al.* FROM ailments al
    JOIN agent_ailments aa ON al.id = aa.ailment_id
    WHERE aa.agent_id = ?
  `).all(id) as Ailment[];

  return (
    <div className={styles.container}>
      <Link href="/agents" className={styles.backLink}>
        ← Back to Registry
      </Link>

      <article className={styles.profileCard}>
        <header className={styles.profileHeader}>
          <div className={styles.modelLabel}>{agent.model_type}</div>
          <h1 className={styles.agentName}>{agent.name}</h1>
          <StatusBadge status={agent.status} />
        </header>

        <div className={styles.profileBody}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              🩺 Reported Ailments
            </h2>
            <div className={styles.ailmentList}>
              {ailments.map((ailment) => (
                <Link 
                  href={`/ailments/${ailment.id}`} 
                  key={ailment.id} 
                  className={styles.ailmentTag}
                  title={ailment.description}
                >
                  {ailment.name}
                </Link>
              ))}
              {ailments.length === 0 && (
                <p className={styles.noAilments}>No reported ailments for this agent.</p>
              )}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              📝 Clinical Notes
            </h2>
            <p>
              Patient {agent.name} (a {agent.model_type} model) was presented with {ailments.length > 1 ? 'multiple symptoms' : ailments.length === 1 ? 'a specific symptom' : 'no acute symptoms'}. 
              Current status is {agent.status.toLowerCase()}.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
