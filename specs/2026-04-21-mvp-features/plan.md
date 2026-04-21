# MVP Features Implementation Plan

## Phase 4: Therapies Catalog

- [x] Create migration for `therapies` table and `ailment_therapies` junction table.
- [x] Add seed data for therapies and link them to existing ailments.
- [x] Implement `getTherapies` and `getTherapiesWithAilments` in `src/lib/db.ts`.
- [x] Create `src/app/therapies/page.tsx` list page.
- [x] Update `/agents/[id]` to show recommended therapies based on their ailments.

## Phase 5: Appointment Booking

- [x] Create migration for `appointments` table.
- [x] Implement `bookAppointment` Server Action in `src/lib/actions.ts`.
- [x] Create a `BookingForm` client component.
- [x] Integrate `BookingForm` into `src/app/agents/[id]/page.tsx`.
- [x] Add success/error feedback states for booking.

## Phase 6: Staff Dashboard

- [x] Implement aggregation queries in `src/lib/db.ts` (total counts, activity logs).
- [x] Create `src/app/dashboard/page.tsx`.
- [x] Design and implement "Visual Analytics" cards (e.g., using stylized CSS or a simple SVG-based charting strategy).
- [x] Add a summary table for recent appointments.
- [x] Add navigation link to Dashboard in the main layout.

## Cross-cutting Tasks

- [x] Ensure all new pages follow the global layout and styling conventions.
- [x] Add Vitest tests for database queries and server actions.
- [x] Final visual polish on new components.
