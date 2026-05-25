import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HeroSection } from "@/components/sections/HeroSection";
import { NetworkSecurityDashboard } from "@/components/sections/ImpactMetricsStrip";
import { RiskReductionDashboard } from "@/components/sections/RiskReductionDashboard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resumeHighlights } from "@/lib/data/resume";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />

      <section className="mt-14 min-w-0 sm:mt-16">
        <Reveal>
          <SectionHeader
            description="A concise snapshot of resume-backed experience, security operations work, and measurable vulnerability reduction."
            eyebrow="Evidence"
            level="h2"
            title="Risk Reduction and Security Operations experience"
          />
        </Reveal>
        <RiskReductionDashboard />
        <NetworkSecurityDashboard />
        <div className="mt-6 grid min-w-0 gap-3 md:grid-cols-2">
          {resumeHighlights.slice(0, 4).map((highlight, index) => (
            <Reveal delay={index * 0.06} key={highlight.title} y={12}>
              <div className="min-w-0 rounded-md border border-line bg-surface/70 p-4">
                <h3 className="card-title">{highlight.title}</h3>
                <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FeaturedProjects />
    </PageContainer>
  );
}
