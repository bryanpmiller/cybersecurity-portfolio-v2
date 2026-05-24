# AGENTS.md — Portfolio Repo Instructions for Codex

## Purpose

This repository is Bryan Miller's cybersecurity portfolio website.

Codex should help improve the site as a professional, recruiter-friendly, cybersecurity proof-of-work portfolio.

This file should live at the repository root.

Supporting workflow files live in the `codex/` folder.

---

## Required Startup Behavior

Before editing code, Codex must read:

1. `codex/CODEX_START_HERE.md`
2. `codex/TASKS.md`
3. `codex/PROJECT_MEMORY.md`
4. `codex/WORKLOG.md`

Then Codex must:

1. Identify the current phase and next incomplete task in `codex/TASKS.md`.
2. Summarize the current project state.
3. Explain the planned change briefly.
4. Make targeted, reviewable edits.

---

## Portfolio Goal

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
