import React, { useId, useState } from "react";
import { metaConversationPricing } from "@/lib/data/pricing";

// Estimates what Meta will charge in a month for one WhatsApp number, from
// Meta's India rates in lib/data/pricing.ts. Service replies get Meta's free
// tier of 1,000 a month. Each row has a slider for quick changes and a box for
// an exact number. The starting numbers are examples; the result renders on
// the server too, so it shows without scripts.

const FREE_SERVICE_PER_MONTH = 1000;

const rateFor = (category: string) => {
  const row = metaConversationPricing.find((r) => r.category === category);
  return row ? Number(row.price.replace(/[^\d.]/g, "")) : 0;
};

const inr = (value: number, fractionDigits = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(value);

const FIELDS = [
  {
    key: "marketing",
    category: "Marketing",
    label: "Marketing messages",
    hint: "Offers and announcements",
    max: 50000,
    step: 500
  },
  {
    key: "utility",
    category: "Utility",
    label: "Utility messages",
    hint: "Order updates and reminders",
    max: 20000,
    step: 100
  },
  {
    key: "authentication",
    category: "Authentication",
    label: "Login codes",
    hint: "Sent to Indian numbers",
    max: 10000,
    step: 100
  },
  {
    key: "service",
    category: "Service",
    label: "Service replies",
    hint: "The first 1,000 a month are free",
    max: 10000,
    step: 100
  }
] as const;

type Key = (typeof FIELDS)[number]["key"];

const MetaCostCalculator = () => {
  const id = useId();
  const [counts, setCounts] = useState<Record<Key, number>>({
    marketing: 2000,
    utility: 500,
    authentication: 0,
    service: 1500
  });

  const set = (key: Key, value: number) =>
    setCounts((c) => ({ ...c, [key]: Math.max(0, Math.floor(value || 0)) }));

  const lines = FIELDS.map((f) => {
    const rate = rateFor(f.category);
    const billable =
      f.key === "service"
        ? Math.max(0, counts.service - FREE_SERVICE_PER_MONTH)
        : counts[f.key];
    return { ...f, rate, billable, cost: billable * rate };
  });
  const total = lines.reduce((sum, l) => sum + l.cost, 0);

  return (
    <div
      className="rounded-2xl p-6 sm:p-7"
      style={{ background: "var(--graphite, #0b1210)", color: "#ffffff" }}
    >
      <h3 className="text-lg font-semibold">Estimate your Meta charges</h3>
      <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
        Messages you expect to send in a month from one WhatsApp number. Drag or
        type to change the examples.
      </p>

      <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
        {FIELDS.map((f) => {
          const value = counts[f.key];
          const pct = Math.min(100, (value / f.max) * 100);
          return (
            <div key={f.key}>
              <div className="flex items-end justify-between gap-4">
                <label htmlFor={`${id}-${f.key}-n`} className="min-w-0">
                  <span className="block text-sm font-semibold">{f.label}</span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {f.hint}
                  </span>
                </label>
                <input
                  id={`${id}-${f.key}-n`}
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={value.toLocaleString("en-IN")}
                  onChange={(e) =>
                    set(f.key, Number(e.target.value.replace(/\D/g, "")))
                  }
                  className="calc-number w-[96px] shrink-0 h-9 rounded-lg px-2.5 text-right text-[15px] font-semibold tabular-nums"
                />
              </div>
              <input
                type="range"
                min={0}
                max={f.max}
                step={f.step}
                value={Math.min(value, f.max)}
                onChange={(e) => set(f.key, Number(e.target.value))}
                aria-label={`${f.label} a month`}
                aria-valuetext={`${value.toLocaleString("en-IN")} a month`}
                className="calc-range mt-3"
                style={{ "--pct": `${pct}%` } as React.CSSProperties}
              />
            </div>
          );
        })}
      </form>

      <div
        className="mt-7 pt-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.14)" }}
        aria-live="polite"
      >
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          Estimated Meta charges a month
        </p>
        <p className="text-[40px] font-extrabold tracking-tight leading-tight tabular-nums">
          {inr(total)}
        </p>
        <ul
          className="mt-3 space-y-1.5 text-sm tabular-nums"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          {lines.map((l) => (
            <li key={l.key} className="flex justify-between gap-4">
              <span>
                {l.billable.toLocaleString("en-IN")} {l.label.toLowerCase()} ×{" "}
                {inr(l.rate, 4)}
              </span>
              <span>{inr(l.cost)}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
          An estimate before taxes, at Meta&apos;s rates with 0% markup.
          Messages customers send you are free, and chats that start from a
          Click-to-WhatsApp ad aren&apos;t charged for up to 7 days. Your
          Whatching plan is separate.
        </p>
      </div>
    </div>
  );
};

export default MetaCostCalculator;
