// Plain-language definitions of WhatsApp Business terms. Each definition
// states only what Meta's documentation says (checked 19 November 2026) or
// what Whatching does. Links use the same inline format as the guides.

export interface GlossaryTerm {
  term: string;
  /** Other names people search for. */
  aka?: string[];
  definition: string;
  /** A guide or page that goes deeper. */
  more?: { label: string; href: string };
}

export const glossary: GlossaryTerm[] = [
  {
    term: "WhatsApp Business app",
    definition:
      "Meta's free app for small businesses, used on a phone and linked devices. It has a business profile, quick replies, labels and simple broadcast lists, and is run by hand by the people using the phone.",
    more: {
      label: "WhatsApp Business app vs API",
      href: "/blog/whatsapp-business-app-vs-api"
    }
  },
  {
    term: "WhatsApp Business Platform",
    aka: ["WhatsApp Business API", "WhatsApp API", "Cloud API"],
    definition:
      "Meta's official way for businesses to send and receive WhatsApp messages through software instead of a phone. It's what tools like Whatching are built on, and it allows broadcasts to opted-in customers, chatbots, AI replies and a shared team inbox. Meta charges per message.",
    more: {
      label: "What is the WhatsApp Business API?",
      href: "/blog/whatsapp-business-api-explained"
    }
  },
  {
    term: "Message template",
    definition:
      "A message you write in advance and submit to Meta for approval. You need an approved template to message someone first, or to message them more than 24 hours after they last wrote to you. Templates can include variables such as the customer's name, plus images and buttons.",
    more: {
      label: "WhatsApp broadcast guide",
      href: "/blog/whatsapp-broadcast-best-practices"
    }
  },
  {
    term: "Template category",
    aka: ["Marketing template", "Utility template", "Authentication template"],
    definition:
      "Meta sorts every template into a category, which sets its price. Marketing covers offers, announcements and anything promotional. Utility covers updates about something the customer did or asked for, like an order or booking. Authentication covers one-time login and verification codes.",
    more: { label: "Meta's rates by category", href: "/pricing#meta-charges" }
  },
  {
    term: "Customer service window",
    aka: ["24-hour window"],
    definition:
      "The 24 hours after a customer's last message to you. Inside it you can reply freely without a template; these replies are service messages. After it closes, you need an approved template to message them again."
  },
  {
    term: "Service message",
    definition:
      "A normal reply you send inside the 24-hour customer service window. In India each business number gets 1,000 free service messages a month; after that Meta charges ₹0.1150 each (rates as of 1 October 2026).",
    more: {
      label: "WhatsApp API pricing in India",
      href: "/blog/whatsapp-business-api-pricing-india"
    }
  },
  {
    term: "Per-message pricing",
    definition:
      "How Meta has charged for WhatsApp Business Platform messages since 1 July 2025: a fee for each delivered template message, based on its category and the recipient's country. It replaced the older charge per 24-hour conversation.",
    more: {
      label: "WhatsApp API pricing in India",
      href: "/blog/whatsapp-business-api-pricing-india"
    }
  },
  {
    term: "Free entry point window",
    definition:
      "When someone messages you from a Click-to-WhatsApp ad on the WhatsApp phone app and you reply within 24 hours, Meta doesn't charge for your messages to them while this window is open. It may stay open for up to 7 days.",
    more: {
      label: "Click-to-WhatsApp ads guide",
      href: "/blog/click-to-whatsapp-ads-guide"
    }
  },
  {
    term: "Click-to-WhatsApp ad",
    aka: ["CTWA ad"],
    definition:
      "A Facebook or Instagram ad with a button that opens a WhatsApp chat with your business. Meta passes details of the ad with the first message, so tools like Whatching can show which ad brought in each chat.",
    more: {
      label: "Click-to-WhatsApp ads guide",
      href: "/blog/click-to-whatsapp-ads-guide"
    }
  },
  {
    term: "Broadcast",
    definition:
      "One approved template sent to many customers at once, now or at a scheduled time. On the WhatsApp Business Platform, everyone on the list must have agreed to hear from you, and Meta charges for each delivered message.",
    more: {
      label: "WhatsApp broadcasts in Whatching",
      href: "/features/whatsapp-broadcast"
    }
  },
  {
    term: "Opt-in",
    definition:
      "A customer's permission to receive WhatsApp messages from your business. Meta requires it before you message someone first, and says the customer should know what kinds of messages they'll get and from whom."
  },
  {
    term: "Messaging limit",
    aka: ["Tier", "Daily message limit"],
    definition:
      "The number of different customers your business can message first with templates in a rolling 24 hours. New businesses start low and Meta raises the limit as they send good-quality messages. Replies to customers who wrote to you don't count.",
    more: {
      label: "WhatsApp messaging limits explained",
      href: "/blog/whatsapp-messaging-limits"
    }
  },
  {
    term: "Quality rating",
    definition:
      "Meta's view of how customers react to your messages over recent days, shown as high, medium or low. Many blocks and reports lower it, which can hold back increases to your messaging limit.",
    more: {
      label: "WhatsApp messaging limits explained",
      href: "/blog/whatsapp-messaging-limits"
    }
  },
  {
    term: "Display name",
    definition:
      "The business name customers see in WhatsApp chats. Meta reviews it against its display name guidelines when you connect a number, and it should match your business."
  },
  {
    term: "Official Business Account",
    aka: ["Green tick", "Blue checkmark", "Verified badge"],
    definition:
      "Meta's verified status for notable businesses on the WhatsApp Business Platform, shown as a checkmark beside the business name. Meta now describes it as a blue checkmark. You apply in WhatsApp Manager once your number meets Meta's requirements.",
    more: {
      label: "Green tick guide",
      href: "/blog/whatsapp-green-tick-verification"
    }
  },
  {
    term: "Meta Verified for business",
    definition:
      "A paid subscription from Meta that adds a verified badge and other benefits to a business's accounts. It's separate from the Official Business Account that you apply for on the WhatsApp Business Platform.",
    more: {
      label: "Green tick guide",
      href: "/blog/whatsapp-green-tick-verification"
    }
  },
  {
    term: "Coexistence",
    definition:
      "Using the WhatsApp Business app on your phone and the WhatsApp Business Platform, through a tool like Whatching, on the same number at the same time. Meta lists some features that work differently when you do.",
    more: {
      label: "WhatsApp coexistence guide",
      href: "/blog/whatsapp-coexistence"
    }
  },
  {
    term: "Embedded signup",
    definition:
      "Meta's sign-up flow that runs inside a software provider's app. You log in with Facebook, choose or create your business portfolio, add your number and verify it with a code, without leaving the provider's app.",
    more: {
      label: "How to get the WhatsApp Business API",
      href: "/blog/how-to-get-whatsapp-business-api"
    }
  },
  {
    term: "Business portfolio",
    aka: ["Meta Business Manager", "Business Manager"],
    definition:
      "Your business's account on Meta, which holds your WhatsApp Business Account, Facebook Pages, Instagram accounts and ad accounts. Meta used to call it Business Manager."
  },
  {
    term: "WhatsApp Business Account",
    aka: ["WABA"],
    definition:
      "The account inside your business portfolio that holds your WhatsApp phone numbers and message templates. Software like Whatching connects to it to send and receive messages for you."
  },
  {
    term: "Two-step verification",
    definition:
      "A six-digit PIN that protects your WhatsApp number from being registered by someone else. Meta requires it for some requests, such as applying for an Official Business Account."
  },
  {
    term: "Quick reply button",
    definition:
      "A button in a WhatsApp message that sends a short reply when tapped, such as Plan my trip or Yes, book it. It makes answering easy, and can start the next step of a chatbot."
  },
  {
    term: "Call-to-action button",
    definition:
      "A button in a WhatsApp template that opens a website link or starts a phone call, such as View packages or Call us."
  },
  {
    term: "Click-to-chat link",
    aka: ["wa.me link", "WhatsApp link"],
    definition:
      "A link in the form wa.me/ followed by your full number in international format, which opens a WhatsApp chat with you when tapped. You can add a message that appears typed in for the customer.",
    more: {
      label: "Free WhatsApp link generator",
      href: "/tools/whatsapp-link-generator"
    }
  },
  {
    term: "Chatbot",
    definition:
      "An automated conversation that replies with set messages, menus and questions, and follows the path a customer chooses. In Whatching you build one on a drag-and-drop canvas, with a hand-over to a person when needed.",
    more: { label: "Chatbot builder", href: "/features/whatsapp-flows" }
  },
  {
    term: "AI agent",
    definition:
      "Software that reads a customer's question and writes an answer, rather than following a fixed script. Whatching's AI agent answers from the documents, website and FAQs you give it, and hands the chat to your team when a person is needed.",
    more: {
      label: "AI chatbot vs scripted bot",
      href: "/blog/ai-chatbot-vs-scripted-bot"
    }
  },
  {
    term: "Shared team inbox",
    definition:
      "One inbox where your whole team reads and answers WhatsApp and Instagram chats from the same business number, assigns chats to each other and sees each customer's details.",
    more: { label: "Shared inbox", href: "/features/shared-inbox" }
  }
];
