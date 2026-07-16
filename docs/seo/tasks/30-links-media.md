# Links and Media Brief

## Read

- `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, and `docs/seo/ACCEPTANCE.md`.
- The approved route decisions and assigned rows in `docs/seo/ROUTES.md`, applicable repository instructions, current owned files, rendered navigation, and relevant assets.

## Preconditions/ownership

- Start only after Baseline and Decision gate are `done` in `STATE.md`; route/indexability decisions and the framework-native strategy must be recorded.
- The coordinator must list exact owned files, assets, and route scope. Ownership must be disjoint from content and technical work; stop on overlap until the coordinator serializes or reassigns it.
- Reconcile the existing route graph, link components, and media behavior first. Make gap-only edits for `partial`, `missing`, or `incorrect` findings; preserve verified `done` behavior.
- Shared SEO files are coordinator-owned. Do not edit `STATE.md` or `ROUTES.md` unless their exact paths are separately assigned and the write is serialized.

## Actions

1. Build the in-scope route graph from rendered navigation, body links, breadcrumbs, related links, redirects, and the approved route inventory. Identify unintended broken links, redirect chains, and orphan important pages without promoting private, draft, error, or non-indexable routes.
2. Repair only owned graph gaps. Keep breadcrumbs and related links consistent, use descriptive accessible anchor names, preserve valid destinations, and verify keyboard/focus behavior. If a fix belongs in a content- or technical-owned file, hand it off rather than editing it.
3. Review each in-scope image and media control in rendered context. Give informative images concise purpose-based alt text, functional images an action-based accessible name, and purely decorative images empty alt plus appropriate assistive-technology exclusion. Avoid keyword stuffing, filename alt text, and redundant "image of" wording.
4. Add captions when source, interpretation, evidence, or surrounding context is needed. Keep captions factual: distinguish labs and simulations and do not imply unsupported production use, impact, or exfiltration.
5. Inspect screenshot pixels and context for secrets, tokens, credentials, personal/contact data, client or employer identifiers, internal paths/hosts/IPs, private telemetry, and other sensitive information. Redact or replace an owned unsafe asset and recheck it; if safe editing cannot be proven, remove it from the route or block it for manual review.
6. Preserve intrinsic dimensions or a stable aspect ratio. Use existing responsive/image tooling; load the probable above-the-fold/LCP image normally or with the repository's measured priority pattern, and lazy-load only eligible offscreen media. Check representative desktop and mobile widths for crop, layout shift, readability, focus, and zoom behavior.
7. Apply only conservative performance fixes supported by current evidence, such as safe dimensions, loading hints, or existing optimizer settings. Measure or render again after edits and retain acceptable visual quality and accessibility.
8. Crawl or inspect every in-scope route after changes. Verify destinations/status, orphans, breadcrumbs/related links, accessible names, alt/decorative treatment, captions, dimensions/loading, screenshot privacy, and responsive behavior.

## Do not

- Do not edit unowned files or assets, cross an ownership overlap, or duplicate changes assigned to content or technical owners.
- Do not rewrite correct existing links/media, expose sensitive material, fabricate captions or claims, promote excluded routes, or trade accessibility/quality for an unmeasured score.
- Do not bulk recompress, replace formats, add dependencies, change routing/indexability, or alter design and behavior without route-scoped evidence and ownership.
- Do not deploy, merge, push, open a PR, publish, or declare the project complete.

## Evidence/state updates

- Return to the coordinator: the checked route graph and crawl/inspection result; broken/orphan fixes or remaining gaps; exact changed files/assets; per-route link, breadcrumb, related-link, alt/decorative, caption, dimension/loading, privacy, accessibility, and desktop/mobile evidence; plus commands with UTC time, exit status, and result.
- Ask the coordinator to update assigned `ROUTES.md` `Links`, `Images / a11y`, and `Overall` cells and `STATE.md` Changes, Validation, Blockers, and SEO-01/SEO-07/SEO-08/SEO-09 evidence. Record pre-existing failures and their corrective owner; do not convert an unverified route to `done`.

## Exit/handoff

- Exit when confirmed owned gaps are fixed and the in-scope route graph and media are freshly verified without regressions, sensitive exposure, or overlap.
- Hand off changed routes/files/assets, fresh evidence, preserved existing work, remaining gaps with exact location and owner, and one safe next action. Only the coordinator advances the gate.
