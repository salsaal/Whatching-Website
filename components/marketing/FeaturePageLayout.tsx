import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteShell from "./SiteShell";
import FaqAccordion from "./FaqAccordion";
import FinalCta from "./FinalCta";
import { Reveal, SectionHeading, Eyebrow } from "./Primitives";
import { Feature, features } from "@/lib/data/features";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const FeaturePageLayout = ({ feature }: { feature: Feature }) => {
  const tone = feature.category === "Instagram" ? "instagram" : "primary";
  const related = features.filter((f) => feature.related.includes(f.slug));

  return (
    <>
      <Head>
        <title>{feature.seoTitle}</title>
        <meta name="description" content={feature.seoDescription} />
        <meta property="og:title" content={feature.seoTitle} />
        <meta property="og:description" content={feature.seoDescription} />
        <link rel="canonical" href={`https://www.whatching.com/features/${feature.slug}`} />
      </Head>
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative">
            <Reveal className="max-w-2xl">
              <nav className="text-xs mb-5" style={{ color: "var(--text-muted)" }} aria-label="Breadcrumb">
                <Link href="/features" style={{ color: "var(--text-muted)" }}>
                  Features
                </Link>{" "}
                / <span style={{ color: "var(--text-secondary)" }}>{feature.name}</span>
              </nav>
              <Eyebrow tone={tone}>{feature.eyebrow}</Eyebrow>
              <h1 className="heading-1 !text-[clamp(2rem,4vw,3rem)] mt-4 mb-5">{feature.headline}</h1>
              <p className="body-large mb-8" style={{ color: "var(--text-secondary)" }}>
                {feature.subheadline}
              </p>
              <Link href={PRODUCT_APP_URL} className="btn-primary">
                {feature.ctaLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="pb-20">
          <div className="container-wide grid md:grid-cols-2 gap-6">
            <Reveal className="surface-card p-7">
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-muted)" }}>
                The problem
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                {feature.problem}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="surface-card p-7" style={{ background: "var(--accent-wash)" }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--primary-dark)" }}>
                How Whatching helps
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                {feature.solution}
              </p>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide">
            <Reveal>
              <SectionHeading align="center" eyebrow="How it works" title={`How ${feature.name.toLowerCase()} works`} />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {feature.howItWorks.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08} className="product-card !cursor-default">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding-large">
          <div className="container-wide">
            <Reveal>
              <SectionHeading align="center" eyebrow="Benefits" title="Why teams switch to Whatching" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {feature.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08} className="flex gap-3">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                  <div>
                    <p className="font-semibold text-[15px] mb-1" style={{ color: "var(--text-primary)" }}>
                      {b.title}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {b.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide">
            <Reveal>
              <SectionHeading align="center" eyebrow="Use cases" title="Where teams use this every day" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {feature.useCases.map((u, i) => (
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

        {/* FAQ */}
        <section className="section-padding-large">
          <div className="container-wide max-w-2xl">
            <Reveal>
              <SectionHeading align="center" title="Common questions" />
            </Reveal>
            <div className="mt-10">
              <FaqAccordion items={feature.faq} />
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="pb-20">
            <div className="container-wide">
              <Reveal>
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
                  Related features
                </p>
                <div className="flex flex-wrap gap-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/features/${r.slug}`} className="pill hover:border-[var(--primary)]">
                      {r.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <FinalCta />
      </SiteShell>
    </>
  );
};

export default FeaturePageLayout;
