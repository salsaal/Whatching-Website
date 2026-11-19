import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-coexistence",
  title: "WhatsApp coexistence: use the Business app and the API on one number",
  seoTitle: "WhatsApp coexistence: Business app and API, one number",
  excerpt:
    "How coexistence lets you keep the WhatsApp Business app while using Whatching on the same number, what syncs, what Meta switches off and how to set it up.",
  seoDescription:
    "WhatsApp coexistence explained: keep the WhatsApp Business app and use the API on one number. What syncs, what Meta switches off and how to set it up.",
  category: "Setup",
  cover: {
    big: "App + API",
    small: "One number, both at once"
  },
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "whatsapp coexistence",
  summary:
    "WhatsApp coexistence lets you keep using the WhatsApp Business app on your phone while a platform such as Whatching uses the same number through Meta's API. Messages are mirrored between the two, and up to six months of one-to-one chats and your contacts can be synced. Some app features switch off, including broadcast lists, disappearing messages and live location.",
  blocks: [
    {
      type: "p",
      text: "Many small businesses in India run on a WhatsApp Business app number that customers have known for years. Moving that number to the API without coexistence means deleting the app account and losing its chat history. With coexistence, the app stays on your phone and the same number also works through the WhatsApp Business Platform."
    },
    {
      type: "p",
      text: "This guide sets out what Meta's coexistence documentation says: what syncs, what changes in the app, the limits Meta lists, what it costs and how to set it up through Whatching."
    },
    {
      type: "h2",
      text: "What is WhatsApp coexistence?"
    },
    {
      type: "p",
      text: "Coexistence is the name Meta uses in support channels and partner documentation for connecting an existing WhatsApp Business app account and number to the Cloud API, the part of the WhatsApp Business Platform that carries messages. After you connect, you can send high volumes of messages through a platform, keep sending one-to-one messages from the app, and WhatsApp keeps the message history in sync between the two."
    },
    {
      type: "p",
      text: "You keep the same number and the same account name. During setup, Meta converts your existing WhatsApp Business account so the platform can use it."
    },
    {
      type: "figure",
      name: "coexistence",
      caption:
        "With coexistence, the WhatsApp Business app and Whatching use the same number. One-to-one chats from the last 6 months and your contacts can sync, from Meta's coexistence documentation."
    },
    {
      type: "h2",
      text: "What syncs between the WhatsApp Business app and the platform?"
    },
    {
      type: "p",
      text: "One-to-one chats and contacts sync. Group chats don't. Here is what carries across, from Meta's documentation:"
    },
    {
      type: "table",
      caption: "What syncs with coexistence",
      head: ["What", "Syncs to the platform?", "Details from Meta"],
      rows: [
        [
          "One-to-one chats",
          "Yes",
          "Chat messages from the most recent 6 months can be synced. New messages sent and received are mirrored between the app and the platform"
        ],
        [
          "Contacts",
          "Yes",
          "All contacts with a WhatsApp number can be synced"
        ],
        ["Group chats", "No", "Group chats are not synced"],
        [
          "Photos and files in past chats",
          "Partly",
          "The files themselves come across only for media messages sent within 14 days of connecting"
        ],
        [
          "Messages you send from the app after connecting",
          "Yes",
          "Each one is passed to the platform so it appears in the chat history there"
        ]
      ]
    },
    {
      type: "p",
      text: "Sharing past chats is your choice. During setup, the app asks you to confirm whether to share your chat history. If you decline, your past chats are not shared with the platform."
    },
    {
      type: "p",
      text: "Meta gives the provider 24 hours after you connect to finish syncing. If it isn't done in time, the number has to be disconnected and connected again. Meta advises keeping the WhatsApp Business app open while this runs, and says it can take several minutes, depending on how much history you have and your internet speed."
    },
    {
      type: "h2",
      text: "What changes in the WhatsApp Business app after you connect?"
    },
    {
      type: "p",
      text: "Most of the app works as before. Meta switches off a few features in one-to-one chats and makes broadcast lists read-only:"
    },
    {
      type: "table",
      caption:
        "WhatsApp Business app features after connecting through coexistence",
      head: ["App feature", "After connecting"],
      rows: [
        [
          "Broadcast lists",
          "Disabled. You can't create new ones, and existing lists become read-only"
        ],
        ["Disappearing messages", "Turned off for all one-to-one chats"],
        ["View once messages", "Disabled for all one-to-one chats"],
        ["Live location", "Disabled for all one-to-one chats"],
        ["Editing and deleting sent messages", "Now supported"],
        [
          "Group chats, voice and video calls, channels",
          "No change in the app"
        ],
        ["Catalogue, orders and status", "No change in the app"],
        [
          "Greeting and away messages, quick replies, labels",
          "No change in the app"
        ],
        ["Business profile", "No change in the app"]
      ]
    },
    {
      type: "p",
      text: "Features that stay in the app don't come across to the platform. Calls, groups, your catalogue, labels and quick replies remain in the app only. To send offers to many customers at once, you use Meta-approved templates sent as [broadcasts](/features/whatsapp-broadcast) from the platform in place of broadcast lists."
    },
    {
      type: "h2",
      text: "What limitations does Meta list for coexistence?"
    },
    {
      type: "ul",
      items: [
        "**Sending speed**: a number used on both the app and the platform has a fixed throughput of 20 messages per second. Throughput is how fast messages go out, and it is separate from your [daily messaging limit](/blog/whatsapp-messaging-limits).",
        "**Linked devices**: you can link up to four companion devices to the app account. Connecting unlinks all of them, and you then link the supported ones again. WhatsApp for Windows and WhatsApp for Wear OS are not supported.",
        "**The 24-hour window starts after connecting**: if a customer messaged you just before you connected, the platform can only reply with a template. Messages that arrive after connecting open the usual 24-hour customer service window, in which you can send normal replies.",
        "**App messages sit outside the window rules**: messages you send from the app don't open, extend or affect the platform's customer service windows or charges.",
        "**Your phone needs to stay active**: Meta's list of disconnection reasons includes the main phone being inactive for about 14 days, and a linked device being inactive for about 30 days.",
        "**Changing phones disconnects the platform**: if you move to a new phone or reinstall the app, the connection drops. When you register on the new device, the app lists your connected platforms with the option already ticked. If you leave it ticked, Meta reconnects in the background, usually within a few minutes.",
        "**Switching providers**: if a previous provider still shares its credit line with your account, you may see an error until that is removed.",
        "**Not every number qualifies yet**: Meta may say a number needs more activity in the app before it can connect, and the feature is unavailable for numbers from some regions."
      ]
    },
    {
      type: "h2",
      text: "How much does WhatsApp coexistence cost?"
    },
    {
      type: "p",
      text: "Messages you send from the WhatsApp Business app stay free. Messages sent through the platform follow Meta's Cloud API pricing, which charges for each delivered message by message type. On Whatching, Meta's charges are passed on at 0% markup, and the plans are ₹2,499 (Basic) or ₹3,999 (Pro) a month plus 18% GST. See [Meta's charges](/pricing#meta-charges) for the current rates."
    },
    {
      type: "h2",
      text: "Who is WhatsApp coexistence right for?"
    },
    {
      type: "p",
      text: "Coexistence suits businesses that already have customers on a WhatsApp Business app number and have outgrown what one phone can handle. It fits well when:"
    },
    {
      type: "ul",
      items: [
        "The owner wants to keep replying from their phone while staff answer from a [shared team inbox](/features/shared-inbox).",
        "The business wants template broadcasts, a chatbot or an AI agent on the number customers already know.",
        "Changing the number printed on shop boards, visiting cards and ads would cost time and money."
      ]
    },
    {
      type: "p",
      text: "It suits less well if you depend on broadcast lists, disappearing messages or live location in the app, or if you need to send faster than 20 messages per second."
    },
    {
      type: "p",
      text: "For example, Wanderly Travels, a fictional agency, has used one WhatsApp Business app number for five years. With coexistence, the owner keeps the app for quick replies to regular clients, while two staff members handle new holiday enquiries in Whatching's shared inbox, where chats are assigned by hand. Monsoon offers go out as template broadcasts to clients who opted in."
    },
    {
      type: "h2",
      text: "How do you set up WhatsApp coexistence with Whatching?"
    },
    {
      type: "p",
      text: "You connect from inside Whatching, which opens Meta's own signup window. The full signup is covered in [how to get the WhatsApp Business API](/blog/how-to-get-whatsapp-business-api). For a WhatsApp Business app number, prepare as follows."
    },
    {
      type: "h3",
      text: "Before you start"
    },
    {
      type: "ul",
      items: [
        "Update the WhatsApp Business app. Meta requires version 2.24.17 or higher, and the signup may ask for the latest version.",
        "Back up your chats in the app as a precaution.",
        "Disconnect any other business platform from the number. In the app, go to Settings, Account, Business Platform, choose the platform and tap Disconnect. Meta asks you to wait 15 minutes before trying again.",
        "If the number uses Meta Business Agent, Meta's AI in the WhatsApp Business app, disconnect it in its Response settings first. If Auto lists are on under Business Tools, then Lists, turn them off.",
        "Keep your phone nearby with the app open."
      ]
    },
    {
      type: "h3",
      text: "The steps"
    },
    {
      type: "ol",
      items: [
        "**Start the connection in Whatching.** Meta's signup window opens.",
        "**Log in with Facebook** and review the access Whatching is asking for.",
        "**Enter your WhatsApp Business app number.** Meta recognises it and moves you into the coexistence flow.",
        "**Check your business profile.** Meta shows the profile picture, name, category and website from your app. Confirm it is the right account.",
        "**Choose or create a business portfolio.** A new one asks for your business name, email, country and website.",
        "**Scan the QR code from inside the WhatsApp Business app.** Meta also sends a WhatsApp message to the number with a link to the code. The flow moves on once you scan it.",
        "**Choose whether to share your chat history** if the app asks.",
        "**Confirm your account name and pick a time zone**, then accept the terms.",
        "**Keep the app open** while the sync finishes. The app refreshes to show that the number is connected to the API."
      ]
    },
    {
      type: "p",
      text: "Meta updates these screens from time to time, so yours may look slightly different. If you would rather do it with someone, fill in the demo form for a free onboarding call, where the Whatching team helps you connect the number."
    },
    { type: "embed", name: "demo" },
    {
      type: "h2",
      text: "How do you turn coexistence off?"
    },
    {
      type: "p",
      text: "From the app. In the WhatsApp Business app, go to Settings, then Account, then Business Platform, and tap Disconnect Account. This ends the platform's connection to your number, and the number stays on your WhatsApp Business app."
    },
    {
      type: "p",
      text: "You can try Whatching's Pro plan free for 7 days, with no card needed."
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Will I lose my WhatsApp Business app chats with coexistence?",
      answer:
        "No. Your chats stay in the app on your phone. If you agree to share your history, up to six months of one-to-one chats can be synced to the platform, with files included for media sent within 14 days of connecting. Group chats are not synced. Deleting the app account to move to the API is what loses history."
    },
    {
      question: "Can I use coexistence with a personal WhatsApp number?",
      answer:
        "Not directly. Meta's flow connects numbers that are on the WhatsApp Business app. If your number is on personal WhatsApp, move it to the WhatsApp Business app first, then connect it. Meta's signup shows an error asking you to do this if you enter a number that is on personal WhatsApp."
    },
    {
      question: "Can my team and I reply from both the app and Whatching?",
      answer:
        "Yes. Messages sent and received are mirrored between the app and the platform. Replies sent from the platform follow Meta's 24-hour customer service window and its Cloud API pricing. Replies sent from the app are free and don't affect the platform's windows or charges."
    },
    {
      question:
        "Do WhatsApp Business app broadcast lists still work after connecting?",
      answer:
        "No. Meta disables broadcast lists in the app once you connect. You can't create new ones, and existing lists become read-only. To message many customers at once, you send Meta-approved templates as broadcasts from the platform, which Meta charges for each delivered message."
    },
    {
      question: "What happens to coexistence if I change my phone?",
      answer:
        "The platform connection drops when you change devices or reinstall the app. When you register the app on the new phone, it lists your previously connected platforms with the option ticked. If you leave it ticked, Meta reconnects in the background, usually within a few minutes, and messaging through the platform resumes."
    },
    {
      question: "Can a coexistence number get the green tick?",
      answer:
        "Meta's Official Business Accounts page says it doesn't grant the status to WhatsApp Business app phone numbers, and it doesn't address numbers used on both the app and the platform. If the checkmark matters to you, check with Meta Support before you rely on it."
    }
  ],
  sources: [
    {
      label: "Meta: Onboard WhatsApp Business app users (coexistence)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users"
    },
    {
      label: "Meta: Embedded Signup default flow (coexistence flow)",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/default-flow"
    },
    {
      label: "Meta: Reconnect offboarded coexistence clients",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/reconnect-offboarded-coexistence-clients"
    },
    {
      label: "Meta: Embedded Signup flow errors",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/errors"
    },
    {
      label: "Meta: Migrate an existing WhatsApp number to a business account",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/migrate-existing-whatsapp-number-to-a-business-account"
    },
    {
      label: "Meta: Official Business Accounts",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts"
    }
  ],
  related: [
    "how-to-get-whatsapp-business-api",
    "whatsapp-business-app-vs-api",
    "whatsapp-messaging-limits"
  ],
  relatedFeatures: ["shared-inbox", "whatsapp-broadcast", "ai-chatbot"]
};

export default post;
