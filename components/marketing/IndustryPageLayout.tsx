import React from "react";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import SiteShell from "./SiteShell";
import FinalCta from "./FinalCta";
import FaqAccordion from "./FaqAccordion";
import FeatureVisual from "./FeatureVisual";
import HeroPhone from "./HeroPhone";
import { BusinessSwitcher } from "./AgenciesSection";
import { Eyebrow, SectionHeading } from "./Primitives";
import { Industry } from "@/lib/data/industries";
import { featureBySlug } from "@/lib/data/features";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { breadcrumbSchema, faqSchema, softwareApplicationRef } from "@/lib/seo";

const IndustryVisual = ({ industry }: { industry: Industry }) => {
  if (industry.visual === "phone") return <HeroPhone />;
  if (industry.visual === "switcher")
    return (
      <div
        className="rounded-[28px] p-5 sm:p-8"
        style={{
          background: "var(--background-secondary)",
          border: "1px solid var(--border-light)"
        }}
      >
        <BusinessSwitcher />
      </div>
    );
  return <FeatureVisual type={industry.visual} />;
};

const IndustryPageLayout = ({ industry }: { industry: Industry }) => {
  const path = `/industries/${industry.slug}`;
  const features = industry.relatedFeatures
    .map((s) => featureBySlug(s))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
  const pairs = industry.challenges.length === industry.solutions.length;

  return (
    <>
      <Seo
        title={industry.seoTitle}
        description={industry.seoDescription}
        path={path}
        jsonLd={[
          {
            "@type": "WebPage",
            "@id": `https://www.whatching.com${path}#webpage`,
            name: industry.seoTitle,
            description: industry.seoDescription,
            about: softwareApplicationRef
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path }
          ]),
          faqSchema(industry.faq)
        ]}
      />
      <SiteShell>
        <section className="pt-28 pb-16 max-sm:pt-24 max-sm:pb-12">
          <div className="container-wide grid lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] gap-10 lg:gap-14 items-center">
            <div>
              <nav
                className="text-sm mb-5"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Breadcrumb"
              >
                <Link href="/industries" className="hover:underline">
                  Industries
                </Link>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span>{industry.name}</span>
              </nav>
              <Eyebrow>{industry.eyebrow}</Eyebrow>
              <h1 className="heading-1 !text-[clamp(2.1rem,4.2vw,3.25rem)] mt-3 mb-5">
                {industry.headline}
              </h1>
              <p
                className="body-large mb-8 max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {industry.subheadline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={PRODUCT_APP_URL} className="btn-primary">
                  Start your free 7‑day trial
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
            </div>
            <div className="min-w-0">
              <IndustryVisual industry={industry} />
            </div>
          </div>
        </section>

        {/* The customer's path, as numbered steps */}
        <section className="pb-20 max-sm:pb-14">
          <div className="container-wide">
            <h2 className="heading-2 !text-[clamp(1.6rem,3vw,2.1rem)] mb-3">
              From first message to repeat customer
            </h2>
            <p
              className="max-w-2xl mb-8 text-[17px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {industry.summary}
            </p>
            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
              {industry.journey.map((step, i) => (
                <li
                  key={step}
                  className="flex lg:flex-col items-center lg:items-start gap-3 rounded-2xl px-4 py-3.5 lg:py-4"
                  style={{
                    background:
                      i === industry.journey.length - 1
                        ? "var(--accent-wash)"
                        : "var(--surface)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0"
                    style={{
                      background: "var(--graphite, #0b1210)",
                      color: "#fff"
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-[14.5px] font-semibold leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Problems and answers, side by side */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide">
            <SectionHeading
              title={`What gets in the way, and how Whatching helps`}
            />
            {pairs ? (
              <ul className="mt-10 space-y-3">
                {industry.challenges.map((c, i) => (
                  <li
                    key={c.title}
                    className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
                    style={{
                      background: "var(--border-light)",
                      border: "1px solid var(--border-light)"
                    }}
                  >
                    <div
                      className="p-6"
                      style={{ background: "var(--surface)" }}
                    >
                      <p
                        className="text-sm font-semibold mb-1.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        The problem
                      </p>
                      <p
                        className="font-semibold text-[16px]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {c.title}
                      </p>
                      <p
                        className="text-[15px] mt-1 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {c.description}
                      </p>
                    </div>
                    <div
                      className="p-6"
                      style={{ background: "var(--surface-hover)" }}
                    >
                      <p
                        className="text-sm font-semibold mb-1.5"
                        style={{ color: "var(--primary-dark)" }}
                      >
                        How Whatching helps
                      </p>
                      <p
                        className="font-semibold text-[16px]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {industry.solutions[i].title}
                      </p>
                      <p
                        className="text-[15px] mt-1 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {industry.solutions[i].description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-10 grid md:grid-cols-2 gap-10">
                {[industry.challenges, industry.solutions].map((list, k) => (
                  <ul key={k} className="space-y-5">
                    {list.map((c) => (
                      <li key={c.title}>
                        <p
                          className="font-semibold text-[16px]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {c.title}
                        </p>
                        <p
                          className="text-[15px] mt-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {c.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Use cases */}
        <section className="section-padding-large">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Use cases"
              title={industry.useCasesTitle}
            />
            <ul className="grid md:grid-cols-3 gap-4 mt-10">
              {industry.useCases.map((u) => (
                <li
                  key={u.title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <h3
                    className="text-[16px] font-semibold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {u.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {u.description}
                  </p>
                </li>
              ))}
            </ul>

            {features.length > 0 && (
              <div className="mt-14">
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Features{" "}
                  {industry.name.toLowerCase() === "agencies"
                    ? "agencies"
                    : "these businesses"}{" "}
                  use most
                </h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {features.map((f) => (
                    <li key={f.slug}>
                      <Link
                        href={`/features/${f.slug}`}
                        className="product-card flex h-full items-start justify-between gap-3 !p-5"
                      >
                        <span>
                          <span
                            className="block font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {f.name}
                          </span>
                          <span
                            className="block text-sm mt-1 leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {f.headline}
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
                Common questions
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
              <FaqAccordion items={industry.faq} />
            </div>
          </div>
        </section>

        <FinalCta />
      </SiteShell>
    </>
  );
};

export default IndustryPageLayout;
