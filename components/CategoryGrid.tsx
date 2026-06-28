"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Building, Gem, Crown, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Affordable Homes",
    description: "Great value homes for a better tomorrow.",
    href: "/affordable",
    bg: "bg-stone-100",
    iconBg: "bg-gold-400",
  },
  {
    icon: Building,
    title: "Premium Homes",
    description: "Elevated living with modern comforts.",
    href: "/premium",
    bg: "bg-stone-50",
    iconBg: "bg-navy-500",
  },
  {
    icon: Gem,
    title: "Luxury Homes",
    description: "Crafted for refined lifestyles.",
    href: "/luxury",
    bg: "bg-stone-100",
    iconBg: "bg-navy-700",
  },
  {
    icon: Crown,
    title: "Ultra Luxury Homes",
    description: "The finest addresses for the select few.",
    href: "/ultra-luxury",
    bg: "bg-stone-50",
    iconBg: "bg-gold-500",
  },
];

export default function CategoryGrid() {
  return (
    <section className="container-bt py-16 sm:py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="section-label">Explore by Category</h2>
        <Link
          href="/luxury"
          className="hidden items-center gap-1 text-sm text-gold-600 hover:text-gold-700 sm:flex"
        >
          View all categories <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={cat.href}
              className={`group flex h-full flex-col rounded-xl border border-stone-200 ${cat.bg} p-6 transition-all hover:-translate-y-1 hover:shadow-card`}
            >
              <span
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${cat.iconBg} text-ivory-50`}
              >
                <cat.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-lg text-navy-900">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{cat.description}</p>
              <span className="mt-5 flex items-center gap-1 text-sm font-medium text-gold-600 group-hover:gap-2 transition-all">
                Explore Projects <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
