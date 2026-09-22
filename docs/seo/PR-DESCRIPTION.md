# Draft PR description — not submitted

## Current integration state — 2026-09-21

User authorized bringing latest main into updates/rewording locally. Branch fast-forwarded to 52c1de7 (merged resume redesign), then uncommitted rewording/security changes reapplied. Recovery snapshot retained in Git stash, named "Safety snapshot: rewording before integrating main 52c1de7". Shared links, sitemap and lockfile reconciled. Resume route sources, lib/data/resume.ts, lib/data/skills.ts, all PDF assets, Button and next.config.ts match origin/main exactly. The current site has 14 public pages including /resume/main, /resume/soc, /resume/vulnerability and /resume/it-support; all 14 remain in the sitemap. Lint, build, TypeScript and audits pass; independent integration verification PASS. All 28 rendered route/viewport checks passed (14 routes at 1440px and 390px): metadata, headings, internal links/fragments, image loading and overflow. Keyboard skip focus and final console check passed. All four resume PDFs return 200 application/pdf with SAMEORIGIN. Evidence: combined-browser-audit.json in the existing local review scratch directory. Historical scope/base/count statements below are superseded by this section. No new commit, push, PR, deployment or merge into main; changes remain uncommitted on updates/rewording.

## Current scope correction — 2026-09-21

User excluded the resume page from this branch. Resume-page edits, shared resume/skills-data edits, and public PDF replacements/additions have been withdrawn relative to the branch base. The separate updates/resumepage branch and original resumes remain untouched. About/home content now uses experience.ts and portfolio-skills.ts; resume-specific profile fields and sitemap date retain base values. General navigation and sitewide branding remain reworded. The earlier resume implementation/validation details below are historical, not current deliverables. Added redacted PDF copies were moved outside the repository to C:/Users/pcgam/AppData/Local/Temp/rewording-withdrawn-resumes for recovery. Coordinator owns the two new data files and consumer import changes. Lint/build passed after isolation; no deployment, merge or push performed.

## Approved security follow-up (2026-09-21)

Next.js is now locked to 16.3.5, PostCSS to 8.5.28, and affected transitive packages are refreshed. Full and production-only audits both report zero vulnerabilities; lint, types and production build pass. Generated root-params type import retained. This supersedes the historical dependency-risk note below for the local branch. Render is unchanged; no publishing actions performed.

## Suggested title

Broaden portfolio positioning and publish phone-redacted resume choices

## Summary

- Position Bryan Miller across cybersecurity, systems security and operations, with evidence-first wording.
- Separate professional networking/leadership from lab and cyber-range security work; scope metrics and investigation limitations correctly.
- Provide Vulnerability Management, SOC / Security Operations and IT Support resume PDFs, with permanent phone redaction in site copies only.
- Preserve design, ten routes, project order, evidence links and canonical policy; update content guidance and review records.

## Validation

2026-09-16 UTC: npm run lint, npx tsc --noEmit, npm run build and git diff --check exited 0. Twenty desktop/mobile rendered checks passed; all thirteen distinct external HTTP links returned 200. Independent factual/metadata/PDF review passed. Original PDFs retain their before/after SHA-256 hashes; extracted content and visual comparisons confirm redaction and preserved body content.

## Risks and follow-up

Existing dependency audit lists nine advisories, including one critical; remediation is separate from this rewrite. Native 404 metadata behavior is unchanged. No public deployment has occurred. After separately approved release, verify live metadata and all PDF URLs, including cached legacy downloads. Full evidence and limitations: IMPLEMENTATION-REPORT.md, ROUTES.md and INTERNAL-LINK-REPORT.md.

This is a local draft only. No commit, push, PR, merge or deployment was performed.
