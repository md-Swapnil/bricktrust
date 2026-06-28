import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Luxury Homes in India | Verified New Launch Projects",
  description:
    "Explore verified luxury residential projects from India's most trusted developers. Compare pricing, BrickTrust Score, and investment outlook.",
  alternates: { canonical: "/luxury" },
  openGraph: {
    title: "Luxury Homes in India | BrickTrust",
    description: "Explore verified luxury residential projects from India's most trusted developers.",
    url: "/luxury",
  },
};

export default function LuxuryPage() {
  const projects = getProjectsByCategory("luxury");
  return <CategoryPageTemplate category="luxury" projects={projects} />;
}
