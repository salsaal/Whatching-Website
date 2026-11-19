import React from "react";
import {
  Bot,
  CalendarCheck,
  Check,
  CheckCheck,
  ExternalLink,
  List,
  Megaphone,
  Reply,
  Sparkles,
  Tag,
  UserCheck
} from "lucide-react";
import ChatPhone from "./media/ChatPhone";

// A WhatsApp chat on a realistic phone for each industry page, as the
// customer sees it: the business on the left in white, the customer on the
// right in green. Three plain labels under the phone name what Whatching did.
// A fictional business in each case; no figures or performance claims.

type Msg =
  | { kind: "ad"; title: string; sub: string }
  | { kind: "me"; text: string; time: string; tapped?: boolean }
  | { kind: "biz"; text: string; time: string; from?: string; ai?: boolean }
  | {
      kind: "template";
      header?: string;
      text: string;
      time: string;
      buttons: string[];
    }
  | { kind: "list"; text: string; time: string; button: string };

interface Label {
  text: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
}

interface Scene {
  business: string;
  initial: string;
  avatar: string;
  tint: string;
  label: string;
  messages: Msg[];
  labels: Label[];
}

const SCENES: Record<string, Scene> = {
  ecommerce: {
    business: "Rang Ethnic Store",
    initial: "R",
    avatar: "linear-gradient(135deg,#e5527a,#b83261)",
    tint: "229,82,122",
    label:
      "Example chat for an online store: an order confirmation, a customer asks about exchanging for a different size, and the AI agent answers from the store's return policy",
    messages: [
      {
        kind: "template",
        header: "Order received",
        text: "Hi Priya, thank you for shopping with Rang Ethnic Store. We have received your order RG-10432 for ₹1,849.",
        time: "11:02",
        buttons: ["Track order"]
      },
      {
        kind: "me",
        text: "Can I exchange the kurta for size M if it doesn't fit?",
        time: "11:05"
      },
      {
        kind: "biz",
        ai: true,
        text: "Yes! Exchanges are free within 7 days of delivery. Just reply here and we'll arrange a pickup.",
        time: "11:05"
      }
    ],
    labels: [
      { text: "Order update sent", icon: CheckCheck },
      { text: "AI agent replied", icon: Bot },
      { text: "Tagged: kurta buyer", icon: Tag }
    ]
  },
  education: {
    business: "Bright Minds Academy",
    initial: "B",
    avatar: "linear-gradient(135deg,#9b6fd6,#7a4cc0)",
    tint: "122,76,192",
    label:
      "Example chat for a coaching institute: a parent asks about coaching, a chatbot offers a list of courses, the parent picks JEE 2027, and a counsellor takes over",
    messages: [
      {
        kind: "me",
        text: "Hi, I want details for JEE coaching for my son.",
        time: "21:14"
      },
      {
        kind: "list",
        text: "Hi! Which course would you like to know about?",
        time: "21:14",
        button: "Choose a course"
      },
      { kind: "me", text: "JEE 2027", time: "21:15", tapped: true },
      {
        kind: "biz",
        from: "Anjali · Counsellor",
        text: "Thanks! I'll share the batch timings and fees for Andheri. Is a call tomorrow at 11 okay?",
        time: "09:02"
      }
    ],
    labels: [
      { text: "Menu chatbot", icon: List },
      { text: "Course: JEE 2027", icon: Tag },
      { text: "Assigned to Anjali", icon: UserCheck }
    ]
  },
  "real-estate": {
    business: "Urban Nest Realty",
    initial: "U",
    avatar: "linear-gradient(135deg,#e0a82e,#c58a0b)",
    tint: "197,138,11",
    label:
      "Example chat for a real estate team: a buyer messages from a Click-to-WhatsApp ad for homes in Whitefield, a chatbot asks their budget, and an agent offers a site visit",
    messages: [
      { kind: "ad", title: "From an ad", sub: "2 & 3 BHK in Whitefield" },
      { kind: "me", text: "Hi, what's the price of the 3 BHK?", time: "18:40" },
      {
        kind: "list",
        text: "Happy to help! What's your budget?",
        time: "18:40",
        button: "Choose a budget"
      },
      { kind: "me", text: "₹80L – ₹1.2Cr", time: "18:41", tapped: true },
      {
        kind: "biz",
        from: "Rohan · Urban Nest",
        text: "We have 3 options in that range. Shall I book a site visit on Saturday?",
        time: "18:47"
      }
    ],
    labels: [
      { text: "From a Click-to-WhatsApp ad", icon: Megaphone },
      { text: "Budget saved", icon: Tag },
      { text: "Assigned to Rohan", icon: UserCheck }
    ]
  },
  healthcare: {
    business: "CareFirst Clinic",
    initial: "C",
    avatar: "linear-gradient(135deg,#17a6b5,#0f7f95)",
    tint: "15,127,149",
    label:
      "Example chat for a clinic: an appointment reminder with Confirm and Reschedule buttons, the patient taps Confirm, and reception replies",
    messages: [
      {
        kind: "template",
        header: "Appointment reminder",
        text: "Hi Meera, this is a reminder of your appointment with Dr. Sharma tomorrow, 12 Dec at 10:30 AM at CareFirst Clinic, Salt Lake.",
        time: "17:00",
        buttons: ["Confirm", "Reschedule"]
      },
      { kind: "me", text: "Confirm", time: "17:12", tapped: true },
      {
        kind: "biz",
        from: "Reception · CareFirst",
        text: "Thank you, Meera. See you tomorrow. Please bring your previous reports.",
        time: "17:14"
      }
    ],
    labels: [
      { text: "Reminder sent", icon: CalendarCheck },
      { text: "Confirmed with one tap", icon: Check },
      { text: "Reception replied", icon: UserCheck }
    ]
  }
};

const shadow = "0 1px 0.5px rgba(11,20,26,0.13)";
const text = "text-[13.5px] leading-[1.35]";

const Time = ({ t, read }: { t: string; read?: boolean }) => (
  <span
    className="float-right ml-2 mt-1.5 -mb-0.5 text-[11px] leading-none"
    style={{ color: "#667781" }}
  >
    {t}
    {read && (
      <CheckCheck
        className="inline w-[15px] h-[15px] -mb-[3px] ml-0.5"
        style={{ color: "#53bdeb" }}
        strokeWidth={2.2}
      />
    )}
  </span>
);

const Bubble = ({ m, business }: { m: Msg; business: string }) => {
  if (m.kind === "ad")
    return (
      <div
        className="self-center w-[86%] rounded-xl px-3 py-2 flex items-center gap-2.5 bg-white/90 shrink-0"
        style={{ boxShadow: shadow }}
      >
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#e8f0fc", color: "#2f6fd6" }}
        >
          <Megaphone className="w-4 h-4" />
        </span>
        <span className="min-w-0 leading-tight">
          <span
            className="block text-[11px] font-semibold"
            style={{ color: "#2f6fd6" }}
          >
            {m.title}
          </span>
          <span
            className="block text-[13px] font-semibold truncate"
            style={{ color: "#111b21" }}
          >
            {m.sub}
          </span>
        </span>
      </div>
    );
  if (m.kind === "me")
    return (
      <div
        className={`self-end shrink-0 max-w-[80%] rounded-[14px] rounded-tr-[4px] px-2.5 pt-1.5 pb-1.5 ${text}`}
        style={{ background: "#d9fdd3", color: "#111b21", boxShadow: shadow }}
      >
        {m.tapped && (
          <span
            className="block mb-1 rounded-md px-2 py-1 border-l-[3px] text-[12px]"
            style={{ background: "rgba(0,0,0,0.05)", borderColor: "#06cf9c" }}
          >
            <span className="block font-semibold" style={{ color: "#06a884" }}>
              {business}
            </span>
            <span style={{ color: "#667781" }}>Tapped a button</span>
          </span>
        )}
        {m.text}
        <Time t={m.time} read />
      </div>
    );
  if (m.kind === "biz")
    return (
      <div
        className={`self-start shrink-0 max-w-[84%] rounded-[14px] rounded-tl-[4px] bg-white px-2.5 pt-1.5 pb-1.5 ${text}`}
        style={{ color: "#111b21", boxShadow: shadow }}
      >
        {(m.ai || m.from) && (
          <span
            className="flex items-center gap-1 text-[12px] font-semibold mb-0.5"
            style={{ color: m.ai ? "#0c7d38" : "#c2410c" }}
          >
            {m.ai && <Sparkles className="w-3 h-3" />}
            {m.ai ? "Whatching AI" : m.from}
          </span>
        )}
        {m.text}
        <Time t={m.time} />
        <span className="block clear-both" />
      </div>
    );
  if (m.kind === "template")
    return (
      <div
        className="self-start shrink-0 w-[86%] rounded-[14px] rounded-tl-[4px] bg-white overflow-hidden"
        style={{ boxShadow: shadow }}
      >
        <div
          className={`px-2.5 pt-2 pb-1.5 ${text}`}
          style={{ color: "#111b21" }}
        >
          {m.header && (
            <span className="block font-semibold mb-0.5">{m.header}</span>
          )}
          {m.text}
          <Time t={m.time} />
          <span className="block clear-both" />
        </div>
        {m.buttons.map((b) => (
          <div
            key={b}
            className="flex items-center justify-center gap-1.5 py-2 border-t text-[14px] font-medium"
            style={{ borderColor: "rgba(0,0,0,0.07)", color: "#007aff" }}
          >
            {b === "Track order" ? (
              <ExternalLink className="w-4 h-4" />
            ) : (
              <Reply className="w-4 h-4" />
            )}{" "}
            {b}
          </div>
        ))}
      </div>
    );
  return (
    <div
      className="self-start shrink-0 w-[78%] rounded-[14px] rounded-tl-[4px] bg-white overflow-hidden"
      style={{ boxShadow: shadow }}
    >
      <div
        className={`px-2.5 pt-1.5 pb-1.5 ${text}`}
        style={{ color: "#111b21" }}
      >
        {m.text}
        <Time t={m.time} />
        <span className="block clear-both" />
      </div>
      <div
        className="flex items-center justify-center gap-1.5 py-2 border-t text-[14px] font-medium"
        style={{ borderColor: "rgba(0,0,0,0.07)", color: "#007aff" }}
      >
        <List className="w-4 h-4" /> {m.button}
      </div>
    </div>
  );
};

const IndustryPhone = ({ slug }: { slug: string }) => {
  const scene = SCENES[slug];
  if (!scene) return null;
  return (
    <div
      className="media-stage rounded-[32px] px-4 pt-10 pb-6 flex flex-col items-center"
      style={{ "--tint": scene.tint } as React.CSSProperties}
    >
      <div className="phone-zoom relative" role="img" aria-label={scene.label}>
        <ChatPhone
          business={scene.business}
          initial={scene.initial}
          avatar={scene.avatar}
          width={290}
        >
          {scene.messages.map((m, i) => (
            <Bubble key={i} m={m} business={scene.business} />
          ))}
        </ChatPhone>
      </div>
      <ul className="relative mt-6 flex flex-wrap justify-center gap-2">
        {scene.labels.map((l) => (
          <li
            key={l.text}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold"
            style={{
              background: "var(--surface)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-light)"
            }}
          >
            <l.icon
              className="w-3.5 h-3.5"
              style={{ color: `rgb(${scene.tint})` }}
            />
            {l.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryPhone;
