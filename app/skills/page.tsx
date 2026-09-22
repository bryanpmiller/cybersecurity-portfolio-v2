import { PageContainer } from "@/components/layout/PageContainer";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Skills",
  "Bryan Miller’s skills in vulnerability management, SecOps labs, PowerShell hardening, professional network support, and operational leadership.",
  "/skills"
);

export default function SkillsPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Security, systems, and operational skills"
          description="Lab and cyber-range practice in security analysis and hardening, supported by professional networking, troubleshooting, and team leadership."
        />
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-8 min-w-0 sm:mt-10">
          <SkillsOverview showHeader={false} />
        </div>
      </Reveal>
    </PageContainer>
  );
}
