import Link from "next/link";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import LinkGenerator from "@/components/marketing/LinkGenerator";
import { breadcrumbSchema, faqSchema, organizationRef } from "@/lib/seo";

const CLICK_TO_CHAT = "https://faq.whatsapp.com/5913398998672934/?locale=en_US";

// Facts about wa.me links come from WhatsApp's help centre ("How to use click
// to chat"), checked 19 November 2026.
const faq = [
  {
    question: "What is a WhatsApp link?",
    answer:
      "A WhatsApp click-to-chat link (wa.me) opens a chat with your number when someone taps it, without them saving your number first. It works on phones and on WhatsApp Web. You can add a message that appears typed in, ready for them to send."
  },
  {
    question: "How do I write my number in the link?",
    answer:
      "Use your full number in international format, with digits only: the country code, then the number, with no plus sign, leading zeros, spaces, brackets or dashes. For an Indian number that's 91 followed by the 10-digit mobile number, for example wa.me/919876543210."
  },
  {
    question: "Is the link free to use?",
    answer:
      "Yes. Making and sharing a wa.me link is free, and Meta doesn't charge for messages customers send you. If you use the WhatsApp Business Platform, your replies within 24 hours are service messages; each number gets 1,000 free a month. See our [pricing guide](/blog/whatsapp-business-api-pricing-india)."
  },
  {
    question: "Does it work with the WhatsApp Business app?",
    answer:
      "Yes. A wa.me link works with any active WhatsApp number, whether you use the WhatsApp Business app, the WhatsApp Business Platform, or both on the same number with coexistence."
  },
  {
    question: "Where should I put my WhatsApp link?",
    answer:
      "Anywhere customers look for a way to contact you: your Instagram bio, your Google Business Profile, your website's contact page and header, email signatures, and order confirmation emails. On printed material, turn the link into a QR code."
  },
  {
    question: "Can I see which ads bring in chats?",
    answer:
      "A wa.me link doesn't tell you where a chat came from. Click-to-WhatsApp ads do: Meta passes the ad details with the first message, and Whatching shows which ad brought in each chat. See our [guide to Click-to-WhatsApp ads](/blog/click-to-whatsapp-ads-guide)."
  }
];

export default function LinkGeneratorPage() {
  const path = "/tools/whatsapp-link-generator";
  return (
    <>
      <Seo
        title="Free WhatsApp Link Generator (wa.me) | Whatching"
        description="Create a free WhatsApp chat link (wa.me) for your business number, with a pre-filled message. Copy it for your Instagram bio, website or Google profile."
        path={path}
        jsonLd={[
          {
            "@type": "WebApplication",
            name: "WhatsApp link generator",
            url: `https://www.whatching.com${path}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            publisher: organizationRef
          },
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "WhatsApp link generator", path }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-12 max-sm:pt-28">
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--primary-dark)" }}
              >
                Free tool
              </p>
              <h1 className="heading-2 mb-4">WhatsApp link generator</h1>
              <p
                className="body-large"
                style={{ color: "var(--text-secondary)" }}
              >
                Make a link that opens a WhatsApp chat with your business, with
                a message already typed in. Put it in your Instagram bio,
                website or Google profile. Free, no sign-up.
              </p>
            </div>
            <LinkGenerator />
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-3xl article">
            <h2>How a WhatsApp link works</h2>
            <p>
              WhatsApp&apos;s click-to-chat links start with wa.me, followed by
              your full number in international format. When someone taps the
              link, WhatsApp opens a chat with you, even if they haven&apos;t
              saved your number. It works on phones and on WhatsApp Web. If you
              add a message, it appears in their text box, ready to send.
            </p>
            <p>The two formats, from WhatsApp&apos;s help centre:</p>
            <ul>
              <li>
                <strong>Chat link:</strong>{" "}
                <code className="break-all">wa.me/919876543210</code>
              </li>
              <li>
                <strong>With a message:</strong>{" "}
                <code className="break-all">
                  wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20more
                </code>
              </li>
            </ul>
            <p>
              Write the number with digits only. Leave out the plus sign,
              spaces, brackets, dashes and any leading zero.{" "}
              <a
                href={CLICK_TO_CHAT}
                target="_blank"
                rel="noreferrer"
                className="article-link"
              >
                Read WhatsApp&apos;s guide
              </a>
              .
            </p>

            <h2>Where to use your link</h2>
            <ul>
              <li>Your Instagram bio, and story link stickers.</li>
              <li>
                Your Google Business Profile, so people searching for you can
                message you.
              </li>
              <li>Your website: the header, contact page and product pages.</li>
              <li>
                Email signatures and order or booking confirmation emails.
              </li>
              <li>Printed menus, flyers and packaging, as a QR code.</li>
            </ul>

            <h2>When the chats start coming in</h2>
            <p>
              A link makes it easy to start a chat; answering quickly is what
              turns it into a customer. Whatching gives your whole team one
              shared inbox for those chats, a{" "}
              <Link href="/features/whatsapp-flows" className="article-link">
                chatbot
              </Link>{" "}
              for the questions you get every day, and an{" "}
              <Link href="/features/ai-chatbot" className="article-link">
                AI agent
              </Link>{" "}
              that answers from your own content when you&apos;re busy.
            </p>
          </div>
        </section>

        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)]">
                Questions about WhatsApp links
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>
        <FinalCta />
      </SiteShell>
    </>
  );
}
