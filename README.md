# BrickTrust

India's most trusted new-launch real estate discovery platform — built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx              Root layout, fonts, global metadata
  page.tsx                Homepage
  globals.css              Tailwind + design tokens
  sitemap.ts / robots.ts   SEO files
  not-found.tsx            Custom 404
  luxury/page.tsx          Luxury category
  premium/page.tsx         Premium category
  affordable/page.tsx      Affordable category
  ultra-luxury/page.tsx    Ultra Luxury category
  [city]/page.tsx          Dynamic city pages (/gurgaon, /mumbai, /bangalore)
  developers/[slug]/page.tsx  Dynamic developer pages
  projects/[slug]/page.tsx    Dynamic project detail pages
components/                Reusable UI components
data/                      Local TypeScript data (projects, developers, cities, types)
```

## Routes

- `/` — Homepage
- `/luxury`, `/premium`, `/affordable`, `/ultra-luxury` — Category pages
- `/gurgaon`, `/mumbai`, `/bangalore` — City pages
- `/developers/dlf`, `/developers/oberoi-realty`, `/developers/godrej-properties` — Developer pages
- `/projects/dlf-privana-north`, `/projects/dlf-camellias`, `/projects/godrej-riverine`, `/projects/oberoi-garden-city`, `/projects/lodha-marquis` — Project pages

All city/developer/project routes are statically generated via `generateStaticParams`, driven entirely by the data in `/data`. No database is required — add new projects, developers, or cities simply by extending the arrays in `/data`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Deploy.

## Notes

- All imagery uses Unsplash placeholder URLs (configured in `next.config.ts` under `images.remotePatterns`). Replace with real project photography before production launch.
- Lead capture forms are client-side only and do not currently submit to a backend — wire up an API route or third-party form handler before going live.
- Update `metadataBase` in `app/layout.tsx` and the sitemap base URL in `app/sitemap.ts` to your production domain.
