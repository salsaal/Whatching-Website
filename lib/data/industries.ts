export interface IndustryStep {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  name: string;
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
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
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
    eyebrow: "Travel & Hospitality",
    headline: "Convert enquiries into bookings.",
    subheadline:
      "Answer availability and pricing questions instantly, and keep guests engaged before and after their stay.",
    seoTitle: "WhatsApp Automation for Travel & Hospitality | Whatching",
    seoDescription:
      "Turn travel enquiries into bookings with WhatsApp and Instagram automation — instant availability answers, booking flows and guest follow-up.",
    summary:
      "Travel shoppers compare multiple options fast. Whatching answers availability and pricing instantly, so you're the one who gets the booking.",
    journey: [
      "Instagram / website enquiry",
      "WhatsApp conversation",
      "AI availability check",
      "Booking flow",
      "Confirmation",
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
        description: "Availability and pricing questions repeat endlessly."
      }
    ],
    solutions: [
      {
        title: "Instant availability answers",
        description: "AI handles common pricing and availability questions."
      },
      {
        title: "Booking & itinerary flows",
        description: "Guide guests from enquiry to confirmed booking."
      }
    ],
    useCases: [
      {
        title: "Booking enquiries",
        description: "Instant response with availability and pricing."
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
