import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteShell from "@/components/marketing/SiteShell";
import { Reveal } from "@/components/marketing/Primitives";
import FinalCta from "@/components/marketing/FinalCta";
import { BlogPost, blogPostBySlug, blogPosts } from "@/lib/data/blog";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Whatching Blog`}</title>
        <meta name="description" content={post.seoDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.seoDescription} />
        <link rel="canonical" href={`https://www.whatching.com/blog/${post.slug}`} />
      </Head>
      <SiteShell>
        <article className="hero-section !pb-20">
          <div className="container-wide relative max-w-2xl">
            <Reveal>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
              </Link>
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--primary-dark)" }}>
                {post.category}
              </p>
              <h1 className="heading-1 !text-[clamp(1.75rem,3.5vw,2.5rem)] mb-4">{post.title}</h1>
              <div className="flex items-center gap-3 text-sm mb-10" style={{ color: "var(--text-muted)" }}>
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="space-y-5">
                {post.content.map((para, i) => (
                  <p key={i} className="text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {para}
                  </p>
                ))}
              </div>
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
