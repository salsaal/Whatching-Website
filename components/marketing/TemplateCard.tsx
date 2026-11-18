import React, { useState } from "react";
import { Check, Copy, ExternalLink, Phone, Reply } from "lucide-react";
import type { WaTemplate } from "@/lib/data/templates";
import styles from "./product/product.module.css";

// One template: what it's for, a WhatsApp-style preview of the sample, the
// variables, a tip, and a button that copies the template text.

const categoryColour: Record<string, { bg: string; fg: string }> = {
  Marketing: { bg: "#eef2ff", fg: "#3b5bdb" },
  Utility: { bg: "#e7f6ec", fg: "#0c7d38" },
  Authentication: { bg: "#fff6e0", fg: "#8a5a00" }
};

const buttonIcon = (type: string) =>
  type === "url"
    ? ExternalLink
    : type === "phone"
      ? Phone
      : type === "copy_code"
        ? Copy
        : Reply;

const TemplateCard = ({ t, rate }: { t: WaTemplate; rate?: string }) => {
  const [copied, setCopied] = useState(false);
  const colour = categoryColour[t.category] ?? categoryColour.Utility;

  const copyText = [
    t.header ? `Header: ${t.header}` : "",
    t.body,
    t.footer ? `Footer: ${t.footer}` : "",
    t.buttons?.length
      ? `Buttons: ${t.buttons.map((b) => b.text).join(" | ")}`
      : "",
    t.variables.length
      ? `Variables: ${t.variables.map((v, i) => `{{${i + 1}}} ${v}`).join(", ")}`
      : ""
  ]
    .filter(Boolean)
    .join("\n\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article
      id={t.slug}
      className="scroll-mt-28 rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-light)"
      }}
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: colour.bg, color: colour.fg }}
          >
            {t.category}
          </span>
          {rate && (
            <span
              className="text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              {rate} per delivered message in India
            </span>
          )}
        </div>
        <h3
          className="text-[18px] font-semibold leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {t.name}
        </h3>
        <p
          className="text-[15px] mt-1 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.useWhen}
        </p>
      </div>

      <div className={`${styles.chat} px-4 py-5 flex-1`}>
        <div
          className="max-w-[340px] rounded-xl rounded-tl-[4px] overflow-hidden"
          style={{
            background: "#ffffff",
            boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
          }}
        >
          <div
            className="px-3 pt-2.5 pb-2 text-[14px] leading-[1.45]"
            style={{ color: "#111b21" }}
          >
            {t.header && <p className="font-semibold mb-1">{t.header}</p>}
            <p className="whitespace-pre-line">{t.sample}</p>
            {t.footer && (
              <p className="text-[12px] mt-1.5" style={{ color: "#667781" }}>
                {t.footer}
              </p>
            )}
          </div>
          {t.buttons?.map((b) => {
            const Icon = buttonIcon(b.type);
            return (
              <div
                key={b.text}
                className="flex items-center justify-center gap-1.5 py-2 border-t text-[13.5px] font-semibold"
                style={{ borderColor: "rgba(11,20,26,0.08)", color: "#027eb5" }}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden /> {b.text}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-3 text-[14.5px]">
        {t.variables.length > 0 && (
          <p style={{ color: "var(--text-secondary)" }}>
            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Variables:{" "}
            </span>
            {t.variables.map((v, i) => `{{${i + 1}}} ${v}`).join(", ")}
          </p>
        )}
        <p style={{ color: "var(--text-secondary)" }}>
          <span
            className="font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Tip:{" "}
          </span>
          {t.tips}
        </p>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--primary-dark)" }}
        >
          {copied ? (
            <Check className="w-4 h-4" aria-hidden />
          ) : (
            <Copy className="w-4 h-4" aria-hidden />
          )}
          {copied ? "Copied" : "Copy template"}
        </button>
      </div>
    </article>
  );
};

export default TemplateCard;
