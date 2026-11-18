import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "instagram-comment-automation-guide",
  title: "How to send an Instagram auto DM when someone comments",
  seoTitle: "Instagram Auto DM from Comment: Setup Guide and Rules",
  excerpt:
    "How comment-to-DM automation works on Instagram, the Meta rules that apply, and how to set up the keyword, the DM, public replies, story replies and hand-over.",
  seoDescription:
    "Set up an Instagram auto DM from a comment keyword: the account you need, Meta's one-message and 7-day rules, writing the DM, public replies and hand-over.",
  category: "Instagram Automation",
  date: "2026-07-28",
  updated: "2026-11-19",
  keyword: "instagram auto dm from comment",
  summary:
    "An Instagram auto DM from a comment uses Meta's private replies feature. When someone comments your chosen keyword on a post or reel, your tool sends them one direct message, within 7 days of the comment. You need an Instagram professional account. You can send more messages only after the person replies, and only within 24 hours of their reply.",
  blocks: [
    {
      type: "p",
      text: "You have seen the pattern: a reel ends with “Comment PRICE and we'll send you the details”, and a message arrives seconds after you comment. For a small business it turns a passing viewer into a conversation without asking them to find a link in your bio. This guide explains how it works, the Instagram rules behind it and how to set one up."
    },
    { type: "h2", text: "How does Instagram comment-to-DM automation work?" },
    {
      type: "p",
      text: "A tool connected to your Instagram account watches for comments that contain your keyword and replies to each one with a direct message. Meta calls this a **private reply**: a DM sent in response to a specific comment."
    },
    {
      type: "ol",
      items: [
        "Someone comments your keyword on your post or reel.",
        "Instagram sends your tool an automatic notice about the comment, called a webhook.",
        "The tool checks the comment for your keyword.",
        "It sends the commenter one private reply. The DM includes a link to the post they commented on.",
        "The DM lands in their main inbox if they follow you, or in their message **Requests** folder if they do not.",
        "If they reply, the conversation is open and your bot or your team can carry on."
      ]
    },
    {
      type: "p",
      text: "Most setups also post a short public reply under the comment, so the commenter and everyone reading knows a DM is on its way."
    },
    { type: "h2", text: "What do you need before you start?" },
    {
      type: "p",
      text: "You need an Instagram professional account, which can be a business or a creator account. Meta's Instagram API, which official automation tools use, works only with professional accounts. You can switch a personal account to professional in the Instagram app's settings."
    },
    {
      type: "ul",
      items: [
        "An Instagram professional account (business or creator)",
        "A tool connected to that account with permission to read comments and send messages",
        "A post or reel with a clear call to action, such as “Comment PRICE”",
        "The content you promised: a price list, a brochure, a link or a short answer",
        "Someone who can reply when people write back"
      ]
    },
    {
      type: "p",
      text: "In Whatching, Instagram automation is part of the Pro plan at ₹3,999 a month plus 18% GST. It covers automatic replies to comments, a DM to people who comment a keyword, story-reply automation and an Instagram AI agent. See how [comment automation](/features/instagram-comment-automation) works, or the wider [Instagram automation](/features/instagram-automation) features."
    },
    { type: "h2", text: "What Instagram rules apply to automated DMs?" },
    {
      type: "p",
      text: "The main rule is that each comment allows one private reply, sent within 7 days of the comment. Everything after that depends on the person writing back. These are the limits in Meta's developer documentation:"
    },
    {
      type: "table",
      caption: "Instagram's rules for comment-to-DM automation",
      head: ["Rule", "What it means for you"],
      rows: [
        [
          "One private reply per comment",
          "Your first DM is a single message, so it has to deliver what you promised on its own."
        ],
        [
          "Sent within 7 days of the comment",
          "The 7 days count from the comment, so a new comment on an old post still qualifies. On Instagram Live, private replies work only while the broadcast is running."
        ],
        [
          "Follow-ups need a reply",
          "You can send more messages only after the person replies, and within 24 hours of their reply."
        ],
        [
          "24-hour messaging window",
          "For most actions, you have 24 hours from the person's message to respond, so plan replies around their latest message."
        ],
        [
          "750 private replies an hour",
          "This is the cap per account for comments on posts and reels. Only a very busy post is likely to reach it."
        ],
        [
          "Text up to 1,000 bytes",
          "About 1,000 characters of English. Hindi in Devanagari script uses more bytes per letter, so keep those messages shorter."
        ]
      ]
    },
    {
      type: "p",
      text: "Meta also asks automated chats to tell people they are talking to an automated service where the law requires it, and recommends doing so everywhere. A short line such as “This is an automatic message from Wanderly Travels” is enough."
    },
    {
      type: "callout",
      title: "Replies after 24 hours",
      text: "Meta allows a separate 7-day window for replies written by a person, using what it calls the human agent tag, for cases a team cannot resolve within 24 hours. Plan to answer within 24 hours anyway, while the customer is still interested."
    },
    {
      type: "h2",
      text: "How do you set up an Instagram auto DM from comments?"
    },
    {
      type: "p",
      text: "Setting one up takes about ten steps, most of them writing. Here is the order we suggest, using Wanderly Travels, a fictional travel agency, as the example."
    },
    {
      type: "ol",
      items: [
        "**Switch to a professional account** if you have not already.",
        "**Connect Instagram** to your automation tool. In Whatching, this is on the Pro plan.",
        "**Choose the post or reel.** Wanderly picks a reel about its Summer Escape packages.",
        "**Pick a keyword** that is short, one word and hard to misspell, such as PRICE. Check how your tool matches it, for example whether “price” and “Price” both count.",
        "**Write the public reply** that appears under each matching comment.",
        "**Write the DM**, covering everything you promised in one message.",
        "**Add the next step**, such as a question, buttons, or a hand-over to your team.",
        "**Test it** by commenting from a second account that does not follow you, so you can see how the DM looks in the Requests folder.",
        "**Publish** the post with the keyword in the caption and on screen.",
        "**Watch the first few hours.** Reply to people who write back and fix anything confusing."
      ]
    },
    { type: "h2", text: "How do you write the DM?" },
    {
      type: "p",
      text: "Write the DM as a complete answer, because Instagram allows only one message until the person replies. Give them what you promised, then ask one easy question so they have a reason to write back."
    },
    {
      type: "ul",
      items: [
        "Thank them and mention the post, so the message makes sense in their inbox.",
        "Deliver the promise in the first message: the price, the link or the brochure.",
        "Use one link. Several links make it unclear what to tap.",
        "End with a simple question, such as which month they want to travel.",
        "Say it is an automatic message, in a few words.",
        "Keep it short enough to read without scrolling."
      ]
    },
    {
      type: "callout",
      title: "Example DM for the keyword PRICE",
      text: "Hi! Thanks for your comment on our Summer Escape reel. Here are the package prices for May and June 2027, with early-bird rates until 15 December 2026: (link to price list). Which month are you planning to travel? Reply here and our team will suggest dates. This is an automatic message from Wanderly Travels."
    },
    {
      type: "p",
      text: "Remember that people who do not follow you will find the DM in their Requests folder. That is one more reason to reply publicly as well, so they know to look."
    },
    { type: "h2", text: "Should you also reply publicly to the comment?" },
    {
      type: "p",
      text: "Yes, in most cases. A public reply tells the commenter to check their DMs, shows other viewers that you respond, and nudges more people to comment the keyword."
    },
    {
      type: "ul",
      items: [
        "Keep it short: “Sent you the details in DM!”",
        "Write a few versions and rotate them, so the thread does not show the same line fifty times.",
        "Keep prices and personal details out of the public reply. The DM is the place for those.",
        "Reply to complaints by hand. An automatic cheerful reply to an unhappy comment reads badly."
      ]
    },
    {
      type: "p",
      text: "Whatching can reply to comments automatically as well as send the keyword DM."
    },
    { type: "h2", text: "Can you automate replies to Instagram stories?" },
    {
      type: "p",
      text: "Yes. When someone replies to your story, Instagram delivers it to your inbox as a DM linked to that story, which opens the normal 24-hour messaging window. An automatic reply can go back straight away."
    },
    {
      type: "p",
      text: "This suits stories with a clear ask, such as “Reply GOA for our 5-day Goa plan”. Whatching's story-reply automation on the Pro plan sends the reply for you. Stories disappear after 24 hours, so put everything the person needs in the reply itself. When someone mentions your account in their own story, that also reaches your inbox as a message."
    },
    { type: "h2", text: "When should a person take over the chat?" },
    {
      type: "p",
      text: "A person should take over once the customer needs a decision, a custom quote or care that a script cannot give. Automation is good at the first reply and the repeated questions; your team is better at bookings, payments, complaints and anything unusual."
    },
    {
      type: "ul",
      items: [
        "Use a short flow in the [chatbot builder](/features/whatsapp-flows) to ask two or three questions first, such as travel month, number of people and budget, then hand the chat to a person.",
        "Let the Instagram [AI agent](/features/ai-chatbot) answer open questions from your own documents, website and FAQs, and hand the chat to a person when needed.",
        "Assign each handed-over chat to a teammate in the [shared inbox](/features/shared-inbox), so one person owns it.",
        "Aim to reply within 24 hours of the customer's latest message."
      ]
    },
    { type: "h2", text: "Comment-to-DM checklist" },
    {
      type: "ul",
      items: [
        "The account is a professional account and is connected to your tool.",
        "The keyword is short, single and repeated in the caption.",
        "The DM delivers the promise in one message and ends with a question.",
        "The DM says it is automatic.",
        "Public replies are short, varied and free of prices.",
        "The setup was tested from an account that does not follow you.",
        "Someone is ready to take over chats within 24 hours.",
        "Complaints in the comments are answered by a person."
      ]
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question:
        "Does Instagram comment-to-DM automation work with a creator account?",
      answer:
        "Yes. Meta's Instagram API works with professional accounts, and a professional account can be a business or a creator account. A personal account cannot be automated, but you can switch it to professional in the Instagram app's settings."
    },
    {
      question: "Why did my auto DM go to the Requests folder?",
      answer:
        "Instagram delivers a private reply to the main inbox only if the commenter follows your account. For everyone else it goes to their message Requests folder. A public reply under the comment, such as “Sent you the details in DM”, helps people know where to look."
    },
    {
      question: "Can I send a second DM if the person does not reply?",
      answer:
        "No. Instagram allows one private reply per comment. You can send more messages only after the person writes back, and within 24 hours of their reply. That is why the first DM should include everything you promised and end with a question that invites a reply."
    },
    {
      question: "Does comment automation work on old posts?",
      answer:
        "Yes, for new comments. The 7-day limit counts from when the comment was made, so someone commenting on a post from last year can still get the DM. Comments older than 7 days cannot receive a private reply."
    },
    {
      question: "How many auto DMs can Instagram send in an hour?",
      answer:
        "Meta's limit is 750 private replies an hour per Instagram professional account for comments on posts and reels. Comments on Instagram Live have a separate, higher limit but can be answered only during the broadcast. Messages you send after people write back fall under a separate limit of 100 text messages a second."
    }
  ],
  sources: [
    {
      label: "Meta: Send a private reply to a commenter (Instagram Platform)",
      url: "https://developers.facebook.com/documentation/instagram-platform/private-replies"
    },
    {
      label:
        "Meta: Instagram Platform overview (account types, messaging window, rate limits)",
      url: "https://developers.facebook.com/documentation/instagram-platform/overview"
    },
    {
      label: "Meta: Send messages with the Instagram API with Instagram Login",
      url: "https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/messaging-api"
    },
    {
      label: "Meta: Instagram webhook notification examples (story replies)",
      url: "https://developers.facebook.com/documentation/instagram-platform/webhooks/examples"
    },
    {
      label: "Meta: Story mention (Instagram Messaging)",
      url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/story-mention"
    }
  ],
  related: [
    "ai-chatbot-vs-scripted-bot",
    "click-to-whatsapp-ads-guide",
    "whatsapp-broadcast-best-practices"
  ],
  relatedFeatures: [
    "instagram-comment-automation",
    "instagram-automation",
    "instagram-dm-automation"
  ]
};

export default post;
