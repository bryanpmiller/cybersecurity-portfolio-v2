# Baseline Audit

## Read

- Applicable repository instructions; root manifests and framework configuration; current Git status and diff.
- `AGENTS.md`, `docs/seo/README.md`, `docs/seo/STATE.md`, `docs/seo/ROUTES.md`, and `docs/seo/ACCEPTANCE.md`.
- Existing SEO docs, reports, tests, scripts, dependencies, site configuration, route sources, generated output, and rendered pages. Reconcile and reuse trustworthy prior work rather than repeating or replacing it.

## Preconditions/ownership

- This is the first barrier and is read-only for application files. The coordinator owns documentation writes to `docs/seo/STATE.md` and `docs/seo/ROUTES.md`; no application-file ownership is granted.
- Audit the entire site, not a sample: static routes, dynamic route instances or their bounded policy, redirects, non-indexable/private/draft routes, parameter behavior, and 404/error behavior.
- Specialized agents may run technical, content/route, and links/media audits in parallel only as read-only work. They return evidence to the coordinator, who deduplicates conflicts and writes the shared records.
- Inventory unrelated or prior user changes and preserve them. A dirty worktree is not itself a blocker; stop only when a direct overlap prevents reliable inspection.

## Actions

1. Discover the framework/version, package manager, route-generation model, render modes, repository-native SEO APIs, and available build, lint, test, type, crawl, or SEO commands. Inspect existing central site data, metadata, canonicals, robots, sitemap, index directives, social metadata, JSON-LD, and 404 handling before judging gaps.
2. Build a full route inventory from framework sources plus navigation/internal links, redirects, sitemap, and generated output. Reconcile duplicates and record route-source counts, dynamic-instance rules, query/trailing-slash behavior, exclusions, and error routes in `ROUTES.md`.
3. Where the repository can run safely, inspect current rendered or built output for every discovered route. Check HTTP/redirect behavior, title, description, canonical, robots/indexability, social metadata, one meaningful H1 and semantics, visible-content/schema agreement, internal links, and image/accessibility behavior. Source alone is not rendered proof.
4. Compare behavior with existing reports and tooling. Reuse valid current evidence; rerun stale evidence that controls a gate. Note obsolete, duplicated, or framework-incompatible implementations without changing them.
5. Classify every route cell and material site-wide item as `done`, `partial`, `missing`, `incorrect`, `n/a`, or `blocked`. Add a concise `critical`, `high`, `medium`, or `low` severity in evidence/notes for every actionable gap; `n/a` needs a reason, and `blocked` needs a matching `STATE.md` blocker after safe discovery is exhausted.
6. Discover the production origin, intended indexable-route rule, and framework-native strategy from repository evidence. Ask the coordinator only decision questions that remain genuinely undiscoverable, presenting the evidence and bounded options rather than guessing.

## Do not

- Do not implement, repair, refactor, format, install dependencies, or edit application/source/configuration files. Do not change metadata, content, assets, routes, tests, lockfiles, or generated artifacts intended for commit.
- Do not overwrite correct SEO or normalize unrelated user changes. Do not infer production facts, professional claims, indexability, or successful rendering without evidence.
- Do not edit `docs/seo/ACCEPTANCE.md` or any task brief during the run. Do not deploy, merge, push, open a PR, publish, or submit URLs to search services.

## Evidence/state updates

- In `ROUTES.md`, populate every Coverage row and one Route matrix row per rendered route, including excluded and error routes. Record exact evidence, classifications, severity, duplicates, redirects, orphans, exceptions, and the reason for every `n/a` or blocker ID.
- In `STATE.md`, record environment facts, initial worktree state, reusable prior work, current acceptance status, baseline validation commands/inspections with UTC time and exit status, and unresolved dependencies in Blockers. Keep decision rows `missing` until the coordinator approves them; use `blocked` only with a named dependency, needed action, and owner.
- Set the Baseline gate to `done` only when the inventory and classifications are complete with current evidence. Otherwise use the precise non-done status and leave one executable Next action.

## Exit/handoff

Stop before implementation. Hand the coordinator route/source counts, reused work, highest-severity gaps, rendered-evidence limits, unresolved decision questions, blocker IDs, and confirmation that no application files changed. The next action is the decision gate: confirm production origin, indexable routes, native strategy, and exact disjoint file ownership.
