import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { PRODUCT_APP_URL, WHATSAPP_URL } from "@/lib/constants";

const capabilities = [
  "Connect your WhatsApp Business number through Meta's official signup",
  "Send broadcasts with approved message templates, now or scheduled",
  "Build chatbots on a drag-and-drop canvas, no coding needed",
  "Let an AI agent answer questions from your own documents, website and FAQs",
  "Reply to WhatsApp and Instagram chats as a team, from one inbox",
  "Tag contacts automatically by what they do, and follow up with the right group",
  "See broadcast results, which ads bring in chats, and what Meta charges",
  "Automate Instagram comments and DMs on the Pro plan"
];

const audiences = [
  "Online stores",
  "Coaching institutes",
  "Real estate",
  "Clinics",
  "Travel agencies",
  "Marketing agencies"
];

export default function About() {
  return (
    <>
      <Seo
        title="About Whatching | WhatsApp & Instagram Automation"
        description="Whatching is software for small and growing Indian businesses to sell and support customers on WhatsApp and Instagram from one place, on Meta's official platform."
        path="/about"
      />
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative max-w-3xl">
            <Reveal>
              <SectionHeading
                as="h1"
                eyebrow="About Whatching"
                title="WhatsApp and Instagram, in one place, for growing businesses."
                description="Whatching helps small and growing Indian businesses sell and support their customers on WhatsApp and Instagram, from one place."
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <h2
                className="heading-3 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                What Whatching does
              </h2>
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed"
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
            </Reveal>
          </div>
        </section>

        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide max-w-3xl grid gap-12">
            <Reveal>
              <h2
                className="heading-3 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Who it&apos;s for
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-5"
                style={{ color: "var(--text-body)" }}
              >
                Small and growing businesses in India whose customers already
                message them on WhatsApp and Instagram.
              </p>
              <div className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span key={a} className="pill !text-[13px]">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-sm font-semibold mt-5"
                style={{ color: "var(--primary-dark)" }}
              >
                See how each industry uses it{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>

            <Reveal>
              <h2
                className="heading-3 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Why it exists
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-4"
                style={{ color: "var(--text-body)" }}
              >
                Customers expect a quick reply on the apps they already use. For
                most businesses, those chats end up spread across personal
                phones and separate apps, and replies get missed.
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: "var(--text-body)" }}
              >
                Whatching brings WhatsApp and Instagram into one place for the
                whole team. It runs on Meta&apos;s official WhatsApp Business
                Platform, so your number is set up the approved way, not through
                an unofficial WhatsApp tool that can get it banned.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-padding-large">
          <div className="container-wide max-w-2xl text-center">
            <Reveal>
              <h2 className="heading-2 mb-4">Try it, or talk to us first</h2>
              <p
                className="body-large mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Start your free 7-day trial of Pro. No card needed. Or ask us
                anything on WhatsApp.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href={PRODUCT_APP_URL} className="btn-primary">
                  Start your free 7-day trial <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaWhatsapp className="w-4 h-4" /> Chat with us on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
