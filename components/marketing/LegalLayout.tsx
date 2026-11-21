import React from "react";
import Seo from "@/components/Seo/Seo";
import SiteShell from "./SiteShell";
import { breadcrumbSchema } from "@/lib/seo";

// One layout for the legal pages. The policies are kept as plain text, one
// paragraph per line; this turns them into headings, lists and paragraphs:
// - "1. Something" or an ALL-CAPS line starts a section (h2, in the contents);
// - a short line with no full stop before more text is a sub-heading (h3);
// - short lines after a line ending in ":" (or lines starting with "•", "-"
//   or "(1)") are a list;
// - email addresses and web addresses become links.

type Node =
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

// Words to keep capitalised when an ALL-CAPS heading is put in sentence case.
const KEEP = new Map(
  [
    "WhatsApp",
    "Whatching",
    "Meta",
    "Instagram",
    "Facebook",
    "India",
    "Indian",
    "Kolkata",
    "API",
    "APIs",
    "GDPR",
    "CCPA",
    "EU",
    "UK",
    "US",
    "USA",
    "AI",
    "OTP",
    "SMS",
    "IP",
    "DPDP",
    "Google",
    "Apple",
    "Razorpay",
    "Stripe",
    "WooCommerce",
    "WordPress"
  ].map((w) => [w.toLowerCase(), w])
);

const sentenceCase = (s: string) => {
  const isCaps = s === s.toUpperCase() && /[A-Z]{3}/.test(s);
  const words = (isCaps ? s.toLowerCase() : s).split(/(\s+)/);
  const fixed = words.map((w) => {
    const core = w.replace(/[^a-z]/gi, "").toLowerCase();
    const keep = KEEP.get(core);
    return keep ? w.replace(new RegExp(core, "i"), keep) : w;
  });
  const out = fixed.join("");
  // Capitalise the first letter after any section number.
  return out.replace(
    /^(\d+\.\s*)?([a-z])/,
    (_, n = "", c) => n + c.toUpperCase()
  );
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);

const isSection = (l: string) =>
  /^\d+\.\s+\S/.test(l) ||
  (l === l.toUpperCase() && /[A-Z]{4}/.test(l) && l.length < 90);

const isListMarker = (l: string) => /^(•|-|–|\(\d+\)|\d+\))\s*/.test(l);

export const parseLegal = (
  text: string
): { nodes: Node[]; updated?: string } => {
  const lines = text.split("\n").map((l) => l.trim());
  const nodes: Node[] = [];
  let updated: string | undefined;
  let listMode = false;

  lines.forEach((line, i) => {
    if (!line) {
      listMode = false;
      return;
    }
    const m = line.match(/^last updated:?\s*(.+)$/i);
    if (m) {
      updated = m[1];
      return;
    }
    const next = lines[i + 1] ?? "";
    if (isSection(line)) {
      const text = sentenceCase(line);
      nodes.push({ kind: "h2", text, id: slug(text) });
      listMode = false;
      return;
    }
    const short = line.length <= 70 && !/[.;,]$/.test(line);
    if (isListMarker(line) || (listMode && short && !line.endsWith(":"))) {
      const item = line.replace(/^(•|-|–)\s*/, "");
      const last = nodes[nodes.length - 1];
      if (last && last.kind === "ul") last.items.push(item);
      else nodes.push({ kind: "ul", items: [item] });
      return;
    }
    listMode = false;
    if (
      short &&
      !line.endsWith(":") &&
      next &&
      !isSection(next) &&
      line.split(" ").length <= 9
    ) {
      nodes.push({ kind: "h3", text: sentenceCase(line) });
      return;
    }
    nodes.push({ kind: "p", text: line });
    if (line.endsWith(":")) listMode = true;
  });
  return { nodes, updated };
};

const Linked = ({ text }: { text: string }) => {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/[^\s)]+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part))
          return (
            <a key={i} href={`mailto:${part}`} className="article-link">
              {part}
            </a>
          );
        if (/^https?:\/\//.test(part)) {
          const href = part.replace(/[.,]$/, "");
          return (
            <a key={i} href={href} className="article-link">
              {href.replace(/^https:\/\/(www\.)?/, "")}
            </a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};

const LegalLayout = ({
  title,
  description,
  path,
  text,
  updated
}: {
  title: string;
  description: string;
  path: string;
  /** The policy as plain text, one paragraph per line. */
  text: string;
  /** Shown when the text has no "Last updated" line of its own. */
  updated?: string;
}) => {
  const { nodes, updated: fromText } = parseLegal(text);
  const sections = nodes.filter(
    (n): n is Extract<Node, { kind: "h2" }> => n.kind === "h2"
  );
  const lastUpdated = fromText ?? updated;

  const contents = (
    <ol className="space-y-2 text-sm">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="block leading-snug hover:underline"
            style={{ color: "var(--text-secondary)" }}
          >
            {s.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <Seo
        title={`${title} | Whatching`}
        description={description}
        path={path}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path }
          ])
        ]}
      />
      <SiteShell>
        <section className="pt-32 pb-20 max-sm:pt-28">
          <div className="container-wide grid xl:grid-cols-[260px_minmax(0,720px)] gap-12 xl:gap-16 justify-center">
            <div className="xl:order-2 min-w-0">
              <h1 className="heading-2 mb-3">{title}</h1>
              {lastUpdated && (
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Last updated {lastUpdated}
                </p>
              )}

              {sections.length > 3 && (
                <details
                  className="xl:hidden mb-8 rounded-2xl px-5 py-4"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-light)"
                  }}
                >
                  <summary
                    className="cursor-pointer font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Contents
                  </summary>
                  <div className="mt-4">{contents}</div>
                </details>
              )}

              <div className="article !text-[1.02rem]">
                {nodes.map((n, i) => {
                  if (n.kind === "h2")
                    return (
                      <h2 key={i} id={n.id}>
                        {n.text}
                      </h2>
                    );
                  if (n.kind === "h3") return <h3 key={i}>{n.text}</h3>;
                  if (n.kind === "ul")
                    return (
                      <ul key={i}>
                        {n.items.map((item, j) => (
                          <li key={j}>
                            <Linked text={item} />
                          </li>
                        ))}
                      </ul>
                    );
                  return (
                    <p key={i}>
                      <Linked text={n.text} />
                    </p>
                  );
                })}
              </div>
            </div>

            {sections.length > 3 && (
              <nav aria-label="Contents" className="hidden xl:block xl:order-1">
                <div className="sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2">
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Contents
                  </p>
                  {contents}
                </div>
              </nav>
            )}
          </div>
        </section>
      </SiteShell>
    </>
  );
};

export default LegalLayout;
