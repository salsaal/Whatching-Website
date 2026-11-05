import { absoluteUrl, JsonLd } from "@/lib/seo";

// Official product demo: https://youtu.be/KabFGHZJvxU
// Title, length and upload date as published on YouTube.
export const DEMO_VIDEO = {
  id: "KabFGHZJvxU",
  title:
    "WhatsApp & Instagram AI Automation for Business | Whatching Platform Overview",
  description:
    "A short tour of Whatching: WhatsApp broadcasts, automated conversation flows and AI customer support, on WhatsApp and Instagram, from one place.",
  uploadDate: "2026-10-09T06:10:57-07:00",
  duration: "PT2M57S",
  lengthLabel: "3 minutes",
  lengthAdjective: "3-minute"
};

export const youtubeEmbedUrl = (id: string, { autoplay = false } = {}) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1${autoplay ? "&autoplay=1" : ""}`;

export const demoVideoThumbnail = `https://i.ytimg.com/vi/${DEMO_VIDEO.id}/maxresdefault.jpg`;

export const demoVideoSchema = (pagePath: string): JsonLd => ({
  "@type": "VideoObject",
  name: DEMO_VIDEO.title,
  description: DEMO_VIDEO.description,
  thumbnailUrl: [
    demoVideoThumbnail,
    `https://i.ytimg.com/vi/${DEMO_VIDEO.id}/hqdefault.jpg`
  ],
  uploadDate: DEMO_VIDEO.uploadDate,
  duration: DEMO_VIDEO.duration,
  embedUrl: `https://www.youtube.com/embed/${DEMO_VIDEO.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${DEMO_VIDEO.id}`,
  url: absoluteUrl(pagePath)
});
