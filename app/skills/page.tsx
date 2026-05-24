import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Skills",
  description: "Cybersecurity skills grouped by vulnerability management, SecOps, compliance, automation, and network security."
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Skills"
        title="Cybersecurity skills grouped by role relevance"
        description="A role-focused view of the tools, frameworks, and technical skills used across vulnerability management, secure configuration, automation, and threat hunting work."
      />
      <div className="mt-8 min-w-0 sm:mt-10">
        <SkillsOverview showHeader={false} />
      </div>
    </PageContainer>
  );
}
