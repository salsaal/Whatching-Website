import React from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./Primitives";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/lib/data/pricing";

const PricingPreview = () => {
  return (
    <section
      className="section-padding-large"
      style={{ background: "var(--background-secondary)" }}
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Simple pricing, zero markup on Meta fees."
          />
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <PricingCard plan={plan} featureLimit={6} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <Link
            href="/pricing"
            className="text-sm font-semibold"
            style={{ color: "var(--primary-dark)" }}
          >
            View full pricing →
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingPreview;
