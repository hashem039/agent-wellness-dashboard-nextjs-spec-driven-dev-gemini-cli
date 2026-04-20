# Requirements — Ailments Catalog

## Scope
Transition from simple string-based ailments to a relational database model and implement a dedicated catalog for viewing and exploring AI agent ailments.

## User Stories
- **As a therapist**, I want to browse a catalog of known AI ailments so I can understand the landscape of agent distress.
- **As a researcher**, I want to click on a specific ailment and see which agents are currently affected by it.
- **As a staff member**, I want ailments to be managed centrally rather than as inconsistent text strings.

## Functional Requirements
- **Database Normalization:**
  - Create an `ailments` table to store master definitions (name, description, severity).
  - Create an `agent_ailments` join table to support a many-to-many relationship.
  - Migrate existing seed data from the `agents.ailments` string to the new relational structure.
- **Pages:**
  - `/ailments`: A searchable/filterable grid of ailment cards.
  - `/ailments/[id]`: A detail page showing the ailment's clinical description and a list of agents currently diagnosed with it.
- **Navigation:**
  - Add "Ailments" to the main site navigation.

## Technical Decisions
- **Data Model:** Relational many-to-many using SQLite.
- **UI:** Card grid layout using CSS Modules, maintaining the "Modern Clinic" aesthetic.
- **Data Fetching:** React Server Components for all list and detail views.

## Design Constraints
- Ailment cards should use high-contrast typography and clear clinical labels.
- The "Affected Agents" list on the detail page should link back to the agent profile pages.
