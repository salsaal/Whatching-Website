import type { BlogPost } from "@/lib/data/blog";

// Wati facts checked on Wati's own pages on 19 November 2026 (Indian rupee prices).
// Re-check every figure against the linked page before updating this post.
const WP = "https://www.wati.io/pricing/";
const WC = "https://www.wati.io/pricing-comparison/";
const WIG = "https://www.wati.io/instagram-automation/";
const WCO = "https://www.wati.io/coexistence/";
const WRATE =
  "https://cdn.clare.ai/pricing/Wati-Pricing-Rate-Card-Growth-Plan-INR-I.pdf";
const META_PRICING =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing";
const META_ACCOUNTS =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution";

const src = `([pricing page](${WP}))`;
const csrc = `([plan comparison](${WC}))`;

const post: BlogPost = {
  slug: "whatching-vs-wati",
  title: "Wati alternative in India: how Whatching and Wati compare",
  seoTitle: "Wati alternative in India: Whatching vs Wati (2026)",
  excerpt:
    "Whatching and Wati side by side for Indian businesses: rupee plan prices, Meta message rates, users, Instagram, AI, inbox routing and billing, with every Wati fact linked.",
  seoDescription:
    "Whatching vs Wati for Indian businesses: rupee plan prices, Meta message rates, users, Instagram, AI and billing compared, with each Wati fact linked.",
  category: "Comparisons",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "wati alternative india",
  summary:
    "Wati suits businesses that want more channels in one inbox, automatic routing, CRM and Shopify integrations, a mobile app, or a yearly plan for three users at ₹2,199 a month. Whatching suits businesses that pay monthly, want Meta's message charges at 0% markup, and want the owner plus five team members and Instagram automation for ₹3,999 a month. Wati prices were checked on 19 November 2026.",
  blocks: [
    {
      type: "p",
      text: `If you are looking for a Wati alternative in India, compare what you would pay each month and what each plan includes. This page compares Whatching and Wati on rupee plan prices, Meta's message charges, users, Instagram, AI, inbox features and billing terms. Every Wati figure links to the Wati page it came from, and we checked those pages on 19 November 2026. Prices change, so confirm the current figures on [Wati's pricing page](${WP}) before you decide.`
    },
    { type: "h2", text: "Whatching vs Wati: what is the short answer?" },
    {
      type: "p",
      text: "Wati brings WhatsApp, Instagram, Facebook, TikTok, webchat, RCS and calling into one inbox, routes chats automatically on its higher plans, and connects to tools like Shopify, HubSpot and Salesforce. Its Growth plan costs less than Whatching Basic if you pay annually. Whatching costs less on monthly billing at both levels and at the five-user level on any billing, passes Meta's message charges on at 0% markup and includes Instagram automation on Pro. Whatching bills monthly only and has no automatic routing, CRM or store integrations."
    },
    {
      type: "h2",
      text: "How do Whatching and Wati compare, feature by feature?"
    },
    {
      type: "table",
      caption:
        "Wati figures checked on Wati's own pages on 19 November 2026, in Indian rupees.",
      head: ["", "Whatching", "Wati"],
      rows: [
        [
          "Plan prices (monthly billing)",
          "Basic ₹2,499, Pro ₹3,999, Enterprise custom. Plus 18% GST.",
          `Growth ₹2,999, Pro ₹6,499, Business ₹18,499 a month. The page does not say whether tax is included. ${src}`
        ],
        [
          "Quarterly or yearly prices",
          "None. Monthly billing only.",
          `Per month, billed quarterly: Growth ₹2,699, Pro ₹5,799, Business ₹16,799. Per month, billed annually: Growth ₹2,199, Pro ₹4,899, Business ₹14,799. ${src}`
        ],
        [
          "Meta message charges",
          "Passed on at 0% markup.",
          `Charged per message from Wati's own rate card for each plan. Growth rate card for India from 1 October 2026: marketing ₹1.0357, utility and authentication ₹0.1495, service ₹0.1380. Pro and Business get an extra discount. ([Growth rate card](${WRATE}), ${csrc})`
        ],
        [
          "Free trial",
          "7-day trial of Pro, no card needed.",
          `7-day free trial with zero setup fees. ${src}`
        ],
        [
          "Users",
          "Owner + 2 on Basic, owner + 5 on Pro, unlimited on Enterprise.",
          `Growth: 3 users, no extra users. Pro: 5 users, extra users ₹1,299 a month each. Business: 5 users, extra users ₹2,199 a month each. ${src}`
        ],
        [
          "Contacts and broadcasts",
          "10,000 contacts on Basic, 25,000 on Pro.",
          `Contact limits are not listed on their pricing page. Broadcasts: up to 15K a month on Growth, unlimited on Pro and Business. ${src}`
        ],
        [
          "WhatsApp numbers",
          "1 on Basic, up to 2 on Pro, more on Enterprise.",
          `Extra numbers ₹2,499 a month each. Business lists multiple numbers. ${src}`
        ],
        [
          "Instagram automation",
          "On Pro: comment replies, comment-to-DM, story replies and an Instagram AI agent.",
          `Instagram is in the inbox on every plan, and Growth includes chatbots and social automations to start ${src}. Comment-to-DM, story replies and an AI agent for Instagram DMs are described on the [Instagram automation page](${WIG}).`
        ],
        [
          "AI",
          "AI agent that answers from your documents, website and FAQs and hands chats to a person. WhatsApp on both plans, Instagram on Pro. AI usage included: 1M on Basic, 3M on Pro, unlimited on Enterprise. Top-ups available.",
          `Growth: 1 Astra AI agent and 2,000 Wati AI credits a month. Pro: 2 agents and 5,000 credits. Business: unlimited agents and 20,000 credits. More credits from ₹1,600 a month. ${src}`
        ],
        [
          "Shared inbox",
          "Shared team inbox with manual assignment, tags and customer details. No automatic routing.",
          `Team inbox on every plan. Growth: manual assignment only. Pro: team and operator routing. Business: round-robin routing. ${csrc}`
        ],
        [
          "Chatbot builder",
          "Drag-and-drop builder for WhatsApp and Instagram with menus, questions, branches and hand-over to a person.",
          `Chatbots on every plan, with free automation triggers each month: 1,000 on Growth, 2,000 on Pro, 5,000 on Business. More triggers from ₹1,000 a month. ${src}`
        ],
        [
          "Billing terms",
          "Monthly only. No yearly plan.",
          `Monthly, quarterly or annual. No cancellation fees, and no refunds on existing subscriptions or credits. Bank transfer on annual plans only. ${src}`
        ]
      ]
    },
    { type: "h2", text: "What do Whatching and Wati cost for a team of five?" },
    {
      type: "p",
      text: `Wati Growth includes 3 users and cannot add more, so a team of five needs Wati Pro ${src}. Whatching Pro includes the owner and 5 team members. Before tax:`
    },
    {
      type: "table",
      caption:
        "Plan prices before tax. Meta message charges are extra on both.",
      head: [
        "Plan",
        "Users included",
        "Monthly billing",
        "Yearly billing, per month"
      ],
      rows: [
        ["Whatching Pro", "Owner + 5", "₹3,999", "No yearly plan"],
        ["Wati Pro", "5", "₹6,499", "₹4,899"]
      ]
    },
    {
      type: "p",
      text: "For three people, Whatching Basic (owner + 2) is ₹2,499 a month and Wati Growth (3 users) is ₹2,999 on monthly billing or ₹2,199 a month billed annually."
    },
    { type: "h2", text: "Does Wati add a markup to Meta's charges?" },
    {
      type: "p",
      text: `Meta charges for each delivered template message, and the rate depends on the message category and the customer's country. Meta's INR rate card for India, effective 1 October 2026, lists ₹0.8631 per marketing message and ₹0.115 per utility, authentication or service message. Each number gets 1,000 free service messages a month ([Meta's pricing page](${META_PRICING})).`
    },
    {
      type: "p",
      text: `Wati publishes a rate card for each plan. Its Growth rate card lists ₹1.0357 per marketing message to India and ₹0.1495 per utility message, and says Pro and Business get an additional discount on top ([Growth rate card](${WRATE})). Its plan comparison lists a 5% discount on the rate card for Business ${csrc}. Wati does not describe these rates as a markup or say whether they include tax, so ask Wati how they are made up.`
    },
    {
      type: "table",
      caption:
        "Cost of 10,000 marketing messages to Indian numbers at each listed rate, before any tax.",
      head: ["Rate used", "Per message", "10,000 messages"],
      rows: [
        [
          "Meta's India list rate (Whatching passes this on at 0% markup)",
          "₹0.8631",
          "₹8,631"
        ],
        ["Wati Growth rate card", "₹1.0357", "₹10,357"]
      ]
    },
    {
      type: "p",
      text: "You can see Meta's current rates on our [pricing page](/pricing#meta-charges)."
    },
    { type: "h2", text: "Where Wati may suit you better" },
    {
      type: "ul",
      items: [
        `**Paying yearly.** Wati Growth costs ₹2,199 a month billed annually ${src}, which is less than Whatching Basic at ₹2,499. Whatching has no yearly plan.`,
        `**More channels in one inbox.** Wati's inbox covers WhatsApp, calling, Facebook, Instagram, TikTok, webchat and RCS ${src}. Whatching covers WhatsApp and Instagram.`,
        `**Automatic routing.** Pro routes chats to teams and operators, and Business adds round-robin assignment ${csrc}. Whatching assigns chats manually.`,
        `**Integrations.** Growth includes 2 commerce or CRM integrations and Shopify abandoned-cart tools, Pro includes 5 integrations including HubSpot, and Business includes Salesforce. The Shopify integration is a USD 4.99 a month add-on ${src}. Whatching has no CRM, store integrations or abandoned-cart recovery.`,
        `**Phone access.** Wati's plan comparison lists a mobile app inbox ${csrc}. Whatching has no mobile app.`,
        `**Keeping the WhatsApp Business app.** Wati also supports using the WhatsApp Business app and Wati on the same number, and its coexistence page describes a pay-as-you-go option with no monthly fee ([coexistence page](${WCO})).`,
        `**Larger set-ups.** Business lists voice AI agents, multiple numbers and ad accounts, and higher sending speeds ${src}.`
      ]
    },
    { type: "h2", text: "Where Whatching may suit you better" },
    {
      type: "ul",
      items: [
        "**Monthly billing at the five-user level.** Whatching Pro is ₹3,999 a month for the owner and 5 team members, with no yearly commitment.",
        "**Meta's charges at 0% markup.** You pay Meta's rate for India on every message.",
        "**Instagram automation on Pro.** [Instagram automation](/features/instagram-automation) covers comment replies, comment-to-DM, story replies and an Instagram AI agent.",
        "**An AI agent trained on your business.** The [AI agent](/features/ai-chatbot) answers from your own documents, website and FAQs and hands the chat to a person. Basic includes 1M and Pro 3M of AI usage, with top-ups available.",
        "**Automatic follow-ups and lead qualification.** A follow-up bot and automatic lead qualification are built in.",
        "**Ad and cost analytics.** Analytics show which Click-to-WhatsApp ads bring chats, along with Meta charges.",
        "**Agencies.** Manage several client businesses from one login, each with its own plan.",
        "**Help getting started.** Fill in the form on our [demo page](/demo) for a free onboarding call."
      ]
    },
    { type: "h2", text: "How do you switch from Wati to Whatching?" },
    {
      type: "p",
      text: `Meta changed how WhatsApp accounts work in 2026. Under its new account model, your phone number sits in a WhatsApp account that your business owns, and you share that account with each provider you use ([Meta's guide](${META_ACCOUNTS})). These are the general steps:`
    },
    {
      type: "ol",
      items: [
        "**List what you use today.** Note your message templates, chatbot flows, automation rules, tags, contact attributes and integrations. This becomes your checklist.",
        "**Export what you want to keep.** Ask Wati which data you can export, such as contacts and chats, and save it before you cancel. Wati's pricing page says payments for existing subscriptions and credits are not refunded, so time your cancellation with your billing cycle.",
        `**Share your WhatsApp account with the new provider.** Meta says that to work with a new provider, you share your WhatsApp account with them. The number stays where it is and conversations carry on. Sharing is additive, so Wati can stay connected while you test ([Meta's guide](${META_ACCOUNTS})).`,
        "**Recreate your templates.** Templates belong to each provider's own messaging account and are not shared. Meta offers a Template Migration API for copying them, and says copied templates restart at baseline quality and messaging tier, with about 2 to 4 weeks to ramp up.",
        "**Rebuild your automations.** Set up chatbots, follow-ups and the AI agent with your documents, website and FAQs, then test with a few contacts.",
        "**Remove the old provider and cancel.** When everything works, remove Wati's access to your WhatsApp account and cancel its plan."
      ]
    },
    {
      type: "callout",
      title: "Check Meta's current rules first",
      text: `Meta says the new account model reached all businesses by mid-October 2026 and that its details may change. Read [Meta's guide to the new account model](${META_ACCOUNTS}) before you start, and ask your new provider to take you through each step.`
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Is Whatching cheaper than Wati in India?",
      answer:
        "On monthly billing, yes at both levels: Whatching Basic is ₹2,499 against Wati Growth at ₹2,999, and Whatching Pro is ₹3,999 against Wati Pro at ₹6,499. On annual billing, Wati Growth is ₹2,199 a month and Wati Pro ₹4,899 a month. Whatching passes Meta's message charges on at 0% markup, while Wati uses its own rate card."
    },
    {
      question: "Does Wati charge more than Meta's rate for WhatsApp messages?",
      answer:
        "Wati's Growth rate card lists ₹1.0357 per marketing message to India, and Meta's INR list rate from 1 October 2026 is ₹0.8631. Wati says Pro and Business get an extra discount on its rate card. It does not say whether its rates include tax, so ask Wati for the full figure."
    },
    {
      question: "How many users do Wati and Whatching include?",
      answer:
        "Wati Growth includes 3 users and cannot add more, while Wati Pro and Business include 5 users, with extra users at ₹1,299 or ₹2,199 a month each. Whatching Basic includes the owner and 2 team members, Pro the owner and 5, and Enterprise unlimited team members."
    },
    {
      question: "Does Whatching route chats automatically like Wati?",
      answer:
        "No. Whatching's shared inbox uses manual assignment, with tags and customer details. Wati lists team and operator routing on Pro and round-robin routing on Business."
    },
    {
      question: "Can I keep my WhatsApp number if I move from Wati?",
      answer:
        "Under Meta's new account model, your business owns the WhatsApp account that holds the number, and you share it with a new provider. Meta says the number does not move and conversations carry on. Templates do not carry over automatically, so they need to be recreated or copied."
    }
  ],
  sources: [
    { label: "Wati pricing page (checked 19 November 2026)", url: WP },
    {
      label: "Wati detailed plan comparison (checked 19 November 2026)",
      url: WC
    },
    {
      label:
        "Wati Growth plan rate card in INR, dated 1 October 2026 (checked 19 November 2026)",
      url: WRATE
    },
    {
      label: "Wati Instagram automation page (checked 19 November 2026)",
      url: WIG
    },
    { label: "Wati coexistence page (checked 19 November 2026)", url: WCO },
    {
      label: "Meta: WhatsApp Business Platform pricing and INR rate card",
      url: META_PRICING
    },
    {
      label: "Meta: updates to WhatsApp Business accounts (new account model)",
      url: META_ACCOUNTS
    }
  ],
  related: [
    "whatching-vs-interakt",
    "whatching-vs-aisensy",
    "how-to-choose-whatsapp-api-provider"
  ],
  relatedFeatures: [
    "instagram-automation",
    "ai-chatbot",
    "shared-inbox",
    "analytics"
  ]
};

export default post;
