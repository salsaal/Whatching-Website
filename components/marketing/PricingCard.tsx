import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PricingPlan } from "@/lib/data/pricing";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const PricingCard = ({
  plan,
  featureLimit,
  showAllFeatures = false
}: {
  plan: PricingPlan;
  featureLimit?: number;
  showAllFeatures?: boolean;
}) => {
  const features = featureLimit ? plan.features.slice(0, featureLimit) : plan.features;

  return (
    <div
      className="relative rounded-2xl p-7 h-full flex flex-col transition-transform duration-300"
      style={{
        background: "var(--surface)",
        border: plan.recommended ? "2px solid var(--primary)" : "1px solid var(--border-light)",
        boxShadow: plan.recommended ? "0 24px 48px -20px rgba(22,159,73,0.32)" : "var(--shadow-card)"
      }}
    >
      {plan.recommended && (
        <span
          className="absolute -top-3.5 left-7 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full text-white"
          style={{ background: "var(--gradient-button)", boxShadow: "var(--shadow-glow)" }}
        >
          Most popular
        </span>
      )}
      <h3 className="text-xl font-bold mt-2" style={{ color: "var(--text-primary)" }}>
        {plan.name}
      </h3>
      <p className="text-sm mt-1.5 mb-6" style={{ color: "var(--text-secondary)" }}>
        {plan.tagline}
      </p>
      <div className="mb-7 pb-7 border-b" style={{ borderColor: "var(--border-light)" }}>
        {plan.monthlyPrice === null ? (
          <span className="text-4xl font-extrabold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Custom
          </span>
        ) : (
          <>
            <span className="text-4xl font-extrabold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              {plan.currency}
              {plan.monthlyPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              {" "}
              /month
            </span>
          </>
        )}
      </div>

      <Link
        href={plan.ctaHref === "app" ? PRODUCT_APP_URL : plan.ctaHref}
        className={`${plan.recommended ? "btn-primary" : "btn-secondary"} w-full mb-7`}
      >
        {plan.ctaLabel}
      </Link>

      <div className="space-y-3 flex-1">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
            <span style={{ color: "var(--text-secondary)" }}>{f}</span>
          </div>
        ))}

        {showAllFeatures &&
          plan.featureGroups?.map((group) => (
            <div key={group.heading}>
              <p className="font-semibold text-sm pt-2" style={{ color: "var(--text-primary)" }}>
                {group.heading}
              </p>
              {group.items.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-sm mt-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                </div>
              ))}
            </div>
          ))}

        {showAllFeatures && plan.comingSoon && (
          <>
            <p className="font-semibold text-sm pt-2" style={{ color: "var(--text-primary)" }}>
              Coming soon
            </p>
            {plan.comingSoon.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-sm mt-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--text-muted)" }} />
                <span style={{ color: "var(--text-muted)" }}>{f}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
