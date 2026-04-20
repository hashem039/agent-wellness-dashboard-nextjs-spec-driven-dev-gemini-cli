# Validation — Ailments Catalog

## Automated Tests
- [ ] Update `src/lib/db.test.ts` to verify the new tables (`ailments`, `agent_ailments`) and their relationships.
- [ ] Add a test to verify `/ailments` returns a 200 status code.
- [ ] Add a test to verify `/ailments/[id]` returns 404 for non-existent IDs.

## Manual Verification
- [ ] **Navigation:** Confirm "Ailments" appears in the header and navigates correctly.
- [ ] **Ailments List:** Confirm all seeded ailments appear as cards.
- [ ] **Ailment Detail:** Clicking an ailment shows the correct description and the list of affected agents.
- [ ] **Agent Detail:** Confirm an agent's profile still shows their ailments, now pulled from the relational data.
- [ ] **Database Integrity:** Verify that deleting an ailment or agent (if implemented) correctly handles the join table records.

## Acceptance Criteria
- [ ] Build completes successfully with `npm run build`.
- [ ] Many-to-many relationship is correctly implemented and utilized.
- [ ] UI follows the established "Modern Clinic" aesthetic and is fully responsive.
