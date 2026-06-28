import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Affordable Homes in India | Verified New Launch Projects",
  description:
    "Browse verified affordable housing projects from trusted developers, with transparent pricing and RERA-verified details.",
  alternates: { canonical: "/affordable" },
  openGraph: {
    title: "Affordable Homes in India | BrickTrust",
    description: "Browse verified affordable housing projects from trusted developers.",
    url: "/affordable",
  },
};

export default function AffordablePage() {
  const projects = getProjectsByCategory("affordable");
  return <CategoryPageTemplate category="affordable" projects={projects} />;
}
