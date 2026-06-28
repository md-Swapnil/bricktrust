import Image from "next/image";
import { Project, Category } from "@/data/types";
import ProjectCard from "./ProjectCard";
import { ShieldCheck } from "lucide-react";

const copy: Record<
  Category,
  { eyebrow: string; title: string; description: string; image: string }
> = {
  affordable: {
    eyebrow: "Affordable Homes",
    title: "Great Value Homes for a Better Tomorrow",
    description:
      "Thoughtfully designed, RERA-verified homes that bring quality construction and trusted developers within reach, without compromising on transparency.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
  },
  premium: {
    eyebrow: "Premium Homes",
    title: "Elevated Living with Modern Comforts",
    description:
      "A curated set of premium residences from India's most reliable developers, balancing design, location, and long-term investment value.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  luxury: {
    eyebrow: "Luxury Homes",
    title: "Crafted for Refined Lifestyles",
    description:
      "Verified luxury residences that combine architectural distinction, prime locations, and the institutional credibility of India's leading developers.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
  },
  "ultra-luxury": {
    eyebrow: "Ultra Luxury Homes",
    title: "The Finest Addresses for the Select Few",
    description:
      "An exclusive collection of India's most prestigious residential addresses, reserved for buyers who view real estate as both home and legacy.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
};

export default function CategoryPageTemplate({
  category,
  projects,
}: {
  category: Category;
  projects: Project[];
}) {
  const c = copy[category];

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <Image src={c.image} alt={c.title} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/50" />
        </div>
        <div className="container-bt relative py-20 sm:py-28">
          <span className="eyebrow rounded-full border border-gold-400/30 bg-navy-900/40 px-4 py-1.5 text-gold-300">
            {c.eyebrow}
          </span>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl text-ivory-50 sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-4 max-w-xl text-ivory-200/80">{c.description}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-ivory-100/85">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            {projects.length} verified {projects.length === 1 ? "project" : "projects"} in this
            category
          </div>
        </div>
      </section>

      <section className="container-bt py-16 sm:py-20">
        {projects.length === 0 ? (
          <p className="text-stone-500">
            We&apos;re currently verifying new projects in this category. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
