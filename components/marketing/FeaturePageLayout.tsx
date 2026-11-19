import React from "react";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowUpRight, Check, PlayCircle } from "lucide-react";
import SiteShell from "./SiteShell";
import FaqAccordion from "./FaqAccordion";
import FinalCta from "./FinalCta";
import FeatureVisual from "./FeatureVisual";
import { Eyebrow, SectionHeading } from "./Primitives";
import { Feature, features } from "@/lib/data/features";
import { blogPosts } from "@/lib/data/blog";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { breadcrumbSchema, faqSchema, softwareApplicationRef } from "@/lib/seo";

// Free tools that go with a feature, shown beside its blog posts.
const TEMPLATES = {
  href: "/templates",
  title: "WhatsApp message templates",
  desc: "36 ready-to-use templates, with what Meta charges to send each one."
};
const LINK_TOOL = {
  href: "/tools/whatsapp-link-generator",
  title: "Free WhatsApp link generator",
  desc: "A wa.me link with a message typed in, for your bio, website or ads."
};
const GLOSSARY = {
  href: "/glossary",
  title: "WhatsApp Business glossary",
  desc: "Templates, the 24-hour window and other terms, explained simply."
};
const freeResources: Record<
  string,
  { href: string; title: string; desc: string }[]
> = {
  "whatsapp-broadcast": [TEMPLATES],
  "whatsapp-marketing": [TEMPLATES, LINK_TOOL],
  "shared-inbox": [LINK_TOOL],
  "whatsapp-flows": [GLOSSARY],
  "ai-chatbot": [GLOSSARY],
  analytics: [LINK_TOOL]
};

const FeaturePageLayout = ({ feature }: { feature: Feature }) => {
  const tone = feature.category === "Instagram" ? "instagram" : "primary";
  const related = features.filter((f) => feature.related.includes(f.slug));
  const guides = blogPosts
    .filter((p) => p.relatedFeatures?.includes(feature.slug))
    .slice(0, 3);
  const resources = freeResources[feature.slug] ?? [];
  const path = `/features/${feature.slug}`;
  // The wide pictures read better under the text than beside it.
  const wideVisual = feature.visual === "analytics";

  return (
    <>
      <Seo
        title={feature.seoTitle}
        description={feature.seoDescription}
        path={path}
        jsonLd={[
          {
            "@type": "WebPage",
            "@id": `https://www.whatching.com${path}#webpage`,
            name: feature.seoTitle,
            description: feature.seoDescription,
            about: softwareApplicationRef
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: feature.name, path }
          ]),
          faqSchema(feature.faq)
        ]}
      />
      <SiteShell>
        <section className="pt-28 pb-16 max-sm:pt-24 max-sm:pb-12">
          <div
            className={`container-wide grid gap-10 lg:gap-14 items-center ${wideVisual ? "" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]"}`}
          >
            <div className={wideVisual ? "max-w-3xl" : ""}>
              <nav
                className="text-sm mb-5"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Breadcrumb"
              >
                <Link href="/features" className="hover:underline">
                  Features
                </Link>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span>{feature.name}</span>
              </nav>
              <Eyebrow tone={tone}>{feature.eyebrow}</Eyebrow>
              <h1 className="heading-1 !text-[clamp(2.1rem,4.2vw,3.25rem)] mt-3 mb-5">
                {feature.headline}
              </h1>
              <p
                className="body-large mb-8 max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {feature.subheadline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={PRODUCT_APP_URL} className="btn-primary">
                  {feature.ctaLabel}
                </Link>
                <Link href="/demo" className="btn-secondary">
                  <PlayCircle
                    className="w-4 h-4"
                    style={{ color: "var(--primary)" }}
                    aria-hidden
                  />
                  Watch the 3-minute tour
                </Link>
              </div>
              <p
                className="text-sm mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="whitespace-nowrap">7-day</span> free trial of
                Pro. No card needed.
              </p>
            </div>
            <div className="min-w-0">
              <FeatureVisual type={feature.visual} />
            </div>
          </div>
        </section>

        {/* Problem and answer */}
        <section className="pb-20 max-sm:pb-14">
          <div className="container-wide">
            <div
              className="grid md:grid-cols-2 gap-px rounded-3xl overflow-hidden"
              style={{
                background: "var(--border-light)",
                border: "1px solid var(--border-light)"
              }}
            >
              <div
                className="p-7 sm:p-9"
                style={{ background: "var(--surface)" }}
              >
                <h2
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  The problem
                </h2>
                <p
                  className="text-[17px] leading-relaxed"
                  style={{ color: "var(--text-body)" }}
                >
                  {feature.problem}
                </p>
              </div>
              <div
                className="p-7 sm:p-9"
                style={{ background: "var(--background-secondary)" }}
              >
                <h2
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--primary-dark)" }}
                >
                  How Whatching helps
                </h2>
                <p
                  className="text-[17px] leading-relaxed"
                  style={{ color: "var(--text-body)" }}
                >
                  {feature.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works: a real sequence, so the steps are numbered */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide">
            <SectionHeading eyebrow="How it works" title={feature.howTitle} />
            <ol className="grid md:grid-cols-3 gap-4 mt-10">
              {feature.howItWorks.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                    style={{
                      background: "var(--graphite, #0b1210)",
                      color: "#fff"
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="text-[16px] font-semibold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What you get, and ways to use it */}
        <section className="section-padding-large">
          <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)] mb-6">
                What you get with {feature.shortName}
              </h2>
              <ul className="space-y-5">
                {feature.benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <Check
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "var(--primary)" }}
                      strokeWidth={2.6}
                      aria-hidden
                    />
                    <span>
                      <span
                        className="block font-semibold text-[16px]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {b.title}
                      </span>
                      <span
                        className="block text-[15px] mt-1 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {b.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)] mb-6">
                Ways to use {feature.shortName}
              </h2>
              <ul
                className="divide-y rounded-2xl"
                style={{
                  border: "1px solid var(--border-light)",
                  borderColor: "var(--border-light)"
                }}
              >
                {feature.useCases.map((u) => (
                  <li
                    key={u.title}
                    className="p-5"
                    style={{ borderColor: "var(--border-light)" }}
                  >
                    <span
                      className="block font-semibold text-[16px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {u.title}
                    </span>
                    <span
                      className="block text-[15px] mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {u.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)] mb-3">
                Questions about {feature.shortName}
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                More answers on our{" "}
                <Link href="/faq" className="article-link">
                  FAQ page
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={feature.faq} />
            </div>
          </div>
        </section>

        {/* Related features and guides */}
        {(related.length > 0 || guides.length > 0 || resources.length > 0) && (
          <section className="section-padding">
            <div className="container-wide grid lg:grid-cols-2 gap-10">
              {related.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Related features
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/features/${r.slug}`}
                          className="product-card flex h-full items-start justify-between gap-3 !p-5"
                        >
                          <span>
                            <span
                              className="block font-semibold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {r.name}
                            </span>
                            <span
                              className="block text-sm mt-1 leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {r.headline}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 shrink-0 mt-1"
                            style={{ color: "var(--text-muted)" }}
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(guides.length > 0 || resources.length > 0) && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {guides.length > 0 ? "From the blog" : "Free resources"}
                  </h2>
                  <ul className="space-y-3">
                    {resources.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="product-card block !p-5">
                          <span
                            className="block text-sm font-semibold mb-1"
                            style={{ color: "var(--primary-dark)" }}
                          >
                            Free resource
                          </span>
                          <span
                            className="block font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {r.title}
                          </span>
                          <span
                            className="block text-sm mt-1 leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {r.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {guides.map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/blog/${g.slug}`}
                          className="product-card block !p-5"
                        >
                          <span
                            className="block font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {g.title}
                          </span>
                          <span
                            className="block text-sm mt-1 leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {g.excerpt}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <FinalCta />
      </SiteShell>
    </>
  );
};

export default FeaturePageLayout;
