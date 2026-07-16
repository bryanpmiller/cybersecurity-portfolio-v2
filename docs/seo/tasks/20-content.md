# Content Brief

## Read

- `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, and `docs/seo/ACCEPTANCE.md`.
- Only the approved, assigned route rows in `docs/seo/ROUTES.md`, applicable repository instructions, current owned files, and source/rendered evidence needed to verify their facts.

## Preconditions/ownership

- Start only after Baseline and Decision gate are `done` in `STATE.md`; production origin, indexable routes, native strategy, and route decisions must be recorded.
- The coordinator must list exact owned files and route scope in `STATE.md`. Ownership must be disjoint from technical and links-media work; stop on any overlap until the coordinator serializes or reassigns it.
- Reconcile existing content first. Make gap-only edits for route cells marked `partial`, `missing`, or `incorrect`; preserve `done` work unless fresh evidence disproves it.
- Shared SEO files are coordinator-owned. Do not edit `STATE.md` or `ROUTES.md` unless the coordinator assigns the exact shared path and serializes that write.

## Actions

1. For each owned, approved route, compare its source and rendered page with the route decision and repository evidence. Record the before status; skip correct existing work.
2. Write an accurate, distinct title and concise description that explain that route rather than repeating a site-wide template. Add one meaningful visible H1 and a logical heading/landmark/section structure; do not use headings only for styling.
3. Make the homepage and project pages quickly understandable: concise summaries should state the work's type, scope, role, relevant skills or methods, and evidence-supported result. Improve recruiter usability without keyword stuffing, filler, or a redesign.
4. Classify projects truthfully. Clearly label labs, simulations, prototypes, CTFs, concepts, and self-directed case studies; use client, employer, production, deployed, metric, certification, or outcome language only when repository evidence supports it. Describe observed lab behavior as a lab result, never as real-world compromise, production impact, persistence, or successful exfiltration.
5. Add useful visible detail and related-content context only where evidence and route intent support it. Use descriptive link wording in owned copy, but hand route-graph, breadcrumb, shared-navigation, or unowned-file changes to links-media.
6. Keep structured data factual and synchronized with visible content. If schema implementation is technical-owned, provide the verified visible values and discrepancy as a handoff instead of editing its files.
7. Render or build the affected routes using repository-native commands and inspect metadata, the H1/semantics, visible wording, responsive layout, and any structured-data values changed by the owned files.

## Do not

- Do not edit unowned files, expand route scope, or write through an ownership overlap.
- Do not replace correct existing SEO or prose merely for stylistic preference, invent facts, expose sensitive information, add hidden schema-only claims, or make unsupported production/exfiltration claims.
- Do not change the approved indexability policy, canonical/origin strategy, shared link graph, visual design, dependencies, or unrelated user work.
- Do not deploy, merge, push, open a PR, publish, or declare the project complete.

## Evidence/state updates

- Return to the coordinator, per route: before/after status; exact changed files; final title, description, H1, and summary; source for material claims; semantics and visible/schema consistency inspection; and fresh rendered/build evidence with command, UTC time, exit status, and result.
- Ask the coordinator to update the assigned `ROUTES.md` cells (`Title`, `Description`, `H1 / semantics`, `Schema`, `Overall`) and `STATE.md` Changes, Validation, Blockers, and SEO-01/SEO-03/SEO-05/SEO-06 evidence. A `done` status needs current evidence; unsupported facts or unowned fixes stay explicit gaps.

## Exit/handoff

- Exit when every confirmed gap in the owned route/file scope is implemented and freshly inspected, while correct work and facts remain intact.
- Hand off a compact list of changed routes/files, evidence, skipped existing work, unresolved factual or ownership gaps with proposed owner, and exactly one safe next action. Only the coordinator advances the gate.
