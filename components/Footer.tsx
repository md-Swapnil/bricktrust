import Link from "next/link";
import { Instagram, Linkedin, Youtube, Send } from "lucide-react";

const exploreLinks = [
  { label: "New Launches", href: "/luxury" },
  { label: "Projects", href: "/luxury" },
  { label: "Cities", href: "/gurgaon" },
  { label: "Developers", href: "/developers/dlf" },
  { label: "Categories", href: "/luxury" },
];

const companyLinks = [
  { label: "About Us", href: "/#why-bricktrust" },
  { label: "Why BrickTrust", href: "/#why-bricktrust" },
  { label: "Careers", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Press & Media", href: "/" },
];

const resourceLinks = [
  { label: "Blog", href: "/" },
  { label: "Guides", href: "/" },
  { label: "Market Insights", href: "/" },
  { label: "RERA Information", href: "/" },
  { label: "Help Center", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-ivory-100">
      <div className="container-bt grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-400 text-gold-400">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M3 21V9L12 3L21 9V21H14V14H10V21H3Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="font-serif text-lg font-semibold">BrickTrust</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-200/60">
            India&apos;s most trusted platform for new launch real estate projects.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ivory-200/70 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <FooterCol title="Explore" links={exploreLinks} />
        <FooterCol title="Company" links={companyLinks} />
        <FooterCol title="Resources" links={resourceLinks} />

        <div>
          <h4 className="mb-4 text-sm font-semibold text-ivory-50">Stay Updated</h4>
          <p className="text-sm leading-relaxed text-ivory-200/60">
            Get the latest new launches and real estate insights in your inbox.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-md border border-white/15">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-ivory-50 placeholder:text-ivory-200/40 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-gold-400 px-3 text-navy-900 transition-colors hover:bg-gold-300"
              aria-label="Subscribe"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-bt flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} BrickTrust. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/">Terms &amp; Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-ivory-50">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ivory-200/60 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
