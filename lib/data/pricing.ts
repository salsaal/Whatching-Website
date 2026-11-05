export interface FeatureGroup {
  heading: string;
  items: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  currency: string;
  recommended?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  featureGroups?: FeatureGroup[];
  comingSoon?: string[];
}

// Plan data as provided by Whatching — kept as source of truth.
export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Ideal for small businesses getting started on WhatsApp.",
    monthlyPrice: 2499,
    currency: "₹",
    ctaLabel: "Get Started",
    ctaHref: "app",
    features: [
      "Bulk WhatsApp Messaging",
      "10,000 WhatsApp Contacts",
      "Automatic Lead Qualification",
      "0% Markup Fees",
      "Drag & Drop Chatbot Builder",
      "Automated Follow Up Bot",
      "WhatsApp AI Agent",
      "1M AI Message Tokens",
      "Owner + 2 Team Members",
      "Role-Based Team Permissions",
      "Sync WhatsApp Business App",
      "Single Phone Number Integration",
      "Messaging Template Management",
      "Analytics Dashboard",
      "Unlimited Free Incoming Conversation",
      "Multi Agent Shared Inbox"
    ],
    comingSoon: ["Track Meta Ad Campaign"]
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Advanced automation for growing businesses.",
    monthlyPrice: 3999,
    currency: "₹",
    recommended: true,
    ctaLabel: "Get Started",
    ctaHref: "app",
    features: [
      "Includes all Basic features",
      "25,000 WhatsApp Contacts",
      "Upto 2 Phone Numbers per Organization",
      "Owner + 5 Team Members",
      "3M AI Message Tokens"
    ],
    featureGroups: [
      {
        heading: "Instagram",
        items: [
          "Instagram Automations",
          "Unlimited Instagram Conversations",
          "Drag & Drop Chatbot Builder for Instagram",
          "Instagram AI Agent",
          "Automated Instagram Comments Reply"
        ]
      }
    ],
    comingSoon: ["WhatsApp Forms", "Track Meta Ad Campaign"]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For high-scale, multi-number operations.",
    monthlyPrice: null,
    currency: "₹",
    ctaLabel: "Contact Sales",
    ctaHref: "mailto:hello@whatching.com?subject=Enterprise%20plan",
    features: [
      "Includes all Pro features",
      "High Volume Subscribers",
      "Any Custom Business Logic",
      "Unlimited Team Members",
      "More WhatsApp Numbers",
      "Dedicated Account Manager",
      "Priority Support"
    ]
  }
];

export const metaConversationPricing = [
  { category: "Marketing", desc: "Promotional messages, offers, announcements", price: "₹0.8631" },
  { category: "Utility", desc: "Order updates, receipts, transactional alerts", price: "₹0.1150" },
  { category: "Authentication", desc: "OTPs and verification (India)", price: "₹0.1150" },
  { category: "Auth – International", desc: "OTPs for international numbers", price: "₹2.4971" },
  { category: "Service", desc: "Replies to customer messages (within 24 hours)", price: "Free" }
];

export const pricingFaq = [
  { question: "Is the WhatsApp API included in the subscription?", answer: "Yes — your Whatching subscription includes the platform and API connection. Meta charges a small per-conversation fee separately, based on message type." },
  { question: "Are Meta charges included in the plan price?", answer: "No. Meta's conversation charges are billed at official rates with 0% markup, separate from your Whatching subscription — see the breakdown below." },
  { question: "Can I cancel anytime?", answer: "Yes — there are no long-term contracts. You can cancel your subscription at any time." },
  { question: "How does message pricing work?", answer: "Incoming conversations (customer messages you first) are free to reply to for 24 hours. Outbound marketing, utility and authentication messages are charged at Meta's official rate." },
  { question: "Can I add team members?", answer: "Yes — Basic includes 2 team members and Pro includes 5, with role-based permissions on every plan." },
  { question: "Can I use Instagram automation?", answer: "Yes — Instagram automation is included on the Pro plan, with comment and DM automation, an Instagram AI agent, and unlimited conversations." },
  { question: "Can agencies manage multiple businesses?", answer: "Yes — Enterprise plans support multiple WhatsApp numbers and accounts under one workspace. Contact sales for agency pricing." }
];
