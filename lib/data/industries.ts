// Industry pages. Every line describes what Whatching does today: no store
// integrations, no automatic routing, no booking or payment inside Whatching,
// and no performance figures. Examples use fictional businesses.

export interface IndustryStep {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  name: string;
  /** One line for cards and the menu. */
  cardLine: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  /** The search phrase the page is written around. Not shown. */
  keyword: string;
  /** Who the page is for, used in headings: "How {audience} use WhatsApp". */
  audience: string;
  /** A direct answer to "How do these businesses use WhatsApp?", shown near the top. */
  intro: string;
  stepsTitle: string;
  steps: IndustryStep[];
  problems: { problem: IndustryStep; answer: IndustryStep }[];
  useCasesTitle: string;
  useCases: IndustryStep[];
  /** Slugs in lib/data/templates.ts, shown as example messages. */
  templateSlugs: string[];
  /** The hero picture: a scene in IndustryPhone, the home phone, or the agency switcher. */
  visual: "scene" | "phone" | "switcher";
  relatedFeatures: string[];
  relatedPosts: string[];
  faq: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    cardLine: "Answer shoppers and bring them back",
    eyebrow: "For online stores",
    headline: "Answer every shopper, then bring them back.",
    subheadline:
      "Answer product questions on WhatsApp and Instagram, send order updates and offers, and win back past customers, all from one shared inbox.",
    seoTitle: "WhatsApp Marketing for E-commerce Stores in India | Whatching",
    seoDescription:
      "How online stores use WhatsApp and Instagram to answer shoppers, send order updates and run offers to opted-in customers. Example messages and costs inside.",
    keyword: "whatsapp marketing for ecommerce",
    audience: "online stores",
    intro:
      "Online stores use WhatsApp to answer product questions before the sale, send order and delivery updates after it, and bring past customers back with offers. With Whatching, an AI agent answers sizing, delivery and return questions from your own store policies, your team handles the rest from one shared inbox, and broadcasts go only to customers who opted in.",
    stepsTitle: "How an online store runs on Whatching",
    steps: [
      {
        title: "Shoppers reach you",
        description:
          "From an Instagram comment, a Click-to-WhatsApp ad or the WhatsApp link on your website."
      },
      {
        title: "Questions answered straight away",
        description:
          "The AI agent answers sizing, delivery and return questions from your own store policies."
      },
      {
        title: "Your team closes the sale",
        description:
          "Chats that need a person land in the shared inbox, with the customer's details beside them."
      },
      {
        title: "They come back",
        description:
          "Send order updates, new arrivals and festive offers to customers who opted in."
      }
    ],
    problems: [
      {
        problem: {
          title: "Questions arrive at all hours",
          description:
            "Shoppers ask about sizes, delivery and returns at night and on weekends, and buy elsewhere if nobody answers."
        },
        answer: {
          title: "An AI agent that knows your policies",
          description:
            "It answers from your size charts, delivery areas and return policy, and hands tricky chats to your team."
        }
      },
      {
        problem: {
          title: "Instagram comments go unanswered",
          description:
            'Posts collect "price?" comments that are easy to miss in a busy week.'
        },
        answer: {
          title: "Comment-to-DM on Instagram",
          description:
            "Anyone who comments a keyword gets the price or product link in their DMs straight away, on the Pro plan."
        }
      },
      {
        problem: {
          title: "Past buyers drift away",
          description: "Customers who bought once rarely hear from you again."
        },
        answer: {
          title: "Broadcasts to the right group",
          description:
            "Tag customers by what they bought and send new arrivals and offers to the group they'll care about."
        }
      }
    ],
    useCasesTitle: "What online stores send on WhatsApp",
    useCases: [
      {
        title: "Order and delivery updates",
        description:
          "Order confirmations and shipping updates, sent as approved utility templates."
      },
      {
        title: "Cash-on-delivery checks",
        description:
          "Ask COD customers to confirm with one tap before you pack the order."
      },
      {
        title: "New arrivals and sales",
        description:
          "Announce launches and festive sales to customers who opted in."
      },
      {
        title: "Product questions",
        description:
          "Let the AI agent answer common questions about sizes, fabric and delivery."
      }
    ],
    templateSlugs: [
      "order-confirmation",
      "cod-order-confirmation",
      "festive-sale-announcement"
    ],
    visual: "scene",
    relatedFeatures: [
      "whatsapp-broadcast",
      "ai-chatbot",
      "instagram-comment-automation",
      "shared-inbox"
    ],
    relatedPosts: [
      "whatsapp-broadcast-best-practices",
      "instagram-comment-automation-guide",
      "click-to-whatsapp-ads-guide"
    ],
    faq: [
      {
        question: "Can the AI agent answer questions about my products?",
        answer:
          "Yes. It answers from the documents, website pages and FAQs you give it, such as size charts, delivery areas and your return policy, and hands the chat to your team when a person is needed."
      },
      {
        question: "Does Whatching connect to my online store?",
        answer:
          "Not at the moment. You manage contacts, broadcasts and chats inside Whatching; it doesn't read orders or stock from your store, so order updates are sent from Whatching using your approved templates."
      },
      {
        question: "What does an order update cost to send?",
        answer:
          "Meta charges per delivered message. An order update is usually a utility message, ₹0.1150 each in India as of 1 October 2026, passed on at 0% markup. Your Whatching plan is separate. See the [pricing calculator](/pricing#meta-charges)."
      },
      {
        question: "Can I send sale offers to all my customers?",
        answer:
          "Only to customers who agreed to hear from you on WhatsApp. Send offers as a broadcast with an approved marketing template; in India Meta charges ₹0.8631 per delivered marketing message."
      },
      {
        question: "Can customers pay inside WhatsApp?",
        answer:
          "Not through Whatching today. Customers chat with you on WhatsApp, and you can share a product or payment link from your own store in the chat."
      }
    ]
  },
  {
    slug: "education",
    name: "Education",
    cardLine: "Admission enquiries and class reminders",
    eyebrow: "For schools and coaching institutes",
    headline: "Answer every admission enquiry, even in peak season.",
    subheadline:
      "A chatbot answers course, fee and batch questions on WhatsApp, counsellors pick up from one shared inbox, and reminders reach students and parents.",
    seoTitle: "WhatsApp for Schools and Coaching Institutes | Whatching",
    seoDescription:
      "How coaching institutes and schools use WhatsApp for admission enquiries, counselling, class and fee reminders. A chatbot, a shared inbox and example messages.",
    keyword: "whatsapp for coaching institutes",
    audience: "schools and coaching institutes",
    intro:
      "Schools and coaching institutes use WhatsApp to handle admission enquiries, share course and fee details, and remind students and parents about classes and fees. In Whatching, a menu chatbot answers the common questions and collects each student's details, counsellors take over in a shared inbox, and reminders go out as approved templates.",
    stepsTitle: "How an institute runs admissions on Whatching",
    steps: [
      {
        title: "Enquiries come in",
        description:
          "From ads, your website link or Instagram, at any hour during admission season."
      },
      {
        title: "A chatbot guides them",
        description:
          "A menu of courses and batches, then a few questions: class, course and city."
      },
      {
        title: "Counsellors follow up",
        description:
          "The chat lands in the shared inbox with the student's answers, assigned to a counsellor."
      },
      {
        title: "Reminders keep them on track",
        description:
          "Class times, fee due dates and demo class invites go out as approved templates."
      }
    ],
    problems: [
      {
        problem: {
          title: "Enquiries pile up in admission season",
          description:
            "Parents ask the same questions about fees, timings and batches, again and again."
        },
        answer: {
          title: "A chatbot for the first questions",
          description:
            "It answers with a menu of courses and fees, and asks for the details your counsellors need."
        }
      },
      {
        problem: {
          title: "Counsellors share one phone",
          description: "Chats get missed, or two people answer the same parent."
        },
        answer: {
          title: "One inbox, many counsellors",
          description:
            "Everyone works from the same number, and each chat is assigned to one person."
        }
      },
      {
        problem: {
          title: "Reminders take hours",
          description: "Fee and class reminders are typed out one by one."
        },
        answer: {
          title: "Reminders as broadcasts",
          description:
            "Send a reminder to a whole batch at once with an approved template."
        }
      }
    ],
    useCasesTitle: "What institutes send on WhatsApp",
    useCases: [
      {
        title: "Admission enquiries",
        description:
          "Courses, fees and batch timings, answered by a chatbot day and night."
      },
      {
        title: "Demo class invites",
        description:
          "Invite interested students to a free demo class, with a button to reply."
      },
      {
        title: "Fee and class reminders",
        description: "Remind a batch about fee due dates and class times."
      },
      {
        title: "Notices for parents",
        description:
          "Holiday notices, schedule changes and results day reminders."
      }
    ],
    templateSlugs: [
      "admission-application-received",
      "class-reminder",
      "demo-class-invite"
    ],
    visual: "scene",
    relatedFeatures: [
      "whatsapp-flows",
      "shared-inbox",
      "whatsapp-broadcast",
      "ai-chatbot"
    ],
    relatedPosts: [
      "ai-chatbot-vs-scripted-bot",
      "how-to-get-whatsapp-business-api",
      "whatsapp-business-app-vs-api"
    ],
    faq: [
      {
        question: "Can a chatbot answer admission questions?",
        answer:
          "Yes. A menu chatbot can cover courses, fees and timings, the AI agent can answer from your brochure and FAQs, and the chat goes to a counsellor when a person is needed."
      },
      {
        question: "Can the whole admissions team use one WhatsApp number?",
        answer:
          "Yes. Everyone replies from the shared inbox, you assign each chat to a counsellor, and role-based permissions control what each person can do."
      },
      {
        question: "Can I send class reminders to a whole batch?",
        answer:
          "Yes. Send them as a broadcast with an approved message template, now or scheduled. Meta decides the template's category, which sets the price per message."
      },
      {
        question: "Can parents and students both get messages?",
        answer:
          "Yes, as long as each person has agreed to hear from you on WhatsApp. Save them as separate contacts and tag them, so you can message parents or students on their own."
      },
      {
        question:
          "Can we keep using the WhatsApp Business app at the front desk?",
        answer:
          "Yes. You can keep using the WhatsApp Business app on the same number while you use Whatching. Meta calls this coexistence."
      }
    ]
  },
  {
    slug: "real-estate",
    name: "Real estate",
    cardLine: "Qualify buyers and book site visits",
    eyebrow: "For real estate",
    headline: "Reply to every property enquiry while it's still warm.",
    subheadline:
      "Qualify buyers on WhatsApp with a few quick questions, see which ads brought them in, and hand serious enquiries to an agent with everything they need.",
    seoTitle: "WhatsApp Marketing for Real Estate in India | Whatching",
    seoDescription:
      "How real estate teams use WhatsApp to answer ad enquiries, qualify buyers, book site visits and track which ads bring chats. Example messages included.",
    keyword: "whatsapp marketing for real estate",
    audience: "real estate teams",
    intro:
      "Real estate teams use WhatsApp to answer enquiries from ads and listings, ask buyers about budget, location and timeline, and confirm site visits. Whatching shows which Click-to-WhatsApp ad each enquiry came from, a chatbot asks the qualifying questions straight away, and agents pick up the chats in a shared inbox.",
    stepsTitle: "How a real estate team handles leads on Whatching",
    steps: [
      {
        title: "An ad starts the chat",
        description:
          "A buyer taps your Click-to-WhatsApp ad or listing link, and Whatching notes which ad it was."
      },
      {
        title: "A few quick questions",
        description:
          "A chatbot asks budget, location, property type and when they plan to buy."
      },
      {
        title: "An agent takes over",
        description:
          "The chat is assigned to an agent, with the buyer's answers and tags beside it."
      },
      {
        title: "Site visit and follow-up",
        description:
          "Confirm the visit, then send new listings to buyers who opted in."
      }
    ],
    problems: [
      {
        problem: {
          title: "Enquiries go cold",
          description:
            "Buyers message several builders at once and talk to whoever replies first."
        },
        answer: {
          title: "An instant first reply",
          description:
            "A chatbot replies straight away and starts asking the questions your agents need."
        }
      },
      {
        problem: {
          title: "Agents chase the wrong leads",
          description:
            "Time goes on buyers whose budget or location doesn't match."
        },
        answer: {
          title: "Qualify before you call",
          description:
            "Budget, location and timeline answers sit beside each chat, so agents know who to call first."
        }
      },
      {
        problem: {
          title: "No idea which ads work",
          description:
            "Ad spend goes up, but nobody knows which campaign brings real enquiries."
        },
        answer: {
          title: "See the ad behind each chat",
          description:
            "Click-to-WhatsApp ad tracking shows which ad brought in each enquiry."
        }
      }
    ],
    useCasesTitle: "What real estate teams send on WhatsApp",
    useCases: [
      {
        title: "Project launch enquiries",
        description:
          "Answer launch enquiries with project details and a brochure."
      },
      {
        title: "Site visit confirmations",
        description:
          "Confirm the date, time and location of a visit, with a map link."
      },
      {
        title: "New listing alerts",
        description:
          "Tell buyers about a new listing that matches what they asked for."
      },
      {
        title: "Payment reminders",
        description: "Remind buyers about instalment due dates."
      }
    ],
    templateSlugs: [
      "property-enquiry-received",
      "site-visit-confirmation",
      "new-listing-match"
    ],
    visual: "scene",
    relatedFeatures: [
      "whatsapp-flows",
      "analytics",
      "shared-inbox",
      "ai-chatbot"
    ],
    relatedPosts: [
      "click-to-whatsapp-ads-guide",
      "whatsapp-messaging-limits",
      "whatsapp-business-api-pricing-india"
    ],
    faq: [
      {
        question: "Can I see which ads bring in property enquiries?",
        answer:
          "Yes. Click-to-WhatsApp ad tracking shows which ad each chat came from, so you can see which campaigns bring in enquiries."
      },
      {
        question: "Can a chatbot ask what a buyer is looking for?",
        answer:
          "Yes. It can ask for budget, location, property type and timeline with menus and questions, then hand the chat to an agent on your team."
      },
      {
        question: "Are chats from ads free?",
        answer:
          "When someone messages you from a Click-to-WhatsApp ad on their phone and you reply within 24 hours, Meta doesn't charge for your messages to them while that window is open, for up to 7 days."
      },
      {
        question: "Can I send brochures and photos?",
        answer:
          "Yes. Broadcasts can include an image, and your agents can share brochures and photos in the chat."
      },
      {
        question: "Does Whatching book site visits on its own?",
        answer:
          "No. The chatbot can ask for a preferred day and time, and your agent confirms the visit. You can then send a site visit confirmation template."
      }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    cardLine: "Appointment reminders and patient questions",
    eyebrow: "For clinics and hospitals",
    headline: "Appointment reminders and patient questions, on WhatsApp.",
    subheadline:
      "Send reminders patients can confirm with a tap, answer questions about timings and fees automatically, and let reception and doctors work from one number.",
    seoTitle: "WhatsApp for Clinics and Hospitals in India | Whatching",
    seoDescription:
      "How clinics use WhatsApp for appointment reminders, lab report alerts and patient questions, with an AI agent and one shared inbox. Example messages included.",
    keyword: "whatsapp for clinics",
    audience: "clinics and hospitals",
    intro:
      "Clinics and hospitals use WhatsApp to send appointment reminders, tell patients when reports are ready, and answer questions about timings, doctors and fees. In Whatching, an AI agent answers only from the clinic information you give it, reception books and changes appointments from a shared inbox, and reminders go out as approved templates.",
    stepsTitle: "How a clinic runs patient messages on Whatching",
    steps: [
      {
        title: "Patients message you",
        description:
          "From your website, Google profile or a WhatsApp link, instead of calling a busy front desk."
      },
      {
        title: "Common questions answered",
        description:
          "The AI agent answers timings, doctors, fees and how to book, from your own clinic details."
      },
      {
        title: "Reception books the slot",
        description:
          "Booking requests land in the shared inbox, and your team confirms the time."
      },
      {
        title: "Reminders and reports",
        description:
          "Reminders with Confirm and Reschedule buttons, and a message when lab reports are ready."
      }
    ],
    problems: [
      {
        problem: {
          title: "The front desk phone rings all day",
          description:
            "Staff spend hours on the same questions about timings and fees."
        },
        answer: {
          title: "Answers on WhatsApp",
          description:
            "The AI agent answers routine questions from your clinic details, any time of day."
        }
      },
      {
        problem: {
          title: "Patients forget appointments",
          description:
            "A missed slot is lost time for the doctor and a delay for the next patient."
        },
        answer: {
          title: "Reminders with a Confirm button",
          description:
            "Patients confirm or ask to reschedule with one tap, and replies land in your inbox."
        }
      },
      {
        problem: {
          title: "Some questions need a person",
          description:
            "Symptoms and medical questions shouldn't get an automated answer."
        },
        answer: {
          title: "The AI hands over to staff",
          description:
            "The AI agent only answers from the information you give it and passes everything else to your team."
        }
      }
    ],
    useCasesTitle: "What clinics send on WhatsApp",
    useCases: [
      {
        title: "Appointment reminders",
        description:
          "A reminder the day before, with Confirm and Reschedule buttons."
      },
      {
        title: "Lab report alerts",
        description: "Tell patients their report is ready to collect or view."
      },
      {
        title: "Follow-up visits",
        description: "Remind patients when a follow-up visit is due."
      },
      {
        title: "Health camps and check-ups",
        description:
          "Invite opted-in patients to health camps and check-up packages."
      }
    ],
    templateSlugs: [
      "appointment-reminder",
      "lab-report-ready",
      "follow-up-visit-reminder"
    ],
    visual: "scene",
    relatedFeatures: [
      "ai-chatbot",
      "whatsapp-broadcast",
      "shared-inbox",
      "whatsapp-flows"
    ],
    relatedPosts: [
      "ai-chatbot-vs-scripted-bot",
      "whatsapp-coexistence",
      "whatsapp-business-app-vs-api"
    ],
    faq: [
      {
        question: "Can I send appointment reminders on WhatsApp?",
        answer:
          "Yes, with an approved message template. Add Confirm and Reschedule buttons so patients can reply with one tap, and replies land in your shared inbox."
      },
      {
        question: "What does the AI agent answer?",
        answer:
          "Only what you give it, such as clinic timings, doctors, services, fees and how to book. Keep medical advice with your doctors; the AI agent hands the chat to your team when a person is needed."
      },
      {
        question: "Can reception and doctors share one WhatsApp number?",
        answer:
          "Yes. Everyone works from the shared inbox, and role-based permissions control what each person can see and do."
      },
      {
        question: "Does Whatching book appointments in our system?",
        answer:
          "No. Whatching doesn't connect to booking software. Patients ask on WhatsApp, and your team confirms the slot and sends a confirmation or reminder template."
      },
      {
        question: "What does a reminder cost to send?",
        answer:
          "An appointment reminder is usually a utility message: ₹0.1150 per delivered message in India as of 1 October 2026, passed on at 0% markup. Your Whatching plan is separate."
      }
    ]
  },
  {
    slug: "travel",
    name: "Travel",
    cardLine: "Package enquiries and trip updates",
    eyebrow: "For travel agencies",
    headline: "Turn travel enquiries into booked trips.",
    subheadline:
      "Answer package and price questions straight away, keep the chat going until your team confirms the booking, and stay in touch before and after the trip.",
    seoTitle: "WhatsApp for Travel Agencies and Tour Operators | Whatching",
    seoDescription:
      "How travel agencies use WhatsApp and Instagram to answer package enquiries, follow up, send pre-trip updates and promote seasonal packages. Examples inside.",
    keyword: "whatsapp for travel agency",
    audience: "travel agencies",
    intro:
      "Travel agencies use WhatsApp to answer package enquiries, share itineraries and prices, confirm bookings and send updates before the trip. With Whatching, an AI agent answers package questions from your own documents, a chatbot collects dates and group size, your team confirms the booking from a shared inbox, and seasonal offers go to past travellers who opted in.",
    stepsTitle: "How a travel agency runs on Whatching",
    steps: [
      {
        title: "An enquiry arrives",
        description:
          "From an Instagram post, a Click-to-WhatsApp ad or your website link."
      },
      {
        title: "Package questions answered",
        description:
          "The AI agent answers what's included, prices and payment options from your documents."
      },
      {
        title: "Your team confirms the trip",
        description:
          "A chatbot collects dates, destination and group size, and your team confirms the booking."
      },
      {
        title: "Before and after the trip",
        description:
          "Send pickup details before they travel, and offers for their next trip after."
      }
    ],
    problems: [
      {
        problem: {
          title: "Travellers compare quickly",
          description:
            "They message several agencies and book with whoever answers first."
        },
        answer: {
          title: "Instant answers on packages",
          description:
            "The AI agent answers package and price questions from your own documents, straight away."
        }
      },
      {
        problem: {
          title: "The same questions all day",
          description:
            "What's included, visa help, EMI options: your team types the same replies again and again."
        },
        answer: {
          title: "A chatbot for the details",
          description:
            "It collects dates, destination and group size, so your team starts with what it needs."
        }
      },
      {
        problem: {
          title: "Past travellers forget you",
          description: "Happy customers book their next trip elsewhere."
        },
        answer: {
          title: "Seasonal offers to past travellers",
          description:
            "Send long-weekend and holiday packages to travellers who opted in."
        }
      }
    ],
    useCasesTitle: "What travel agencies send on WhatsApp",
    useCases: [
      {
        title: "Booking confirmations",
        description: "Confirm the booking with the itinerary and travel dates."
      },
      {
        title: "Balance payment reminders",
        description:
          "Remind travellers when the balance is due before the trip."
      },
      {
        title: "Pre-trip updates",
        description: "Pickup time, hotel details and what to carry."
      },
      {
        title: "Holiday packages",
        description:
          "Promote seasonal packages to past travellers who opted in."
      }
    ],
    templateSlugs: [
      "trip-booking-confirmation",
      "pre-trip-reminder",
      "holiday-package-offer"
    ],
    visual: "phone",
    relatedFeatures: [
      "ai-chatbot",
      "whatsapp-broadcast",
      "instagram-comment-automation",
      "shared-inbox"
    ],
    relatedPosts: [
      "instagram-comment-automation-guide",
      "whatsapp-broadcast-best-practices",
      "click-to-whatsapp-ads-guide"
    ],
    faq: [
      {
        question: "Can the AI agent answer questions about my packages?",
        answer:
          "Yes. It answers from your package documents, website and FAQs, such as what's included, prices and payment options, and hands the chat to your team when a person is needed."
      },
      {
        question: "Can Whatching take bookings for me?",
        answer:
          "No. Chatbots and the AI agent collect the details, like dates, destination and group size, and your team confirms the booking."
      },
      {
        question: "Can I promote seasonal packages?",
        answer:
          "Yes. Send a broadcast with an approved marketing template, with an image and buttons such as Plan my trip and View packages, to travellers who opted in."
      },
      {
        question: "Can I reply to Instagram comments on my travel posts?",
        answer:
          "Yes, on the Pro plan. When someone comments a keyword like PRICE, Whatching can reply publicly and send them the package details in their DMs."
      },
      {
        question: "What does a booking confirmation cost to send?",
        answer:
          "A booking confirmation is usually a utility message: ₹0.1150 per delivered message in India as of 1 October 2026, passed on at 0% markup. Your Whatching plan is separate."
      }
    ]
  },
  {
    slug: "agencies",
    name: "Agencies",
    cardLine: "Many client businesses, one login",
    eyebrow: "For marketing agencies",
    headline: "Run WhatsApp and Instagram for every client from one login.",
    subheadline:
      "Set up each client business with its own plan, build their broadcasts, chatbots and AI agent, and switch between clients without logging out.",
    seoTitle: "WhatsApp Marketing Software for Agencies | Whatching",
    seoDescription:
      "How marketing agencies run WhatsApp and Instagram for several clients from one login: a plan per business, ad tracking, chatbots and an AI agent for each.",
    keyword: "whatsapp marketing tool for agencies",
    audience: "marketing agencies",
    intro:
      "Marketing agencies use Whatching to run WhatsApp and Instagram for several client businesses from one login. Each client business has its own plan, number, chatbots and AI agent, and you switch between them without logging out. Each business's analytics show which Click-to-WhatsApp ads brought in chats, so you can see which campaigns started conversations.",
    stepsTitle: "How an agency runs clients on Whatching",
    steps: [
      {
        title: "Add a client business",
        description:
          "Connect the client's WhatsApp number, and Instagram on Pro, and choose the plan that fits."
      },
      {
        title: "Build for each client",
        description:
          "Broadcasts, chatbots and an AI agent that answers from that client's own content."
      },
      {
        title: "Switch without logging out",
        description: "Move between client businesses from the same login."
      },
      {
        title: "Show what worked",
        description:
          "Each business's analytics show broadcast results, ad chats and Meta charges."
      }
    ],
    problems: [
      {
        problem: {
          title: "A login for every client",
          description:
            "Separate accounts and passwords for each client slow your team down."
        },
        answer: {
          title: "One login for all clients",
          description: "Switch between client businesses without logging out."
        }
      },
      {
        problem: {
          title: "Clients need different things",
          description:
            "A small shop and a real estate developer don't need the same plan."
        },
        answer: {
          title: "A plan per business",
          description:
            "Start one client on Basic and another on Pro, each with its own plan."
        }
      },
      {
        problem: {
          title: "Clients ask which ads worked",
          description:
            "Proving that ads started real conversations takes manual work."
        },
        answer: {
          title: "Ad tracking for each client",
          description:
            "Click-to-WhatsApp ad tracking shows which ad brought in each chat."
        }
      }
    ],
    useCasesTitle: "What agencies run for their clients",
    useCases: [
      {
        title: "Click-to-WhatsApp campaigns",
        description:
          "Run ads that open a WhatsApp chat and see which ad brought each one in."
      },
      {
        title: "Instagram comment campaigns",
        description: "Comment-to-DM campaigns for clients on the Pro plan."
      },
      {
        title: "Chatbots for client FAQs",
        description: "A chatbot or AI agent for each client's common questions."
      },
      {
        title: "Offers and updates",
        description: "Broadcasts to each client's opted-in customers."
      }
    ],
    templateSlugs: [
      "welcome-after-opt-in",
      "feedback-request",
      "payment-reminder"
    ],
    visual: "switcher",
    relatedFeatures: [
      "whatsapp-marketing",
      "analytics",
      "ai-chatbot",
      "instagram-automation"
    ],
    relatedPosts: [
      "how-to-choose-whatsapp-api-provider",
      "click-to-whatsapp-ads-guide",
      "whatsapp-coexistence"
    ],
    faq: [
      {
        question: "Can I manage several client businesses from one login?",
        answer:
          "Yes. You switch between client businesses without logging out, and each one has its own WhatsApp and Instagram set-up."
      },
      {
        question: "Does each client need its own plan?",
        answer:
          "Yes. Each business has its own plan, so you can start one client on Basic and another on Pro."
      },
      {
        question: "Can I see which ads bring chats for each client?",
        answer:
          "Yes. Each business's analytics show which Click-to-WhatsApp ads brought in chats, along with broadcast results and Meta charges."
      },
      {
        question: "Is there one dashboard for all clients?",
        answer:
          "No. Each client business has its own dashboard. You switch between businesses from the same login."
      },
      {
        question: "Can I put my agency's branding on Whatching?",
        answer: "No. Whatching doesn't offer white-label branding."
      }
    ]
  }
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);
