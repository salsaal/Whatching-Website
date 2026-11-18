export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

// Plain answers only: each one must describe something the product does
// today. No figures we can't show, and no features that aren't built.
export const faqCategories: FaqCategory[] = [
  {
    category: "Getting started",
    items: [
      {
        question: "What is Whatching?",
        answer:
          "Whatching is software that helps small businesses sell and support customers on WhatsApp and Instagram. You can send broadcasts, build chatbots, let an AI agent answer questions from your own content, reply as a team from one shared inbox, and see your results in one dashboard."
      },
      {
        question: "How quickly can I start?",
        answer:
          "You can sign up and look around straight away with the free trial. To send messages, you connect your WhatsApp Business number to Meta's platform from inside Whatching, and we guide you through each step."
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. Broadcasts, chatbots and automations are all built by clicking and dragging. There is no code to write."
      },
      {
        question: "Can you help me set up?",
        answer:
          "Yes. Fill in the form on our demo page and we'll set up a free onboarding call to connect your number and build your first broadcast or chatbot with you."
      }
    ]
  },
  {
    category: "WhatsApp",
    items: [
      {
        question: "Is Whatching an official WhatsApp solution?",
        answer:
          "Yes. Whatching uses Meta's official WhatsApp Business Platform and follows Meta's messaging rules. It isn't an unofficial bulk sender that works around WhatsApp's terms."
      },
      {
        question: "How much does Meta charge per message?",
        answer:
          "Your Whatching plan covers the software. Meta also charges a small fee for each message you send, based on its type (marketing, utility, login codes or service replies), at Meta's official rates with 0% markup from us. Messages customers send you are free, and each number gets 1,000 free service replies a month. The full rates are on our pricing page."
      },
      {
        question: "Can I keep using the WhatsApp Business app?",
        answer:
          "Yes. You can keep using the WhatsApp Business app on your phone with the same number while you use Whatching. Meta calls this coexistence."
      },
      {
        question: "Do I need approved templates?",
        answer:
          "Yes, when you message someone first. Offers, reminders and order updates must use a message template that Meta has approved. You write and submit templates in Whatching and see when they're approved. Replies within 24 hours of a customer's message don't need a template."
      }
    ]
  },
  {
    category: "Instagram",
    items: [
      {
        question: "Can Whatching automate Instagram DMs?",
        answer:
          "Yes. You can build automatic DM replies, such as a welcome message or questions that collect a customer's details, with the same drag-and-drop chatbot builder you use for WhatsApp. Instagram automation is part of the Pro plan."
      },
      {
        question: "Can Whatching automatically respond to comments?",
        answer:
          "Yes. When someone comments a keyword you choose on your post, Whatching can reply to the comment and send them a DM automatically."
      },
      {
        question: "Can story replies start an automation?",
        answer:
          "Yes. A reply to your Instagram story can start an automatic DM, just like a comment or a new message."
      }
    ]
  },
  {
    category: "AI",
    items: [
      {
        question: "How does the AI agent work?",
        answer:
          "You give the AI agent your documents, website and FAQs. It answers customer questions from that information on WhatsApp and Instagram, and hands the chat to your team when a person is needed."
      },
      {
        question: "Can my team take over from the AI?",
        answer:
          "Yes. Anyone on your team can take over a chat from the AI at any time and see the whole conversation so far."
      }
    ]
  },
  {
    category: "Teams",
    items: [
      {
        question: "Can my whole team use one WhatsApp number?",
        answer:
          "Yes. Everyone on your team replies from the same shared inbox and the same WhatsApp number, and each chat shows who it's assigned to."
      },
      {
        question: "Can conversations be assigned?",
        answer: "Yes. You can assign any chat to a teammate from the inbox."
      }
    ]
  },
  {
    category: "Billing",
    items: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes. You get a free 7-day trial of the Pro plan. No card needed."
      },
      {
        question: "Can I cancel?",
        answer:
          "Yes. There are no long-term contracts. If you cancel, your plan stays active until the end of the month you've paid for. That month isn't refunded."
      },
      {
        question: "Do you offer yearly billing?",
        answer: "Not at the moment. All plans are billed monthly."
      },
      {
        question: "What payment methods are supported?",
        answer: "You can pay with a card or from your bank account at checkout."
      }
    ]
  }
];
