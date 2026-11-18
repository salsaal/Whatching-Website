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
    tagline: "For small businesses getting started on WhatsApp.",
    monthlyPrice: 2499,
    currency: "₹",
    ctaLabel: "Get started",
    ctaHref: "app",
    features: [
      "Bulk WhatsApp messaging",
      "10,000 WhatsApp contacts",
      "Automatic lead qualification",
      "0% markup on Meta's charges",
      "Drag-and-drop chatbot builder",
      "Automatic follow-up bot",
      "WhatsApp AI agent",
      "AI usage included: 1M",
      "Owner + 2 team members",
      "Role-based team permissions",
      "Keep using the WhatsApp Business app on the same number",
      "1 WhatsApp number",
      "Message template management",
      "Analytics dashboard",
      "Unlimited incoming customer messages",
      "Shared team inbox",
      "Click-to-WhatsApp ad tracking"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "More automation and Instagram for growing businesses.",
    monthlyPrice: 3999,
    currency: "₹",
    recommended: true,
    ctaLabel: "Start free trial",
    ctaHref: "app",
    features: [
      "Everything in Basic",
      "25,000 WhatsApp contacts",
      "Up to 2 WhatsApp numbers",
      "Owner + 5 team members",
      "AI usage included: 3M"
    ],
    featureGroups: [
      {
        heading: "Instagram",
        items: [
          "Instagram automations",
          "Unlimited Instagram conversations",
          "Drag-and-drop chatbot builder for Instagram",
          "Instagram AI agent",
          "Automatic replies to Instagram comments"
        ]
      }
    ],
    comingSoon: ["WhatsApp Forms"]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For businesses with more numbers or very high volumes.",
    monthlyPrice: null,
    currency: "₹",
    ctaLabel: "Contact sales",
    ctaHref: "mailto:hello@whatching.com?subject=Enterprise%20plan",
    features: [
      "Everything in Pro",
      "Higher contact limits",
      "Custom set-up for your business",
      "Unlimited team members",
      "More WhatsApp numbers",
      "Unlimited AI usage",
      "Dedicated account manager",
      "Priority support"
    ]
  }
];

// The six highlights shown on each plan card (home and /pricing). They are
// picked from each plan's own feature list above, so wording stays in sync;
// the full comparison table on /pricing lists everything.
const highlightNames: Record<string, string[]> = {
  basic: [
    "Bulk WhatsApp messaging",
    "10,000 WhatsApp contacts",
    "Drag-and-drop chatbot builder",
    "WhatsApp AI agent",
    "Owner + 2 team members",
    "Shared team inbox"
  ],
  pro: [
    "Everything in Basic",
    "25,000 WhatsApp contacts",
    "Up to 2 WhatsApp numbers",
    "Owner + 5 team members",
    "Instagram automations",
    "Instagram AI agent"
  ],
  enterprise: [
    "Everything in Pro",
    "Higher contact limits",
    "Unlimited team members",
    "More WhatsApp numbers",
    "Dedicated account manager",
    "Priority support"
  ]
};

export const highlightsFor = (plan: PricingPlan) => {
  const wanted = highlightNames[plan.id] ?? [];
  const pool = [
    ...plan.features,
    ...(plan.featureGroups?.flatMap((g) => g.items) ?? [])
  ];
  return pool.filter((feature) => wanted.includes(feature));
};

// Meta's per-message list rates for India in INR, read from Meta's official
// pricing page (rate card effective 1 October 2026, checked 18 November 2026).
// Update the date and figures together when Meta changes them.
export const metaPricingSource = {
  asOf: "1 October 2026",
  url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
};

export const metaConversationPricing = [
  {
    category: "Marketing",
    desc: "Offers, announcements and reminders to buy",
    price: "₹0.8631"
  },
  {
    category: "Utility",
    desc: "Order updates, receipts and account alerts",
    price: "₹0.1150"
  },
  {
    category: "Authentication",
    desc: "Login and verification codes to Indian numbers",
    price: "₹0.1150"
  },
  {
    category: "Authentication, international",
    desc: "Login codes sent to Indian numbers by businesses based outside India",
    price: "₹2.4971"
  },
  {
    category: "Service",
    desc: "Replies within 24 hours of a customer's message. The first 1,000 a month are free for each number.",
    price: "₹0.1150"
  }
];

export const pricingFaq = [
  {
    question: "Is the connection to WhatsApp included in the plan?",
    answer:
      "Yes. Your Whatching plan includes connecting your number to Meta's official WhatsApp Business Platform. Meta charges a small fee per message separately, based on the message type."
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
      "Meta charges per message. Messages customers send you are free. Each WhatsApp number gets 1,000 free replies (service messages) a month, then ₹0.1150 each. Chats that start from a Click-to-WhatsApp ad are free for up to 7 days if you reply within 24 hours. Marketing, utility and login-code messages are charged at Meta's rate for India, with 0% markup from us."
  },
  {
    question: "Can I buy more AI usage?",
    answer:
      "Yes. Each plan includes AI usage (1M on Basic, 3M on Pro). If you need more, you can buy AI token top-ups from inside Whatching."
  },
  {
    question: "Can I add team members?",
    answer:
      "Yes. Basic includes the owner plus 2 team members and Pro includes the owner plus 5, with role-based permissions on every plan."
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
