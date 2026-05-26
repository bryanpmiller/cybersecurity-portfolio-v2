# Codex Portfolio Workflow Kit

## What This Kit Is

This workflow kit is designed specifically for redesigning and improving Bryan Miller's cybersecurity portfolio website with Codex.

The kit uses this file structure:

```text
portfolio-repo/
├── AGENTS.md
├── codex/
│   ├── CODEX_START_HERE.md
│   ├── TASKS.md
│   ├── PROJECT_MEMORY.md
│   ├── WORKLOG.md
│   └── README.md
├── package.json
├── src/
└── ...
```

`AGENTS.md` stays at the repo root because it is the repo-level instruction file.

The other workflow files live inside `codex/` so they do not clutter your project root or overwrite your normal project README.

---

## Current Workflow Note

`AGENTS.md` is the active startup source of truth.

`codex/CODEX_START_HERE.md` is deprecated for default startup. It can remain in the repository as historical reference, but Codex should not read it during normal sessions unless Bryan explicitly asks to review legacy workflow notes.

Round 3 adds a targeted architect guidance layer in:

```text
codex/architects/
```

Do not read every architect file by default. Read only the architect file(s) relevant to the current task.

---

## File Roles

```text
AGENTS.md = Always-on repo instructions for Codex
codex/CODEX_START_HERE.md = Deprecated historical starter; not part of default startup
codex/TASKS.md = Master redesign roadmap and checklist
codex/PROJECT_MEMORY.md = Design decisions, context, constraints, architecture notes
codex/WORKLOG.md = Chronological progress log
codex/README.md = Human setup guide for this workflow kit
codex/architects/ = Round 3 targeted architect guidance files
```

The key rule:

```text
TASKS.md = What needs to be done
PROJECT_MEMORY.md = What we decided
WORKLOG.md = What has been done
AGENTS.md = Rules Codex should always follow
```

---

## First-Time Setup Checklist

Before using Codex, edit these files.

### `codex/TASKS.md`

Update:

```text
Primary reference URL
Secondary reference URL, if any
Local development URL
Current deployed URL
Repository URL
What you like about the reference
What you do not want copied
```

### `codex/PROJECT_MEMORY.md`

Update:

```text
Current project status
Current design direction
Reference website notes
Architecture notes
Important constraints
Open questions
```

### `codex/WORKLOG.md`

Add an initial setup entry if you want a clean starting point.

### `AGENTS.md`

Usually leave this mostly alone. Only edit it if you want Codex to always follow a new repo-level rule.

---

## Round 3 Architect Layer

Round 3 is a premium creative systems pass layered on top of the completed Phase 0-16 redesign workflow.

The architect files are:

```text
codex/architects/
|-- 00_CREATIVE_BRIEF.md
|-- 01_EXECUTIVE_EXPERIENCE_ARCHITECT.md
|-- 02_VISUAL_SYSTEM_ARCHITECT.md
|-- 03_MOTION_SYSTEM_ARCHITECT.md
|-- 04_EDITORIAL_STRUCTURE_ARCHITECT.md
|-- 05_CASE_STUDY_ARCHITECT.md
|-- 06_TOKEN_EFFICIENCY_ARCHITECT.md
`-- 07_REVIEW_AND_POLISH_ARCHITECT.md
```

Use these files only when relevant to the task. This keeps Codex sessions focused and reduces token usage.

---

## Starter Prompt for Codex

```text
Read AGENTS.md, codex/TASKS.md, codex/PROJECT_MEMORY.md, and codex/WORKLOG.md.

Use AGENTS.md as the repo-level rules. Use codex/TASKS.md as the master roadmap. Use codex/PROJECT_MEMORY.md as the long-term project memory. Use codex/WORKLOG.md as the chronological progress tracker.

Before editing code, identify the current phase and next incomplete task. Then summarize the current project state and explain your plan.

Identify the current phase and next incomplete task in codex/TASKS.md. For Round 3 tasks, read only the relevant architect file(s) from codex/architects/ before editing.
```

---

## How to Add Reference URLs

Add reference URLs in two places:

1. `codex/TASKS.md`
2. `codex/PROJECT_MEMORY.md`

Use `codex/TASKS.md` for the active instructions:

```md
- Primary reference URL: `https://example.com`
- Secondary reference URL: `https://example.com`
- Local development URL: `http://localhost:3000`
- Current deployed URL: `https://your-site.com`
- Repository URL: `https://github.com/username/repo`
```

Use `codex/PROJECT_MEMORY.md` for lasting notes after Codex analyzes the references.

---

## Recommended Workflow

1. Start with Phase 0 only.
2. Do not let Codex redesign the whole site in one pass.
3. Work section by section.
4. Have Codex update tracking files after each major task.
5. Keep `codex/TASKS.md` clean.
6. Use `codex/PROJECT_MEMORY.md` for decisions.
7. Use `codex/WORKLOG.md` for progress.

---

## Tracking Update Prompt

```text
Update the tracking files.

Check off completed items in codex/TASKS.md. Add durable design decisions, constraints, or architecture notes to codex/PROJECT_MEMORY.md. Add a dated progress entry to codex/WORKLOG.md.

Keep codex/TASKS.md clean. Do not use it as a diary.
```

---

## Best Practices

- Keep `AGENTS.md` short and durable.
- Keep `codex/TASKS.md` as a checklist.
- Keep `codex/PROJECT_MEMORY.md` focused on durable decisions.
- Keep `codex/WORKLOG.md` as short progress entries.
- Do not copy reference websites directly.
- Do not invent metrics or experience.
- Run build/lint checks when available.
- Work in small, reviewable phases.
