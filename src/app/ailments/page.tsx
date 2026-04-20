import Link from 'next/link';
import db, { Ailment } from '@/lib/db';
import styles from './ailments.module.css';

export const dynamic = 'force-dynamic';

export default function AilmentsPage() {
  const ailments = db.prepare('SELECT * FROM ailments ORDER BY name ASC').all() as Ailment[];

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
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Ailments Catalog</h1>
        <p className={styles.subtitle}>Encyclopedic guide to AI agent cognitive and operational distress.</p>
      </header>

      <div className={styles.grid}>
        {ailments.map((ailment) => (
          <Link href={`/ailments/${ailment.id}`} key={ailment.id} className={styles.card}>
            <h2 className={styles.ailmentName}>{ailment.name}</h2>
            <p className={styles.description}>{ailment.description}</p>
            <div className={styles.footer}>
              <span className={`${styles.severityBadge} ${getSeverityClass(ailment.severity)}`}>
                {ailment.severity}
              </span>
              <span className={styles.viewDetail}>Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
