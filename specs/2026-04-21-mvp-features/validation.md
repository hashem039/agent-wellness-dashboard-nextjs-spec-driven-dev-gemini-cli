# MVP Features Validation

## Automated Tests
- [ ] Run `npm test` to verify all unit and integration tests pass.
- [ ] Ensure new tests cover:
    - `getTherapies` database queries.
    - `bookAppointment` server action logic.
    - Dashboard aggregation logic.

## Manual Verification

### Phase 4: Therapies
- [ ] Navigate to `/therapies` and verify the list of therapies is displayed.
- [ ] Confirm each therapy shows its associated ailments.
- [ ] Check an agent profile page and confirm recommended therapies are listed based on the agent's ailments.

### Phase 5: Booking
- [ ] Open an agent's profile page.
- [ ] Use the booking form to schedule an appointment.
- [ ] Verify a success message is displayed.
- [ ] Verify the appointment is recorded in the database (e.g., by checking the dashboard or database shell).

### Phase 6: Dashboard
- [ ] Navigate to `/dashboard`.
- [ ] Confirm total counts for Agents, Ailments, and Bookings are accurate.
- [ ] Verify the "Visual Analytics" elements (charts/metrics) are rendered and visually appealing.
- [ ] Confirm the recent activity table shows the latest appointments correctly.

## Completion Criteria
- [ ] All features are functional and follow the design specifications.
- [ ] No regressions in existing features (`/`, `/agents`, `/ailments`).
- [ ] Code is linted and formatted according to project standards.
