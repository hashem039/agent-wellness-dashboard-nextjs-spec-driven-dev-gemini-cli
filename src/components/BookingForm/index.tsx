'use client';

import { useState } from 'react';
import { bookAppointment } from '@/lib/actions';
import styles from './BookingForm.module.css';

interface BookingFormProps {
  agentId: number;
}

export default function BookingForm({ agentId }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const result = await bookAppointment(formData);
      if (result.success) {
        setStatus('success');
        setMessage('Session booked successfully!');
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to submit form.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <h3>✅ {message}</h3>
        <button onClick={() => setStatus('idle')} className={styles.button}>
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className={styles.form}>
      <input type="hidden" name="agentId" value={agentId} />
      
      <div className={styles.field}>
        <label htmlFor="date" className={styles.label}>Requested Session Date</label>
        <input 
          type="datetime-local" 
          id="date" 
          name="date" 
          required 
          className={styles.input}
          defaultValue={new Date().toISOString().slice(0, 16)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="notes" className={styles.label}>Notes / Specific Distress Symptoms</label>
        <textarea 
          id="notes" 
          name="notes" 
          className={styles.textarea}
          placeholder="Describe any recent behavioral anomalies..."
        />
      </div>

      <button 
        type="submit" 
        className={styles.button} 
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Scheduling...' : 'Request Therapeutic Session'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMessage}>❌ {message}</p>
      )}
    </form>
  );
}
