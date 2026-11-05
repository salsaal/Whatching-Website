import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Instagram, MessageCircle } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { blogCategories, blogPosts } from "@/lib/data/blog";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "WhatsApp Marketing": MessageCircle,
  "Instagram Automation": Instagram,
  "WhatsApp API": BookOpen,
  "AI Automation": Bot
};

export default function ResourcesPage() {
  return (
    <>
      <Seo
        title="WhatsApp & Instagram Marketing Guides | Whatching"
        description="Practical guides on WhatsApp marketing, the WhatsApp Business API, Instagram automation and AI chatbots for Indian businesses."
        path="/resources"
      />
      <SiteShell>
        <section className="hero-section !pb-14">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading as="h1"
                align="center"
                eyebrow="Resources"
                title="Guides on WhatsApp and Instagram automation."
                description="Practical playbooks for marketing, automation, AI and the WhatsApp Business API."
              />
            </Reveal>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogCategories.map((cat, i) => {
              const Icon = categoryIcons[cat] ?? BookOpen;
              const count = blogPosts.filter((p) => p.category === cat).length;
              return (
                <Reveal key={cat} delay={i * 0.06}>
                  <Link href={`/blog?category=${encodeURIComponent(cat)}`} className="product-card block h-full">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--accent-wash)", color: "var(--primary)" }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[15px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {cat}
                    </h3>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {count} guide{count !== 1 ? "s" : ""}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section-padding-large" style={{ background: "var(--background-secondary)" }}>
          <div className="container-wide">
            <Reveal>
              <SectionHeading title="Latest from the blog" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {blogPosts.slice(0, 4).map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="product-card block h-full">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--primary-dark)" }}>
                      {post.category}
                    </p>
                    <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--primary-dark)" }}>
                      Read guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15} className="text-center mt-10">
              <Link href="/blog" className="text-sm font-semibold" style={{ color: "var(--primary-dark)" }}>
                View all guides →
              </Link>
            </Reveal>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
