# 04 — Homepage Redesign

This document owns Phases 3 through 9.

`README.md` remains the source of truth. If this file conflicts with `README.md`, follow `README.md` and update this file.

## Homepage Objective

Redesign the homepage around editorial hierarchy, proof, and case-study credibility instead of repetitive cards, grids, badges, and cyber-themed visuals.

## Preferred Homepage Structure

1. Hero
2. Proof / impact section
3. Featured case studies
4. Capabilities
5. Background
6. Contact CTA

## Homepage Must Answer

- Who am I?
- What cybersecurity work do I do?
- What measurable proof do I have?
- Which projects should a hiring manager review?
- How can someone contact me?

## Avoid

- Making every section a card grid
- Equal visual weight for every item
- Badge walls
- Fake terminal elements
- Dashboard-heavy layouts
- Neon stat cards
- Cyber grid backgrounds

---

# Phase 3 — Homepage Structure

## Objective

Restructure the homepage around editorial hierarchy.

## Required Notes

### Previous Homepage Structure

- Hero
- Combined evidence section containing risk reduction dashboards, network security metrics, and resume highlights
- Featured projects grid

### New Homepage Structure

- Hero
- Proof / impact section
- Featured case studies
- Capabilities
- Background
- Contact CTA

### Components Affected

| Component/File | Change Needed |
|---|---|
| `app/page.tsx` | Reordered homepage into the approved editorial sequence and now renders one unified featured case-studies section instead of separate featured and selected-project sections. |
| `components/sections/FeaturedProjects.tsx` | No longer used by the homepage project section after the unified featured case-study refinement. |
| `components/sections/SkillsOverview.tsx` | Reused existing capabilities section as a homepage structural section for later Phase 8 refinement. |

### Content Moved or Consolidated

- Resume highlights moved out of the proof area and into a dedicated background section.
- The project area now uses one unified featured case-studies section instead of separate featured and supporting project sections.
- Password Spray, The Buyer, Vulnerability Management, and DISA appear in the user-requested order.
- Contact path added as a dedicated closing CTA rather than relying only on navigation.

## Phase 3 Checklist

- [x] Homepage structure revised
- [x] Section order improved
- [x] Repetitive sections consolidated
- [x] Editorial hierarchy established
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 4 — Hero Section

## Objective

Make the hero professional, direct, and outcome-focused.

## Hero Should Communicate

- I am a cybersecurity analyst
- I focus on practical risk reduction
- I work across vulnerability management, hardening, automation, and investigations
- My work produces measurable improvements

## Avoid

- “Securing the digital frontier”
- “Access granted”
- Terminal prompts
- Fake command-line text
- Hacker phrases
- Overly dramatic cybersecurity language
- Badge overload above the fold

## Copy Direction

Preferred headline:

> Cybersecurity analyst focused on reducing operational risk.

Preferred supporting copy:

> I work across vulnerability management, secure configuration, PowerShell remediation, and security investigations — translating technical findings into measurable improvements.

CTA direction:

- View Work
- Download Resume

Optional secondary links:

- GitHub
- LinkedIn

## Required Notes

### Final H1

> Bryan Miller

### Final Role Line

> Vulnerability Management & Security Analyst

### Final Supporting Copy

> Cybersecurity analyst focused on reducing operational risk. I work across vulnerability management, secure configuration, PowerShell remediation, and security investigations, translating technical findings into measurable improvements.

### CTA Labels

- View Case Studies
- Download Resume
- View GitHub

### Files Changed

| File | Change Summary |
|---|---|
| `components/sections/HeroSection.tsx` | Replaced the previous live-signal/dashboard-style hero panel with a restrained portfolio evidence panel, restored Bryan Miller as the controlled H1, removed the generic hero eyebrow, matched the name color to the supporting paragraph color, placed Vulnerability Management & Security Analyst below as the role line, reduced CTA sizing, moved credential pills below the buttons, and removed the oversized headline treatment. |
| `lib/data/profile.ts` | Rolled the risk-reduction sentence into the supporting positioning copy as the first sentence. |

## Phase 4 Checklist

- [x] Hero copy rewritten
- [x] Terminal/hacker language removed
- [x] Hero visual styling simplified
- [x] CTAs clarified
- [x] Mobile hero reviewed
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 5 — Proof / Metrics Section

## Objective

Keep the metrics, but make them feel like executive proof points rather than gamified dashboard stats.

## Metrics To Preserve

- 100% critical vulnerability reduction
- 92% high vulnerability reduction
- 88% medium vulnerability reduction
- 100% RDP-related brute-force attempt reduction

## Design Direction

Use:

- Large numbers
- Minimal labels
- Short explanatory context
- Clean alignment
- Generous spacing

Avoid:

- Glowing metric cards
- Animated counters
- Dashboard visuals
- Neon borders
- Dense stat grids

## Suggested Copy

> In my current security internship, I supported vulnerability management and remediation work that reduced critical server findings by 100%, high findings by 92%, and medium findings by 88%.

## Required Notes

### Final Proof Section Copy

> In my current security internship, I supported vulnerability management and remediation work that reduced critical server findings by 100%, high findings by 92%, and medium findings by 88%.
>
> Inbound NSG and firewall controls were applied to restrict RDP exposure, reducing observed RDP-related brute-force attempts by 100%.

### Final Metrics Displayed

| Metric | Label | Context |
|---|---|---|
| 100% | Critical findings eliminated | 2 -> 0 critical server findings through vulnerability management and remediation work. |
| 92% | High findings reduced | 12 -> 1 high server finding after prioritized remediation and verification. |
| 88% | Medium findings reduced | 17 -> 2 medium server findings with remediation tracked through validation. |
| 100% | RDP brute-force attempts reduced | Inbound NSG and firewall controls reduced observed RDP-related brute-force attempts. |

### Files Changed

| File | Change Summary |
|---|---|
| `app/page.tsx` | Updated the proof section header to frame the area as measured security outcomes. |
| `components/sections/RiskReductionDashboard.tsx` | Replaced dashboard-style cards and progress bars with restrained vulnerability management proof blocks using large numbers, short labels, and exact context. |
| `components/sections/ImpactMetricsStrip.tsx` | Replaced the network dashboard treatment with a single executive proof block for RDP-related brute-force attempt reduction. |
| `docs/redesign/06_CONTENT_AND_COPY.md` | Recorded the final Phase 5 proof copy. |

## Phase 5 Checklist

- [x] Metrics preserved
- [x] Metrics restyled
- [x] Dashboard/gamified styling removed
- [x] Proof section feels credible and restrained
- [x] Mobile layout reviewed
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 6 — Featured Case Study

## Objective

Create a strong featured case-study section. Current user direction is to remove the single featured-project treatment and make all homepage projects featured case studies.

## Preferred Featured Project

Vulnerability Management Program

## Content Structure

- Title
- One-sentence summary
- Problem
- Action
- Result
- Tools
- CTA to read more

## Copy Direction

> Reduced critical server vulnerabilities by 100% through Tenable-based assessment, PowerShell remediation, and secure configuration review.

## Design Direction

Use:

- Larger editorial layout
- Clear problem/action/result structure
- Restrained metrics
- Minimal badges
- Strong CTA

Avoid:

- Generic project card styling
- Neon borders
- Terminal decorations
- Badge walls
- Dashboard visuals

## Required Notes

### Featured Project Selected

- Password Spray Threat Hunt: RDP Compromise Investigation
- The Buyer / Akira Ransomware Threat Hunt
- Vulnerability Management Program Implementation
- DISA STIG Remediation Project

### Final Summary

> Homepage projects now share one consistent featured case-study card treatment with role context, summary, Problem / Outcome / Concepts evidence, labeled tools, and a direct case-study CTA.

### Problem

> The previous homepage used a distinct featured case study and separate supporting project cards, which made the project area feel visually inconsistent.

### Action

> Removed the standalone featured-case-study section and rendered all four projects through the same balanced editorial case-study card.

### Result

> The homepage now presents every project as a featured case study in the requested order: Password Spray, The Buyer, Vulnerability Management, and DISA.

### Tools

- Microsoft Defender for Endpoint
- Sentinel-style KQL
- MDE Advanced Hunting
- Tenable
- PowerShell
- DISA STIG

### Files Changed

| File | Change Summary |
|---|---|
| `app/page.tsx` | Removed the separate featured case-study section and rendered all four projects as unified featured case-study cards in the requested order. |

## Phase 6 Checklist

- [x] Featured case study created
- [x] Problem/action/result structure added
- [x] Tools shown cleanly
- [x] CTA included
- [x] Generic card feel avoided
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 7 — Selected Projects

## Objective

Redesign supporting projects so they feel like professional case studies, not a generic grid of cyber cards.

## Possible Projects

- Vulnerability Management Program
- DISA STIG Remediation
- RDP Compromise Investigation
- Akira Ransomware / Threat Hunt Investigation
- Microsoft Defender / Sentinel Detection Work

## Project Preview Structure

Each project preview should include:

- Project title
- Role-aligned label
- One-sentence summary
- Outcome or key evidence
- Tools used
- Link to full case study

## Layout Options

Use one of:

- Editorial list
- Alternating feature rows
- One large featured project plus smaller supporting links
- Clean case-study index

Avoid:

- Equal card overload
- Neon borders
- Terminal decorations
- Too many badges
- Generic “View Project” cards with weak context

## Required Notes

### Final Project List

| Project | Label | Outcome/Evidence | Tools |
|---|---|---|---|
| Password Spray Threat Hunt: RDP Compromise Investigation | SecOps Analyst / SOC Analyst / Threat Detection Analyst | Problem, outcome, and concepts summary preserved from the previous card. | Microsoft Defender for Endpoint, Sentinel-style KQL, MITRE ATT&CK, Windows telemetry |
| The Buyer / Akira Ransomware Threat Hunt | Threat Hunter / SecOps Analyst | Problem, outcome, and concepts summary preserved from the previous card. | MDE Advanced Hunting, Microsoft Sentinel, SIEM, KQL |
| Vulnerability Management Program Implementation | Vulnerability Management Analyst | Problem, outcome, and concepts summary preserved from the previous card. | Tenable, Azure Cloud Infrastructure, Azure Virtual Machines, PowerShell |
| DISA STIG Remediation Project | Security Analyst / Technical Compliance Analyst | Problem, outcome, and concepts summary preserved from the previous card. | PowerShell, DISA STIG, Windows 11, Windows Registry |

### Layout Chosen

- Unified featured case-study list with white card surfaces, top project context, a horizontal Problem / Outcome / Concepts evidence band, a restrained labeled Tools row, and a clear case-study CTA.

### Why This Layout Was Chosen

- It makes every homepage project feel like a featured case-study preview instead of separating one featured item from supporting cards.
- It preserves each project title, role alignment, summary, Problem / Outcome / Concepts context, tools, and case-study link while reducing decorative previews and badge-heavy visual noise.
- It avoids a visually heavy right rail by letting the evidence content span the card width in a balanced band beneath the project summary.
- It removes the singular featured-project hierarchy so Password Spray, The Buyer, Vulnerability Management, and DISA all appear as featured case studies.

### Files Changed

| File | Change Summary |
|---|---|
| `app/page.tsx` | Replaced the selected-projects grid and standalone featured case-study section with unified featured case-study cards ordered Password Spray, The Buyer, Vulnerability Management, and DISA. |

## Phase 7 Checklist

- [x] Project previews redesigned
- [x] Generic card grid reduced
- [x] Each project has clear evidence
- [x] Tool badges reduced or grouped
- [x] Mobile layout reviewed
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 8 — Capabilities Section

## Objective

Replace long skill badge walls with grouped capabilities.

## Suggested Capability Groups

### Vulnerability Management

- Tenable scanning
- Risk prioritization
- Remediation tracking
- Reporting

### Hardening & Compliance

- DISA STIG review
- Windows security baselines
- Secure configuration
- PowerShell remediation

### Security Operations & Investigation

- Microsoft Defender
- Sentinel-style workflows
- KQL investigation
- IOC analysis
- Threat hunting

### Automation & Scripting

- PowerShell
- Remediation workflows
- Repeatable security checks
- Operational efficiency

## Design Direction

Use:

- Clean grouped text
- Short descriptions
- Subtle dividers
- Minimal icons if helpful
- Strong scanability

Avoid:

- Giant badge cloud
- Dense tool lists
- Neon chips
- Overloaded cards

## Required Notes

### Final Skill Groups

| Group | Description | Supporting Tools/Skills |
|---|---|---|
| Vulnerability Management | Assessment and remediation work that turns scan results into prioritized, validated risk reduction. | Tenable scanning, risk prioritization, remediation tracking, validation reporting, CVE/CWE review, CVSS scoring, authenticated scanning, finding verification |
| Hardening & Compliance | Secure configuration and compliance remediation for Windows-focused lab environments. | DISA STIG review, Windows hardening, secure configuration, PowerShell remediation, Windows Registry, auditpol, gpupdate, NIST 800-53, access control |
| Security Operations & Investigation | Evidence-led investigation workflows using endpoint, identity, network, and query-based telemetry. | Microsoft Defender for Endpoint, Sentinel-style KQL, Microsoft Sentinel, SIEM/EDR analysis, Windows telemetry, MITRE ATT&CK mapping, threat hunting |
| Automation / Scripting | Repeatable scripts and operational controls that make remediation and validation work easier to reproduce. | PowerShell, automated remediation, repeatable security checks, Bash, Python, Azure NSGs, firewall rules, pfSense, Wireshark |

### Files Changed

| File | Change Summary |
|---|---|
| `components/sections/SkillsOverview.tsx` | Replaced the equal card-and-chip grid with four restrained grouped skills panels using descriptions, focus lists, and a single tools/methods text area. |
| `lib/data/skills.ts` | Consolidated six skill groups into four role-relevant skills groups with descriptions and curated supporting tools/methods. |
| `app/skills/page.tsx` | Restored the public-facing Skills label and aligned the standalone skills page metadata and header copy with the grouped skills framing. |

## Phase 8 Checklist

- [x] Badge wall reduced
- [x] Skills grouped into capabilities
- [x] Section is easy to scan
- [x] Recruiter-friendly language used
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

---

# Phase 9 — Background Section

## Objective

Create a concise professional background section that connects prior experience to cybersecurity.

## Content Direction

Include:

- USMC background
- Operations/warehouse leadership
- Transition into cybersecurity
- Current vulnerability management and SecOps internship
- WGU/Security+ progress if currently shown on the site

## Tone

The background should feel:

- Confident
- Grounded
- Professional
- Mature
- Practical

Avoid:

- Apologetic entry-level language
- Overexplaining the career transition
- Generic “passionate about cybersecurity” wording
- Overly dramatic military storytelling

## Required Notes

### Final Background Copy

> My background combines USMC fire direction, operations leadership, and hands-on cybersecurity work. That path shaped how I approach security: define the problem, verify the evidence, prioritize the risk, and document the fix.
>
> Supporting points connect USMC fire direction and operations leadership, Norwich University cybersecurity coursework, CompTIA Security+, vulnerability management, secure configuration, PowerShell remediation, Defender/Sentinel-style investigation, and measured risk reduction.

### Files Changed

| File | Change Summary |
|---|---|
| `app/page.tsx` | Replaced the three-card resume highlight cluster with a single restrained background section that connects USMC fire direction, operations leadership, cybersecurity education, certification, and current hands-on security work. |

## Phase 9 Checklist

- [x] Background section rewritten
- [x] Career path connected clearly
- [x] Tone is confident but honest
- [x] No generic passion language
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated
