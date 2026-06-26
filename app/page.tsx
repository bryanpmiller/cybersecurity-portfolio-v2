import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NetworkSecurityDashboard } from "@/components/sections/ImpactMetricsStrip";
import { RiskReductionDashboard } from "@/components/sections/RiskReductionDashboard";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { Wrench } from "lucide-react";

const featuredCaseStudySlugs = [
  "password-spray-threat-hunt",
  "akira-ransomware-threat-hunt",
  "vulnerability-management-program",
  "disa-stig-remediation"
];

const backgroundPoints = [
  {
    label: "Operations foundation",
    value:
      "USMC fire direction and operations leadership built a practical approach to planning, prioritization, documentation, and follow-through."
  },
  {
    label: "Cybersecurity preparation",
    value:
      "Norwich University cybersecurity coursework and CompTIA Security+ support the technical foundation behind the portfolio work."
  },
  {
    label: "Current security work",
    value:
      "Hands-on work centers on vulnerability management, secure configuration, PowerShell remediation, Defender/Sentinel-style investigation, and measured risk reduction."
  }
];

function getProjectEvidenceRows(project: (typeof projects)[number]) {
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

function ToolList({ limit, tools }: { limit: number; tools: string[] }) {
  return (
    <div className="min-w-0">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-evidence">
        <Wrench aria-hidden="true" className="size-3.5" />
        Tools
      </p>
      <div className="mt-3 flex min-w-0 flex-wrap gap-2">
        {tools.slice(0, limit).map((tool) => (
          <span className="badge-text rounded-md border border-line bg-surface px-3 py-2 text-slate-300" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const featuredCaseStudies = featuredCaseStudySlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <PageContainer>
      <HeroSection />

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="proof">
        <Reveal>
          <SectionHeader
            description="Resume-backed outcomes presented with short context, exact numbers, and clear technical scope."
            eyebrow="Evidence"
            level="h2"
            title="Measured security outcomes"
          />
        </Reveal>
        <RiskReductionDashboard />
        <NetworkSecurityDashboard />
      </section>

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="featured-case-studies">
        <Reveal>
          <SectionHeader
            description="Evidence-backed project previews with role context, outcomes, tools, and direct links to the full writeups."
            eyebrow="Featured Case Studies"
            level="h2"
            title="Security work presented as case studies"
          />
        </Reveal>
        <div className="mt-8 grid min-w-0 gap-5">
          {featuredCaseStudies.map((project, index) => (
            <Reveal delay={index * 0.05} key={project.slug} y={12}>
              <Card
                as="article"
                className="grid min-w-0 gap-6 p-5 sm:p-6 lg:p-7"
                variant="evidence"
              >
                <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <div className="min-w-0">
                    <p className="eyebrow-text">{project.role}</p>
                    <h3 className="panel-title mt-3">{project.title}</h3>
                    <p className="supporting-copy mt-3 max-w-3xl">{project.summary}</p>
                  </div>
                  <Button className="w-full sm:w-fit lg:justify-self-end" href={`/projects/${project.slug}`} variant="secondary">
                    Read case study
                  </Button>
                </div>

                <div className="grid min-w-0 gap-3 rounded-md border border-line bg-ink-soft/70 p-3 sm:p-4 lg:grid-cols-3">
                  {getProjectEvidenceRows(project).map((row) => (
                    <div className="rounded-md border border-line bg-surface/80 p-3 sm:p-4" key={row.label}>
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-evidence">{row.label}</p>
                      <p className="compact-copy mt-1.5">{row.value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line pt-4">
                  <ToolList limit={4} tools={project.tools} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="capabilities">
        <SkillsOverview />
      </section>

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="background">
        <Reveal>
          <SectionHeader
            description="Military operations experience, cybersecurity training, and hands-on security work inform how I approach technical problems."
            eyebrow="Background"
            level="h2"
            title="Background built around practical security work"
          />
        </Reveal>
        <Reveal delay={0.06} y={12}>
          <Card as="section" className="mt-8 grid min-w-0 gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-7" variant="evidence">
            <div className="min-w-0">
              <p className="eyebrow-text">Professional foundation</p>
              <p className="body-copy mt-3 max-w-2xl">
                My background combines USMC fire direction, operations leadership, and hands-on cybersecurity work.
                That path shaped how I approach security: define the problem, verify the evidence, prioritize the risk,
                and document the fix.
              </p>
            </div>

            <div className="grid min-w-0 gap-3">
              {backgroundPoints.map((point) => (
                <div className="min-w-0 border-t border-line pt-3 first:border-t-0 first:pt-0" key={point.label}>
                  <p className="eyebrow-text text-[0.62rem]">{point.label}</p>
                  <p className="compact-copy mt-1.5">{point.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="contact">
        <Reveal>
          <Card as="section" className="grid min-w-0 gap-6 p-6 sm:p-7 md:grid-cols-[1fr_auto] md:items-center lg:p-8" variant="evidence">
            <div className="min-w-0">
              <p className="eyebrow-text">Contact</p>
              <h2 className="section-title mt-3">Review the work or start a conversation.</h2>
              <p className="body-copy mt-3 max-w-2xl">
                The case studies, resume, and GitHub repositories are organized so hiring teams can quickly validate the work behind the metrics.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap md:justify-end">
              <Button href="/projects" variant="secondary">
                View work
              </Button>
              <Button href="/contact">
                Contact
              </Button>
              <Button external href={profile.githubUrl} variant="secondary">
                GitHub
              </Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </PageContainer>
  );
}
