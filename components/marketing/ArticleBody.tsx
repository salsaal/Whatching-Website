import React from "react";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Block } from "@/lib/data/blog";
import { Inline, slugify } from "./Inline";

export { Inline, slugify };
import MetaCostCalculator from "./MetaCostCalculator";
import ArticleFigure from "./ArticleFigure";
import { PRODUCT_APP_URL } from "@/lib/constants";

// Renders an article's blocks (see lib/data/blog.ts) as readable HTML:
// headings with anchors, lists, tables, callouts and a few product embeds.

const TrialBox = () => (
  <aside
    className="not-prose my-10 rounded-2xl p-6 sm:p-7"
    style={{
      background: "var(--background-secondary)",
      border: "1px solid var(--border-light)"
    }}
  >
    <p
      className="text-lg font-semibold"
      style={{ color: "var(--text-primary)" }}
    >
      Try it on your own number
    </p>
    <p
      className="mt-1.5 text-[15px] leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
    >
      Start a free 7-day trial of the Pro plan. No card needed. Or fill in the
      form on our demo page and we&apos;ll help you set up on a free call.
    </p>
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link href={PRODUCT_APP_URL} className="btn-primary">
        Start free trial
      </Link>
      <Link
        href="/demo"
        className="text-sm font-semibold"
        style={{ color: "var(--primary-dark)" }}
      >
        Book a free onboarding call <span aria-hidden>→</span>
      </Link>
    </div>
  </aside>
);

const DemoBox = () => (
  <aside
    className="not-prose my-10 rounded-2xl p-5 flex items-start gap-4"
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border-light)"
    }}
  >
    <PlayCircle
      className="w-7 h-7 shrink-0 mt-0.5"
      style={{ color: "var(--primary)" }}
      aria-hidden
    />
    <span>
      <span
        className="block font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        See it in the 3-minute product tour
      </span>
      <span
        className="block text-[15px] mt-1"
        style={{ color: "var(--text-secondary)" }}
      >
        Watch broadcasts, the chatbot builder and the AI agent working in
        Whatching.{" "}
        <Link href="/demo" className="article-link">
          Watch the tour
        </Link>
      </span>
    </span>
  </aside>
);

const ArticleBody = ({ blocks }: { blocks: Block[] }) => (
  <div className="article">
    {blocks.map((b, i) => {
      switch (b.type) {
        case "p":
          return (
            <p key={i}>
              <Inline text={b.text} />
            </p>
          );
        case "h2":
          return (
            <h2 key={i} id={slugify(b.text)}>
              <Inline text={b.text} />
            </h2>
          );
        case "h3":
          return (
            <h3 key={i}>
              <Inline text={b.text} />
            </h3>
          );
        case "ul":
        case "ol": {
          const List = b.type;
          return (
            <List key={i}>
              {b.items.map((item, j) => (
                <li key={j}>
                  <Inline text={item} />
                </li>
              ))}
            </List>
          );
        }
        case "table":
          return (
            <div key={i}>
              {b.head.length >= 3 && (
                <p
                  className="sm:hidden text-[13px] mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Swipe the table sideways to see every column.
                </p>
              )}
              <div
                className={`article-table ${b.head.length >= 3 ? "article-table-wide" : ""}`}
              >
                <table>
                  {b.caption && <caption>{b.caption}</caption>}
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col">
                          <Inline text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row">
                              <Inline text={cell} />
                            </th>
                          ) : (
                            <td key={c}>
                              <Inline text={cell} />
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        case "callout":
          return (
            <aside key={i} className="article-callout">
              {b.title && <p className="article-callout-title">{b.title}</p>}
              <p>
                <Inline text={b.text} />
              </p>
            </aside>
          );
        case "figure":
          return (
            <div key={i} className="my-10">
              <ArticleFigure name={b.name} caption={b.caption} />
            </div>
          );
        case "embed":
          if (b.name === "meta-calculator")
            return (
              <div key={i} className="not-prose my-10">
                <MetaCostCalculator />
              </div>
            );
          if (b.name === "trial") return <TrialBox key={i} />;
          return <DemoBox key={i} />;
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleBody;
