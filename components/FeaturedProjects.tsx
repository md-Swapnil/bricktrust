import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = [
    projects.find((p) => p.slug === "oberoi-garden-city"),
    projects.find((p) => p.slug === "dlf-privana-north"),
    projects.find((p) => p.slug === "godrej-riverine"),
    projects.find((p) => p.slug === "lodha-marquis"),
  ].filter(Boolean) as typeof projects;

  return (
    <section className="container-bt py-16 sm:py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="section-label">Featured New Launches</h2>
        <Link
          href="/luxury"
          className="hidden items-center gap-1 text-sm text-gold-600 hover:text-gold-700 sm:flex"
        >
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 rounded-full border border-stone-200 bg-white px-6 py-4 text-sm text-stone-600">
        {[
          "Verified Projects",
          "Best Price Insights",
          "Expert Analysis",
          "No Brokerage",
          "Secure & Transparent",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
