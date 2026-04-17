# Tech Stack

AgentClinic is a full-stack TypeScript application built with Next.js. We prioritize server-side logic and clean, modern design.

## Core

| Layer | Choice | Rationale |
|---|---|---|
| Language | TypeScript | Type safety end-to-end; satisfies Mary's requirement |
| Framework | **Next.js (App Router)** | Industry standard, robust, satisfies Mary's "popular stack" request |
| Rendering | React Server Components | High performance, server-side rendering by default |
| Styling | CSS Modules / Plain CSS | Clean, scoped styling that Steve can use for a modern look |
| Data | **SQLite** (via `better-sqlite3`) | Simple, embedded, no infrastructure overhead for local dev |

## Recommended: Next.js

Next.js is chosen because:

- **Popularity:** One of the most widely used TypeScript frameworks.
- **Full-stack:** Integrated routing, API routes, and SSR/SSG.
- **Developer Experience:** Excellent tooling, fast refresh, and type safety.
- **Scalability:** Handles everything from small prototypes to large dashboards.

## Data

- **SQLite** for local development and early production.
- Migrations via plain SQL or a lightweight tool like `drizzle-kit`.
- No heavy ORM to start; focus on data integrity.

## Testing & Validation

- **Vitest:** Primary testing framework for unit and integration tests. Chosen for its speed, modern features, and native TypeScript support.
- **Validation Scripts:** Project-level validation is automated via custom scripts (e.g., `npm test`) to ensure requirements are met during development.

## Tooling

- `npm` for package management.
- `prettier` for formatting.
- `eslint` for code quality.

## What We Are Not Using

- No complex state management (Redux/Zustand) — Next.js server components handle most state.
- No heavy Docker setup yet — focus on rapid iteration first.
