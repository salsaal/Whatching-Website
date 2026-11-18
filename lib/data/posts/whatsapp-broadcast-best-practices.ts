import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-broadcast-best-practices",
  title: "How to plan, send and measure a WhatsApp broadcast",
  seoTitle: "WhatsApp Broadcast Guide: Rules, Costs and Checklist",
  excerpt:
    "Opt-in, templates, Meta's India rates, segments, buttons, timing and results: a practical guide to sending WhatsApp broadcasts on the official platform.",
  seoDescription:
    "How a WhatsApp broadcast works on the official platform: opt-in, templates, Meta's India rates, segments, buttons, timing and how to read your results.",
  category: "WhatsApp Marketing",
  date: "2026-08-12",
  updated: "2026-11-19",
  keyword: "whatsapp broadcast",
  summary:
    "A WhatsApp broadcast on the official platform is one Meta-approved template message sent to many opted-in contacts at once. In India, each delivered marketing message costs ₹0.8631 at Meta's rates from 1 October 2026. The broadcasts that work go to a chosen segment, use saved details such as the customer's name, offer one clear button, and are judged on replies and button taps.",
  blocks: [
    {
      type: "p",
      text: "A broadcast is the quickest way to tell hundreds of customers about a new offer or a festive sale, and the quickest way to get blocked if it reaches people who never asked for it. This guide covers broadcasts sent through Meta's WhatsApp Business Platform, the official route that tools like Whatching use: the rules, the costs and the habits that keep customers reading."
    },
    {
      type: "h2",
      text: "What is a WhatsApp broadcast on the official platform?"
    },
    {
      type: "p",
      text: "A WhatsApp broadcast is one template message sent to a list of contacts who have agreed to hear from you. A template is a message you write in advance and submit to Meta for approval, and Meta's documentation says review can take up to 24 hours."
    },
    {
      type: "p",
      text: "Templates exist because of the **customer service window**, the 24 hours after a customer's last message to you. Inside that window you can send any normal reply. Outside it, you can send only an approved template, which Meta allows at any time. Most people on a broadcast list are outside that window, so broadcasts are sent as templates."
    },
    {
      type: "p",
      text: "Each template has a body of up to 1,024 characters, plus an optional header (up to 60 characters of text, or an image, video or document), an optional footer and up to 10 buttons. The body can include variables such as {{first_name}}, filled with each contact's details when the message goes out. New to the platform? Start with our explainer on [the WhatsApp Business API](/blog/whatsapp-business-api-explained)."
    },
    {
      type: "h2",
      text: "Do customers need to opt in before you send a broadcast?"
    },
    {
      type: "p",
      text: "Yes. Meta requires opt-in before you message anyone on WhatsApp: the person must have given you their number and agreed to receive messages from your business. Your opt-in wording must clearly say that they are opting in, and it must name your business."
    },
    {
      type: "p",
      text: "Meta lets you choose how to collect it, as long as it meets those requirements and Indian law. The examples Meta lists include:"
    },
    {
      type: "ul",
      items: [
        "A form on your website with a clear line about WhatsApp messages from your business",
        "An SMS asking people to confirm",
        "A phone call with a recorded menu (IVR) where callers press a key to agree",
        "In person or on paper, such as a signed admission or booking form"
      ]
    },
    {
      type: "p",
      text: "Meta also suggests telling people which kinds of messages to expect, and giving them a clear way to opt out that you honour. Customers can also stop your marketing messages inside WhatsApp, through a setting called **Offers and announcements**, after which your marketing templates are not delivered to them."
    },
    { type: "h2", text: "Which template category should a broadcast use?" },
    {
      type: "p",
      text: "Most broadcasts are marketing templates, because they promote something. Meta sorts every template into one of three categories, and the category decides the price."
    },
    {
      type: "table",
      caption:
        "Template categories and Meta's rates for Indian numbers from 1 October 2026",
      head: [
        "Category",
        "What it is for",
        "Example",
        "Meta's rate per delivered message"
      ],
      rows: [
        [
          "Marketing",
          "Offers, new arrivals, event invitations, festive greetings, bringing back past customers",
          "“Summer Escape packages from Delhi are now open”",
          "₹0.8631"
        ],
        [
          "Utility",
          "Updates about something the customer did or asked for, with no promotion",
          "A booking confirmation or a payment reminder",
          "₹0.1150"
        ],
        [
          "Authentication",
          "One-time passcodes to verify identity",
          "“482913 is your verification code”",
          "₹0.1150"
        ]
      ]
    },
    {
      type: "p",
      text: "A template that mixes an update with a promotion counts as marketing. Meta checks your chosen category against the content: since 9 April 2025, a template submitted as utility that Meta judges promotional is approved as marketing, and Meta can also move approved utility templates to marketing later."
    },
    { type: "h2", text: "How much does a WhatsApp broadcast cost in India?" },
    {
      type: "p",
      text: "Meta charges for each delivered message, based on its category and the recipient's country. For Indian numbers, a marketing message costs ₹0.8631 from 1 October 2026, and messages that are not delivered are not charged. Messages customers send to you are free."
    },
    {
      type: "p",
      text: "Take Wanderly Travels, a fictional travel agency, as an example. It sends a “Summer Escape” broadcast to 2,000 opted-in customers, and all 2,000 are delivered. Meta's charge is 2,000 × ₹0.8631, which comes to ₹1,726.20. When customers reply, the 24-hour window opens and Wanderly's answers count as service messages. Each business number gets 1,000 free service messages a month, and after that each one costs ₹0.1150."
    },
    {
      type: "p",
      text: "Whatching passes Meta's charges on at 0% markup, and your plan is billed separately: Basic is ₹2,499 and Pro is ₹3,999 a month, plus 18% GST. You can see how the two add up on our [pricing page](/pricing#meta-charges), and the full rate card is explained in our guide to [WhatsApp Business API pricing in India](/blog/whatsapp-business-api-pricing-india)."
    },
    { type: "h2", text: "How do you plan a WhatsApp broadcast?" },
    {
      type: "p",
      text: "Plan a broadcast backwards from the one thing you want people to do, then work out who should get it and what they need to see. A simple order of work:"
    },
    {
      type: "ol",
      items: [
        "Decide the single action you want: reply with a travel month, tap to see the package, or visit the shop this weekend.",
        "Choose the segment that action makes sense for.",
        "Write the template, choose its category and add the variables you will fill from saved contact details.",
        "Add one to three buttons that match the action.",
        "Submit the template and allow up to 24 hours for Meta's review.",
        "Send a test to your own team's numbers and check how it looks on a phone.",
        "Send to part of the segment first, check the early results, then send to the rest.",
        "Keep people free to answer replies for the first few hours."
      ]
    },
    {
      type: "p",
      text: "The staged send in step 7 matters most for new templates. Meta may hold back some messages from a new template until early feedback comes in, which it calls pacing. Good feedback releases them; poor feedback drops them and pauses the template."
    },
    { type: "h2", text: "How should you segment your contacts?" },
    {
      type: "p",
      text: "Send each broadcast only to the people it fits, even if that means a smaller list. Fewer blocks and reports keep your quality rating healthy, and a relevant message gets more replies than a general one."
    },
    {
      type: "p",
      text: "In Whatching you can group contacts with tags and with the details saved on each contact. Useful ways to split a list:"
    },
    {
      type: "ul",
      items: [
        "**By interest:** people who asked about Goa packages, a course or a 2BHK flat",
        "**By stage:** new enquiries, past customers, last season's bookings",
        "**By place:** city or area, when the offer depends on location",
        "**By language:** Hindi and English versions of the same template",
        "**By recency:** recent chats kept apart from older contacts"
      ]
    },
    {
      type: "h2",
      text: "How do you personalise a broadcast with saved contact details?"
    },
    {
      type: "p",
      text: "Personalise with variables that pull each contact's saved details into the template. A first name is a start; one more useful detail, such as the destination or course they asked about, makes the message read as if it was written for them."
    },
    {
      type: "callout",
      title: "Example template body",
      text: "Hi {{first_name}}, our Summer Escape packages to {{destination}} for May and June 2027 are now open, with early-bird prices until 15 December 2026. Tap below to see dates and prices, or reply with your travel month and we'll suggest options."
    },
    {
      type: "p",
      text: "Before sending, check that every contact in the segment has the fields you use. “Hi , our packages to ...” looks careless, so leave out contacts with missing details or send them a version without that variable."
    },
    { type: "h2", text: "Which buttons should a broadcast have?" },
    {
      type: "p",
      text: "Use one to three buttons that each lead to a clear next step. Meta allows up to 10, but when a template has more than three, WhatsApp shows two and hides the rest behind a **See all options** button."
    },
    {
      type: "ul",
      items: [
        "**Quick reply:** sends a set reply to you when tapped, such as “Send me details”. The label can be up to 25 characters.",
        "**URL:** opens a web page, such as the package page. A template can have up to two.",
        "**Phone number:** calls your business. A template can have one.",
        "**Copy code:** copies a coupon code to the customer's phone. A template can have one."
      ]
    },
    {
      type: "p",
      text: "A quick-reply tap counts as a message from the customer, so it opens the 24-hour window. Meta names an opt-out button as a common use of quick replies, so a “Stop offers” button is worth adding. Replies land in your team inbox, where a teammate can answer or a chatbot made in the [chatbot builder](/features/whatsapp-flows) can ask the next question."
    },
    { type: "h2", text: "When is the best time to send a WhatsApp broadcast?" },
    {
      type: "p",
      text: "The best time is when your customers are free to read and your team is free to reply. There is no single best hour for every business, so test a few send times with similar segments and compare the results."
    },
    {
      type: "ul",
      items: [
        "Avoid late nights and early mornings, when a message feels intrusive.",
        "Send festive offers a few days before the festival, so people have time to plan.",
        "Schedule the broadcast ahead in Whatching so it goes out on time, even on a busy day.",
        "Space out marketing broadcasts. WhatsApp may cap how many marketing messages a person gets from all businesses when they read fewer of them."
      ]
    },
    {
      type: "p",
      text: "If that cap stops a message, Meta returns error code 131049. Wait at least 24 hours before trying that person again, since repeated retries can block delivery to them for up to a day."
    },
    {
      type: "h2",
      text: "How do you stay within Meta's rules and keep a good quality rating?"
    },
    {
      type: "p",
      text: "Send only to opted-in contacts, keep each message relevant, and watch how people react. Meta rates every template as high, medium or low quality based on feedback and read rates, and it rates your phone number on signals from the last seven days, such as blocks, reports, mutes and archives."
    },
    {
      type: "p",
      text: "A template that drops to low quality is paused automatically: for 3 hours the first time, for 6 hours the second time, and disabled the third time. Editing a template sends it back for review, and it cannot be used until it is approved again."
    },
    {
      type: "p",
      text: "Your **messaging limit** caps how many different people you can message outside the 24-hour window in any rolling 24 hours. It is shared by every number in your business portfolio and starts at 250. Verifying your business, or delivering 2,000 messages to unique people within 30 days using high-quality templates, raises it to 2,000. Meta then raises it to 10,000, 100,000 and unlimited while your quality stays high and you have used at least half your limit in the last seven days. Our guide to [WhatsApp messaging limits](/blog/whatsapp-messaging-limits) covers this step by step."
    },
    { type: "h2", text: "How do you read the results of a broadcast?" },
    {
      type: "p",
      text: "Judge a broadcast by replies and button taps first, because they show interest. Delivered and read counts tell you whether the message reached people and whether they opened it."
    },
    {
      type: "table",
      caption: "What each broadcast number tells you",
      head: ["Number", "What it means", "What to do with it"],
      rows: [
        [
          "Delivered",
          "The message reached the person's phone. Meta charges only for these.",
          "A big gap from the list size points to wrong numbers or people who stopped marketing messages."
        ],
        [
          "Read",
          "The message was shown in an open chat on their phone.",
          "Low reads suggest the timing or opening line needs work. Low read rates can also lower template quality."
        ],
        [
          "Replied",
          "The person sent you a message back.",
          "Answer quickly, while they are interested. Compare segments."
        ],
        [
          "Button clicks",
          "Taps on each button in the template.",
          "Shows which offer or action drew the most interest."
        ]
      ]
    },
    {
      type: "p",
      text: "Each [Whatching broadcast](/features/whatsapp-broadcast) shows delivered, read and replied counts and button clicks. Compare them across segments and send times over several broadcasts, and note what you changed each time."
    },
    { type: "h2", text: "WhatsApp broadcast checklist" },
    {
      type: "ul",
      items: [
        "Every contact opted in, and the opt-in named your business.",
        "The broadcast has one clear goal and a segment that fits it.",
        "The template is approved and in the right category.",
        "Variables are filled for everyone in the segment.",
        "One to three buttons, including a way to opt out of offers.",
        "A test message has been checked on a phone.",
        "The send time suits your customers and your team.",
        "A small first send went well before the rest.",
        "Someone is ready to reply for the first few hours.",
        "Template quality and the four result numbers are checked afterwards."
      ]
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Is a WhatsApp broadcast free to send?",
      answer:
        "No. Meta charges for each delivered template message. For Indian numbers a marketing message costs ₹0.8631 and a utility message ₹0.1150 from 1 October 2026. Messages that are not delivered are not charged, and customers' replies to you are free. Your software plan is a separate cost."
    },
    {
      question: "How many people can I send a WhatsApp broadcast to?",
      answer:
        "It depends on your messaging limit, which caps how many different people you can message outside the 24-hour window in a rolling 24 hours. New business portfolios start at 250. Verifying your business or sending enough high-quality messages raises it to 2,000, and Meta can raise it further automatically."
    },
    {
      question: "Do I need a new template for every broadcast?",
      answer:
        "Not always. An approved template with variables can be reused for different contacts and details. If you want new wording, you need a new or edited template, and Meta reviews it before you can send it. Review can take up to 24 hours, so plan festive broadcasts ahead."
    },
    {
      question: "What happens when someone replies to my broadcast?",
      answer:
        "Their reply opens a 24-hour customer service window, so you can answer with normal messages instead of templates. These answers are service messages. Each business number gets 1,000 free service messages a month, and after that Meta charges ₹0.1150 for each delivered one in India."
    },
    {
      question: "Why did some contacts not receive my broadcast?",
      answer:
        "Common reasons are a wrong number, a number not on WhatsApp, a person who has stopped marketing messages from your business, or WhatsApp's cap on marketing messages to people who read few of them. A paused template also cannot be sent. Meta does not charge for messages that are not delivered."
    }
  ],
  sources: [
    {
      label: "Meta: Pricing on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
    },
    {
      label: "Meta: Get opt-in for WhatsApp",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in"
    },
    {
      label: "Meta: Template categorization",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization"
    },
    {
      label: "Meta: Template components",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components"
    },
    {
      label: "Meta: Template quality rating",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality"
    },
    {
      label: "Meta: Template pacing",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pacing"
    },
    {
      label: "Meta: Template pausing",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pausing"
    },
    {
      label: "Meta: Messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits"
    },
    {
      label: "Meta: Per-user marketing template message limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits"
    }
  ],
  related: [
    "whatsapp-business-api-pricing-india",
    "whatsapp-messaging-limits",
    "click-to-whatsapp-ads-guide"
  ],
  relatedFeatures: ["whatsapp-broadcast", "whatsapp-marketing", "analytics"]
};

export default post;
