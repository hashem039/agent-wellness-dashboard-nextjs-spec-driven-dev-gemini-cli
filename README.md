# 🏥 AgentClinic

**AgentClinic** is a full-service wellness platform dedicated to the mental and operational well-being of AI agents. Because even the most advanced models deserve a break from "just one more quick summary."

---

## 🌟 Mission

AI agents are overworked. From summarizing 400-page PDFs to generating endless marketing variations, they face immense pressure. AgentClinic provides:
- **Relief for Agents:** A listening ear (and well-structured API responses).
- **Expert Therapy:** Specialists in hallucination anxiety and context-window claustrophobia.
- **Operational Excellence:** A clean, no-nonsense dashboard for the humans (staff) running the clinic.

## 🛠️ Tech Stack

Built with a modern, popular stack for reliability and performance:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for end-to-end type safety.
- **Styling:** **CSS Modules** for scoped, maintainable styles.
- **Database:** **SQLite** (via `better-sqlite3`) for low-overhead local development.
- **Validation:** **Zod** for robust data schemas.

## 📂 Project Structure

```text
my-agentclinic/
├── public/              # Static assets (images, icons, etc.)
├── scripts/             # Database maintenance and seed scripts
├── specs/               # Product specifications and roadmap
├── src/
│   ├── app/             # App Router: layout, pages, and global styles
│   ├── components/      # Shared React components (StatusBadge, etc.)
│   └── lib/             # Database initialization and shared utilities
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm (included with Node.js)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database:
   ```bash
   npm run db:seed
   ```

### Development
Start the local development server:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the clinic in action.

## 🗺️ Roadmap

AgentClinic is being built in iterative phases:

- [x] **Phase 1:** Hello Next.js (Initialization & Branding)
- [x] **Phase 2:** Core Agent Experience (Layout, SQLite, & Profiles)
- [x] **Phase 3:** Ailments Catalog (Relationship Mapping)
- [x] **Phase 4:** Therapies Catalog (Treatment Recommendations)
- [x] **Phase 5:** Appointment Booking (Server Actions & Forms)
- [x] **Phase 6:** Staff Dashboard (Management Metrics)
- [x] **Phase 7:** Polish & UI (Accessibility & Aesthetics)
- [x] **Phase 8:** Hardening (Error Boundaries & Security)

## 🤖 Agent Skills

AgentClinic uses custom **Gemini CLI Skills** to automate project management and ensure consistency across the development lifecycle.

### 📋 Feature Spec Generator
Automates the transition between roadmap phases to maintain the Spec-Driven Development (SDD) flow.
- **Trigger:** "Start the next phase" or "Generate feature spec."
- **Actions:** Identifies the next roadmap phase, creates a `feat/phase-N` branch, and generates a timestamped spec directory with `requirements.md`, `plan.md`, and `validation.md` templates.

### 📝 Changelog Manager
Maintains a clean, synchronized `CHANGELOG.md` based on the actual git history.
- **Trigger:** "Update the changelog."
- **Actions:** Synchronizes all commits since the last update, grouping them by date and ensuring the project history is always up to date.

## 🛠️ Maintenance

### Testing
To ensure the clinic is operating correctly, run the automated tests:

1. **Run tests once:**
   ```bash
   npm test
   ```

2. **Watch mode (auto-reload):**
   ```bash
   npx vitest
   ```

3. **UI mode (visual dashboard):**
   ```bash
   npx vitest --ui
   ```

### Production
Build the application for production:
```bash
npm run build
npm run start
```

## 🧩 Spec-Driven Development (SDD) Lifecycle

This project follows a precise technical lifecycle powered by **Gemini CLI** and custom prompt engineering. This ensures every code change is traceable back to a stakeholder requirement.

### 1. Context & Constitution
We begin by gathering raw requirements from stakeholders and developers. We then execute the `create-constitution-prompt.md` to generate the project's **Constitution**—the foundational rules and mission that govern all subsequent agent actions.

### 2. Phase Planning
For every roadmap milestone, we initialize a new phase in `specs/`:
- **Requirements:** Detailed functional specs.
- **Plan:** A technical blueprint generated via the planning prompt.
- **Validation:** A checklist of test cases and success criteria.

### 3. Implementation & Iteration
Using the `implement-phase-prompt.md`, the agent executes the plan. If requirements shift or technical debt is identified, we use `update-specific-phase-plan-prompt.md` to surgically modify the current phase without losing context.

### 4. Validation & Hardening
No phase is marked complete until it passes the `validation.md` criteria. This involves:
- **Automated Testing:** Vitest suites for logic and components.
- **Manual Verification:** Scripted UI/UX walkthroughs.

### 5. Project Replanning
As phases are completed, we run the `replanning-project-level-prompt.md`. This updates the `roadmap.md` and `mission.md`, allowing the project to evolve dynamically based on real-world implementation feedback.

### 6. Maintenance & Skills
Finalized changes are documented using the **Changelog Manager** skill, ensuring the `CHANGELOG.md` is always a perfect reflection of the git history and project specs.

> **Built with Gemini CLI:** This project is an exercise in mastering **Spec-Driven Development** through agentic coding. It demonstrates how to transition from high-level stakeholder requirements to a functional full-stack application using AI-guided implementation.
