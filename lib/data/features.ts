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
  /** The "How it works" heading, written out so grammar and casing are right. */
  howTitle: string;
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
    howTitle: "How WhatsApp marketing works in Whatching",
    eyebrow: "WhatsApp Marketing",
    headline: "WhatsApp marketing, done the official way.",
    subheadline:
      "Plan broadcasts, automate follow-ups and reply to every customer from one place, built on Meta's official WhatsApp Business Platform.",
    seoTitle: "WhatsApp Marketing Software for Businesses | Whatching",
    seoDescription:
      "WhatsApp marketing software on the official WhatsApp Business API: broadcasts, message templates, chatbots, AI replies and a shared team inbox. Free 7-day trial.",
    problem:
      "Most teams manage WhatsApp outreach across spreadsheets, personal phones and disconnected tools — campaigns, replies and leads never live in one place.",
    solution:
      "Whatching gives your team one workspace for the entire WhatsApp lifecycle: campaigns, automated conversations, a shared inbox and the reporting to know what's working.",
    howItWorks: [
      {
        title: "Connect your number",
        description:
          "Bring your existing WhatsApp Business number in through the official API — no losing your chat history."
      },
      {
        title: "Build your audience",
        description:
          "Import and segment contacts by tags, source or lifecycle stage."
      },
      {
        title: "Launch and automate",
        description:
          "Send campaigns, let AI answer where it helps, and hand real conversations to your team."
      }
    ],
    benefits: [
      {
        title: "One system of record",
        description:
          "Campaigns, automation and conversations in a single contact timeline."
      },
      {
        title: "Official API foundation",
        description:
          "Built around Meta's messaging policies, not unofficial senders."
      },
      {
        title: "Built to scale with you",
        description:
          "From a first campaign to a multi-agent, multi-number setup."
      }
    ],
    useCases: [
      {
        title: "Promotions & offers",
        description: "Send timely, personalized promotional campaigns."
      },
      {
        title: "Order & appointment updates",
        description: "Automate transactional messages customers actually want."
      },
      {
        title: "Re-engagement",
        description: "Bring cold leads back into an active conversation."
      }
    ],
    faq: [
      {
        question: "Do I need a WhatsApp Business API number to start?",
        answer:
          "Yes — Whatching helps you set one up, or migrate an existing WhatsApp Business App number without losing your chat history."
      },
      {
        question: "Is this the same as bulk WhatsApp senders?",
        answer:
          "No. Whatching sends through the official WhatsApp Business API and follows Meta's messaging policies, rather than unofficial automation infrastructure."
      }
    ],
    ctaLabel: "Start your free 7-day trial",
    related: ["whatsapp-broadcast", "ai-chatbot", "shared-inbox"]
  },
  {
    slug: "whatsapp-broadcast",
    category: "WhatsApp",
    visual: "broadcast",
    name: "WhatsApp Broadcasts",
    howTitle: "How WhatsApp broadcasts work",
    eyebrow: "Broadcasts",
    headline: "Broadcast campaigns that actually start conversations.",
    subheadline:
      "Send offers and updates to thousands of customers at once, each with their own name, and see who received, read and tapped every message.",
    seoTitle: "WhatsApp Broadcast & Bulk Messaging Software | Whatching",
    seoDescription:
      "Send a WhatsApp broadcast to thousands of contacts at once, now or scheduled, using approved templates with images and buttons. Track delivered, read and replied.",
    problem:
      "Generic blasts get ignored, and most bulk-messaging tools give you no visibility into what happened after you hit send.",
    solution:
      "Choose who gets each message, add their name, a picture and buttons, and send it with a template Meta has approved. Then see how many messages were delivered, read and replied to, and which buttons people tapped.",
    howItWorks: [
      {
        title: "Pick your audience",
        description: "Segment contacts by tag, source, or custom attribute."
      },
      {
        title: "Design the message",
        description:
          "Personalize with variables, add media and quick-reply or CTA buttons."
      },
      {
        title: "Schedule & send",
        description: "Send now or schedule ahead — up to weeks in advance."
      }
    ],
    benefits: [
      {
        title: "Personalized at scale",
        description: "Dynamic variables make every message feel one-to-one."
      },
      {
        title: "CTA buttons built in",
        description: "Turn a broadcast into a click, a reply, or a booked call."
      },
      {
        title: "Delivery analytics",
        description:
          "Track delivered, read and replied counts, plus template button clicks, per campaign."
      }
    ],
    useCases: [
      {
        title: "Seasonal promotions",
        description: "Time-boxed offers segmented by customer tier."
      },
      {
        title: "Back in stock and new arrivals",
        description:
          "Tell customers when a popular item is back or a new range lands."
      },
      {
        title: "Event reminders",
        description: "Keep attendance high with scheduled, personalized nudges."
      }
    ],
    faq: [
      {
        question: "Do broadcasts require pre-approved templates?",
        answer:
          "Yes. Messages you send first use a template Meta has approved. You write and submit templates in Whatching and see when they're approved."
      },
      {
        question: "How far ahead can I schedule a campaign?",
        answer: "You can pick a later date and time for a broadcast to go out."
      }
    ],
    ctaLabel: "Create a broadcast",
    related: ["whatsapp-marketing", "analytics", "shared-inbox"]
  },
  {
    slug: "ai-chatbot",
    category: "WhatsApp",
    visual: "ai",
    name: "AI Chatbot",
    howTitle: "How the AI chatbot works",
    eyebrow: "AI Automation",
    headline: "AI that talks to your customers, not at them.",
    subheadline:
      "An AI agent that answers customer questions from your own documents, website and FAQs, and hands the chat to your team when a person is needed.",
    seoTitle: "AI Chatbot for WhatsApp & Instagram | Whatching",
    seoDescription:
      "An AI agent that answers customer questions on WhatsApp and Instagram from your own documents, website and FAQs, and hands over to your team when needed.",
    problem:
      "Scripted keyword bots frustrate customers, and having agents answer every FAQ around the clock doesn't scale.",
    solution:
      "Whatching's AI agent reads each question, answers from what you've taught it, collects the details your team needs, and hands the chat to a person when needed.",
    howItWorks: [
      {
        title: "AI detects intent",
        description:
          "Understands what the customer actually wants, not just keywords."
      },
      {
        title: "Collects details",
        description:
          "Asks the follow-up questions your sales or support team would ask."
      },
      {
        title: "Qualifies & assigns",
        description:
          "Hands qualified conversations to the right agent, with full context."
      }
    ],
    benefits: [
      {
        title: "Always-on coverage",
        description: "First response around the clock, not just business hours."
      },
      {
        title: "Context-aware replies",
        description: "Conversations stay coherent across multiple messages."
      },
      {
        title: "Seamless handoff",
        description:
          "Agents pick up with full conversation history, not a cold start."
      }
    ],
    useCases: [
      {
        title: "FAQ deflection",
        description:
          "Answer common questions instantly, freeing agents for complex ones."
      },
      {
        title: "Lead qualification",
        description: "Collect budget, intent and timeline before a human joins."
      },
      {
        title: "After-hours coverage",
        description: "Keep responding while your team is offline."
      }
    ],
    faq: [
      {
        question: "Can a human take over an AI conversation?",
        answer:
          "Yes — any conversation can be handed to an agent at any point, with full context preserved."
      },
      {
        question: "Does the AI need to be trained per business?",
        answer:
          "Yes, the AI is configured around your business's products, policies and common questions."
      }
    ],
    ctaLabel: "Set up your AI agent",
    related: ["whatsapp-flows", "shared-inbox", "whatsapp-marketing"]
  },
  {
    slug: "whatsapp-flows",
    category: "WhatsApp",
    visual: "flow",
    name: "Chatbot Builder",
    howTitle: "How the chatbot builder works",
    eyebrow: "Chatbot builder",
    headline: "Build customer journeys without writing code.",
    subheadline:
      "Build chatbots by dragging blocks onto a canvas: welcome messages, menus, questions and branches, with a hand-over to a person. No developer needed.",
    seoTitle: "No-Code WhatsApp Chatbot Builder | Whatching",
    seoDescription:
      "Build a WhatsApp chatbot on a drag-and-drop canvas: menus, questions, branching and handing over to a person. No coding needed.",
    problem:
      "Every custom conversation journey used to mean a developer ticket and a wait — by the time it shipped, the campaign was over.",
    solution:
      "Whatching's chatbot builder lets you build and change chatbots yourself, including the menus, the questions and where each answer leads.",
    howItWorks: [
      {
        title: "Set the trigger",
        description:
          "Start a flow from a keyword, a broadcast reply, or a website form."
      },
      {
        title: "Design the path",
        description:
          "Add messages, questions, conditions and actions on a visual canvas."
      },
      {
        title: "Publish and adjust",
        description: "Publish in one click and change the chatbot any time."
      }
    ],
    benefits: [
      {
        title: "No developer required",
        description: "Marketing and support teams ship flows themselves."
      },
      {
        title: "Branching logic",
        description: "Route users based on their actual answers."
      },
      {
        title: "Reusable building blocks",
        description: "Clone and adapt flows across campaigns."
      }
    ],
    useCases: [
      {
        title: "Product recommendation",
        description:
          "Ask 2–3 questions, then recommend the right product or plan."
      },
      {
        title: "Appointment booking",
        description: "Guide users to a booked slot without leaving WhatsApp."
      },
      {
        title: "Lead qualification",
        description:
          "Capture the details your sales team needs before assignment."
      }
    ],
    faq: [
      {
        question: "Do I need technical knowledge to build a flow?",
        answer:
          "No — flows are built visually with drag-and-drop steps and conditions."
      },
      {
        question: "Can flows hand off to a human agent?",
        answer:
          "Yes — any flow step can assign the conversation to an agent or team."
      }
    ],
    ctaLabel: "Build your first chatbot",
    related: ["ai-chatbot", "shared-inbox", "instagram-dm-automation"]
  },
  {
    slug: "shared-inbox",
    category: "WhatsApp",
    visual: "inbox",
    name: "Shared Inbox",
    howTitle: "How the shared inbox works",
    eyebrow: "Team Inbox",
    headline: "One inbox for your entire team.",
    subheadline:
      "WhatsApp and Instagram chats, and the AI agent's replies, in one inbox your whole team shares, with a clear owner on every chat.",
    seoTitle: "Shared Team Inbox for WhatsApp & Instagram | Whatching",
    seoDescription:
      "Your whole team replies to WhatsApp and Instagram chats from one inbox, and you assign each chat to a teammate. One WhatsApp number, many teammates.",
    problem:
      "When every agent works from their own phone or tab, conversations get missed, duplicated, or answered twice.",
    solution:
      "Whatching's shared inbox brings WhatsApp and Instagram chats, AI replies and your team into one place, with a clear owner on every chat.",
    howItWorks: [
      {
        title: "Conversations arrive centrally",
        description: "WhatsApp and Instagram messages land in one unified list."
      },
      {
        title: "Assign and tag",
        description:
          "Assign each conversation to the right teammate, with tags for context."
      },
      {
        title: "Reply as a team",
        description:
          "Everyone works from the same number, so customers get one consistent conversation."
      }
    ],
    benefits: [
      {
        title: "Nothing falls through",
        description: "Every conversation has a clear owner and status."
      },
      {
        title: "Full context, always",
        description: "Customer profile, tags and history sit beside every chat."
      },
      {
        title: "Cross-channel view",
        description:
          "WhatsApp and Instagram conversations in the same workspace."
      }
    ],
    useCases: [
      {
        title: "Support teams",
        description:
          "Assign incoming chats so every customer has a clear owner."
      },
      {
        title: "Sales teams",
        description: "Hand qualified leads from AI straight to the right rep."
      },
      {
        title: "Agencies",
        description: "Manage multiple client inboxes from one login."
      }
    ],
    faq: [
      {
        question: "Can multiple agents use one WhatsApp number?",
        answer:
          "Yes. Your whole team replies from the same number and the same inbox."
      },
      {
        question: "Can I assign conversations to specific agents?",
        answer: "Yes — assign any conversation to a teammate from the inbox."
      }
    ],
    ctaLabel: "Try the shared inbox",
    related: ["ai-chatbot", "whatsapp-marketing", "analytics"]
  },
  {
    slug: "analytics",
    category: "Platform",
    visual: "analytics",
    name: "Analytics",
    howTitle: "How the analytics dashboard works",
    eyebrow: "Analytics",
    headline: "See what's working. Fix what isn't.",
    subheadline:
      "Track delivery, replies and template button clicks for every campaign, see which ads bring in chats, and see what Meta charges, across WhatsApp and Instagram.",
    seoTitle: "WhatsApp Analytics Dashboard | Whatching",
    seoDescription:
      "See conversations, broadcast results and what Meta is charging for your messages in one dashboard, across WhatsApp and Instagram.",
    problem:
      "Without shared reporting, teams argue about what's working instead of looking at the numbers.",
    solution:
      "Whatching brings campaign and conversation data into one dashboard, so every team can see delivery, replies and template button clicks at a glance.",
    howItWorks: [
      {
        title: "Data collects automatically",
        description: "Every campaign and conversation is tracked as it happens."
      },
      {
        title: "Explore by channel",
        description: "Filter by WhatsApp or Instagram, campaign, or agent."
      },
      {
        title: "Act on the trend",
        description: "Double down on what converts, fix what doesn't."
      }
    ],
    benefits: [
      {
        title: "Template button clicks",
        description: "See which buttons in your broadcasts people tap."
      },
      {
        title: "Channel comparison",
        description: "See WhatsApp and Instagram performance side by side."
      },
      {
        title: "Ad tracking",
        description:
          "See which Click-to-WhatsApp ads bring in each conversation."
      }
    ],
    useCases: [
      {
        title: "Campaign reporting",
        description:
          "Delivered, read and replied counts, plus template button clicks, for every broadcast."
      },
      {
        title: "Message costs",
        description: "See what Meta is charging for your messages, by category."
      },
      {
        title: "Ad spend decisions",
        description:
          "Know which Click-to-WhatsApp ads bring in conversations, so you know where to spend."
      }
    ],
    faq: [
      {
        question: "Can I see which ads bring in chats?",
        answer:
          "Yes — see which Click-to-WhatsApp ads bring in each conversation."
      },
      {
        question: "Does analytics cover Instagram too?",
        answer:
          "Yes — WhatsApp and Instagram performance both live in the same dashboard."
      }
    ],
    ctaLabel: "See your analytics",
    related: ["whatsapp-broadcast", "shared-inbox", "instagram-automation"]
  },
  {
    slug: "instagram-automation",
    category: "Instagram",
    visual: "instagram-comment",
    name: "Instagram Automation",
    howTitle: "How Instagram automation works",
    eyebrow: "Instagram",
    headline: "Turn Instagram engagement into conversations.",
    subheadline:
      "Reply to comments, DMs and story replies automatically, and hand interested customers to your team.",
    seoTitle: "Instagram Automation for DMs & Comments | Whatching",
    seoDescription:
      "Auto-reply to Instagram comments, send a DM when someone comments a keyword, automate DMs and run an AI agent on Instagram. Included in the Pro plan.",
    problem:
      "Instagram engagement is high, but most of it dies in the comments section — no one follows up, and no lead ever gets captured.",
    solution:
      "Whatching turns Instagram comments and DMs into automated conversations, capturing and qualifying leads without a manual reply.",
    howItWorks: [
      {
        title: "Engagement happens",
        description: "A comment, DM, or story reply comes in."
      },
      {
        title: "Automation responds",
        description:
          "Whatching replies automatically and opens a DM conversation."
      },
      {
        title: "Lead is captured",
        description:
          "Details are collected and the lead is qualified or handed to your team."
      }
    ],
    benefits: [
      {
        title: "Nothing gets missed",
        description: "Every comment and DM gets an instant, on-brand reply."
      },
      {
        title: "Leads captured automatically",
        description: "Turn engagement into a structured lead record."
      },
      {
        title: "One platform with WhatsApp",
        description: "Instagram and WhatsApp chats land in the same team inbox."
      }
    ],
    useCases: [
      {
        title: "Giveaways & promos",
        description: "Auto-DM everyone who comments a keyword."
      },
      {
        title: "Product enquiries",
        description: "Turn 'price?' comments into qualified conversations."
      },
      {
        title: "Content-driven leads",
        description: "Capture leads straight from high-engagement posts."
      }
    ],
    faq: [
      {
        question: "Does this work with Instagram's official platform?",
        answer: "Yes — automation runs through Meta's Instagram Messaging API."
      },
      {
        question: "Can a story reply start an automation?",
        answer:
          "Yes — a story reply can start an automated DM, the same as a comment or a new message."
      }
    ],
    ctaLabel: "Automate Instagram",
    related: [
      "instagram-comment-automation",
      "instagram-dm-automation",
      "shared-inbox"
    ]
  },
  {
    slug: "instagram-comment-automation",
    category: "Instagram",
    visual: "instagram-comment",
    name: "Instagram Comment Automation",
    howTitle: "How comment automation works",
    eyebrow: "Comment Automation",
    headline: "Every comment can become a conversation.",
    subheadline:
      "Trigger an automatic DM the moment someone comments a keyword on your post — no manual reply, no missed opportunity.",
    seoTitle: "Instagram Comment Auto Reply & Comment-to-DM | Whatching",
    seoDescription:
      "Auto-reply to Instagram comments and send a DM to anyone who comments a keyword on your post. Turn comments into conversations without replying by hand.",
    problem:
      '"Comment LINK and I\'ll send it to you" posts can bring in a lot of comments, and replying to each one by hand takes hours.',
    solution:
      "Whatching watches your posts for keyword comments and sends a DM straight away, however many people comment.",
    howItWorks: [
      {
        title: "Set a trigger keyword",
        description: "Choose the word or phrase that starts the automation."
      },
      {
        title: "Comment is detected",
        description: "Whatching detects the keyword the moment it's posted."
      },
      {
        title: "DM sent automatically",
        description:
          '"Hey! Here\'s the link you asked for…" — instantly, every time.'
      }
    ],
    benefits: [
      {
        title: "Instant response",
        description: "No one waits hours for a reply in the comments."
      },
      {
        title: "Busy posts covered",
        description:
          "Every keyword comment gets its DM, without anyone replying by hand."
      },
      {
        title: "The chat keeps going",
        description:
          "The DM can lead into a chatbot that asks for the customer's details."
      }
    ],
    useCases: [
      {
        title: '"Comment LINK" posts',
        description: "Auto-send the link the moment someone comments."
      },
      {
        title: "Giveaways",
        description: "Enter commenters into a flow automatically."
      },
      {
        title: "Product drops",
        description: 'Reply to "price?" or "available?" comments instantly.'
      }
    ],
    faq: [
      {
        question: "Can I use multiple keywords per post?",
        answer: "Yes — different keywords can trigger different automated DMs."
      },
      {
        question: "What happens after the DM is sent?",
        answer:
          "Yes. The DM can lead into a chatbot that asks questions and collects the customer's details."
      }
    ],
    ctaLabel: "Automate comments",
    related: [
      "instagram-dm-automation",
      "instagram-automation",
      "whatsapp-flows"
    ]
  },
  {
    slug: "instagram-dm-automation",
    category: "Instagram",
    visual: "instagram-flow",
    name: "Instagram DM Automation",
    howTitle: "How Instagram DM automation works",
    eyebrow: "DM Flows",
    headline: "Answer every Instagram DM straight away.",
    subheadline:
      "Welcome, qualify and collect details from every Instagram DM, then hand the chat to your team — without anyone typing the first reply.",
    seoTitle: "Instagram DM Automation | Whatching",
    seoDescription:
      "Automate Instagram DMs with a no-code flow builder: welcome new messages, ask questions, collect details and hand the chat to your team.",
    problem:
      "Instagram DMs are where interested buyers land first — but without automation, a lot of that intent goes cold before anyone replies.",
    solution:
      "Design DM flows that welcome, ask what a customer needs, qualify them, and hand the conversation to your team to close.",
    howItWorks: [
      {
        title: "Conversation starts",
        description: "A DM, story reply, or comment automation opens the chat."
      },
      {
        title: "Flow qualifies the lead",
        description:
          "Ask what they want, what they are interested in, and how to reach them."
      },
      {
        title: "Hand over to your team",
        description:
          "Your team picks up in the shared inbox with the whole chat in view."
      }
    ],
    benefits: [
      {
        title: "Consistent first response",
        description: "Every DM gets an immediate, on-brand welcome."
      },
      {
        title: "Structured qualification",
        description: "Sales gets context, not a cold DM."
      },
      {
        title: "Same inbox as WhatsApp",
        description:
          "Instagram DMs land in the same team inbox as your WhatsApp chats."
      }
    ],
    useCases: [
      {
        title: "New follower welcome",
        description: "Greet and guide new followers who DM you."
      },
      {
        title: "Product interest",
        description: "Ask what they're looking for before your team steps in."
      },
      {
        title: "Support triage",
        description:
          "Answer common support DMs automatically and hand the rest to your team."
      }
    ],
    faq: [
      {
        question: "Can Instagram DM flows collect a phone number?",
        answer:
          "Yes — a flow can ask for a phone number like any other question."
      },
      {
        question: "Do I need a developer to build a DM flow?",
        answer:
          "No. DM flows use the same drag-and-drop chatbot builder you use for WhatsApp."
      }
    ],
    ctaLabel: "Build an Instagram DM flow",
    related: ["instagram-comment-automation", "whatsapp-flows", "shared-inbox"]
  }
];

export const featureBySlug = (slug: string) =>
  features.find((f) => f.slug === slug);
