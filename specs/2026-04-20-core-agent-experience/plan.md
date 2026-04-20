# Plan — Core Agent Experience

## Task Group 1: Global Shell & Styling
1. Create `src/app/layout.module.css` for header/footer layout.
2. Update `src/app/layout.tsx` to include the `Header` and `Footer`.
3. Update `src/app/globals.css` with CSS variables for the "Modern Clinic" theme.
4. Add basic responsive breakpoints.

## Task Group 2: Database Infrastructure
1. Install `better-sqlite3`.
2. Create `src/lib/db.ts` to initialize the SQLite connection.
3. Create `scripts/seed-db.js` to create the `agents` table and insert 5 sample agents.
4. Update `package.json` with a `db:seed` script.

## Task Group 3: Agent Listing Page
1. Create `src/app/agents/page.tsx` as a Server Component.
2. Fetch all agents from the database.
3. Create `src/app/agents/agents.module.css` for a clean grid layout.
4. Render agent cards with Name, Model, and Status.

## Task Group 4: Agent Detail Page
1. Create `src/app/agents/[id]/page.tsx`.
2. Fetch a single agent by ID.
3. Handle "Not Found" state if the ID doesn't exist.
4. Render detailed profile (Name, Model, Status, Ailments list).

## Task Group 5: Navigation & Final Polish
1. Ensure the Nav links in `layout.tsx` are functional.
2. Verify typography and spacing matches the "Modern Clinic" aesthetic.
3. Run `npm run build` to ensure no SSR or build issues.
