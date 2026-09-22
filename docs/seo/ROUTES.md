# Rendered route inventory

## Current integration state — 2026-09-21

User authorized bringing latest main into updates/rewording locally. Branch fast-forwarded to 52c1de7 (merged resume redesign), then uncommitted rewording/security changes reapplied. Recovery snapshot retained in Git stash, named "Safety snapshot: rewording before integrating main 52c1de7". Shared links, sitemap and lockfile reconciled. Resume route sources, lib/data/resume.ts, lib/data/skills.ts, all PDF assets, Button and next.config.ts match origin/main exactly. The current site has 14 public pages including /resume/main, /resume/soc, /resume/vulnerability and /resume/it-support; all 14 remain in the sitemap. Lint, build, TypeScript and audits pass; independent integration verification PASS. All 28 rendered route/viewport checks passed (14 routes at 1440px and 390px): metadata, headings, internal links/fragments, image loading and overflow. Keyboard skip focus and final console check passed. All four resume PDFs return 200 application/pdf with SAMEORIGIN. Evidence: combined-browser-audit.json in the existing local review scratch directory. Historical scope/base/count statements below are superseded by this section. No new commit, push, PR, deployment or merge into main; changes remain uncommitted on updates/rewording.

## Current scope correction — 2026-09-21

User excluded the resume page from this branch. Resume-page edits, shared resume/skills-data edits, and public PDF replacements/additions have been withdrawn relative to the branch base. The separate updates/resumepage branch and original resumes remain untouched. About/home content now uses experience.ts and portfolio-skills.ts; resume-specific profile fields and sitemap date retain base values. General navigation and sitewide branding remain reworded. The earlier resume implementation/validation details below are historical, not current deliverables. Added redacted PDF copies were moved outside the repository to C:/Users/pcgam/AppData/Local/Temp/rewording-withdrawn-resumes for recovery. Coordinator owns the two new data files and consumer import changes. Lint/build passed after isolation; no deployment, merge or push performed.

Verified 2026-09-16 UTC against the production build at localhost:3100: ten static public pages, each tested at 1440px and 390px. Coordinator owns this inventory; independent verifier confirmed built HTML.

| Route | Title | Description | Canonical | H1 |
|---|---|---|---|---|
| / | Bryan Miller \| Cybersecurity Portfolio | Cybersecurity lab practice grounded in professional systems support and operational leadership. | https://bryanpmiller.com/ | Bryan Miller |
| /about | About \| Bryan Miller | Bryan Miller’s professional background in facility networking and Marine Corps leadership, alongside cybersecurity education and cyber-range practice. | https://bryanpmiller.com/about | Systems experience. Operational perspective. |
| /resume | Resumes & Experience \| Bryan Miller | Bryan Miller’s professional experience, cybersecurity labs, and public resumes for vulnerability management, SOC/security operations, and IT support. | https://bryanpmiller.com/resume | Resumes & experience |
| /skills | Skills \| Bryan Miller | Bryan Miller’s skills in vulnerability management, SecOps labs, PowerShell hardening, professional network support, and operational leadership. | https://bryanpmiller.com/skills | Security, systems, and operational skills |
| /contact | Contact \| Bryan Miller | Contact Bryan Miller about cybersecurity, security operations, or systems support opportunities. Find email, LinkedIn, project evidence, and role-specific resumes. | https://bryanpmiller.com/contact | Let's get in touch |
| /projects | Projects \| Bryan Miller | Cybersecurity lab and cyber-range case studies: vulnerability management, PowerShell STIG remediation, password spray analysis, and ransomware investigation. | https://bryanpmiller.com/projects | Security case studies with GitHub evidence |
| /projects/vulnerability-management-program | Vulnerability Management Program Implementation \| Bryan Miller | Windows Server lab covering authenticated Tenable scanning, prioritized remediation, and verification, alongside simulated policy and stakeholder coordination. | https://bryanpmiller.com/projects/vulnerability-management-program | Vulnerability Management Program Implementation |
| /projects/disa-stig-remediation | DISA STIG Remediation Project \| Bryan Miller | PowerShell remediation scripts with screenshot validation for selected Windows 11 DISA STIG findings in a lab environment. | https://bryanpmiller.com/projects/disa-stig-remediation | DISA STIG Remediation Project |
| /projects/password-spray-threat-hunt | Password Spray Threat Hunt: RDP Compromise Investigation \| Bryan Miller | Cyber-range investigation using Microsoft Defender for Endpoint and KQL to trace RDP access, execution, persistence, defense evasion, command-and-control activity, and attempted exfiltration. | https://bryanpmiller.com/projects/password-spray-threat-hunt | Password Spray Threat Hunt: RDP Compromise Investigation |
| /projects/akira-ransomware-threat-hunt | The Buyer / Akira Ransomware Threat Hunt \| Bryan Miller | Cyber-range Akira ransomware hunt using Microsoft Defender telemetry to reconstruct remote access, staging, lateral movement, defense evasion, data staging, and impact artifacts. | https://bryanpmiller.com/projects/akira-ransomware-threat-hunt | The Buyer / Akira Ransomware Threat Hunt |

## Shared verified policy

All ten rows: indexable, robots `index, follow`, static rendering, one H1, no heading-level skips; Open Graph titles/descriptions match page metadata and Twitter descriptions match. No JSON-LD exists or is added (schema validation n/a). Metadata uses the existing Next.js Metadata API and shared origin helper. All internal destinations, fragments and images resolve; links have accessible names. Each route is in sitemap.xml and reachable through navigation or project cards. No dynamic route instances or private/admin/draft routes exist.

## Non-page endpoints and exceptions

| Endpoint | Result / policy |
|---|---|
| /robots.txt | 200; existing production-origin sitemap reference retained |
| /sitemap.xml | 200; exactly ten public canonical URLs |
| /not-a-page | 404; native error H1 and noindex; inherited index, follow is also emitted (pre-existing; restrictive noindex applies) |
| /resume/ | 308 to /resume |
| /resume?source=review | 200; canonical remains /resume |
| /resume/*.pdf | Four public PDF files return 200; legacy filename serves the redacted vulnerability variant |

Framework error boundaries remain unchanged; they are not promoted as canonical public routes. No new redirects or indexing policy were introduced.

Evidence: browser-audit.json and link-audit.json in the local QA scratch directory documented in IMPLEMENTATION-REPORT.md. Overall route audit: done.
