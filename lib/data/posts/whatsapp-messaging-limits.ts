import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-messaging-limits",
  title:
    "WhatsApp Business message limit per day: Meta's tiers and how to raise them",
  seoTitle: "WhatsApp Business message limit per day: 2026 tiers",
  excerpt:
    "How many customers you can message on the WhatsApp Business Platform in 24 hours, Meta's current tiers from 250 to unlimited, and what moves you up.",
  seoDescription:
    "The WhatsApp Business message limit per day explained: Meta's tiers from 250 to unlimited, what counts, how quality affects it and how to raise your limit.",
  category: "Setup",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "whatsapp business message limit per day",
  summary:
    "On the WhatsApp Business Platform, the daily limit is the number of different customers you can message outside a customer service window in a rolling 24 hours. New business portfolios start at 250. Verifying your business, or sending 2,000 delivered high-quality template messages in 30 days, raises it to 2,000. Meta then lifts it automatically to 10,000, 100,000 and unlimited.",
  blocks: [
    {
      type: "p",
      text: "If you send WhatsApp offers, reminders or updates through the official platform, Meta caps how many different people you can start conversations with each day. Meta calls this the messaging limit. It applies to the WhatsApp Business Platform, the API that providers like Whatching use. The free WhatsApp Business app has its own rules, which this guide doesn't cover."
    },
    {
      type: "p",
      text: "Everything below comes from Meta's messaging limits page, last updated on 21 May 2026, and the related Meta pages listed at the end. If you haven't connected a number yet, start with [how to get the WhatsApp Business API](/blog/how-to-get-whatsapp-business-api)."
    },
    {
      type: "h2",
      text: "What is the WhatsApp Business message limit per day?"
    },
    {
      type: "p",
      text: "It is the maximum number of unique WhatsApp users your business can deliver messages to outside a customer service window, within a moving 24-hour period. A customer service window is the 24 hours after a customer last messaged or called you."
    },
    {
      type: "p",
      text: "Three details in that definition matter in practice:"
    },
    {
      type: "ul",
      items: [
        "**It counts people.** Meta counts unique phone numbers, so three messages to the same customer in a day take up one place in your limit.",
        "**Replies inside a customer service window don't count.** If a customer messaged you in the last 24 hours, your messages to them fall outside the limit.",
        "**The 24 hours roll.** There is no midnight reset. The limit always looks back over the previous 24 hours."
      ]
    },
    {
      type: "p",
      text: "Outside a customer service window you can only send templates, which are messages written in advance and approved by Meta. So in practice the limit caps how many people receive your template messages, such as broadcasts, reminders and follow-ups, in any 24 hours."
    },
    {
      type: "h2",
      text: "What are the current WhatsApp messaging limit tiers?"
    },
    {
      type: "p",
      text: "Newly created business portfolios have a messaging limit of 250. Meta lists four higher levels, and how you reach each one:"
    },
    {
      type: "table",
      caption:
        "Meta's messaging limits, from its messaging limits page (updated 21 May 2026)",
      head: ["Messaging limit", "How you reach it"],
      rows: [
        ["250", "Starting limit for newly created business portfolios"],
        ["2,000", "By completing a scaling path"],
        ["10,000", "Via automatic scaling"],
        ["100,000", "Via automatic scaling"],
        ["Unlimited", "Via automatic scaling"]
      ]
    },
    {
      type: "p",
      text: "A business portfolio is the account in Meta Business Suite that holds your business's WhatsApp accounts and phone numbers. Your limit is set on the portfolio, as the next section explains."
    },
    {
      type: "h2",
      text: "Is the limit per phone number or per business?"
    },
    {
      type: "p",
      text: "Per business. Since 7 October 2025, Meta calculates and sets messaging limits at the business portfolio level, and all business phone numbers in the portfolio share them. Before that date, each number had its own limit."
    },
    {
      type: "p",
      text: "Sharing has two effects. A new number you add gets the portfolio's current limit straight away. And one busy number can use up the whole portfolio's limit for that 24-hour period, leaving nothing for your other numbers."
    },
    {
      type: "p",
      text: "For example, Wanderly Travels, a fictional travel agency, has a sales number and a support number in one portfolio with a 2,000 limit. If the sales number sends a holiday offer template to 2,000 different past customers in the morning, the support number can't send templates to anyone else outside a customer service window until those 24 hours pass. Support can still reply to customers who message in."
    },
    {
      type: "h2",
      text: "How do you increase your WhatsApp messaging limit?"
    },
    {
      type: "p",
      text: "You move from 250 to 2,000 by completing one of Meta's scaling paths. After that, Meta raises the limit on its own whenever you meet its automatic scaling criteria."
    },
    {
      type: "h3",
      text: "Step 1: complete a scaling path to reach 2,000"
    },
    {
      type: "p",
      text: "Any one of these three counts:"
    },
    {
      type: "ul",
      items: [
        "**Verify your business** through Meta's business verification in Meta Business Suite.",
        "**Have your partner verify your business**, if you were onboarded by a partner that offers this.",
        "**Send 2,000 delivered messages** outside customer service windows to unique WhatsApp users within a 30-day moving period, using templates with a high quality rating."
      ]
    },
    {
      type: "p",
      text: "When you complete one, Meta analyses your message quality and approves or denies the increase. If it approves, Meta raises your limit to 2,000 immediately and tells you by email. If it denies, your limit stays where it is, and Meta's alert names the other routes you can try, such as the 2,000 high-quality messages or verifying your identity."
    },
    {
      type: "h3",
      text: "Step 2: automatic scaling beyond 2,000"
    },
    {
      type: "p",
      text: "Once your portfolio is on 2,000, Meta checks two criteria before each further increase:"
    },
    {
      type: "ul",
      items: [
        "You are sending high-quality messages across all of your business phone numbers and templates.",
        "In the last 7 days, your business has used at least half of your current messaging limit."
      ]
    },
    {
      type: "p",
      text: "When both are true, Meta raises the portfolio's limit by one level within 6 hours. On the 2,000 limit, half is 1,000 unique customers, so a business that never gets near that number stays on 2,000. That is fine if 2,000 covers what you send."
    },
    {
      type: "h2",
      text: "How does quality rating affect your messaging limit?"
    },
    {
      type: "p",
      text: "Quality decides whether you move up. Meta judges message quality from how WhatsApp users received your messages over the past seven days, with recent days counting more. It uses signals such as blocks, reports, mutes, archives and the reasons people give when they block you."
    },
    {
      type: "p",
      text: "Since 7 October 2025, a drop in your phone number's quality rating no longer lowers your messaging limit. Before that, a number flagged for low quality for 7 days lost a level. Low quality still holds you back, because automatic scaling needs high-quality messages, and poor feedback can get templates paused."
    },
    {
      type: "p",
      text: "Each template also has its own quality rating, shown in WhatsApp Manager, Meta's tool for your WhatsApp account:"
    },
    {
      type: "table",
      caption: "Template quality ratings in WhatsApp Manager",
      head: ["Rating", "What Meta says it means"],
      rows: [
        ["High quality", "Little to no negative feedback from WhatsApp users"],
        [
          "Medium quality",
          "Negative feedback from multiple users, or low read rates. The template may soon be paused or disabled"
        ],
        [
          "Low quality",
          "Negative feedback from multiple users, or low read rates. The template can still be sent but is in danger of being paused or disabled soon"
        ],
        [
          "Quality pending",
          "No feedback or read-rate data yet. New templates start here"
        ]
      ]
    },
    {
      type: "p",
      text: "Meta's own guidance for high-quality messages is short:"
    },
    {
      type: "ul",
      items: [
        "Follow the WhatsApp Business Messaging Policy.",
        "Only message people who have opted in to hear from your business.",
        "Make messages personal and useful to the person receiving them.",
        "Avoid open-ended welcome or introductory messages.",
        "Avoid sending too many messages a day.",
        "Keep the content and length suited to the purpose."
      ]
    },
    {
      type: "h2",
      text: "Are there other limits on WhatsApp business messages?"
    },
    {
      type: "p",
      text: "Yes. Two more mechanisms can hold back messages even when you are within your messaging limit."
    },
    {
      type: "h3",
      text: "Per-customer limits on marketing messages"
    },
    {
      type: "p",
      text: "WhatsApp may limit how many marketing template messages one person receives from all businesses in a period, when that person seems less likely to engage. It bases this on their recent marketing read rate and how many messages they already have from friends, family and businesses. A message held back this way fails with error code 131049, and Meta advises waiting at least 24 hours before trying that customer again. Marketing messages sent inside a customer service window don't count towards this limit."
    },
    {
      type: "h3",
      text: "Pacing for large campaigns"
    },
    {
      type: "p",
      text: "Meta is gradually rolling out business portfolio pacing. It applies to portfolios that have sent fewer than 500,000 template messages across all their numbers in the past 365 days, and to portfolios being monitored for suspicious activity. When such a portfolio sends a large number of templates in a short time, the first set goes out normally. The rest are held and released in batches while Meta watches the feedback, and if that feedback suggests suspicious activity, the held messages are dropped."
    },
    {
      type: "h2",
      text: "How do you check your current messaging limit?"
    },
    {
      type: "p",
      text: "Open WhatsApp Manager and go to Account tools, then Messaging limits. The panel shows your portfolio's current limit and scaling information. When you connect a number through a provider like Whatching, you keep full access to WhatsApp Manager, so you can check it whenever you like."
    },
    {
      type: "h2",
      text: "How do you plan broadcasts around your limit?"
    },
    {
      type: "ul",
      items: [
        "**Count unique people.** A list of 600 customers who haven't messaged you in the last 24 hours needs a limit above 600, or the send split across days.",
        "**Make use of replies.** Customers who message you open a customer service window, and your replies to them sit outside the limit.",
        "**Send only to people who opted in.** Meta asks for opt-in, and unwanted messages are what lead to the blocks and reports that count against your quality.",
        "**Watch template ratings.** If a template slips to medium or low quality, stop using it and rewrite it before your next send."
      ]
    },
    {
      type: "p",
      text: "Whatching sends [broadcasts](/features/whatsapp-broadcast) with Meta-approved templates and includes [analytics](/features/analytics) for your WhatsApp messaging. Each delivered template is charged by Meta at the rate for its category, separately from your plan. See [Meta's charges](/pricing#meta-charges) on our pricing page for current rates."
    },
    {
      type: "p",
      text: "If you'd like help getting started, fill in the demo form for a free onboarding call, where the Whatching team helps you connect your number."
    },
    { type: "embed", name: "demo" },
    {
      type: "p",
      text: "Or start on your own: Whatching's Pro plan is free for 7 days, with no card needed. Plans are ₹2,499 (Basic) or ₹3,999 (Pro) a month plus 18% GST after that."
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "How many WhatsApp messages can a business send per day?",
      answer:
        "Meta's daily limit counts unique customers. It caps how many different people you can message outside a customer service window in a rolling 24 hours: 250 for a new business portfolio, then 2,000, 10,000, 100,000 or unlimited. Replies to customers who messaged you in the last 24 hours don't count towards it."
    },
    {
      question: "Does the WhatsApp messaging limit reset at midnight?",
      answer:
        "No. Meta measures the limit over a moving 24-hour period, so it always looks back over the last 24 hours. If you reached your limit at 10 am on 1 October 2026, places free up from 10 am on 2 October 2026 as each message passes the 24-hour mark."
    },
    {
      question: "Do I need business verification to raise my WhatsApp limit?",
      answer:
        "Not necessarily. Verification is one of three scaling paths to 2,000. The others are having your partner verify you, if your provider offers it, or sending 2,000 delivered messages outside customer service windows to unique customers within 30 days using high-quality templates. Verification is also required for the blue checkmark."
    },
    {
      question: "Can a low quality rating reduce my messaging limit?",
      answer:
        "Not since 7 October 2025. Meta says that if your phone number's quality rating drops, its messaging limit is not downgraded. Low quality still matters, because automatic scaling needs high-quality messages, and templates that collect negative feedback can be paused or disabled."
    },
    {
      question: "Does adding another phone number give me a bigger limit?",
      answer:
        "No. The limit belongs to your business portfolio, and every number in it shares the same limit. A new number gets the portfolio's current limit straight away, but it doesn't add to it, and one busy number can use the whole limit for that 24-hour period."
    },
    {
      question: "What does WhatsApp error 131049 mean?",
      answer:
        "It means WhatsApp didn't deliver a marketing template because the customer reached their per-user marketing limit, or because you retried them too often. Meta advises waiting at least 24 hours before resending to that person. It doesn't affect your marketing messages to other customers."
    }
  ],
  sources: [
    {
      label: "Meta: Messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits"
    },
    {
      label: "Meta: Upcoming changes to messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/upcoming-messaging-limits-changes"
    },
    {
      label: "Meta: Template quality rating",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality"
    },
    {
      label:
        "Meta: Send messages (customer service windows and message quality)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages"
    },
    {
      label: "Meta: Per-user marketing template message limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits"
    },
    {
      label: "Meta: Business portfolio pacing",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/portfolio-pacing"
    }
  ],
  related: [
    "how-to-get-whatsapp-business-api",
    "whatsapp-business-api-pricing-india",
    "whatsapp-green-tick-verification"
  ],
  relatedFeatures: ["whatsapp-broadcast", "analytics", "whatsapp-marketing"]
};

export default post;
