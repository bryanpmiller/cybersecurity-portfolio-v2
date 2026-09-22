import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { resumeVariants } from "@/lib/data/resume";
import { siteUrl } from "@/lib/metadata";

const staticRoutes = ["/", "/about", "/resume", "/projects", "/skills", "/contact"];
const lastModified = new Date("2026-09-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const resumeRoutes = resumeVariants.map((resume) => resume.href);

  return [...staticRoutes, ...projectRoutes, ...resumeRoutes].map((route) => ({
    changeFrequency: "monthly",
    lastModified: route === "/resume" || resumeRoutes.includes(route) ? new Date("2026-09-13") : lastModified,
    priority: route === "/" ? 1 : route === "/projects" ? 0.9 : 0.7,
    url: `${siteUrl}${route}`
  }));
}
