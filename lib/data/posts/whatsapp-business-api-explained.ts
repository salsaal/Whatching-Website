import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-business-api-explained",
  title:
    "What is the WhatsApp Business API? A plain-English guide for small businesses",
  seoTitle: "What is WhatsApp Business API? A plain-English guide",
  excerpt:
    "What the WhatsApp Business API is, how it works with Meta and a provider, what templates and the 24-hour window mean, and what you need to get started.",
  seoDescription:
    "What is WhatsApp Business API? A plain-English guide to how it works, templates, the 24-hour window, what you need and the risks of unofficial tools.",
  category: "WhatsApp API",
  date: "2026-07-10",
  updated: "2026-11-19",
  keyword: "what is whatsapp business api",
  summary:
    "The WhatsApp Business API is Meta's official way for businesses to send and receive WhatsApp messages through software, so a team, a chatbot and an AI agent can share one number. You connect your number through a provider such as Whatching, start chats with Meta-approved templates, reply freely within 24 hours of a customer's last message, and pay Meta for each delivered message.",
  blocks: [
    {
      type: "p",
      text: 'If you have heard that you need "the API" to send WhatsApp broadcasts, run a chatbot or share chats across a team, this guide explains what that means without technical language. It covers how the WhatsApp Business API works, the two rules that shape every message you send, what you need to start and how to choose a provider.'
    },
    {
      type: "h2",
      text: "What is the WhatsApp Business API?"
    },
    {
      type: "p",
      text: "The WhatsApp Business API is the official way for software to send and receive WhatsApp messages on a business's phone number. API stands for application programming interface, which simply means a connection that lets one piece of software talk to another. Meta, which owns WhatsApp, calls the whole system the WhatsApp Business Platform."
    },
    {
      type: "p",
      text: "There is nothing to download. Your number is connected to Meta's platform, and you work through a provider's software, where several people, a chatbot and an AI agent can all use the same number. That is the main difference from the WhatsApp Business app on your phone, and our [app vs API comparison](/blog/whatsapp-business-app-vs-api) sets the two side by side."
    },
    {
      type: "h2",
      text: "How does the WhatsApp Business API work?"
    },
    {
      type: "p",
      text: "Three parties are involved. Meta runs the platform and delivers the messages, a software provider such as Whatching gives you the screens to work in, and your business decides what to send and who replies."
    },
    {
      type: "p",
      text: "Here is how a typical day might look for Wanderly Travels, a fictional travel agency we use as an example:"
    },
    {
      type: "ol",
      items: [
        "A customer sends a WhatsApp message to Wanderly's number asking about a Goa package.",
        "Meta's platform passes the message to Whatching, where it appears in the shared team inbox.",
        "A chatbot asks a couple of questions, such as travel dates and number of people, then hands the chat to a teammate.",
        "The teammate replies from Whatching. Meta delivers the reply to the customer's WhatsApp as normal.",
        "That evening, Wanderly sends an approved offer template to customers who have agreed to hear from it, and sees how many were delivered, read and replied to."
      ]
    },
    {
      type: "p",
      text: "The customer sees an ordinary WhatsApp chat with your business name. They don't need to install anything or know which software you use."
    },
    {
      type: "h2",
      text: "What is a WhatsApp message template?"
    },
    {
      type: "p",
      text: "A template is a message you write in advance and submit to Meta for approval before you can send it. Templates are the only messages you can send to a customer who hasn't written to you in the last 24 hours, so every broadcast, reminder and first message from your side is a template."
    },
    {
      type: "p",
      text: "Each template has a category, which also sets its price:"
    },
    {
      type: "ul",
      items: [
        "**Marketing**: offers, launches, greetings and anything promotional.",
        "**Utility**: updates about something the customer already has with you, such as a booking or an order. It must contain no promotion.",
        "**Authentication**: one-time login codes."
      ]
    },
    {
      type: "p",
      text: 'Templates can include blanks that are filled in for each person, such as a name or a date. For example, Wanderly might submit: "Hi {{1}}, your trip to {{2}} starts on {{3}}. Reply here if you have any questions." Meta reviews templates automatically when you create or edit them, review can take up to 24 hours, and a template must be approved before you can send it. Meta also checks the category you chose and moves a template with promotional content to marketing.'
    },
    {
      type: "h2",
      text: "What is the 24-hour customer service window?"
    },
    {
      type: "p",
      text: "The 24-hour window opens when a customer messages you and lasts for 24 hours from their latest message. While it is open, you can reply with any normal message, including text, photos, documents and buttons, without needing a template."
    },
    {
      type: "p",
      text: "Each new message from the customer resets the timer to 24 hours. Once the window closes, you can only reach that customer with an approved template. For example, if a Wanderly customer asks about visa documents at 6 pm on 3 December 2026, the team can reply normally until 6 pm on 4 December 2026. After that, a follow-up has to be a template."
    },
    {
      type: "p",
      text: "Meta also watches how customers react. People can block or report a business, and Meta limits businesses whose message quality stays low for a long time."
    },
    {
      type: "h2",
      text: "How much does the WhatsApp Business API cost?"
    },
    {
      type: "p",
      text: "You pay Meta for each message you send that is delivered, and you pay your provider for the software. In India, as of 1 October 2026, Meta charges ₹0.8631 for a marketing message and ₹0.1150 for a utility, authentication or service message (a normal reply inside the 24-hour window)."
    },
    {
      type: "p",
      text: "Messages customers send you are free, and each number gets 1,000 free service messages a month. Whatching's plans start at ₹2,499 a month plus 18% GST, and Meta's charges are passed on at 0% markup. Our [WhatsApp API pricing guide for India](/blog/whatsapp-business-api-pricing-india) has the full rate table and worked monthly examples."
    },
    {
      type: "h2",
      text: "What do you need to start with the WhatsApp Business API?"
    },
    {
      type: "p",
      text: "You need a phone number your business owns, a Meta business portfolio, a display name and a provider. Here is each one in a little more detail:"
    },
    {
      type: "ul",
      items: [
        "**A phone number you own** that can receive a text message or voice call for verification. If the number is already on the WhatsApp Business app, you can keep the app and connect the same number through coexistence. Any other number already on WhatsApp has to be deleted from WhatsApp first.",
        "**A Meta business portfolio**, which is Meta's account for your business. Verifying it is optional at the start, and it is one way to raise how many customers you can message.",
        "**A display name**, the business name customers see. Meta reviews it.",
        "**Customers' permission.** Meta requires people to have agreed to receive messages from your business, with your business name made clear when they agree.",
        "**A provider**, such as Whatching, to connect your number and give you the tools to send and reply."
      ]
    },
    {
      type: "p",
      text: "A new business portfolio can message up to 250 different customers outside the 24-hour window in any moving 24-hour period, and the limit rises as you verify your business and send good-quality messages. Our guide to [WhatsApp messaging limits](/blog/whatsapp-messaging-limits) explains each step, and [how to get the WhatsApp Business API](/blog/how-to-get-whatsapp-business-api) walks through setup."
    },
    {
      type: "h2",
      text: "What are the risks of unofficial WhatsApp bulk senders?"
    },
    {
      type: "p",
      text: "Unofficial bulk senders break WhatsApp's terms, and the number you use with them can be banned. These tools usually automate the ordinary WhatsApp or WhatsApp Business app, or are modified copies of WhatsApp made without its approval."
    },
    {
      type: "p",
      text: "WhatsApp's help centre says unauthorised automated or bulk messaging breaks its Terms of Service. WhatsApp says it uses machine-learning systems to find and ban accounts that do it, and that it takes legal action against companies that help others abuse the service. It also warns that unofficial apps can carry malware and leave your messages and data unprotected."
    },
    {
      type: "ul",
      items: [
        "**Your number can be banned**, temporarily or permanently, taking your customer chats with it.",
        "**Your customer data is exposed** to software WhatsApp cannot vouch for.",
        "**There is no approval or quality system**, so nothing stops messages going to people who never agreed to hear from you."
      ]
    },
    {
      type: "p",
      text: "The official API costs a little per message. In return your number is connected the way Meta intends, every template is approved before it goes out, and you can see what each message costs."
    },
    {
      type: "h2",
      text: "What should you look for in a WhatsApp Business API provider?"
    },
    {
      type: "p",
      text: "Look for a provider built on Meta's official platform that shows Meta's charges clearly and gives your team the tools you will use every day. This checklist covers the basics:"
    },
    {
      type: "ul",
      items: [
        "**Official connection.** The provider should be built on Meta's WhatsApp Business Platform. Whatching is.",
        "**Clear pricing.** You should see the plan price and Meta's charges separately, with any markup stated. Whatching passes Meta's charges on at 0% markup.",
        "**Template management.** You will create, submit and track templates often, so this should be simple.",
        "**A shared inbox and permissions.** Check that you can assign chats to teammates and set what each person is allowed to do.",
        "**Automation with a way out.** A chatbot builder and AI agent are useful only if they hand chats to a person when needed. Whatching's do both.",
        "**Reports you can act on.** Look for broadcast results, button clicks, which ads bring chats and what Meta has charged.",
        "**Keeping your app.** If you rely on the WhatsApp Business app, ask whether the provider supports coexistence on the same number.",
        "**Fair terms.** Look for a free trial and clear billing. Whatching bills monthly, and if you cancel, your plan runs to the end of the paid month."
      ]
    },
    { type: "embed", name: "trial" },
    {
      type: "p",
      text: "You can try Whatching's Pro plan free for 7 days with no card, or fill in the form on our [demo page](/demo) for a free onboarding call. Plans and Meta's rates are on the [pricing page](/pricing)."
    }
  ],
  faq: [
    {
      question: "Is the WhatsApp Business API free?",
      answer:
        "No. Meta charges for each message your business sends that is delivered, at rates that depend on the message category and the customer's country. In India, a marketing message costs ₹0.8631 and most others ₹0.1150 as of 1 October 2026. Messages customers send are free, and each number gets 1,000 free service messages a month. Providers also charge for their software."
    },
    {
      question: "Do I need a developer to use the WhatsApp Business API?",
      answer:
        "Not if you use a provider. The provider handles the connection to Meta, and you work in its screens. In Whatching you send broadcasts with approved templates, build chatbots with a drag-and-drop builder and reply from a shared inbox. A developer is only needed if you want to build your own software on the API."
    },
    {
      question: "Can I keep my existing WhatsApp Business number?",
      answer:
        "Yes. If the number is on the WhatsApp Business app, coexistence lets you keep using the app while the same number is connected to the API through a provider such as Whatching. A number used on a personal WhatsApp account would have to be deleted from WhatsApp before it can be registered for the API."
    },
    {
      question: "How long does WhatsApp template approval take?",
      answer:
        "Meta reviews templates automatically when you create or edit them, and review can take up to 24 hours. A template must be approved before you can send it. Meta also checks the category you chose, and a utility template with promotional content is approved as marketing, which costs more per message."
    },
    {
      question: "Can I message any customer on WhatsApp with the API?",
      answer:
        "Only customers who have agreed to receive messages from your business. Meta requires clear opt-in that names your business. Outside the 24-hour window you must use an approved template, and a new business portfolio can send those to up to 250 different customers in a moving 24-hour period until its limit rises."
    }
  ],
  sources: [
    {
      label: "Meta: Pricing on the WhatsApp Business Platform",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing"
    },
    {
      label: "Meta: Templates overview",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview"
    },
    {
      label: "Meta: Template categorization",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization"
    },
    {
      label: "Meta: Business phone numbers",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"
    },
    {
      label: "Meta: Getting opt-in",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in"
    },
    {
      label: "Meta: Messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits"
    },
    {
      label: "Meta: Onboard WhatsApp Business app users (coexistence)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users"
    },
    {
      label:
        "WhatsApp Help Center: Unauthorized use of automated or bulk messaging",
      url: "https://faq.whatsapp.com/5957850900902049"
    },
    {
      label: "WhatsApp Help Center: About unofficial WhatsApp apps",
      url: "https://faq.whatsapp.com/1217634902127718"
    }
  ],
  related: [
    "whatsapp-business-app-vs-api",
    "whatsapp-business-api-pricing-india",
    "how-to-get-whatsapp-business-api"
  ],
  relatedFeatures: [
    "whatsapp-broadcast",
    "shared-inbox",
    "whatsapp-flows",
    "ai-chatbot"
  ]
};

export default post;
