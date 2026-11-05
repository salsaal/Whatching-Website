import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export const Reveal = ({
  children,
  className,
  style,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion)
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const Eyebrow = ({
  children,
  tone = "primary"
}: {
  children: React.ReactNode;
  tone?: "primary" | "instagram" | "neutral";
}) => {
  const colors = {
    primary: { color: "var(--primary-dark)", background: "var(--accent-wash)" },
    instagram: { color: "#b8218a", background: "rgba(214,36,159,0.08)" },
    neutral: {
      color: "var(--text-secondary)",
      background: "var(--surface-hover)"
    }
  }[tone];

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full"
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
