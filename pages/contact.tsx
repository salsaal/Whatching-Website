import React, { useState } from "react";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowRight, Headphones, Mail, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SiteShell from "@/components/marketing/SiteShell";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";

const options = [
  {
    icon: Users,
    title: "Talk to Sales",
    desc: "See a demo and find the right plan for your team.",
    href: "mailto:hello@whatching.com?subject=Sales%20enquiry"
  },
  {
    icon: Headphones,
    title: "Get Support",
    desc: "Already a customer? Our team is here to help.",
    href: "mailto:hello@whatching.com?subject=Support"
  },
  {
    icon: FaWhatsapp,
    title: "Chat with us on WhatsApp",
    desc: `Prefer WhatsApp? Message us on ${WHATSAPP_NUMBER}.`,
    href: WHATSAPP_URL
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Whatching | Sales & Support"
        description="Talk to the Whatching team about WhatsApp Business API setup, plans or support. Email hello@whatching.com or send us a message and we usually reply within a day."
        path="/contact"
      />
      <SiteShell>
        <section className="hero-section !pb-16">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading
                as="h1"
                align="center"
                eyebrow="Contact"
                title="Let's talk."
                description="Whether it's sales, support, or a quick question — we usually reply within a day."
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-wide grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {options.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <a
                  href={o.href}
                  target={o.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="product-card block h-full"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--accent-wash)",
                      color: "var(--primary)"
                    }}
                  >
                    <o.icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-[15px] font-semibold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {o.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {o.desc}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide max-w-xl">
            <Reveal className="surface-card p-8">
              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <h2
                    className="text-xl font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Send us a message
                  </h2>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Fill in the form and we&apos;ll set up a free onboarding
                    call.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Your name"
                      className="input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      className="input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="input"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="input resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}{" "}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {submitError && (
                    <p
                      className="text-xs text-center"
                      style={{ color: "var(--danger)" }}
                    >
                      Something went wrong. Please try again, or email{" "}
                      <a
                        href="mailto:hello@whatching.com"
                        className="underline"
                      >
                        hello@whatching.com
                      </a>
                      .
                    </p>
                  )}
                </form>
              ) : (
                <div className="text-center py-6">
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message sent
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Our team will get back to you shortly.
                  </p>
                </div>
              )}
            </Reveal>

            <Reveal
              delay={0.1}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-6 text-sm"
            >
              <a
                href="mailto:hello@whatching.com"
                className="inline-flex items-center gap-2"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail className="w-4 h-4" /> hello@whatching.com
              </a>
              <Link
                href="/faq"
                style={{ color: "var(--primary-dark)" }}
                className="font-semibold"
              >
                Check the FAQ →
              </Link>
            </Reveal>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
