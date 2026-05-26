import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { siteUrl } from "@/lib/metadata";

const staticRoutes = ["/", "/about", "/resume", "/projects", "/skills", "/contact"];
const lastModified = new Date("2026-05-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    changeFrequency: "monthly",
    lastModified,
    priority: route === "/" ? 1 : route === "/projects" ? 0.9 : 0.7,
    url: `${siteUrl}${route}`
  }));
}
