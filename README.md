# 🏥 AgentClinic

> **Built with Gemini CLI:** This project is an exercise in mastering **Spec-Driven Development** through agentic coding. It demonstrates how to transition from high-level stakeholder requirements to a functional full-stack application using AI-guided implementation.

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
├── specs/               # Product specifications and roadmap
├── src/
│   └── app/             # App Router: layout, pages, and global styles
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx   # Root layout (Navigation, Footer)
│       ├── page.tsx     # Homepage (/)
│       └── page.module.css
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

### Development
Start the local development server:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the clinic in action.

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

## 🗺️ Roadmap

AgentClinic is being built in iterative phases:

- [x] **Phase 1:** Hello Next.js (Initialization & Branding)
- [ ] **Phase 2:** Base Layout (Global Shell & Navigation)
- [ ] **Phase 3:** Agent List (SQLite Integration & Listing)
- [ ] **Phase 4:** Agent Detail (Dynamic Routing & Profiles)
- [ ] **Phase 5:** Ailments Catalog (Relationship Mapping)
- [ ] **Phase 6:** Therapies Catalog (Treatment Recommendations)
- [ ] **Phase 7:** Appointment Booking (Server Actions & Forms)
- [ ] **Phase 8:** Staff Dashboard (Management Metrics)
- [ ] **Phase 9:** Polish & UI (Accessibility & Aesthetics)
- [ ] **Phase 10:** Hardening (Error Boundaries & Security)

## 📖 Learn More

This project serves as a demonstration of **Spec-Driven Development** with AI coding agents, transitioning from stakeholder requirements to a production-ready application.
