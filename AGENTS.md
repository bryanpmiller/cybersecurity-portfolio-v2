# AGENTS.md — Portfolio Repo Instructions for Codex

## Purpose

This repository is Bryan Miller's cybersecurity portfolio website.

Codex should help improve the site as a professional, recruiter-friendly, cybersecurity proof-of-work portfolio.

This file should live at the repository root.

Supporting workflow files live in the `codex/` folder.

---

## Required Startup Behavior

Before editing code, Codex must read:

1. `codex/TASKS.md`
2. `codex/PROJECT_MEMORY.md`
3. `codex/WORKLOG.md`

Then Codex must:

1. Identify the current phase and next incomplete task in `codex/TASKS.md`.
2. Summarize the current project state.
3. Explain the planned change briefly.
4. Make targeted, reviewable edits.

`codex/CODEX_START_HERE.md` is deprecated for default startup. It may remain in the repository as historical reference, but Codex should not read it during normal startup unless Bryan explicitly asks to review legacy workflow notes.

For Round 3 premium creative systems work, Codex should also read only the relevant architect file(s) from `codex/architects/`. Do not read every architect file by default.

---## Portfolio Goal

The site should clearly showcase:

- Resume
- Cybersecurity projects
- Vulnerability management work
- SecOps / detection engineering experience
- PowerShell remediation work
- KQL, Microsoft Defender, and Sentinel experience
- Tenable exposure
- DISA STIG hardening
- Azure / NSG / firewall hardening work
- GitHub proof-of-work documentation

The site should feel polished enough to list on a resume.

---

## Design Direction

The portfolio should feel:

- Modern
- Professional
- Technical
- Cybersecurity-focused
- Recruiter-friendly
- Specific to Bryan's real work
- Clean and polished

Avoid:

- Fake hacker aesthetics
- Excessive neon effects
- Matrix-style backgrounds
- Generic AI-template language
- Overly flashy animations
- Directly copying any reference website

Use reference websites for inspiration only.

---

## Round 3 Architect Guidance

Round 3 adds a creative systems layer to the existing workkit.

The architect files live in:

```text
codex/architects/
```

Use them as targeted guidance, not as required reading for every task.

### Architect Routing

Read only the architect file(s) relevant to the task:

- Overall premium direction: `codex/architects/00_CREATIVE_BRIEF.md`
- Executive / CEO-facing polish: `codex/architects/01_EXECUTIVE_EXPERIENCE_ARCHITECT.md`
- Typography, spacing, cards, colors, and visual consistency: `codex/architects/02_VISUAL_SYSTEM_ARCHITECT.md`
- Motion, hover states, scroll reveals, and interaction polish: `codex/architects/03_MOTION_SYSTEM_ARCHITECT.md`
- Homepage/page flow, storytelling, and section order: `codex/architects/04_EDITORIAL_STRUCTURE_ARCHITECT.md`
- Project cards, case studies, evidence blocks, and GitHub proof paths: `codex/architects/05_CASE_STUDY_ARCHITECT.md`
- Token usage, task scope, patch safety, and validation scaling: `codex/architects/06_TOKEN_EFFICIENCY_ARCHITECT.md`
- Final premium polish and review gates: `codex/architects/07_REVIEW_AND_POLISH_ARCHITECT.md`

### Round 3 Operating Rules

- Do not perform broad redesigns without first identifying the exact section, component, and page scope.
- Prefer audit-first, implementation-second workflows.
- Prefer improving existing proof surfaces before adding new ones.
- Preserve supported claims, metrics, project facts, and existing substantive copy unless Bryan explicitly approves changes.
- Use patch-style edits and small reviewable diffs.
- Scale validation to risk, following the existing validation rules.
- If architect guidance conflicts with `AGENTS.md`, `AGENTS.md` wins.
- If architect guidance conflicts with supported resume/site facts, supported facts win.

---
## Content Rules

Do not invent:

- Metrics
- Projects
- Experience
- Certifications
- Employers
- Tools
- Outcomes

---

## Content Preservation Rule

For this portfolio redesign, Codex should focus on visual design, layout, styling, responsiveness, accessibility, and interaction polish.

Do not rewrite, shorten, expand, rephrase, or replace existing page copy unless I explicitly ask for content changes.

This includes:

- Hero headline text
- Hero paragraph text
- Project descriptions
- Resume/experience wording
- Skills wording
- Button labels
- Section headings
- Metrics/outcome wording
- Contact text

Codex may make only minor text-related changes when required for functionality or accessibility, such as:

- Adding missing `alt` text
- Adding `aria-label` values
- Fixing obviously broken labels
- Preserving existing text while moving it into a new layout/component

Codex may also rename organizational labels when needed for clearer grouping, as long as the underlying claims, tools, experience, metrics, descriptions, and button/link labels remain supported and unchanged. Examples include skill category names, card grouping labels, or section-adjacent taxonomy labels.

If a design change would require rewriting content, Codex should stop and ask before changing the wording.

Default rule:

Preserve the existing words. Improve the design around them.

---

Use only supported claims.

When metrics are already supported by resume or project content, they may be used carefully.

Preferred writing style:

- Clear
- Direct
- Human
- Specific
- Professional
- No fluff

Avoid phrases like:

- Passionate about cybersecurity
- Results-driven professional
- Leveraging cutting-edge technology
- Robust solutions
- Dynamic environment
- Proven track record

---

## Work Style

Codex should:

- Make small, reviewable changes.
- Work section by section.
- Preserve existing functionality.
- Keep mobile responsiveness in mind.
- Keep accessibility basics in mind.
- Avoid unnecessary dependencies.
- Avoid unlicensed fonts or assets.
- Run available checks when appropriate.
- Explain any build or lint failures.
- Preserve existing page copy unless Bryan explicitly asks for wording changes.

---

## Workkit Adjustments / Improvements

Adjustment: When Codex updates the workkit itself, label each change as an `Adjustment` or `Improvement` in the tracking entry so process changes are easy to distinguish from portfolio implementation work.

Improvement: Before adding a new visual proof surface, check nearby sections for duplicate claims, metrics, tools, or workflow summaries. Prefer improving or replacing an existing surface over adding another card that repeats the same information.

Improvement: When adding `aria-*` attributes to shared wrapper components, confirm the component forwards arbitrary HTML props. If it does not, use an internal semantic label or intentionally update the shared component API.

Improvement: After `next build`, check whether generated files such as `next-env.d.ts` changed. If the change is unrelated validation churn, restore it before finishing.

---

## Required Tracking Updates

After each major task, Codex must update:

1. `codex/TASKS.md`
   - Check off completed items only.
   - Do not add long diary-style notes.

2. `codex/PROJECT_MEMORY.md`
   - Add durable design decisions, constraints, architecture notes, and approved/rejected ideas.

3. `codex/WORKLOG.md`
   - Add a dated progress entry with completed work, files changed, issues found, checks run, and next steps.

For micro-changes, Codex may use lighter tracking:

- A micro-change is a small, localized fix or approved content/taxonomy tweak that does not complete a roadmap task, introduce a durable design rule, change architecture, or affect multiple workflows.
- For micro-changes, update `codex/WORKLOG.md` with a compact entry only.
- Skip `codex/TASKS.md` unless a roadmap checkbox is completed or the current phase/next task changes.
- Skip `codex/PROJECT_MEMORY.md` unless the change creates or updates a durable decision, constraint, approved/rejected idea, architecture note, or content rule.
- Batch related micro-changes into one compact worklog entry when they happen in the same work session.

---

## Validation Expectations

Before finishing a task, run relevant checks when available.

Common examples:

```bash
npm run lint
npm run build
npm test
```

If checks cannot be run, document why in `codex/WORKLOG.md`.

For micro-changes, choose the lightest relevant validation:

- Markdown-only workkit updates usually do not need lint/build.
- Small copy/data/style edits may run lint first and defer build until the end of a related batch.
- Browser validation is expected for visual layout, responsive, interaction, or accessibility-risk changes, but is optional for pure markdown or low-risk data changes.
- Major phase completion should still run the available full checks, typically lint and build.

---

## Final Response Format After Work

After completing a task, Codex should respond with:

### Summary

Briefly explain what changed.

### Files Changed

- `path/to/file`
- `path/to/file`

### Checks Run

```bash
npm run lint
npm run build
```

Result:
- Pass / Fail / Not run

### Tracking Files Updated

- `codex/TASKS.md`: Checked off completed task items.
- `codex/PROJECT_MEMORY.md`: Added durable decisions/context if needed.
- `codex/WORKLOG.md`: Added dated progress entry.

### Issues / Notes

Mention any errors, blockers, or things that need review.

### Proposed upgrades to the Workkit

 If you find other areas worth checking or updating as you work present them to me here. This is a first pass with this rehaul kit and I want to improve it where possible as we work. Dont automatically make changes, but present them to me and we can decide together.

### Recommended Next Task

State the next logical task from `codex/TASKS.md`.
