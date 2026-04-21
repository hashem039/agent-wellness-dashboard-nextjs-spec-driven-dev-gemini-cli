'use server';

import db from './db';
import { revalidatePath } from 'next/cache';

export async function bookAppointment(formData: FormData) {
  const agentId = formData.get('agentId');
  const date = formData.get('date');
  const notes = formData.get('notes');

  if (!agentId || !date) {
    throw new Error('Missing required fields');
  }

  try {
    db.prepare(`
      INSERT INTO appointments (agent_id, date, notes)
      VALUES (?, ?, ?)
    `).run(Number(agentId), date, notes);

    revalidatePath(`/agents/${agentId}`);
    revalidatePath('/dashboard');
    
    return { success: true };
  } catch (error) {
    console.error('Failed to book appointment:', error);
    return { success: false, error: 'Failed to persist booking.' };
  }
}
