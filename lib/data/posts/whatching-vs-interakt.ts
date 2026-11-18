import type { BlogPost } from "@/lib/data/blog";

// Interakt facts checked on Interakt's own pages on 19 November 2026.
// Re-check every figure against the linked page before updating this post.
const IP = "https://www.interakt.shop/pricing/";
const IG = "https://www.interakt.shop/instagram-automation/";
const META_PRICING =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing";
const META_ACCOUNTS =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution";

const src = `([pricing page](${IP}))`;

const post: BlogPost = {
  slug: "whatching-vs-interakt",
  title: "Interakt alternative: how Whatching and Interakt compare",
  seoTitle: "Interakt alternative: Whatching vs Interakt (2026)",
  excerpt:
    "A side-by-side look at Whatching and Interakt: plan prices, Meta message rates, team and contact limits, Instagram, AI and billing, with every Interakt fact linked.",
  seoDescription:
    "Whatching vs Interakt: plan prices, Meta message rates, team limits, Instagram, AI and billing compared, with each Interakt fact linked to its own page.",
  category: "Comparisons",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "interakt alternative",
  summary:
    "Interakt suits businesses that want unlimited agents and contacts, Shopify and payment tools, a sales CRM and discounts for paying quarterly or yearly. Whatching suits businesses that want Meta's message charges at 0% markup, AI usage included in the plan, and WhatsApp and Instagram automation together on one ₹3,999 Pro plan. Interakt prices below were checked on 19 November 2026.",
  blocks: [
    {
      type: "p",
      text: `If you are looking for an Interakt alternative, start with how your business sends and answers messages. This page compares Whatching and Interakt on plan prices, what each plan includes, Meta's message charges, team limits, Instagram, AI and billing terms. Every Interakt figure links to the Interakt page it came from, and we checked those pages on 19 November 2026. Prices change, so confirm the current figures on [Interakt's pricing page](${IP}) before you decide.`
    },
    { type: "h2", text: "Whatching vs Interakt: what is the short answer?" },
    {
      type: "p",
      text: "Interakt includes unlimited agents and unlimited contacts on every plan, has Shopify, catalogue and payment tools, sells a separate sales CRM, and gives discounts for quarterly or yearly payment. Whatching passes Meta's message charges on at 0% markup, includes AI usage in each plan, and puts WhatsApp and Instagram automation together on its Pro plan. Whatching bills monthly only and sets limits on contacts and team members, so a large team or a very large contact list may fit Interakt's plans better."
    },
    {
      type: "h2",
      text: "How do Whatching and Interakt compare, feature by feature?"
    },
    {
      type: "table",
      caption:
        "Interakt figures checked on Interakt's own pages on 19 November 2026. Monthly prices unless stated.",
      head: ["", "Whatching", "Interakt"],
      rows: [
        [
          "Plan prices (monthly billing)",
          "Basic ₹2,499, Pro ₹3,999, Enterprise custom. Plus 18% GST.",
          `Starter ₹999 (Instagram only on monthly billing), Growth ₹2,799, Advanced ₹3,799, Enterprise on request. Shown as '+taxes'. ${src}`
        ],
        [
          "Quarterly or yearly prices",
          "None. Monthly billing only.",
          `Quarterly: Starter ₹3,499, Growth ₹7,699, Advanced ₹10,499. Yearly: Starter ₹11,999, Growth ₹26,399, Advanced ₹35,999. Plus taxes. ${src}`
        ],
        [
          "Meta message charges",
          "Passed on at 0% markup.",
          `Interakt lists its own rates for Indian numbers on each plan. Growth: marketing ₹0.958, utility ₹0.150, authentication and service ₹0.128. Enterprise is listed with 'No Markup Charges'. ${src}`
        ],
        [
          "Free trial",
          "7-day trial of Pro, no card needed.",
          `'Start Free Trial' on each plan. The pricing page gives no length; the [Instagram automation page](${IG}) lists 14 days. ${src}`
        ],
        [
          "Contacts",
          "10,000 on Basic, 25,000 on Pro.",
          `Unlimited contacts on every plan. ${src}`
        ],
        [
          "Team members",
          "Owner + 2 on Basic, owner + 5 on Pro, unlimited on Enterprise.",
          `Unlimited agents on every plan: owner roles on Starter, all roles from Growth up. Sales CRM roles are not included. ${src}`
        ],
        [
          "WhatsApp numbers",
          "1 on Basic, up to 2 on Pro, more on Enterprise.",
          "Not listed on their pricing page."
        ],
        [
          "Instagram automation",
          "On Pro: comment replies, comment-to-DM, story replies and an Instagram AI agent.",
          `Growth and above cover WhatsApp and Instagram: unlimited DMs and comments, 'Price Please' and giveaway automations, custom auto-replies. ${src}`
        ],
        [
          "AI",
          "AI agent that answers from your documents, website and FAQs and hands chats to a person. WhatsApp on both plans, Instagram on Pro. AI usage included: 1M on Basic, 3M on Pro, unlimited on Enterprise. Top-ups available.",
          `WhatsApp AI Agents add-on for Growth and Advanced at ₹3,000 a month plus GST, with 100 AI messages, then ₹0.50 per message. AnswerBot: 4 runs on Growth, 6 on Advanced, up to 5 website URLs. ${src}`
        ],
        [
          "Shared inbox",
          "Shared team inbox with manual assignment, tags and customer details. No automatic routing.",
          `Shared team inbox on every plan, covering WhatsApp and Instagram from Growth. Automatic chat assignment on Advanced. ${src}`
        ],
        [
          "Chatbot builder",
          "Drag-and-drop builder for WhatsApp and Instagram with menus, questions, branches and hand-over to a person.",
          `Linear chatbot on Growth. Branching, logical flows and API calls on Advanced. ${src}`
        ],
        [
          "Billing terms",
          "Monthly only. No yearly plan.",
          `Monthly, quarterly (save 8%) or yearly (save 20%). ${src}`
        ]
      ]
    },
    { type: "h2", text: "Does Interakt add a markup to Meta's charges?" },
    {
      type: "p",
      text: `Meta charges for each delivered template message, and the rate depends on the message category and the customer's country. Meta's INR rate card for India, effective 1 October 2026, lists ₹0.8631 per marketing message and ₹0.115 per utility, authentication or service message. Each number gets 1,000 free service messages a month ([Meta's pricing page](${META_PRICING})).`
    },
    {
      type: "p",
      text: `Interakt's pricing page lists its own per-message rates for Indian numbers, and they fall slightly on higher plans. Marketing is ₹0.970 on Starter, ₹0.958 on Growth and ₹0.949 on Advanced. Utility is ₹0.160, ₹0.150 and ₹0.140. The Enterprise plan is listed with no markup charges ([Interakt pricing](${IP})). The page does not say whether these rates include GST, so ask Interakt before you compare them line by line.`
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
        ["Interakt Starter", "₹0.970", "₹9,700"],
        ["Interakt Growth", "₹0.958", "₹9,580"],
        ["Interakt Advanced", "₹0.949", "₹9,490"]
      ]
    },
    {
      type: "p",
      text: "If you send a few hundred messages a month, the difference is small. At tens of thousands of marketing messages, it can matter more than the plan price. You can see Meta's current rates on our [pricing page](/pricing#meta-charges)."
    },
    { type: "h2", text: "Where Interakt may suit you better" },
    {
      type: "ul",
      items: [
        `**Large teams.** Every Interakt plan includes unlimited agents ${src}. Whatching Pro includes the owner and 5 team members, and unlimited team members need the Enterprise plan.`,
        `**Large contact lists.** Interakt lists unlimited contacts ${src}. Whatching allows 10,000 contacts on Basic and 25,000 on Pro.`,
        `**Instagram only.** If you only need Instagram, Interakt's Instagram-only Starter costs ₹999 a month plus taxes ${src}.`,
        `**Paying upfront.** Interakt Growth costs ₹26,399 a year, about ₹2,200 a month ${src}. Whatching has no yearly plan.`,
        `**Online stores.** Interakt lists a Shopify integration with order updates, abandoned checkout reminders and cash-on-delivery to prepaid flows, plus WhatsApp catalogues, a checkout bot and WhatsApp Pay ${src}. Whatching has no store integrations or abandoned-cart recovery.`,
        `**Sales teams.** Interakt sells a Sales CRM with pipelines and automatic assignment of new leads ${src}. Whatching has no CRM or sales pipeline.`,
        `**Automatic chat assignment.** Interakt's Advanced plan assigns chats automatically ${src}. Whatching assigns chats manually.`,
        `**Extra channels and tools.** Interakt lists WhatsApp Forms, conversion tracking through custom events, outbound calling from the inbox on Advanced, RCS on Enterprise and over 60 integrations ${src}. Whatching does not have conversion tracking or WhatsApp Forms yet.`,
        `**Phone access.** Interakt's pricing page links to apps on the App Store and Google Play ${src}. Whatching has no mobile app.`
      ]
    },
    { type: "h2", text: "Where Whatching may suit you better" },
    {
      type: "ul",
      items: [
        "**Meta's charges at 0% markup.** You pay Meta's rate for India on every message. See the [current rates](/pricing#meta-charges).",
        "**AI included in the plan.** Basic includes 1M and Pro 3M of AI usage, with top-ups if you need more. The [AI agent](/features/ai-chatbot) answers from your own documents, website and FAQs and hands the chat to a person when needed.",
        "**Branching chatbots on both plans.** The drag-and-drop builder has menus, questions, branches and hand-over to a person on Basic and Pro.",
        "**Instagram on the same plan.** Pro adds [Instagram automation](/features/instagram-automation): comment replies, comment-to-DM, story replies and an Instagram AI agent.",
        "**Automatic follow-ups and lead qualification.** A follow-up bot and automatic lead qualification are built in.",
        "**Ad and cost analytics.** Analytics show which Click-to-WhatsApp ads bring chats, along with Meta charges.",
        "**Your WhatsApp Business app stays.** You can keep using the WhatsApp Business app on the same number.",
        "**Agencies.** Manage several client businesses from one login, each with its own plan.",
        "**Help getting started.** Fill in the form on our [demo page](/demo) for a free onboarding call."
      ]
    },
    { type: "h2", text: "How do you switch from Interakt to Whatching?" },
    {
      type: "p",
      text: `Meta changed how WhatsApp accounts work in 2026. Under its new account model, your phone number sits in a WhatsApp account that your business owns, and you share that account with each provider you use ([Meta's guide](${META_ACCOUNTS})). These are the general steps:`
    },
    {
      type: "ol",
      items: [
        "**List what you use today.** Note your message templates, chatbot flows, auto-replies, tags, contact fields and integrations. This becomes your checklist.",
        "**Export what you want to keep.** Ask Interakt which data you can export, such as contacts, and save it before you cancel.",
        `**Share your WhatsApp account with the new provider.** Meta says that to work with a new provider, you share your WhatsApp account with them. The number stays where it is and conversations carry on. Sharing is additive, so Interakt can stay connected while you test ([Meta's guide](${META_ACCOUNTS})).`,
        "**Recreate your templates.** Templates belong to each provider's own messaging account and are not shared. Meta offers a Template Migration API for copying them, and says copied templates restart at baseline quality and messaging tier, with about 2 to 4 weeks to ramp up.",
        "**Rebuild your automations.** Set up chatbots, follow-ups and the AI agent with your documents, website and FAQs, then test with a few contacts.",
        "**Remove the old provider and cancel.** When everything works, remove Interakt's access to your WhatsApp account and cancel its plan under its billing terms."
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
      question: "Is Whatching cheaper than Interakt?",
      answer:
        "On monthly billing, Whatching Basic is ₹2,499 and Interakt Growth is ₹2,799, while Whatching Pro is ₹3,999 and Interakt Advanced is ₹3,799. Interakt's yearly plans cost less per month and include unlimited agents. Whatching passes Meta's message charges on at 0% markup. Your total depends on team size, message volume and add-ons, so work out a full month for your own numbers."
    },
    {
      question:
        "Does Interakt charge more than Meta's rate for WhatsApp messages?",
      answer:
        "Interakt's pricing page lists marketing messages to Indian numbers at ₹0.949 to ₹0.970, depending on the plan. Meta's INR list rate for India from 1 October 2026 is ₹0.8631. Interakt's Enterprise plan is listed with no markup charges. The page does not say whether its rates include GST, so ask Interakt for the full figure."
    },
    {
      question: "Can I keep my WhatsApp number if I move from Interakt?",
      answer:
        "Under Meta's new account model, your business owns the WhatsApp account that holds the number, and you share it with a new provider. Meta says the number does not move and conversations carry on. Templates do not carry over automatically, so they need to be recreated or copied."
    },
    {
      question: "Does Whatching connect to Shopify like Interakt?",
      answer:
        "No. Whatching does not have store integrations, abandoned-cart recovery or back-in-stock alerts. If you run an online store and need those, Interakt's Shopify features may suit you better."
    },
    {
      question: "Can I pay yearly for Whatching?",
      answer:
        "No. Whatching bills monthly only. Interakt offers quarterly billing with an 8% saving and yearly billing with a 20% saving."
    },
    {
      question: "Do both tools handle Instagram?",
      answer:
        "Yes. Interakt includes Instagram on Growth and above and sells an Instagram-only plan at ₹999 a month plus taxes. Whatching includes Instagram automation and an Instagram AI agent on its Pro plan."
    }
  ],
  sources: [
    { label: "Interakt pricing page (checked 19 November 2026)", url: IP },
    {
      label: "Interakt Instagram automation page (checked 19 November 2026)",
      url: IG
    },
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
    "whatching-vs-aisensy",
    "whatching-vs-wati",
    "how-to-choose-whatsapp-api-provider"
  ],
  relatedFeatures: [
    "ai-chatbot",
    "instagram-automation",
    "whatsapp-flows",
    "shared-inbox"
  ]
};

export default post;
