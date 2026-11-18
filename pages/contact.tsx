import React from "react";
import Link from "next/link";
import { Headphones, Mail, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import OnboardingForm from "@/components/marketing/OnboardingForm";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/seo";

const options = [
  {
    icon: FaWhatsapp,
    title: "Chat with us on WhatsApp",
    desc: WHATSAPP_NUMBER,
    action: "Open WhatsApp",
    href: WHATSAPP_URL,
    primary: true
  },
  {
    icon: Users,
    title: "See a demo",
    desc: "Watch the 3-minute tour and book a free onboarding call.",
    action: "Go to the demo",
    href: "/demo"
  },
  {
    icon: Headphones,
    title: "Get support",
    desc: "Already a customer? Email us and we'll help.",
    action: "Email support",
    href: "mailto:hello@whatching.com?subject=Support"
  }
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Whatching | Sales and Support"
        description="Talk to the Whatching team about WhatsApp Business API set-up, plans or support. Message us on WhatsApp, email hello@whatching.com or send a message."
        path="/contact"
        jsonLd={[
          {
            "@type": "ContactPage",
            name: "Contact Whatching",
            url: "https://www.whatching.com/contact"
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-20 max-sm:pt-28">
          <div className="container-wide grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-12 lg:gap-16 items-start">
            <div className="min-w-0">
              <h1 className="heading-2 mb-4">Talk to us</h1>
              <p
                className="body-large max-w-xl mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Sales, support or a quick question. We usually reply within a
                day, and fastest on WhatsApp.
              </p>
              <ul className="space-y-3 max-w-xl">
                {options.map((o) => (
                  <li key={o.title}>
                    <a
                      href={o.href}
                      target={o.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="product-card flex items-start gap-4 !p-5"
                      style={
                        o.primary
                          ? { borderColor: "var(--border-strong)" }
                          : undefined
                      }
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: "var(--accent-wash)",
                          color: o.primary ? "#1a9e55" : "var(--primary)"
                        }}
                      >
                        <o.icon className="w-5 h-5" />
                      </span>
                      <span className="min-w-0">
                        <span
                          className="block font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {o.title}
                        </span>
                        <span
                          className={`block text-[15px] mt-0.5 ${o.primary ? "whitespace-nowrap" : ""}`}
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {o.desc}
                        </span>
                        <span
                          className="inline-block text-sm font-semibold mt-2"
                          style={{ color: "var(--primary-dark)" }}
                        >
                          {o.action} <span aria-hidden>→</span>
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <a
                  href="mailto:hello@whatching.com"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <Mail className="w-4 h-4" aria-hidden /> hello@whatching.com
                </a>
                <Link
                  href="/faq"
                  className="font-semibold"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Read the FAQ <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <OnboardingForm
                headingAs="h2"
                title="Send us a message"
                intro="Fill this in and we'll get back to you. New to Whatching? We'll set up a free onboarding call."
                withMessage
                submitLabel="Send message"
              />
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
