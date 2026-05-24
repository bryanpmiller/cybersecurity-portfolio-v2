import { BadgeCheck, FileText, Wrench } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Project } from "@/lib/data/projects";
import { profile } from "@/lib/data/profile";

type ProjectDetailProps = {
  project: Project;
};

const projectVisualClasses: Record<string, string> = {
  "vulnerability-management-program":
    "border-lineStrong bg-[linear-gradient(180deg,rgba(24,33,49,0.94)_0%,rgba(13,17,26,0.96)_100%)] before:bg-[linear-gradient(90deg,rgba(246,193,119,0.82)_0%,rgba(125,211,199,0.78)_52%,rgba(110,231,216,0.72)_100%)]",
  "disa-stig-remediation":
    "border-lineStrong bg-[linear-gradient(180deg,rgba(24,33,49,0.94)_0%,rgba(13,17,26,0.96)_100%)] before:bg-[linear-gradient(90deg,rgba(138,180,248,0.8)_0%,rgba(125,211,199,0.76)_100%)]",
  "password-spray-threat-hunt":
    "border-lineStrong bg-[linear-gradient(180deg,rgba(24,33,49,0.94)_0%,rgba(13,17,26,0.96)_100%)] before:bg-[linear-gradient(90deg,rgba(167,139,250,0.8)_0%,rgba(110,231,216,0.72)_100%)]",
  "akira-ransomware-threat-hunt":
    "border-lineStrong bg-[linear-gradient(180deg,rgba(24,33,49,0.94)_0%,rgba(13,17,26,0.96)_100%)] before:bg-[linear-gradient(90deg,rgba(167,139,250,0.78)_0%,rgba(110,231,216,0.7)_100%)]"
};

function getStatAccentClasses(statText: string) {
  const normalizedStat = statText.toLowerCase();

  if (normalizedStat.includes("critical")) {
    return "before:bg-[linear-gradient(180deg,rgba(255,138,138,0.92)_0%,rgba(125,211,199,0.82)_100%)]";
  }

  if (normalizedStat.includes("high")) {
    return "before:bg-severityHigh";
  }

  if (normalizedStat.includes("medium")) {
    return "before:bg-severityMedium";
  }

  return "before:bg-evidence";
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const evidenceLines = project.caseStudy?.evidenceBlock.lines ?? [];
  const numberedEvidenceLines = evidenceLines.map((line) => line.replace(/^\d+\.\s*/, ""));

  const caseStudySections = project.caseStudy
    ? [
      {
        heading: "Problem",
        content: project.caseStudy.problem
      },
      {
        heading: "Approach",
        items: project.caseStudy.approach
      },
      {
        heading: "Evidence",
        items: project.caseStudy.evidence
      },
      {
        heading: "Outcome",
        content: project.caseStudy.outcome
      },
      {
        heading: "What I learned",
        items: project.caseStudy.lessons
      }
    ]
    : [];

  return (
    <PageContainer>
      <SectionHeader eyebrow="Project case study" title={project.title} description={project.summary} />

      <section className="mt-8 grid min-w-0 gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-6">
        <Card className="flex h-full items-center" variant="glass">
          {project.caseStudy ? (
            <div
              className={`relative w-full overflow-hidden rounded-md border p-5 before:absolute before:inset-x-0 before:top-0 before:h-px ${projectVisualClasses[project.slug] ?? "border-line bg-surfaceElevated before:bg-evidence"}`}
            >
              <p className="eyebrow-text">{project.caseStudy.visual.label}</p>
              <div className="mt-5 grid gap-3">
                {project.caseStudy.visual.stats.map((stat) => (
                  <div
                    className={`relative overflow-hidden rounded-md border border-line bg-surface/90 p-4 pl-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] before:absolute before:bottom-4 before:left-0 before:top-4 before:w-1 before:rounded-r-full ${getStatAccentClasses(`${stat.label} ${stat.value}`)}`}
                    key={stat.label}
                  >
                    <p className="section-title">{stat.label}</p>
                    <p className="stat-label mt-2">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-6 h-56 rounded-md border border-line bg-gradient-to-br from-ink via-surfaceElevated to-ink-soft p-5">
              <div className="grid h-full grid-cols-3 gap-3">
                <div className="rounded border border-evidence/20 bg-evidence/10" />
                <div className="rounded border border-mint/20 bg-mint/10" />
                <div className="rounded border border-lineStrong bg-surfaceElevated/60" />
                <div className="col-span-3 rounded border border-line bg-ink-soft/70" />
              </div>
            </div>
          )}
        </Card>

        <Card as="aside" className="h-full" variant="glass">
          <h2 className="panel-title inline-flex items-center gap-2">
            <BadgeCheck aria-hidden="true" className="size-4 text-mint" />
            Role Demonstrated
          </h2>
          <p className="supporting-copy mt-3">{project.role}</p>
          <h2 className="panel-title mt-6 inline-flex items-center gap-2">
            <Wrench aria-hidden="true" className="size-4 text-evidence" />
            Tools Used
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-lineStrong bg-ink-soft/70 p-4">
            <h2 className="eyebrow-text inline-flex items-center gap-2 text-white">
              <FileText aria-hidden="true" className="size-3.5" />
              {project.caseStudy?.evidenceBlock.label ?? "Evidence Preview"}
            </h2>
            {project.caseStudy ? (
              <ol className="technical-block mt-3 list-decimal space-y-2 pl-5">
                {numberedEvidenceLines.map((line) => (
                  <li className="pl-2" key={line}>
                    <code className="break-words font-mono">{line}</code>
                  </li>
                ))}
              </ol>
            ) : (
              <pre className="technical-block mt-3 whitespace-pre-wrap break-words">
                <code className="break-words font-mono">{`// Placeholder evidence block
// Add query, script excerpt, or screenshot summary in Phase 3.`}</code>
              </pre>
            )}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button external href={project.githubUrl ?? profile.githubUrl} icon={<GitHubMarkIcon className="size-4" />} variant="secondary">
              View Full Write Up
            </Button>
            {project.supportingLinks?.map((link) => (
              <Button external href={link.href} icon={<GitHubMarkIcon className="size-4" />} key={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-5 grid min-w-0 gap-5 lg:mt-6 lg:gap-6">
        {project.caseStudy ? caseStudySections.map((section) => (
          <Card as="section" key={section.heading} variant="evidence">
            <h2 className="panel-title">{section.heading}</h2>
            {section.content ? <p className="body-copy mt-4">{section.content}</p> : null}
            {section.items ? (
              <ul className="body-copy mt-4 space-y-3">
                {section.items.map((item) => (
                  <li className="border-l border-evidence/30 pl-4" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>
        )) : ["Problem", "Approach", "Evidence", "Outcome", "What I learned"].map((heading) => (
          <Card as="section" key={heading} variant="evidence">
            <h2 className="panel-title">{heading}</h2>
            <p className="body-copy mt-4">
              Placeholder section for the final project narrative. Phase 3 will replace this with concise,
              evidence-based details and supporting artifacts from the GitHub project.
            </p>
          </Card>
        ))}
      </section>
    </PageContainer>
  );
}
