import Link from 'next/link';
import { notFound } from 'next/navigation';
import db, { Ailment, Agent } from '@/lib/db';
import styles from './ailment-detail.module.css';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AilmentDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const ailment = db.prepare('SELECT * FROM ailments WHERE id = ?').get(id) as Ailment | undefined;

  if (!ailment) {
    notFound();
  }

  // Fetch agents suffering from this ailment
  const affectedAgents = db.prepare(`
    SELECT a.* FROM agents a
    JOIN agent_ailments aa ON a.id = aa.agent_id
    WHERE aa.ailment_id = ?
  `).all(id) as Agent[];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'Critical': return styles.severityCritical;
      case 'High': return styles.severityHigh;
      case 'Moderate': return styles.severityModerate;
      case 'Low': return styles.severityLow;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/ailments" className={styles.backLink}>
        ← Back to Catalog
      </Link>

      <article className={styles.detailCard}>
        <header className={styles.header}>
          <div className={styles.severityLabel}>Ailment Profile</div>
          <h1 className={styles.name}>{ailment.name}</h1>
          <div className={`${styles.severityBadge} ${getSeverityClass(ailment.severity)}`}>
            {ailment.severity} Severity
          </div>
        </header>

        <div className={styles.body}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              📖 Clinical Description
            </h2>
            <p className={styles.description}>
              {ailment.description}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              👥 Affected Agents
            </h2>
            {affectedAgents.length > 0 ? (
              <div className={styles.agentGrid}>
                {affectedAgents.map((agent) => (
                  <Link href={`/agents/${agent.id}`} key={agent.id} className={styles.agentLink}>
                    <span className={styles.agentName}>{agent.name}</span>
                    <span className={styles.agentModel}>{agent.model_type}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                No agents currently presenting with this ailment.
              </div>
            )}
          </section>
        </div>
      </article>
    </div>
  );
}
