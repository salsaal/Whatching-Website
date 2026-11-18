import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "how-to-get-whatsapp-business-api",
  title: "How to get the WhatsApp Business API: what you need and every step",
  seoTitle: "How to get WhatsApp Business API: steps and checklist",
  excerpt:
    "What Meta asks for before you can use the WhatsApp Business API, each step of the signup through a provider, what happens to your current number and how to fix common errors.",
  seoDescription:
    "How to get the WhatsApp Business API: what Meta asks for, each step of its signup flow, what happens to your current number and how to fix common errors.",
  category: "Setup",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "how to get whatsapp business api",
  summary:
    "To get the WhatsApp Business API, you sign up through a provider such as Whatching, which opens Meta's own signup window. You log in with Facebook, enter a phone number and verify it with a code by SMS or call, choose or create a Meta business portfolio, and set a display name. Business verification can come later, but it raises your sending limits.",
  blocks: [
    {
      type: "p",
      text: "The WhatsApp Business API is the official way for business software to send and receive WhatsApp messages on your number. Meta calls the whole system the WhatsApp Business Platform, and the part that carries messages is the Cloud API. You don't need to touch the API yourself. You sign up with a provider, and the provider's software does the technical work."
    },
    {
      type: "p",
      text: "This guide covers what Meta asks for before you start, each screen of the signup, what happens to the WhatsApp number you already use, and the common errors that stop a signup. Every requirement here comes from Meta's developer documentation, listed at the end."
    },
    {
      type: "h2",
      text: "What do you need to get the WhatsApp Business API?"
    },
    {
      type: "p",
      text: "You need a Facebook account that can manage your business on Meta, a Meta business portfolio, a phone number that can receive a verification code, and a display name for that number. Before you can send messages, Meta also needs billing set up on the account."
    },
    {
      type: "table",
      caption: "What to have ready before you sign up",
      head: ["What you need", "What it is", "What Meta asks for"],
      rows: [
        [
          "Facebook account",
          "Your login for Meta's business tools",
          "The signup asks you to log in with Facebook or Meta business credentials"
        ],
        [
          "Meta business portfolio",
          "Meta's account for your business, which many people still call Business Manager",
          "Pick an existing one or create one during signup. You need admin access to create WhatsApp accounts in it"
        ],
        [
          "Phone number",
          "The number customers will message",
          "Owned by you, with a country and area code, and able to receive an SMS or voice call. Short codes are not supported"
        ],
        [
          "Display name",
          "The business name on your WhatsApp profile",
          "Entered during signup and checked later against Meta's display name guidelines"
        ],
        [
          "Business details",
          "Name, email, country and website",
          "Asked for if you create a new business portfolio"
        ]
      ]
    },
    {
      type: "p",
      text: "How billing works depends on the provider, so ask yours. On Whatching, Meta's message charges are passed on at 0% markup, and you can see Meta's current rates on our [pricing page](/pricing#meta-charges)."
    },
    {
      type: "h2",
      text: "Do you need business verification first?"
    },
    {
      type: "p",
      text: "No. You can connect a number and start messaging before Meta verifies your business. Verification matters soon after, because several of Meta's limits depend on it:"
    },
    {
      type: "ul",
      items: [
        "**Messaging limit**: a new business portfolio can message 250 unique customers in a rolling 24 hours outside a customer service window, which is the 24 hours after a customer last messaged you. Verifying your business is one way to raise this to 2,000.",
        "**Phone numbers**: a new business portfolio can register two business phone numbers. Meta raises the cap to 20 once the business is verified or reaches the 2,000 limit.",
        "**WhatsApp accounts**: Meta allows only a limited number of WhatsApp accounts under a business that is not yet verified.",
        "**Blue checkmark**: Official Business Account status, which many people call the green tick, needs a verified business portfolio. Our [green tick guide](/blog/whatsapp-green-tick-verification) has the full list of requirements."
      ]
    },
    {
      type: "p",
      text: "Business verification happens in Meta Business Suite, where you submit official business documents for Meta to review. Meta's developer pages give no standard review time for it."
    },
    {
      type: "h2",
      text: "Which phone number can you use?"
    },
    {
      type: "p",
      text: "You can use any number you own that has a country and area code and can receive an SMS or a voice call. Meta recommends a mobile number. A landline can work if you choose the voice call option for the code, because Meta lists SMS codes as not recommended for fixed lines."
    },
    {
      type: "p",
      text: "Numbers behind a phone menu, known as IVR, are harder. The verification call can't press keys to get through the menu, and Meta's signup error list says IVR numbers are not currently supported. A mobile number is the simpler choice."
    },
    {
      type: "p",
      text: "Once a number is registered on the API, it can still make normal calls and receive SMS. It can't be used in the regular WhatsApp apps any more, unless you connect it through coexistence, covered next."
    },
    {
      type: "h2",
      text: "What happens to your existing WhatsApp number?"
    },
    {
      type: "p",
      text: "A number already on WhatsApp can't be registered for the API until its WhatsApp account is deleted, with one exception. A number on the WhatsApp Business app can connect to the API through coexistence and stay on the app as well."
    },
    {
      type: "table",
      caption: "Your options, by where the number is today",
      head: [
        "Where the number is now",
        "Your options",
        "What happens to your chats"
      ],
      rows: [
        [
          "Personal WhatsApp",
          "Move the number to the WhatsApp Business app and connect it through coexistence. Or delete the WhatsApp account on it and register it fresh",
          "With coexistence the number stays on the app. Deleting the account loses the message history"
        ],
        [
          "WhatsApp Business app",
          "Connect it through coexistence and keep using the app. Or delete the account and use the number on the API only",
          "Coexistence keeps the app and can sync up to six months of chats. Deleting loses the history, and the number can't go back to the app until it is removed from the API"
        ],
        ["Not on WhatsApp", "Register it during signup", "Nothing to move"]
      ]
    },
    {
      type: "p",
      text: "If you decide to delete, back up your chats first. The option is in the app under Settings, then Account, then Delete my account. Meta says it can take up to 3 minutes for the number to become available afterwards, and messages sent to it in the meantime are queued."
    },
    {
      type: "p",
      text: "Whatching supports coexistence, so you can keep the WhatsApp Business app on your phone and use Whatching on the same number. Our [coexistence guide](/blog/whatsapp-coexistence) explains what syncs and what changes in the app."
    },
    {
      type: "h2",
      text: "How do you sign up for the WhatsApp Business API through Whatching?"
    },
    {
      type: "p",
      text: "You connect your number from inside Whatching. Whatching opens Meta's Embedded Signup, a window run by Meta that collects your details and creates your WhatsApp accounts. The steps below follow Meta's current version of the flow, which asks for the phone number first."
    },
    {
      type: "ol",
      items: [
        "**Start the connection in Whatching.** Meta's signup window opens.",
        "**Log in with Facebook.** Use the account that manages your business on Meta.",
        "**Review the access you are giving.** Meta lists the WhatsApp permissions Whatching will have and the terms you accept.",
        "**Enter your business phone number.** If the number is already on the WhatsApp Business app, Meta moves you into the coexistence flow automatically.",
        "**Verify the number.** Choose a text message or a phone call, then type in the code you receive.",
        "**Choose or create your business assets.** Pick an existing business portfolio and WhatsApp account, or create new ones.",
        "**Enter your display name.** This is the business name customers see on your WhatsApp profile.",
        "**Confirm and finish.** Meta shows a summary of permissions, then a success screen once it has created and linked everything."
      ]
    },
    {
      type: "p",
      text: "Some screens may be filled in for you or skipped, so yours can look slightly different. When you finish, Meta passes the account details back to Whatching to complete the connection. You own the WhatsApp assets that were created, and you keep full access to WhatsApp Manager, Meta's own tool for your account, where you can see your number, its status and its limits."
    },
    {
      type: "p",
      text: "If you would rather do this with someone, Whatching offers a free onboarding call to anyone who fills in the demo form, and the team helps you connect the number on the call."
    },
    { type: "embed", name: "demo" },
    {
      type: "h2",
      text: "What are the display name rules?"
    },
    {
      type: "p",
      text: "You give a display name when you register the number, and it shows on your business's WhatsApp profile. Meta checks it against its display name guidelines automatically once your number reaches a higher messaging limit. After approval, the name can also appear at the top of chats and in customers' chat lists."
    },
    {
      type: "ul",
      items: [
        "If a customer has saved your number in their phone with a different name, they see the name they saved.",
        "If Meta rejects the name, you can edit it to fit the guidelines or appeal through Meta's developer support.",
        "You can change the display name up to 10 times in 30 days. Each change is reviewed again.",
        "Once your number has the blue checkmark, display name changes go through Meta's direct support."
      ]
    },
    {
      type: "p",
      text: "Meta publishes the full guidelines in its Business Help Centre. The safest choice is the name customers already know you by, written the way it appears on your shop sign, website or invoices."
    },
    {
      type: "h2",
      text: "How long does it take to get the WhatsApp Business API?"
    },
    {
      type: "p",
      text: "The signup itself is a short series of screens. Meta doesn't publish an overall timeline for the steps it reviews, such as business verification or display name approval. The waits it does state are these:"
    },
    {
      type: "ul",
      items: [
        "Up to 3 minutes for a number to become available after you delete its WhatsApp account.",
        "15 minutes before you retry, after disconnecting a WhatsApp Business app number from another platform.",
        "From a few minutes to more than a day for a number that is still being disconnected from a previous connection.",
        "Within 6 hours for an automatic messaging limit increase, once you meet Meta's criteria.",
        "Several minutes for coexistence to sync your app chats, depending on how much history you have."
      ]
    },
    {
      type: "h2",
      text: "Why does WhatsApp Business API signup fail?"
    },
    {
      type: "p",
      text: "Meta's error messages usually say what went wrong. These are common ones, with the fix Meta suggests for each."
    },
    {
      type: "table",
      caption: "Common signup errors and Meta's suggested fixes",
      head: ["What you see", "Why it happens", "What to do"],
      rows: [
        [
          "Number already registered on WhatsApp",
          "The number is on personal WhatsApp or the WhatsApp Business app",
          "Move it to the WhatsApp Business app and connect through coexistence, delete the WhatsApp account, or use another number"
        ],
        [
          "Number already connected to another platform",
          "A previous provider is still connected",
          "In the WhatsApp Business app, go to Settings, Account, Business Platform and tap Disconnect. Wait 15 minutes and try again"
        ],
        [
          "Too many codes requested",
          "Meta limits how often you can ask for a verification code",
          "Wait for the time shown in the message, then request a new code"
        ],
        [
          "Couldn't send a text to this number",
          "The number can't receive the SMS",
          "Ask for the code by voice call instead"
        ],
        [
          "Facebook account too new",
          "New Facebook accounts must wait before creating a business portfolio",
          "Try again in an hour, or use an existing, active account"
        ],
        [
          "No permission to create WhatsApp accounts",
          "You are not an admin of the business portfolio you picked",
          "Get admin access, or choose a portfolio you manage"
        ],
        [
          "Limited WhatsApp accounts before verification",
          "The business portfolio is not verified yet",
          "Start business verification in Meta Business Suite, or use an existing WhatsApp account"
        ],
        [
          "Number isn't eligible yet",
          "A WhatsApp Business app number needs more activity in the app first",
          "Keep using it in the app and try later, or use a different number"
        ],
        [
          "Account restricted or number blocked",
          "Meta has restricted the account or blocked the number",
          "Check Business Support Home for the reason and appeal if one is offered"
        ]
      ]
    },
    {
      type: "p",
      text: "If your WhatsApp Business app is out of date, Meta asks you to update it before the number can connect. Coexistence needs version 2.24.17 or higher."
    },
    {
      type: "h2",
      text: "What happens after you are connected?"
    },
    {
      type: "p",
      text: "Once billing is in place, you can reply to customers who message you. To start a conversation yourself, you send a template, which is a message written in advance and approved by Meta. Whatching lets you create and manage templates and send them as [broadcasts](/features/whatsapp-broadcast)."
    },
    {
      type: "p",
      text: "Your first limit is 250 unique customers in a rolling 24 hours for messages outside a customer service window. Our guide to [WhatsApp messaging limits](/blog/whatsapp-messaging-limits) explains how Meta raises it. Meta charges for each delivered message by type, separately from your Whatching plan of ₹2,499 (Basic) or ₹3,999 (Pro) a month plus 18% GST."
    },
    {
      type: "p",
      text: "You can try Whatching's Pro plan free for 7 days, with no card needed."
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Is the WhatsApp Business API free?",
      answer:
        "No. Meta charges for each delivered message your business sends, at a rate that depends on the message type, and most businesses also pay a provider for the software they use. Whatching's plans are ₹2,499 or ₹3,999 a month plus 18% GST, with Meta's charges passed on at 0% markup. Pro has a free 7-day trial with no card needed."
    },
    {
      question: "Can I use my current WhatsApp number for the API?",
      answer:
        "Yes. If the number is on the WhatsApp Business app, you can connect it through coexistence and keep using the app. If it is on personal WhatsApp, move it to the WhatsApp Business app first, or delete that WhatsApp account and register the number fresh. Deleting loses your chat history, so back it up before you do."
    },
    {
      question: "Do I need business verification before I can send messages?",
      answer:
        "No. You can connect and start messaging before verification. Until your business is verified, or you complete another of Meta's scaling paths, you can message 250 unique customers in a rolling 24 hours outside a customer service window and register up to two numbers. Verification lifts these caps and is required for the blue checkmark."
    },
    {
      question: "Can I get the WhatsApp Business API directly from Meta?",
      answer:
        "Yes, if you have a developer. Meta's Cloud API can be set up directly by creating an app in Meta's App Dashboard, but you then need your own software to send and receive messages. A provider such as Whatching gives you an inbox, templates and broadcasts on top of the API without writing code."
    },
    {
      question: "Can I use a landline number for the WhatsApp Business API?",
      answer:
        "Yes, if you own it and it can receive a voice call. Meta lists voice codes as standard for landlines and SMS codes as not recommended, so choose the phone call option when you verify. Numbers behind a phone menu (IVR) are not currently supported in Meta's signup flow."
    },
    {
      question: "How many phone numbers can I connect?",
      answer:
        "A new business portfolio can register two business phone numbers. Meta raises the cap to 20 automatically once your business is verified or your portfolio reaches the 2,000 messaging limit. All numbers in a portfolio share one messaging limit, so extra numbers don't add to how many customers you can message."
    }
  ],
  sources: [
    {
      label: "Meta: Embedded Signup",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/overview"
    },
    {
      label: "Meta: Embedded Signup default flow",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow"
    },
    {
      label: "Meta: Embedded Signup flow errors",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/errors"
    },
    {
      label: "Meta: Business phone numbers",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"
    },
    {
      label: "Meta: Display names",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names"
    },
    {
      label: "Meta: Migrate an existing WhatsApp number to a business account",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/migrate-existing-whatsapp-number-to-a-business-account"
    },
    {
      label: "Meta: Onboard WhatsApp Business app users (coexistence)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users"
    },
    {
      label: "Meta: Messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits"
    },
    {
      label: "Meta: WhatsApp Cloud API get started",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started"
    }
  ],
  related: [
    "whatsapp-coexistence",
    "whatsapp-messaging-limits",
    "whatsapp-business-app-vs-api"
  ],
  relatedFeatures: ["whatsapp-broadcast", "shared-inbox"]
};

export default post;
