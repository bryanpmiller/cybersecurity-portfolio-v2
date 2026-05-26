# 06_TOKEN_EFFICIENCY_ARCHITECT.md - Token and Workflow Efficiency

## Purpose

Use this architect when planning Codex sessions, modifying the workkit, scoping implementation, or trying to reduce high usage.

Round 3 should preserve quality while reducing unnecessary context, full-file rewrites, repeated analysis, and broad validation when a lighter check is enough.

---

## Core Efficiency Principle

Do not ask Codex to redesign broadly when a scoped task will work.

Bad prompt:

```text
Make the site more premium.
```

Better prompt:

```text
Using 00_CREATIVE_BRIEF, 01_EXECUTIVE_EXPERIENCE_ARCHITECT, and 02_VISUAL_SYSTEM_ARCHITECT, audit only the Home hero and recommend 3 targeted changes. Do not edit code yet.
```

---

## Required Scoping

Before implementation, define:

- Target page
- Target component
- Relevant architect file(s)
- Allowed files to edit
- Whether copy changes are allowed
- Required validation level
- Whether browser screenshots are needed

---

## Architect File Routing

Do not read every architect file by default.

Use only the relevant ones:

- Broad premium direction: `00_CREATIVE_BRIEF.md`
- Executive/CEO polish: `01_EXECUTIVE_EXPERIENCE_ARCHITECT.md`
- Typography/spacing/card polish: `02_VISUAL_SYSTEM_ARCHITECT.md`
- Animation/interactions: `03_MOTION_SYSTEM_ARCHITECT.md`
- Page flow/storytelling: `04_EDITORIAL_STRUCTURE_ARCHITECT.md`
- Project/case-study work: `05_CASE_STUDY_ARCHITECT.md`
- Token/process planning: `06_TOKEN_EFFICIENCY_ARCHITECT.md`
- Final review/polish: `07_REVIEW_AND_POLISH_ARCHITECT.md`

---

## Avoid Usage Spikes

Avoid:

- Full-page rewrites
- Re-running broad design analysis each session
- Asking for many options when one audit is enough
- Reading every workkit file plus every architect file for a small task
- Revalidating all pages after a page-specific change
- Running full build for markdown-only edits
- Rewriting stable files instead of surgical patches
- Repeating design goals already captured in architect docs

Prefer:

- One page at a time
- One component at a time
- Audit before implementation
- Specific acceptance criteria
- Component-level diffs
- Risk-scaled validation
- Compact worklog entries for micro-changes

---

## Validation Scaling

Markdown-only workkit updates:

- No lint/build required
- Worklog entry required

Small style/data change:

- Lint usually enough
- Browser validation if visual risk exists
- Build can be deferred if part of a batch

Shared component/layout change:

- Browser validate all affected primary pages
- Run lint
- Run build before finishing

Major phase completion:

- Run lint
- Run build
- Browser validate required pages
- Update TASKS, PROJECT_MEMORY, and WORKLOG

---

## Memory Hygiene

Use `PROJECT_MEMORY.md` for durable decisions only.

Avoid turning it into a full diary. Use `WORKLOG.md` for chronological history.

When memory gets too long:

- Keep current status and durable decisions active
- Archive old detailed phase history if needed
- Do not delete without explicit approval

---

## Patch Safety

For workkit updates:

- Prefer append/insert over full replacement
- Back up before editing
- Stop if anchors are missing
- Use `git diff` as final review
- Do not overwrite user-local changes without showing the diff
