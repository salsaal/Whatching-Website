import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Home, Plane, ShoppingBag, Stethoscope } from "lucide-react";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./Primitives";
import { industries } from "@/lib/data/industries";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  ecommerce: ShoppingBag,
  education: GraduationCap,
  "real-estate": Home,
  healthcare: Stethoscope,
  travel: Plane,
  agencies: Building2
};

const IndustryGrid = () => (
  <section className="section-padding-large" style={{ background: "var(--background-secondary)" }} id="industries">
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title="Built for businesses that run on conversations."
          description="From e-commerce to real estate, Whatching adapts to how your industry actually sells."
        />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
      >
        {industries.map((ind) => {
          const Icon = icons[ind.slug] ?? Building2;
          return (
            <motion.div key={ind.slug} variants={staggerItem} className="product-card !cursor-default">
              <div className="icon-badge mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                {ind.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {ind.headline}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default IndustryGrid;
