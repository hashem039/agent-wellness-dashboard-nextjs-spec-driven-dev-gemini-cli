# Requirements — Core Agent Experience

## Scope
Implement the foundational user interface and data layer for AgentClinic, including a global layout, database integration, and agent profile management.

## User Stories
- **As an AgentClinic visitor**, I want a clean, professional-looking website so I feel confident in the services.
- **As a staff member**, I want to see a list of all currently "admitted" agents.
- **As a therapist**, I want to click an agent to see their specific model details and ailments.

## Functional Requirements
- **Global Layout:**
  - Header with Logo ("🏥 AgentClinic") and Minimalist Navigation (Home, Agents).
  - Main content area with consistent padding.
  - Footer with copyright and mission tagline.
- **Database:**
  - Initialize SQLite using `better-sqlite3`.
  - Create an `agents` table with basic schema.
  - Seed script to populate initial clinical data.
- **Pages:**
  - `/agents`: A grid or list of all agents.
  - `/agents/[id]`: A detail view for a specific agent.

## Technical Decisions
- **Styling:** CSS Modules with a "Modern Clinic" theme (White background, `#2563eb` blue accents, clean sans-serif typography).
- **Data Fetching:** React Server Components for direct database access.
- **Schema:**
  - `id`: INTEGER PRIMARY KEY
  - `name`: TEXT
  - `model_type`: TEXT (e.g., GPT-4, Claude 3)
  - `status`: TEXT (e.g., Admitted, In Therapy, Discharged)
  - `ailments`: TEXT (comma-separated or simple string for now)

## Design Constraints
- Responsive design for mobile and desktop (Steve's requirement).
- Use standard CSS variables for colors to ensure consistency.
