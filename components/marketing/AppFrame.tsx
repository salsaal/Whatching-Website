import React from "react";
import {
  BarChart3,
  Bot,
  Contact,
  FileText,
  Gauge,
  Image as ImageIcon,
  Instagram,
  LayoutGrid,
  LogOut,
  Megaphone,
  MessageCircle,
  Share2,
  Target,
  User
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const sidebarIcons = [
  { icon: LayoutGrid, active: false },
  { icon: BarChart3, active: false },
  { icon: FileText, active: false },
  { icon: Megaphone, active: false },
  { icon: Share2, active: false },
  { icon: Bot, active: false },
  { icon: Instagram, active: false },
  { icon: MessageCircle, active: false },
  { icon: Contact, active: false },
  { icon: Target, active: false },
  { icon: ImageIcon, active: false }
];

export const AppFrame = ({
  children,
  activeIndex = 0,
  title = "Whatching Official"
}: {
  children: React.ReactNode;
  activeIndex?: number;
  title?: string;
}) => (
  <div
    className="rounded-2xl overflow-hidden flex"
    style={{
      border: "1px solid var(--border-light)",
      boxShadow: "0 30px 70px -30px rgba(10,18,14,0.28)",
      background: "var(--surface)"
    }}
  >
    {/* Sidebar */}
    <div
      className="hidden sm:flex flex-col items-center gap-1.5 py-4 px-2 shrink-0"
      style={{
        borderRight: "1px solid var(--border-light)",
        background: "var(--surface)"
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
        style={{ background: "var(--primary)" }}
      >
        <Gauge className="w-4 h-4 text-white" />
      </div>
      {sidebarIcons.map((item, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={
            i === activeIndex
              ? { background: "var(--accent-wash)", color: "var(--primary)" }
              : { color: "var(--text-muted)" }
          }
        >
          <item.icon className="w-4 h-4" />
        </div>
      ))}
      <div className="mt-auto flex flex-col gap-1.5 pt-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ color: "var(--text-muted)" }}
        >
          <User className="w-4 h-4" />
        </div>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ color: "var(--text-muted)" }}
        >
          <LogOut className="w-4 h-4" />
        </div>
      </div>
    </div>

    <div
      className="flex-1 min-w-0 flex flex-col"
      style={{ background: "var(--background-secondary)" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 flex-wrap"
        style={{ borderBottom: "1px solid var(--border-light)" }}
      >
        <div>
          <p
            className="text-[10px] uppercase tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            Organisation
          </p>
          <p
            className="text-sm font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="pill !py-1.5 !text-[11px]">
            <FaWhatsapp
              className="w-3 h-3"
              style={{ color: "var(--primary)" }}
            />
            All WhatsApp numbers
          </span>
          <span
            className="pill !py-1.5 !text-[11px]"
            style={{
              background: "#fdf8ec",
              borderColor: "#f0e2bb",
              color: "#7a5c14"
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--primary)" }}
            />
            WhatsApp Business API: Ready
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Current plan
            </p>
            <p
              className="text-xs font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              BASIC
            </p>
          </div>
          <span className="btn-secondary !rounded-lg !min-h-0 !py-2 !px-3 !text-[11px]">
            <BarChart3 className="w-3.5 h-3.5" /> Explore plan
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="p-4 sm:p-6"
        style={{ background: "var(--background-secondary)" }}
      >
        {children}
      </div>
    </div>
  </div>
);

export const StatCard = ({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) => (
  <div
    className="rounded-xl p-4 flex items-start max-sm:p-2 max-sm:rounded-md justify-between"
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border-light)"
    }}
  >
    <div>
      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
        {label}
      </p>
      <p
        className="text-xl font-bold mt-1"
        style={{ color: "var(--text-primary)" }}
      >
        {value}
      </p>
    </div>
    <div className="icon-badge !w-8 !h-8">
      <Icon className="w-4 h-4" />
    </div>
  </div>
);
