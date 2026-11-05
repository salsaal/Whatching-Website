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
      "AI usage included: 1M",
      "Owner + 2 Team Members",
      "Role-Based Team Permissions",
      "Sync WhatsApp Business App",
      "Single Phone Number Integration",
      "Messaging Template Management",
      "Analytics Dashboard",
      "Unlimited incoming customer messages",
      "Multi Agent Shared Inbox",
      "Click-to-WhatsApp Ad Tracking"
    ]
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
      "AI usage included: 3M"
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
    comingSoon: ["WhatsApp Forms"]
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

// Meta's per-message list rates for India in INR, read from Meta's official
// pricing page. Update the date and figures together when Meta changes them.
export const metaPricingSource = {
  asOf: "1 October 2026",
  url: "https://developers.facebook.com/docs/whatsapp/pricing"
};

export const metaConversationPricing = [
  {
    category: "Marketing",
    desc: "Promotional messages, offers, announcements",
    price: "₹0.8631"
  },
  {
    category: "Utility",
    desc: "Order updates, receipts, transactional alerts",
    price: "₹0.1150"
  },
  {
    category: "Authentication",
    desc: "OTPs and verification (India)",
    price: "₹0.1150"
  },
  {
    category: "Auth – International",
    desc: "OTPs for international numbers",
    price: "₹2.4971"
  },
  {
    category: "Service",
    desc: "Replies to customers within 24 hours. The first 1,000 each month are free for every WhatsApp number.",
    price: "₹0.1150"
  }
];

export const pricingFaq = [
  {
    question: "Is the WhatsApp API included in the subscription?",
    answer:
      "Yes — your Whatching subscription includes the platform and API connection. Meta charges a small per-message fee separately, based on message type."
  },
  {
    question: "Are Meta charges included in the plan price?",
    answer:
      "No. Meta's message charges are billed at official rates with 0% markup, separate from your Whatching subscription — see the breakdown below."
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — there are no long-term contracts. If you cancel, your plan stays active until the end of the month you've paid for. That month isn't refunded."
  },
  {
    question: "How does message pricing work?",
    answer:
      "Meta charges per message. Messages customers send you are free. Each WhatsApp number gets 1,000 free replies (service messages) a month, then ₹0.1150 each. Marketing, utility and authentication templates are charged at Meta's rate for India, with 0% markup from us."
  },
  {
    question: "Can I add team members?",
    answer:
      "Yes — Basic includes 2 team members and Pro includes 5, with role-based permissions on every plan."
  },
  {
    question: "Can I use Instagram automation?",
    answer:
      "Yes — Instagram automation is included on the Pro plan, with comment and DM automation, an Instagram AI agent, and unlimited conversations."
  },
  {
    question: "Can agencies manage multiple businesses?",
    answer:
      "Yes — manage several client businesses from one login. Each business has its own plan. Contact sales if you need custom terms."
  }
];
