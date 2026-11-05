import { FaqItem } from "@/lib/data/faq";

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
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  email: "hello@whatching.com",
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

export const breadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
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
