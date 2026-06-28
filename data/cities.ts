import { City } from "./types";

export const cities: City[] = [
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    heroImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Gurgaon is India's foremost corporate and luxury residential hub, anchored by Golf Course Road, Golf Course Extension Road, Dwarka Expressway, and Southern Peripheral Road. Home to DLF's flagship ultra-luxury portfolio and a fast-growing base of Fortune 500 occupiers, the city commands the country's highest new-launch price points outside South Mumbai.",
    investmentHotspots: [
      {
        name: "Golf Course Road",
        description:
          "The original luxury corridor, defined by DLF Camellias, Aralias, and Magnolias, with the highest per-square-foot values in North India.",
      },
      {
        name: "Dwarka Expressway",
        description:
          "Gurgaon's fastest-appreciating micro-market, driven by improved connectivity to IGI Airport and a wave of new premium launches.",
      },
      {
        name: "Golf Course Extension Road",
        description:
          "A maturing corridor balancing new supply with established social infrastructure, popular with upgrading end-users.",
      },
    ],
    faqs: [
      {
        question: "Which is the best locality for ultra-luxury homes in Gurgaon?",
        answer:
          "Golf Course Road remains Gurgaon's most prestigious address, led by DLF's The Camellias and The Aralias, both of which command the city's highest resale values.",
      },
      {
        question: "Is Dwarka Expressway a good investment in 2026?",
        answer:
          "Dwarka Expressway has seen strong price appreciation following expressway completion and is considered one of the better mid-to-long-term investment corridors in Gurgaon.",
      },
      {
        question: "Are new-launch projects in Gurgaon RERA registered?",
        answer:
          "All projects featured on BrickTrust are independently verified for RERA registration before being listed.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Mumbai is India's financial capital and its most land-constrained luxury market, where prestige is measured in sea views, redevelopment pedigree, and proximity to South Mumbai. From Worli's super-luxury towers to Borivali's emerging premium corridor, the city offers the country's deepest and most diverse band of high-end residential supply.",
    investmentHotspots: [
      {
        name: "Worli",
        description:
          "Mumbai's new super-luxury core, anchored by sea-facing towers from Lodha, Oberoi, and L&T, commanding South Mumbai-adjacent pricing.",
      },
      {
        name: "Borivali East",
        description:
          "A fast-emerging premium and luxury corridor led by Oberoi Realty, benefiting from the Sanjay Gandhi National Park backdrop and metro connectivity.",
      },
      {
        name: "Mira Road",
        description:
          "Mumbai's accessible luxury frontier, where larger format homes and integrated townships are reaching first-time premium buyers.",
      },
    ],
    faqs: [
      {
        question: "Which Mumbai micro-market offers the best long-term appreciation?",
        answer:
          "Worli and Lower Parel have historically delivered the strongest appreciation among redevelopment-led super-luxury corridors, though entry prices are correspondingly high.",
      },
      {
        question: "Is Borivali East a good entry point into luxury real estate?",
        answer:
          "Borivali East offers relatively accessible entry into branded luxury housing, led largely by Oberoi Realty's concentrated presence in the micro-market.",
      },
      {
        question: "How does BrickTrust verify Mumbai projects?",
        answer:
          "Every Mumbai project on BrickTrust is cross-checked against RERA filings, developer disclosures, and on-ground due diligence before publishing.",
      },
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    heroImage:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Bangalore is India's technology capital and its most consistently performing residential market, driven by deep end-user demand from the IT and startup workforce. Corridors like Sarjapur Road, Whitefield, and North Bangalore near the airport have emerged as the city's leading premium and luxury destinations.",
    investmentHotspots: [
      {
        name: "Sarjapur Road",
        description:
          "Bangalore's most active premium corridor, benefiting from proximity to the city's largest IT employment clusters.",
      },
      {
        name: "North Bangalore",
        description:
          "An infrastructure-led growth corridor anchored by the airport and upcoming peripheral ring road, attracting major integrated township launches.",
      },
      {
        name: "Whitefield",
        description:
          "An established IT corridor with a mature social infrastructure base and steady appreciation in mid-to-premium segments.",
      },
    ],
    faqs: [
      {
        question: "Which Bangalore corridor is best for end-use buyers?",
        answer:
          "Sarjapur Road and Whitefield remain the most popular among end-use buyers due to their proximity to major technology employers.",
      },
      {
        question: "Is North Bangalore a good long-term investment?",
        answer:
          "North Bangalore is widely viewed as a long-term infrastructure play, with appreciation closely tied to airport-linked connectivity projects.",
      },
      {
        question: "Does BrickTrust track new launches in Bangalore?",
        answer:
          "Yes, BrickTrust continuously tracks and verifies new launches across Bangalore's major developers and corridors.",
      },
    ],
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
