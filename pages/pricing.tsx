import React from "react";
import Head from "next/head";
import { Check, Minus } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import FinalCta from "@/components/marketing/FinalCta";
import PricingCard from "@/components/marketing/PricingCard";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { metaConversationPricing, pricingFaq, pricingPlans } from "@/lib/data/pricing";

const comparisonRows: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "WhatsApp contacts", values: ["10,000", "25,000", "High volume"] },
  { label: "Team members", values: ["2", "5", "Unlimited"] },
  { label: "WhatsApp numbers", values: ["1", "Up to 2", "Multiple"] },
  { label: "AI message tokens", values: ["1M", "3M", "Unlimited"] },
  { label: "Meta fee markup", values: ["0%", "0%", "0%"] },
  { label: "Shared inbox", values: [true, true, true] },
  { label: "No-code flow builder", values: [true, true, true] },
  { label: "Instagram automation", values: [false, true, true] },
  { label: "Dedicated account manager", values: [false, false, true] },
  { label: "Priority support", values: [false, false, true] }
];

const Cell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 mx-auto" style={{ color: "var(--primary)" }} />
    ) : (
      <Minus className="w-4 h-4 mx-auto" style={{ color: "var(--text-muted)" }} />
    );
  }
  return <span style={{ color: "var(--text-body)" }}>{value}</span>;
};

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing | Whatching</title>
        <meta
          name="description"
          content="Transparent WhatsApp and Instagram automation pricing with 0% markup on Meta's conversation fees. Compare Basic, Pro and Enterprise plans."
        />
      </Head>
      <SiteShell>
        <section className="hero-section !min-h-0 !pt-32 !pb-12">
          <div className="container-wide relative text-center">
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Pricing"
                title="Flexible pricing for every business."
                description="While others charge 20–35% commission on every WhatsApp conversation, Whatching connects you directly to Meta with zero markup fees."
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
              <SectionHeading align="center" title="Which plan is right for me?" />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <th className="text-left py-3 pr-4" style={{ color: "var(--text-muted)" }}>
                      Feature
                    </th>
                    {pricingPlans.map((p) => (
                      <th key={p.id} className="py-3 px-4 text-center font-semibold" style={{ color: "var(--text-primary)" }}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} style={{ borderBottom: "1px solid var(--border-light)" }}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>
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

        {/* Meta pricing transparency */}
        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide max-w-5xl">
            <Reveal>
              <SectionHeading
                align="center"
                title="Transparent WhatsApp conversation pricing"
                description="Your subscription covers the platform. Meta charges a small conversation fee based on message type — billed at official rates with 0% markup."
              />
            </Reveal>

            <div className="grid md:grid-cols-2 gap-4 mt-10 mb-8">
              <Reveal className="surface-card p-5">
                <p className="text-lg font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Incoming chats are free
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  When customers message you first, replying is completely free for 24 hours.
                </p>
              </Reveal>
              <Reveal delay={0.06} className="surface-card p-5">
                <p className="text-lg font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Outbound messages are paid
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Meta charges per message based on the approved template category.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {metaConversationPricing.map((item) => (
                <div key={item.category} className="product-card !cursor-default flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {item.category}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-lg font-semibold" style={{ color: item.price === "Free" ? "var(--primary)" : "var(--text-primary)" }}>
                    {item.price}
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {" "}
                      /message
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
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
