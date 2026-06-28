import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type ProjectCaseStudyCardProps = {
  project: Project;
  order?: number;
  variant?: "compact" | "expanded";
};

function getProjectEvidenceRows(project: Project) {
  if (project.cardSummary) {
    return [
      {
        label: "Problem",
        value: project.cardSummary.problem
      },
      {
        label: "Outcome",
        value: project.cardSummary.outcome
      },
      {
        label: "Concepts",
        value: project.cardSummary.concepts
      }
    ];
  }

  return [
    {
      label: "Evidence",
      value: project.caseStudy?.outcome ?? project.summary
    }
  ];
}

function ToolList({ tools }: { tools: string[] }) {
  return (
    <div className="min-w-0">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-evidence">
        <Wrench aria-hidden="true" className="size-3.5" />
        Tools
      </p>
      <div className="mt-3 flex min-w-0 flex-wrap gap-2">
        {tools.map((tool) => (
          <span className="chip-text rounded-md border border-line bg-surface px-3 py-2 text-slate-300" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectCaseStudyCard({ project, order, variant = "compact" }: ProjectCaseStudyCardProps) {
  const isExpanded = variant === "expanded";

  return (
    <Card
      as="article"
      className={cn("grid min-w-0 gap-6 p-5 sm:p-6 lg:p-7", isExpanded && "lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-7")}
      variant="evidence"
    >
      {isExpanded && order ? (
        <div className="hidden border-r border-line pr-5 lg:block">
          <p className="text-3xl font-semibold leading-none text-evidence">{String(order).padStart(2, "0")}</p>
          <p className="eyebrow-text mt-3 text-[0.62rem]">Case study</p>
        </div>
      ) : null}

      <div className="grid min-w-0 gap-6">
        <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              {isExpanded && order ? (
                <span className="rounded-md border border-line bg-surfaceElevated px-2.5 py-1 text-xs font-semibold text-evidence lg:hidden">
                  {String(order).padStart(2, "0")}
                </span>
              ) : null}
              <p className="eyebrow-text">{project.role}</p>
            </div>
            <h3 className="panel-title mt-3">{project.title}</h3>
            <p className="supporting-copy mt-3 max-w-3xl">{project.summary}</p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
            <Button className="w-full sm:w-fit" href={`/projects/${project.slug}`} variant={isExpanded ? "primary" : "featured"}>
              Read case study
            </Button>
            {isExpanded && project.githubUrl ? (
              <Button
                className="w-full sm:w-fit"
                external
                href={project.githubUrl}
                icon={<GitHubMarkIcon className="size-4" />}
                variant="secondary"
              >
                View GitHub
              </Button>
            ) : null}
          </div>
        </div>

        {project.caseStudy?.hiringRelevance ? (
          <div
            className={cn(
              "rounded-md border border-line",
              isExpanded ? "bg-surfaceElevated/75 p-4 sm:p-5" : "bg-surfaceElevated/65 px-4 py-3"
            )}
          >
            <p className="eyebrow-text text-[0.62rem]">Hiring relevance</p>
            <p className={cn("compact-copy max-w-4xl", isExpanded ? "mt-2" : "mt-1.5")}>{project.caseStudy.hiringRelevance}</p>
          </div>
        ) : null}

        <div className="grid min-w-0 gap-3 rounded-md border border-line bg-ink-soft/70 p-3 sm:p-4 lg:grid-cols-3">
          {getProjectEvidenceRows(project).map((row) => (
            <div className="rounded-md border border-line bg-surface/80 p-3 sm:p-4" key={row.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-evidence">
                {row.label}
              </p>
              <p className="compact-copy mt-1.5">{row.value}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-4">
          <ToolList tools={project.tools} />
        </div>
      </div>
    </Card>
  );
}
