import { Developer } from "./types";

export const developers: Developer[] = [
  {
    slug: "dlf",
    name: "DLF",
    logo: "DLF",
    founded: "1946",
    headquarters: "New Delhi, India",
    brandStory:
      "DLF is India's largest publicly listed real estate company, with a legacy spanning more than seven decades. From building Delhi's first organised colonies to defining the Gurgaon skyline, DLF has shaped how India lives, works, and invests. Its ultra-luxury portfolio, anchored by The Camellias and The Aralias, represents the upper edge of Indian residential real estate, built on a philosophy of scale, permanence, and institutional credibility.",
    completedProjects: "150+",
    ongoingProjects: "12",
    totalAreaDelivered: "353 million sq. ft.",
    trustScore: 4.7,
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "oberoi-realty",
    name: "Oberoi Realty",
    logo: "Oberoi Realty",
    founded: "1998",
    headquarters: "Mumbai, India",
    brandStory:
      "Oberoi Realty has built its reputation on uncompromising design standards and a portfolio concentrated almost entirely in Mumbai's most coveted micro-markets. Known for in-house execution rather than joint ventures, the developer controls every stage of delivery, from architecture to facility management, resulting in some of the city's most consistently high-quality addresses, from Goregaon to Worli.",
    completedProjects: "50+",
    ongoingProjects: "8",
    totalAreaDelivered: "47 million sq. ft.",
    trustScore: 4.6,
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "godrej-properties",
    name: "Godrej Properties",
    logo: "Godrej Properties",
    founded: "1990",
    headquarters: "Mumbai, India",
    brandStory:
      "Godrej Properties brings the 125-year-old trust of the Godrej Group into real estate, combining the group's engineering heritage with a national footprint across 12+ cities. The developer is known for sustainability-led design, fast execution cycles, and consistently strong launch absorption, making it one of India's most active and trusted listed developers.",
    completedProjects: "90+",
    ongoingProjects: "20",
    totalAreaDelivered: "70 million sq. ft.",
    trustScore: 4.5,
    heroImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "lodha",
    name: "Lodha",
    logo: "Lodha",
    founded: "1980",
    headquarters: "Mumbai, India",
    brandStory:
      "Lodha (Macrotech Developers) is India's largest real estate developer by sales, known for marrying scale with editorial-grade brand storytelling. From World One to Lodha Park, the group has redefined how Indian luxury real estate is marketed, positioning entire townships as lifestyle ecosystems rather than housing.",
    completedProjects: "115+",
    ongoingProjects: "25",
    totalAreaDelivered: "90 million sq. ft.",
    trustScore: 4.5,
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "sobha",
    name: "Sobha Limited",
    logo: "Sobha",
    founded: "1995",
    headquarters: "Bangalore, India",
    brandStory:
      "Sobha Limited is known across South India for its backward-integrated construction model, in which it manufactures its own glazing, joinery, and concrete products in-house. This obsessive control over execution has made Sobha synonymous with build quality, particularly along Bangalore's Outer Ring Road IT corridor.",
    completedProjects: "190+",
    ongoingProjects: "30",
    totalAreaDelivered: "121 million sq. ft.",
    trustScore: 4.5,
    heroImage:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1600&auto=format&fit=crop",
  },
];

export function getDeveloperBySlug(slug: string) {
  return developers.find((d) => d.slug === slug);
}
