# 05 — Case Study Redesign

This document owns the project and case-study page redesign.

`README.md` remains the source of truth. If this file conflicts with `README.md`, follow `README.md` and update this file.

## Phase 10 Objective

Redesign individual project pages into professional case studies.

The projects should feel like credible security work summaries, not lab dumps or hacker-themed writeups.

## Case Study Structure

Each project page should use:

1. Title
2. Role alignment
3. Executive summary
4. Hiring relevance
5. Problem
6. Environment/tools
7. Approach
8. Evidence
9. Result
10. What I learned

## Design Direction

Use:

- Clean article layout
- Strong headings
- Readable line length
- Evidence callouts
- Minimal badges
- Clean code/query blocks for real technical work only
- Clear section rhythm
- Strong mobile readability

Avoid:

- Fake terminal visuals
- Decorative hacker styling
- Dense walls of text
- Excessive badges
- Overly dramatic language
- Unsupported claims

## Possible Case Studies

Codex should identify actual existing project pages and map them here.

| Case Study | Current URL/File | Current Status | Changes Needed |
|---|---|---|---|
| Vulnerability Management Program | `/projects/vulnerability-management-program` / `app/projects/vulnerability-management-program/page.tsx` | Implemented through shared `ProjectDetail` component and `lib/data/projects.ts` content. | Complete for Phase 10. |
| DISA STIG Remediation | `/projects/disa-stig-remediation` / `app/projects/disa-stig-remediation/page.tsx` | Implemented through shared `ProjectDetail` component and `lib/data/projects.ts` content. | Complete for Phase 10. |
| RDP Compromise Investigation | `/projects/password-spray-threat-hunt` / `app/projects/password-spray-threat-hunt/page.tsx` | Implemented through shared `ProjectDetail` component and `lib/data/projects.ts` content. | Complete for Phase 10. |
| Akira Ransomware / Threat Hunt Investigation | `/projects/akira-ransomware-threat-hunt` / `app/projects/akira-ransomware-threat-hunt/page.tsx` | Implemented through shared `ProjectDetail` component and `lib/data/projects.ts` content. | Complete for Phase 10. |
| Microsoft Defender / Sentinel Detection Work | Covered by the Password Spray and Akira threat-hunt case-study pages. | Represented as Defender/Sentinel-style investigation content rather than a separate route. | Keep as supporting capability unless a dedicated project route is added later. |

## Case Study Template

Codex may use this structure when editing project pages.

```markdown
# Project Title

## Role Alignment

Short line describing what type of security work this demonstrates.

## Executive Summary

One concise paragraph summarizing the project, the work performed, and the value.

## Hiring Relevance

Why this matters to a security team.

## Problem

What was exposed, misconfigured, unclear, vulnerable, or worth investigating?

## Environment / Tools

- Tool 1
- Tool 2
- Tool 3

## Approach

What steps were taken?

## Evidence

What proof, metrics, artifacts, detections, queries, screenshots, or results support the work?

## Result

What improved?

## What I Learned

What skill or judgment improved?
```

## Code / Query Block Rules

Allowed:

- Real PowerShell
- Real KQL
- Real commands
- Real remediation snippets
- Real detection logic

Avoid:

- Fake shell prompts
- “Access granted” copy
- Decorative terminal output
- Hacker-style storytelling

## Phase 10 Required Notes

### Project Index Refinement

The `/projects` page should use the same restrained case-study card language as the homepage, with a slightly richer dedicated-page treatment:

- Use a calm project review path instead of dark mini navigation cards.
- Use full-width case-study panels rather than the older animated project-preview grid.
- Preserve the homepage Problem / Outcome / Concepts evidence band.
- Add numbered case-study ordering on the dedicated project index.
- Show recruiter-facing hiring relevance on each expanded project card.
- Include GitHub evidence actions where repository links exist.
- Keep the layout mobile responsive without horizontal overflow.

### Case Study Pages Found

| Page | File/Route | Current Status | Changes Needed |
|---|---|---|---|
| Vulnerability Management Program Implementation | `/projects/vulnerability-management-program` | Redesigned as professional case study. | None for Phase 10. |
| DISA STIG Remediation Project | `/projects/disa-stig-remediation` | Redesigned as professional case study. | None for Phase 10. |
| Password Spray Threat Hunt: RDP Compromise Investigation | `/projects/password-spray-threat-hunt` | Redesigned as professional case study. | None for Phase 10. |
| The Buyer / Akira Ransomware Threat Hunt | `/projects/akira-ransomware-threat-hunt` | Redesigned as professional case study. | None for Phase 10. |

### Case Study Template Applied

- [x] Title
- [x] Role alignment
- [x] Executive summary
- [x] Problem
- [x] Environment/tools
- [x] Approach
- [x] Evidence
- [x] Result
- [x] What I learned
- [x] Hiring relevance

### Files Changed

| File | Change Summary |
|---|---|
| `components/sections/ProjectDetail.tsx` | Reworked project detail pages into an article-style case-study layout with role alignment, executive summary, hiring relevance directly below the summary, proof stats, problem, environment/tools, approach, evidence, result, lessons, case-study focus context, and a sticky desktop evidence-links panel with uniform GitHub-icon buttons. |
| `components/sections/ProjectCaseStudyCard.tsx` | Added a shared homepage/projects case-study card component with compact and expanded modes. |
| `app/page.tsx` | Reused the shared compact case-study card component for homepage featured case studies. |
| `app/projects/page.tsx` | Replaced the old project-preview grid with a refreshed project review path and expanded full-width case-study cards. |
| `lib/data/projects.ts` | Added `hiringRelevance` copy to each case study so the required Phase 10 template is complete. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Documented discovered routes, template completion, and Phase 10 file changes. |
| `docs/redesign/README.md` | Updated Phase 10 status board entry. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Logged Phase 10 decisions, files changed, commands, verification, and next phase. |

## Phase 10 Completion Checklist

- [x] Case study pages identified
- [x] Case study structure applied
- [x] Decorative terminal styling removed
- [x] Real code/query blocks preserved where useful
- [x] Readability improved
- [x] Mobile layout reviewed
- [x] `/projects` index refreshed to match homepage case-study styling
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated
