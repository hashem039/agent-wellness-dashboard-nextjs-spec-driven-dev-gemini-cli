# Plan — Ailments Catalog

## Task Group 1: Database Migration & Schema
1. Modify `scripts/seed-db.js` to:
   - Create `ailments` table: `id`, `name`, `description`, `severity`.
   - Create `agent_ailments` join table: `agent_id`, `ailment_id`.
   - Update `agents` table (optionally remove old `ailments` column or keep for backward compatibility during migration).
   - Seed initial ailments (e.g., Hallucination Anxiety, Context-Window Claustrophobia).
   - Update agent seeding to populate `agent_ailments` instead of the `ailments` string.
2. Run `npm run db:seed` to update the local database.

## Task Group 2: Shared Data Access
1. Update `src/lib/db.ts` with new interfaces for `Ailment`.
2. Add helper functions or queries to fetch agents by ailment and vice versa.

## Task Group 3: Ailments List Page
1. Create `src/app/ailments/page.tsx`.
2. Create `src/app/ailments/ailments.module.css` for the card grid.
3. Implement the list view fetching all ailments from the database.

## Task Group 4: Ailment Detail Page
1. Create `src/app/ailments/[id]/page.tsx`.
2. Create `src/app/ailments/[id]/ailment-detail.module.css`.
3. Implement the detail view showing ailment info and the list of linked agents.

## Task Group 5: Integration & Navigation
1. Update `src/app/layout.tsx` to add "Ailments" to the header navigation.
2. Update the Agent Detail page (`src/app/agents/[id]/page.tsx`) to fetch and display ailments from the relational join table instead of the string column.
3. (Optional) Remove the `ailments` column from the `agents` table if migration is successful.
