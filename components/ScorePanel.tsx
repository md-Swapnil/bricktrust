"use client";

import { motion } from "framer-motion";
import { ScoreBreakdown } from "@/data/types";

const labels: { key: keyof ScoreBreakdown; label: string }[] = [
  { key: "developerTrust", label: "Developer Trust" },
  { key: "locationAdvantage", label: "Location Advantage" },
  { key: "projectQuality", label: "Project Quality" },
  { key: "investmentPotential", label: "Investment Potential" },
  { key: "transparency", label: "Transparency" },
];

export default function ScorePanel({
  score,
  overall,
}: {
  score: ScoreBreakdown;
  overall: number;
}) {
  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl text-navy-900">BrickTrust Score™</h3>
        <div className="flex items-end gap-1">
          <span className="font-serif text-3xl text-navy-900">{overall}</span>
          <span className="mb-0.5 text-sm text-stone-400">/5</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {labels.map((row) => (
          <div key={row.key}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-stone-600">{row.label}</span>
              <span className="font-medium text-navy-900">{score[row.key]}/5</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(score[row.key] / 5) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-full rounded-full bg-gold-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
