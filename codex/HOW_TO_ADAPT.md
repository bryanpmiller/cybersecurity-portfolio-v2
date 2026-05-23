# HOW_TO_ADAPT.md — Customizing This Kit for Each Project

## Purpose

This workflow kit is intentionally generic.

For each new project, customize the top sections of these files:

1. `codex/PROJECT_BRIEF.md`
2. `codex/TASKS.md`
3. `codex/PROJECT_MEMORY.md`
4. `codex/VALIDATION.md`
5. `AGENTS.md`

Do not rewrite the whole kit unless the project truly needs it.

---

## Minimal Setup for a New Project

For a simple project, fill out only:

- Project name
- One-sentence summary
- Project type
- Primary goal
- Success criteria
- Core features
- Tech stack if known
- Validation commands if known

Then ask Codex to inspect the repo and complete missing sections.

---

## When to Modify AGENTS.md

Modify `AGENTS.md` when you want Codex to always follow a rule in this repo.

Good examples:

- Always use TypeScript.
- Do not add dependencies without approval.
- Use Tailwind for styling.
- Use pytest for tests.
- Keep functions small and typed.
- Update docs after behavior changes.
- Never edit generated files.

Bad examples:

- Temporary notes
- Detailed task progress
- Long bug explanations
- Daily worklog entries
- Anything that belongs in `codex/WORKLOG.md`

Keep `AGENTS.md` short.

---

## Recommended File Structure

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

---

## Good Ongoing Habit

At the end of every work session, ask Codex:

```text
Update the project tracking files. Check off completed items in codex/TASKS.md, add durable context to codex/PROJECT_MEMORY.md, add a codex/WORKLOG.md entry, update codex/DECISIONS.md if any meaningful decisions were made, and update codex/VALIDATION.md if commands or checks changed.
```
