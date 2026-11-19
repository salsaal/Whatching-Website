import type { BlogPost } from "@/lib/data/blog";

// Meta facts checked on Meta's own pages on 19 November 2026.
const META_ABOUT =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform";
const META_PRICING =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing";
const META_ACCOUNTS =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution";
const META_COEX =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/";

const post: BlogPost = {
  slug: "how-to-choose-whatsapp-api-provider",
  title: "How to choose a WhatsApp Business API provider in India",
  seoTitle: "Best WhatsApp Business API provider in India: checklist",
  excerpt:
    "A neutral checklist for Indian businesses comparing WhatsApp API providers: official platform, Meta charges, GST, limits, Instagram, AI, trial terms, support and number ownership.",
  seoDescription:
    "How to pick the best WhatsApp Business API provider in India: a checklist covering Meta charges, GST, limits, Instagram, AI, trials, support and ownership.",
  category: "Comparisons",
  cover: {
    big: "10 checks",
    small: "before you choose a WhatsApp API provider"
  },
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "best whatsapp business api provider india",
  summary:
    "The best WhatsApp Business API provider in India is the one whose full monthly cost and features fit your business. Check that it uses Meta's official platform, what it adds to Meta's message charges, the plan price with GST, contact and team limits, Instagram support, how AI is counted, trial and contract terms, support, and who controls your number and data.",
  blocks: [
    {
      type: "p",
      text: "Most WhatsApp API providers in India offer broadcasts, a shared inbox and chatbots, so feature lists start to look the same. The differences show up in the monthly bill, the limits and the terms. This checklist gives you the questions to ask any provider, what a good answer looks like, and where to check it yourself. It does not rank providers."
    },
    {
      type: "h2",
      text: "What should you check before choosing a WhatsApp API provider?"
    },
    {
      type: "table",
      caption:
        "Ask every provider the same questions and write the answers side by side.",
      head: ["Check", "What to ask", "Where to verify"],
      rows: [
        [
          "Official platform",
          "Do you connect my number through Meta's WhatsApp Business Platform?",
          "Provider's site and Meta's platform docs"
        ],
        [
          "Meta charges",
          "What do you charge per message, compared with Meta's rate?",
          "Provider's rate card and Meta's rate card"
        ],
        [
          "Plan price and GST",
          "Is the price shown before or after GST? Which features are add-ons?",
          "Provider's pricing page"
        ],
        [
          "Limits",
          "How many contacts, numbers and team members are included?",
          "Provider's pricing page"
        ],
        [
          "Instagram",
          "Which Instagram automations are included, and on which plan?",
          "Provider's pricing and feature pages"
        ],
        [
          "AI",
          "How is AI usage counted, and what happens when it runs out?",
          "Provider's pricing page"
        ],
        [
          "Trial and contract",
          "How long is the trial? Is a card needed? Monthly or yearly? Refunds?",
          "Provider's pricing page and terms"
        ],
        [
          "Support",
          "What help do I get to set up, and how do I reach support?",
          "Provider's pricing page"
        ],
        [
          "Number and data",
          "Who owns the WhatsApp account? What can I export if I leave?",
          "Meta's account docs and the provider's terms"
        ]
      ]
    },
    {
      type: "h2",
      text: "Is the provider on Meta's official WhatsApp Business Platform?"
    },
    {
      type: "p",
      text: `Meta's WhatsApp Business Platform, through its Cloud API, is how businesses send messages at scale, use approved templates and manage numbers ([Meta's platform overview](${META_ABOUT})). Ask the provider to confirm it connects your number to this platform, and be careful with tools that send bulk messages through the regular WhatsApp app instead.`
    },
    {
      type: "h2",
      text: "Does the provider add a markup to Meta's message charges?"
    },
    {
      type: "p",
      text: `Meta charges for each delivered template message. The rate depends on the message category and the customer's country. Meta's INR rate card for India, effective 1 October 2026, lists ₹0.8631 per marketing message and ₹0.115 per utility, authentication or service message. Each business number gets 1,000 free service messages a month ([Meta's pricing page](${META_PRICING})).`
    },
    {
      type: "p",
      text: "Some providers pass these charges on at Meta's rate. Others publish their own per-message rates, which can be higher. Ask for the provider's rate for each category and compare it with Meta's rate card. For a business that sends many marketing messages, a few paise per message can add up to more than the plan price. Our guide to [WhatsApp Business API pricing in India](/blog/whatsapp-business-api-pricing-india) explains the categories in more detail."
    },
    { type: "h2", text: "What will the plan cost each month with GST?" },
    {
      type: "p",
      text: "Write down the full monthly cost for the set-up you need. Check whether the price shown includes GST. At 18%, a ₹2,000 plan becomes ₹2,360. Then add anything sold separately, such as a chatbot builder, AI, extra team seats or extra numbers. Two plans with similar headline prices can end up far apart once add-ons are counted."
    },
    {
      type: "h2",
      text: "How many contacts, numbers and team members are included?"
    },
    {
      type: "p",
      text: "Plans often limit contacts, WhatsApp numbers or team logins. Count the people who will answer chats today and in six months, and check the price of each extra seat. If you plan to run more than one number, for example for two branches, check whether that needs a higher plan or an add-on."
    },
    { type: "h2", text: "Does it cover Instagram as well as WhatsApp?" },
    {
      type: "p",
      text: "If customers reach you through Instagram comments and DMs, ask which Instagram features are included: comment replies, sending a DM to people who comment, story replies, and whether chatbots and AI work on Instagram too. Check which plan includes them and whether Instagram chats appear in the same inbox as WhatsApp."
    },
    { type: "h2", text: "What can the AI do, and how is usage counted?" },
    {
      type: "p",
      text: "Providers count AI usage in different units, such as AI messages, credits or tokens, so compare what each allowance covers. Ask what the AI learns from (your documents, website, FAQs), whether it hands chats to a person, what happens when the allowance runs out, and what extra usage costs. Test it with real customer questions during the trial."
    },
    { type: "h2", text: "What are the trial and contract terms?" },
    {
      type: "ul",
      items: [
        "How long is the free trial, and which plan does it cover?",
        "Do you need to add a card to start?",
        "Is billing monthly, quarterly or yearly, and how big is the discount for paying upfront?",
        "Can you cancel at any time, and are unused months or prepaid credits refunded?",
        "Do upgrades and downgrades take effect straight away or at the end of the billing cycle?"
      ]
    },
    {
      type: "p",
      text: "Yearly billing usually lowers the monthly price, and it also ties you in for longer. If you are new to the API, a monthly plan lets you test before you commit."
    },
    { type: "h2", text: "What support and onboarding do you get?" },
    {
      type: "p",
      text: "Ask how you will be helped through set-up: a call, documents or a paid onboarding package. Check which support channels and hours are included on your plan, and whether a named account manager is only offered on higher plans."
    },
    { type: "h2", text: "Who owns your WhatsApp number and your data?" },
    {
      type: "p",
      text: `Meta changed how WhatsApp accounts work in 2026. Under its new account model, the phone number sits in a WhatsApp account owned by your business, which you can share with more than one provider. Templates and billing sit in a separate messaging account for each provider, so templates do not move automatically when you change provider ([Meta's guide to the new account model](${META_ACCOUNTS})).`
    },
    {
      type: "ul",
      items: [
        "Confirm that the WhatsApp account and the Meta business portfolio are in your business's name.",
        "Ask what you can export if you leave: contacts, chat history and reports.",
        "Ask how templates would be moved, since Meta says copied templates restart at baseline quality.",
        `If you use the WhatsApp Business app, ask whether you can keep using it on the same number. Meta allows this for app users who connect through an eligible provider, with history kept in sync and a fixed sending speed of 20 messages a second ([Meta's coexistence docs](${META_COEX})). Our [coexistence guide](/blog/whatsapp-coexistence) covers how it works.`
      ]
    },
    { type: "h2", text: "Which features might you need later?" },
    {
      type: "p",
      text: "Think a year ahead. Common needs that not every provider has include automatic chat routing, a CRM or sales pipeline, store integrations such as Shopify, abandoned-cart messages, report export, WhatsApp Forms, a mobile app and white-label options for agencies. If any of these matter, ask now, since switching later takes work."
    },
    { type: "h2", text: "How does Whatching measure against this checklist?" },
    {
      type: "p",
      text: "So you can compare like for like, here is where Whatching stands on each point."
    },
    {
      type: "table",
      head: ["Check", "Whatching"],
      rows: [
        [
          "Official platform",
          "Built on Meta's official WhatsApp Business Platform."
        ],
        [
          "Meta charges",
          "Passed on at 0% markup. See the [current rates](/pricing#meta-charges)."
        ],
        [
          "Plan price and GST",
          "Basic ₹2,499 and Pro ₹3,999 a month, plus 18% GST. Enterprise is custom."
        ],
        [
          "Limits",
          "Basic: 10,000 contacts, 1 number, owner + 2 team members. Pro: 25,000 contacts, up to 2 numbers, owner + 5. Enterprise: unlimited team members and more numbers."
        ],
        [
          "Instagram",
          "On Pro: comment replies, comment-to-DM, story replies and an Instagram AI agent."
        ],
        [
          "AI",
          "An [AI agent](/features/ai-chatbot) that answers from your documents, website and FAQs and hands chats to a person. AI usage included: 1M on Basic, 3M on Pro, unlimited on Enterprise, with top-ups."
        ],
        [
          "Trial and contract",
          "Free 7-day trial of Pro, no card needed. Monthly billing only; no yearly plan."
        ],
        [
          "Support",
          "Free onboarding call when you fill in the form on the [demo page](/demo). Dedicated account manager and priority support on Enterprise."
        ],
        [
          "Coexistence",
          "You can keep using the WhatsApp Business app on the same number."
        ],
        [
          "Not available today",
          "Automatic chat routing, a CRM or sales pipeline, store integrations and abandoned-cart recovery, back-in-stock alerts, report export, response-time reports, conversion tracking, WhatsApp Forms (coming later), white-label, a mobile app and yearly billing."
        ]
      ]
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "What is the best WhatsApp Business API provider in India?",
      answer:
        "There is no single best provider for every business. The right one connects you through Meta's official platform, has a total monthly cost you are comfortable with after GST, add-ons and message charges, and includes the limits and features you need. Use the checklist above and compare two or three providers on the same points."
    },
    {
      question: "Do all providers charge the same for WhatsApp messages?",
      answer:
        "No. Meta sets the base rate for each message category and country. Some providers pass Meta's rate on as it is, and others publish their own higher rates. Ask each provider for its per-message rate and compare it with Meta's rate card."
    },
    {
      question: "Can I change provider later without losing my number?",
      answer:
        "Under Meta's new account model, your business owns the WhatsApp account that holds the number and can share it with a new provider. Meta says the number does not move and conversations carry on. Templates need to be recreated or copied, and copied templates restart at baseline quality."
    },
    {
      question: "Is GST charged on WhatsApp API plans?",
      answer:
        "Check each pricing page. Some show prices plus GST or taxes, and some do not say. Ask whether GST applies to the plan, to add-ons and to message charges, and work out the total before you compare."
    },
    {
      question:
        "Can I keep using the WhatsApp Business app after moving to the API?",
      answer:
        "Meta allows WhatsApp Business app users to connect the same number to the platform through an eligible provider and keep using the app for one-to-one chats, with history kept in sync. Ask your provider whether it supports this."
    },
    {
      question: "Should I choose monthly or yearly billing?",
      answer:
        "Yearly billing usually costs less per month but commits you for longer, and some providers do not refund unused time. Monthly billing costs more per month at some providers but lets you test the tool with your own customers first."
    }
  ],
  sources: [
    { label: "Meta: about the WhatsApp Business Platform", url: META_ABOUT },
    {
      label: "Meta: WhatsApp Business Platform pricing and INR rate card",
      url: META_PRICING
    },
    {
      label: "Meta: updates to WhatsApp Business accounts (new account model)",
      url: META_ACCOUNTS
    },
    {
      label: "Meta: onboard WhatsApp Business app users (coexistence)",
      url: META_COEX
    }
  ],
  related: [
    "whatching-vs-interakt",
    "whatching-vs-aisensy",
    "whatching-vs-wati"
  ],
  relatedFeatures: [
    "whatsapp-broadcast",
    "ai-chatbot",
    "shared-inbox",
    "instagram-automation"
  ]
};

export default post;
