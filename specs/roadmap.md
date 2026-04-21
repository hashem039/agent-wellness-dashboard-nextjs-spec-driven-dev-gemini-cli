# Roadmap

Phases are intentionally small — each one is a shippable slice of work, independently reviewable and testable.

---

## Phase 1 — Hello Next.js (Completed)
- [x] Initialize Next.js with App Router and TypeScript
- [x] Basic `/` home page returning "AgentClinic is open for business"
- [x] Confirm build and dev server work
- [x] **Add Vitest and basic validation tests**

## Phase 2 — Core Agent Experience (Completed)
- [x] Define global `layout.tsx` (header, nav, main, footer)
- [x] Basic CSS reset and typography using CSS Modules or global CSS
- [x] Ensure responsive shell for Steve's modern browser requirement
- [x] SQLite database setup + `agents` table migration
- [x] Seed data for a handful of agents
- [x] `/agents` page (Server Component) listing all agents
- [x] Dynamic route `/agents/[id]` showing detailed profile
- [x] Display name, model type, status, and ailments

## Phase 3 — Ailments Catalog (Completed)
- [x] `ailments` table + seed data
- [x] `/ailments` list page
- [x] Relationship mapping between agents and ailments

## Phase 4 — Therapies Catalog (Completed)
- [x] `therapies` table + seed data
- [x] `/therapies` list page
- [x] Mapping logic for Ailments → Recommended Therapies

## Phase 5 — Appointment Booking (Completed)
- [x] `appointments` table and Server Action for booking
- [x] Interactive booking form on agent detail pages
- [x] Validation and success/failure states

## Phase 6 — Staff Dashboard (Completed)
- [x] `/dashboard` view with metrics (total agents, active ailments, pending bookings)
- [x] Summary tables for management
- [x] Mary's dashboard is functional

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
