import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Paperclip,
  Send,
  Sparkles,
  User,
  UserCheck,
  Users
} from "lucide-react";
import { AppPanel } from "./AppFrame";
import { FlowTree } from "./FlowTree";
import TemplatePreviewImg from "../../public/assets/templatePreview.jpg";

export const TemplateEditorVisual = () => (
  <AppPanel className="!p-0 overflow-hidden">
    <div className="grid md:grid-cols-2">
      <div className="p-5 sm:p-6 space-y-4">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Template category
          </p>
          <div
            className="rounded-lg px-3 py-2.5 text-sm font-medium flex items-center justify-between"
            style={{
              border: "1px solid var(--border-medium)",
              color: "var(--text-primary)"
            }}
          >
            MARKETING
            <ChevronDown
              className="w-4 h-4"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        </div>
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Template name
          </p>
          <div
            className="rounded-lg px-3 py-2.5 text-sm font-medium"
            style={{
              border: "1px solid var(--border-medium)",
              color: "var(--text-primary)",
              background: "var(--background-secondary)"
            }}
          >
            seasonal_promotion
          </div>
        </div>
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Template type
          </p>
          <div
            className="rounded-lg px-3 py-2.5 text-sm font-medium flex items-center justify-between"
            style={{
              border: "1px solid var(--border-medium)",
              color: "var(--text-primary)"
            }}
          >
            Image + CTA buttons
            <ChevronDown
              className="w-4 h-4"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
        </div>
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            Template footer
          </p>
          <div
            className="rounded-lg px-3 py-2.5 text-sm font-medium"
            style={{
              border: "1px solid var(--border-medium)",
              color: "var(--text-secondary)"
            }}
          >
            Reply STOP to unsubscribe
          </div>
        </div>
        <div className="pt-1">
          <span className="btn-primary !min-h-[38px] !py-0 !px-4 !text-[13px]">
            Save changes
          </span>
        </div>
      </div>

      <div
        className="p-5 sm:p-6 flex flex-col max-lg:border-0!"
        style={{
          background: "var(--background-secondary)",
          borderLeft: "1px solid var(--border-light)"
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          Template preview
        </p>
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-light)"
          }}
        >
          <div className="relative h-24">
            <Image
              src={TemplatePreviewImg}
              alt="Template header image"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Hi Aarav, ready for your next escape? ✈️
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Book this week and save up to 25% on your next trip — offer ends
              Sunday.
            </p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Reply STOP to unsubscribe
            </p>
            <div
              className="pt-2 space-y-1.5 border-t"
              style={{ borderColor: "var(--border-light)" }}
            >
              <p
                className="text-xs font-semibold text-center py-1.5"
                style={{ color: "var(--primary-dark)" }}
              >
                Plan my trip
              </p>
              <p
                className="text-xs font-semibold text-center py-1.5"
                style={{ color: "var(--primary-dark)" }}
              >
                Know more
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-4 rounded-xl p-3.5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-light)"
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-wide mb-2.5"
            style={{ color: "var(--text-muted)" }}
          >
            Review payload
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Buttons", value: "2/10" },
              { label: "URLs", value: "0/2" },
              { label: "Phone", value: "0/1" }
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg py-2"
                style={{ background: "var(--background-secondary)" }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AppPanel>
);

export const AIChatVisual = () => (
  <AppPanel>
    <div
      className="flex items-center justify-between mb-4 pb-4 border-b"
      style={{ borderColor: "var(--border-light)" }}
    >
      <div className="flex items-center gap-2.5">
        <div className="icon-badge !w-9 !h-9">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Whatching AI Assistant
          </p>
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
            Replying instantly
          </p>
        </div>
      </div>
      {/* <span className="pill !py-1 !text-[11px]">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--primary)" }}
        />
        Active now
      </span> */}
    </div>

    <div className="space-y-3">
      <div className="flex justify-start">
        <div
          className="rounded-xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[85%]"
          style={{
            background: "var(--background-secondary)",
            color: "var(--text-body)"
          }}
        >
          Hey, do you have this in size M? And can I pay on delivery?
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="rounded-xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[85%] text-white"
          style={{ background: "var(--primary)" }}
        >
          Yes, size M is in stock, and cash on delivery is available for your
          area. Would you like help choosing a colour?
        </div>
      </div>
      <div className="flex justify-start">
        <div
          className="rounded-xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[85%]"
          style={{
            background: "var(--background-secondary)",
            color: "var(--text-body)"
          }}
        >
          Yes please, can someone from the team help?
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="rounded-xl rounded-tr-sm px-4 py-2.5 text-sm max-w-[85%] text-white"
          style={{ background: "var(--primary)" }}
        >
          Of course. I&apos;ve passed your chat to Priya from our team.
          She&apos;ll reply here shortly.
        </div>
      </div>
    </div>

    <div
      className="mt-5 pt-5 border-t"
      style={{ borderColor: "var(--border-light)" }}
    >
      <div className="grid grid-cols-3 gap-y-4 sm:flex sm:items-center sm:justify-between text-xs">
        {[
          { icon: Bot, label: "Detects intent" },
          { icon: Check, label: "Collects details" },
          { icon: UserCheck, label: "Qualifies lead" },
          { icon: Users, label: "Assigns agent" },
          { icon: Sparkles, label: "Team takes over" }
        ].map((step, i, arr) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center gap-2">
              <div className="icon-badge !w-9 !h-9">
                <step.icon className="w-4 h-4" />
              </div>
              <span
                className="text-center leading-tight"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight
                className="hidden sm:block w-3.5 h-3.5 shrink-0 -mt-5"
                style={{ color: "var(--border-strong)" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </AppPanel>
);

export const FlowBuilderVisual = () => (
  <AppPanel className="!p-0 overflow-hidden">
    <div
      className="flex items-center justify-between px-5 py-3"
      style={{ borderBottom: "1px solid var(--border-light)" }}
    >
      <p
        className="text-sm font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        Primary Bot Canvas
      </p>
      <span className="pill !py-1 !text-[11px]">Draft canvas</span>
    </div>
    <div
      className="p-5 sm:p-8 overflow-x-auto"
      style={{
        background: "var(--background-secondary)",
        backgroundImage:
          "radial-gradient(var(--border-medium) 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }}
    >
      <FlowTree
        root={{ label: "Main Menu", type: "List Menu" }}
        branches={[
          {
            label: "Vietnam Packages",
            type: "Route",
            child: { label: "Send Catalogue", type: "Action" }
          },
          {
            label: "Thailand Packages",
            type: "Route",
            child: { label: "Collect Details", type: "Capture" }
          },
          {
            label: "Talk to an Expert",
            type: "Route",
            child: { label: "Agent Trigger", type: "Handoff" }
          }
        ]}
      />
    </div>
  </AppPanel>
);

const conversationList = [
  {
    name: "Priya Sharma",
    msg: "Is this available in blue?",
    channel: "WhatsApp",
    active: true
  },
  {
    name: "@studio.k",
    msg: "Comment: PRICE",
    channel: "Instagram",
    active: false
  },
  {
    name: "Rahul Verma",
    msg: "Order confirmed, thanks!",
    channel: "WhatsApp",
    active: false
  },
  {
    name: "Meena Bora",
    msg: "Can I get this in size L?",
    channel: "WhatsApp",
    active: false
  },
  {
    name: "@thecraftroom",
    msg: "Comment: LINK",
    channel: "Instagram",
    active: false
  }
];

export const InboxVisual = () => (
  <AppPanel className="!p-0 overflow-hidden">
    <div
      className="flex items-center gap-2 px-5 py-3"
      style={{ borderBottom: "1px solid var(--border-light)" }}
    >
      {["All", "WhatsApp", "Instagram"].map((tab, i) => (
        <span
          key={tab}
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={
            i === 0
              ? {
                  background: "var(--accent-wash)",
                  color: "var(--primary-dark)"
                }
              : { color: "var(--text-muted)" }
          }
        >
          {tab}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-5">
      <div
        className="sm:col-span-2 border-b sm:border-b-0 sm:border-r p-2.5 space-y-1"
        style={{ borderColor: "var(--border-light)" }}
      >
        {conversationList.map((c) => (
          <div
            key={c.name}
            className="rounded-lg px-2.5 py-2"
            style={{
              background: c.active ? "var(--accent-wash)" : "transparent"
            }}
          >
            <div className="flex items-center justify-between">
              <p
                className="text-xs font-semibold truncate"
                style={{ color: "var(--text-primary)" }}
              >
                {c.name}
              </p>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full shrink-0 ml-1"
                style={{
                  background: "var(--surface-hover)",
                  color: "var(--text-muted)"
                }}
              >
                {c.channel}
              </span>
            </div>
            <p
              className="text-[11px] truncate"
              style={{ color: "var(--text-muted)" }}
            >
              {c.msg}
            </p>
          </div>
        ))}
      </div>
      <div className="sm:col-span-3 p-4 flex flex-col justify-between min-h-[240px] sm:min-h-[280px]">
        <div className="space-y-2">
          <div
            className="rounded-lg rounded-tl-sm px-3 py-2 text-xs w-fit max-w-[90%]"
            style={{ background: "var(--background-secondary)" }}
          >
            Is this available in blue?
          </div>
          <div
            className="rounded-lg px-2.5 py-2 text-[11px] flex items-center gap-1.5 w-fit"
            style={{
              background: "#fdf8ec",
              color: "#7a5c14",
              border: "1px solid #f0e2bb"
            }}
          >
            <User className="w-3 h-3" /> Assigned to Meera · Note: VIP customer
          </div>
          <div
            className="rounded-lg rounded-tr-sm px-3 py-2 text-xs w-fit max-w-[90%] ml-auto text-white"
            style={{ background: "var(--primary)" }}
          >
            Yes! Blue is back in stock — want me to reserve one?
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {["A", "M", "R"].map((i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2"
                  style={{
                    background: "var(--primary)",
                    borderColor: "var(--surface)"
                  }}
                >
                  {i}
                </span>
              ))}
            </div>
            <span
              className="text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              3 agents online
            </span>
          </div>
          <div
            className="flex items-center gap-2 rounded-full px-3 py-2"
            style={{
              border: "1px solid var(--border-medium)",
              background: "var(--surface)"
            }}
          >
            <Paperclip
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: "var(--text-muted)" }}
            />
            <span
              className="text-xs flex-1"
              style={{ color: "var(--text-muted)" }}
            >
              Type a reply...
            </span>
            <div className="icon-badge !w-6 !h-6">
              <Send className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppPanel>
);
