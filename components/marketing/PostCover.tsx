import React from "react";
import {
  Bot,
  IndianRupee,
  Instagram,
  Megaphone,
  MessagesSquare,
  Scale,
  Wrench
} from "lucide-react";
import type { BlogCategory, PostCover as Cover } from "@/lib/data/blog";

// The drawn cover on blog cards. Each one shows a single fact from the
// article in large type, on the colour of its topic. Comparisons are dark.
// Decorative: the card's title and text say the same thing in words.

interface Tone {
  bg: string;
  ink: string;
  soft: string;
  accent: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  dark?: boolean;
}

const TONES: Record<BlogCategory, Tone> = {
  "WhatsApp API": {
    bg: "linear-gradient(150deg,#effaf3 0%,#d9f1e2 100%)",
    ink: "#0b3d22",
    soft: "#3d6b51",
    accent: "#169f49",
    icon: MessagesSquare
  },
  Pricing: {
    bg: "linear-gradient(150deg,#fdf7ea 0%,#f5e5c2 100%)",
    ink: "#4a3200",
    soft: "#7a5d24",
    accent: "#c58a0b",
    icon: IndianRupee
  },
  Setup: {
    bg: "linear-gradient(150deg,#eff4fd 0%,#d9e5f8 100%)",
    ink: "#142f5c",
    soft: "#475f88",
    accent: "#2f6fd6",
    icon: Wrench
  },
  "WhatsApp Marketing": {
    bg: "linear-gradient(150deg,#ecf8f5 0%,#d2eee7 100%)",
    ink: "#0a3d35",
    soft: "#3c6a62",
    accent: "#0f9f8f",
    icon: Megaphone
  },
  "Instagram Automation": {
    bg: "linear-gradient(150deg,#fdf0f6 0%,#f6d9e8 100%)",
    ink: "#5a1239",
    soft: "#86476a",
    accent: "#c13584",
    icon: Instagram
  },
  "AI Automation": {
    bg: "linear-gradient(150deg,#f4f0fc 0%,#e3daf6 100%)",
    ink: "#2f1c5c",
    soft: "#5f4f86",
    accent: "#7a4cc0",
    icon: Bot
  },
  Comparisons: {
    bg: "radial-gradient(80% 90% at 100% 100%,rgba(22,159,73,0.32),rgba(22,159,73,0) 70%),linear-gradient(150deg,#0f1915 0%,#0b1210 100%)",
    ink: "#ffffff",
    soft: "rgba(255,255,255,0.62)",
    accent: "#3ddc7a",
    icon: Scale,
    dark: true
  }
};

const PostCover = ({
  category,
  cover,
  className = ""
}: {
  category: BlogCategory;
  cover?: Cover;
  className?: string;
}) => {
  const t = TONES[category];
  const Icon = t.icon;

  return (
    <div
      aria-hidden
      className={`@container relative aspect-[16/9] overflow-hidden ${className}`}
      style={{ background: t.bg }}
    >
      <span
        className={`grain ${t.dark ? "grain-light" : ""}`}
        style={{ opacity: t.dark ? 0.35 : 0.5 }}
      />

      <div className="relative h-full flex flex-col justify-between p-[6.5cqw]">
        <span
          className="inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11.5px] font-semibold"
          style={{
            background: t.dark
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.7)",
            color: t.dark ? "rgba(255,255,255,0.85)" : t.ink,
            border: t.dark
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(255,255,255,0.9)"
          }}
        >
          <span style={{ color: t.accent }}>
            <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
          </span>
          {category}
        </span>

        {cover?.versus ? (
          <span className="block font-bold tracking-[-0.035em] leading-[0.98]">
            <span
              className="block text-[min(10.5cqw,52px)]"
              style={{ color: t.ink }}
            >
              Whatching
            </span>
            <span
              className="block text-[min(6cqw,30px)] my-[1cqw] font-semibold tracking-normal"
              style={{ color: t.accent }}
            >
              vs
            </span>
            <span
              className="block text-[min(10.5cqw,52px)]"
              style={{ color: t.soft }}
            >
              {cover.versus}
            </span>
          </span>
        ) : cover?.rows ? (
          <span className="flex items-end justify-between gap-4">
            <span className="block min-w-0">
              <span
                className="block font-bold tracking-[-0.03em] leading-[1.02] text-[min(8.5cqw,42px)]"
                style={{ color: t.ink }}
              >
                {cover.big}
              </span>
              {cover.small && (
                <span
                  className="block mt-[1.5cqw] text-[min(3.6cqw,15px)] leading-snug max-w-[24ch]"
                  style={{ color: t.soft }}
                >
                  {cover.small}
                </span>
              )}
            </span>
            <span
              className="block shrink-0 w-[54%] rounded-[2.4cqw] bg-white px-[3cqw] py-[2cqw] text-[min(3.3cqw,14px)] tabular-nums"
              style={{
                boxShadow:
                  "0 1px 2px rgba(74,50,0,0.08), 0 14px 28px -16px rgba(74,50,0,0.4)"
              }}
            >
              {cover.rows.map(([label, value], i) => (
                <span
                  key={label}
                  className="flex justify-between gap-2 py-[0.9cqw]"
                  style={{
                    borderTop: i ? "1px dashed #eadfc6" : undefined,
                    color: "#5c4a24"
                  }}
                >
                  <span className="truncate">{label}</span>
                  <span className="font-semibold" style={{ color: t.ink }}>
                    {value}
                  </span>
                </span>
              ))}
            </span>
          </span>
        ) : (
          <span className="block">
            <span
              className={`block font-bold tracking-[-0.04em] leading-[0.98] ${
                (cover?.big ?? category).length > 10
                  ? "text-[min(10.5cqw,52px)]"
                  : "text-[min(13cqw,64px)]"
              }`}
              style={{ color: t.ink }}
            >
              {cover?.big ?? category}
            </span>
            {cover?.small && (
              <span
                className="block mt-[2cqw] text-[min(3.7cqw,16px)] leading-snug max-w-[34ch]"
                style={{ color: t.soft }}
              >
                {cover.small}
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCover;
