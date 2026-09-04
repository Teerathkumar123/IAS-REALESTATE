export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "LAND PROMOTION",
    description: "Strategic promotion of land opportunities with professional presentation and buyer-focused positioning.",
    image: "/images/land.jpg",
    details: ["Clear Title Verification", "Market Valuation Analysis", "High-Visibility Presentation", "Investor Matching"],
  },
  {
    number: "02",
    title: "LAND DEVELOPMENT",
    description: "Transforming raw land opportunities into thoughtfully planned, infrastructure-ready development projects.",
    image: "/images/featured.jpg",
    details: ["Masterplanning & Zoning", "Road & Utility Layout", "Regulatory Approvals", "Sustainable Land Prep"],
  },
  {
    number: "03",
    title: "PROPERTY BUYING",
    description: "Helping customers discover suitable residential, commercial, and land property opportunities based on tailored requirements.",
    image: "/images/residential.jpg",
    details: ["Personalized Property Search", "Due Diligence & Audit", "Price Negotiation Support", "End-to-End Legal Assistance"],
  },
  {
    number: "04",
    title: "PROPERTY SELLING",
    description: "Professional property presentation, strategic pricing, and verified buyer connections for property owners.",
    image: "/images/commercial.jpg",
    details: ["Architectural Portfolio Feature", "Direct Investor Outreach", "Seamless Documentation", "Transaction Security"],
  },
  {
    number: "05",
    title: "REAL ESTATE INVESTMENT",
    description: "Helping clients explore high-appreciation property opportunities built around long-term value and capital growth.",
    image: "/images/about.jpg",
    details: ["ROI & Yield Projection", "Growth Corridor Analysis", "Portfolio Diversification", "Asset Lifecycle Management"],
  },
  {
    number: "06",
    title: "BUILDING & DEVELOPMENT",
    description: "Professional engineering and architectural execution for residential villas, modern homes, and commercial builds.",
    image: "/images/hero.jpg",
    details: ["Structural Precision Build", "Architectural Supervision", "Quality Material Standards", "On-Time Project Delivery"],
  },
];
