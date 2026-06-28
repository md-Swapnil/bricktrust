"use client";

import { motion } from "framer-motion";
import { Search, FileSearch2, LineChart, Scale, Headset } from "lucide-react";
import Link from "next/link";

const pillars = [
  { icon: Search, title: "Curated Discovery", desc: "Handpicked projects that are worth your time" },
  { icon: FileSearch2, title: "Expert Analysis", desc: "In-depth insights and real analysis" },
  { icon: LineChart, title: "Price Intelligence", desc: "Real price trends & comparative analysis" },
  { icon: Scale, title: "Pros & Cons", desc: "Honest evaluation for informed decisions" },
  { icon: Headset, title: "End-to-End Support", desc: "From discovery to your dream home" },
];

const scoreRows = [
  { label: "Developer Trust", value: 4.5 },
  { label: "Location Advantage", value: 4.2 },
  { label: "Project Quality", value: 4.3 },
  { label: "Investment Potential", value: 4.4 },
  { label: "Transparency", value: 4.6 },
];

export default function WhyBrickTrust() {
  return (
    <section id="why-bricktrust" className="bg-stone-50/70 py-16 sm:py-20">
      <div className="container-bt">
        <div className="mb-12 max-w-xl">
          <h2 className="section-label">Why BrickTrust?</h2>
          <p className="mt-3 text-stone-600">
            We go beyond listings to help you make better real estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-base text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 sm:p-7"
          >
            <h3 className="font-serif text-xl text-navy-900">BrickTrust Score™</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              A proprietary score across 5 key pillars to help you choose the right project.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {scoreRows.map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-stone-600">{row.label}</span>
                    <span className="font-medium text-navy-900">{row.value}/5</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(row.value / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gold-400"
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/luxury"
              className="mt-6 inline-block text-sm font-medium text-gold-600 hover:text-gold-700"
            >
              Know more about BrickTrust Score →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
