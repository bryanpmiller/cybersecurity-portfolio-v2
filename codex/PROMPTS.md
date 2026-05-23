# PROMPTS.md — Reusable Codex Prompts

## Start a New Project Session

```text
Read AGENTS.md and codex/CODEX_START_HERE.md, then follow the workflow.

Use AGENTS.md as the repo-level instructions. Read codex/PROJECT_BRIEF.md, codex/TASKS.md, codex/PROJECT_MEMORY.md, codex/WORKLOG.md, codex/DECISIONS.md, codex/VALIDATION.md, and codex/SECURITY_AND_SECRETS.md.

Start by summarizing the current project state, identifying the next incomplete task in codex/TASKS.md, and proposing a short plan before making changes.
```

---

## Repo Audit Prompt

```text
Perform a repository audit before making changes.

Identify the framework, package manager, main directories, entry points, build/test/lint commands, current project state, and any obvious setup risks.

Update codex/PROJECT_MEMORY.md with architecture notes, update codex/VALIDATION.md with discovered commands, and add a codex/WORKLOG.md entry.

Do not edit product code yet.
```

---

## Build a Feature

```text
Implement the next incomplete feature from codex/TASKS.md.

Before editing, identify the expected behavior, files likely to change, and validation checks to run.

Make the smallest clean implementation that satisfies the task. Avoid unrelated refactors.

Afterward, update codex/TASKS.md, codex/PROJECT_MEMORY.md, codex/WORKLOG.md, codex/DECISIONS.md if needed, and codex/VALIDATION.md if commands changed.
```

---

## Fix a Bug

```text
Investigate this bug:

[BUG DESCRIPTION]

First reproduce or reason through the likely cause. Then make a targeted fix. Avoid broad rewrites.

Add or update tests if practical. Run relevant validation checks.

Update codex/WORKLOG.md with the issue, root cause, files changed, checks run, and next steps.
```

---

## Update Tracking Files

```text
Update the project tracking files.

Check off completed items in codex/TASKS.md. Add durable context to codex/PROJECT_MEMORY.md. Add a dated codex/WORKLOG.md entry. Update codex/DECISIONS.md if any meaningful decisions were made. Update codex/VALIDATION.md if commands, checks, or known validation gaps changed.

Keep codex/TASKS.md clean. Do not use it as a diary.
```
