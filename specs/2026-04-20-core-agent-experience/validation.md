# Validation — Core Agent Experience

## Automated Tests
- [ ] Run `npm test` to ensure existing tests pass.
- [ ] Add a basic test for the `db` initialization.
- [ ] Add a test to verify `/agents` returns a 200 status code.

## Manual Verification
- [ ] **Home Page:** Verify navigation to "/agents" works.
- [ ] **Agents List:** Verify all 5 seeded agents appear in the grid.
- [ ] **Agent Detail:** Clicking an agent navigates to `/agents/[id]` and shows correct details.
- [ ] **Responsiveness:** Open Chrome DevTools and toggle mobile view; layout should stack appropriately.
- [ ] **Visuals:** Confirm "Modern Clinic" theme (blue/white/clean) is applied.

## Acceptance Criteria
- [ ] Build completes successfully with `npm run build`.
- [ ] Database is persistent in a local `.db` file.
- [ ] All requirements in `requirements.md` are fulfilled.
