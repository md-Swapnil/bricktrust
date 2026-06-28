"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, BadgeCheck } from "lucide-react";
import { Project } from "@/data/types";

const categoryLabel: Record<string, string> = {
  affordable: "Affordable",
  premium: "Premium",
  luxury: "Luxury",
  "ultra-luxury": "Ultra Luxury",
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <span className="badge absolute left-3 top-3">{categoryLabel[project.category]}</span>
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-900">
            <Heart className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg text-navy-900">{project.name}</h3>
          <p className="mt-1 text-sm text-stone-500">{project.locality}</p>

          <p className="mt-3 text-base font-semibold text-navy-900">{project.priceFrom} Onwards</p>
          <p className="text-sm text-stone-500">{project.configurations}</p>

          <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-4 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-500" /> RERA Registered
            </span>
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-gold-500" /> Verified
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
