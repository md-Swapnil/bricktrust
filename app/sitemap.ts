import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { developers } from "@/data/developers";
import { cities } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bricktrust.in";

  const staticRoutes = [
    "",
    "/luxury",
    "/premium",
    "/affordable",
    "/ultra-luxury",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const developerRoutes = developers.map((d) => ({
    url: `${base}/developers/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes, ...developerRoutes, ...projectRoutes];
}
