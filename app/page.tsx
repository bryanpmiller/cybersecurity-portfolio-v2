import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HeroSection } from "@/components/sections/HeroSection";
import { RiskReductionDashboard } from "@/components/sections/RiskReductionDashboard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resumeHighlights } from "@/lib/data/resume";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />

      <section className="mt-14 min-w-0 sm:mt-16">
        <SectionHeader
          description="A concise snapshot of resume-backed experience, security operations work, and measurable vulnerability reduction."
          eyebrow="Evidence"
          level="h2"
          title="Risk Reduction and Security Operations experience"
        />
        <RiskReductionDashboard />
        <div className="mt-6 grid min-w-0 gap-3 md:grid-cols-2">
          {resumeHighlights.slice(0, 4).map((highlight) => (
            <div className="min-w-0 rounded-md border border-line bg-surface/70 p-4" key={highlight.title}>
              <h3 className="card-title">{highlight.title}</h3>
              <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedProjects />
    </PageContainer>
  );
}
