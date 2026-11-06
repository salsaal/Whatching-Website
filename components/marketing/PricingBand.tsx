import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Primitives";
import { PricingPlan, pricingPlans } from "@/lib/data/pricing";
import { industries } from "@/lib/data/industries";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

// The highlights shown on the home page. They are picked from each plan's own
// feature list in lib/data/pricing.ts, so wording and limits stay in sync; the
// full lists are on /pricing.
const highlightNames: Record<string, string[]> = {
  basic: [
    "Bulk WhatsApp Messaging",
    "10,000 WhatsApp Contacts",
    "Drag & Drop Chatbot Builder",
    "WhatsApp AI Agent",
    "Owner + 2 Team Members",
    "Multi Agent Shared Inbox"
  ],
  pro: [
    "Includes all Basic features",
    "25,000 WhatsApp Contacts",
    "Upto 2 Phone Numbers per Organization",
    "Owner + 5 Team Members",
    "Instagram Automations",
    "Instagram AI Agent"
  ],
  enterprise: [
    "Includes all Pro features",
    "High Volume Subscribers",
    "Unlimited Team Members",
    "More WhatsApp Numbers",
    "Dedicated Account Manager",
    "Priority Support"
  ]
};

const ctaLabels: Record<string, string> = {
  basic: "Get started",
  pro: "Start free trial",
  enterprise: "Contact sales"
};

const highlightsFor = (plan: PricingPlan) => {
  const wanted = highlightNames[plan.id] ?? [];
  const pool = [
    ...plan.features,
    ...(plan.featureGroups?.flatMap((g) => g.items) ?? [])
  ];
  return pool.filter((feature) => wanted.includes(feature));
};

const PricingBand = () => (
  <section className="section-padding-large" id="pricing">
    <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <Reveal className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-28">
        <h2 className="heading-2">Pricing in rupees. No markup on Meta.</h2>
        <p className="body-large" style={{ color: "var(--text-secondary)" }}>
          Prices per month, plus 18% GST. Meta&apos;s message charges are passed
          through at 0% markup.
        </p>
        <p
          className="text-sm font-semibold mt-2"
          style={{ color: "var(--text-primary)" }}
        >
          Built for
        </p>
        <div className="flex flex-wrap gap-2 -mt-1">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="pill !py-1.5 !text-[13px] hover:border-[var(--primary)]"
            >
              {ind.name}
            </Link>
          ))}
        </div>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3"
          style={{ color: "var(--primary-dark)" }}
        >
          Compare all plans <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>

      <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4 items-stretch">
        {pricingPlans.map((plan, i) => {
          const featured = plan.id === "pro";
          const muted = featured
            ? "rgba(255,255,255,0.62)"
            : "var(--text-muted)";
          const href = plan.ctaHref === "app" ? PRODUCT_APP_URL : plan.ctaHref;
          return (
            <Reveal
              key={plan.id}
              delay={i * 0.06}
              className="rounded-3xl p-6 flex flex-col h-full"
              style={
                featured
                  ? {
                      background: "var(--text-primary)",
                      color: "#ffffff",
                      boxShadow: "0 30px 60px -30px rgba(11,18,16,0.55)"
                    }
                  : {
                      background: "var(--background-secondary)",
                      border: "1px solid var(--border-light)"
                    }
              }
            >
              <div className="flex items-center justify-between gap-2 flex-wrap min-h-[28px]">
                <p className="text-[17px] font-semibold">{plan.name}</p>
                {featured && (
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.16)",
                      color: "#4ade80"
                    }}
                  >
                    Free 7 days
                  </span>
                )}
              </div>

              <p
                className="mt-4 text-[38px] font-extrabold tracking-tight leading-none"
                style={featured ? undefined : { color: "var(--text-primary)" }}
              >
                {plan.monthlyPrice === null
                  ? "Custom"
                  : `${plan.currency}${plan.monthlyPrice.toLocaleString("en-IN")}`}
                {plan.monthlyPrice !== null && (
                  <span
                    className="text-sm font-medium ml-1"
                    style={{ color: muted }}
                  >
                    /month
                  </span>
                )}
              </p>
              <p className="text-xs mt-2" style={{ color: muted }}>
                {plan.monthlyPrice === null
                  ? "Priced to your volume"
                  : "plus 18% GST"}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {highlightsFor(plan).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13.5px] leading-snug"
                    style={{
                      color: featured
                        ? "rgba(255,255,255,0.88)"
                        : "var(--text-body)"
                    }}
                  >
                    <Check
                      className="w-4 h-4 mt-px shrink-0"
                      style={{ color: featured ? "#4ade80" : "var(--primary)" }}
                      strokeWidth={2.6}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className={`${featured ? "btn-primary" : "btn-secondary"} w-full justify-center mt-7`}
              >
                {ctaLabels[plan.id] ?? plan.ctaLabel}
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PricingBand;
