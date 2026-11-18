import React from "react";
import { Check, CheckCircle2, Minus } from "lucide-react";
import Seo from "@/components/Seo/Seo";
import {
  absoluteUrl,
  faqSchema,
  JsonLd,
  organizationRef,
  SITE_NAME
} from "@/lib/seo";
import SiteShell from "@/components/marketing/SiteShell";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import FinalCta from "@/components/marketing/FinalCta";
import PricingCard from "@/components/marketing/PricingCard";
import MetaCostCalculator from "@/components/marketing/MetaCostCalculator";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import {
  metaConversationPricing,
  metaPricingSource,
  pricingFaq,
  pricingPlans
} from "@/lib/data/pricing";

const comparisonRows: {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
}[] = [
  { label: "WhatsApp contacts", values: ["10,000", "25,000", "Higher limits"] },
  {
    label: "Team members",
    values: ["Owner + 2", "Owner + 5", "Unlimited"]
  },
  { label: "WhatsApp numbers", values: ["1", "Up to 2", "More"] },
  { label: "AI usage included", values: ["1M", "3M", "Unlimited"] },
  { label: "Markup on Meta's charges", values: ["0%", "0%", "0%"] },
  { label: "Shared team inbox", values: [true, true, true] },
  { label: "Chatbot builder", values: [true, true, true] },
  { label: "Instagram automation", values: [false, true, true] },
  { label: "Dedicated account manager", values: [false, false, true] },
  { label: "Priority support", values: [false, false, true] }
];

// The cases where Meta doesn't charge, from Meta's pricing page.
const freeCases = [
  {
    title: "Messages to you are free",
    desc: "Meta never charges for messages customers send you."
  },
  {
    title: "1,000 free replies a month",
    desc: "Replies within 24 hours of a customer's message are free for the first 1,000 each month, for each number."
  },
  {
    title: "Free after a Click-to-WhatsApp ad",
    desc: "When someone messages you from your ad on their phone and you reply within 24 hours, that chat is free for up to 7 days."
  }
];

const Cell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 mx-auto" style={{ color: "var(--primary)" }} />
    ) : (
      <Minus
        className="w-4 h-4 mx-auto"
        style={{ color: "var(--text-muted)" }}
      />
    );
  }
  return <span style={{ color: "var(--text-body)" }}>{value}</span>;
};

const softwareApplicationSchema: JsonLd = {
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: absoluteUrl("/pricing"),
  publisher: organizationRef,
  offers: pricingPlans
    .filter((plan) => plan.monthlyPrice !== null)
    .map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: `${plan.tagline} Price per month, plus 18% GST.`,
      price: String(plan.monthlyPrice),
      priceCurrency: "INR",
      url: absoluteUrl("/pricing"),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthlyPrice),
        priceCurrency: "INR",
        billingDuration: "P1M",
        valueAddedTaxIncluded: false
      }
    }))
};

const PricingPage = () => {
  return (
    <>
      <Seo
        title="WhatsApp Business API Pricing in India | Whatching"
        description="Plans from ₹2,499/month + GST. Meta's WhatsApp message charges are passed through at 0% markup. Compare Basic, Pro and Enterprise. Free 7-day Pro trial."
        path="/pricing"
        jsonLd={[softwareApplicationSchema, faqSchema(pricingFaq)]}
      />
      <SiteShell>
        <section className="hero-section !min-h-0 !pt-32 !pb-12">
          <div className="container-wide relative text-center">
            <Reveal>
              <SectionHeading
                as="h1"
                align="center"
                eyebrow="Pricing"
                title="Flexible pricing for every business."
                description={
                  <>
                    Plans from ₹2,499 a month, plus GST. Meta&apos;s own message
                    charges are passed on at 0% markup. Start your free{" "}
                    <span className="whitespace-nowrap">7-day</span> trial of
                    Pro. No card needed.
                  </>
                }
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-8">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
              {pricingPlans.map((plan, i) => (
                <Reveal key={plan.id} delay={i * 0.08}>
                  <PricingCard plan={plan} showAllFeatures />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="section-padding-large">
          <div className="container-wide">
            <Reveal>
              <SectionHeading
                align="center"
                title="Which plan is right for me?"
              />
            </Reveal>
            <Reveal
              delay={0.1}
              className="mt-10 max-w-4xl mx-auto overflow-x-auto"
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <th
                      className="text-left py-3 pr-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Feature
                    </th>
                    {pricingPlans.map((p) => (
                      <th
                        key={p.id}
                        className="py-3 px-4 text-center font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.label}
                      style={{ borderBottom: "1px solid var(--border-light)" }}
                    >
                      <td
                        className="py-3 pr-4 font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {row.label}
                      </td>
                      {row.values.map((v, i) => (
                        <td key={i} className="py-3 px-4 text-center">
                          <Cell value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* What Meta charges: what's free, the rate table and a calculator */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
          id="meta-charges"
        >
          <div className="container-wide">
            <div className="mb-12">
              <SectionHeading
                align="center"
                title="What Meta charges per message"
                description="Your plan covers Whatching. Meta also charges a small fee for each message you send, based on its type. We pass it on at Meta's own rate, with 0% markup."
              />
            </div>

            <ul className="grid md:grid-cols-3 gap-x-8 gap-y-5 mb-10">
              {freeCases.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "var(--primary)" }}
                    aria-hidden
                  />
                  <span>
                    <span
                      className="block font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="block text-sm mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div
                className="lg:col-span-7 rounded-2xl overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-light)"
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-[15px] border-collapse">
                    <caption className="sr-only">
                      Meta&apos;s WhatsApp rates for India, per message, as of{" "}
                      {metaPricingSource.asOf}
                    </caption>
                    <thead>
                      <tr style={{ background: "var(--surface-hover)" }}>
                        <th
                          scope="col"
                          className="text-left text-sm font-semibold px-5 py-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Message type
                        </th>
                        <th
                          scope="col"
                          className="text-right text-sm font-semibold px-5 py-3 whitespace-nowrap"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Per message
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {metaConversationPricing.map((item) => (
                        <tr
                          key={item.category}
                          className="border-t"
                          style={{ borderColor: "var(--border-light)" }}
                        >
                          <th
                            scope="row"
                            className="text-left font-normal px-5 py-4 align-top"
                          >
                            <span
                              className="block font-semibold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {item.category}
                            </span>
                            <span
                              className="block text-sm mt-0.5"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {item.desc}
                            </span>
                          </th>
                          <td
                            className="text-right px-5 py-4 align-top font-semibold tabular-nums whitespace-nowrap"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p
                  className="text-xs px-5 py-4 border-t"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "var(--border-light)"
                  }}
                >
                  Meta&apos;s list rates for India in INR, as of{" "}
                  {metaPricingSource.asOf}. Source:{" "}
                  <a
                    href={metaPricingSource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Meta&apos;s WhatsApp pricing page
                  </a>
                  . Meta may change these rates.
                </p>
              </div>

              <div className="lg:col-span-5">
                <MetaCostCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding-large">
          <div className="container-wide max-w-2xl">
            <Reveal>
              <SectionHeading align="center" title="Pricing questions" />
            </Reveal>
            <div className="mt-10">
              <FaqAccordion items={pricingFaq} />
            </div>
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
};

export default PricingPage;
