import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "click-to-whatsapp-ads-guide",
  title: "Click to WhatsApp ads: setup, message costs and tracking",
  seoTitle: "Click to WhatsApp Ads: Setup, Free Window and Tracking",
  excerpt:
    "How click to WhatsApp ads work, how to set one up in Meta Ads Manager, what Meta's free entry point window means for message costs, and how to track each chat.",
  seoDescription:
    "How click to WhatsApp ads work: setup in Meta Ads Manager, the free entry point window for messages, replying fast and tracking which ad sent each chat.",
  category: "WhatsApp Marketing",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "click to whatsapp ads",
  summary:
    "Click to WhatsApp ads are Facebook and Instagram ads that open a WhatsApp chat with your business when tapped. You create them in Meta Ads Manager by choosing WhatsApp as the place people message you. If you reply within 24 hours to someone who messaged from the ad on the WhatsApp phone app, Meta does not charge for your messages for up to 7 days.",
  blocks: [
    {
      type: "p",
      text: "Most ads send people to a website, where a visitor with a question has to find a way to ask it. A click to WhatsApp ad sends them straight into a chat with you, with a message about the ad already typed. For a travel agency, a coaching institute or a property developer, that chat is where questions get answered and bookings are discussed. This guide covers the setup, Meta's rules on message costs, and how to know which ad brought in which chat."
    },
    { type: "h2", text: "What are click to WhatsApp ads?" },
    {
      type: "p",
      text: "Click to WhatsApp ads are ads on Facebook and Instagram whose button opens a WhatsApp conversation with your business. The customer sees a ready-written message, sends it, and the chat starts on your business number."
    },
    {
      type: "p",
      text: "They can use an image, a video, a carousel or a slideshow. The ad itself is paid for in Ads Manager like any Meta ad; Meta's developer guide sets these ads to bill on impressions, which means you pay when the ad is shown. The WhatsApp messages you send afterwards are charged separately, and in many cases not at all, as explained below."
    },
    { type: "h2", text: "What do you need before you create one?" },
    {
      type: "p",
      text: "You need a Meta ad account and a Facebook Page with your WhatsApp business number linked to it. Meta's developer guide lists both as requirements."
    },
    {
      type: "ul",
      items: [
        "A Meta ad account with a payment method",
        "A Facebook Page for your business",
        "Your WhatsApp business number linked to that Page",
        "A way to answer chats quickly, whether a team, a chatbot or both",
        "A clear offer for the ad, such as one package, one course or one project"
      ]
    },
    {
      type: "h2",
      text: "How do you set up a click to WhatsApp ad in Meta Ads Manager?"
    },
    {
      type: "p",
      text: "You create the campaign in Ads Manager and choose WhatsApp as the messaging app at the ad set stage. Meta's own steps, in short:"
    },
    {
      type: "ol",
      items: [
        "Open Ads Manager and click **Create**.",
        "Choose a campaign objective. Meta's developer documentation lists Engagement, Leads, Sales and Traffic as objectives that support click to WhatsApp ads.",
        "Name the campaign and continue.",
        "In the conversion section, select **Messaging apps**, then select **WhatsApp**.",
        "Set start and end dates and a budget. Meta's guide suggests running the ad for at least seven days.",
        "Define your audience, such as the cities and age groups you serve.",
        "Choose the ad format, upload images or video and write the ad text.",
        "Set up the message people will send. Meta's default is “Hello! Can I get more info on this?”, and you can change it.",
        "Publish. Meta reviews the ad before it starts running."
      ]
    },
    {
      type: "p",
      text: "Change the default message so it names the offer, for example “Hi, I'd like details of the Summer Escape Goa package”. It tells your team or your bot exactly what the person wants. Meta also lets you add a greeting and a few suggested questions that the customer can tap to start the chat."
    },
    {
      type: "callout",
      title: "Menus change",
      text: "Meta moves Ads Manager options from time to time, so the exact labels may differ from the steps above. Meta's Business Help Centre has the current screens."
    },
    { type: "h2", text: "What is the free entry point window?" },
    {
      type: "p",
      text: "The free entry point window is a period of up to 7 days in which Meta does not charge for the messages you send to someone who contacted you from a click to WhatsApp ad. It applies only when a few conditions are met."
    },
    {
      type: "ul",
      items: [
        "The person messages you from the ad using the WhatsApp app on an Android phone or iPhone. Chats started on WhatsApp desktop or web do not qualify.",
        "You reply within 24 hours of their message.",
        "Your first reply is free, and the free window starts from the moment you send it.",
        "While the window is open, Meta does not charge for marketing, utility, authentication or service messages to that person."
      ]
    },
    {
      type: "p",
      text: "The free window removes the charge. The usual rule for free-form replies still applies: you can send one only within 24 hours of the customer's last message, and outside that you need an approved template. Messages written by Meta's own AI product, Meta Business Agent, are still charged inside the window."
    },
    { type: "h3", text: "What it saves, in rupees" },
    {
      type: "p",
      text: "Here is one lead for Wanderly Travels, a fictional travel agency, followed over five days. The second column shows Meta's charges at Indian rates from 1 October 2026 if the same customer had found Wanderly some other way."
    },
    {
      type: "table",
      caption:
        "Meta's message charges for one lead, with and without the free entry point window",
      head: [
        "Message from Wanderly",
        "Lead from the ad, replied within 24 hours",
        "Lead from another source"
      ],
      rows: [
        [
          "First reply to the customer (service)",
          "Free, opens the window",
          "Free within 1,000 service messages a month, then ₹0.1150"
        ],
        [
          "Four more replies over five days (service)",
          "Free",
          "Same as above, ₹0.1150 each after the free 1,000"
        ],
        ["Day 3 booking reminder (utility template)", "Free", "₹0.1150"],
        ["Day 5 new offer (marketing template)", "Free", "₹0.8631"]
      ]
    },
    {
      type: "p",
      text: "In this example the lead from another source costs Wanderly between ₹0.9781 and ₹1.5531 in Meta charges, depending on whether its free service messages for the month are used up. The ad lead costs nothing in message charges. If Wanderly had missed the first 24 hours, there would be no free window, and every template after that would be charged at the normal rate. Whatching passes these charges on at 0% markup; see [Meta charges on our pricing page](/pricing#meta-charges) or our full guide to [WhatsApp Business API pricing in India](/blog/whatsapp-business-api-pricing-india)."
    },
    { type: "h2", text: "Why does replying fast matter so much?" },
    {
      type: "p",
      text: "Replying fast matters for two reasons: the free window depends on a reply within 24 hours, and the person is thinking about your ad right now. An answer an hour later finds them busy with something else."
    },
    {
      type: "ul",
      items: [
        "**Answer every chat at once.** A short menu built in the [chatbot builder](/features/whatsapp-flows) can greet the customer and ask the first questions, even at night.",
        "**Answer open questions automatically.** The [AI agent](/features/ai-chatbot) replies from your own documents, website and FAQs, and hands the chat to a person when needed.",
        "**Get a person in quickly.** Assign chats to teammates by hand in the [shared inbox](/features/shared-inbox), so each lead has one owner.",
        "**Qualify before the hand-over.** Whatching's automatic lead qualification gathers the basics first, so your team spends time on serious enquiries.",
        "**Follow up.** Whatching's automatic follow-up bot helps with chats that go quiet."
      ]
    },
    {
      type: "p",
      text: "Someone who messages you from an ad has started a chat, which is different from agreeing to receive offers later. Before you add them to future broadcasts, ask in the chat whether they would like updates from your business and note their answer."
    },
    { type: "h2", text: "How do you track which ad brought in each chat?" },
    {
      type: "p",
      text: "When someone messages you from a click to WhatsApp ad, Meta sends the ad's details along with the message they send from the ad: the ad ID, the headline, the ad text, the image or video, and a click ID. Software connected to your number can read these and record the ad against the chat. The click ID is left out for ads shown in WhatsApp Status."
    },
    {
      type: "p",
      text: "Whatching's [analytics](/features/analytics) show which click to WhatsApp ads bring in chats. Put that next to the spend for each ad in Ads Manager and you can see roughly what each chat costs you, and which ads to keep running."
    },
    {
      type: "ul",
      items: [
        "Name each ad clearly in Ads Manager, such as “Goa package, Delhi, reel”, so reports are easy to read.",
        "Give each ad its own ready-written message, which helps your team spot the offer at a glance.",
        "Tag chats by offer or ad, so you can send each group a relevant broadcast later.",
        "Compare ads over the same number of days and with similar budgets."
      ]
    },
    { type: "h2", text: "Click to WhatsApp ads checklist" },
    {
      type: "ul",
      items: [
        "Your WhatsApp business number is linked to your Facebook Page.",
        "The ad promotes one clear offer.",
        "The ready-written message names that offer.",
        "Every chat gets an instant first reply, day or night.",
        "A person can pick up within a few hours, well inside 24 hours.",
        "Chats from each ad are tracked and tagged.",
        "Customers are asked before being added to future broadcasts."
      ]
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Are click to WhatsApp ads free?",
      answer:
        "No. You pay Meta for the ad itself through Ads Manager, based on your budget. What can be free are the WhatsApp messages afterwards: if you reply within 24 hours to someone who messaged from the ad on the WhatsApp phone app, Meta does not charge for your messages for up to 7 days."
    },
    {
      question:
        "Does the free window apply if someone taps the ad on a laptop?",
      answer:
        "No. Meta's free entry point window applies only when the person messages you from the ad using the WhatsApp app on Android or iPhone. Chats started on WhatsApp desktop or WhatsApp web do not qualify, so your messages to them are charged at Meta's normal rates."
    },
    {
      question: "What happens if I reply after 24 hours?",
      answer:
        "The free entry point window does not open, and you can no longer send a free-form reply. You can still reach the person with an approved template, charged at Meta's normal rate, which is ₹0.8631 for a marketing message to an Indian number from 1 October 2026."
    },
    {
      question: "Can I run click to WhatsApp ads on Instagram?",
      answer:
        "Yes. Meta's guide describes them as Facebook or Instagram ads that open a WhatsApp chat with your business. You create both in Meta Ads Manager, using a Facebook Page that has your WhatsApp business number linked to it."
    },
    {
      question: "Can I see which ad a WhatsApp chat came from?",
      answer:
        "Yes. Meta sends the ad's ID, headline and text with the message a person sends from an ad, so connected software can record it. Whatching's analytics show which click to WhatsApp ads bring in chats, which you can compare with each ad's spend in Ads Manager."
    }
  ],
  sources: [
    {
      label:
        "Meta: Pricing on the WhatsApp Business Platform (free entry point window)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
    },
    {
      label: "Meta: Ads that Click to WhatsApp (Marketing API)",
      url: "https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp"
    },
    {
      label: "WhatsApp Business: Create ads that click to WhatsApp",
      url: "https://whatsappbusiness.com/products/create-ads-that-click-to-whatsapp/"
    },
    {
      label: "Meta: Welcome message sequences for click to WhatsApp ads",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/ctwa/welcome-message-sequences"
    },
    {
      label: "Meta: Text messages webhook reference (ad referral details)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/text"
    },
    {
      label: "Meta: Get opt-in for WhatsApp",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in"
    }
  ],
  related: [
    "whatsapp-business-api-pricing-india",
    "whatsapp-broadcast-best-practices",
    "ai-chatbot-vs-scripted-bot"
  ],
  relatedFeatures: ["analytics", "whatsapp-marketing", "ai-chatbot"]
};

export default post;
