import brightnightEmail from "@/assets/brightnight-email.jpg";
import blackdaysSocial from "@/assets/blackdays-social.jpg";
import premiosCaboverde from "@/assets/premios-caboverde.jpg";
import airmetStand from "@/assets/airmet-stand-btl.jpg";
import heroImage from "@/assets/hero-lightbulb.jpg";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  gallery: string[];
  metrics: ProjectMetric[];
}

export const projects: Project[] = [
  // DESIGN CATEGORY
  {
    slug: "premios-caboverde",
    title: "Prémios Cabo Verde",
    category: "Design",
    heroImage: premiosCaboverde,
    client: "Consolidador.com",
    year: "2024",
    services: ["Award Design", "Visual Identity", "Print Materials"],
    challenge: "Consolidador.com needed a prestigious visual identity for their annual awards ceremony celebrating the top travel agency sellers for Cabo Verde destinations.",
    solution: "We designed an elegant award presentation system with a cohesive visual language that celebrates achievement while maintaining brand consistency across all touchpoints.",
    gallery: [premiosCaboverde, heroImage, premiosCaboverde],
    metrics: [
      { value: "3", label: "Award Categories" },
      { value: "100+", label: "Attendees" },
      { value: "Top 3", label: "Sellers Recognized" },
    ],
  },
  {
    slug: "airmet-stand-btl",
    title: "Stand BTL 2025",
    category: "Design",
    heroImage: airmetStand,
    client: "Airmet",
    year: "2025",
    services: ["Exhibition Design", "Graphic Production", "Brand Application"],
    challenge: "Airmet, Portugal's fastest-growing travel agency network, needed a standout exhibition presence for BTL 2025 that would reinforce their market leadership position.",
    solution: "We developed a comprehensive stand design with impactful graphics, branded pillars, and cohesive visual elements that communicate their #CrescemosJuntos message effectively.",
    gallery: [airmetStand, heroImage, airmetStand],
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
    category: "Email",
    heroImage: brightnightEmail,
    client: "Consolidador.com",
    year: "2024",
    services: ["Email Design", "Campaign Graphics", "Event Promotion"],
    challenge: "Consolidador.com needed eye-catching email marketing materials to promote their exclusive Bright Night events in Lisboa and Avintes during December.",
    solution: "We created a festive, elegant email banner design featuring golden accents and a Christmas tree motif with airplane elements, perfectly blending holiday spirit with travel industry identity.",
    gallery: [brightnightEmail, heroImage, brightnightEmail],
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
    category: "Social Media",
    heroImage: blackdaysSocial,
    client: "Airmet",
    year: "2024",
    services: ["Social Media Design", "Campaign Strategy", "Visual Content"],
    challenge: "Airmet needed a vibrant, attention-grabbing social media campaign for their Black Days promotion that would stand out in crowded feeds and inspire travel bookings.",
    solution: "We designed a dynamic visual campaign featuring travel landmarks, energetic composition, and bold typography that captures the excitement of travel deals and inspires wanderlust.",
    gallery: [blackdaysSocial, heroImage, blackdaysSocial],
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
    category: "Video",
    heroImage: heroImage,
    client: "Various Clients",
    year: "2024",
    services: ["Motion Design", "Title Animation", "Video Production"],
    challenge: "Creating dynamic, attention-grabbing title sequences that establish brand identity and set the tone for video content across multiple client projects.",
    solution: "We developed sleek motion graphics with fluid animations and impactful typography that enhance brand storytelling and create memorable first impressions.",
    gallery: [heroImage, heroImage, heroImage],
    metrics: [
      { value: "60fps", label: "Smooth Animation" },
      { value: "4K", label: "Resolution" },
      { value: "100%", label: "Brand Aligned" },
    ],
  },
  {
    slug: "brevemente-teaser",
    title: "Coming Soon Teaser",
    category: "Video",
    heroImage: heroImage,
    client: "Various Clients",
    year: "2024",
    services: ["Teaser Video", "Motion Graphics", "Anticipation Marketing"],
    challenge: "Building anticipation for upcoming product launches or events through captivating teaser videos that generate buzz without revealing too much.",
    solution: "We crafted mysterious, looping teaser animations with the 'Brevemente' (Coming Soon) message that create intrigue and keep audiences engaged until the full reveal.",
    gallery: [heroImage, heroImage, heroImage],
    metrics: [
      { value: "Loop", label: "Seamless Design" },
      { value: "High", label: "Anticipation" },
      { value: "Social", label: "Optimized" },
    ],
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
