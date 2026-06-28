import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Ultra Luxury Homes in India | India's Finest Residential Addresses",
  description:
    "Explore India's most prestigious ultra-luxury residential addresses, verified for authenticity, developer pedigree, and investment outlook.",
  alternates: { canonical: "/ultra-luxury" },
  openGraph: {
    title: "Ultra Luxury Homes in India | BrickTrust",
    description: "Explore India's most prestigious ultra-luxury residential addresses.",
    url: "/ultra-luxury",
  },
};

export default function UltraLuxuryPage() {
  const projects = getProjectsByCategory("ultra-luxury");
  return <CategoryPageTemplate category="ultra-luxury" projects={projects} />;
}
