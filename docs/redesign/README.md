# Portfolio Website Redesign — Source of Truth

Created: 2026-06-25

This README is the controlling source of truth for the portfolio redesign.

Codex must read this file before making any redesign decisions or code changes.

## Source of Truth Rule

`docs/redesign/README.md` is authoritative.

All other files in this folder are supporting documents.

If any supporting file conflicts with this README:

1. Follow this README.
2. Update the conflicting supporting file.
3. Record the correction in `07_IMPLEMENTATION_LOG.md`.
4. Continue only after the documents agree.

## Supporting Documents

| File | Purpose | Authority |
|---|---|---|
| `README.md` | Master controller, phase status, acceptance criteria, conflict rules | Highest |
| `01_PROJECT_BRIEF.md` | Project goals, audience, positioning, high-level strategy | Supporting |
| `02_SITE_AUDIT.md` | Current site audit and Phase 1 findings | Supporting |
| `03_DESIGN_SYSTEM.md` | Colors, typography, spacing, visual rules, component styling | Supporting |
| `04_HOMEPAGE_REDESIGN.md` | Homepage structure and section plans | Supporting |
| `05_CASE_STUDY_REDESIGN.md` | Project/case-study page structure | Supporting |
| `06_CONTENT_AND_COPY.md` | Approved copy direction, wording to use/avoid | Supporting |
| `07_IMPLEMENTATION_LOG.md` | Files changed, commands run, issues, decisions | Supporting |
| `08_QA_FINAL_REVIEW.md` | Mobile, accessibility, hiring-manager review, final QA | Supporting |

## Project Goal

Redesign my cybersecurity portfolio so it no longer feels like an AI-generated cybersecurity template.

The current site likely relies too heavily on:

- Neon teal accents
- Cyber grid backgrounds
- Repetitive cards
- Metric cards
- Badge walls
- Terminal-style details
- Dashboard-like layouts
- Hacker/cyber visual language
- Overly dark sections
- Generic cybersecurity copy

These elements can be useful for credibility, but together they create a generic “cybersecurity template” feeling.

The new site should feel like a modern, high-end professional portfolio for a cybersecurity analyst.

## Desired Visual Direction

Aim for:

- Premium cybersecurity portfolio
- Modern enterprise SaaS feel
- Editorial case-study layout
- Light-first design with restrained dark sections
- Strong typography
- Calm, professional visual language
- Clear proof of technical ability
- Recruiter and hiring-manager friendly

Avoid:

- Neon teal glow
- Hacker aesthetic
- Matrix/code rain visuals
- Fake terminal decorations
- Fake dashboards
- Cyber grid backgrounds
- Excessive badges
- Too many equal-sized cards
- Overly dark sections everywhere
- Generic AI-generated marketing copy

## Professional Positioning

The site should position me as a cybersecurity analyst focused on:

- Vulnerability management
- Secure configuration
- DISA STIG remediation
- PowerShell automation
- Microsoft Defender investigations
- Sentinel/KQL-style analysis
- Threat hunting
- Incident response fundamentals
- Practical risk reduction

## Preserve

Codex must preserve real experience and avoid exaggeration.

Preserve:

- Real metrics
- Real project names
- Resume link
- GitHub link
- Contact path
- Vulnerability management work
- Hardening and DISA STIG remediation work
- PowerShell automation work
- Defender/Sentinel/KQL investigation work
- Threat hunting and incident response fundamentals
- Military-to-cybersecurity background where appropriate

## Global Design Principles

Use more:

- Editorial layout
- Strong typography
- Generous whitespace
- Calm visual hierarchy
- Light-first design
- Muted enterprise colors
- Subtle borders
- Soft shadows
- Clean case-study structure
- Clear proof points
- Specific technical outcomes
- Human, direct copywriting

Use less:

- Neon glow
- Cyber grids
- Terminal decorations
- Fake command-line effects
- Matrix visuals
- Fake dashboards
- Excessive badges
- Overly dark sections
- Repetitive equal-card grids
- Generic cybersecurity slogans
- Animated stat counters
- “Access granted” style language

## Design Test

Before adding or keeping any visual element, ask:

> Would this appear on a polished professional security consulting or enterprise SaaS website, or does it look like a cyber-themed template?

If it looks like a template, remove it or redesign it.

## Phase Status Board

Codex must update this table after every phase.

| Phase | Status | Owner File | Summary | Blockers |
|---|---|---|---|---|
| Phase 1 — Site Audit | Not started | `02_SITE_AUDIT.md` |  |  |
| Phase 2 — Design System | Not started | `03_DESIGN_SYSTEM.md` |  |  |
| Phase 3 — Homepage Structure | Not started | `04_HOMEPAGE_REDESIGN.md` |  |  |
| Phase 4 — Hero Section | Not started | `04_HOMEPAGE_REDESIGN.md` / `06_CONTENT_AND_COPY.md` |  |  |
| Phase 5 — Proof / Metrics | Not started | `04_HOMEPAGE_REDESIGN.md` |  |  |
| Phase 6 — Featured Case Study | Not started | `04_HOMEPAGE_REDESIGN.md` / `05_CASE_STUDY_REDESIGN.md` |  |  |
| Phase 7 — Selected Projects | Not started | `04_HOMEPAGE_REDESIGN.md` / `05_CASE_STUDY_REDESIGN.md` |  |  |
| Phase 8 — Capabilities | Not started | `04_HOMEPAGE_REDESIGN.md` / `06_CONTENT_AND_COPY.md` |  |  |
| Phase 9 — Background | Not started | `04_HOMEPAGE_REDESIGN.md` / `06_CONTENT_AND_COPY.md` |  |  |
| Phase 10 — Case Study Pages | Not started | `05_CASE_STUDY_REDESIGN.md` |  |  |
| Phase 11 — Template Signal Cleanup | Not started | `02_SITE_AUDIT.md` / `07_IMPLEMENTATION_LOG.md` |  |  |
| Phase 12 — Mobile / Accessibility / QA | Not started | `08_QA_FINAL_REVIEW.md` |  |  |
| Phase 13 — Final Review | Not started | `08_QA_FINAL_REVIEW.md` |  |  |

## Required Codex Workflow

For every phase:

1. Read this README first.
2. Read the supporting owner file for the current phase.
3. Complete only the current phase unless explicitly instructed otherwise.
4. Update the supporting owner file.
5. Update this README phase status board.
6. Update `07_IMPLEMENTATION_LOG.md`.
7. Run build/lint/type checks when code changes are made and commands are available.
8. Stop and summarize what changed.

## Conflict Resolution

If documents conflict, follow this order:

1. `README.md`
2. Current user instruction in the active Codex session
3. Current phase owner file
4. Other supporting redesign files
5. Existing website implementation

Codex must not silently follow a lower-priority document when it conflicts with this README.

## Phase Execution Summary

### Phase 1 — Site Audit

Audit the current site. Do not edit code.

Deliverables:

- Tech stack identified
- Key files/directories identified
- AI-coded/hacker-template visual patterns identified
- Content to preserve identified
- Content to rewrite identified
- Recommended implementation order documented

### Phase 2 — Design System

Refactor the global design foundation.

Deliverables:

- Muted color palette
- Typography scale
- Spacing scale
- Card/button styles
- Reduced neon/glow/grid effects
- Accessible contrast

### Phase 3 — Homepage Structure

Restructure the homepage around editorial hierarchy.

Preferred structure:

1. Hero
2. Proof / impact section
3. Featured case study
4. Selected projects
5. Capabilities
6. Background
7. Contact CTA

### Phase 4 — Hero Section

Make the hero professional, direct, and outcome-focused.

Avoid terminal/hacker language.

### Phase 5 — Proof / Metrics

Keep metrics, but present them as executive proof points, not gamified dashboard stats.

Metrics to preserve:

- 100% critical vulnerability reduction
- 92% high vulnerability reduction
- 88% medium vulnerability reduction
- 100% brute-force incident reduction

### Phase 6 — Featured Case Study

Create one prominent featured case study, preferably the Vulnerability Management Program.

Use:

- Problem
- Action
- Result
- Tools
- CTA

### Phase 7 — Selected Projects

Redesign supporting projects as professional case-study previews, not a generic card grid.

### Phase 8 — Capabilities

Replace badge walls with grouped capabilities.

Suggested groups:

- Vulnerability Management
- Hardening & Compliance
- Security Operations & Investigation
- Automation & Scripting

### Phase 9 — Background

Create a concise professional background section connecting USMC, operations leadership, cybersecurity training, and current security work.

### Phase 10 — Case Study Pages

Redesign project pages into professional case studies.

Suggested structure:

1. Title
2. Role alignment
3. Executive summary
4. Problem
5. Environment/tools
6. Approach
7. Evidence
8. Result
9. What I learned
10. Hiring relevance

### Phase 11 — Template Signal Cleanup

Search for and remove remaining template signals:

- Neon teal glows
- Animated gradients
- Cyber grids
- Terminal decorations
- “Access granted” copy
- Matrix/code rain
- Excessive icons
- Excessive badges
- Repetitive card grids
- Generic cybersecurity slogans

### Phase 12 — Mobile / Accessibility / QA

Review:

- Mobile spacing
- Font sizes
- Tap targets
- Contrast
- Navigation
- Layout overflow
- Resume/GitHub/contact links
- Build/lint/type checks

### Phase 13 — Final Review

Review from two perspectives:

1. Senior frontend designer
2. Cybersecurity hiring manager

## Final Acceptance Criteria

The redesign is successful if:

- The site no longer feels like a generic cybersecurity template.
- The design does not rely on neon, grids, terminal styling, or hacker visuals.
- The homepage feels modern, clean, premium, and professional.
- The site clearly communicates my security work and measurable results.
- The projects feel like professional case studies.
- The strongest proof points are visible quickly.
- The site works well on mobile.
- The site remains honest and aligned with my actual experience.
- Recruiters and hiring managers can understand my value in under one minute.
- The site still feels technical, but no longer looks like a hacker-themed design.
