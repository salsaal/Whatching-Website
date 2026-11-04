import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal, Eyebrow } from "./Primitives";

export interface StoryPoint {
  title: string;
  desc: string;
}

export interface StoryStat {
  value: string;
  label: string;
}

const StorySection = ({
  id,
  eyebrow,
  tone = "primary",
  title,
  description,
  points,
  stats,
  ctaLabel,
  ctaHref,
  visual,
  reverse = false,
  background
}: {
  id?: string;
  eyebrow: string;
  tone?: "primary" | "instagram" | "neutral";
  title: React.ReactNode;
  description: string;
  points: StoryPoint[];
  stats?: StoryStat[];
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
  reverse?: boolean;
  background?: string;
}) => (
  <section id={id} className="py-20 max-md:py-14 max-sm:py-10" style={background ? { background } : undefined}>
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className={reverse ? "lg:order-2" : "lg:order-1"}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          <h2 className="heading-2 mt-4 mb-4">{title}</h2>
          <p className="body-large mb-8" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>

          <div className="space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div
                  className="w-5.5 h-5.5 w-[22px] h-[22px] mt-0.5 flex items-center justify-center rounded-full shrink-0"
                  style={{ background: "var(--accent-wash)", color: "var(--primary)" }}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]" style={{ color: "var(--text-primary)" }}>
                    {p.title}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {stats && (
            <div className="flex gap-8 mt-8 pt-8 border-t" style={{ borderColor: "var(--border-light)" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel} →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "lg:order-1" : "lg:order-2"}>
          {visual}
        </Reveal>
      </div>
    </div>
  </section>
);

export default StorySection;
