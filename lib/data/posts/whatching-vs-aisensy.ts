import type { BlogPost } from "@/lib/data/blog";

// AiSensy facts checked on AiSensy's own pages on 19 November 2026.
// Re-check every figure against the linked page before updating this post.
const AP = "https://aisensy.com/pricing";
const AF = "https://aisensy.com/features";
const META_PRICING =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing";
const META_ACCOUNTS =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution";

const src = `([pricing page](${AP}))`;
const fsrc = `([features page](${AF}))`;

const post: BlogPost = {
  slug: "whatching-vs-aisensy",
  title: "AiSensy alternative: how Whatching and AiSensy compare",
  seoTitle: "AiSensy alternative: Whatching vs AiSensy (2026)",
  excerpt:
    "Whatching and AiSensy side by side: plan prices, add-ons for chatbots and AI, Meta message rates, team limits, Instagram and billing, with every AiSensy fact linked.",
  seoDescription:
    "Whatching vs AiSensy: plan prices, chatbot and AI add-ons, Meta message rates, team limits, Instagram and billing compared, each AiSensy fact linked.",
  category: "Comparisons",
  cover: {
    versus: "AiSensy"
  },
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "aisensy alternative",
  summary:
    "AiSensy suits businesses that want a free plan to start, a low ₹1,500 entry price, unlimited contacts, more agents per plan, store integrations and a mobile app. Whatching suits businesses that want the chatbot builder and AI included in the plan, Meta's message charges at 0% markup and Instagram automation on Pro. AiSensy prices below were checked on 19 November 2026.",
  blocks: [
    {
      type: "p",
      text: `If you are weighing up an AiSensy alternative, the main differences are in what each plan includes and what you add on top. This page compares Whatching and AiSensy on plan prices, add-ons, Meta's message charges, team limits, Instagram, AI and billing terms. Every AiSensy figure links to the AiSensy page it came from, and we checked those pages on 19 November 2026. Prices change, so confirm the current figures on [AiSensy's pricing page](${AP}) before you decide.`
    },
    { type: "h2", text: "Whatching vs AiSensy: what is the short answer?" },
    {
      type: "p",
      text: "AiSensy has a Free Forever plan, a ₹1,500 Basic plan, unlimited contacts, five agents on Basic, Shopify and WooCommerce integrations, Android and iOS apps, and discounts for quarterly or yearly payment. Its chatbot builder and AI agent are sold as add-ons. Whatching includes the chatbot builder and AI usage in every plan, passes Meta's message charges on at 0% markup and adds Instagram automation on Pro. Whatching bills monthly only and has no free plan."
    },
    {
      type: "h2",
      text: "How do Whatching and AiSensy compare, feature by feature?"
    },
    {
      type: "table",
      caption:
        "AiSensy figures checked on AiSensy's own pages on 19 November 2026. Monthly prices unless stated.",
      head: ["", "Whatching", "AiSensy"],
      rows: [
        [
          "Plan prices (monthly billing)",
          "Basic ₹2,499, Pro ₹3,999, Enterprise custom. Plus 18% GST.",
          `Free Forever ₹0, Basic ₹1,500, Pro ₹3,200, Premium ₹9,100, Unlimited ₹45,000, Enterprise custom. The page does not say whether GST is included. ${src}`
        ],
        [
          "Quarterly or yearly prices",
          "None. Monthly billing only.",
          `Quarterly saves 5% and yearly saves 10%. Yearly: Basic ₹16,200, Pro ₹34,560, Premium ₹98,280. ${src}`
        ],
        [
          "Meta message charges",
          "Passed on at 0% markup.",
          `Paid from a separate prepaid balance of WhatsApp Conversation Credits. Indian users: marketing ₹1.09, utility, authentication and service ₹0.145 per message. A markup is not stated. ${src}`
        ],
        [
          "Free trial",
          "7-day trial of Pro, no card needed.",
          `No trial is listed. A Free Forever plan is offered instead, without broadcasting. New sign-ups get ₹50 of message credits. ${src}`
        ],
        [
          "Contacts",
          "10,000 on Basic, 25,000 on Pro.",
          `Unlimited contacts. ${src}`
        ],
        [
          "Team members",
          "Owner + 2 on Basic, owner + 5 on Pro, unlimited on Enterprise.",
          `Basic: owner + 5 agents. Pro: 5 agents. Premium: owner + 9. Unlimited: up to 200. Extra seats ₹750 a month each. ${src}`
        ],
        [
          "Instagram automation",
          "On Pro: comment replies, comment-to-DM, story replies and an Instagram AI agent.",
          "Not listed on their pricing page."
        ],
        [
          "AI",
          "AI agent that answers from your documents, website and FAQs and hands chats to a person. WhatsApp on both plans, Instagram on Pro. AI usage included: 1M on Basic, 3M on Pro, unlimited on Enterprise. Top-ups available.",
          `AI Agent Builder add-on: ₹1,350 a month with 1,000 AI messages, or ₹1,215 a month billed yearly. Includes knowledge base Q&A. ${src}`
        ],
        [
          "Shared inbox",
          "Shared team inbox with manual assignment, tags and customer details. No automatic routing.",
          `Live chat dashboard on Free Forever. Multi-agent live chat and a shared team inbox on paid plans. Custom agent rules for automatic assignment from Pro. ${src}`
        ],
        [
          "Chatbot builder",
          "Drag-and-drop builder for WhatsApp and Instagram with menus, questions, branches and hand-over to a person.",
          `Drag-and-drop chatbot builder add-on: ₹2,500 a month for 5 chatbots, or ₹2,250 a month billed yearly. ${src}`
        ],
        [
          "Scheduled broadcasts",
          "Send now or schedule, with delivered, read and replied counts and button clicks.",
          `Campaign scheduler and click tracking from Pro upward. ${src}`
        ],
        [
          "Billing terms",
          "Monthly only. No yearly plan.",
          `Monthly, quarterly or yearly. All billing is pre-paid. Upgrades and downgrades are pro-rata. ${src}`
        ]
      ]
    },
    {
      type: "h2",
      text: "What does AiSensy cost with the chatbot and AI add-ons?"
    },
    {
      type: "p",
      text: `AiSensy sells its chatbot builder and AI agent separately, on top of any plan ${src}. Using its listed monthly prices, before any tax:`
    },
    {
      type: "table",
      caption: "Monthly totals from AiSensy's listed prices, before any tax.",
      head: [
        "AiSensy set-up",
        "Plan",
        "Chatbot add-on",
        "AI add-on",
        "Monthly total"
      ],
      rows: [
        ["Basic only", "₹1,500", "", "", "₹1,500"],
        ["Basic with chatbot and AI", "₹1,500", "₹2,500", "₹1,350", "₹5,350"],
        ["Pro with chatbot and AI", "₹3,200", "₹2,500", "₹1,350", "₹7,050"]
      ]
    },
    {
      type: "p",
      text: "Whatching Basic is ₹2,499 a month plus GST and already includes the chatbot builder and 1M of AI usage. If you only need broadcasts and a shared inbox, AiSensy Basic at ₹1,500 costs less. If you need chatbots and AI as well, add the add-ons to your comparison."
    },
    { type: "h2", text: "Does AiSensy add a markup to Meta's charges?" },
    {
      type: "p",
      text: `Meta charges for each delivered template message, and the rate depends on the message category and the customer's country. Meta's INR rate card for India, effective 1 October 2026, lists ₹0.8631 per marketing message and ₹0.115 per utility, authentication or service message. Each number gets 1,000 free service messages a month ([Meta's pricing page](${META_PRICING})).`
    },
    {
      type: "p",
      text: `AiSensy's pricing page lists ₹1.09 per marketing message and ₹0.145 per utility, authentication or service message for Indian users, paid from a prepaid credit balance. Its FAQ says these credits are charged by Meta ${src}. The page does not explain how its figures relate to Meta's list rates or say whether they include GST, so ask AiSensy how the rate is made up.`
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
        ["AiSensy listed rate, all plans except Enterprise", "₹1.09", "₹10,900"]
      ]
    },
    {
      type: "p",
      text: "You can see Meta's current rates on our [pricing page](/pricing#meta-charges)."
    },
    { type: "h2", text: "Where AiSensy may suit you better" },
    {
      type: "ul",
      items: [
        `**Starting for free.** The Free Forever plan lets you get the WhatsApp Business API, apply for the blue tick and run Meta ads at no plan cost, though broadcasting needs a paid plan ${src}. Whatching has a 7-day trial and no free plan.`,
        `**A lower entry price.** AiSensy Basic is ₹1,500 a month, and ₹1,350 a month on yearly billing ${src}. Whatching Basic is ₹2,499 a month and has no yearly plan.`,
        `**More agents and contacts.** AiSensy Basic includes the owner and 5 agents, with unlimited contacts ${src}. Whatching Basic includes the owner and 2 team members and 10,000 contacts.`,
        `**Online stores.** AiSensy lists Shopify and WooCommerce integrations on Basic for order, shipping and abandoned-cart messages ${src}. Whatching has no store integrations or abandoned-cart recovery.`,
        `**Payments, forms and catalogues.** AiSensy's features page lists WhatsApp Payments, WhatsApp Forms, catalogues, carousel cards and webviews ${fsrc}. Whatching does not have WhatsApp Forms yet.`,
        `**Creating ads.** AiSensy's Ads Manager creates and manages Click-to-WhatsApp and other Meta ads from inside the tool ${src}.`,
        `**Automatic assignment and reports.** Custom agent rules assign chats automatically from Pro, and Premium adds downloadable reports and number masking ${src}. Whatching assigns chats manually and has no report export.`,
        `**Phone access.** AiSensy links to Android and iOS apps from its pricing page ${src}. Whatching has no mobile app.`
      ]
    },
    { type: "h2", text: "Where Whatching may suit you better" },
    {
      type: "ul",
      items: [
        "**Chatbots and AI in the plan price.** The [chatbot builder](/features/whatsapp-flows) has menus, questions, branches and hand-over to a person. Basic includes 1M and Pro 3M of AI usage, with top-ups if you need more.",
        "**An AI agent trained on your business.** The [AI agent](/features/ai-chatbot) answers from your own documents, website and FAQs on WhatsApp and Instagram, then hands the chat to a person.",
        "**Meta's charges at 0% markup.** You pay Meta's rate for India on every message.",
        "**Instagram automation.** Pro adds comment replies, comment-to-DM, story replies and an Instagram AI agent.",
        "**Automatic follow-ups and lead qualification.** A follow-up bot and automatic lead qualification are built in.",
        "**Ad and cost analytics.** Analytics show which Click-to-WhatsApp ads bring chats, along with Meta charges.",
        "**Your WhatsApp Business app stays.** You can keep using the WhatsApp Business app on the same number.",
        "**Agencies.** Manage several client businesses from one login, each with its own plan.",
        "**Help getting started.** Fill in the form on our [demo page](/demo) for a free onboarding call."
      ]
    },
    { type: "h2", text: "How do you switch from AiSensy to Whatching?" },
    {
      type: "p",
      text: `Meta changed how WhatsApp accounts work in 2026. Under its new account model, your phone number sits in a WhatsApp account that your business owns, and you share that account with each provider you use ([Meta's guide](${META_ACCOUNTS})). These are the general steps:`
    },
    {
      type: "ol",
      items: [
        "**List what you use today.** Note your message templates, chatbot flows, auto-replies, tags, contact attributes and integrations. This becomes your checklist.",
        "**Export what you want to keep.** Ask AiSensy which data you can export, such as contacts, and save it before you cancel. Check what happens to any unused prepaid credits.",
        `**Share your WhatsApp account with the new provider.** Meta says that to work with a new provider, you share your WhatsApp account with them. The number stays where it is and conversations carry on. Sharing is additive, so AiSensy can stay connected while you test ([Meta's guide](${META_ACCOUNTS})).`,
        "**Recreate your templates.** Templates belong to each provider's own messaging account and are not shared. Meta offers a Template Migration API for copying them, and says copied templates restart at baseline quality and messaging tier, with about 2 to 4 weeks to ramp up.",
        "**Rebuild your automations.** Set up chatbots, follow-ups and the AI agent with your documents, website and FAQs, then test with a few contacts.",
        "**Remove the old provider and cancel.** When everything works, remove AiSensy's access to your WhatsApp account and cancel its plan under its billing terms."
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
      question: "Is AiSensy cheaper than Whatching?",
      answer:
        "For broadcasts and a shared inbox alone, yes: AiSensy Basic is ₹1,500 a month and Whatching Basic is ₹2,499 plus GST. If you add AiSensy's chatbot builder (₹2,500 a month) and AI agent (₹1,350 a month), Basic comes to ₹5,350 a month before tax. Whatching includes both in its plans and passes Meta's message charges on at 0% markup."
    },
    {
      question:
        "Does AiSensy charge more than Meta's rate for WhatsApp messages?",
      answer:
        "AiSensy's pricing page lists ₹1.09 per marketing message and ₹0.145 per utility, authentication or service message for Indian users. Meta's INR list rates for India from 1 October 2026 are ₹0.8631 and ₹0.115. The page does not say whether AiSensy's figures include GST, so ask AiSensy how its rate is made up."
    },
    {
      question: "Does AiSensy have Instagram automation?",
      answer:
        "Instagram automation is not listed on AiSensy's pricing page. Whatching includes Instagram comment replies, comment-to-DM, story replies and an Instagram AI agent on its Pro plan."
    },
    {
      question: "Does Whatching have a free plan like AiSensy?",
      answer:
        "No. Whatching offers a free 7-day trial of the Pro plan with no card needed. AiSensy has a Free Forever plan, though it does not include broadcasting."
    },
    {
      question: "Can I keep my WhatsApp number if I move from AiSensy?",
      answer:
        "Under Meta's new account model, your business owns the WhatsApp account that holds the number, and you share it with a new provider. Meta says the number does not move and conversations carry on. Templates do not carry over automatically, so they need to be recreated or copied."
    }
  ],
  sources: [
    { label: "AiSensy pricing page (checked 19 November 2026)", url: AP },
    { label: "AiSensy features page (checked 19 November 2026)", url: AF },
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
    "whatching-vs-wati",
    "how-to-choose-whatsapp-api-provider"
  ],
  relatedFeatures: [
    "whatsapp-flows",
    "ai-chatbot",
    "instagram-automation",
    "whatsapp-broadcast"
  ]
};

export default post;
