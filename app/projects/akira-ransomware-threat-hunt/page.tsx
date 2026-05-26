import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("akira-ransomware-threat-hunt");

export const metadata = createPageMetadata(project?.title ?? "Project", project?.summary ?? "", "/projects/akira-ransomware-threat-hunt");

export default function AkiraRansomwareThreatHuntPage() {
  return <ProjectDetail project={project!} />;
}
