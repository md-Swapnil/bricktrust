"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "25K+", label: "Qualified Leads Delivered" },
  { value: "1.5K+", label: "Projects Evaluated" },
];

export default function Testimonials() {
  return (
    <section className="bg-navy-900 py-14 text-ivory-50">
      <div className="container-bt flex flex-col items-center justify-between gap-10 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <Quote className="mb-4 h-8 w-8 text-gold-400" />
          <p className="font-serif text-xl leading-snug text-ivory-50 sm:text-2xl">
            Finally, a platform that puts transparency and trust first. BrickTrust makes property
            search simple and reliable.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop"
                alt="Rahul Mehta"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Rahul Mehta</p>
              <p className="text-xs text-ivory-200/60">Home Buyer, Mumbai</p>
              <div className="mt-0.5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 sm:gap-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl text-gold-400 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-ivory-200/70 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
