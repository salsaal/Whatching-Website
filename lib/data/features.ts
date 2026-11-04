export type FeatureCategory = "WhatsApp" | "Instagram" | "Platform";
export type VisualType =
  | "broadcast"
  | "ai"
  | "flow"
  | "inbox"
  | "analytics"
  | "instagram-comment"
  | "instagram-dm"
  | "instagram-flow"
  | "marketing";

export interface FeatureStep {
  title: string;
  description: string;
}

export interface FeatureQA {
  question: string;
  answer: string;
}

export interface Feature {
  slug: string;
  category: FeatureCategory;
  visual: VisualType;
  name: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  problem: string;
  solution: string;
  howItWorks: FeatureStep[];
  benefits: FeatureStep[];
  useCases: FeatureStep[];
  faq: FeatureQA[];
  ctaLabel: string;
  related: string[];
}

export const features: Feature[] = [
  {
    slug: "whatsapp-marketing",
    category: "WhatsApp",
    visual: "marketing",
    name: "WhatsApp Marketing",
    eyebrow: "WhatsApp Marketing",
    headline: "WhatsApp marketing that reads like a platform, not a bulk sender.",
    subheadline:
      "Plan campaigns, automate follow-ups, and manage every lead from one workspace built on the official WhatsApp Business API.",
    seoTitle: "WhatsApp Marketing Software | Whatching",
    seoDescription:
      "Whatching is a WhatsApp marketing platform for campaigns, automation, AI chatbots and lead management — built on the official WhatsApp Business API.",
    problem:
      "Most teams manage WhatsApp outreach across spreadsheets, personal phones and disconnected tools — campaigns, replies and leads never live in one place.",
    solution:
      "Whatching gives your team one workspace for the entire WhatsApp lifecycle: campaigns, automated conversations, a shared inbox and the reporting to know what's working.",
    howItWorks: [
      { title: "Connect your number", description: "Bring your existing WhatsApp Business number in through the official API — no losing your chat history." },
      { title: "Build your audience", description: "Import and segment contacts by tags, source or lifecycle stage." },
      { title: "Launch and automate", description: "Send campaigns, hand off to AI where useful, and route real conversations to your team." }
    ],
    benefits: [
      { title: "One system of record", description: "Campaigns, automation and conversations in a single contact timeline." },
      { title: "Official API foundation", description: "Built around Meta's messaging policies, not unofficial senders." },
      { title: "Built to scale with you", description: "From a first campaign to a multi-agent, multi-number setup." }
    ],
    useCases: [
      { title: "Promotions & offers", description: "Send timely, personalized promotional campaigns." },
      { title: "Order & appointment updates", description: "Automate transactional messages customers actually want." },
      { title: "Re-engagement", description: "Bring cold leads back into an active conversation." }
    ],
    faq: [
      { question: "Do I need a WhatsApp Business API number to start?", answer: "Yes — Whatching helps you set one up, or migrate an existing WhatsApp Business App number without losing your chat history." },
      { question: "Is this the same as bulk WhatsApp senders?", answer: "No. Whatching sends through the official WhatsApp Business API and follows Meta's messaging policies, rather than unofficial automation infrastructure." }
    ],
    ctaLabel: "Start Free Trial",
    related: ["whatsapp-broadcast", "ai-chatbot", "shared-inbox"]
  },
  {
    slug: "whatsapp-broadcast",
    category: "WhatsApp",
    visual: "broadcast",
    name: "WhatsApp Broadcasts",
    eyebrow: "Broadcasts",
    headline: "Broadcast campaigns that actually start conversations.",
    subheadline:
      "Send personalized promotional and transactional campaigns through the official WhatsApp Business API, with delivery analytics on every send.",
    seoTitle: "WhatsApp Broadcast Software | Whatching",
    seoDescription:
      "Send bulk WhatsApp broadcast campaigns with personalization, CTA buttons, scheduling and delivery analytics — built on the official WhatsApp Business API.",
    problem:
      "Generic blasts get ignored, and most bulk-messaging tools give you no visibility into what happened after you hit send.",
    solution:
      "Build segmented, personalized campaigns with media, CTA buttons and approved templates — then watch delivery, reads, clicks and replies roll in live.",
    howItWorks: [
      { title: "Pick your audience", description: "Segment contacts by tag, source, or custom attribute." },
      { title: "Design the message", description: "Personalize with variables, add media and quick-reply or CTA buttons." },
      { title: "Schedule & send", description: "Send now or schedule ahead — up to weeks in advance." }
    ],
    benefits: [
      { title: "Personalized at scale", description: "Dynamic variables make every message feel one-to-one." },
      { title: "CTA buttons built in", description: "Turn a broadcast into a click, a reply, or a booked call." },
      { title: "Delivery analytics", description: "Track delivered, read, clicked, replied and converted per campaign." }
    ],
    useCases: [
      { title: "Seasonal promotions", description: "Time-boxed offers segmented by customer tier." },
      { title: "Restock & drop alerts", description: "Notify interested customers the moment inventory is back." },
      { title: "Event reminders", description: "Keep attendance high with scheduled, personalized nudges." }
    ],
    faq: [
      { question: "Do broadcasts require pre-approved templates?", answer: "Yes — outbound marketing messages use Meta-approved templates. Whatching's template manager handles submission and status tracking." },
      { question: "How far ahead can I schedule a campaign?", answer: "Campaigns can be scheduled weeks in advance and adjusted any time before they go out." }
    ],
    ctaLabel: "Create a Campaign",
    related: ["whatsapp-marketing", "analytics", "shared-inbox"]
  },
  {
    slug: "ai-chatbot",
    category: "WhatsApp",
    visual: "ai",
    name: "AI Chatbots",
    eyebrow: "AI Automation",
    headline: "AI that talks to your customers, not at them.",
    subheadline:
      "Whatching AI understands questions, qualifies leads, and hands off to your team the moment a human touch matters more.",
    seoTitle: "AI Chatbot for WhatsApp | Whatching",
    seoDescription:
      "Automate WhatsApp conversations with an AI chatbot that understands intent, qualifies leads, and routes conversations to your team when needed.",
    problem:
      "Scripted keyword bots frustrate customers, and having agents answer every FAQ around the clock doesn't scale.",
    solution:
      "Whatching's AI understands customer intent, answers naturally, collects the details your team needs, and routes the conversation to a human at the right moment.",
    howItWorks: [
      { title: "AI detects intent", description: "Understands what the customer actually wants, not just keywords." },
      { title: "Collects details", description: "Asks the follow-up questions your sales or support team would ask." },
      { title: "Qualifies & assigns", description: "Hands qualified conversations to the right agent, with full context." }
    ],
    benefits: [
      { title: "Always-on coverage", description: "First response around the clock, not just business hours." },
      { title: "Context-aware replies", description: "Conversations stay coherent across multiple messages." },
      { title: "Seamless handoff", description: "Agents pick up with full conversation history, not a cold start." }
    ],
    useCases: [
      { title: "FAQ deflection", description: "Answer common questions instantly, freeing agents for complex ones." },
      { title: "Lead qualification", description: "Collect budget, intent and timeline before a human joins." },
      { title: "After-hours coverage", description: "Keep responding while your team is offline." }
    ],
    faq: [
      { question: "Can a human take over an AI conversation?", answer: "Yes — any conversation can be handed to an agent at any point, with full context preserved." },
      { question: "Does the AI need to be trained per business?", answer: "Yes, the AI is configured around your business's products, policies and common questions." }
    ],
    ctaLabel: "Build an AI Assistant",
    related: ["whatsapp-flows", "shared-inbox", "whatsapp-marketing"]
  },
  {
    slug: "whatsapp-flows",
    category: "WhatsApp",
    visual: "flow",
    name: "WhatsApp Flows",
    eyebrow: "No-Code Automation",
    headline: "Build customer journeys without writing code.",
    subheadline:
      "Design multi-step conversational flows visually — welcome messages, questions, conditions, and lead capture, all without a developer.",
    seoTitle: "WhatsApp Flows Builder | Whatching",
    seoDescription:
      "Build no-code WhatsApp automation flows — welcome messages, conditional logic, product recommendations and lead capture — with Whatching's visual flow builder.",
    problem:
      "Every custom conversation journey used to mean a developer ticket and a wait — by the time it shipped, the campaign was over.",
    solution:
      "Whatching's visual flow builder lets marketing and support teams design and launch conversational journeys themselves, with full control over logic and branching.",
    howItWorks: [
      { title: "Set the trigger", description: "Start a flow from a keyword, a broadcast reply, or a website form." },
      { title: "Design the path", description: "Add messages, questions, conditions and actions on a visual canvas." },
      { title: "Publish & monitor", description: "Launch instantly and see where users drop off or convert." }
    ],
    benefits: [
      { title: "No developer required", description: "Marketing and support teams ship flows themselves." },
      { title: "Branching logic", description: "Route users based on their actual answers." },
      { title: "Reusable building blocks", description: "Clone and adapt flows across campaigns." }
    ],
    useCases: [
      { title: "Product recommendation", description: "Ask 2–3 questions, then recommend the right product or plan." },
      { title: "Appointment booking", description: "Guide users to a booked slot without leaving WhatsApp." },
      { title: "Lead qualification", description: "Capture the details your sales team needs before assignment." }
    ],
    faq: [
      { question: "Do I need technical knowledge to build a flow?", answer: "No — flows are built visually with drag-and-drop steps and conditions." },
      { question: "Can flows hand off to a human agent?", answer: "Yes — any flow step can assign the conversation to an agent or team." }
    ],
    ctaLabel: "Build Your First Flow",
    related: ["ai-chatbot", "shared-inbox", "instagram-dm-automation"]
  },
  {
    slug: "shared-inbox",
    category: "WhatsApp",
    visual: "inbox",
    name: "Shared Inbox",
    eyebrow: "Team Inbox",
    headline: "One inbox for your entire team.",
    subheadline:
      "WhatsApp, Instagram, AI and human agents — all inside one unified conversation view, with assignment, notes and mentions.",
    seoTitle: "Shared WhatsApp Inbox for Teams | Whatching",
    seoDescription:
      "Manage WhatsApp and Instagram conversations together with a shared team inbox — assign chats, leave internal notes, mention teammates and track status.",
    problem:
      "When every agent works from their own phone or tab, conversations get missed, duplicated, or answered twice.",
    solution:
      "Whatching's shared inbox brings WhatsApp and Instagram conversations, AI replies and human agents into one place — with clear ownership on every chat.",
    howItWorks: [
      { title: "Conversations arrive centrally", description: "WhatsApp and Instagram messages land in one unified list." },
      { title: "Assign and tag", description: "Route conversations to the right agent or team, with tags for context." },
      { title: "Collaborate inline", description: "Leave internal notes and @mention teammates without leaving the chat." }
    ],
    benefits: [
      { title: "Nothing falls through", description: "Every conversation has a clear owner and status." },
      { title: "Full context, always", description: "Customer profile, tags and history sit beside every chat." },
      { title: "Cross-channel view", description: "WhatsApp and Instagram conversations in the same workspace." }
    ],
    useCases: [
      { title: "Support teams", description: "Distribute incoming conversations evenly across agents." },
      { title: "Sales teams", description: "Hand qualified leads from AI straight to the right rep." },
      { title: "Agencies", description: "Manage multiple client inboxes from one login." }
    ],
    faq: [
      { question: "Can multiple agents use one WhatsApp number?", answer: "Yes — the shared inbox lets your whole team work from the same number without collisions." },
      { question: "Can I assign conversations to specific agents?", answer: "Yes — conversations can be assigned manually or routed automatically by rule." }
    ],
    ctaLabel: "Explore Shared Inbox",
    related: ["ai-chatbot", "whatsapp-marketing", "analytics"]
  },
  {
    slug: "analytics",
    category: "Platform",
    visual: "analytics",
    name: "Analytics",
    eyebrow: "Analytics",
    headline: "Know what's working. Scale what isn't.",
    subheadline:
      "Track delivery, replies, leads and conversions across every campaign and channel — WhatsApp and Instagram, in one dashboard.",
    seoTitle: "WhatsApp & Instagram Analytics Dashboard | Whatching",
    seoDescription:
      "Understand campaign and conversation performance across WhatsApp and Instagram — delivery, read rates, replies, leads and conversions in one dashboard.",
    problem:
      "Without shared reporting, teams argue about what's working instead of looking at the numbers.",
    solution:
      "Whatching brings campaign and conversation data into one dashboard, so every team can see delivery, engagement and conversion at a glance.",
    howItWorks: [
      { title: "Data collects automatically", description: "Every campaign and conversation is tracked as it happens." },
      { title: "Explore by channel", description: "Filter by WhatsApp or Instagram, campaign, or agent." },
      { title: "Act on the trend", description: "Double down on what converts, fix what doesn't." }
    ],
    benefits: [
      { title: "Full-funnel visibility", description: "From delivered message to converted customer." },
      { title: "Channel comparison", description: "See WhatsApp and Instagram performance side by side." },
      { title: "Team performance", description: "Response time and conversation load, by agent." }
    ],
    useCases: [
      { title: "Campaign reporting", description: "Delivery, read and click rate for every broadcast." },
      { title: "Funnel tracking", description: "Lead → qualified → converted, end to end." },
      { title: "Team oversight", description: "Spot response-time bottlenecks before they become complaints." }
    ],
    faq: [
      { question: "Can I export reports?", answer: "Yes — campaign and conversation reports can be exported for stakeholders." },
      { question: "Does analytics cover Instagram too?", answer: "Yes — WhatsApp and Instagram performance both live in the same dashboard." }
    ],
    ctaLabel: "See Analytics",
    related: ["whatsapp-broadcast", "shared-inbox", "instagram-automation"]
  },
  {
    slug: "instagram-automation",
    category: "Instagram",
    visual: "instagram-comment",
    name: "Instagram Automation",
    eyebrow: "Instagram",
    headline: "Turn Instagram engagement into conversations.",
    subheadline:
      "Transform comments, DMs and story replies into automated customer journeys — and hand qualified leads straight to WhatsApp.",
    seoTitle: "Instagram Automation Software | Whatching",
    seoDescription:
      "Automate Instagram comments, DMs and message flows — capture leads, qualify them, and hand them off to your team or WhatsApp.",
    problem:
      "Instagram engagement is high, but most of it dies in the comments section — no one follows up, and no lead ever gets captured.",
    solution:
      "Whatching turns Instagram comments and DMs into automated conversations, capturing and qualifying leads without a manual reply.",
    howItWorks: [
      { title: "Engagement happens", description: "A comment, DM, or story reply comes in." },
      { title: "Automation responds", description: "Whatching replies automatically and opens a DM conversation." },
      { title: "Lead is captured", description: "Details are collected and the lead is qualified or handed to your team." }
    ],
    benefits: [
      { title: "Nothing gets missed", description: "Every comment and DM gets an instant, on-brand reply." },
      { title: "Leads captured automatically", description: "Turn engagement into a structured lead record." },
      { title: "One platform with WhatsApp", description: "Instagram leads flow into the same inbox and CRM." }
    ],
    useCases: [
      { title: "Giveaways & promos", description: "Auto-DM everyone who comments a keyword." },
      { title: "Product enquiries", description: "Turn 'price?' comments into qualified conversations." },
      { title: "Content-driven leads", description: "Capture leads straight from high-engagement posts." }
    ],
    faq: [
      { question: "Does this work with Instagram's official platform?", answer: "Yes — automation runs through Meta's Instagram Messaging API." },
      { question: "Can Instagram leads move to WhatsApp?", answer: "Yes — flows can collect a phone number and continue the conversation on WhatsApp." }
    ],
    ctaLabel: "Automate Instagram",
    related: ["instagram-comment-automation", "instagram-dm-automation", "shared-inbox"]
  },
  {
    slug: "instagram-comment-automation",
    category: "Instagram",
    visual: "instagram-comment",
    name: "Instagram Comment Automation",
    eyebrow: "Comment Automation",
    headline: "Every comment can become a conversation.",
    subheadline:
      "Trigger an automatic DM the moment someone comments a keyword on your post — no manual reply, no missed opportunity.",
    seoTitle: "Instagram Comment Automation | Whatching",
    seoDescription:
      "Automatically DM anyone who comments a keyword on your Instagram post — turn comments into conversations and leads without manual work.",
    problem:
      "\"Comment LINK and I'll send it to you\" posts generate hundreds of comments — and most brands still reply to them one by one, hours later.",
    solution:
      "Whatching watches your posts for keyword comments and instantly opens a DM conversation, so the reply feels immediate even at scale.",
    howItWorks: [
      { title: "Set a trigger keyword", description: "Choose the word or phrase that starts the automation." },
      { title: "Comment is detected", description: "Whatching detects the keyword the moment it's posted." },
      { title: "DM sent automatically", description: "\"Hey! Here's the link you asked for…\" — instantly, every time." }
    ],
    benefits: [
      { title: "Instant response", description: "No one waits hours for a reply in the comments." },
      { title: "Scales with virality", description: "Handles 10 comments or 10,000 the same way." },
      { title: "Feeds your funnel", description: "Every DM can continue into a lead-capture flow." }
    ],
    useCases: [
      { title: "\"Comment LINK\" posts", description: "Auto-send the link the moment someone comments." },
      { title: "Giveaways", description: "Enter commenters into a flow automatically." },
      { title: "Product drops", description: "Reply to \"price?\" or \"available?\" comments instantly." }
    ],
    faq: [
      { question: "Can I use multiple keywords per post?", answer: "Yes — different keywords can trigger different automated DMs." },
      { question: "What happens after the DM is sent?", answer: "The conversation can continue into a full Instagram message flow to qualify and capture the lead." }
    ],
    ctaLabel: "Automate Instagram Comments",
    related: ["instagram-dm-automation", "instagram-automation", "whatsapp-flows"]
  },
  {
    slug: "instagram-dm-automation",
    category: "Instagram",
    visual: "instagram-flow",
    name: "Instagram DM Automation",
    eyebrow: "DM Flows",
    headline: "Build Instagram DM journeys that convert.",
    subheadline:
      "Welcome, qualify, and move a conversation from an Instagram DM to WhatsApp — without your team typing a single message.",
    seoTitle: "Instagram DM Automation & Message Flows | Whatching",
    seoDescription:
      "Automate Instagram DM conversations with visual message flows — welcome, qualify, capture a phone number, and hand off to WhatsApp or your sales team.",
    problem:
      "Instagram DMs are where interested buyers land first — but without automation, a lot of that intent goes cold before anyone replies.",
    solution:
      "Design DM flows that welcome, ask what a customer needs, qualify them, and move the conversation to WhatsApp where your team can close it.",
    howItWorks: [
      { title: "Conversation starts", description: "A DM, story reply, or comment automation opens the chat." },
      { title: "Flow qualifies the lead", description: "Ask intent, product interest, and collect a phone number." },
      { title: "Hand off to WhatsApp", description: "Continue the conversation where your sales team already works." }
    ],
    benefits: [
      { title: "Consistent first response", description: "Every DM gets an immediate, on-brand welcome." },
      { title: "Structured qualification", description: "Sales gets context, not a cold DM." },
      { title: "Instagram → WhatsApp handoff", description: "Meet customers where they start, close where you're set up to sell." }
    ],
    useCases: [
      { title: "New follower welcome", description: "Greet and guide new followers who DM you." },
      { title: "Product interest", description: "Qualify interest before assigning a sales rep." },
      { title: "Support triage", description: "Route support DMs to the right team automatically." }
    ],
    faq: [
      { question: "Can Instagram DM flows collect a phone number?", answer: "Yes — flows can collect a number and continue the conversation on WhatsApp." },
      { question: "Do I need a developer to build a DM flow?", answer: "No — DM flows use the same no-code visual builder as WhatsApp Flows." }
    ],
    ctaLabel: "Build an Instagram Flow",
    related: ["instagram-comment-automation", "whatsapp-flows", "shared-inbox"]
  }
];

export const featureBySlug = (slug: string) => features.find((f) => f.slug === slug);
