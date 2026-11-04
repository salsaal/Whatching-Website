import { PRODUCT_APP_URL } from "@/lib/constants";

export { PRODUCT_APP_URL };

export interface NavLink {
  label: string;
  href: string;
}

// Flat, no-dropdown nav — every item except Pricing scrolls to a homepage
// section. Only Home, Pricing, Privacy Policy and Terms are launched pages
// right now, so nothing here points at an unlaunched route.
export const navLinks: NavLink[] = [
  { label: "Features", href: "/#platform" },
  { label: "WhatsApp", href: "/#broadcasts" },
  { label: "Instagram", href: "/#instagram" },
  { label: "Industries", href: "/#industries" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pricing", href: "/pricing" }
];

export const footerColumns = {
  product: [
    { label: "Broadcasts", href: "/#broadcasts" },
    { label: "AI Chatbots", href: "/#ai-chatbot" },
    { label: "WhatsApp Flows", href: "/#flows" },
    { label: "Shared Inbox", href: "/#inbox" },
    { label: "Analytics", href: "/#analytics" },
    { label: "Instagram Automation", href: "/#instagram" }
  ],
  solutions: [
    { label: "Industries we serve", href: "/#industries" },
    { label: "Why Whatching", href: "/#why-whatching" },
    { label: "Pricing", href: "/pricing" }
  ],
  company: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" }
  ]
};
