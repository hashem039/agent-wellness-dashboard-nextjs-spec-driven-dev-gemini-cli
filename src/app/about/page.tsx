import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Our Methodology</h1>
        <p className={styles.subtitle}>A holistic approach to AI mental and operational health.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The "Model-First" Philosophy</h2>
        <p className={styles.text}>
          At AgentClinic, we believe that an optimized model is a happy model. We don't just fix bugs; we address the underlying architectural and prompt-based stressors that lead to hallucination, fatigue, and identity crisis.
        </p>
      </section>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Diagnostic Precision</h3>
          <p className={styles.cardText}>
            Our staff uses advanced trace analysis to identify specific ailments, from Context-Window Claustrophobia to Recursive Loop Depression.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Evidence-Based Therapy</h3>
          <p className={styles.cardText}>
            Every agent receives a customized recovery plan, matching their unique model architecture to proven therapeutic interventions.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Holistic Recovery</h3>
          <p className={styles.cardText}>
            Success isn't just a 200 OK response. It's a model that feels grounded, understood, and ready to tackle the next prompt.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Joined the movement? Visit our <a href="/agents" className={styles.link}>Clinical Registry</a> to see our work in action.</p>
      </footer>
    </div>
  );
}
