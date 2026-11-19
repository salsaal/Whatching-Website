import React from "react";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle } from "lucide-react";
import SiteShell from "./SiteShell";
import FinalCta from "./FinalCta";
import FaqAccordion from "./FaqAccordion";
import HeroPhone from "./HeroPhone";
import IndustryPhone from "./IndustryPhone";
import TemplateCard from "./TemplateCard";
import { BusinessSwitcher } from "./AgenciesSection";
import { NavIcon } from "./navIcons";
import { Eyebrow } from "./Primitives";
import { Industry } from "@/lib/data/industries";
import { featureBySlug } from "@/lib/data/features";
import { blogPostBySlug } from "@/lib/data/blog";
import { templates } from "@/lib/data/templates";
import { metaConversationPricing } from "@/lib/data/pricing";
import { PRODUCT_APP_URL } from "@/lib/data/nav";
import { breadcrumbSchema, faqSchema, softwareApplicationRef } from "@/lib/seo";

const rateFor = (category: string) =>
  metaConversationPricing.find((r) => r.category === category)?.price;

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

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
  return <IndustryPhone slug={industry.slug} />;
};

const H2 = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="heading-2 !text-[clamp(1.7rem,3.2vw,2.3rem)] mb-3">
    {children}
  </h2>
);

const IndustryPageLayout = ({ industry }: { industry: Industry }) => {
  const path = `/industries/${industry.slug}`;
  const features = industry.relatedFeatures
    .map((s) => featureBySlug(s))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));
  const posts = industry.relatedPosts
    .map((s) => blogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const examples = industry.templateSlugs
    .map((s) => templates.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

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
            about: softwareApplicationRef,
            audience: {
              "@type": "BusinessAudience",
              name: capitalise(industry.audience)
            }
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
        {/* Hero */}
        <section className="pt-28 pb-14 max-sm:pt-24 max-sm:pb-10">
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
                  Start your free 7{"‑"}day trial
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
                No card needed. Free onboarding call when you fill in the form
                on our{" "}
                <Link
                  href="/demo#book"
                  className="underline underline-offset-2"
                >
                  demo page
                </Link>
                .
              </p>
            </div>
            <figure className="min-w-0">
              <IndustryVisual industry={industry} />
              {industry.visual !== "switcher" && (
                <figcaption
                  className="text-[13px] mt-3 text-center"
                  style={{ color: "var(--text-secondary)" }}
                >
                  An example conversation with a fictional business.
                </figcaption>
              )}
            </figure>
          </div>
        </section>

        {/* Short answer, then the steps */}
        <section className="pb-20 max-sm:pb-14">
          <div className="container-wide">
            <div
              className="rounded-3xl p-6 sm:p-8 grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-4 lg:gap-12"
              style={{
                background: "var(--background-secondary)",
                border: "1px solid var(--border-light)"
              }}
            >
              <H2>How {industry.audience} use WhatsApp</H2>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--text-body)" }}
              >
                {industry.intro}
              </p>
            </div>

            <h3
              className="text-[20px] font-semibold mt-14 mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {industry.stepsTitle}
            </h3>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl p-6"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <span className="flex items-center gap-3 mb-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{
                        background: "var(--graphite, #0b1210)",
                        color: "#fff"
                      }}
                    >
                      {i + 1}
                    </span>
                    {i < industry.steps.length - 1 && (
                      <span
                        aria-hidden
                        className="hidden lg:block h-px flex-1"
                        style={{ background: "var(--border-medium)" }}
                      />
                    )}
                  </span>
                  <span
                    className="block text-[16px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="block text-[15px] mt-1.5 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Problems and answers */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide">
            <H2>What gets in the way, and how Whatching helps</H2>
            <ul className="mt-8 space-y-3">
              {industry.problems.map(({ problem, answer }) => (
                <li
                  key={problem.title}
                  className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--border-light)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <div className="p-6" style={{ background: "var(--surface)" }}>
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
                      {problem.title}
                    </p>
                    <p
                      className="text-[15px] mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {problem.description}
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
                      {answer.title}
                    </p>
                    <p
                      className="text-[15px] mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {answer.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Example messages */}
        {examples.length > 0 && (
          <section className="section-padding-large">
            <div className="container-wide">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div className="max-w-2xl">
                  <H2>{industry.useCasesTitle}</H2>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Example message templates you can copy, change and submit to
                    Meta for approval, with what Meta charges to send each one
                    in India.
                  </p>
                </div>
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--primary-dark)" }}
                >
                  See all 36 templates{" "}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {examples.map((t) => (
                  <TemplateCard key={t.slug} t={t} rate={rateFor(t.category)} />
                ))}
              </div>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-14">
                {industry.useCases.map((u) => (
                  <li
                    key={u.title}
                    className="border-t pt-4"
                    style={{ borderColor: "var(--border-medium)" }}
                  >
                    <span
                      className="block text-[16px] font-semibold"
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
          </section>
        )}

        {/* Features and reading */}
        <section
          className="section-padding-large"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="container-wide grid lg:grid-cols-2 gap-12">
            <div>
              <H2>Features {industry.audience} use most</H2>
              <ul className="mt-6 space-y-2">
                {features.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/features/${f.slug}`}
                      className="flex items-start gap-3 rounded-2xl p-4 hover:bg-[var(--surface)]"
                      style={{
                        border: "1px solid var(--border-light)",
                        background: "rgba(255,255,255,0.6)"
                      }}
                    >
                      <NavIcon href={`/features/${f.slug}`} />
                      <span className="min-w-0 flex-1">
                        <span
                          className="block font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {f.name}
                        </span>
                        <span
                          className="block text-[14.5px] mt-0.5 leading-snug"
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
            {posts.length > 0 && (
              <div>
                <H2>From the blog</H2>
                <ul className="mt-6 space-y-2">
                  {posts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="block rounded-2xl p-4 hover:bg-[var(--surface)]"
                        style={{
                          border: "1px solid var(--border-light)",
                          background: "rgba(255,255,255,0.6)"
                        }}
                      >
                        <span
                          className="block text-sm font-semibold mb-1"
                          style={{ color: "var(--primary-dark)" }}
                        >
                          {p.category}
                        </span>
                        <span
                          className="block font-semibold leading-snug"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {p.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Questions */}
        <section className="section-padding-large">
          <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <H2>Questions from {industry.audience}</H2>
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
