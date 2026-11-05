import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal, SectionHeading } from "@/components/marketing/Primitives";
import { blogCategories, blogPosts } from "@/lib/data/blog";

export default function BlogIndex() {
  const router = useRouter();
  const activeCategory = typeof router.query.category === "string" ? router.query.category : null;
  const posts = activeCategory ? blogPosts.filter((p) => p.category === activeCategory) : blogPosts;

  return (
    <>
      <Seo
        title="Blog: WhatsApp & Instagram Marketing Guides | Whatching"
        description="WhatsApp marketing, WhatsApp Business API, Instagram automation and AI chatbot guides from the Whatching team."
        path="/blog"
      />
      <SiteShell>
        <section className="hero-section !pb-10">
          <div className="container-wide relative">
            <Reveal>
              <SectionHeading as="h1" align="center" eyebrow="Blog" title="Playbooks for WhatsApp and Instagram automation." />
            </Reveal>
          </div>
        </section>

        <section className="pb-6">
          <div className="container-wide flex flex-wrap justify-center gap-2">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={!activeCategory ? { background: "var(--primary)", color: "#fff" } : { background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border-light)" }}
            >
              All
            </Link>
            {blogCategories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={activeCategory === cat ? { background: "var(--primary)", color: "#fff" } : { background: "var(--surface)", color: "var(--text-secondary)", border: "1px solid var(--border-light)" }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="product-card block h-full">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--primary-dark)" }}>
                    {post.category}
                  </p>
                  <h2 className="text-[17px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <ArrowRight className="w-3 h-3 ml-auto" style={{ color: "var(--primary-dark)" }} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </SiteShell>
    </>
  );
}
