import React from "react";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SiteShell from "./SiteShell";
import FinalCta from "./FinalCta";
import { Reveal, SectionHeading, Eyebrow, staggerContainer, staggerItem } from "./Primitives";
import { Industry } from "@/lib/data/industries";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { breadcrumbSchema } from "@/lib/seo";

const IndustryPageLayout = ({ industry }: { industry: Industry }) => {
  return (
    <>
      <Seo
        title={industry.seoTitle}
        description={industry.seoDescription}
        path={`/industries/${industry.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: `/industries/${industry.slug}` }
          ])
        ]}
      />
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative">
            <Reveal className="max-w-2xl">
              <nav className="text-xs mb-5" style={{ color: "var(--text-muted)" }} aria-label="Breadcrumb">
                <Link href="/industries" style={{ color: "var(--text-muted)" }}>
                  Industries
                </Link>{" "}
                / <span style={{ color: "var(--text-secondary)" }}>{industry.name}</span>
              </nav>
              <Eyebrow>{industry.eyebrow}</Eyebrow>
              <h1 className="heading-1 !text-[clamp(2rem,4vw,3rem)] mt-4 mb-5">{industry.headline}</h1>
              <p className="body-large mb-8" style={{ color: "var(--text-secondary)" }}>
                {industry.subheadline}
              </p>
              <Link href={PRODUCT_APP_URL} className="btn-primary">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Journey */}
        <section className="pb-20">
          <div className="container-wide">
            <Reveal>
              <div className="surface-card p-8">
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  {industry.summary}
                </p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-wrap items-center gap-2"
                >
                  {industry.journey.map((step, i) => (
                    <React.Fragment key={step}>
                      <motion.span
                        variants={staggerItem}
                        className="pill !text-[13px]"
                        style={i === industry.journey.length - 1 ? { background: "var(--accent-wash)", color: "var(--primary-dark)", borderColor: "transparent" } : undefined}
                      >
                        {step}
                      </motion.span>
                      {i < industry.journey.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--border-strong)" }} />
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenges / Solutions */}
        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide grid md:grid-cols-2 gap-10">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: "var(--text-muted)" }}>
                  Common challenges
                </p>
              </Reveal>
              <div className="space-y-5">
                {industry.challenges.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08}>
                    <p className="font-semibold text-[15px] mb-1" style={{ color: "var(--text-primary)" }}>
                      {c.title}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {c.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: "var(--primary-dark)" }}>
                  How Whatching helps
                </p>
              </Reveal>
              <div className="space-y-5">
                {industry.solutions.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <p className="font-semibold text-[15px] mb-1" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {s.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding-large">
          <div className="container-wide">
            <Reveal>
              <SectionHeading align="center" eyebrow="Use cases" title={`How ${industry.name.toLowerCase()} teams use Whatching`} />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {industry.useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 0.08} className="product-card !cursor-default">
                  <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {u.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {u.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
};

export default IndustryPageLayout;
