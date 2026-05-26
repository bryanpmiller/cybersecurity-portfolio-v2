import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("password-spray-threat-hunt");

export const metadata = createPageMetadata(project?.title ?? "Project", project?.summary ?? "", "/projects/password-spray-threat-hunt");

export default function PasswordSprayThreatHuntPage() {
  return <ProjectDetail project={project!} />;
}
