import projectDesign from "@/assets/project-design.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectEmail from "@/assets/project-email.jpg";
import projectVideo from "@/assets/project-video.jpg";
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
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Design",
    heroImage: projectDesign,
    client: "TechStart Inc.",
    year: "2024",
    services: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    challenge: "TechStart needed a complete brand overhaul to stand out in a crowded market. Their existing identity felt outdated and failed to communicate their innovative approach to technology solutions.",
    solution: "We crafted a bold, modern visual identity that captures TechStart's forward-thinking ethos. The new brand system includes a dynamic logo, vibrant color palette, and comprehensive guidelines ensuring consistency across all touchpoints.",
    gallery: [projectDesign, heroImage, projectDesign],
    metrics: [
      { value: "340%", label: "Brand Recognition Increase" },
      { value: "2.5M", label: "Social Impressions" },
      { value: "89%", label: "Customer Approval" },
    ],
  },
  {
    slug: "instagram-campaign",
    title: "Instagram Campaign",
    category: "Social Media",
    heroImage: projectSocial,
    client: "Urban Lifestyle Co.",
    year: "2024",
    services: ["Content Strategy", "Visual Design", "Community Management"],
    challenge: "Urban Lifestyle Co. struggled to connect with their Gen-Z audience on Instagram. Their content lacked cohesion and failed to drive meaningful engagement or conversions.",
    solution: "We developed a comprehensive Instagram strategy with a distinctive visual language, authentic storytelling, and interactive content formats that resonated with the target demographic.",
    gallery: [projectSocial, heroImage, projectSocial],
    metrics: [
      { value: "156K", label: "New Followers" },
      { value: "8.4%", label: "Engagement Rate" },
      { value: "42%", label: "Sales Increase" },
    ],
  },
  {
    slug: "newsletter-design",
    title: "Newsletter Design",
    category: "Email",
    heroImage: projectEmail,
    client: "Creative Weekly",
    year: "2023",
    services: ["Email Design", "Template System", "A/B Testing"],
    challenge: "Creative Weekly's newsletters had declining open rates and poor click-through performance. The design felt cluttered and didn't align with their premium positioning.",
    solution: "We redesigned their entire email system with clean, scannable layouts, compelling visual hierarchy, and mobile-first templates that increased reader engagement significantly.",
    gallery: [projectEmail, heroImage, projectEmail],
    metrics: [
      { value: "67%", label: "Open Rate Increase" },
      { value: "3.2x", label: "Click-Through Rate" },
      { value: "28%", label: "Subscription Growth" },
    ],
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    category: "Video",
    heroImage: projectVideo,
    client: "Pulse Media",
    year: "2024",
    services: ["Motion Design", "Animation", "Video Production"],
    challenge: "Pulse Media needed dynamic visual content for their product launch campaign. Static imagery wasn't conveying the energy and innovation of their new offerings.",
    solution: "We created a suite of motion graphics and animated assets that brought their brand to life, telling their story through fluid movement and captivating visual effects.",
    gallery: [projectVideo, heroImage, projectVideo],
    metrics: [
      { value: "4.2M", label: "Video Views" },
      { value: "94%", label: "Completion Rate" },
      { value: "12x", label: "Share Rate" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    heroImage: projectDesign,
    client: "FinFlow App",
    year: "2024",
    services: ["User Research", "Interface Design", "Prototyping"],
    challenge: "FinFlow's mobile app had high abandonment rates due to a confusing user interface. Users found it difficult to complete core tasks like transfers and budgeting.",
    solution: "Through extensive user research and iterative testing, we redesigned the entire app experience with intuitive navigation, clear visual hierarchy, and delightful micro-interactions.",
    gallery: [projectDesign, heroImage, projectDesign],
    metrics: [
      { value: "72%", label: "Task Completion" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "58%", label: "User Retention" },
    ],
  },
  {
    slug: "tiktok-strategy",
    title: "TikTok Strategy",
    category: "Social Media",
    heroImage: projectSocial,
    client: "Glow Beauty",
    year: "2024",
    services: ["Content Creation", "Trend Analysis", "Influencer Partnerships"],
    challenge: "Glow Beauty had no presence on TikTok and was missing out on reaching younger consumers who drive beauty trends and purchasing decisions.",
    solution: "We built their TikTok presence from scratch with trend-driven content, authentic creator partnerships, and a content calendar optimized for the platform's unique algorithm.",
    gallery: [projectSocial, heroImage, projectSocial],
    metrics: [
      { value: "890K", label: "Followers Gained" },
      { value: "52M", label: "Total Views" },
      { value: "215%", label: "Revenue Growth" },
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
