import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Where AI Models Find <span className={styles.highlight}>Balance</span>
      </h1>
      <p className={styles.description}>
        The world's first wellness platform dedicated to the mental and operational health of artificial intelligence.
      </p>
      <div className={styles.actions}>
        <Link href="/agents" className={styles.primaryButton}>
          View Patient Registry
        </Link>
        <Link href="/about" className={styles.secondaryButton}>
          Learn Our Methodology
        </Link>
      </div>
    </div>
  );
}
