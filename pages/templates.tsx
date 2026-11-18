import React, { useState } from "react";
import Link from "next/link";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import TemplateCard from "@/components/marketing/TemplateCard";
import { templates, WaTemplate } from "@/lib/data/templates";
import { metaConversationPricing, metaPricingSource } from "@/lib/data/pricing";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

const INDUSTRIES: { key: WaTemplate["industry"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "education", label: "Education" },
  { key: "real-estate", label: "Real estate" },
  { key: "healthcare", label: "Healthcare" },
  { key: "travel", label: "Travel" },
  { key: "general", label: "Any business" }
];

const rateFor = (category: string) =>
  metaConversationPricing.find((r) => r.category === category)?.price;

const faq = [
  {
    question: "Do WhatsApp templates need approval?",
    answer:
      "Yes. On the WhatsApp Business Platform, any message you send first, or more than 24 hours after a customer last wrote to you, must use a template Meta has approved. You write and submit templates in Whatching and see when they're approved."
  },
  {
    question: "What does a template message cost?",
    answer: `Meta charges for each delivered template message by category. In India, as of ${metaPricingSource.asOf}, marketing costs ${rateFor("Marketing")}, and utility and authentication cost ${rateFor("Utility")} each. Whatching passes these on at 0% markup. See the [full rates and calculator](/pricing#meta-charges).`
  },
  {
    question: "Who decides a template's category?",
    answer:
      "Meta does, when it reviews the template. If a utility template includes anything promotional, Meta may treat it as marketing, which costs more. Keep order and booking updates strictly about the customer's own order or booking."
  },
  {
    question: "What are the {{1}} and {{2}} in a template?",
    answer:
      "They're variables: placeholders you fill in for each customer when you send, such as their name, an order number or a date. Each template lists what its variables stand for."
  },
  {
    question: "Can I use these templates as they are?",
    answer:
      "They're starting points. Change the wording to sound like your business, keep the variables in the same order, and submit them to Meta for approval before you send."
  }
];

export default function TemplatesPage() {
  const [industry, setIndustry] =
    useState<(typeof INDUSTRIES)[number]["key"]>("all");
  const shown =
    industry === "all"
      ? templates
      : templates.filter((t) => t.industry === industry);
  const path = "/templates";

  return (
    <>
      <Seo
        title="WhatsApp Message Templates for Business (India) | Whatching"
        description="Ready-to-use WhatsApp message templates for online stores, schools, real estate, clinics and travel: marketing, utility and login codes, with cost per message."
        path={path}
        jsonLd={[
          {
            "@type": "CollectionPage",
            name: "WhatsApp message templates",
            url: `https://www.whatching.com${path}`,
            hasPart: templates.map((t) => ({
              "@type": "CreativeWork",
              name: t.name,
              text: t.body,
              url: `https://www.whatching.com${path}#${t.slug}`
            }))
          },
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Templates", path }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-8 max-sm:pt-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--primary-dark)" }}
              >
                Free library
              </p>
              <h1 className="heading-2 mb-4">
                WhatsApp message templates for your business
              </h1>
              <p
                className="body-large"
                style={{ color: "var(--text-secondary)" }}
              >
                {templates.length} templates for offers, updates, reminders and
                login codes, with a preview, what each variable means and what
                Meta charges to send it in India. Copy one, make it yours, and
                submit it to Meta for approval.
              </p>
            </div>
          </div>
        </section>

        <nav
          aria-label="Filter by industry"
          className="pb-8 sticky top-[76px] z-20"
          style={{ background: "var(--background)" }}
        >
          <ul className="container-wide flex gap-2 overflow-x-auto swipe-row py-2">
            {INDUSTRIES.map((i) => (
              <li key={i.key} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndustry(i.key)}
                  aria-pressed={industry === i.key}
                  className="inline-flex items-center min-h-[40px] px-4 rounded-full text-sm font-medium"
                  style={
                    industry === i.key
                      ? {
                          background: "var(--text-primary)",
                          color: "#fff",
                          border: "1px solid var(--text-primary)"
                        }
                      : {
                          background: "var(--surface)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-medium)"
                        }
                  }
                >
                  {i.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="pb-20">
          <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {shown.map((t) => (
              <TemplateCard key={t.slug} t={t} rate={rateFor(t.category)} />
            ))}
          </div>
          <p
            className="container-wide text-sm mt-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Rates are Meta&apos;s list rates for India as of{" "}
            {metaPricingSource.asOf}. Meta decides each template&apos;s category
            when it reviews it. Learn more in our{" "}
            <Link
              href="/blog/whatsapp-broadcast-best-practices"
              className="article-link"
            >
              broadcast guide
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/whatsapp-business-api-pricing-india"
              className="article-link"
            >
              pricing guide
            </Link>
            .
          </p>
        </section>

        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)]">
                Questions about templates
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
