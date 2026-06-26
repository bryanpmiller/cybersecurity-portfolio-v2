import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Projects",
  "Evidence-based cybersecurity case studies covering vulnerability management, DISA STIG remediation, password spray investigation, and ransomware threat hunting.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Projects"
          title="Security case studies with GitHub evidence"
          description="Cybersecurity projects covering vulnerability management, secure configuration, remediation automation, and threat hunting through case-study notes and GitHub evidence."
        />
      </Reveal>
      <Reveal delay={0.06}>
        <nav
          aria-label="Project case studies"
          className="mt-6 grid min-w-0 gap-2 rounded-md border border-line bg-surface/65 p-2.5 sm:mt-8 sm:grid-cols-2 sm:p-3 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <Link
              className="focus-ring group min-w-0 rounded-md border border-line bg-ink-soft px-3 py-2.5 transition-[background,border-color,color] hover:border-evidence/45 hover:bg-surfaceElevated/85 sm:py-3"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <span className="badge-text text-evidence">Case study</span>
              <span className="mt-1 line-clamp-2 min-w-0 text-sm font-semibold leading-5 text-slate-100 group-hover:text-ink">
                {project.title}
              </span>
            </Link>
          ))}
        </nav>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="mt-8 min-w-0 sm:mt-10">
          <FeaturedProjects projects={projects} showHeader={false} />
        </div>
      </Reveal>
    </PageContainer>
  );
}
