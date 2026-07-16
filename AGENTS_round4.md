# AGENTS.md

## Purpose

This repository contains my cybersecurity portfolio website.

Codex must use this file as persistent repo-level guidance.

The redesign documentation lives in:

```text
docs/redesign/
```

## Highest-Priority Project Rule

Before doing any redesign-related work, read:

```text
docs/redesign/README.md
```

That README is the controlling source of truth for the portfolio redesign.

This `AGENTS.md` file tells Codex how to operate in the repository. It does **not** replace the redesign README. It points Codex to the correct source of truth.

## Source of Truth Hierarchy

For redesign work, follow this hierarchy:

1. `docs/redesign/README.md`
2. The user's current instruction in the active Codex session
3. The active phase owner file in `docs/redesign/`
4. Other supporting files in `docs/redesign/`
5. Existing website implementation

If a supporting redesign document conflicts with `docs/redesign/README.md`, follow `README.md` and update the conflicting supporting document.

If the user's current instruction intentionally changes the redesign direction, update `docs/redesign/README.md` so the source of truth stays current.

## Required Redesign Workflow

For every redesign task:

1. Read `docs/redesign/README.md`.
2. Identify the current phase from the phase status board.
3. Read only the supporting phase file needed for the current task.
4. Complete only the requested phase or task.
5. Update the relevant supporting file.
6. Update the phase status board in `docs/redesign/README.md`.
7. Update `docs/redesign/07_IMPLEMENTATION_LOG.md`.
8. Run build/lint/type checks when code changes are made and commands are available.
9. Stop and summarize the work completed.

Do not redesign the entire site in one uncontrolled pass.

## Current Redesign Goal

Move the portfolio away from a generic AI-coded cybersecurity template and toward a modern, premium, professional cybersecurity analyst portfolio.

The current site should move away from:

* Neon teal accents
* Cyber grids
* Repetitive cards
* Metric cards that feel gamified
* Badge walls
* Terminal-style decoration
* Dashboard-like layouts
* Hacker/cyber visual language
* Overly dark sections
* Generic cybersecurity copy

The redesigned site should feel:

* Modern
* Premium
* Professional
* Restrained
* Recruiter-friendly
* Case-study focused
* Credible
* Clean
* Human-written
* Enterprise-ready

## Content Integrity Rules

Do not exaggerate my experience.

Preserve real:

* Cybersecurity metrics
* Project names
* Resume link
* GitHub link
* Contact path
* Vulnerability management work
* DISA STIG remediation work
* PowerShell automation work
* Microsoft Defender/Sentinel/KQL investigation work
* Threat hunting and incident response learning
* Military-to-cybersecurity background where appropriate

Avoid unsupported senior-level claims.

## Visual Direction Rules

Use more:

* Editorial layout
* Strong typography
* Generous whitespace
* Calm visual hierarchy
* Light-first design
* Muted enterprise colors
* Subtle borders
* Soft shadows
* Clean case-study structure
* Clear proof points
* Specific technical outcomes
* Human, direct copywriting

Use less:

* Neon glow
* Cyber grids
* Terminal decorations
* Fake command-line effects
* Matrix visuals
* Fake dashboards
* Excessive badges
* Overly dark sections
* Repetitive equal-card grids
* Generic cybersecurity slogans
* Animated stat counters
* “Access granted” style language

## Design Test

Before keeping or adding any visual element, ask:

> Would this appear on a polished professional security consulting or enterprise SaaS website, or does it look like a cyber-themed template?

If it looks like a template, remove it or redesign it.

## Starting a New Redesign Session

When the user asks for redesign work, do not ask for the full plan again.

Instead:

1. Read this `AGENTS.md`.
2. Read `docs/redesign/README.md`.
3. Determine the current phase.
4. Continue from the phase status board.
5. Ask a clarifying question only if required to avoid a harmful or clearly incorrect change.

## Phase Discipline

If the user says “begin Phase 1,” perform Phase 1 only.

If the user says “continue the redesign,” inspect `docs/redesign/README.md` and `docs/redesign/07_IMPLEMENTATION_LOG.md`, then continue from the next incomplete phase.

If the user asks for a specific section, work only on that section and update the docs accordingly.

## Documentation Update Rules

After each phase or meaningful redesign change, update:

1. `docs/redesign/README.md`
2. The active phase document
3. `docs/redesign/07_IMPLEMENTATION_LOG.md`

The README phase status board must stay current.

The implementation log must include:

* What changed
* Files modified
* Commands run
* Build/lint/type-check results if available
* Remaining blockers or concerns

## Code Quality Rules

When code changes are made:

1. Keep links working.
2. Keep the site mobile responsive.
3. Maintain accessibility and contrast.
4. Run available checks before finishing.
5. Do not introduce unnecessary dependencies.
6. Do not rewrite unrelated parts of the app.

## Copywriting Rules

Use grounded, specific language.

Prefer:

* “Reduced critical server vulnerabilities by 100%”
* “Supported vulnerability management and remediation”
* “Built PowerShell-based remediation workflows”
* “Investigated suspicious activity using Defender and KQL-style analysis”

Avoid:

* “Securing the digital frontier”
* “Access granted”
* “Elite cyber defender”
* “Cyber warrior”
* “Next-generation security expert”
* “Advanced threat expert”
* “Passionate about protecting the digital world”

The site should sound human, professional, and honest.

## Final Acceptance Criteria

The redesign is successful if:

* The site no longer feels like a generic cybersecurity template.
* The design does not rely on neon, grids, terminal styling, or hacker visuals.
* The homepage feels modern, clean, premium, and professional.
* The site clearly communicates real security work and measurable results.
* The projects feel like professional case studies.
* The strongest proof points are visible quickly.
* The site works well on mobile.
* The site remains honest and aligned with actual experience.
* Recruiters and hiring managers can understand the value in under one minute.
* The site still feels technical, but no longer looks like a hacker-themed design.
