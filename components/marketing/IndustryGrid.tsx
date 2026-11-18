import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Home,
  Plane,
  ShoppingBag,
  Stethoscope
} from "lucide-react";
import { SectionHeading } from "./Primitives";
import { industries } from "@/lib/data/industries";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  ecommerce: ShoppingBag,
  education: GraduationCap,
  "real-estate": Home,
  healthcare: Stethoscope,
  travel: Plane,
  agencies: Building2
};

// `plain` drops the heading and band background, for pages that have their
// own intro (the /industries index).
const IndustryGrid = ({ plain = false }: { plain?: boolean }) => (
  <section
    className={plain ? "py-10" : "section-padding-large"}
    style={plain ? undefined : { background: "var(--background-secondary)" }}
    id="industries"
  >
    <div className="container-wide">
      {!plain && (
        <SectionHeading
          eyebrow="Industries"
          title="Built for businesses that run on conversations."
          description="From e-commerce to real estate, Whatching adapts to how your industry sells."
        />
      )}

      <div
        className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 ${plain ? "" : "mt-10"}`}
      >
        {industries.map((ind) => {
          const Icon = icons[ind.slug] ?? Building2;
          return (
            <div key={ind.slug}>
              <Link
                href={`/industries/${ind.slug}`}
                className="product-card !p-4 sm:!p-5 flex h-full items-start gap-3 sm:gap-4"
              >
                <span className="icon-badge !w-10 !h-10 max-sm:hidden">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="flex items-center justify-between gap-2 text-[15px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {ind.name}
                    <ArrowUpRight
                      className="w-4 h-4 shrink-0"
                      style={{ color: "var(--text-muted)" }}
                      aria-hidden
                    />
                  </span>
                  <span
                    className="block text-sm leading-relaxed mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {ind.headline}
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustryGrid;
