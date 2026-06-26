import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NetworkSecurityDashboard } from "@/components/sections/ImpactMetricsStrip";
import { ProjectCaseStudyCard } from "@/components/sections/ProjectCaseStudyCard";
import { RiskReductionDashboard } from "@/components/sections/RiskReductionDashboard";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { getOrderedCaseStudyProjects } from "@/lib/data/projects";

const backgroundPoints = [
  {
    label: "Operations foundation",
    value:
      "Marine Corps fire direction control built experience performing under pressure, protecting data accuracy, leading small teams, and training Marines on required systems."
  },
  {
    label: "Cybersecurity preparation",
    value:
      "Norwich University cybersecurity coursework, CompTIA Security+, and current internship work support the technical foundation behind the portfolio."
  },
  {
    label: "Current security work",
    value:
      "Internship work includes vulnerability scanning and reporting, risk prioritization, DISA STIG reviews, PowerShell remediation, Defender detections, Sentinel dashboards, and NSG/firewall controls."
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
            description="Marine Corps fire direction control, cybersecurity training, and current internship work inform a practical, evidence-first approach to security."
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
                My Marine Corps fire direction control experience was built around pressure, precision, and
                accountability. I led small teams, trained Marines on required systems and operating procedures, and
                learned how much outcomes depend on accurate data. I bring that same mindset to vulnerability
                management, secure configuration, remediation scripting, and security investigation.
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
