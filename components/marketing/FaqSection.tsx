import React from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./Primitives";
import FaqAccordion from "./FaqAccordion";
import { faqCategories } from "@/lib/data/faq";

const homepageFaqs = faqCategories.flatMap((c) => c.items).slice(0, 10);

const FaqSection = () => (
  <section className="py-20 max-sm:py-12" id="faq">
    <div className="container-wide max-w-3xl">
      <Reveal>
        <SectionHeading align="center" title="Frequently asked questions" />
      </Reveal>

      <div className="mt-10">
        <FaqAccordion items={homepageFaqs} />
      </div>

      <Reveal delay={0.1} className="text-center mt-8">
        <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
          Still have questions?
        </p>
        <Link href="mailto:hello@whatching.com" className="text-sm font-semibold" style={{ color: "var(--primary-dark)" }}>
          Email us →
        </Link>
      </Reveal>
    </div>
  </section>
);

export default FaqSection;
