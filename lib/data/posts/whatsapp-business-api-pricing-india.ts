import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-business-api-pricing-india",
  title:
    "WhatsApp Business API pricing in India: Meta's rates, GST and worked examples",
  seoTitle: "WhatsApp Business API pricing in India: 2026 rates",
  excerpt:
    "What Meta charges per WhatsApp message in India, which messages are free, how GST applies to your plan, and what a small business pays in a typical month.",
  seoDescription:
    "WhatsApp Business API pricing in India: Meta's per-message rates from 1 October 2026, what's free, 18% GST on your plan and worked monthly cost examples.",
  category: "Pricing",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "whatsapp business api pricing india",
  summary:
    "In India, Meta charges for each delivered WhatsApp Business API message by type. As of 1 October 2026, marketing messages cost ₹0.8631 and utility, authentication and service messages cost ₹0.1150 each. Messages customers send you are free, every number gets 1,000 free service messages a month, and your software provider's plan is billed separately.",
  blocks: [
    {
      type: "p",
      text: "A WhatsApp Business API bill in India has two parts. One is Meta's charge for the messages you send. The other is the monthly plan for the software you use to send them, such as Whatching. This guide explains both in plain language, with Meta's current rates, what is free, how GST fits in and three worked examples you can compare with your own business."
    },
    {
      type: "h2",
      text: "How does Meta charge for WhatsApp Business API messages?"
    },
    {
      type: "p",
      text: "Meta charges for each message your business sends that is delivered to a customer. Since 1 July 2025 the charge has been per message, replacing the older system that charged per conversation. You pay nothing for messages that are sent but never delivered, and nothing for messages customers send to you."
    },
    {
      type: "p",
      text: "The price of each message depends on two things: its category and the country code of the phone number receiving it. For an Indian business messaging customers on +91 numbers, the India rates apply. A few terms come up again and again:"
    },
    {
      type: "ul",
      items: [
        "**Template**: a message you write in advance and Meta approves before you can send it. Templates are the only messages you can send to start a chat with a customer.",
        "**24-hour window**: the 24 hours after a customer last messaged you. Inside it you can reply with normal messages. Meta calls this the customer service window.",
        "**API**: the official connection that lets software send and receive WhatsApp messages on your number."
      ]
    },
    {
      type: "p",
      text: "Templates fall into three categories. **Marketing** templates carry offers, announcements and anything promotional. **Utility** templates are updates about something the customer already has with you, such as a booking or an order. **Authentication** templates carry one-time login codes. Normal replies you type inside the 24-hour window are **service** messages, whether a person or a third-party AI tool writes them."
    },
    {
      type: "h2",
      text: "What are Meta's WhatsApp rates in India?"
    },
    {
      type: "p",
      text: "As of 1 October 2026, a marketing message to an Indian number costs ₹0.8631 and a utility, authentication or service message costs ₹0.1150. These are Meta's list rates in rupees for each delivered message."
    },
    {
      type: "table",
      caption:
        "Meta's rates for messages to Indian (+91) numbers, effective 1 October 2026",
      head: ["Category", "What it is for", "Rate per delivered message"],
      rows: [
        [
          "Marketing",
          "Offers, launches, festive greetings, re-engagement",
          "₹0.8631"
        ],
        [
          "Utility",
          "Booking confirmations, order updates, payment reminders",
          "₹0.1150"
        ],
        ["Authentication", "One-time passwords and login codes", "₹0.1150"],
        [
          "Authentication-international",
          "Login codes from some businesses based outside India",
          "₹2.4971"
        ],
        [
          "Service",
          "Normal replies inside the 24-hour window",
          "₹0.1150 (first 1,000 a month free per number)"
        ]
      ]
    },
    { type: "embed", name: "meta-calculator" },
    {
      type: "p",
      text: "The authentication-international rate is unlikely to affect an Indian business messaging Indian customers. Meta charges it only when a business has become eligible by sending a very high volume of messages outside the 24-hour window (more than 750,000 in a moving 30-day period, to countries that have this rate) and its main business location is in a different country from the customer. Meta always charges a business the domestic rate for customers in its own country."
    },
    {
      type: "p",
      text: "Messages to customers abroad are charged at that country's rate, which is often higher than India's. Meta publishes the full rate card on its pricing page, along with volume tiers that lower the utility and authentication rate once a business sends large numbers of those messages in a month."
    },
    {
      type: "h2",
      text: "Which WhatsApp Business API messages are free?"
    },
    {
      type: "p",
      text: "Messages customers send you are always free, and several kinds of message you send are free too. Here is the full list:"
    },
    {
      type: "ul",
      items: [
        "**Messages from customers.** Meta only charges for messages from businesses to customers.",
        "**The first 1,000 service messages each month, per number.** From 1 October 2026 every business phone number gets 1,000 free service messages a month. Meta charges from the 1,001st. Unused free messages do not roll over to the next month.",
        "**Messages in a free entry point window.** When someone messages you from a Click-to-WhatsApp ad on the WhatsApp Android or iOS app and you reply within 24 hours, your reply is free and opens a free window that can stay open for up to 7 days. While it is open, Meta does not charge for marketing, utility, authentication or service messages to that person.",
        "**Messages that are not delivered.** Meta charges only for delivered messages."
      ]
    },
    {
      type: "callout",
      title: "What changed on 1 October 2026",
      text: "Service messages had been free since 1 November 2024, and utility templates sent inside the 24-hour window had been free since 1 July 2025. From 1 October 2026 Meta charges for both again, with the new free allowance of 1,000 service messages a month per number."
    },
    {
      type: "h2",
      text: "How does 18% GST apply to WhatsApp API pricing?"
    },
    {
      type: "p",
      text: "Whatching's plan prices are listed before GST, and 18% GST is added to the plan. Basic at ₹2,499 a month becomes ₹2,948.82 with GST (₹2,499 + ₹449.82). Pro at ₹3,999 a month becomes ₹4,718.82 (₹3,999 + ₹719.82)."
    },
    {
      type: "p",
      text: "Meta's charges are a separate line. The sums in this guide use Meta's list rates and leave out any tax on those charges, so check your invoice for how tax is applied to them."
    },
    {
      type: "h2",
      text: "What does a small business pay each month? Three worked examples"
    },
    {
      type: "p",
      text: "Your monthly cost is the plan price with GST plus Meta's charges for that month's messages. In the three examples below, the totals range from ₹3,403.37 to ₹8,286.22."
    },
    {
      type: "p",
      text: "The examples use Wanderly Travels, a fictional travel agency with one WhatsApp number. The message counts are made up to show the arithmetic, and your own numbers will be different."
    },
    {
      type: "h3",
      text: "Example 1: a busy month on the Basic plan"
    },
    {
      type: "p",
      text: "Wanderly sends two holiday offers to 1,000 customers each, 600 booking reminders and 1,500 replies to customer questions."
    },
    {
      type: "table",
      caption: "Example only: Wanderly Travels, Basic plan, one number",
      head: ["Item", "Working", "Amount"],
      rows: [
        ["Basic plan with 18% GST", "₹2,499 + ₹449.82", "₹2,948.82"],
        ["Marketing templates", "2,000 × ₹0.8631", "₹1,726.20"],
        ["Utility templates", "600 × ₹0.1150", "₹69.00"],
        ["Service replies", "(1,500 − 1,000 free) × ₹0.1150", "₹57.50"],
        ["Meta charges", "₹1,726.20 + ₹69.00 + ₹57.50", "₹1,852.70"],
        ["**Month's total**", "₹2,948.82 + ₹1,852.70", "**₹4,801.52**"]
      ]
    },
    {
      type: "h3",
      text: "Example 2: a quiet month on the Basic plan"
    },
    {
      type: "p",
      text: "In the off season Wanderly sends one offer to 500 customers, 200 booking reminders and 800 replies."
    },
    {
      type: "table",
      caption: "Example only: Wanderly Travels, Basic plan, one number",
      head: ["Item", "Working", "Amount"],
      rows: [
        ["Basic plan with 18% GST", "₹2,499 + ₹449.82", "₹2,948.82"],
        ["Marketing templates", "500 × ₹0.8631", "₹431.55"],
        ["Utility templates", "200 × ₹0.1150", "₹23.00"],
        ["Service replies", "800, all inside the 1,000 free", "₹0.00"],
        ["Meta charges", "₹431.55 + ₹23.00", "₹454.55"],
        ["**Month's total**", "₹2,948.82 + ₹454.55", "**₹3,403.37**"]
      ]
    },
    {
      type: "h3",
      text: "Example 3: the Pro plan with Click-to-WhatsApp ads"
    },
    {
      type: "p",
      text: "Wanderly moves to Pro and runs Click-to-WhatsApp ads. It sends 4,000 marketing templates to its regular list, 1,000 utility templates and 900 replies in total. It also sends 300 follow-up templates to people who messaged from an ad, all while their free window is open."
    },
    {
      type: "table",
      caption: "Example only: Wanderly Travels, Pro plan, one number",
      head: ["Item", "Working", "Amount"],
      rows: [
        ["Pro plan with 18% GST", "₹3,999 + ₹719.82", "₹4,718.82"],
        ["Marketing templates", "4,000 × ₹0.8631", "₹3,452.40"],
        ["Utility templates", "1,000 × ₹0.1150", "₹115.00"],
        ["Follow-ups inside ad windows", "300 × ₹0", "₹0.00"],
        ["Service replies", "900, all inside the 1,000 free", "₹0.00"],
        ["Meta charges", "₹3,452.40 + ₹115.00", "₹3,567.40"],
        ["**Month's total**", "₹4,718.82 + ₹3,567.40", "**₹8,286.22**"]
      ]
    },
    {
      type: "p",
      text: "Had those 300 follow-ups gone out as marketing templates outside the free window, they would have added 300 × ₹0.8631 = ₹258.93. The ads themselves are paid for separately through Meta's ad tools."
    },
    {
      type: "p",
      text: "In all three examples the marketing templates make up most of Meta's charges. That is the line to watch when you plan a month."
    },
    {
      type: "h2",
      text: "How do Whatching's plan and Meta's charges add up?"
    },
    {
      type: "p",
      text: "You pay Whatching a fixed monthly plan price plus 18% GST, and Meta's message charges are passed on at Meta's own rates with 0% markup. The plan covers the software. Meta's charges depend on how many messages you send."
    },
    {
      type: "table",
      caption: "Whatching plans, billed monthly",
      head: [
        "Plan",
        "Price a month",
        "With 18% GST",
        "Contacts",
        "WhatsApp numbers",
        "Team"
      ],
      rows: [
        ["Basic", "₹2,499", "₹2,948.82", "10,000", "1", "Owner + 2"],
        ["Pro", "₹3,999", "₹4,718.82", "25,000", "Up to 2", "Owner + 5"],
        [
          "Enterprise",
          "Custom",
          "Custom",
          "Custom",
          "More numbers",
          "Unlimited"
        ]
      ]
    },
    {
      type: "p",
      text: "Billing is monthly only. If you cancel, your plan stays active until the end of the month you have paid for, and that month is not refunded. The 1,000 free service messages apply to each number, so a Pro account using two numbers gets 1,000 free for each. The full comparison is on the [pricing page](/pricing), and Meta's charges are set out under [Meta charges](/pricing#meta-charges)."
    },
    {
      type: "h2",
      text: "How can you keep WhatsApp API costs down?"
    },
    {
      type: "p",
      text: "The biggest saving comes from sending fewer marketing templates to people who are unlikely to read them. These habits help without cutting corners:"
    },
    {
      type: "ul",
      items: [
        "**Reply while the window is open.** If a customer has written in the last 24 hours, answer with a normal reply. It counts as a service message at ₹0.1150, and the first 1,000 each month are free.",
        "**Send offers to the people they suit.** Every delivered marketing message costs ₹0.8631, so a smaller list of interested customers costs less than your whole contact book. Only message people who have agreed to hear from you.",
        "**Keep utility templates purely transactional.** Meta checks each template's category and moves templates with any promotional content to marketing, at the higher rate. A booking confirmation with a discount code attached is a marketing message.",
        "**Use Click-to-WhatsApp ads for new enquiries.** Replying within 24 hours opens a free window of up to 7 days for that person. Our [Click-to-WhatsApp ads guide](/blog/click-to-whatsapp-ads-guide) explains how they work.",
        "**Check your Meta charges every month.** Whatching's [analytics](/features/analytics) show broadcast results, button clicks, which ads bring chats and what Meta has charged, so you can see which messages earn their cost."
      ]
    },
    {
      type: "h2",
      text: "When do WhatsApp Business API rates change?"
    },
    {
      type: "p",
      text: "Meta changes its rates only on the first day of a quarter: 1 January, 1 April, 1 July or 1 October. It has committed to at least one month's notice for a rate change, three months for a new pricing add-on and six months for a change to the whole pricing model."
    },
    {
      type: "p",
      text: "India's rates have moved several times in 2026. The marketing rate went up on 1 January 2026, the authentication-international rate went up on 1 April 2026, and service messages and in-window utility messages became chargeable again on 1 October 2026. The earliest date the rates in this guide can change is 1 January 2027, so check the date at the top of this page against Meta's pricing page before you budget."
    },
    { type: "embed", name: "trial" },
    {
      type: "p",
      text: "If you are new to the API itself, start with our guide to [what the WhatsApp Business API is](/blog/whatsapp-business-api-explained). You can try Whatching's Pro plan free for 7 days without a card before you choose a plan."
    }
  ],
  faq: [
    {
      question: "Is the WhatsApp Business API free in India?",
      answer:
        "No. Meta charges for each delivered message your business sends, at ₹0.8631 for marketing and ₹0.1150 for utility, authentication and service messages as of 1 October 2026. Some messages are free, including everything customers send you, the first 1,000 service messages a month per number, and messages inside a free window opened by a Click-to-WhatsApp ad. Your provider's plan is a separate cost."
    },
    {
      question: "Are Meta's charges included in Whatching's plan price?",
      answer:
        "No. The plan price covers the Whatching software and has 18% GST added. Meta's message charges are billed separately at Meta's own rates with 0% markup, so you pay exactly what Meta charges for the messages you send. The pricing page shows Meta's India rates alongside the plans."
    },
    {
      question: "Do I pay for WhatsApp messages that are not delivered?",
      answer:
        "No. Meta charges only when a message is delivered to the customer's phone. A message to a number that is not on WhatsApp, or one that fails to deliver for another reason, does not incur a Meta charge. Messages customers send to you are also free."
    },
    {
      question:
        "Is the 1,000 free service message allowance per account or per number?",
      answer:
        "Per number. Meta gives each business phone number 1,000 free service messages a month, starting from 1 October 2026. Meta charges from the 1,001st service message on that number. Unused free messages do not carry over, and the count resets at the start of each month."
    },
    {
      question: "How much do 1,000 WhatsApp marketing messages cost in India?",
      answer:
        "At Meta's India rate of ₹0.8631 per delivered marketing message, 1,000 delivered marketing messages cost ₹863.10 in Meta charges. Your provider's monthly plan is on top of that. If some of those people messaged you from a Click-to-WhatsApp ad and their free window is still open, those messages are free."
    },
    {
      question: "How often does Meta change WhatsApp prices?",
      answer:
        "Meta can change rates only on 1 January, 1 April, 1 July or 1 October, so up to four times a year. It gives at least one month's notice for a rate change and longer notice for bigger changes to how pricing works."
    }
  ],
  sources: [
    {
      label: "Meta: Pricing on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
    },
    {
      label: "Meta: Authentication-international rates",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/authentication-international-rates"
    },
    {
      label: "Meta: Template categorization",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization"
    },
    {
      label: "Meta: Getting opt-in",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in"
    }
  ],
  related: [
    "whatsapp-business-api-explained",
    "whatsapp-business-app-vs-api",
    "click-to-whatsapp-ads-guide"
  ],
  relatedFeatures: ["whatsapp-broadcast", "analytics"]
};

export default post;
