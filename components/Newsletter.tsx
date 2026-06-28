"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="container-bt py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center rounded-2xl border border-stone-200 bg-stone-50/70 px-6 py-12 text-center sm:px-12"
      >
        <h2 className="section-label">Never Miss a New Launch</h2>
        <p className="mt-3 max-w-md text-stone-600">
          Subscribe for verified updates on new launch projects, price movements, and curated
          investment insights.
        </p>
        <form className="mt-6 flex w-full max-w-md overflow-hidden rounded-md border border-stone-300 bg-white">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 text-sm text-navy-900 placeholder:text-stone-400 focus:outline-none"
          />
          <button type="submit" className="btn-gold !rounded-none gap-2">
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
