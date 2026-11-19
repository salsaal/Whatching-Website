import { PRODUCT_APP_URL } from "@/lib/constants";

export { PRODUCT_APP_URL };

export interface NavLink {
  label: string;
  href: string;
}

export interface MenuLink extends NavLink {
  desc: string;
}

// Top-level menu. Features and Industries open a panel; the rest are links.
// Every page is reachable from here or the footer, so search engines can
// find it without the sitemap.
export const navLinks: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const featureMenu: { heading: string; links: MenuLink[] }[] = [
  {
    heading: "WhatsApp",
    links: [
      {
        label: "Broadcasts",
        desc: "Offers and updates to many customers",
        href: "/features/whatsapp-broadcast"
      },
      {
        label: "Chatbot builder",
        desc: "Menus and questions, no coding",
        href: "/features/whatsapp-flows"
      },
      {
        label: "AI agent",
        desc: "Answers from your own content",
        href: "/features/ai-chatbot"
      },
      {
        label: "WhatsApp marketing",
        desc: "Campaigns, follow-ups and replies",
        href: "/features/whatsapp-marketing"
      }
    ]
  },
  {
    heading: "Instagram",
    links: [
      {
        label: "Instagram automation",
        desc: "Comments, DMs and story replies",
        href: "/features/instagram-automation"
      },
      {
        label: "Comment auto-reply",
        desc: "Reply and DM on a keyword",
        href: "/features/instagram-comment-automation"
      },
      {
        label: "DM automation",
        desc: "Answer every DM straight away",
        href: "/features/instagram-dm-automation"
      }
    ]
  },
  {
    heading: "Team and insights",
    links: [
      {
        label: "Shared inbox",
        desc: "One inbox for your whole team",
        href: "/features/shared-inbox"
      },
      {
        label: "Analytics",
        desc: "Results, ad chats and Meta charges",
        href: "/features/analytics"
      }
    ]
  }
];

export const industryMenu: MenuLink[] = [
  {
    label: "E-commerce",
    desc: "Answer shoppers and send updates",
    href: "/industries/ecommerce"
  },
  {
    label: "Education",
    desc: "Admissions enquiries and reminders",
    href: "/industries/education"
  },
  {
    label: "Real estate",
    desc: "Property enquiries and site visits",
    href: "/industries/real-estate"
  },
  {
    label: "Healthcare",
    desc: "Appointments and patient questions",
    href: "/industries/healthcare"
  },
  {
    label: "Travel",
    desc: "Package enquiries and trip updates",
    href: "/industries/travel"
  },
  {
    label: "Agencies",
    desc: "Many client businesses, one login",
    href: "/industries/agencies"
  }
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
    {
      label: "Comment Auto-Reply",
      href: "/features/instagram-comment-automation"
    },
    {
      label: "Instagram DM Automation",
      href: "/features/instagram-dm-automation"
    }
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
    { label: "Product Tour", href: "/demo" },
    { label: "Blog", href: "/blog" },
    { label: "Message Templates", href: "/templates" },
    {
      label: "WhatsApp Link Generator",
      href: "/tools/whatsapp-link-generator"
    },
    { label: "Glossary", href: "/glossary" },
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
