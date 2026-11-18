import React from "react";

// Sections no longer fade in as they scroll into view: content is visible as
// soon as the page loads (faster to show, and kinder to search engines and
// AI crawlers). Reveal stays as a plain wrapper so existing layouts keep
// their structure; `delay` is accepted and ignored.
export const Reveal = ({
  children,
  className,
  style
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) => (
  <div className={className} style={style}>
    {children}
  </div>
);

export const Eyebrow = ({
  children,
  tone = "primary"
}: {
  children: React.ReactNode;
  tone?: "primary" | "instagram" | "neutral";
}) => {
  // A plain sentence-case label in the section's colour: no pill, no
  // tracked capitals.
  const colors = {
    primary: { color: "var(--primary-dark)" },
    instagram: { color: "#b8218a" },
    neutral: { color: "var(--text-secondary)" }
  }[tone];

  return (
    <span
      className="inline-flex items-center gap-1.5 text-sm font-semibold"
      style={colors}
    >
      {children}
    </span>
  );
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "primary",
  as: Heading = "h2"
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "primary" | "instagram" | "neutral";
  /** Use "h1" when this is the page's main heading. The look stays the same. */
  as?: "h1" | "h2";
}) => (
  <div
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <div className="mb-4">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
    )}
    <Heading className="heading-2 mb-4">{title}</Heading>
    {description && (
      <p className="body-large" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>
    )}
  </div>
);

export const SectionCta = ({
  href,
  label
}: {
  href: string;
  label: string;
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-1.5 text-sm font-semibold"
    style={{ color: "var(--primary-dark)" }}
  >
    {label} <span aria-hidden>→</span>
  </a>
);
