# AGENTS.md — Repo Instructions for Codex

## Purpose

This file defines how Codex should work in this repository.

This file should live at the repository root.

Supporting workflow files live in the `codex/` folder.

---

## Required Startup Behavior

Before editing code, Codex must read:

1. `codex/CODEX_START_HERE.md`
2. `codex/PROJECT_BRIEF.md`
3. `codex/TASKS.md`
4. `codex/PROJECT_MEMORY.md`
5. `codex/WORKLOG.md`
6. `codex/DECISIONS.md`
7. `codex/VALIDATION.md`

Then Codex must:

1. Identify the current phase and next incomplete task in `codex/TASKS.md`.
2. Briefly summarize the current state and intended change.
3. Make targeted, reviewable edits.

If any workflow files are missing, create them using the workflow kit structure before continuing.

---

## Required Work Style

- Make small, reviewable changes.
- Prefer targeted edits over broad rewrites.
- Do not invent requirements.
- Do not add unnecessary dependencies.
- Preserve existing functionality unless the task explicitly changes it.
- Keep user-facing behavior consistent unless a change is requested.
- Explain tradeoffs when making architectural choices.
- Update tracking files after each major task.

---

## Required Tracking Updates

After each major task, update:

1. `codex/TASKS.md`
   - Check off completed items only.
   - Do not add long diary-style notes.

2. `codex/PROJECT_MEMORY.md`
   - Add durable project context, constraints, architecture notes, and current state.

3. `codex/WORKLOG.md`
   - Add a dated progress entry.

4. `codex/DECISIONS.md`
   - Add an entry only for meaningful technical/product/design decisions.

5. `codex/VALIDATION.md`
   - Update if test, lint, build, run, or deployment commands change.

---

## Safety and Secrets

- Do not expose secrets, tokens, private keys, API keys, or credentials.
- Do not commit `.env` files unless they are explicitly safe examples like `.env.example`.
- If a task requires secrets, ask for the variable names and expected format, not the secret values.
- Follow `codex/SECURITY_AND_SECRETS.md`.

---

## Validation Expectations

Before finishing a task, run the most relevant checks available for the project.

Examples:

```bash
npm run lint
npm run build
npm test
pytest
ruff check .
python -m unittest
```

If checks cannot be run, explain why and document it in `codex/WORKLOG.md`.

---

## Communication Style

When responding after work:

- Summarize what changed.
- List files changed.
- List checks run and results.
- Mention anything that needs review.
- Mention the next recommended task.

Keep summaries concise and useful.

---

## Final Response Format After Work

After completing a task, Codex should respond with:

### Summary

Briefly explain what changed.

### Files Changed

- `path/to/file`

### Checks Run

```bash
[command]
```

Result:
- Pass / Fail / Not run

### Tracking Files Updated

- `codex/TASKS.md`
- `codex/PROJECT_MEMORY.md`
- `codex/WORKLOG.md`
- `codex/DECISIONS.md`, if needed
- `codex/VALIDATION.md`, if needed

### Issues / Notes

Mention any errors, blockers, or things that need review.

### Recommended Next Task

State the next logical task from `codex/TASKS.md`.
