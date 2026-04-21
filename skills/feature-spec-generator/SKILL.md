---
name: feature-spec-generator
description: Generates a feature specification (plan, requirements, validation) for the next phase in the roadmap. Use when starting a new development phase or feature work based on the project roadmap.
---

# Feature Spec Generator

## Overview
This skill automates the creation of feature specifications for new project phases. It identifies the next phase from `specs/roadmap.md`, creates a dedicated branch, and generates the necessary documentation files in a timestamped directory.

## Workflow

### 1. Identify Next Phase
- Read `specs/roadmap.md` to find the first task group (Phase) that is not completed.
- Identify the Phase number and title.

### 2. Branching
- Create a new branch named `feature/phase-N-name` where `N` is the phase number and `name` is a kebab-case version of the phase title.

### 3. User Consultation
- Before writing any files, you MUST ask the user the following questions using the `ask_user` tool:
  - **Objective**: "What is the core objective of Phase N: [Title]?"
  - **Technical/Design**: "Are there any specific technical constraints or design requirements to consider for this phase?"
  - **Context**: "Are there any other details from mission.md or tech-stack.md that we should specifically emphasize?"

### 4. Specification Generation
- Create a new directory `specs/YYYY-MM-DD-feature-name` under the `specs/` folder.
- Generate three files in this directory using the templates in `assets/`:
  - `requirements.md`: Capture the scope, decisions, and context.
  - `plan.md`: Outline the implementation as a series of numbered task groups.
  - `validation.md`: Define how to verify the implementation succeeded and is ready for merging.

## Templates

The following templates are located in the `assets/` directory and should be used as a base:
- `assets/requirements.md`
- `assets/plan.md`
- `assets/validation.md`

## Guidance
- Refer to `specs/mission.md` for project values and audience.
- Refer to `specs/tech-stack.md` for architectural constraints and tools.
- Ensure the `plan.md` is granular enough for iterative development.
- Always check existing directories in `specs/` to ensure naming consistency and avoid duplication.
