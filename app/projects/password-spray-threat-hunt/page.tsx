import type { Metadata } from "next";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";

const project = getProjectBySlug("password-spray-threat-hunt");

export const metadata: Metadata = {
  title: project?.title,
  description: project?.summary
};

export default function PasswordSprayThreatHuntPage() {
  return <ProjectDetail project={project!} />;
}
