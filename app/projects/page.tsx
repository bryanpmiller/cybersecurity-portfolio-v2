import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectCaseStudyCard } from "@/components/sections/ProjectCaseStudyCard";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getOrderedCaseStudyProjects } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Evidence-based cybersecurity case studies covering vulnerability management, DISA STIG remediation, password spray investigation, and ransomware threat hunting.",
  "/projects"
);

export default function ProjectsPage() {
  const caseStudies = getOrderedCaseStudyProjects();

  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Projects"
          title="Security case studies with GitHub evidence"
          description="A curated review path for vulnerability management, secure configuration, remediation automation, and threat hunting work backed by case-study notes and source evidence."
        />
      </Reveal>
      <Reveal delay={0.06}>
        <Card
          as="section"
          className="mt-8 grid min-w-0 gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-7"
          variant="evidence"
        >
          <div className="min-w-0">
            <p className="eyebrow-text">Project review path</p>
            <h2 className="panel-title mt-3">Start with the outcome, then drill into evidence.</h2>
            <p className="body-copy mt-3 max-w-2xl">
              Each project is structured so the problem, result, tools, and repository evidence are clear beforing
              opening the full case study.
            </p>
          </div>
          <nav aria-label="Project case studies" className="grid min-w-0 gap-2">
            {caseStudies.map((project, index) => (
              <Link
                className="focus-ring group grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-line bg-surfaceElevated/70 px-3 py-3 transition-[background,border-color,color] hover:border-evidence/45 hover:bg-surface"
                href={`#${project.slug}`}
                key={project.slug}
              >
                <span className="text-sm font-semibold text-evidence">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="line-clamp-1 text-sm font-semibold leading-5 text-ink">{project.title}</span>
                  <span className="line-clamp-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    {project.role}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-evidence transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </nav>
        </Card>
      </Reveal>
      <section className="mt-10 grid min-w-0 gap-5 sm:mt-12" aria-label="Case study summaries">
        {caseStudies.map((project, index) => (
          <Reveal delay={index * 0.05} key={project.slug} y={12}>
            <div className="scroll-mt-24" id={project.slug}>
              <ProjectCaseStudyCard order={index + 1} project={project} variant="expanded" />
            </div>
          </Reveal>
        ))}
      </section>
    </PageContainer>
  );
}
