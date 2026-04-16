import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <h1>AgentClinic</h1>
          <p>A Full-Service Wellness Platform for AI Agents</p>
        </header>
        <div className={styles.content}>
          <p>AgentClinic is open for business.</p>
        </div>
      </main>
    </div>
  );
}
