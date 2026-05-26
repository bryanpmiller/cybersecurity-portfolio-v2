import { PageContainer } from "@/components/layout/PageContainer";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Skills",
  "Cybersecurity skills grouped by vulnerability management, SecOps, compliance, automation, and network security.",
  "/skills"
);

export default function SkillsPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Cybersecurity skills grouped by role relevance"
          description="Tools, frameworks, and technical skills used across vulnerability management, secure configuration, automation, and threat hunting work."
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
