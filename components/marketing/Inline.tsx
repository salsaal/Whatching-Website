import React from "react";
import Link from "next/link";

// Shared text helpers for articles and FAQs. Kept apart from ArticleBody so
// pages that only need links in text don't load the article embeds.

/** Turns "[label](/path)" links and "**bold**" in a string into elements. */
export const Inline = ({ text }: { text: string }) => {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      const external = /^https?:\/\//.test(href);
      parts.push(
        external ? (
          <a
            key={i++}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="article-link"
          >
            {m[1]}
          </a>
        ) : (
          <Link key={i++} href={href} className="article-link">
            {m[1]}
          </Link>
        )
      );
    } else if (m[3]) {
      parts.push(
        <strong key={i++} style={{ color: "var(--text-primary)" }}>
          {m[3]}
        </strong>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
