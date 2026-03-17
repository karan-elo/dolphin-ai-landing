// ─── Deeplink ────────────────────────────────────────────────────────────────
// TODO: Replace "#" with the actual app deeplink once provided
export const DEEPLINK_URL = "#";

// ─── Video Sources ────────────────────────────────────────────────────────────
// All Video_box containers are served from S3 CDN.
// Replace the empty strings with the actual CDN URLs when provided.
export const VIDEOS = {
  // Section 1 — Full-width hero background video
  hero: "",

  // Section 2 — Carousel 1 (6 cards, 479×322)
  carousel1: ["", "", "", "", "", ""],

  // Section 3 — Three Steps (only card 3 has a video, 384×274)
  threeSteps: {
    card3: "",
  },

  // Section 4 — AI Models Carousel (4 video cards, 280×280)
  aiModels: ["", "", "", ""],

  // Section 6 — Video Grid 4×2 (8 portrait videos, 342×614)
  videoGrid: ["", "", "", "", "", "", "", ""],

  // Section 7 — Carousel 2 (6 cards, 479×322) — same structure as carousel1
  carousel2: ["", "", "", "", "", ""],

  // Section 8 — Made Possible With Dolphin AI (4 static columns)
  // Col 1 & 3: 3 videos (614px height each)
  // Col 2 & 4: 4 videos (458px height each)
  madePossible: {
    col1: ["", "", ""],
    col2: ["", "", "", ""],
    col3: ["", "", ""],
    col4: ["", "", "", ""],
  },
} as const;

// ─── Carousel 1 Card Data ─────────────────────────────────────────────────────
export type BadgeColor = "green" | "purple";

export interface CarouselItem {
  videoSrc: string;
  title: string;
  badge: string;
  badgeColor: BadgeColor;
  subtitle: string;
}

export const CAROUSEL_1_ITEMS: CarouselItem[] = [
  {
    videoSrc: VIDEOS.carousel1[0],
    title: "Multi-Shot Video Playground",
    badge: "New",
    badgeColor: "green",
    subtitle: "Generate multiple shots in 1 go with full context window",
  },
  {
    videoSrc: VIDEOS.carousel1[1],
    title: "Upto 90 sec videos",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Generate longer videos without manual stitching or editing",
  },
  {
    videoSrc: VIDEOS.carousel1[2],
    title: "Multi-lingual Lip-Sync videos",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Our latest features can handle any language",
  },
  {
    videoSrc: VIDEOS.carousel1[3],
    title: "Recast Video",
    badge: "New",
    badgeColor: "green",
    subtitle: "Upload a Video + new face → Seamless character swap",
  },
  {
    videoSrc: VIDEOS.carousel1[4],
    title: "Motion Control",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Swap Characters in a video with full body & motion control",
  },
  {
    videoSrc: VIDEOS.carousel1[5],
    title: "Multi-Shot Video Playground",
    badge: "New",
    badgeColor: "green",
    subtitle: "Generate multiple shots in 1 go with full context window",
  },
];

// ─── Carousel 2 Card Data ─────────────────────────────────────────────────────
export const CAROUSEL_2_ITEMS: CarouselItem[] = [
  {
    videoSrc: VIDEOS.carousel2[0],
    title: "Recast Video",
    badge: "New",
    badgeColor: "green",
    subtitle: "Upload a Video + new face → Seamless character swap",
  },
  {
    videoSrc: VIDEOS.carousel2[1],
    title: "Motion Control",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Swap Characters in a video with full body & motion control",
  },
  {
    videoSrc: VIDEOS.carousel2[2],
    title: "Multi-lingual Lip-Sync videos",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Our latest features can handle any language",
  },
  {
    videoSrc: VIDEOS.carousel2[3],
    title: "Multi-Shot Video Playground",
    badge: "New",
    badgeColor: "green",
    subtitle: "Generate multiple shots in 1 go with full context window",
  },
  {
    videoSrc: VIDEOS.carousel2[4],
    title: "Upto 90 sec videos",
    badge: "Try now →",
    badgeColor: "purple",
    subtitle: "Generate longer videos without manual stitching or editing",
  },
  {
    videoSrc: VIDEOS.carousel2[5],
    title: "Multi-Shot Video Playground",
    badge: "New",
    badgeColor: "green",
    subtitle: "Generate multiple shots in 1 go with full context window",
  },
];

// ─── AI Models Carousel Data ──────────────────────────────────────────────────
export interface AIModelItem {
  src: string;
  type: "image" | "video";
  badge: string;
  title: string;
  subtitle: string;
}

// Figma asset URLs for the AI models carousel static images (first & last cards)
const IMG_AI_MODEL_1 =
  "https://www.figma.com/api/mcp/asset/cd7fc46d-7f02-46ed-9592-31b130889339";
const IMG_AI_MODEL_6 =
  "https://www.figma.com/api/mcp/asset/cd7fc46d-7f02-46ed-9592-31b130889339";

export const AI_MODEL_ITEMS: AIModelItem[] = [
  {
    src: IMG_AI_MODEL_1,
    type: "image",
    badge: "New",
    title: "Nano Banana 2",
    subtitle: "Best image model out there",
  },
  {
    src: VIDEOS.aiModels[0],
    type: "video",
    badge: "",
    title: "Google Veo 3",
    subtitle: "Videos with Audio in one go",
  },
  {
    src: VIDEOS.aiModels[1],
    type: "video",
    badge: "",
    title: "Kling 2.6",
    subtitle: "Easy cinematic video",
  },
  {
    src: VIDEOS.aiModels[2],
    type: "video",
    badge: "",
    title: "Sora 2",
    subtitle: "Viral Shorts instantly",
  },
  {
    src: VIDEOS.aiModels[3],
    type: "video",
    badge: "",
    title: "Multi Shot",
    subtitle: "Create your Cinematic Story",
  },
  {
    src: IMG_AI_MODEL_6,
    type: "image",
    badge: "",
    title: "Nano Banana 2",
    subtitle: "Best image model out there",
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I start creating a video?",
    answer:
      "Pick a template, choose a character and script, then generate your video in minutes.",
  },
  {
    id: "faq-2",
    question: "What video formats are supported?",
    answer:
      "We support common formats like MP4, plus optimized exports for social platforms.",
  },
  {
    id: "faq-3",
    question: "Can I use my own music and assets?",
    answer:
      "Yes—upload your own audio and assets, or browse our library to find the right fit.",
  },
  {
    id: "faq-4",
    question: "Is there a limit to the number of videos I can generate?",
    answer:
      "Limits depend on your plan—contact support if you need higher volume or custom workflows.",
  },
];

// ─── More AI Features Tags ────────────────────────────────────────────────────
export const FEATURE_TAGS: string[] = [
  "Dolphin Studio",
  "Nano Banana 2",
  "Kling 2.0",
  "Seedance Pro",
  "Recast",
  "Motion Control",
  "GPT Images",
  "Google Veo3",
  "Multi Shot",
  "Instagram Reels",
  "Wan 2.2 Images",
  "Seedream 4.0",
  "Viral",
  "Kling 3.0",
  "Nano Banana Pro",
  "Flux",
  "Sora",
];

// ─── Three Steps Section — Static Image Assets ────────────────────────────────
export const THREE_STEPS_IMAGES = {
  card1: [
    "https://www.figma.com/api/mcp/asset/26b9a3f7-6a13-466a-aba1-561ab1ac560d",
    "https://www.figma.com/api/mcp/asset/680ae7cc-a9a0-4c59-bacb-e6315c19b676",
    "https://www.figma.com/api/mcp/asset/01206c5f-a1c4-4600-ae56-fff530586c1a",
    "https://www.figma.com/api/mcp/asset/43094fca-f84a-414b-ba13-dd5c4311f681",
    "https://www.figma.com/api/mcp/asset/49f626e9-70ea-4f91-97b1-f39464bd6f5a",
    "https://www.figma.com/api/mcp/asset/fdfa4cb6-eeaf-41ef-8790-544c43d32740",
  ],
  card2: "https://www.figma.com/api/mcp/asset/763542d5-4646-4a99-a2a1-e911d5ee7503",
};

// ─── Upload Ready Hero — Floating Social Icons ────────────────────────────────
export const UPLOAD_HERO_ASSETS = {
  xIcon: "https://www.figma.com/api/mcp/asset/84791562-d02f-45b8-8974-51ca0cc204bc",
  ytIcon: "https://www.figma.com/api/mcp/asset/ea77f0ba-175c-4dd3-9e6f-5406aa671091",
  liIcon: "https://www.figma.com/api/mcp/asset/77f101c1-3ed7-4937-a4ae-649c1a7dc312",
  igIcon: "https://www.figma.com/api/mcp/asset/c81fe68f-5db0-41f9-8f74-fdad3d354092",
  instantlyBg: "https://www.figma.com/api/mcp/asset/2a05fcbc-4249-4b88-8ea2-a4412f7a7913",
};
