export interface IndustryStep {
  title: string;
  description: string;
}

import type { VisualType } from "./features";

export interface Industry {
  slug: string;
  name: string;
  /** Heading for the use-case section, written out so grammar is right. */
  useCasesTitle: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  journey: string[];
  challenges: IndustryStep[];
  solutions: IndustryStep[];
  useCases: IndustryStep[];
  /** The product picture in the hero. "phone" is the home page phone. */
  visual: VisualType | "phone" | "switcher";
  /** Feature slugs most useful for this industry. */
  relatedFeatures: string[];
  faq: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    useCasesTitle: "How online stores use Whatching",
    visual: "broadcast",
    relatedFeatures: [
      "whatsapp-broadcast",
      "ai-chatbot",
      "shared-inbox",
      "instagram-comment-automation"
    ],
    faq: [
      {
        question: "Can the AI agent answer questions about my products?",
        answer:
          "Yes. It answers from the documents, website pages and FAQs you give it, such as sizes, delivery areas and your return policy, and hands the chat to your team when a person is needed."
      },
      {
        question: "Can I tell customers about sales and new arrivals?",
        answer:
          "Yes. Send a broadcast with a marketing template that Meta has approved. In India Meta charges ₹0.8631 per marketing message, which we pass on with 0% markup."
      },
      {
        question: "Does Whatching connect to my online store?",
        answer:
          "Not at the moment. You manage contacts, broadcasts and chats inside Whatching; it doesn't read orders or stock from your store."
      }
    ],
    eyebrow: "E-commerce",
    headline: "Answer shoppers fast and drive repeat purchases.",
    subheadline:
      "Turn browsers into buyers and buyers into repeat customers, across WhatsApp and Instagram.",
    seoTitle: "WhatsApp & Instagram Automation for E-commerce | Whatching",
    seoDescription:
      "Answer product questions instantly, send order updates and run repeat-purchase campaigns on WhatsApp and Instagram. Built for online stores in India.",
    summary:
      "Online stores lose customers between the ad click and the checkout. Whatching keeps the conversation open across Instagram and WhatsApp so fewer of them drop off.",
    journey: [
      "Instagram comment",
      "Automatic DM",
      "Product question",
      "AI answer",
      "Sales team",
      "Purchase"
    ],
    challenges: [
      {
        title: "Quiet customers",
        description:
          "Past buyers never hear from you again, so they buy somewhere else."
      },
      {
        title: "Slow product Q&A",
        description:
          "Sizing, stock and shipping questions go unanswered for hours."
      }
    ],
    solutions: [
      {
        title: "Repeat-purchase broadcasts",
        description:
          "Send offers and restock alerts to tagged customer groups on WhatsApp."
      },
      {
        title: "Instant answers",
        description: "AI handles common product questions instantly, 24/7."
      }
    ],
    useCases: [
      {
        title: "Order & shipping updates",
        description: "Automated, low-effort transactional messaging."
      },
      {
        title: "Instagram comment → sale",
        description: 'Turn "price?" comments into a completed order.'
      },
      {
        title: "Win-back campaigns",
        description: "Re-engage lapsed customers with targeted broadcasts."
      }
    ]
  },
  {
    slug: "education",
    name: "Education",
    useCasesTitle: "How schools and coaching institutes use Whatching",
    visual: "flow",
    relatedFeatures: [
      "whatsapp-flows",
      "ai-chatbot",
      "whatsapp-broadcast",
      "shared-inbox"
    ],
    faq: [
      {
        question: "Can a chatbot answer admission questions?",
        answer:
          "Yes. A menu chatbot can cover courses, fees and timings, the AI agent can answer from your brochure and FAQs, and the chat goes to a counsellor when a person is needed."
      },
      {
        question: "Can I send class or exam reminders?",
        answer:
          "Yes. Send them as a broadcast with an approved message template, now or scheduled. Meta decides the template's category, which sets the price per message."
      },
      {
        question: "Can the whole admissions team use one WhatsApp number?",
        answer:
          "Yes. Everyone replies from the shared inbox, and you can assign each chat to a teammate and control what each person can do with role-based permissions."
      }
    ],
    eyebrow: "Education",
    headline: "Capture enquiries and automate admissions.",
    subheadline:
      "Respond to every prospective student instantly, and keep admissions moving without manual follow-up.",
    seoTitle: "WhatsApp Automation for Education & Admissions | Whatching",
    seoDescription:
      "Automate admissions enquiries, course information and follow-ups with WhatsApp and Instagram automation built for schools, colleges and ed-tech.",
    summary:
      "Admissions windows are short and enquiry volume is high. Whatching answers instantly and keeps every prospective student moving through your funnel.",
    journey: [
      "Ad or Instagram enquiry",
      "Automated reply",
      "Counselling flow",
      "AI qualification",
      "Admissions team",
      "Enrollment"
    ],
    challenges: [
      {
        title: "High enquiry volume",
        description:
          "Peak season floods the admissions team with repetitive questions."
      },
      {
        title: "Slow follow-up",
        description: "Interested students go cold waiting for a reply."
      }
    ],
    solutions: [
      {
        title: "Automated counselling flows",
        description: "Answer course, fee and eligibility questions instantly."
      },
      {
        title: "Lead qualification",
        description:
          "Collect the details your admissions team needs before calling."
      }
    ],
    useCases: [
      {
        title: "Course enquiries",
        description: "Instant answers on courses, fees and eligibility."
      },
      {
        title: "Application reminders",
        description: "Automated nudges to complete an application."
      },
      {
        title: "Event & webinar RSVPs",
        description: "Capture and confirm attendance automatically."
      }
    ]
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    useCasesTitle: "How real estate teams use Whatching",
    visual: "inbox",
    relatedFeatures: [
      "whatsapp-flows",
      "shared-inbox",
      "ai-chatbot",
      "analytics"
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
          "Yes. It can ask for budget, location and property type with menus and questions, then hand the chat to an agent on your team."
      },
      {
        question: "Can I send brochures and photos?",
        answer:
          "Yes. Broadcasts can include an image, and your team can share documents and photos in the chat."
      }
    ],
    eyebrow: "Real Estate",
    headline: "Qualify property leads instantly.",
    subheadline:
      "Respond to every enquiry the moment it comes in, and hand agents only the leads worth calling.",
    seoTitle: "WhatsApp Automation for Real Estate | Whatching",
    seoDescription:
      "Qualify property leads instantly with WhatsApp and Instagram automation — budget, location and timeline captured before your agents make a call.",
    summary:
      "Property enquiries go cold fast. Whatching responds instantly and qualifies budget, location and timeline before an agent ever picks up the phone.",
    journey: [
      "Instagram / portal enquiry",
      "DM or WhatsApp",
      "Qualification flow",
      "AI",
      "Agent assignment",
      "Site visit",
      "Closed deal"
    ],
    challenges: [
      {
        title: "Enquiry volume vs. agent time",
        description:
          "Not every enquiry is worth an agent's time — but you don't know which until you ask."
      },
      {
        title: "Slow response loses leads",
        description: "The first agency to respond usually wins the lead."
      }
    ],
    solutions: [
      {
        title: "Instant qualification",
        description:
          "Automated flows capture budget, location and timeline upfront."
      },
      {
        title: "Hand over qualified leads",
        description:
          "The chat goes to an agent once budget, location and timeline are captured."
      }
    ],
    useCases: [
      {
        title: "Property enquiries",
        description: "Instant response with qualifying questions."
      },
      {
        title: "Site visit scheduling",
        description: "Book visits directly inside the conversation."
      },
      {
        title: "Listing broadcasts",
        description: "Notify matched leads when a new listing goes live."
      }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    useCasesTitle: "How clinics use Whatching",
    visual: "ai",
    relatedFeatures: [
      "ai-chatbot",
      "whatsapp-broadcast",
      "shared-inbox",
      "whatsapp-flows"
    ],
    faq: [
      {
        question: "Can I send appointment reminders on WhatsApp?",
        answer:
          "Yes, with an approved message template. You can schedule them as a broadcast to the patients concerned."
      },
      {
        question: "What does the AI agent answer?",
        answer:
          "Only what you give it, such as clinic timings, services, fees and how to book. Keep medical advice with your doctors; the AI agent hands the chat to your team when a person is needed."
      },
      {
        question: "Can reception and doctors share one WhatsApp number?",
        answer:
          "Yes. Everyone works from the shared inbox, and role-based permissions control what each person can see and do."
      }
    ],
    eyebrow: "Healthcare",
    headline: "Manage enquiries and appointments.",
    subheadline:
      "Handle appointment requests and common questions instantly, while keeping sensitive conversations with your staff.",
    seoTitle: "WhatsApp Automation for Healthcare Providers | Whatching",
    seoDescription:
      "Automate appointment enquiries, reminders and common questions with WhatsApp automation built for clinics, hospitals and healthcare providers.",
    summary:
      "Patients expect a fast reply. Whatching handles appointment requests and routine questions instantly, and hands anything clinical to your staff.",
    journey: [
      "Enquiry via WhatsApp",
      "Automated triage",
      "AI FAQ handling",
      "Staff handoff",
      "Appointment booked",
      "Reminder sent",
      "Visit"
    ],
    challenges: [
      {
        title: "High call volume",
        description:
          "Front-desk staff spend hours on repetitive scheduling questions."
      },
      {
        title: "Missed appointments",
        description: "No-shows without a reminder system."
      }
    ],
    solutions: [
      {
        title: "Automated scheduling",
        description: "Book and confirm appointments without a phone call."
      },
      {
        title: "Reminder broadcasts",
        description: "Cut no-shows with scheduled reminders."
      }
    ],
    useCases: [
      {
        title: "Appointment booking",
        description: "Self-serve scheduling inside a WhatsApp conversation."
      },
      {
        title: "Reminders & follow-ups",
        description: "Automated pre- and post-visit messaging."
      },
      {
        title: "General enquiries",
        description: "Instant answers on hours, services and locations."
      }
    ]
  },
  {
    slug: "travel",
    name: "Travel & Hospitality",
    useCasesTitle: "How travel agencies use Whatching",
    visual: "phone",
    relatedFeatures: [
      "ai-chatbot",
      "whatsapp-broadcast",
      "shared-inbox",
      "instagram-automation"
    ],
    faq: [
      {
        question: "Can the AI agent answer questions about my packages?",
        answer:
          "Yes. It answers from your package documents, website and FAQs, such as what's included, prices and payment options."
      },
      {
        question: "Can Whatching take bookings for me?",
        answer:
          "No. Chatbots and the AI agent collect the details, like dates, destination and group size, and your team confirms the booking."
      },
      {
        question: "Can I promote seasonal packages?",
        answer:
          "Yes. Send a broadcast with an approved marketing template, with an image and buttons such as Plan my trip and View packages."
      }
    ],
    eyebrow: "Travel & Hospitality",
    headline: "Convert enquiries into bookings.",
    subheadline:
      "Answer questions about your packages and prices straight away, and keep in touch with guests before and after their trip.",
    seoTitle: "WhatsApp Automation for Travel & Hospitality | Whatching",
    seoDescription:
      "Turn travel enquiries into bookings with WhatsApp and Instagram automation: instant answers on packages and prices, enquiry chatbots and guest follow-up.",
    summary:
      "Travellers compare several options quickly. Whatching's AI agent answers questions about your packages and prices straight away, and your team confirms the booking.",
    journey: [
      "Instagram / website enquiry",
      "WhatsApp conversation",
      "AI answers package questions",
      "Team confirms the booking",
      "Confirmation message",
      "Pre-trip updates",
      "Repeat booking"
    ],
    challenges: [
      {
        title: "Fast-moving decisions",
        description: "Slow replies lose bookings to faster competitors."
      },
      {
        title: "Repetitive questions",
        description:
          "The same questions about packages and prices come in all day."
      }
    ],
    solutions: [
      {
        title: "Instant answers on packages",
        description:
          "The AI agent answers common package and price questions from your own documents."
      },
      {
        title: "Enquiry chatbots",
        description:
          "A chatbot collects dates, destination and group size, then hands the chat to your team to confirm."
      }
    ],
    useCases: [
      {
        title: "Booking enquiries",
        description: "An instant reply with package details and prices."
      },
      {
        title: "Pre-trip communication",
        description: "Automated itinerary and check-in details."
      },
      {
        title: "Post-stay follow-up",
        description: "Review requests and repeat-booking offers."
      }
    ]
  },
  {
    slug: "agencies",
    name: "Agencies",
    useCasesTitle: "How agencies use Whatching",
    visual: "switcher",
    relatedFeatures: [
      "whatsapp-marketing",
      "analytics",
      "shared-inbox",
      "instagram-automation"
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
          "Yes. Each business's analytics shows which Click-to-WhatsApp ads brought in chats, along with broadcast results and Meta charges."
      }
    ],
    eyebrow: "Agencies",
    headline: "Manage multiple clients and campaigns.",
    subheadline:
      "Manage several client businesses from one login. Each business has its own plan.",
    seoTitle: "WhatsApp Automation Platform for Agencies | Whatching",
    seoDescription:
      "Manage several client businesses on WhatsApp and Instagram from one login. Each business has its own plan, inbox, campaigns and results.",
    summary:
      "Agencies juggle several client numbers and inboxes. With Whatching you switch between client businesses from one login, and each one keeps its own plan, campaigns and chats.",
    journey: [
      "Client onboarding",
      "Number connection",
      "Campaign setup",
      "Automation live",
      "Shared inbox per client",
      "Reporting",
      "Renewal"
    ],
    challenges: [
      {
        title: "Context switching",
        description: "Managing multiple clients across disconnected tools."
      },
      {
        title: "Proving ROI",
        description:
          "Clients want clear reporting on what automation delivered."
      }
    ],
    solutions: [
      {
        title: "One login, several businesses",
        description:
          "Switch between client businesses without logging out. Each business has its own plan."
      },
      {
        title: "Results for each client",
        description: "Each client business has its own analytics dashboard."
      }
    ],
    useCases: [
      {
        title: "Campaign management",
        description: "Launch and track campaigns inside each client's business."
      },
      {
        title: "Campaign results",
        description:
          "See delivered, read and replied counts for every client broadcast."
      },
      {
        title: "Team collaboration",
        description: "Assign agency staff to the right client conversations."
      }
    ]
  }
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);
