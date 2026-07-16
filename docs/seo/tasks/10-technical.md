# Technical SEO Implementation

## Read

- Applicable repository instructions, current Git status/diff, framework configuration and manifests, existing SEO implementation, route sources, and repository-provided validation commands.
- `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, `docs/seo/ACCEPTANCE.md`, and the relevant rows of `docs/seo/ROUTES.md`.
- Baseline evidence and only the source files needed to verify the assigned technical gaps. Reconcile current behavior before relying on the handoff.

## Preconditions/ownership

- Do not start until `STATE.md` marks the Baseline and Decision gates `done` and records the approved production origin, indexable-route policy, framework-native strategy, and an exact owner/file map.
- Every writable path must be assigned to this task and disjoint from content and links/media work. If a required edit is unowned or overlaps, stop and ask the coordinator to serialize or reassign it; shared-state updates do not silently expand ownership.
- Preserve unrelated and prior user changes. Recheck owned files immediately before editing because baseline evidence and ownership may have become stale.

## Actions

1. Re-audit each assigned gap against source and rendered behavior. Skip `done` work, preserve correct native patterns, and make the smallest gap-only change; record any baseline classification that is no longer accurate.
2. Use the approved framework-native mechanism and existing dependencies. Centralize the verified site identity, production origin, default description/social data, and URL policy only where this removes a confirmed gap or inconsistency; never introduce a placeholder origin.
3. Implement accurate native metadata for the assigned routes: route-specific title and description, self-consistent absolute canonical, index directives, and Open Graph/social-card fields. Keep canonical, trailing-slash, parameter, alternate, and indexability behavior aligned with the approved policy.
4. Make robots and sitemap behavior agree with that policy and origin. Exclude redirects, errors, private/draft/non-indexable URLs, and broken or unverified dynamic instances; do not advertise a URL the rendered site cannot serve as intended.
5. Add or repair JSON-LD only when it matches visible, repository-supported facts. Use the native safe serialization pattern, stable absolute URLs, and appropriate page/site types; avoid duplicate schema owned by another layer.
6. Verify 404 behavior through the built or running application: an unknown URL must render the intended accessible error experience, return the framework-correct not-found status, and avoid index promotion. Preserve the existing visual design.
7. Build or run the repository with current code, then inspect rendered/built heads and relevant endpoints for every route affected by a shared technical change and every route assigned to this task. Check duplicates, canonicals, directives, social values, JSON-LD parsing, robots, sitemap URLs, redirects, and 404 status; sample unaffected routes for regressions.
8. Run every relevant repository-provided build, lint, test, type, and SEO command. Distinguish new failures from proven pre-existing failures and assign corrective ownership.

## Do not

- Do not bypass the decision gate, guess the production origin/indexability, or edit files outside the exact ownership map. Do not implement content or media/link gaps unless those paths are explicitly reassigned.
- Do not replace correct SEO, create parallel metadata systems, add a new dependency when native capability suffices, broadly refactor, or change page design and factual claims. Do not hide validation failures or treat source inspection as rendered evidence.
- Do not edit `docs/seo/ACCEPTANCE.md` or task briefs. Do not deploy, merge, push, open a PR, publish, or submit to search services.

## Evidence/state updates

- For owned `ROUTES.md` rows/columns, update only the implemented technical cells with current source plus rendered evidence and one allowed status. If shared docs are coordinator-owned, return the exact proposed updates instead of editing them.
- Record changed paths, owner, purpose, and status in `STATE.md`; record every command or inspection with UTC time, scope, exit status, result, pre-existing status, and corrective owner. Update SEO-03/SEO-04 and other affected criteria only when their required evidence is complete.
- Record skipped `done` work, rejected duplicate approaches, remaining gaps, and blocker IDs. Never mark the Implementation gate complete; only the coordinator can reconcile all implementation tasks and advance gates.

## Exit/handoff

Return to the coordinator: gaps fixed and deliberately skipped, exact changed files, route/policy effects, current rendered and endpoint evidence, command results with exit statuses, regressions or pre-existing failures, remaining owner/blocker IDs, and confirmation that publication actions did not occur. The coordinator assigns any failure to its exact owner and schedules fresh independent verification after all implementation scopes reconcile.
