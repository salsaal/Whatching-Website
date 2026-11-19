import React from "react";
import {
  BarChart3,
  Bot,
  Building2,
  GraduationCap,
  Home,
  Inbox,
  Instagram,
  Megaphone,
  MessageCircleReply,
  MessagesSquare,
  Plane,
  Send,
  ShoppingBag,
  Stethoscope,
  Workflow
} from "lucide-react";

// One icon and colour per page, used beside items in the menus and on the
// features index, so the same page always looks the same wherever it's
// linked. Colours: green for WhatsApp, pink for Instagram, blue for team and
// insights, and a warm tone for industries.

type Icon = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
}>;

const WHATSAPP = "#12843d";
const INSTAGRAM = "#c13584";
const TEAM = "#2f6fd6";
const INDUSTRY = "#b4621a";

const map: Record<string, { icon: Icon; color: string }> = {
  "/features/whatsapp-broadcast": { icon: Megaphone, color: WHATSAPP },
  "/features/whatsapp-flows": { icon: Workflow, color: WHATSAPP },
  "/features/ai-chatbot": { icon: Bot, color: WHATSAPP },
  "/features/whatsapp-marketing": { icon: MessagesSquare, color: WHATSAPP },
  "/features/instagram-automation": { icon: Instagram, color: INSTAGRAM },
  "/features/instagram-comment-automation": {
    icon: MessageCircleReply,
    color: INSTAGRAM
  },
  "/features/instagram-dm-automation": { icon: Send, color: INSTAGRAM },
  "/features/shared-inbox": { icon: Inbox, color: TEAM },
  "/features/analytics": { icon: BarChart3, color: TEAM },
  "/industries/ecommerce": { icon: ShoppingBag, color: INDUSTRY },
  "/industries/education": { icon: GraduationCap, color: INDUSTRY },
  "/industries/real-estate": { icon: Home, color: INDUSTRY },
  "/industries/healthcare": { icon: Stethoscope, color: INDUSTRY },
  "/industries/travel": { icon: Plane, color: INDUSTRY },
  "/industries/agencies": { icon: Building2, color: INDUSTRY }
};

export const NavIcon = ({
  href,
  size = "md"
}: {
  href: string;
  size?: "sm" | "md";
}) => {
  const entry = map[href] ?? { icon: MessagesSquare, color: WHATSAPP };
  const Icon = entry.icon;
  const box = size === "sm" ? "w-8 h-8 rounded-lg" : "w-10 h-10 rounded-xl";
  const glyph = size === "sm" ? "w-4 h-4" : "w-[18px] h-[18px]";
  return (
    <span
      aria-hidden
      className={`${box} flex items-center justify-center shrink-0`}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-light)",
        boxShadow: "0 1px 2px rgba(10,18,14,0.06)"
      }}
    >
      <Icon className={glyph} style={{ color: entry.color }} strokeWidth={2} />
    </span>
  );
};
