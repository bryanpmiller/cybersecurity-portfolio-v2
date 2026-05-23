# CODEX_START_HERE.md

## Start Here

This file lives at:

```text
codex/CODEX_START_HERE.md
```

The repo-level instruction file lives at:

```text
AGENTS.md
```

Read these files in order:

1. `AGENTS.md`
2. `codex/CODEX_START_HERE.md`
3. `codex/PROJECT_BRIEF.md`
4. `codex/TASKS.md`
5. `codex/PROJECT_MEMORY.md`
6. `codex/WORKLOG.md`
7. `codex/DECISIONS.md`
8. `codex/VALIDATION.md`
9. `codex/SECURITY_AND_SECRETS.md`

Then identify the next incomplete task in `codex/TASKS.md`.

---

## Important Note

`AGENTS.md` is the source of truth for Codex behavior rules, guardrails, tracking updates, validation expectations, and final response format.

Do not duplicate all of those rules here. This file is only the starting point for each Codex session.

---

## First Response Required From Codex

Before editing code, respond with:

```text
Current project:
- [Project name and purpose]

Current state:
- [What appears to be complete]
- [What appears to be incomplete]

Next task:
- [Next incomplete task from codex/TASKS.md]

Planned approach:
- [Short plan]

Files likely to be touched:
- [List if known]

Checks likely to run:
- [List if known]
```

---

## Starter Prompt

```text
Read AGENTS.md and codex/CODEX_START_HERE.md, then follow the workflow.

Use AGENTS.md as the repo-level instructions. Read codex/PROJECT_BRIEF.md, codex/TASKS.md, codex/PROJECT_MEMORY.md, codex/WORKLOG.md, codex/DECISIONS.md, codex/VALIDATION.md, and codex/SECURITY_AND_SECRETS.md.

Start by summarizing the current project state, identifying the next incomplete task in codex/TASKS.md, and proposing a short plan before making changes.
```
