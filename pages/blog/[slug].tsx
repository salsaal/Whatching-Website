import { GetStaticPaths, GetStaticProps } from "next";
import Seo from "@/components/Seo/Seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal } from "@/components/marketing/Primitives";
import FinalCta from "@/components/marketing/FinalCta";
import {
  BlogPost,
  blogPostBySlug,
  blogPosts,
  readTimeFor
} from "@/lib/data/blog";
import {
  absoluteUrl,
  breadcrumbSchema,
  DEFAULT_OG_IMAGE,
  organizationRef
} from "@/lib/seo";
import { authorById } from "@/lib/data/authors";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}`;
  const author = authorById(post.authorId);
  return (
    <>
      <Seo
        title={`${post.title} | Whatching`}
        description={post.seoDescription}
        path={path}
        type="article"
        publishedTime={post.date}
        jsonLd={[
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.seoDescription,
            datePublished: post.date,
            articleSection: post.category,
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
            mainEntityOfPage: absoluteUrl(path)
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path }
          ])
        ]}
      />
      <SiteShell>
        <article className="hero-section !pb-20">
          <div className="container-wide relative max-w-2xl">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
              </Link>
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-3"
                style={{ color: "var(--primary-dark)" }}
              >
                {post.category}
              </p>
              <h1 className="heading-1 !text-[clamp(1.75rem,3.5vw,2.5rem)] mb-4">
                {post.title}
              </h1>
              <div
                className="text-sm mb-10"
                style={{ color: "var(--text-muted)" }}
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
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })}
                  </time>
                  , {readTimeFor(post)}
                </p>
              </div>
              <div className="space-y-5">
                {post.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed"
                    style={{ color: "var(--text-body)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <aside
                className="mt-12 pt-6 border-t text-sm"
                style={{ borderColor: "var(--border-light)" }}
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
                  {author.name.split(" ").slice(-2).join(" ")} on LinkedIn
                </a>
              </aside>
            </Reveal>
          </div>
        </article>
        <FinalCta />
      </SiteShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPostBySlug(params?.slug as string);
  if (!post) return { notFound: true };
  return { props: { post } };
};
