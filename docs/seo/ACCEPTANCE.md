# Acceptance Contract

This file is an immutable criteria contract during a run. Do not record results here. Record each stable ID's status, evidence reference, and owner in the `Acceptance status` table in `STATE.md`.

| ID | Area | Acceptance criterion | Required current evidence |
|---|---|---|---|
| SEO-01 | Scope | Existing correct SEO and unrelated user changes are preserved; the diff contains only approved owned files. | Initial status, final diff, ownership map |
| SEO-02 | Coverage | Every discovered route, dynamic instance policy, redirect, and 404 behavior is represented in `ROUTES.md`; indexability is intentional. | Route sources, counts, rendered route sweep |
| SEO-03 | Metadata | Each indexable route has accurate, useful, route-specific title and description; canonical, robots, social metadata, and origin use one approved policy. | Rendered head or built HTML for every route; duplicate check |
| SEO-04 | Discovery | Robots and sitemap behavior match indexability and production origin when applicable; no private or broken URL is promoted. | Rendered files/endpoints and URL comparison |
| SEO-05 | Structure | Each page has one meaningful H1, logical semantics, and structured data that is valid and matches visible factual content. | Rendered DOM plus schema validation output |
| SEO-06 | Content | Homepage and project pages are understandable, useful, and cautious; no client, employer, metric, outcome, certification, or production claim is fabricated. | Route review against repository evidence |
| SEO-07 | Links | Important pages are reachable through descriptive internal links; breadcrumbs/related links are consistent; no unintended broken or orphan links remain. | Whole-site link crawl and sampled navigation |
| SEO-08 | Media | Images have correct alt/decorative treatment, dimensions and loading behavior where appropriate; screenshots reveal no sensitive data. | Rendered audit and asset/screenshot review |
| SEO-09 | Experience | Required SEO work preserves design, responsive behavior, accessibility, and conservative performance. | Desktop/mobile rendered sampling and relevant audits |
| SEO-10 | Quality | Repository-provided build, lint, test, type, and SEO checks pass, or each pre-existing failure is proven and assigned. | Fresh commands with UTC time, exit status, scope, and output summary |
| SEO-11 | Safety | No secrets or unrelated files are introduced; no deploy, merge, push, PR creation, publishing, or search-console action occurred. | Diff/status review and coordinator attestation |

Completion requires a fresh verifier to check the whole rendered site and current command output. In `STATE.md`, every applicable ID must be `done` or justified `n/a`; any `partial`, `missing`, `incorrect`, or `blocked` criterion returns to its named owner. Evidence references must identify what was checked, not merely say "passed." Manual actions and known limitations remain explicit at closeout.
