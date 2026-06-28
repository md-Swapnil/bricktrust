import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Premium Homes in India | Verified New Launch Projects",
  description:
    "Discover verified premium residential projects from India's most trusted developers, with transparent pricing and BrickTrust Score insights.",
  alternates: { canonical: "/premium" },
  openGraph: {
    title: "Premium Homes in India | BrickTrust",
    description: "Discover verified premium residential projects from India's most trusted developers.",
    url: "/premium",
  },
};

export default function PremiumPage() {
  const projects = getProjectsByCategory("premium");
  return <CategoryPageTemplate category="premium" projects={projects} />;
}
