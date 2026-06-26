import { PageContainer } from "@/components/layout/PageContainer";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Skills",
  "Cybersecurity skills across vulnerability management, Windows hardening, PowerShell remediation, and security investigations.",
  "/skills"
);

export default function SkillsPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Security skills"
          description="Skills used across vulnerability management, Windows hardening, PowerShell remediation, and security investigations."
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
