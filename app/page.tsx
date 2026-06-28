import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import TrustMetrics from "@/components/TrustMetrics";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyBrickTrust from "@/components/WhyBrickTrust";
import TrustedDevelopers from "@/components/TrustedDevelopers";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "India's Most Trusted New Launch Platform",
  description:
    "Discover verified new launch real estate projects from India's most trusted developers across Gurgaon, Mumbai, and Bangalore. Curated, transparent, reliable.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BrickTrust | India's Most Trusted New Launch Platform",
    description:
      "Discover verified new launch real estate projects from India's most trusted developers.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <TrustMetrics />
      <FeaturedProjects />
      <WhyBrickTrust />
      <TrustedDevelopers />
      <Testimonials />
      <Newsletter />
    </>
  );
}
