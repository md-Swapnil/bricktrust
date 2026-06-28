"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2, FileText, TrendingUp, Users } from "lucide-react";

const metrics = [
  { icon: ShieldCheck, value: "100%", label: "Verified Projects", sub: "Every project is thoroughly verified" },
  { icon: Building2, value: "50+", label: "Trusted Developers", sub: "India's leading real estate brands" },
  { icon: FileText, value: "Transparent", label: "Information", sub: "No hidden details. Only the truth." },
  { icon: TrendingUp, value: "BrickTrust", label: "Score™", sub: "Our proprietary score for better decisions" },
  { icon: Users, value: "Customer", label: "First", sub: "Your trust is our highest priority" },
];

export default function TrustMetrics() {
  return (
    <section className="border-y border-stone-200 bg-stone-50/60">
      <div className="container-bt grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600">
              <m.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-serif text-base text-navy-900">
                {m.value} <span className="block text-sm font-sans font-medium text-stone-700">{m.label}</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">{m.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
