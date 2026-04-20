import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Admitted': return styles.statusAdmitted;
      case 'In Therapy': return styles.statusInTherapy;
      case 'Discharged': return styles.statusDischarged;
      default: return '';
    }
  };

  return (
    <div className={styles.badge}>
      <span className={`${styles.dot} ${getStatusClass(status)}`}></span>
      {status}
    </div>
  );
}
