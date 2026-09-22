import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NetworkSecurityProof } from "@/components/sections/NetworkSecurityProof";
import { ProjectCaseStudyCard } from "@/components/sections/ProjectCaseStudyCard";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { VulnerabilityReductionProof } from "@/components/sections/VulnerabilityReductionProof";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { getOrderedCaseStudyProjects } from "@/lib/data/projects";

const backgroundPoints = [
  {
    label: "Professional systems support",
    value:
      "At UTB Ventures, I installed and maintained facility networking and IP cameras, resolved connectivity issues, and coordinated vendors and client needs."
  },
  {
    label: "Leadership and accountability",
    value:
      "As a Marine Corps NCO, I led and trained teams of 3–8 Marines and used verification procedures while operating communications and targeting systems."
  },
  {
    label: "Cybersecurity education and practice",
    value:
      "Building on my B.S. in Cybersecurity and Security+, I continue studying and practicing in the Log(N) Pacific cyber range beyond my degree curriculum. This ongoing work covers vulnerability management, PowerShell hardening, Defender/KQL investigations, and Azure access controls."
  }
];

export default function Home() {
  const featuredCaseStudies = getOrderedCaseStudyProjects();

  return (
    <PageContainer>
      <HeroSection />

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="proof">
        <Reveal>
          <SectionHeader
            description="Lab findings, configuration work, and links to the evidence behind the results."
            eyebrow="Evidence"
            level="h2"
            title="Lab results and security practice"
          />
        </Reveal>
        <VulnerabilityReductionProof />
        <NetworkSecurityProof />
      </section>

      <section className="mt-14 min-w-0 scroll-mt-24 sm:mt-16" id="featured-case-studies">
        <Reveal>
          <SectionHeader
            description="Four lab and cyber-range case studies with environment context, findings, tools, and links to full technical write-ups."
            eyebrow="Featured Case Studies"
            level="h2"
            title="Investigations and remediation, documented"
          />
        </Reveal>
        <div className="mt-8 grid min-w-0 gap-5">
          {featuredCaseStudies.map((project, index) => (
            <Reveal delay={index * 0.05} key={project.slug} y={12}>
              <ProjectCaseStudyCard project={project} />
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
            description="Professional systems support and operational leadership provide the foundation for my cybersecurity practice."
            eyebrow="Background"
            level="h2"
            title="From operational systems to security analysis"
          />
        </Reveal>
        <Reveal delay={0.06} y={12}>
          <Card as="section" className="mt-8 grid min-w-0 gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-7" variant="evidence">
            <div className="min-w-0">
              <p className="eyebrow-text">Professional foundation</p>
              <p className="body-copy mt-3 max-w-2xl">
                My professional background combines facility networking and operations at UTB Ventures with
                Marine Corps fire direction control and small-team leadership. Both required reliable systems,
                accurate information, and clear communication. I apply those habits in cybersecurity labs:
                understand the finding, make a controlled change, verify the result, and document the evidence.
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
                Explore the project evidence and role-specific resumes, or contact me about cybersecurity, security operations, and systems support opportunities.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap md:justify-end">
              <Button href="/projects" variant="secondary">
                View case studies
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
