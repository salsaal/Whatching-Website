import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { highlightsFor, pricingPlans } from "@/lib/data/pricing";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

// A short line under each button, so the next step is clear.
const ctaNotes: Record<string, string> = {
  basic: "Billed monthly. Cancel anytime.",
  pro: "7-day free trial. No card needed.",
  enterprise: "For more numbers or very high volumes."
};

const PricingBand = () => (
  <section className="section-padding-large" id="pricing">
    <div className="container-wide">
      {/* Heading and description centred above the three plans. */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="heading-2 mb-4">
          Pricing in rupees. No markup on Meta.
        </h2>
        <p className="body-large" style={{ color: "var(--text-secondary)" }}>
          Prices per month, plus 18% GST. Meta&apos;s message charges are passed
          on at 0% markup.
        </p>
        <Link
          href="/pricing#compare"
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4"
          style={{ color: "var(--primary-dark)" }}
        >
          Compare all plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4 items-stretch">
        {pricingPlans.map((plan) => {
          const featured = plan.id === "pro";
          const soft = featured
            ? "rgba(255,255,255,0.68)"
            : "var(--text-secondary)";
          const href = plan.ctaHref === "app" ? PRODUCT_APP_URL : plan.ctaHref;
          return (
            <div
              key={plan.id}
              className="rounded-3xl p-6 lg:p-7 flex flex-col"
              style={
                featured
                  ? {
                      background: "var(--graphite, #0b1210)",
                      color: "#ffffff",
                      boxShadow: "0 30px 60px -34px rgba(11,18,16,0.6)"
                    }
                  : {
                      background: "var(--surface)",
                      border: "1px solid var(--border-light)"
                    }
              }
            >
              <div className="flex items-center justify-between gap-2 min-h-[28px]">
                <h3
                  className="text-[17px] font-semibold"
                  style={
                    featured ? undefined : { color: "var(--text-primary)" }
                  }
                >
                  {plan.name}
                </h3>
                {featured && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(74,222,128,0.14)",
                      color: "#86efac"
                    }}
                  >
                    Free for 7 days
                  </span>
                )}
              </div>
              <p
                className="text-sm mt-1.5 md:min-h-[40px]"
                style={{ color: soft }}
              >
                {plan.tagline}
              </p>

              <p
                className="mt-5 text-[40px] font-extrabold tracking-tight leading-none"
                style={featured ? undefined : { color: "var(--text-primary)" }}
              >
                {plan.monthlyPrice === null
                  ? "Custom"
                  : `${plan.currency}${plan.monthlyPrice.toLocaleString("en-IN")}`}
                {plan.monthlyPrice !== null && (
                  <span
                    className="text-sm font-medium ml-1 tracking-normal"
                    style={{ color: soft }}
                  >
                    /month
                  </span>
                )}
              </p>
              <p className="text-xs mt-2" style={{ color: soft }}>
                {plan.monthlyPrice === null
                  ? "Priced to your volume"
                  : "plus 18% GST"}
              </p>

              <Link
                href={href}
                className={`${featured ? "btn-primary" : "btn-secondary"} w-full mt-6`}
              >
                {plan.ctaLabel}
              </Link>
              <p className="text-xs mt-2.5 text-center" style={{ color: soft }}>
                {ctaNotes[plan.id]}
              </p>

              <ul
                className="mt-6 pt-6 space-y-2.5 border-t"
                style={{
                  borderColor: featured
                    ? "rgba(255,255,255,0.12)"
                    : "var(--border-light)"
                }}
              >
                {highlightsFor(plan).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[14px] leading-snug"
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
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PricingBand;
