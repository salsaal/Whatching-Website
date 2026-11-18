import type { BlogPost } from "@/lib/data/blog";

const post: BlogPost = {
  slug: "whatsapp-green-tick-verification",
  title: "Green tick on WhatsApp Business: who qualifies and how to apply",
  seoTitle: "Green tick WhatsApp Business: how to apply in 2026",
  excerpt:
    "What Meta's Official Business Account checkmark is, the five requirements, how to request it in WhatsApp Manager and how it differs from Meta Verified.",
  seoDescription:
    "Green tick for WhatsApp Business explained: Meta's Official Business Account checkmark, who qualifies, how to apply and how it differs from Meta Verified.",
  category: "Setup",
  date: "2026-11-19",
  updated: "2026-11-19",
  keyword: "green tick whatsapp business",
  summary:
    "The WhatsApp Business green tick is Meta's Official Business Account status, which Meta now describes as a blue checkmark beside your business name. To qualify, your number must have been on the WhatsApp Business Platform for at least 30 days, your business must be verified and follow WhatsApp's policy, and the number needs two-step verification and an approved display name. You apply in WhatsApp Manager.",
  blocks: [
    {
      type: "p",
      text: "Many business owners still call WhatsApp verification the green tick. Meta's documentation calls it an Official Business Account, or OBA, and describes a blue checkmark beside the business name in the contacts view. This guide uses Meta's terms and its current rules, so you know what to check before you apply."
    },
    {
      type: "h2",
      text: "What is the green tick on WhatsApp Business?"
    },
    {
      type: "p",
      text: "It is Meta's Official Business Account status. Meta defines an Official Business Account as a business phone number owned by a business that has been verified as authentic against specific criteria. Numbers with this status show a blue checkmark beside their name in the contacts view."
    },
    {
      type: "p",
      text: "Meta grants the status to a phone number on the WhatsApp Business Platform, the official API that providers like Whatching use. You request it for each business phone number. Meta says it does not grant the status to business employees, test accounts or WhatsApp Business app phone numbers."
    },
    {
      type: "h2",
      text: "What does the blue checkmark do for your business?"
    },
    {
      type: "p",
      text: "It shows customers that Meta has verified the business behind the number. Meta also ties it to search. A number without Official Business Account status doesn't appear in results when people search for it inside WhatsApp, unless they have saved the number in their contacts. Meta recommends applying for the status to make your business easier to find."
    },
    {
      type: "p",
      text: "There is one trade-off. Once a number has the status, you need Meta's direct support to change its display name."
    },
    {
      type: "h2",
      text: "Who is eligible for the WhatsApp green tick?"
    },
    {
      type: "p",
      text: "Meta lists five criteria, and all of them must be met:"
    },
    {
      type: "table",
      caption:
        "Meta's eligibility criteria for Official Business Account status",
      head: ["Requirement", "What it means", "Where to check"],
      rows: [
        [
          "Follow the WhatsApp Business Messaging Policy",
          "Your business and your messages stay within WhatsApp's rules for businesses",
          "WhatsApp's policy page, and any alerts in WhatsApp Manager"
        ],
        [
          "At least 30 days on the platform",
          "The business has been registered on the WhatsApp Business Platform for 30 days or more",
          "The date you first connected the number"
        ],
        [
          "Verified business portfolio",
          "The business portfolio that owns the number has passed Meta's business verification",
          "Meta Business Suite"
        ],
        [
          "Two-step verification on",
          "The number has a PIN set for two-step verification, an extra security step",
          "WhatsApp Manager, under Account tools, then Phone numbers"
        ],
        [
          "Approved display name",
          "Meta has approved the business name shown on the number's profile",
          "WhatsApp Manager, in the Phone numbers panel"
        ]
      ]
    },
    {
      type: "p",
      text: "Two notes on these. Meta checks display names automatically when a number reaches a higher messaging limit, so a newly connected number may not have an approved name yet. And Meta has said it is gradually phasing out the two-step verification PIN for eligible Cloud API numbers. Its Official Business Accounts page, last updated on 19 September 2026, still lists two-step verification as a requirement, so go by that page when you apply."
    },
    {
      type: "p",
      text: "For business verification, you submit official business documents in Meta Business Suite for Meta to review. Our guide on [how to get the WhatsApp Business API](/blog/how-to-get-whatsapp-business-api) shows where it fits into setup."
    },
    {
      type: "p",
      text: "If you meet all five and still don't see the option in WhatsApp Manager, Meta asks you to contact your Meta point of contact, your provider's support or Meta Support to check whether you can apply."
    },
    {
      type: "h2",
      text: "How do you apply for the green tick on WhatsApp Business?"
    },
    {
      type: "p",
      text: "You request it in WhatsApp Manager, Meta's tool for managing your WhatsApp account. When you connect a number through Whatching you keep full access to it. Meta's steps are:"
    },
    {
      type: "ol",
      items: [
        "Open WhatsApp Manager, go to Overview and click your business phone number.",
        "Turn on two-step verification if it isn't on already.",
        "Under Phone numbers, then Profile, find Official business account and click Submit Request."
      ]
    },
    {
      type: "p",
      text: "Meta reviews the request and sends you a notification saying whether the number has been granted the status. Providers can also check the status of a request through Meta's API."
    },
    {
      type: "p",
      text: "Before you submit, complete your business profile: profile picture, description, email and website. Meta's page doesn't list the profile as a requirement, but it is what customers see when they open your profile."
    },
    {
      type: "p",
      text: "If you haven't connected a number yet, the 30 days only start once you do. Whatching offers a free onboarding call to anyone who fills in the demo form, and the team helps you connect the number on the call."
    },
    { type: "embed", name: "demo" },
    {
      type: "h2",
      text: "How long does green tick approval take?"
    },
    {
      type: "p",
      text: "Meta doesn't publish a review time for Official Business Account requests. The waits it does state come before and after the review: your business must have been on the platform for at least 30 days before you apply, and after a rejection you must wait 30 days before you can request again."
    },
    {
      type: "h2",
      text: "What should you do if your green tick request is rejected?"
    },
    {
      type: "p",
      text: "Wait 30 days, then apply again. Meta says a rejection means its team reviewed your account and decided it doesn't meet the eligibility requirements at this time. Use the wait to check each requirement again:"
    },
    {
      type: "ul",
      items: [
        "Confirm that your business portfolio shows as verified in Meta Business Suite.",
        "Check that the number's display name has been approved.",
        "Make sure two-step verification is still on for the number.",
        "Look for policy warnings or restrictions in WhatsApp Manager and Business Support Home.",
        "Count 30 days from when the number joined the platform."
      ]
    },
    {
      type: "p",
      text: "A rejection doesn't stop you sharing your business details. Every business phone number has a business profile with a profile picture, email, website and description, and you can edit these at any time."
    },
    {
      type: "h2",
      text: "How is the green tick different from Meta Verified?"
    },
    {
      type: "p",
      text: "They are separate products. The Official Business Account is for numbers on the WhatsApp Business Platform and is requested in WhatsApp Manager. Meta Verified for business is a paid subscription you buy inside the WhatsApp Business app, which comes with a verified badge and other tools."
    },
    {
      type: "table",
      caption: "Official Business Account and Meta Verified, side by side",
      head: [
        "Compared on",
        "Official Business Account",
        "Meta Verified for business"
      ],
      rows: [
        [
          "Where it applies",
          "A phone number on the WhatsApp Business Platform (API)",
          "An account on the WhatsApp Business app"
        ],
        [
          "What customers see",
          "A blue checkmark beside the name in the contacts view",
          "A verified badge that can show in chats, business profiles, the calls tab, context cards and incoming calls"
        ],
        [
          "How you get it",
          "Submit a request in WhatsApp Manager",
          "In the WhatsApp Business app, tap Tools, then Meta Verified, choose a package, select the accounts and pay"
        ],
        [
          "What Meta checks",
          "The five criteria above, including business verification",
          "A verification process based on your activity across Meta technologies, plus any information or documents you provide"
        ],
        [
          "Cost",
          "Meta's page lists no fee",
          "A paid subscription with several plans"
        ],
        [
          "Other features",
          "None listed",
          "Impersonation protection, priority support, a custom web page, multi-agent access and verified channels"
        ]
      ]
    },
    {
      type: "p",
      text: "WhatsApp's Help Centre says Meta Verified plans may be limited to select businesses or locations. If you are still deciding between the app and the platform, our comparison of the [WhatsApp Business app and API](/blog/whatsapp-business-app-vs-api) sets out the differences."
    },
    {
      type: "p",
      text: "If you use the WhatsApp Business app and Whatching on the same number through coexistence, note that Meta's page says WhatsApp Business app phone numbers are not granted Official Business Account status. The page doesn't explain how that applies to a number used on both, so check with Meta Support before you count on the checkmark. Our [coexistence guide](/blog/whatsapp-coexistence) explains how the shared setup works."
    },
    {
      type: "h2",
      text: "Does the green tick raise your messaging limits?"
    },
    {
      type: "p",
      text: "Meta's messaging limits page doesn't list Official Business Account status as a way to raise limits. Business verification, which you need for the checkmark anyway, is one of the scaling paths that lifts a new business from 250 to 2,000 unique customers in a rolling 24 hours. Our guide to [WhatsApp messaging limits](/blog/whatsapp-messaging-limits) covers the rest."
    },
    {
      type: "p",
      text: "Whatching is built on Meta's official WhatsApp Business Platform, so a number you connect to it is a platform number that can work towards Official Business Account status. You can try the Pro plan free for 7 days, with no card needed."
    },
    { type: "embed", name: "trial" }
  ],
  faq: [
    {
      question: "Is the WhatsApp green tick now blue?",
      answer:
        "Meta's current Official Business Accounts page describes a blue checkmark beside the business name in the contacts view. Many people still call it the green tick. Both names refer to the same Official Business Account status for numbers on the WhatsApp Business Platform."
    },
    {
      question: "Can I get the green tick on the free WhatsApp Business app?",
      answer:
        "Not as Official Business Account status. Meta says it doesn't grant that status to WhatsApp Business app phone numbers. On the app, the route to a verified badge is Meta Verified for business, a paid subscription you start from Tools in the app, where it is available."
    },
    {
      question: "How much does the WhatsApp green tick cost?",
      answer:
        "Meta's Official Business Accounts page lists no fee for requesting the status. You do need a number on the WhatsApp Business Platform, which means paying Meta's message charges and usually a provider. Whatching's plans start at ₹2,499 a month plus 18% GST, and Pro has a free 7-day trial."
    },
    {
      question:
        "Do I need a famous brand or press coverage to get the green tick?",
      answer:
        "Meta's current page doesn't list followers, press coverage or brand size as criteria. It lists five: following WhatsApp's policy, 30 days on the platform, a verified business portfolio, two-step verification and an approved display name. Meta still reviews every request and can decline it."
    },
    {
      question: "Can I reapply for the green tick after a rejection?",
      answer:
        "Yes, after 30 days. Meta says a rejection means the account doesn't meet the eligibility requirements at that time. Use the wait to recheck business verification, display name approval, two-step verification and any policy warnings, then submit a new request in WhatsApp Manager."
    },
    {
      question:
        "Does the green tick help customers find my business on WhatsApp?",
      answer:
        "Yes. Meta says a number without Official Business Account status doesn't appear in WhatsApp search results unless the person has saved it in their contacts. With the status, your number can appear when people search for it, and Meta recommends applying for better discoverability."
    }
  ],
  sources: [
    {
      label: "Meta: Official Business Accounts",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts"
    },
    {
      label: "Meta: Display names",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/display-names"
    },
    {
      label: "Meta: Business phone numbers",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"
    },
    {
      label: "Meta: Two-step verification",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification"
    },
    {
      label: "Meta: Messaging limits",
      url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits"
    },
    {
      label:
        "WhatsApp Business: Protect your business's brand with Meta Verified",
      url: "https://whatsappbusiness.com/resources/resource-library/meta-verified-business/"
    },
    {
      label:
        "WhatsApp Help Centre: About Meta Verified for business on WhatsApp",
      url: "https://faq.whatsapp.com/3872729742954601/"
    }
  ],
  related: [
    "how-to-get-whatsapp-business-api",
    "whatsapp-messaging-limits",
    "whatsapp-coexistence"
  ],
  relatedFeatures: ["whatsapp-marketing", "whatsapp-broadcast"]
};

export default post;
