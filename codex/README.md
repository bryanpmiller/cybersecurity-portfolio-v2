# Codex Universal Workflow Kit

## What This Is

This is a reusable workflow kit for working with Codex across different coding projects.

It uses this recommended file structure:

```text
your-repo/
├── AGENTS.md
├── codex/
│   ├── CODEX_START_HERE.md
│   ├── PROJECT_BRIEF.md
│   ├── TASKS.md
│   ├── PROJECT_MEMORY.md
│   ├── WORKLOG.md
│   ├── DECISIONS.md
│   ├── VALIDATION.md
│   ├── HANDOFF.md
│   ├── PROMPTS.md
│   ├── SECURITY_AND_SECRETS.md
│   ├── HOW_TO_ADAPT.md
│   └── templates/
└── src/
```

`AGENTS.md` stays at the repo root.

Everything else lives inside `codex/` so it does not clutter your project root or overwrite your normal project README.

---

## Core Concept

Use separate files for separate jobs.

```text
AGENTS.md = Always-on repo instructions for Codex
codex/PROJECT_BRIEF.md = What we are building and why
codex/TASKS.md = What needs to be done
codex/PROJECT_MEMORY.md = What we know and decided
codex/WORKLOG.md = What has been done
codex/DECISIONS.md = Why major decisions were made
codex/VALIDATION.md = How we prove the project works
codex/HANDOFF.md = Final project summary / restart point
```

---

## How to Start

1. Copy `AGENTS.md` into the repo root.
2. Copy the `codex/` folder into the repo root.
3. Fill out `codex/PROJECT_BRIEF.md`.
4. Review and customize `codex/TASKS.md`.
5. Start Codex with the starter prompt.

---

## Starter Prompt

```text
Read AGENTS.md and codex/CODEX_START_HERE.md, then follow the workflow.

Use AGENTS.md as the repo-level instructions. Read codex/PROJECT_BRIEF.md, codex/TASKS.md, codex/PROJECT_MEMORY.md, codex/WORKLOG.md, codex/DECISIONS.md, codex/VALIDATION.md, and codex/SECURITY_AND_SECRETS.md.

Start by summarizing the current project state, identifying the next incomplete task in codex/TASKS.md, and proposing a short plan before making changes.
```

---

## What to Edit First

### `codex/PROJECT_BRIEF.md`

Edit:

- Project name
- One-sentence summary
- Project type
- Primary goal
- Target user
- Success criteria
- Non-goals
- Core features
- Tech stack, if known
- Constraints
- Deployment target

### `codex/TASKS.md`

Edit:

- Current phase
- Next task
- Feature tasks
- Project-specific acceptance criteria

### `codex/PROJECT_MEMORY.md`

Edit:

- Project summary
- Architecture notes
- Current direction
- Important constraints
- Known issues
- Open questions

### `codex/VALIDATION.md`

Edit or let Codex discover:

- Install command
- Dev command
- Lint command
- Test command
- Build command
- Deploy command

### `AGENTS.md`

Usually leave mostly unchanged.

Only edit it for repo-level rules Codex should always follow.

---

## Best Practices

- Keep `AGENTS.md` short and durable.
- Keep `codex/TASKS.md` as a checklist.
- Keep `codex/PROJECT_MEMORY.md` focused on durable context.
- Keep `codex/WORKLOG.md` as short progress entries.
- Use `codex/DECISIONS.md` only for meaningful decisions.
- Use `codex/VALIDATION.md` for commands and check results.
- Archive old logs if they get too long.
