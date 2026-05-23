# TASKS.md — Master Project Roadmap

## Purpose

This file is the master roadmap for the project.

This file lives at:

```text
codex/TASKS.md
```

Use this file to track what needs to be done.

Do not use this file as a daily diary. Use `codex/WORKLOG.md` for progress notes and `codex/PROJECT_MEMORY.md` for durable context.

---

## Current Phase

Current phase: Phase 0 — Project Intake and Repo Audit

Current next task:

- [ ] Phase 0.1 — Read project workflow files and summarize current state

---

## Phase 0 — Project Intake and Repo Audit

### Phase Goal

Understand the project before editing code.

### Tasks

- [ ] 0.1 Read `AGENTS.md`, `codex/PROJECT_BRIEF.md`, `codex/TASKS.md`, `codex/PROJECT_MEMORY.md`, `codex/WORKLOG.md`, `codex/DECISIONS.md`, and `codex/VALIDATION.md`.
- [ ] 0.2 Inspect repository structure.
- [ ] 0.3 Identify framework, package manager, and key folders.
- [ ] 0.4 Identify dev, build, lint, and test commands.
- [ ] 0.5 Identify current project status.
- [ ] 0.6 Identify obvious risks, missing files, or setup problems.
- [ ] 0.7 Update `codex/PROJECT_MEMORY.md` with architecture notes.
- [ ] 0.8 Update `codex/VALIDATION.md` with discovered commands.
- [ ] 0.9 Add a `codex/WORKLOG.md` entry.

### Acceptance Criteria

- [ ] Codex understands the repo structure.
- [ ] Current state is documented.
- [ ] Validation commands are documented.
- [ ] No code changes were made unless needed for setup documentation.

---

## Phase 1 — Requirements and Scope

- [ ] 1.1 Review `codex/PROJECT_BRIEF.md`.
- [ ] 1.2 Identify unclear requirements.
- [ ] 1.3 Define MVP scope.
- [ ] 1.4 Define out-of-scope items.
- [ ] 1.5 Break work into feature tasks.
- [ ] 1.6 Add missing tasks to this file.
- [ ] 1.7 Update `codex/PROJECT_MEMORY.md` with scope decisions.
- [ ] 1.8 Add important scope decisions to `codex/DECISIONS.md`.

---

## Phase 2 — Architecture and Design Plan

- [ ] 2.1 Map current architecture.
- [ ] 2.2 Identify files/modules/components likely to change.
- [ ] 2.3 Identify data flow.
- [ ] 2.4 Identify state management approach.
- [ ] 2.5 Identify storage/database needs.
- [ ] 2.6 Identify API boundaries if relevant.
- [ ] 2.7 Identify security/privacy concerns.
- [ ] 2.8 Document architectural decisions in `codex/DECISIONS.md`.
- [ ] 2.9 Update `codex/PROJECT_MEMORY.md`.

---

## Phase 3 — Implementation

Add project-specific tasks here.

### Feature 1 — `[FEATURE_NAME]`

- [ ] 3.1 Define expected behavior.
- [ ] 3.2 Identify files to change.
- [ ] 3.3 Implement minimal working version.
- [ ] 3.4 Add or update tests if appropriate.
- [ ] 3.5 Run validation checks.
- [ ] 3.6 Update project tracking files.

---

## Phase 4 — UI/UX or Output Polish

- [ ] 4.1 Review current user experience.
- [ ] 4.2 Identify rough edges.
- [ ] 4.3 Improve layout/output clarity.
- [ ] 4.4 Improve error states.
- [ ] 4.5 Improve accessibility if UI project.
- [ ] 4.6 Improve mobile layout if UI project.
- [ ] 4.7 Update documentation if behavior changed.
- [ ] 4.8 Run validation checks.

---

## Phase 5 — Testing and Validation

- [ ] 5.1 Run lint checks.
- [ ] 5.2 Run build checks.
- [ ] 5.3 Run tests.
- [ ] 5.4 Manually test core flows.
- [ ] 5.5 Test failure/error states.
- [ ] 5.6 Review logs/console output.
- [ ] 5.7 Fix issues found.
- [ ] 5.8 Update `codex/VALIDATION.md`.
- [ ] 5.9 Add `codex/WORKLOG.md` entry.

---

## Phase 6 — Documentation

- [ ] 6.1 Update README.
- [ ] 6.2 Document setup steps.
- [ ] 6.3 Document run commands.
- [ ] 6.4 Document build/test commands.
- [ ] 6.5 Document environment variables.
- [ ] 6.6 Add screenshots or examples if useful.
- [ ] 6.7 Update `codex/HANDOFF.md`.

---

## Phase 7 — Final Review and Handoff

- [ ] 7.1 Review all changed files.
- [ ] 7.2 Run final validation checks.
- [ ] 7.3 Update `codex/PROJECT_MEMORY.md`.
- [ ] 7.4 Update `codex/WORKLOG.md`.
- [ ] 7.5 Update `codex/DECISIONS.md`.
- [ ] 7.6 Update `codex/HANDOFF.md`.
- [ ] 7.7 Summarize what changed and what remains.

---

## Definition of Done

A task is done when:

- [ ] The requested behavior is implemented.
- [ ] Relevant checks were run or documented as not run.
- [ ] No obvious regressions were introduced.
- [ ] `codex/TASKS.md` is updated.
- [ ] `codex/PROJECT_MEMORY.md` is updated if durable context changed.
- [ ] `codex/WORKLOG.md` has a progress entry.
- [ ] `codex/DECISIONS.md` is updated if a meaningful decision was made.
- [ ] User-facing documentation is updated if behavior changed.
