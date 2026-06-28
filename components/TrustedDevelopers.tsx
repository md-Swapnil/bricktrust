import Link from "next/link";
import { developers } from "@/data/developers";

const extraNames = ["Prestige Group", "Sobha", "Birla Estates", "Mahindra Lifespaces", "Puravankara"];

export default function TrustedDevelopers() {
  return (
    <section className="container-bt py-16 sm:py-20">
      <h2 className="section-label mb-10">Our Trusted Developers</h2>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
        {developers.map((d) => (
          <Link
            key={d.slug}
            href={`/developers/${d.slug}`}
            className="font-serif text-lg text-navy-700/70 transition-colors hover:text-navy-900"
          >
            {d.name}
          </Link>
        ))}
        {extraNames.map((name) => (
          <span key={name} className="font-serif text-lg text-navy-700/40">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
