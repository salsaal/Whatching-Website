import { allPosts } from "./posts";

/*
 * Blog and guide content model.
 *
 * Each post lives in lib/data/posts/<slug>.ts and is listed in
 * lib/data/posts/index.ts. Text in "p", list items, table cells and callouts
 * may use two inline marks:
 *   [label](/path) or [label](https://…)  a link (internal paths stay on site)
 *   **words**                               bold
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string }
  /** Product pieces placed inside an article. */
  | { type: "embed"; name: "meta-calculator" | "trial" | "demo" }
  /** A drawn diagram (components/marketing/ArticleFigure.tsx) with a caption. */
  | { type: "figure"; name: FigureName; caption: string };

export type FigureName =
  | "limits-ladder"
  | "ad-window"
  | "coexistence"
  | "service-window"
  | "comment-to-dm";

/**
 * The drawn cover on blog cards: one fact from the article in large type,
 * with a short line under it. `rows` shows a small price list instead, and
 * `versus` names the other product in a comparison.
 */
export interface PostCover {
  big?: string;
  small?: string;
  rows?: [string, string][];
  versus?: string;
}

export const blogCategories = [
  "WhatsApp API",
  "Pricing",
  "Setup",
  "WhatsApp Marketing",
  "Instagram Automation",
  "AI Automation",
  "Comparisons"
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  /** The page heading (H1). */
  title: string;
  /** The <title> before " | Whatching", 55 characters or fewer. Defaults to title. */
  seoTitle?: string;
  /** One or two sentences for cards and listings. */
  excerpt: string;
  /** Meta description, 155 characters or fewer. */
  seoDescription: string;
  category: BlogCategory;
  /** First published, YYYY-MM-DD. */
  date: string;
  /** Last reviewed, YYYY-MM-DD. */
  updated?: string;
  /** Key in lib/data/authors.ts; defaults to the co-founder. */
  authorId?: string;
  /** The main search phrase this page targets. Not shown on the page. */
  keyword?: string;
  /** A direct 40–70 word answer shown at the top of the article. */
  summary?: string;
  blocks: Block[];
  faq?: { question: string; answer: string }[];
  /** Primary sources the article quotes, shown at the end. */
  sources?: { label: string; url: string }[];
  /** Other post slugs to suggest at the end. */
  related?: string[];
  /** Feature slugs (lib/data/features.ts) this article is about. */
  relatedFeatures?: string[];
  /** What the drawn cover on blog cards shows. */
  cover?: PostCover;
}

export const blogPosts: BlogPost[] = [...allPosts].sort((a, b) =>
  (b.updated ?? b.date).localeCompare(a.updated ?? a.date)
);

export const blogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

// Plain text of a post, without the inline link and bold marks.
const plain = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

export const postText = (post: BlogPost) =>
  [
    post.summary ?? "",
    ...post.blocks.flatMap((b) => {
      switch (b.type) {
        case "p":
        case "h2":
        case "h3":
          return [b.text];
        case "ul":
        case "ol":
          return b.items;
        case "table":
          return [...b.head, ...b.rows.flat()];
        case "callout":
          return [b.title ?? "", b.text];
        default:
          return [];
      }
    }),
    ...(post.faq ?? []).flatMap((f) => [f.question, f.answer])
  ]
    .map(plain)
    .join(" ");

// Reading time from the actual word count, at about 200 words a minute.
export const readTimeFor = (post: BlogPost) => {
  const words = postText(post).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};
