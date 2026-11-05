import { PRODUCT_APP_URL } from "@/lib/constants";

export { PRODUCT_APP_URL };

export interface NavLink {
  label: string;
  href: string;
}

// Flat, no-dropdown nav. Every page on the site is reachable from here or
// the footer, so search engines can find it without the sitemap.
export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Instagram", href: "/features/instagram-automation" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const footerColumns = {
  product: [
    { label: "WhatsApp Marketing", href: "/features/whatsapp-marketing" },
    { label: "WhatsApp Broadcasts", href: "/features/whatsapp-broadcast" },
    { label: "Chatbot Builder", href: "/features/whatsapp-flows" },
    { label: "AI Chatbot", href: "/features/ai-chatbot" },
    { label: "Shared Inbox", href: "/features/shared-inbox" },
    { label: "Analytics", href: "/features/analytics" },
    { label: "Instagram Automation", href: "/features/instagram-automation" },
    { label: "Instagram Comment Auto Reply", href: "/features/instagram-comment-automation" },
    { label: "Instagram DM Automation", href: "/features/instagram-dm-automation" }
  ],
  industries: [
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Education", href: "/industries/education" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Travel & Hospitality", href: "/industries/travel" },
    { label: "Agencies", href: "/industries/agencies" }
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "/pricing" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" }
  ]
};
