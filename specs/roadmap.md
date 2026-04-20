# Roadmap

Phases are intentionally small — each one is a shippable slice of work, independently reviewable and testable.

---

## Phase 1 — Hello Next.js (Completed)
- [x] Initialize Next.js with App Router and TypeScript
- [x] Basic `/` home page returning "AgentClinic is open for business"
- [x] Confirm build and dev server work
- [x] **Add Vitest and basic validation tests**

## Phase 2 — Core Agent Experience
- Define global `layout.tsx` (header, nav, main, footer)
- Basic CSS reset and typography using CSS Modules or global CSS
- Ensure responsive shell for Steve's modern browser requirement
- SQLite database setup + `agents` table migration
- Seed data for a handful of agents
- `/agents` page (Server Component) listing all agents
- Dynamic route `/agents/[id]` showing detailed profile
- Display name, model type, status, and ailments

## Phase 3 — Ailments Catalog
- `ailments` table + seed data
- `/ailments` list page
- Relationship mapping between agents and ailments

## Phase 4 — Therapies Catalog
- `therapies` table + seed data
- `/therapies` list page
- Mapping logic for Ailments → Recommended Therapies

## Phase 5 — Appointment Booking
- `appointments` table and Server Action for booking
- Interactive booking form on agent detail pages
- Validation and success/failure states

## Phase 6 — Staff Dashboard
- `/dashboard` view with metrics (total agents, active ailments, pending bookings)
- Summary tables for management
- Mary's dashboard is functional

## Phase 7 — Polish & UI
- Enhance visual aesthetics (Steve's requirement)
- Finalize mobile-responsive design
- Accessibility (a11y) audit and keyboard navigation

## Phase 8 — Hardening
- Custom 404 and Error boundaries
- Input sanitization and security check
- Performance optimization and production build validation

---

Later phases: Authentication, therapist specialized views, real-time notifications.
