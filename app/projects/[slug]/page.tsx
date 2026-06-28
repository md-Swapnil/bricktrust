import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
  overallScore,
} from "@/data/projects";
import { getDeveloperBySlug } from "@/data/developers";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  Layers,
  Home,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";
import ScorePanel from "@/components/ScorePanel";
import LeadForm from "@/components/LeadForm";
import ProjectCard from "@/components/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | ${project.locality} | Price & Floor Plans`,
    description: `${project.name} by ${project.developerName} in ${project.locality}. ${project.configurations}, priced from ${project.priceFrom}. RERA verified with BrickTrust Score.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | BrickTrust`,
      description: `${project.configurations} in ${project.locality}, priced from ${project.priceFrom}.`,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const developer = getDeveloperBySlug(project.developerSlug);
  const related = getRelatedProjects(project.slug, project.category);
  const score = overallScore(project.score);

  return (
    <>
      {/* Hero Gallery */}
      <section className="bg-navy-950">
        <div className="container-bt grid grid-cols-2 gap-1.5 py-1.5 sm:grid-cols-4 sm:gap-2 sm:py-2">
          {/* Large primary image */}
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden sm:aspect-[4/3]">
            <Image
              src={project.gallery[0]}
              alt={project.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          {/* Secondary images */}
          {project.gallery.slice(1, 4).map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img}
                alt={`${project.name} view ${i + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Title bar */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-bt flex flex-wrap items-end justify-between gap-6 py-7">
          <div>
            <div className="flex items-center gap-2 text-sm text-gold-600">
              <Link
                href={`/developers/${project.developerSlug}`}
                className="font-medium hover:underline"
              >
                {project.developerName}
              </Link>
              <span className="text-stone-300">/</span>
              <Link href={`/${project.citySlug}`} className="hover:underline">
                {project.city}
              </Link>
            </div>
            <h1 className="mt-2 font-serif text-3xl text-navy-900 sm:text-4xl">{project.name}</h1>
            <p className="mt-1.5 flex items-center gap-1.5 text-stone-500">
              <MapPin className="h-4 w-4" /> {project.locality}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <p className="font-serif text-2xl text-navy-900">{project.priceFrom}</p>
            <p className="text-sm text-stone-500">{project.configurations}</p>
            <div className="flex items-center gap-1 text-sm text-gold-600">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> {score}/5 BrickTrust Score
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <section className="container-bt grid grid-cols-1 gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-14">

          {/* Project Overview */}
          <div>
            <h2 className="section-label mb-5">Project Overview</h2>
            <p className="leading-relaxed text-stone-600">{project.overview}</p>
            <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <InfoStat icon={Calendar} label="Possession" value={project.possession} />
              <InfoStat icon={Layers} label="Land Parcel" value={project.landParcel} />
              <InfoStat icon={Home} label="Total Units" value={project.totalUnits} />
              <InfoStat icon={ShieldCheck} label="RERA No." value={project.rera} small />
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="section-label mb-5">Pricing &amp; Configuration Details</h2>
            <div className="overflow-hidden rounded-xl border border-stone-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 text-stone-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">Configuration</th>
                    <th className="px-5 py-3 font-medium">Area</th>
                    <th className="px-5 py-3 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {project.floorPlans.map((fp) => (
                    <tr key={fp.type}>
                      <td className="px-5 py-3.5 font-medium text-navy-900">{fp.type}</td>
                      <td className="px-5 py-3.5 text-stone-600">{fp.area}</td>
                      <td className="px-5 py-3.5 text-stone-600">{fp.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-stone-400">
              *Prices are indicative and subject to change. Confirm final pricing with the developer.
            </p>
          </div>

          {/* Location */}
          <div>
            <h2 className="section-label mb-5">Location</h2>
            <p className="mb-4 text-stone-600">{project.locality}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.locationHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-stone-50 px-4 py-3 text-sm text-stone-600"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gold-500" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="section-label mb-5">Amenities</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plans */}
          <div>
            <h2 className="section-label mb-5">Floor Plans</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {project.floorPlans.map((fp) => (
                <div key={fp.type} className="card p-5">
                  <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-stone-50">
                    <Home className="h-10 w-10 text-stone-300" />
                  </div>
                  <h3 className="font-serif text-base text-navy-900">{fp.type}</h3>
                  <p className="mt-1 text-sm text-stone-500">{fp.area}</p>
                  <p className="mt-2 text-sm font-medium text-navy-900">{fp.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Profile */}
          {developer && (
            <div>
              <h2 className="section-label mb-5">Developer Profile</h2>
              <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Link
                    href={`/developers/${developer.slug}`}
                    className="font-serif text-xl text-navy-900 hover:text-gold-600"
                  >
                    {developer.name}
                  </Link>
                  <p className="mt-1 text-sm text-stone-500">
                    Founded {developer.founded} · {developer.completedProjects} Completed Projects
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600">
                    {developer.brandStory.slice(0, 180)}...
                  </p>
                </div>
                <Link href={`/developers/${developer.slug}`} className="btn-outline shrink-0">
                  View Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}

          {/* BrickTrust Score – mobile inline */}
          <div className="lg:hidden">
            <h2 className="section-label mb-5">BrickTrust Score™</h2>
            <ScorePanel score={project.score} overall={score} />
          </div>

          {/* Pros & Cons */}
          <div>
            <h2 className="section-label mb-5">Pros &amp; Cons</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-base text-navy-900">
                  <CheckCircle2 className="h-5 w-5 text-gold-500" /> Pros
                </h3>
                <ul className="flex flex-col gap-3">
                  {project.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm leading-relaxed text-stone-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-base text-navy-900">
                  <XCircle className="h-5 w-5 text-stone-400" /> Cons
                </h3>
                <ul className="flex flex-col gap-3">
                  {project.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm leading-relaxed text-stone-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Outlook */}
          <div>
            <h2 className="section-label mb-5 flex items-center gap-2">
              <TrendingUp className="h-7 w-7 text-gold-500" /> Investment Outlook
            </h2>
            <div className="card p-6">
              <p className="leading-relaxed text-stone-600">{project.investmentOutlook}</p>
            </div>
          </div>

          {/* Lead Form – mobile inline */}
          <div className="lg:hidden">
            <LeadForm projectName={project.name} />
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="hidden h-fit flex-col gap-5 lg:sticky lg:top-24 lg:flex">
          <LeadForm projectName={project.name} />
          <ScorePanel score={project.score} overall={score} />
        </aside>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="bg-stone-50/70 py-16 sm:py-20">
          <div className="container-bt">
            <h2 className="section-label mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function InfoStat({
  icon: Icon,
  label,
  value,
  small,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-lg bg-stone-50 px-4 py-3.5">
      <Icon className="mb-2 h-4 w-4 text-gold-500" />
      <p className={`font-medium text-navy-900 ${small ? "text-[11px] leading-tight" : "text-sm"}`}>
        {value}
      </p>
      <p className="mt-0.5 text-xs text-stone-500">{label}</p>
    </div>
  );
}
