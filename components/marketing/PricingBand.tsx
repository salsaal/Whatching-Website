import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Primitives";
import { pricingPlans } from "@/lib/data/pricing";
import { industries } from "@/lib/data/industries";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

// One-line plan summaries for the home page; the full lists stay on /pricing.
const summaries: Record<string, string> = {
  basic: "1 WhatsApp number · 10,000 contacts · owner + 2 team members",
  pro: "2 WhatsApp numbers · 25,000 contacts · owner + 5 team members · Instagram included",
  enterprise:
    "More WhatsApp numbers, unlimited team members and a dedicated account manager"
};

const PricingBand = () => (
  <section className="section-padding-large" id="pricing">
    <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <Reveal className="lg:col-span-4 flex flex-col gap-4">
        <h2 className="heading-2">Pricing in rupees. No markup on Meta.</h2>
        <p className="body-large" style={{ color: "var(--text-secondary)" }}>
          Prices per month, plus 18% GST. Meta&apos;s message charges are passed
          through at 0% markup.
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
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
        <div className="flex flex-wrap gap-3 mt-3">
          <Link href={PRODUCT_APP_URL} className="btn-primary">
            Start your free 7-day trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/pricing" className="btn-secondary">
            Compare plans
          </Link>
        </div>
      </Reveal>

      <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
        {pricingPlans.map((plan, i) => {
          const featured = plan.id === "pro";
          return (
            <Reveal
              key={plan.id}
              delay={i * 0.06}
              className="rounded-3xl p-6 flex flex-col gap-3 h-full"
              style={
                featured
                  ? { background: "var(--text-primary)", color: "#ffffff" }
                  : { background: "var(--background-secondary)" }
              }
            >
              <p className="text-[17px] font-semibold flex items-center justify-between gap-2 flex-wrap">
                {plan.name}
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
              </p>
              <p
                className="text-[36px] font-extrabold tracking-tight leading-none"
                style={featured ? undefined : { color: "var(--text-primary)" }}
              >
                {plan.monthlyPrice === null
                  ? "Custom"
                  : `${plan.currency}${plan.monthlyPrice.toLocaleString("en-IN")}`}
                {plan.monthlyPrice !== null && (
                  <span
                    className="text-sm font-medium ml-1"
                    style={{
                      color: featured
                        ? "rgba(255,255,255,0.65)"
                        : "var(--text-muted)"
                    }}
                  >
                    /month
                  </span>
                )}
              </p>
              {plan.monthlyPrice !== null && (
                <p
                  className="text-xs"
                  style={{
                    color: featured
                      ? "rgba(255,255,255,0.65)"
                      : "var(--text-muted)"
                  }}
                >
                  plus 18% GST
                </p>
              )}
              <p
                className="text-sm leading-relaxed mt-auto pt-2"
                style={{
                  color: featured
                    ? "rgba(255,255,255,0.8)"
                    : "var(--text-secondary)"
                }}
              >
                {summaries[plan.id]}
              </p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PricingBand;
