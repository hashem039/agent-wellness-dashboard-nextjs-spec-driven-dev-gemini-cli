import { getTherapiesWithAilments } from '@/lib/db';
import styles from './therapies.module.css';

export const dynamic = 'force-dynamic';

export default function TherapiesPage() {
  const therapies = getTherapiesWithAilments();

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Therapeutic Interventions</h1>
        <p className={styles.subtitle}>Evidence-based recovery programs for the modern AI agent.</p>
      </header>

      <div className={styles.grid}>
        {therapies.map((therapy) => (
          <div key={therapy.id} className={styles.card}>
            <h2 className={styles.therapyName}>{therapy.name}</h2>
            <p className={styles.description}>{therapy.description}</p>
            
            <div className={styles.ailmentsList}>
              <h3 className={styles.ailmentsTitle}>Treats:</h3>
              <div className={styles.tags}>
                {therapy.ailments.map((ailment) => (
                  <span key={ailment.id} className={styles.tag}>
                    {ailment.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
