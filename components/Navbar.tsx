"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "New Launches", href: "/luxury" },
  {
    label: "Projects",
    href: "/luxury",
    children: [
      { label: "Affordable Homes", href: "/affordable" },
      { label: "Premium Homes", href: "/premium" },
      { label: "Luxury Homes", href: "/luxury" },
      { label: "Ultra Luxury Homes", href: "/ultra-luxury" },
    ],
  },
  {
    label: "Cities",
    href: "/gurgaon",
    children: [
      { label: "Gurgaon", href: "/gurgaon" },
      { label: "Mumbai", href: "/mumbai" },
      { label: "Bangalore", href: "/bangalore" },
    ],
  },
  {
    label: "Developers",
    href: "/developers/dlf",
    children: [
      { label: "DLF", href: "/developers/dlf" },
      { label: "Oberoi Realty", href: "/developers/oberoi-realty" },
      { label: "Godrej Properties", href: "/developers/godrej-properties" },
    ],
  },
  { label: "Why BrickTrust", href: "/#why-bricktrust" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900 text-ivory-50">
      <div className="container-bt flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-400 text-gold-400">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M3 21V9L12 3L21 9V21H14V14H10V21H3Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide">BrickTrust</span>
            <span className="text-[9px] uppercase tracking-widest2 text-ivory-200/60">
              Verified. Trusted. Transparent.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm text-ivory-100/85 transition-colors hover:text-gold-300"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-56 rounded-lg border border-navy-700 bg-navy-800 p-2 shadow-lift">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-ivory-100/85 hover:bg-navy-700 hover:text-gold-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-ivory-100/85 transition-colors hover:border-gold-400 hover:text-gold-300">
            <Heart className="h-4 w-4" />
            Shortlist
          </button>
          <Link href="/#newsletter" className="btn-gold !px-5 !py-2.5">
            Get Updates
          </Link>
        </div>

        <button
          className="text-ivory-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-5 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-ivory-100/85"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col border-l border-white/10 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-ivory-200/70"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/#newsletter" className="btn-gold mt-3" onClick={() => setOpen(false)}>
              Get Updates
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
