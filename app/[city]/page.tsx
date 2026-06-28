import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { getProjectsByCity } from "@/data/projects";
import { developers } from "@/data/developers";
import ProjectCard from "@/components/ProjectCard";
import { MapPin, TrendingUp } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: `New Launch Projects in ${city.name} | Verified Real Estate`,
    description: `Explore verified new launch and luxury real estate projects in ${city.name}, ${city.state}. Compare developers, pricing, and investment hotspots.`,
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title: `New Launch Projects in ${city.name} | BrickTrust`,
      description: `Explore verified new launch real estate projects in ${city.name}.`,
      url: `/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityProjects = getProjectsByCity(city.slug);
  const luxuryProjects = cityProjects.filter(
    (p) => p.category === "luxury" || p.category === "ultra-luxury"
  );
  const cityDeveloperSlugs = Array.from(new Set(cityProjects.map((p) => p.developerSlug)));
  const cityDevelopers = developers.filter((d) => cityDeveloperSlugs.includes(d.slug));

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <Image
            src={city.heroImage}
            alt={city.name}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/50" />
        </div>
        <div className="container-bt relative py-20 sm:py-28">
          <span className="eyebrow rounded-full border border-gold-400/30 bg-navy-900/40 px-4 py-1.5 text-gold-300">
            <MapPin className="h-3.5 w-3.5" /> {city.state}
          </span>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl text-ivory-50 sm:text-5xl">
            New Launch Real Estate in {city.name}
          </h1>
          <p className="mt-4 max-w-xl text-ivory-200/80">{city.overview}</p>
        </div>
      </section>

      <section className="container-bt py-16 sm:py-20">
        <h2 className="section-label mb-8">Featured New Launches in {city.name}</h2>
        {cityProjects.length === 0 ? (
          <p className="text-stone-500">New verified launches in {city.name} are coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cityProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </section>

      {luxuryProjects.length > 0 && (
        <section className="bg-stone-50/70 py-16 sm:py-20">
          <div className="container-bt">
            <h2 className="section-label mb-8">Luxury Projects in {city.name}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {luxuryProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-bt py-16 sm:py-20">
        <h2 className="section-label mb-8 flex items-center gap-2">
          <TrendingUp className="h-7 w-7 text-gold-500" /> Investment Hotspots
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {city.investmentHotspots.map((spot) => (
            <div key={spot.name} className="card p-6">
              <h3 className="font-serif text-lg text-navy-900">{spot.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{spot.description}</p>
            </div>
          ))}
        </div>
      </section>

      {cityDevelopers.length > 0 && (
        <section className="bg-stone-50/70 py-16 sm:py-20">
          <div className="container-bt">
            <h2 className="section-label mb-8">Popular Developers in {city.name}</h2>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {cityDevelopers.map((d) => (
                <Link
                  key={d.slug}
                  href={`/developers/${d.slug}`}
                  className="font-serif text-lg text-navy-700/80 hover:text-navy-900"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-bt py-16 sm:py-20">
        <h2 className="section-label mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {city.faqs.map((faq) => (
            <details
              key={faq.question}
              className="card group p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer list-none font-medium text-navy-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
