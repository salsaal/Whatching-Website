import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "ai-chatbot-vs-scripted-bot",
  title: "WhatsApp AI chatbot or scripted bot: which does your business need?",
  seoTitle: "WhatsApp AI Chatbot vs Scripted Bot: Which to Use",
  excerpt:
    "Menu bots and AI agents compared: what each does well, when to use which, and how to run both together with a clear hand-over to your team.",
  seoDescription:
    "Compare a WhatsApp AI chatbot with a scripted menu bot: what each does well, when to use both, how to prepare your content and keep the answers accurate.",
  category: "AI Automation",
  cover: {
    big: "Menu + AI",
    small: "Most businesses do best with both, and a hand-over to a person"
  },
  date: "2026-06-22",
  updated: "2026-11-19",
  keyword: "whatsapp ai chatbot",
  summary:
    "A scripted bot follows the menus, buttons and keywords you set up, so its replies are fixed and predictable. A WhatsApp AI chatbot reads the customer's question in their own words and answers from your documents, website and FAQs. Most small businesses do best with both: a menu for common tasks, AI for open questions, and a clear hand-over to a person.",
  blocks: [
    {
      type: "p",
      text: "Once enquiries on WhatsApp pass a few dozen a day, answering every “fees kitna hai?” and “is the Goa package available in May?” by hand starts to eat the day. A chatbot can take the repeated questions. The choice is between a scripted bot, an AI chatbot, or a mix of the two, and each suits different work."
    },
    { type: "h2", text: "What is a scripted chatbot?" },
    {
      type: "p",
      text: "A scripted chatbot follows a path you design in advance: a menu, buttons, keywords and questions, where each choice leads to a fixed reply or the next step. You build it by arranging those steps, usually in a visual builder."
    },
    {
      type: "p",
      text: "Its strength is control. The customer sees exactly the words you wrote, every time, which suits prices, policies and step-by-step tasks such as collecting a name, a date and a city. Its weakness is that it only knows the paths you planned. A customer who types a question in their own words, outside the menu, gets sent back to the menu or gets no useful answer."
    },
    { type: "h2", text: "What is a WhatsApp AI chatbot?" },
    {
      type: "p",
      text: "A WhatsApp AI chatbot, often called an AI agent, reads each message in the customer's own words and writes a reply using the information you have given it, such as your documents, website pages and FAQs. It can handle the same question asked ten different ways, and follow-up questions in the same chat."
    },
    {
      type: "p",
      text: "Its weakness is the flip side of that flexibility. The wording changes from chat to chat, and the answer is only as good as the content behind it. If your price list is out of date, the AI will give the old price with confidence. That makes preparing and maintaining your content the main job."
    },
    { type: "h2", text: "How do an AI chatbot and a scripted bot compare?" },
    {
      type: "table",
      caption: "Scripted bot and AI chatbot side by side",
      head: ["", "Scripted bot", "AI chatbot"],
      rows: [
        [
          "How it decides",
          "Rules you set: menus, buttons, keywords",
          "Reads the question and answers from your content"
        ],
        [
          "Unexpected wording",
          "Struggles; falls back to the menu",
          "Handles it, if the answer is in your content"
        ],
        [
          "Reply wording",
          "Exactly what you wrote",
          "Written fresh each time from your content"
        ],
        [
          "Setup work",
          "Designing every path",
          "Gathering and tidying your content"
        ],
        [
          "Upkeep",
          "Edit the flow when offers change",
          "Update documents and FAQs when facts change"
        ],
        [
          "Best at",
          "Choices, step-by-step questions, fixed wording",
          "Open questions across many topics"
        ],
        [
          "Main risk",
          "Customers stuck in a loop",
          "Wrong answers from missing or old content"
        ],
        [
          "Hand-over to a person",
          "A menu option or step you add",
          "Hands the chat over when needed"
        ]
      ]
    },
    { type: "h2", text: "When should you use a scripted bot?" },
    {
      type: "p",
      text: "Use a scripted bot when the choices are few and fixed, or when the wording must be exact. Good examples:"
    },
    {
      type: "ul",
      items: [
        "A welcome menu: “1. Packages 2. Visa help 3. Talk to us”",
        "Collecting details in order, such as name, travel month and number of people",
        "Answers that must be word for word, such as a cancellation policy",
        "A business with only a handful of common questions"
      ]
    },
    {
      type: "p",
      text: "Whatching's drag-and-drop [chatbot builder](/features/whatsapp-flows) is made for this: menus, questions, branches and a hand-over to a person, on WhatsApp and Instagram."
    },
    { type: "h2", text: "When should you use an AI chatbot?" },
    {
      type: "p",
      text: "Use an AI chatbot when customers ask many different questions in their own words, and the answers already exist in your documents. Good examples:"
    },
    {
      type: "ul",
      items: [
        "A coaching institute fielding questions about fees, batch timings, study material and hostel options",
        "A real estate developer answering about carpet area, possession dates and amenities across several projects",
        "A travel agency with dozens of packages, each with its own dates, inclusions and prices",
        "Questions that arrive late at night, when nobody on the team is free"
      ]
    },
    {
      type: "p",
      text: "Whatching's [AI agent](/features/ai-chatbot) answers from your own documents, website and FAQs on WhatsApp and Instagram, and hands the chat to a person when needed. There are more examples for [education](/industries/education) and [real estate](/industries/real-estate) businesses on our industry pages."
    },
    { type: "h2", text: "How do you use both together?" },
    {
      type: "p",
      text: "Use the menu for the tasks you can predict, the AI for everything typed outside the menu, and a person for decisions. That way customers who like tapping buttons get buttons, and customers who prefer typing still get an answer."
    },
    {
      type: "ol",
      items: [
        "**Welcome menu.** A short greeting with three or four options as buttons.",
        "**Scripted paths.** Each option runs a short flow, such as asking the travel month and group size.",
        "**AI for open questions.** When the customer types a question, the AI agent answers from your content.",
        "**Hand-over.** When the customer asks for a person, or the question needs a decision, the chat goes to your team.",
        "**Assignment.** Someone on the team picks it up in the [shared inbox](/features/shared-inbox), where chats are assigned to teammates by hand."
      ]
    },
    {
      type: "callout",
      title: "Example: Wanderly Travels",
      text: "Wanderly Travels, a fictional agency, opens every chat with three buttons: Summer Escape packages, Visa help, Talk to us. Tapping a package asks for the month and group size. A customer who instead types “is Bali okay for a family with a 2-year-old?” gets an answer from Wanderly's package notes. Anyone ready to book is handed to a travel planner, who confirms the booking and takes payment."
    },
    { type: "h2", text: "How do you prepare your content for an AI chatbot?" },
    {
      type: "p",
      text: "Prepare content the way you would brief a new staff member: the common questions, the correct answers and the things they should leave to a senior. The AI can only answer from what you give it."
    },
    {
      type: "ol",
      items: [
        "**List the real questions.** Read through last month's chats and note the questions that come up again and again.",
        "**Write one clear answer for each** in a single FAQ document, in plain language.",
        "**Add your core documents:** price lists, brochures, course details, policies, timings and addresses.",
        "**Remove anything old.** Expired offers and last year's prices cause most wrong answers.",
        "**Date your facts.** Write “Prices valid from 1 November 2026 to 31 March 2027” instead of “current prices”.",
        "**State what your team handles.** For example, that bookings, refunds and discounts are confirmed by a person, so the AI points customers to them.",
        "**Add your website pages** that answer common questions, such as the FAQ or the contact page."
      ]
    },
    { type: "h2", text: "How do you keep AI answers accurate?" },
    {
      type: "p",
      text: "Keep answers accurate by updating your content whenever a fact changes, and by checking real chats regularly. Treat it as a routine task, like updating the price board in the shop."
    },
    {
      type: "ul",
      items: [
        "**Test before going live.** Ask 20 or so real questions in different ways, including Hinglish and spelling mistakes, and check every answer.",
        "**Review chats every week.** Look for wrong or vague answers and fix the content behind them.",
        "**Update on the day things change:** new prices, a new batch, a sold-out date.",
        "**Keep sensitive matters with people:** bookings, payments, refunds, complaints, and anything medical or legal.",
        "**Say it is automated.** A short line in the greeting sets expectations.",
        "**Make the hand-over easy to find,** so customers can always reach a person."
      ]
    },
    {
      type: "callout",
      title: "Meta's rules that apply to any WhatsApp chatbot",
      text: "A bot's free-form replies can only be sent within 24 hours of the customer's last message, the customer service window. Each new message from the customer restarts it. After it closes, you can only send approved template messages. Separately, Meta's terms updated on 15 January 2026 limit what “AI Providers” can offer on WhatsApp. Meta defines these as providers and developers of AI technologies such as large language models and general-purpose AI assistants, and says the change does not alter how it charges other businesses."
    },
    { type: "h2", text: "What does running a chatbot on WhatsApp cost?" },
    {
      type: "p",
      text: "Bot replies inside the 24-hour window are service messages. Each business number gets 1,000 free service messages a month, and after that Meta charges ₹0.1150 for each delivered service message to an Indian number, from 1 October 2026. Messages customers send you are free."
    },
    {
      type: "p",
      text: "Your Whatching plan is separate: Basic is ₹2,499 and Pro is ₹3,999 a month, plus 18% GST, with Meta's charges passed on at 0% markup. The Instagram AI agent is part of Pro. See the [Meta charges on our pricing page](/pricing#meta-charges) for how the two add up."
    },
    { type: "h2", text: "Which should you choose?" },
    {
      type: "ul",
      items: [
        "**A handful of fixed questions and tasks:** start with a scripted bot.",
        "**Many different questions, answers spread across documents:** add an AI agent.",
        "**Both kinds of customer:** run a menu first, AI for typed questions, and a hand-over to a person.",
        "**Any setup:** keep bookings, payments and complaints with your team."
      ]
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Can a WhatsApp AI chatbot reply after 24 hours?",
      answer:
        "Not with a free-form reply. Free-form messages, from a bot or a person, can only be sent within 24 hours of the customer's last message. After that, you can only send a template message that Meta has approved, and Meta charges for it by category."
    },
    {
      question: "Will an AI chatbot make up answers?",
      answer:
        "It answers from the content you give it, so most wrong answers come from missing or outdated content. Test it with real questions before going live, review chats each week, date your prices and policies, and make sure customers can always reach a person for anything the AI should not decide."
    },
    {
      question: "Can the AI chatbot take bookings or payments?",
      answer:
        "Keep bookings and payments with your team. Whatching's AI agent answers questions from your documents, website and FAQs and hands the chat to a person when needed. A teammate then confirms the booking or shares payment details, which keeps the final decision with someone who can check availability."
    },
    {
      question: "Do I need to know coding to build a WhatsApp chatbot?",
      answer:
        "No. Whatching's chatbot builder is drag and drop, so you arrange menus, questions, branches and hand-over steps on screen. The AI agent learns from documents, website pages and FAQs that you add, so the main work is writing and organising your content."
    },
    {
      question: "Does the same chatbot work on Instagram?",
      answer:
        "Yes. Whatching's chatbot builder works for WhatsApp and Instagram, and the AI agent answers on both. Instagram features, including the Instagram AI agent, are part of the Pro plan at ₹3,999 a month plus 18% GST."
    }
  ],
  sources: [
    {
      label: "Meta: Service messages and customer service windows",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages"
    },
    {
      label: "Meta: Pricing on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
    },
    {
      label:
        "Meta: Pricing policy for AI Providers on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/ai-providers"
    },
    {
      label: "Meta: Instagram messaging, automated experiences and disclosure",
      url: "https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/messaging-api"
    }
  ],
  related: [
    "instagram-comment-automation-guide",
    "whatsapp-business-api-explained",
    "whatsapp-business-api-pricing-india"
  ],
  relatedFeatures: ["ai-chatbot", "whatsapp-flows", "shared-inbox"]
};

export default post;
