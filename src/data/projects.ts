import brightnightEmail from "@/assets/brightnight-email.jpg";
import blackdaysSocial from "@/assets/blackdays-social.jpg";
import premiosCaboverde from "@/assets/premios-caboverde.jpg";
import scotturb1 from "@/assets/scotturb-1.jpg";
import scotturb2 from "@/assets/scotturb-2.jpg";
import scotturb3 from "@/assets/scotturb-3.jpg";
import scotturb4 from "@/assets/scotturb-4.jpg";
import airmetStand from "@/assets/airmet-stand-btl.jpg";
import heroImage from "@/assets/hero-lightbulb.jpg";

// Convention assets
import conventionHero from "@/assets/convention-hero.jpg";
import conventionG1 from "@/assets/convention-gallery-1.jpg";
import conventionG2 from "@/assets/convention-gallery-2.jpg";
import conventionG3 from "@/assets/convention-gallery-3.jpg";
import conventionG4 from "@/assets/convention-gallery-4.jpg";
import conventionG5 from "@/assets/convention-gallery-5.jpg";
import conventionG6 from "@/assets/convention-gallery-6.jpg";
import conventionG7 from "@/assets/convention-gallery-7.jpg";

// Porto Santo assets
import portoSantoHero from "@/assets/portosanto-hero.jpg";
import portoSantoG1 from "@/assets/portosanto-gallery-1.jpg";
import portoSantoG2 from "@/assets/portosanto-gallery-2.jpg";
import portoSantoG3 from "@/assets/portosanto-gallery-3.jpg";
import portoSantoG4 from "@/assets/portosanto-gallery-4.jpg";
import portoSantoG5 from "@/assets/portosanto-gallery-5.jpg";
import portoSantoG6 from "@/assets/portosanto-gallery-6.jpg";
import portoSantoG7 from "@/assets/portosanto-gallery-7.jpg";

// Stands assets
import standsHero from "@/assets/stands-hero.jpg";
import standsG1 from "@/assets/stands-gallery-1.jpg";
import standsG2 from "@/assets/stands-gallery-2.jpg";
import standsG3 from "@/assets/stands-gallery-3.jpg";
import standsG4 from "@/assets/stands-gallery-4.jpg";
import standsG5 from "@/assets/stands-gallery-5.jpg";
import standsG6 from "@/assets/stands-gallery-6.jpg";
import standsG7 from "@/assets/stands-gallery-7.jpg";

// Events assets
import eventsHero from "@/assets/events-hero.jpg";
import eventsG1 from "@/assets/events-gallery-1.jpg";
import eventsG2 from "@/assets/events-gallery-2.jpg";
import eventsG3 from "@/assets/events-gallery-3.jpg";
import eventsG4 from "@/assets/events-gallery-4.png";
import eventsG5 from "@/assets/events-gallery-5.png";
import eventsG6 from "@/assets/events-gallery-6.jpg";

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
    challenge: "Airmet needed a comprehensive visual identity for their 21st annual convention in Qatar, encompassing all event materials from stage design to individual delegate badges.",
    solution: "We created a cohesive futuristic visual system with holographic elements and neon accents that unified all convention touchpoints — banners, name cards, programs, and stage backdrops.",
    gallery: [conventionG1, conventionG2, conventionG3, conventionG4, conventionG5, conventionG6, conventionG7],
    gallerySubtitle: "21º Airmet Convention",
    metrics: [
      { value: "200+", label: "Attendees" },
      { value: "15+", label: "Materials Created" },
      { value: "Qatar", label: "Destination" },
    ],
  },
  {
    slug: "porto-santo-campaigns",
    title: "Porto Santo",
    subtitle: "BRAND CAMPAIGNS",
    category: "Design",
    heroImage: portoSantoHero,
    client: "Airmet",
    year: "2024 / 2025",
    services: ["Event Image", "Brand Application", "Campaign Design"],
    challenge: "Creating a series of visually distinct yet brand-consistent campaigns for Porto Santo destinations across multiple seasons and promotional events.",
    solution: "We designed a flexible campaign system with tropical aesthetics, adapting the visual language for honeymoon packages, summer promotions, Black Days deals, and seasonal offers.",
    gallery: [portoSantoG1, portoSantoG2, portoSantoG3, portoSantoG4, portoSantoG5, portoSantoG6, portoSantoG7],
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
    gallery: [standsG1, standsG2, standsG3, standsG4, standsG5, standsG6, standsG7],
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
    subtitle: "REVENGE OF AIRMET",
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
    slug: "airmet-stand-btl",
    title: "Stand BTL 2025",
    subtitle: "EXHIBITION DESIGN",
    category: "Design",
    heroImage: airmetStand,
    client: "Airmet",
    year: "2025",
    services: ["Exhibition Design", "Graphic Production", "Brand Application"],
    challenge: "Airmet, Portugal's fastest-growing travel agency network, needed a standout exhibition presence for BTL 2025 that would reinforce their market leadership position.",
    solution: "We developed a comprehensive stand design with impactful graphics, branded pillars, and cohesive visual elements that communicate their #CrescemosJuntos message effectively.",
    gallery: [airmetStand, heroImage, airmetStand],
    gallerySubtitle: "Stand Design & Production",
    metrics: [
      { value: "190cm", label: "Totem Height" },
      { value: "4", label: "Branded Pillars" },
      { value: "#1", label: "Growth Network" },
    ],
  },

  // EMAIL CATEGORY
  {
    slug: "bright-night-email",
    title: "Bright Night Campaign",
    subtitle: "EMAIL MARKETING",
    category: "Email",
    heroImage: brightnightEmail,
    client: "Consolidador.com",
    year: "2024",
    services: ["Email Design", "Campaign Graphics", "Event Promotion"],
    challenge: "Consolidador.com needed eye-catching email marketing materials to promote their exclusive Bright Night events in Lisboa and Avintes during December.",
    solution: "We created a festive, elegant email banner design featuring golden accents and a Christmas tree motif with airplane elements, perfectly blending holiday spirit with travel industry identity.",
    gallery: [brightnightEmail, heroImage, brightnightEmail],
    gallerySubtitle: "Email Campaign Materials",
    metrics: [
      { value: "2", label: "Event Locations" },
      { value: "Dec 12 & 17", label: "Event Dates" },
      { value: "High", label: "Engagement Rate" },
    ],
  },

  // SOCIAL MEDIA CATEGORY
  {
    slug: "black-days-campaign",
    title: "Black Days Campaign",
    subtitle: "SOCIAL MEDIA",
    category: "Social Media",
    heroImage: blackdaysSocial,
    client: "Airmet",
    year: "2024",
    services: ["Social Media Design", "Campaign Strategy", "Visual Content"],
    challenge: "Airmet needed a vibrant, attention-grabbing social media campaign for their Black Days promotion that would stand out in crowded feeds and inspire travel bookings.",
    solution: "We designed a dynamic visual campaign featuring travel landmarks, energetic composition, and bold typography that captures the excitement of travel deals and inspires wanderlust.",
    gallery: [blackdaysSocial, heroImage, blackdaysSocial],
    gallerySubtitle: "Social Media Assets",
    metrics: [
      { value: "50K+", label: "Impressions" },
      { value: "8.2%", label: "Engagement Rate" },
      { value: "35%", label: "Booking Increase" },
    ],
  },

  // VIDEO CATEGORY
  {
    slug: "titulo-motion",
    title: "Title Motion Graphics",
    subtitle: "MOTION DESIGN",
    category: "Video",
    heroImage: heroImage,
    client: "Various Clients",
    year: "2024",
    services: ["Motion Design", "Title Animation", "Video Production"],
    challenge: "Creating dynamic, attention-grabbing title sequences that establish brand identity and set the tone for video content across multiple client projects.",
    solution: "We developed sleek motion graphics with fluid animations and impactful typography that enhance brand storytelling and create memorable first impressions.",
    gallery: [heroImage, heroImage, heroImage],
    gallerySubtitle: "Motion Graphics Frames",
    metrics: [
      { value: "60fps", label: "Smooth Animation" },
      { value: "4K", label: "Resolution" },
      { value: "100%", label: "Brand Aligned" },
    ],
    video: "/videos/titulo-motion.mp4",
  },
  {
    slug: "brevemente-teaser",
    title: "Coming Soon Teaser",
    subtitle: "TEASER VIDEO",
    category: "Video",
    heroImage: heroImage,
    client: "Various Clients",
    year: "2024",
    services: ["Teaser Video", "Motion Graphics", "Anticipation Marketing"],
    challenge: "Building anticipation for upcoming product launches or events through captivating teaser videos that generate buzz without revealing too much.",
    solution: "We crafted mysterious, looping teaser animations with the 'Brevemente' (Coming Soon) message that create intrigue and keep audiences engaged until the full reveal.",
    gallery: [heroImage, heroImage, heroImage],
    gallerySubtitle: "Teaser Stills",
    metrics: [
      { value: "Loop", label: "Seamless Design" },
      { value: "High", label: "Anticipation" },
      { value: "Social", label: "Optimized" },
    ],
    video: "/videos/brevemente-motion.mp4",
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
