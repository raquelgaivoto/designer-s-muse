import brightnightEmail from "@/assets/brightnight-email.jpg";
import techCompany1 from "@/assets/tech-company-1.jpg";
import techCompany2 from "@/assets/tech-company-2.jpg";
import techCompany3 from "@/assets/tech-company-3.jpg";
import techCompany4 from "@/assets/tech-company-4.png";
import techCompany5 from "@/assets/tech-company-5.jpg";
import blackdaysSocial from "@/assets/blackdays-social.jpg";
import premiosCaboverde from "@/assets/premios-caboverde.jpg";
import agilcare1 from "@/assets/agilcare-1.png";
import agilcare2 from "@/assets/agilcare-2.png";
import agilcare3 from "@/assets/agilcare-3.png";
import agilcare4 from "@/assets/agilcare-4.png";
import agilcare5 from "@/assets/agilcare-5.png";
import agilcare6 from "@/assets/agilcare-6.png";
import agilcare7 from "@/assets/agilcare-7.png";
import scotturb1 from "@/assets/scotturb-1.jpg";
import scotturb2 from "@/assets/scotturb-2.jpg";
import scotturb3 from "@/assets/scotturb-3.jpg";
import scotturb4 from "@/assets/scotturb-4.jpg";
import airmetStand from "@/assets/airmet-stand-btl.jpg";

import shoppingCenter1 from "@/assets/shopping-center-1.jpg";
import shoppingCenter2 from "@/assets/shopping-center-2.jpg";
import shoppingCenter3 from "@/assets/shopping-center-3.jpg";
import shoppingCenter4 from "@/assets/shopping-center-4.png";
import shoppingCenter5 from "@/assets/shopping-center-5.png";

// Convention assets
import conventionHero from "@/assets/airmet-convention-hero.png";
import conventionG1 from "@/assets/convention-gallery-1.png";
import conventionG2 from "@/assets/convention-gallery-2.png";
import conventionG3 from "@/assets/convention-gallery-3.png";
import conventionG4 from "@/assets/convention-gallery-4.png";
import conventionG5 from "@/assets/convention-gallery-5.png";
import conventionG6 from "@/assets/convention-gallery-6.png";
import conventionG7 from "@/assets/convention-gallery-7.png";

// Porto Santo assets
import portoSantoHero from "@/assets/portosanto-hero.png";
import portoSantoG1 from "@/assets/portosanto-gallery-1.png";
import portoSantoG2 from "@/assets/portosanto-gallery-2.png";
import portoSantoG3 from "@/assets/portosanto-gallery-3.png";
import portoSantoG4 from "@/assets/portosanto-gallery-4.png";
import portoSantoG5 from "@/assets/portosanto-gallery-5.png";
import portoSantoG6 from "@/assets/portosanto-gallery-6.png";
import portoSantoG7 from "@/assets/portosanto-gallery-7.png";
import portoSantoG8 from "@/assets/portosanto-gallery-8.png";
import portoSantoG9 from "@/assets/portosanto-gallery-9.png";

// Stands assets
import standsHero from "@/assets/stands-hero.jpg";
import standsG1 from "@/assets/stands-gallery-1.png";
import standsG2 from "@/assets/stands-gallery-2.png";
import standsG3 from "@/assets/stands-gallery-3.png";
import standsG4 from "@/assets/stands-gallery-4.png";
import standsG5 from "@/assets/stands-gallery-5.png";
import standsG6 from "@/assets/stands-gallery-6.png";
import standsG7 from "@/assets/stands-gallery-7.png";
import standsG8 from "@/assets/stands-gallery-8.png";
import standsG9 from "@/assets/stands-gallery-9.png";
import standsG10 from "@/assets/stands-gallery-10.png";
import standsG11 from "@/assets/stands-gallery-11.png";

// Events assets
import eventsHero from "@/assets/events-hero.jpg";
import eventsG1 from "@/assets/events-gallery-1.png";
import eventsG2 from "@/assets/events-gallery-2.png";
import eventsG3 from "@/assets/events-gallery-3.png";
import eventsG4 from "@/assets/events-gallery-4.png";
import eventsG5 from "@/assets/events-gallery-5.png";
import eventsG6 from "@/assets/events-gallery-6.png";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  heroImage: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  gallery: string[];
  gallerySubtitle?: string;
  metrics: ProjectMetric[];
  video?: string;
}

export const projects: Project[] = [
  // DESIGN CATEGORY
  {
    slug: "airmet-convention",
    title: "Airmet Convention",
    subtitle: "MAIS TECNOLOGIA | MAIS VALOR | MAIS FUTURO",
    category: "Design",
    heroImage: conventionHero,
    client: "Airmet",
    year: "2025",
    services: ["Event Image", "Graphic Production", "Brand Application"],
    challenge: "Airmet needed a comprehensive visual identity for their annual convention in Spain, encompassing all event materials from stage design to individual delegate badges.",
    solution: "A visual bridge between structure and innovation. It reflects a journey where tradition meets transformation — delivering more technology, more value, more future.",
    gallery: [conventionG1, conventionG2, conventionG3, conventionG4, conventionG5, conventionG7],
    gallerySubtitle: "21º Airmet Convention",
    metrics: [
      { value: "200+", label: "Attendees" },
      { value: "15+", label: "Materials Created" },
      { value: "Qatar", label: "Destination" },
    ],
  },
  {
    slug: "porto-santo-campaigns",
    title: "Brand campaigns",
    subtitle: "multiple destiny's and seasons",
    category: "Design",
    heroImage: portoSantoHero,
    client: "Airmet",
    year: "2024 / 2025",
    services: ["Event Image", "Brand Application", "Campaign Design"],
    challenge: "Creating a series of visually distinct yet brand-consistent campaigns across multiple destinations, seasons, and promotional events.",
    solution: "We designed a flexible campaign system with tropical aesthetics, adapting the visual language for honeymoon packages, summer promotions, Black Days deals, and seasonal offers.",
    gallery: [portoSantoG1, portoSantoG2, portoSantoG3, portoSantoG4, portoSantoG5, portoSantoG6, portoSantoG7, portoSantoG8, portoSantoG9],
    gallerySubtitle: "Multiple Campaigns",
    metrics: [
      { value: "6+", label: "Campaigns" },
      { value: "Multi", label: "Seasonal" },
      { value: "High", label: "Conversion" },
    ],
    video: "",
  },
  {
    slug: "stands-btl",
    title: "Stands BTL",
    subtitle: "BTL & TRAVEL TECHNOLOGY",
    category: "Design",
    heroImage: standsHero,
    client: "Airmet & Consolidador",
    year: "2024 / 2025",
    services: ["Exhibition Design", "Graphic Production", "Brand Application"],
    challenge: "Designing standout exhibition presences for both Airmet and Consolidador.com at BTL and Travel Technology fairs, reinforcing their market leadership.",
    solution: "We developed comprehensive stand designs with impactful graphics, branded structures, and immersive visual elements that communicate each brand's identity and attract visitors.",
    gallery: [standsG1, standsG8, standsG9, standsG7, standsG2, standsG11, standsG6, standsG3, standsG4, standsG5, standsG10],
    gallerySubtitle: "Exhibition Stands",
    metrics: [
      { value: "2", label: "Brands" },
      { value: "BTL", label: "Fair" },
      { value: "#1", label: "Growth Network" },
    ],
  },
  {
    slug: "events",
    title: "Events",
    subtitle: "MULTIPLE EVENTS GRAPHICS",
    category: "Design",
    heroImage: eventsHero,
    client: "Airmet & Consolidador",
    year: "2024 / 2025",
    services: ["Event Image", "Brand Application", "Graphic Production"],
    challenge: "Creating unique visual identities for multiple corporate events — from summer parties to anniversary celebrations and Bright Night galas — that feel fresh yet brand-aligned.",
    solution: "We crafted distinct event brands with custom illustrations, themed typography, and vibrant color palettes, each tailored to the event's mood while maintaining corporate consistency.",
    gallery: [eventsG1, eventsG2, eventsG3, eventsG4, eventsG5, eventsG6],
    gallerySubtitle: "Multiple Events Images",
    metrics: [
      { value: "4+", label: "Events" },
      { value: "Lisboa & Porto", label: "Locations" },
      { value: "500+", label: "Guests" },
    ],
  },
  {
    slug: "scotturb-social-media",
    title: "Scotturb Social Media",
    subtitle: "SOCIAL MEDIA CAMPAIGNS",
    category: "Social Media",
    heroImage: scotturb1,
    client: "Scotturb",
    year: "2022",
    services: ["Social Media Design", "Campaign Strategy", "Visual Content"],
    challenge: "Scotturb needed engaging social media campaigns to promote their sightseeing and Royal Express travel services across multiple routes in Portugal.",
    solution: "We created vibrant, eye-catching social media visuals that highlight destinations, pricing, and brand identity, driving online engagement and ticket sales.",
    gallery: [scotturb1, scotturb2, scotturb3, scotturb4],
    gallerySubtitle: "Social Media Campaigns",
    metrics: [
      { value: "4+", label: "Campaigns" },
      { value: "Multi", label: "Routes" },
      { value: "High", label: "Engagement" },
    ],
  },
  {
    slug: "shopping-center-social-media",
    title: "Shopping Center Social Media",
    subtitle: "SOCIAL MEDIA CAMPAIGNS",
    category: "Social Media",
    heroImage: shoppingCenter1,
    client: "Almada Forum",
    year: "2022",
    services: ["Social Media Design", "Content Creation", "Visual Strategy"],
    challenge: "The shopping center needed vibrant, engaging social media content to connect with their audience and promote diverse offerings from food to entertainment.",
    solution: "We created a colorful, playful social media visual identity with bold graphics and relatable content that drives engagement and foot traffic to the shopping center.",
    gallery: [shoppingCenter1, shoppingCenter2, shoppingCenter3, shoppingCenter4, shoppingCenter5],
    gallerySubtitle: "Social Media Posts",
    metrics: [
      { value: "5+", label: "Campaigns" },
      { value: "High", label: "Engagement" },
      { value: "Multi", label: "Formats" },
    ],
  },

  // TECNOLOGIC COMPANY CATEGORY
  {
    slug: "tecnologic-company",
    title: "Tecnologic Company",
    subtitle: "PRODUCT VISUALS & CAMPAIGNS",
    category: "Design",
    heroImage: techCompany1,
    client: "Samsung",
    year: "2022",
    services: ["Product Photography", "Campaign Design", "Visual Content"],
    challenge: "A leading technology company needed compelling product visuals and campaign materials to showcase their diverse product lineup across smartphones and home appliances.",
    solution: "We produced clean, high-impact product imagery and promotional materials that highlight each product's unique features while maintaining brand consistency across the entire range.",
    gallery: [techCompany1, techCompany2, techCompany3, techCompany4, techCompany5],
    gallerySubtitle: "Product Campaigns",
    metrics: [
      { value: "5+", label: "Product Lines" },
      { value: "Multi", label: "Formats" },
      { value: "High", label: "Impact" },
    ],
  },

  // SOCIAL MEDIA CATEGORY
  {
    slug: "rebranding-agilcare",
    title: "Rebranding Agilcare",
    subtitle: "BRAND IDENTITY & REBRANDING",
    category: "Design",
    heroImage: agilcare2,
    client: "Agilcare",
    year: "2024",
    services: ["Brand Identity", "Rebranding", "Visual Communication"],
    challenge: "Agilcare needed a complete brand refresh to modernize their visual identity and better communicate their health care values across all touchpoints.",
    solution: "We developed a clean, modern rebrand with a refreshed logo, vibrant blue palette, and cohesive visual system applied across digital, print, and video communications.",
    gallery: [agilcare1, agilcare2, agilcare3, agilcare4, agilcare5, agilcare6, agilcare7],
    gallerySubtitle: "Rebranding Materials",
    metrics: [
      { value: "New", label: "Brand Identity" },
      { value: "Multi", label: "Touchpoints" },
      { value: "High", label: "Brand Recognition" },
    ],
    video: "/videos/agilcare-rebrand.mp4",
  },

];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAdjacentProjects = (slug: string): { prev: Project | null; next: Project | null } => {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};
