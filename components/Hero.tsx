"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Search, ShieldCheck, Building2, FileCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-home.png"
          alt="India skyline at dusk"
          fill
          priority
          className="object-cover opacity-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40" />
      </div>

      <div className="container-bt relative pb-32 pt-14 sm:pb-40 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="eyebrow mb-6 rounded-full border border-gold-400/30 bg-navy-900/40 px-4 py-1.5 text-gold-300"
        >
          India&apos;s #1 Trusted New Launch Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-2xl font-serif text-4xl leading-[1.1] text-ivory-50 sm:text-5xl lg:text-6xl"
        >
          India&apos;s Most Trusted New Launch Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-5 max-w-lg text-base leading-relaxed text-ivory-200/80"
        >
          Discover verified new launch projects from India&apos;s most trusted developers.
          Curated. Transparent. Reliable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-3"
        >
          {[
            { icon: ShieldCheck, label: "Verified Projects" },
            { icon: Building2, label: "Trusted Developers" },
            { icon: FileCheck, label: "Transparent Information" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-ivory-100/85">
              <item.icon className="h-4 w-4 text-gold-400" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="container-bt relative -mt-16 pb-16 sm:-mt-20"
      >
        <div className="card flex flex-col gap-4 p-5 sm:p-6 lg:flex-row lg:items-end lg:gap-6 lg:p-7">
          <Field label="Select City">
            <div className="flex items-center gap-2 rounded-md border border-stone-200 px-3 py-2.5 text-sm text-stone-600">
              <MapPin className="h-4 w-4 text-gold-500" />
              <select className="w-full bg-transparent focus:outline-none">
                <option>Choose city</option>
                <option>Gurgaon</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
          </Field>

          <Field label="Budget Range">
            <select className="w-full rounded-md border border-stone-200 px-3 py-2.5 text-sm text-stone-600 focus:outline-none">
              <option>Select budget</option>
              <option>Under ₹2 Cr</option>
              <option>₹2 Cr – ₹5 Cr</option>
              <option>₹5 Cr – ₹10 Cr</option>
              <option>₹10 Cr+</option>
            </select>
          </Field>

          <Field label="Configuration">
            <select className="w-full rounded-md border border-stone-200 px-3 py-2.5 text-sm text-stone-600 focus:outline-none">
              <option>Select configuration</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
              <option>5 BHK+</option>
            </select>
          </Field>

          <button className="btn-primary w-full lg:w-auto">
            Explore Projects
            <Search className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <label className="mb-1.5 block text-xs font-medium text-stone-500">{label}</label>
      {children}
    </div>
  );
}
