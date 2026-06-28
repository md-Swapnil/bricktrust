import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { developers, getDeveloperBySlug } from "@/data/developers";
import { getProjectsByDeveloper } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Star, Building2, CheckCircle2, Hammer } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return developers.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);
  if (!developer) return {};
  return {
    title: `${developer.name} | Developer Profile & Projects`,
    description: `Explore ${developer.name}'s track record, completed projects, ongoing launches, and BrickTrust developer trust score.`,
    alternates: { canonical: `/developers/${developer.slug}` },
    openGraph: {
      title: `${developer.name} | BrickTrust Developer Profile`,
      description: `Explore ${developer.name}'s track record and verified project portfolio.`,
      url: `/developers/${developer.slug}`,
    },
  };
}

export default async function DeveloperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);
  if (!developer) notFound();

  const developerProjects = getProjectsByDeveloper(developer.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <Image
            src={developer.heroImage}
            alt={developer.name}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/50" />
        </div>
        <div className="container-bt relative py-20 sm:py-28">
          <span className="eyebrow rounded-full border border-gold-400/30 bg-navy-900/40 px-4 py-1.5 text-gold-300">
            Developer Profile
          </span>
          <h1 className="mt-5 font-serif text-4xl text-ivory-50 sm:text-5xl">{developer.name}</h1>
          <p className="mt-3 text-ivory-200/80">
            Founded {developer.founded} · Headquartered in {developer.headquarters}
          </p>
          <div className="mt-6 flex items-center gap-2 text-ivory-50">
            <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
            <span className="font-serif text-xl">{developer.trustScore}/5</span>
            <span className="text-sm text-ivory-200/70">BrickTrust Developer Score</span>
          </div>
        </div>
      </section>

      <section className="container-bt grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="section-label mb-5">Brand Story</h2>
          <p className="leading-relaxed text-stone-600">{developer.brandStory}</p>

          <h2 className="section-label mb-5 mt-12">Projects Portfolio</h2>
          {developerProjects.length === 0 ? (
            <p className="text-stone-500">
              Verified listings for this developer are being added soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {developerProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
        </div>

        <aside className="h-fit space-y-5 lg:sticky lg:top-24">
          <div className="card p-6">
            <h3 className="mb-4 font-serif text-lg text-navy-900">Track Record</h3>
            <div className="flex flex-col gap-4">
              <Stat
                icon={CheckCircle2}
                label="Completed Projects"
                value={developer.completedProjects}
              />
              <Stat
                icon={Hammer}
                label="Ongoing Projects"
                value={developer.ongoingProjects}
              />
              <Stat
                icon={Building2}
                label="Total Area Delivered"
                value={developer.totalAreaDelivered}
              />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="mb-2 font-serif text-lg text-navy-900">Developer Trust Score</h3>
            <p className="mb-4 text-sm text-stone-500">
              Based on delivery track record, financial stability, and transparency.
            </p>
            <div className="flex items-end gap-2">
              <span className="font-serif text-4xl text-navy-900">{developer.trustScore}</span>
              <span className="mb-1 text-stone-400">/ 5</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-gold-400"
                style={{ width: `${(developer.trustScore / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="mb-4 font-serif text-lg text-navy-900">Completed Projects</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {developer.name} has delivered over {developer.completedProjects} projects
              spanning {developer.totalAreaDelivered} of developed area, making it one of
              India&apos;s most prolific and trusted developers.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="mb-4 font-serif text-lg text-navy-900">Ongoing Projects</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {developer.ongoingProjects} projects currently under construction across multiple
              cities. All projects are RERA registered and listed on BrickTrust with verified
              details.
            </p>
            <Link
              href="/luxury"
              className="mt-4 inline-block text-sm font-medium text-gold-600 hover:text-gold-700"
            >
              Browse all projects →
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-gold-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-serif text-lg leading-none text-navy-900">{value}</p>
        <p className="mt-1 text-xs text-stone-500">{label}</p>
      </div>
    </div>
  );
}
