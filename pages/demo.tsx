import Link from "next/link";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import OnboardingForm from "@/components/marketing/OnboardingForm";
import YouTubeLite from "@/components/marketing/YouTubeLite";
import DemoPoster from "@/components/marketing/DemoPoster";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { PRODUCT_APP_URL, WHATSAPP_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/seo";
import { DEMO_VIDEO, demoVideoSchema } from "@/lib/data/video";

// What the product tour shows, in order. Shown under the video so visitors
// and search engines can see what it covers without playing it.
const tourTopics = [
  {
    title: "Broadcasts",
    desc: "sending an approved template to a contact list and seeing who received, read and tapped it."
  },
  {
    title: "Chatbot builder",
    desc: "building a chatbot with menus, carousels and a hand-over to a teammate."
  },
  {
    title: "AI agent",
    desc: "teaching it from your own documents and FAQs, then answering a customer."
  },
  {
    title: "Shared inbox",
    desc: "WhatsApp and Instagram chats in one place, assigned to a teammate."
  },
  {
    title: "Instagram",
    desc: "a comment that triggers a DM, with a public reply."
  },
  {
    title: "Analytics",
    desc: "broadcast results, button taps and what Meta charges."
  }
];

const callAgenda = [
  "Connecting your WhatsApp Business number",
  "Setting up your first message templates and broadcast",
  "Building a simple chatbot or AI agent for your common questions",
  "Questions about plans and Meta's message charges"
];

export default function DemoPage() {
  return (
    <>
      <Seo
        title="Product Tour and Free Onboarding Call | Whatching"
        description="Watch a 3-minute demo of Whatching, then book a free onboarding call. See WhatsApp broadcasts, chatbots, the AI agent and the shared team inbox."
        path="/demo"
        jsonLd={[
          demoVideoSchema("/demo"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Demo", path: "/demo" }
          ])
        ]}
      />
      <SiteShell>
        <section className="hero-section !pb-12">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading
                as="h1"
                align="center"
                eyebrow="Product demo"
                title="See how Whatching works."
                description={`Watch the ${DEMO_VIDEO.lengthAdjective} tour, then book a free onboarding call and we'll help you set up.`}
              />
            </Reveal>
            <Reveal delay={0.1} className="max-w-4xl mx-auto mt-10">
              <YouTubeLite
                id={DEMO_VIDEO.id}
                title={DEMO_VIDEO.title}
                poster={<DemoPoster lengthLabel={DEMO_VIDEO.lengthAdjective} />}
              />
            </Reveal>
            <div className="max-w-4xl mx-auto mt-10">
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                What the tour covers
              </h2>
              <ul
                className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[15px]"
                style={{ color: "var(--text-body)" }}
              >
                {tourTopics.map((t) => (
                  <li key={t.title} className="flex gap-3">
                    <Check
                      className="w-4 h-4 mt-1 shrink-0"
                      style={{ color: "var(--primary)" }}
                      strokeWidth={2.6}
                      aria-hidden
                    />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>
                        {t.title}:
                      </strong>{" "}
                      {t.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
          id="book"
        >
          <div className="container-wide grid lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <h2 className="heading-2 mb-5">Book a free onboarding call</h2>
              <p
                className="body-large mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Fill in the form and we&apos;ll set up a free onboarding call.
                On the call we can cover:
              </p>
              <ul className="space-y-3 mb-8">
                {callAgenda.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px]"
                    style={{ color: "var(--text-body)" }}
                  >
                    <Check
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaWhatsapp className="w-4 h-4" /> Chat with us on WhatsApp
                </a>
                <Link href={PRODUCT_APP_URL} className="btn-secondary">
                  Start your free 7-day trial
                </Link>
              </div>
              <p
                className="text-sm mt-4"
                style={{ color: "var(--text-muted)" }}
              >
                7-day trial of Pro. No card needed.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="surface-card p-7 sm:p-8">
              <OnboardingForm title="Your details" />
            </Reveal>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
