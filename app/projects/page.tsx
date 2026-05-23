import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Evidence-based cybersecurity case studies covering vulnerability management, DISA STIG remediation, password spray investigation, and ransomware threat hunting."
};

export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Projects"
        title="Case studies and evidence-based security work"
        description="A focused collection of cybersecurity projects showing vulnerability management, secure configuration, remediation automation, and threat hunting through concise case studies and supporting GitHub evidence."
      />
      <div className="mt-10">
        <FeaturedProjects projects={projects} showHeader={false} />
      </div>
    </PageContainer>
  );
}
