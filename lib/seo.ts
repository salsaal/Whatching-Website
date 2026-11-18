import { FaqItem } from "@/lib/data/faq";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { pricingPlans } from "@/lib/data/pricing";

export const SITE_URL = "https://www.whatching.com";
export const SITE_NAME = "Whatching";

export interface OgImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export const DEFAULT_OG_IMAGE: OgImage = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Whatching logo"
};

// A share-preview image for a page, drawn from its title by /api/og.
const kickerFor = (path: string) => {
  if (path.startsWith("/blog/")) return "Guide";
  if (path.startsWith("/features/")) return "Feature";
  if (path.startsWith("/industries/")) return "For your industry";
  if (path.startsWith("/tools/")) return "Free tool";
  if (path === "/pricing") return "Pricing";
  if (path === "/glossary") return "Glossary";
  if (path === "/templates" || path.startsWith("/templates/"))
    return "Templates";
  return "";
};

export const pageOgImage = (title: string, path: string): OgImage => {
  const clean = title.replace(/\s*\|\s*Whatching$/, "");
  const params = new URLSearchParams({ title: clean });
  const kicker = kickerFor(path);
  if (kicker) params.set("kicker", kicker);
  return {
    url: `${SITE_URL}/api/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: clean
  };
};

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/whatching_official",
  "https://www.linkedin.com/company/whatching/",
  "https://youtube.com/@whatching_official"
];

export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export type JsonLd = Record<string, unknown>;

// Address as published in the Terms of Service.
export const organizationSchema: JsonLd = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  // "Whatching" reads like "watching", so the description says what it is.
  description:
    "Whatching is WhatsApp Business API and Instagram automation software for small businesses in India: broadcasts, chatbots, an AI agent, a shared team inbox and analytics.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  email: "hello@whatching.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: WHATSAPP_NUMBER.replace(/ /g, "-"),
    email: "hello@whatching.com",
    areaServed: "IN"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "6/8A Kustia Road",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700039",
    addressCountry: "IN"
  },
  sameAs: SOCIAL_PROFILES
};

export const websiteSchema: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": ORGANIZATION_ID }
};

export const breadcrumbSchema = (
  items: { name: string; path: string }[]
): JsonLd => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const faqSchema = (items: FaqItem[]): JsonLd => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
});

export const organizationRef = { "@id": ORGANIZATION_ID };

const SOFTWARE_ID = `${SITE_URL}/#software`;
export const softwareApplicationRef = { "@id": SOFTWARE_ID };

// The product, described once and referenced from every page that's about it.
// Offers come from lib/data/pricing.ts, so prices stay in one place. No ratings
// or reviews until there are real ones.
export const softwareApplicationSchema: JsonLd = {
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: SITE_NAME,
  description:
    "WhatsApp Business API and Instagram messaging software: broadcasts with approved templates, a drag-and-drop chatbot builder, an AI agent that answers from your own content, a shared team inbox and analytics.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Customer messaging",
  operatingSystem: "Web",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: organizationRef,
  offers: pricingPlans
    .filter((plan) => plan.monthlyPrice !== null)
    .map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: `${plan.tagline} Price per month, plus 18% GST.`,
      price: String(plan.monthlyPrice),
      priceCurrency: "INR",
      url: absoluteUrl("/pricing"),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthlyPrice),
        priceCurrency: "INR",
        billingDuration: "P1M",
        valueAddedTaxIncluded: false
      }
    }))
};
