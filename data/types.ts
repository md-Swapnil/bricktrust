export type Category = "affordable" | "premium" | "luxury" | "ultra-luxury";

export interface ScoreBreakdown {
  developerTrust: number;
  locationAdvantage: number;
  projectQuality: number;
  investmentPotential: number;
  transparency: number;
}

export interface FloorPlan {
  type: string;
  area: string;
  price: string;
}

export interface Project {
  slug: string;
  name: string;
  developerSlug: string;
  developerName: string;
  city: string;
  citySlug: string;
  locality: string;
  category: Category;
  priceFrom: string;
  configurations: string;
  image: string;
  gallery: string[];
  rera: string;
  possession: string;
  landParcel: string;
  totalUnits: string;
  overview: string;
  amenities: string[];
  floorPlans: FloorPlan[];
  pros: string[];
  cons: string[];
  investmentOutlook: string;
  score: ScoreBreakdown;
  latitude: number;
  longitude: number;
  locationHighlights: string[];
}

export interface Developer {
  slug: string;
  name: string;
  logo: string;
  founded: string;
  headquarters: string;
  brandStory: string;
  completedProjects: string;
  ongoingProjects: string;
  totalAreaDelivered: string;
  trustScore: number;
  heroImage: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  heroImage: string;
  overview: string;
  investmentHotspots: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
