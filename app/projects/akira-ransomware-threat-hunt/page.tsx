import type { Metadata } from "next";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug } from "@/lib/data/projects";

const project = getProjectBySlug("akira-ransomware-threat-hunt");

export const metadata: Metadata = {
  title: project?.title,
  description: project?.summary
};

export default function AkiraRansomwareThreatHuntPage() {
  return <ProjectDetail project={project!} />;
}
