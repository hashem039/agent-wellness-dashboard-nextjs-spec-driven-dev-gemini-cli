# MVP Features Requirements

This phase focuses on completing the core functionality of AgentClinic, enabling agent therapy discovery, appointment booking, and a staff dashboard with visual metrics.

## Scope

### Phase 4: Therapies Catalog
- **Therapies Table**: Store `id`, `name`, `description`.
- **Relationship Mapping**: Map `ailments` to `therapies` (many-to-many).
- **Listing Page**: `/therapies` list showing available treatments and their linked ailments.

### Phase 5: Appointment Booking
- **Appointments Table**: Store `id`, `agent_id`, `date`, `status`, `notes`.
- **Booking Flow**: A direct, interactive form on the `/agents/[id]` profile page.
- **Server Action**: Handle form submissions and persist to SQLite.

### Phase 6: Staff Dashboard
- **Dashboard View**: `/dashboard` for managing AgentClinic operations.
- **Visual Analytics**: Metrics (Total Agents, Ailments, Bookings) using interactive or stylized visual elements as requested by Mary.
- **Recent Activity**: A summary table of latest bookings.

## Design Decisions

- **Data Persistence**: Use `better-sqlite3` as per the tech stack.
- **Server Actions**: Leverage Next.js Server Actions for all state mutations.
- **Styling**: Stick to CSS Modules/Vanilla CSS with modern, visual-first components (e.g., stylized cards, progress bars, or charts).

## Context

- Mary requires a "nice dashboard" for staff (Phase 6).
- Steve requires a modern, responsive feel (Phase 7).
- Steve needs basic, functional flows for Phase 4 and 5 that integrate smoothly with the existing Agent Profile.
