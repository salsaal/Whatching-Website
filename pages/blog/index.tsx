import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import { blogCategories, blogPosts, readTimeFor } from "@/lib/data/blog";
import { breadcrumbSchema } from "@/lib/seo";

// Only offer a filter once a category has at least two posts.
const categories = blogCategories.filter(
  (cat) => blogPosts.filter((p) => p.category === cat).length >= 2
);

const chip = (active: boolean) =>
  active
    ? {
        background: "var(--text-primary)",
        color: "#fff",
        border: "1px solid var(--text-primary)"
      }
    : {
        background: "var(--surface)",
        color: "var(--text-secondary)",
        border: "1px solid var(--border-medium)"
      };

export default function BlogIndex() {
  const router = useRouter();
  const requested =
    typeof router.query.category === "string" ? router.query.category : null;
  const active = categories.find((c) => c === requested) ?? null;
  const posts = active
    ? blogPosts.filter((p) => p.category === active)
    : blogPosts;

  return (
    <>
      <Seo
        title="WhatsApp Business API Guides and Blog | Whatching"
        description="Plain-language guides to the WhatsApp Business API in India: Meta's pricing, setup, messaging limits, the green tick, broadcasts, chatbots and Instagram."
        path="/blog"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-8 max-sm:pt-28">
          <div className="container-wide max-w-3xl text-center">
            <h1 className="heading-2 mb-4">
              Guides to WhatsApp and Instagram for business
            </h1>
            <p
              className="body-large"
              style={{ color: "var(--text-secondary)" }}
            >
              Meta&apos;s pricing, setup, messaging rules, broadcasts, chatbots
              and Instagram automation, explained in plain language for Indian
              businesses.
            </p>
          </div>
        </section>

        {categories.length > 1 && (
          <nav aria-label="Filter by topic" className="pb-8">
            <ul className="container-wide flex flex-wrap justify-center gap-2">
              <li>
                <Link
                  href="/blog"
                  scroll={false}
                  className="inline-flex items-center min-h-[40px] px-4 rounded-full text-sm font-medium"
                  style={chip(!active)}
                >
                  All
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(cat)}`}
                    scroll={false}
                    className="inline-flex items-center min-h-[40px] px-4 rounded-full text-sm font-medium"
                    style={chip(active === cat)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <section className="pb-20">
          <ul className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="product-card flex flex-col h-full !p-6"
                >
                  <span
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {post.category}
                  </span>
                  <h2
                    className="text-[17px] font-semibold leading-snug mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    className="mt-auto text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {readTimeFor(post)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <FinalCta />
      </SiteShell>
    </>
  );
}
