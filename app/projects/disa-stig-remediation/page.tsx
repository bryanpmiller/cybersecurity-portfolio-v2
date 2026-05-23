import type { Metadata } from "next";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";

const project = getProjectBySlug("disa-stig-remediation");

export const metadata: Metadata = {
  title: project?.title,
  description: project?.summary
};

export default function DisaStigRemediationPage() {
  return <ProjectDetail project={project!} />;
}
