export interface Property {
  id: string;
  title: string;
  category: "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "DEVELOPMENT";
  location: string;
  specs: string;
  description: string;
  image: string;
  featured?: boolean;
  priceTag: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "THE MONOLITH ESTATE",
    category: "RESIDENTIAL",
    location: "Prime Residential Hub",
    specs: " luxury villa • 6,500 sq.ft • Private Grounds",
    description: "Ultra-luxury pavilion architecture featuring raw concrete, floor-to-ceiling glass, and minimalist private courtyard.",
    image: "/images/residential.jpg",
    featured: true,
    priceTag: "INVESTMENT OPPORTUNITY",
  },
  {
    id: "prop-2",
    title: "VANGUARD TOWER & PLAZA",
    category: "COMMERCIAL",
    location: "Central Business District",
    specs: "Grade-A Commercial • 45,000 sq.ft • Steel Structural",
    description: "Contemporary commercial headquarters engineered for corporate dominance and modern business operations.",
    image: "/images/commercial.jpg",
    featured: true,
    priceTag: "PRIME COMMERCIAL",
  },
  {
    id: "prop-3",
    title: "APEX VALLEY PARCELS",
    category: "LAND",
    location: "Strategic Growth Corridor",
    specs: "12+ Acres • Clear Title • High Appreciation Zone",
    description: "Premium land promotion parcel with high development potential and clear documentation for immediate acquisition.",
    image: "/images/land.jpg",
    featured: true,
    priceTag: "LAND PROMOTION",
  },
  {
    id: "prop-4",
    title: "AURA RESIDENTIAL TOWNSHIP",
    category: "DEVELOPMENT",
    location: "Metropolitan Expansion Zone",
    specs: "Masterplanned Community • 25 Acres • Infrastructure Ready",
    description: "Large-scale residential land development thoughtfully masterplanned for premium suburban living.",
    image: "/images/featured.jpg",
    featured: true,
    priceTag: "MASTERDEVELOPMENT",
  },
  {
    id: "prop-5",
    title: "THE BRUTALIST VILLA",
    category: "RESIDENTIAL",
    location: "Exclusive Coastal Ridge",
    specs: "4 BHK Villa • Cantilever Design • Smart Home",
    description: "Bespoke architectural residence crafted with exposed concrete, timber louvers, and expansive terrace gardens.",
    image: "/images/hero.jpg",
    featured: false,
    priceTag: "BESPOKE BUILD",
  },
  {
    id: "prop-6",
    title: "HERITAGE COMMERCIAL HUB",
    category: "COMMERCIAL",
    location: "Financial District",
    specs: "Retail & Office Spaces • 18,000 sq.ft",
    description: "High-yield commercial property opportunity ideal for corporate headquarters and long-term rental income.",
    image: "/images/about.jpg",
    featured: false,
    priceTag: "HIGH YIELD INVESTMENT",
  },
];
