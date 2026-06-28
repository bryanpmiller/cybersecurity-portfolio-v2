import { BriefcaseBusiness, FileText, Target } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ToolTag } from "@/components/ui/ToolTag";
import type { Project } from "@/lib/data/projects";
import { profile } from "@/lib/data/profile";

type ProjectDetailProps = {
  project: Project;
};

function getStatAccentClasses(statText: string) {
  const normalizedStat = statText.toLowerCase();

  if (normalizedStat.includes("critical")) {
    return "before:bg-severityCritical";
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
  const caseStudy = project.caseStudy;

  return (
    <PageContainer>
      <Reveal>
        <SectionHeader eyebrow="Project case study" title={project.title} description={project.summary} />
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-6 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <Reveal delay={0.06}>
          <Card as="article" className="p-5 sm:p-6 lg:p-8" variant="evidence">
            <div className="max-w-3xl">
              <p className="eyebrow-text inline-flex items-center gap-2">
                <BriefcaseBusiness aria-hidden="true" className="size-3.5" />
                Role alignment
              </p>
              <p className="supporting-copy mt-3">{project.role}</p>
              <h2 className="section-title mt-8">Executive summary</h2>
              <p className="body-copy mt-4">{project.summary}</p>
            </div>

            {caseStudy ? (
              <section className="mt-8 max-w-3xl border-t border-line pt-8">
                <h2 className="panel-title">Hiring relevance</h2>
                <p className="body-copy mt-4 break-words [overflow-wrap:anywhere]">{caseStudy.hiringRelevance}</p>
              </section>
            ) : null}

            {caseStudy ? (
              <div className="mt-8 grid gap-3 border-y border-line py-5 sm:grid-cols-2 xl:grid-cols-4">
                {caseStudy.visual.stats.map((stat) => (
                  <div
                    className={`relative min-w-0 rounded-md border border-line bg-surface p-4 pl-5 before:absolute before:bottom-4 before:left-0 before:top-4 before:w-1 before:rounded-r-full ${getStatAccentClasses(`${stat.label} ${stat.value}`)}`}
                    key={stat.label}
                  >
                    <p className="stat-label">{stat.label}</p>
                    <p className="compact-copy mt-2">{stat.value}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {caseStudy ? (
              <div className="mt-8 grid min-w-0 gap-8">
                <section className="max-w-3xl">
                  <h2 className="panel-title">Problem</h2>
                  <p className="body-copy mt-4 break-words [overflow-wrap:anywhere]">{caseStudy.problem}</p>
                </section>

                <section className="max-w-3xl border-t border-line pt-8">
                  <h2 className="panel-title">Environment / Tools</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <ToolTag key={tool}>{tool}</ToolTag>
                    ))}
                  </div>
                </section>

                <section className="border-t border-line pt-8">
                  <h2 className="panel-title">Approach</h2>
                  <ol className="body-copy mt-5 grid gap-4 break-words [overflow-wrap:anywhere]">
                    {caseStudy.approach.map((item, index) => (
                      <li className="grid min-w-0 gap-3 sm:grid-cols-[2.5rem_minmax(0,1fr)]" key={item}>
                        <span className="flex size-9 items-center justify-center rounded-md border border-lineStrong/45 bg-evidence/10 text-sm font-semibold text-evidence">
                          {index + 1}
                        </span>
                        <span className="pt-1">{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="border-t border-line pt-8">
                  <h2 className="panel-title">Evidence</h2>
                  <ul className="body-copy mt-5 grid gap-3 break-words [overflow-wrap:anywhere]">
                    {caseStudy.evidence.map((item) => (
                      <li className="min-w-0 border-l border-evidence/30 pl-4" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-md border border-lineStrong/55 bg-ink-soft p-4 sm:p-5">
                    <p className="eyebrow-text inline-flex items-center gap-2">
                      <FileText aria-hidden="true" className="size-3.5" />
                      {caseStudy.evidenceBlock.label}
                    </p>
                    <ol className="compact-copy mt-4 grid gap-2">
                      {numberedEvidenceLines.map((line, index) => (
                        <li className="grid min-w-0 gap-2 sm:grid-cols-[1.75rem_minmax(0,1fr)]" key={line}>
                          <span className="text-evidence">{index + 1}.</span>
                          <span className="break-words [overflow-wrap:anywhere]">{line}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                <section className="max-w-3xl border-t border-line pt-8">
                  <h2 className="panel-title">Result</h2>
                  <p className="body-copy mt-4 break-words [overflow-wrap:anywhere]">{caseStudy.outcome}</p>
                </section>

                <section className="border-t border-line pt-8">
                  <h2 className="panel-title">What I learned</h2>
                  <ul className="body-copy mt-5 grid gap-3 break-words [overflow-wrap:anywhere]">
                    {caseStudy.lessons.map((item) => (
                      <li className="min-w-0 border-l border-remediation/35 pl-4" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

              </div>
            ) : null}
          </Card>
        </Reveal>

        <aside className="grid content-start gap-4 lg:self-stretch">
          <Card as="section" className="p-5" variant="glass">
            <p className="eyebrow-text inline-flex items-center gap-2">
              <Target aria-hidden="true" className="size-3.5" />
              Case study focus
            </p>
            <p className="body-copy mt-3">{caseStudy?.visual.label ?? project.role}</p>
          </Card>

          <Card as="section" className="p-5 lg:sticky lg:top-24" variant="glass">
            <p className="eyebrow-text">Evidence links</p>
            <div className="mt-4 grid gap-3">
              <Button className="grid w-full grid-cols-[1.25rem_minmax(0,1fr)_1.25rem] items-center gap-3 px-4 text-center" external href={project.githubUrl ?? profile.githubUrl} variant="secondary">
                <GitHubMarkIcon className="size-4 justify-self-start" />
                <span className="min-w-0 text-center">View repository</span>
                <span aria-hidden="true" />
              </Button>
              {project.supportingLinks?.map((link) => (
                <Button className="grid w-full grid-cols-[1.25rem_minmax(0,1fr)_1.25rem] items-center gap-3 px-4 text-center" external href={link.href} key={link.href} variant="secondary">
                  <GitHubMarkIcon className="size-4 justify-self-start" />
                  <span className="min-w-0 text-center">{link.label}</span>
                  <span aria-hidden="true" />
                </Button>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </PageContainer>
  );
}
