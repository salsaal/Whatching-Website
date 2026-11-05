export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is Whatching?",
        answer:
          "Whatching is a WhatsApp and Instagram customer engagement platform — campaigns, AI automation, a shared team inbox, lead management and analytics, all in one workspace."
      },
      {
        question: "How quickly can I start?",
        answer:
          "Most businesses are up and sending within minutes of connecting their WhatsApp Business number."
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. Campaigns, flows and automations are all built visually — no code required."
      }
    ]
  },
  {
    category: "WhatsApp",
    items: [
      {
        question: "Is Whatching an official WhatsApp solution?",
        answer:
          "Yes — Whatching is built on the official WhatsApp Business API and designed around Meta's messaging policies, not unofficial sending infrastructure."
      },
      {
        question: "How does WhatsApp API pricing work?",
        answer:
          "Your Whatching subscription covers the platform. Meta charges a small per-message fee based on message type, billed at official rates with 0% markup."
      },
      {
        question: "Are templates required?",
        answer:
          "Outbound marketing and utility messages require Meta-approved templates. Whatching's template manager handles creation, submission and status tracking."
      }
    ]
  },
  {
    category: "Instagram",
    items: [
      {
        question: "Can Whatching automate Instagram DMs?",
        answer:
          "Yes — you can build automated DM welcome, qualification and lead-capture flows using the same visual builder as WhatsApp Flows."
      },
      {
        question: "Can Whatching automatically respond to comments?",
        answer:
          "Yes — comment automation detects keyword comments on your posts and triggers an automatic DM in response."
      },
      {
        question: "Can story replies start an automation?",
        answer:
          "Yes — a reply to your Instagram story can start an automated DM, just like a comment or a new message."
      }
    ]
  },
  {
    category: "AI",
    items: [
      {
        question: "How does AI automation work?",
        answer:
          "Whatching's AI understands customer intent, answers naturally, collects information, and qualifies leads before assigning conversations to your team."
      },
      {
        question: "Can humans take over conversations?",
        answer:
          "Yes — any AI-handled conversation can be taken over by a human agent at any point, with full context preserved."
      }
    ]
  },
  {
    category: "Teams",
    items: [
      {
        question: "Can multiple agents use one inbox?",
        answer:
          "Yes — the shared inbox lets your whole team work from the same WhatsApp and Instagram accounts without collisions."
      },
      {
        question: "Can conversations be assigned?",
        answer:
          "Yes — any conversation can be assigned to a teammate from the shared inbox."
      }
    ]
  },
  {
    category: "Billing",
    items: [
      {
        question: "Can I cancel?",
        answer:
          "Yes — there are no long-term contracts. If you cancel, your plan stays active until the end of the month you've paid for. That month isn't refunded."
      },
      {
        question: "What payment methods are supported?",
        answer:
          "Standard card and bank payment methods are supported at checkout."
      }
    ]
  }
];
