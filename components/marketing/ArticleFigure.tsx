import React from "react";
import {
  ArrowLeftRight,
  ArrowUpDown,
  Clock,
  Inbox,
  Megaphone,
  MessageCircle,
  Reply,
  RotateCcw,
  Smartphone,
  UserPlus
} from "lucide-react";
import type { FigureName } from "@/lib/data/blog";

// Drawn diagrams for articles. Every label is real text, so it reads on any
// screen and in search. Each one restates what the article around it says,
// from Meta's documentation; nothing here adds a fact of its own.

const ink = "#0b1210";
const soft = "#4f5d56";
const faint = "#7d8b85";
const line = "#e3e9e5";
const green = "#169f49";

const Shell = ({
  tint = "22,159,73",
  caption,
  children
}: {
  tint?: string;
  caption: string;
  children: React.ReactNode;
}) => (
  <figure className="not-prose">
    <div
      className="media-stage rounded-[22px] px-4 py-5 sm:px-7 sm:py-7"
      style={{ "--tint": tint } as React.CSSProperties}
    >
      <div className="relative text-left">{children}</div>
    </div>
    <figcaption
      className="mt-3 text-sm leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
    >
      {caption}
    </figcaption>
  </figure>
);

const Card = ({
  className = "",
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`rounded-2xl bg-white ${className}`}
    style={{
      border: `1px solid ${line}`,
      boxShadow:
        "0 1px 2px rgba(10,18,14,0.04), 0 12px 28px -20px rgba(10,18,14,0.3)"
    }}
  >
    {children}
  </div>
);

/* ── Messaging limits ─────────────────────────────────────────────── */

const LEVELS = [
  { value: "250", note: "Where new businesses start" },
  { value: "2,000", note: "After one scaling path" },
  { value: "10,000" },
  { value: "100,000" },
  { value: "Unlimited" }
];
const SHADES = ["#d9f0e2", "#ade0c2", "#5fbf87", "#25a85a", "#12843d"];

const LimitsLadder = () => (
  <>
    {/* Tablet and up: a staircase */}
    <div className="hidden sm:block">
      <div className="grid grid-cols-5 gap-2 items-end h-[200px]">
        {LEVELS.map((l, i) => (
          <div
            key={l.value}
            className="rounded-t-xl rounded-b-md p-2.5 flex flex-col justify-between"
            style={{
              height: `${40 + i * 15}%`,
              background: SHADES[i],
              color: i >= 2 ? "#fff" : "#0b3d22"
            }}
          >
            <span className="text-[17px] font-bold tabular-nums tracking-tight">
              {l.value}
            </span>
            {l.note && (
              <span className="text-[11.5px] leading-snug opacity-80">
                {l.note}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 mt-2 text-[12px] font-semibold text-center">
        <div className="col-start-2">
          <span
            className="block h-2.5 border-x-2 border-b-2 rounded-b-md"
            style={{ borderColor: "#7fcfa0" }}
          />
          <span className="block mt-1.5" style={{ color: "#0b3d22" }}>
            Scaling path
          </span>
        </div>
        <div className="col-span-3">
          <span
            className="block h-2.5 border-x-2 border-b-2 rounded-b-md"
            style={{ borderColor: green }}
          />
          <span className="block mt-1.5" style={{ color: "#0b3d22" }}>
            Automatic, one level at a time
          </span>
        </div>
      </div>
    </div>

    {/* Phones: a list that widens as the limit grows */}
    <ol className="sm:hidden grid gap-1.5">
      {LEVELS.map((l, i) => (
        <li key={l.value} className="flex items-center gap-3">
          <span
            className="h-10 rounded-lg px-3 flex items-center text-[15px] font-bold tabular-nums shrink-0"
            style={{
              width: `${36 + i * 16}%`,
              background: SHADES[i],
              color: i >= 2 ? "#fff" : "#0b3d22"
            }}
          >
            {l.value}
          </span>
          {l.note && (
            <span className="text-[12px] leading-snug" style={{ color: soft }}>
              {l.note}
            </span>
          )}
        </li>
      ))}
    </ol>

    <div className="grid sm:grid-cols-2 gap-3 mt-5">
      <Card className="p-4">
        <p className="text-[13px] font-semibold" style={{ color: ink }}>
          Scaling path: 250 to 2,000
        </p>
        <p
          className="text-[13px] mt-1.5 leading-relaxed"
          style={{ color: soft }}
        >
          Do any one: verify your business, have your partner verify it, or send
          2,000 delivered template messages with a high quality rating to
          different people within 30 days.
        </p>
      </Card>
      <Card className="p-4">
        <p className="text-[13px] font-semibold" style={{ color: ink }}>
          Automatic: 2,000 and up
        </p>
        <p
          className="text-[13px] mt-1.5 leading-relaxed"
          style={{ color: soft }}
        >
          Keep message quality high and use at least half your limit over 7
          days. Meta then raises it one level within 6 hours.
        </p>
      </Card>
    </div>
  </>
);

/* ── Click to WhatsApp ads: the free entry point window ───────────── */

const FREE_FOR = ["Marketing", "Utility", "Authentication", "Service"];

const Event = ({
  icon: Icon,
  title,
  sub
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
}) => (
  <span className="flex items-start gap-2.5">
    <span
      className="w-8 h-8 rounded-full grid place-items-center shrink-0 bg-white"
      style={{ border: `1px solid ${line}`, color: green }}
    >
      <Icon className="w-4 h-4" />
    </span>
    <span className="block min-w-0">
      <span className="block text-[13px] font-semibold" style={{ color: ink }}>
        {title}
      </span>
      <span
        className="block text-[12px] leading-snug mt-0.5"
        style={{ color: soft }}
      >
        {sub}
      </span>
    </span>
  </span>
);

const FreeChips = () => (
  <div className="mt-5 flex flex-wrap items-center gap-2 text-[12.5px]">
    <span style={{ color: soft }}>Free to that person while it is open:</span>
    {FREE_FOR.map((c) => (
      <span
        key={c}
        className="rounded-full px-2.5 py-1 font-semibold bg-white"
        style={{ border: `1px solid ${line}`, color: "#0b3d22" }}
      >
        {c}
      </span>
    ))}
  </div>
);

const AdWindow = () => (
  <>
    <div className="hidden sm:block">
      <div className="grid grid-cols-[1fr_3fr] gap-4">
        <Event
          icon={Megaphone}
          title="They message from your ad"
          sub="In the WhatsApp app on their phone"
        />
        <Event
          icon={Reply}
          title="You reply"
          sub="Your first reply is free and starts the window"
        />
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-1.5 mt-4">
        <div
          className="h-12 rounded-l-xl rounded-r-md grid place-items-center text-[12.5px] font-semibold bg-white/70"
          style={{ border: "2px dashed #b7c4bd", color: soft }}
        >
          Within 24 hours
        </div>
        <div
          className="relative h-12 rounded-r-xl rounded-l-md overflow-hidden"
          style={{ background: green }}
        >
          <span className="absolute inset-0 grid grid-cols-7">
            {Array.from({ length: 7 }, (_, i) => (
              <span
                key={i}
                style={{
                  borderLeft: i ? "1px solid rgba(255,255,255,0.28)" : undefined
                }}
              />
            ))}
          </span>
          <span className="relative h-full flex items-center px-4 text-[13.5px] font-semibold text-white">
            Up to 7 days: Meta charges nothing for your messages
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-1.5 mt-1.5">
        <span />
        <span
          className="grid grid-cols-7 text-[11px] text-center tabular-nums"
          style={{ color: faint }}
        >
          {Array.from({ length: 7 }, (_, i) => (
            <span key={i}>Day {i + 1}</span>
          ))}
        </span>
      </div>
    </div>

    <ol className="sm:hidden relative grid gap-3 pl-1">
      <li>
        <Event
          icon={Megaphone}
          title="They message from your ad"
          sub="In the WhatsApp app on their phone"
        />
      </li>
      <li
        className="ml-4 pl-5 py-2 text-[12.5px] font-semibold"
        style={{ borderLeft: "2px dashed #b7c4bd", color: soft }}
      >
        Within 24 hours
      </li>
      <li>
        <Event
          icon={Reply}
          title="You reply"
          sub="Your first reply is free and starts the window"
        />
      </li>
      <li
        className="ml-4 pl-5 py-3 text-[13px] font-semibold"
        style={{ borderLeft: `4px solid ${green}`, color: "#0b3d22" }}
      >
        Up to 7 days: Meta charges nothing for your messages
      </li>
    </ol>

    <FreeChips />
  </>
);

/* ── Coexistence ──────────────────────────────────────────────────── */

const Side = ({
  badge,
  title,
  sub,
  items
}: {
  badge: React.ReactNode;
  title: string;
  sub: string;
  items: string[];
}) => (
  <Card className="p-4 h-full">
    <span className="flex items-center gap-2.5">
      {badge}
      <span className="block">
        <span
          className="block text-[13.5px] font-semibold"
          style={{ color: ink }}
        >
          {title}
        </span>
        <span className="block text-[12px]" style={{ color: faint }}>
          {sub}
        </span>
      </span>
    </span>
    <ul className="mt-3 grid gap-1.5 text-[13px]" style={{ color: soft }}>
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
            style={{ background: green }}
          />
          {it}
        </li>
      ))}
    </ul>
  </Card>
);

const Coexistence = () => (
  <>
    <div className="grid sm:grid-cols-[1fr_150px_1fr] gap-3 sm:gap-2 items-stretch">
      <Side
        badge={
          <span
            className="w-9 h-9 rounded-xl grid place-items-center shrink-0"
            style={{ background: "#e7f5ec", color: "#12843d" }}
          >
            <Smartphone className="w-[18px] h-[18px]" />
          </span>
        }
        title="WhatsApp Business app"
        sub="On your phone, as before"
        items={[
          "Reply to customers by hand",
          "Calls and group chats",
          "Catalogue, labels and quick replies"
        ]}
      />
      <div className="flex sm:flex-col items-center justify-center gap-2 text-center py-1">
        <span
          className="rounded-full px-3 py-1.5 text-[12.5px] font-semibold text-white whitespace-nowrap"
          style={{ background: ink }}
        >
          One number
        </span>
        <span style={{ color: green }}>
          <ArrowLeftRight className="hidden sm:block w-5 h-5" />
          <ArrowUpDown className="sm:hidden w-5 h-5" />
        </span>
        <span
          className="text-[11.5px] leading-snug max-w-[150px]"
          style={{ color: soft }}
        >
          Chats and contacts sync. New messages show in both.
        </span>
      </div>
      <Side
        badge={
          <span
            className="w-9 h-9 rounded-xl grid place-items-center shrink-0 text-[15px] font-bold text-white"
            style={{ background: green }}
          >
            W
          </span>
        }
        title="Whatching"
        sub="Through Meta's API"
        items={[
          "Broadcasts with approved templates",
          "Chatbots and the AI agent",
          "A shared inbox for your team"
        ]}
      />
    </div>
    <p
      className="mt-4 rounded-xl px-4 py-3 text-[12.5px] leading-relaxed"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: `1px solid ${line}`,
        color: soft
      }}
    >
      <span className="font-semibold" style={{ color: ink }}>
        Switched off in the app:
      </span>{" "}
      new broadcast lists (old ones become read-only), disappearing messages,
      view once and live location in one-to-one chats.
    </p>
  </>
);

/* ── The 24-hour customer service window ──────────────────────────── */

const HOURS = ["6 pm", "Midnight", "6 am", "Noon", "6 pm"];

const ServiceWindow = () => (
  <>
    <div className="hidden sm:block">
      <div className="grid grid-cols-[3fr_1fr] gap-4">
        <Event
          icon={MessageCircle}
          title="3 Dec, 6 pm: a customer writes"
          sub="Asking Wanderly about visa documents"
        />
        <Event icon={Clock} title="4 Dec, 6 pm" sub="The window closes" />
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-1.5 mt-4">
        <div
          className="h-12 rounded-l-xl rounded-r-md flex items-center px-4 text-[13.5px] font-semibold text-white"
          style={{ background: green }}
        >
          Reply with anything: text, photos, documents, buttons
        </div>
        <div
          className="h-12 rounded-r-xl rounded-l-md grid place-items-center text-[12.5px] font-semibold bg-white/70"
          style={{ border: "2px dashed #b7c4bd", color: soft }}
        >
          Templates only
        </div>
      </div>
      <div className="grid grid-cols-[3fr_1fr] gap-1.5 mt-1.5">
        <span
          className="flex justify-between text-[11px] tabular-nums"
          style={{ color: faint }}
        >
          {HOURS.map((h, i) => (
            <span key={i}>{h}</span>
          ))}
        </span>
        <span />
      </div>
    </div>

    <ol className="sm:hidden grid gap-3 pl-1">
      <li>
        <Event
          icon={MessageCircle}
          title="3 Dec, 6 pm: a customer writes"
          sub="Asking Wanderly about visa documents"
        />
      </li>
      <li
        className="ml-4 pl-5 py-3 text-[13px] font-semibold"
        style={{ borderLeft: `4px solid ${green}`, color: "#0b3d22" }}
      >
        Reply with anything: text, photos, documents, buttons
      </li>
      <li>
        <Event icon={Clock} title="4 Dec, 6 pm" sub="The window closes" />
      </li>
      <li
        className="ml-4 pl-5 py-2 text-[12.5px] font-semibold"
        style={{ borderLeft: "2px dashed #b7c4bd", color: soft }}
      >
        Templates only
      </li>
    </ol>

    <p
      className="mt-5 flex items-center gap-2 text-[12.5px]"
      style={{ color: soft }}
    >
      <RotateCcw className="w-4 h-4 shrink-0" style={{ color: green }} />
      Each new message from the customer starts the 24 hours again.
    </p>
  </>
);

/* ── Instagram: comment to DM ─────────────────────────────────────── */

const Step = ({
  n,
  text,
  children
}: {
  n: number;
  text: string;
  children: React.ReactNode;
}) => (
  <li className="flex flex-col">
    <Card className="p-3 min-h-[92px] flex flex-col justify-center">
      {children}
    </Card>
    <span
      className="flex gap-2 mt-2.5 text-[12.5px] leading-snug"
      style={{ color: soft }}
    >
      <span
        className="w-5 h-5 rounded-full grid place-items-center text-[11px] font-bold text-white shrink-0"
        style={{ background: "#c13584" }}
      >
        {n}
      </span>
      {text}
    </span>
  </li>
);

const CommentToDm = () => (
  <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5">
    <Step n={1} text="Someone comments your keyword on a post or reel">
      <span className="flex items-start gap-2">
        <span
          className="w-7 h-7 rounded-full grid place-items-center text-[11px] font-bold text-white shrink-0"
          style={{ background: "linear-gradient(135deg,#f58529,#dd2a7b)" }}
        >
          R
        </span>
        <span className="text-[12.5px] leading-snug" style={{ color: ink }}>
          <span className="font-semibold">Riya</span> <span>PRICE</span>
          <span className="block text-[11px] mt-0.5" style={{ color: faint }}>
            Reply
          </span>
        </span>
      </span>
    </Step>
    <Step n={2} text="They get one private reply, within 7 days of the comment">
      <span
        className="self-start rounded-2xl rounded-bl-md px-3 py-2 text-[12.5px] leading-snug text-white"
        style={{ background: "linear-gradient(135deg,#7b4bd6,#c13584)" }}
      >
        Hi Riya! Here is our Bali price list.
      </span>
    </Step>
    <Step
      n={3}
      text="It lands in their inbox, or in Requests if they don't follow you"
    >
      <span className="grid gap-1.5 text-[12px]">
        <span className="flex items-center gap-2" style={{ color: ink }}>
          <Inbox className="w-4 h-4" style={{ color: "#c13584" }} />
          <span className="font-semibold">Inbox</span>
          <span style={{ color: faint }}>followers</span>
        </span>
        <span className="flex items-center gap-2" style={{ color: ink }}>
          <UserPlus className="w-4 h-4" style={{ color: "#c13584" }} />
          <span className="font-semibold">Requests</span>
          <span style={{ color: faint }}>others</span>
        </span>
      </span>
    </Step>
    <Step
      n={4}
      text="If they reply, you can keep chatting for 24 hours after their reply"
    >
      <span
        className="self-end rounded-2xl rounded-br-md px-3 py-2 text-[12.5px] leading-snug"
        style={{ background: "#efefef", color: ink }}
      >
        Is March available?
      </span>
    </Step>
  </ol>
);

/* ── Lookup ───────────────────────────────────────────────────────── */

const FIGURES: Record<
  FigureName,
  { tint?: string; render: () => React.ReactNode }
> = {
  "limits-ladder": { render: () => <LimitsLadder /> },
  "ad-window": { render: () => <AdWindow /> },
  coexistence: { render: () => <Coexistence /> },
  "service-window": { render: () => <ServiceWindow /> },
  "comment-to-dm": { tint: "193,53,132", render: () => <CommentToDm /> }
};

const ArticleFigure = ({
  name,
  caption
}: {
  name: FigureName;
  caption: string;
}) => {
  const f = FIGURES[name];
  return (
    <Shell tint={f.tint} caption={caption}>
      {f.render()}
    </Shell>
  );
};

export default ArticleFigure;
