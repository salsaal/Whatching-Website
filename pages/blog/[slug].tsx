import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import FinalCta from "@/components/marketing/FinalCta";
import ArticleBody, {
  Inline,
  slugify
} from "@/components/marketing/ArticleBody";
import {
  BlogPost,
  blogPostBySlug,
  blogPosts,
  readTimeFor
} from "@/lib/data/blog";
import { featureBySlug } from "@/lib/data/features";
import { authorById } from "@/lib/data/authors";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE,
  faqSchema,
  organizationRef
} from "@/lib/seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

interface Props {
  post: BlogPost;
  related: Pick<BlogPost, "slug" | "title" | "excerpt" | "category">[];
  features: { slug: string; name: string }[];
}

export default function BlogPostPage({ post, related, features }: Props) {
  const path = `/blog/${post.slug}`;
  const author = authorById(post.authorId);
  const modified = post.updated ?? post.date;
  const headings = post.blocks
    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
    .map((b) => b.text);

  return (
    <>
      <Seo
        title={`${post.seoTitle ?? post.title} | Whatching`}
        description={post.seoDescription}
        path={path}
        type="article"
        publishedTime={post.date}
        modifiedTime={modified}
        jsonLd={[
          {
            "@type": "BlogPosting",
            "@id": `${absoluteUrl(path)}#article`,
            headline: post.title,
            description: post.seoDescription,
            datePublished: post.date,
            dateModified: modified,
            articleSection: post.category,
            ...(post.keyword ? { keywords: post.keyword } : {}),
            inLanguage: "en-IN",
            image: DEFAULT_OG_IMAGE.url,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: "Co-Founder",
              worksFor: organizationRef,
              url: author.linkedin,
              sameAs: [author.linkedin]
            },
            publisher: organizationRef,
            mainEntityOfPage: absoluteUrl(path),
            ...(post.sources?.length
              ? { citation: post.sources.map((s) => s.url) }
              : {})
          },
          ...(post.faq?.length ? [faqSchema(post.faq)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path }
          ])
        ]}
      />
      <SiteShell>
        <article className="pt-28 pb-16 max-sm:pt-24">
          <div className="container-wide grid xl:grid-cols-[minmax(0,1fr)_240px] gap-12 xl:gap-16 justify-center">
            <div className="min-w-0 w-full max-w-[720px] mx-auto xl:mx-0 xl:ml-auto">
              <nav
                aria-label="Breadcrumb"
                className="text-sm mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <span aria-hidden className="mx-2">
                  /
                </span>
                <span>{post.category}</span>
              </nav>
              <h1 className="heading-1 !text-[clamp(2rem,4vw,2.9rem)] !leading-[1.08] mb-5">
                {post.title}
              </h1>
              <div
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  By{" "}
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noreferrer author"
                    className="font-semibold underline underline-offset-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {author.name}
                  </a>
                  , {author.role}
                </p>
                <p className="mt-1">
                  {post.updated && post.updated !== post.date ? (
                    <>
                      Updated{" "}
                      <time dateTime={post.updated}>
                        {formatDate(post.updated)}
                      </time>
                    </>
                  ) : (
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  )}
                  , {readTimeFor(post)}
                </p>
              </div>

              {post.summary && (
                <div className="article-summary mt-8">
                  <p className="article-summary-label">Short answer</p>
                  <p>
                    <Inline text={post.summary} />
                  </p>
                </div>
              )}

              <div className="mt-8">
                <ArticleBody blocks={post.blocks} />
              </div>

              {post.faq && post.faq.length > 0 && (
                <section className="article mt-4" aria-labelledby="faq">
                  <h2 id="faq">Frequently asked questions</h2>
                  {post.faq.map((f) => (
                    <div key={f.question}>
                      <h3>{f.question}</h3>
                      <p>
                        <Inline text={f.answer} />
                      </p>
                    </div>
                  ))}
                </section>
              )}

              {post.sources && post.sources.length > 0 && (
                <section
                  className="mt-10 pt-6 border-t text-sm"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  <h2
                    className="font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sources
                  </h2>
                  <ul className="space-y-1.5">
                    {post.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="article-link"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Last checked {formatDate(modified)}. Meta changes its rules
                    and rates from time to time; its pages are the final word.
                  </p>
                </section>
              )}

              <aside
                className="mt-10 rounded-2xl p-5 text-sm"
                style={{
                  background: "var(--background-secondary)",
                  border: "1px solid var(--border-light)"
                }}
                aria-label="About the author"
              >
                <p
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {author.name}
                </p>
                <p style={{ color: "var(--text-secondary)" }}>{author.role}</p>
                <p
                  className="mt-2 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {author.bio}
                </p>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-semibold underline underline-offset-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Connect on LinkedIn
                </a>
              </aside>

              {features.length > 0 && (
                <div className="mt-10">
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    In Whatching
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {features.map((f) => (
                      <li key={f.slug}>
                        <Link
                          href={`/features/${f.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium"
                          style={{
                            border: "1px solid var(--border-medium)",
                            color: "var(--text-primary)"
                          }}
                        >
                          {f.name}
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {headings.length > 2 && (
              <nav aria-label="On this page" className="hidden xl:block">
                <div className="sticky top-28">
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    On this page
                  </p>
                  <ol
                    className="space-y-2 text-sm border-l"
                    style={{ borderColor: "var(--border-light)" }}
                  >
                    {headings.map((h) => (
                      <li key={h}>
                        <a
                          href={`#${slugify(h)}`}
                          className="block pl-3 -ml-px border-l border-transparent hover:border-[var(--primary)] leading-snug"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {h.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </nav>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="pb-20" aria-labelledby="related">
            <div className="container-wide">
              <h2
                id="related"
                className="text-xl font-semibold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Keep reading
              </h2>
              <ul className="grid md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="product-card block h-full !p-6"
                    >
                      <span
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--primary-dark)" }}
                      >
                        {r.category}
                      </span>
                      <span
                        className="block font-semibold leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {r.title}
                      </span>
                      <span
                        className="block text-sm mt-2 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {r.excerpt}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        <FinalCta />
      </SiteShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = blogPostBySlug(params?.slug as string);
  if (!post) return { notFound: true };
  const pick = (p: BlogPost) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category
  });
  const chosen = (post.related ?? [])
    .map((s) => blogPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p));
  // Fill up to three with the newest posts in the same category, then any.
  const fill = blogPosts.filter(
    (p) => p.slug !== post.slug && !chosen.some((c) => c.slug === p.slug)
  );
  const related = [
    ...chosen,
    ...fill.filter((p) => p.category === post.category),
    ...fill.filter((p) => p.category !== post.category)
  ]
    .slice(0, 3)
    .map(pick);
  const features = (post.relatedFeatures ?? [])
    .map((s) => featureBySlug(s))
    .filter(Boolean)
    .map((f) => ({ slug: f!.slug, name: f!.name }));
  return { props: { post, related, features } };
};
