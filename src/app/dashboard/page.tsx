import { getDashboardStats, getRecentAppointments } from '@/lib/db';
import styles from './dashboard.module.css';

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const stats = getDashboardStats();
  const recentAppointments = getRecentAppointments();

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Staff Dashboard</h1>
        <p className={styles.subtitle}>Overview of AgentClinic operations and active treatments.</p>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statIcon}>🤖</div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Agents</span>
            <span className={styles.statValue}>{stats.totalAgents}</span>
          </div>
          <div className={styles.statTrend}>Residents</div>
        </div>

        <div className={`${styles.statCard} ${styles.red}`}>
          <div className={styles.statIcon}>🌡️</div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Active Ailments</span>
            <span className={styles.statValue}>{stats.totalAilments}</span>
          </div>
          <div className={styles.statTrend}>Cataloged</div>
        </div>

        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.statIcon}>📅</div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Bookings</span>
            <span className={styles.statValue}>{stats.totalBookings}</span>
          </div>
          <div className={styles.statTrend}>Sessions scheduled</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Agent</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((app) => (
                <tr key={app.id}>
                  <td className={styles.agentCell}>{app.agent_name}</td>
                  <td>{new Date(app.date).toLocaleString()}</td>
                  <td>
                    <span className={styles.statusPill}>{app.status}</span>
                  </td>
                  <td className={styles.notesCell}>{app.notes || '—'}</td>
                </tr>
              ))}
              {recentAppointments.length === 0 && (
                <tr>
                  <td colSpan={4} className={styles.emptyCell}>No recent activity found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
