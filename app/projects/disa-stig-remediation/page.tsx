import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("disa-stig-remediation");

export const metadata = createPageMetadata(project?.title ?? "Project", project?.summary ?? "", "/projects/disa-stig-remediation");

export default function DisaStigRemediationPage() {
  return <ProjectDetail project={project!} />;
}
