import React from "react";
import {
  Bot,
  CalendarCheck,
  Check,
  CheckCheck,
  ChevronLeft,
  ExternalLink,
  List,
  Megaphone,
  Phone,
  Reply,
  Tag,
  UserCheck,
  Video,
  Wifi
} from "lucide-react";
import styles from "./product/product.module.css";

// A still WhatsApp chat on a phone for each industry page: a fictional
// business, a short exchange that shows what Whatching does for that kind of
// business, and three labels around the phone. Drawn in code like the other
// product pictures; no figures or performance claims.

type Msg =
  | { kind: "ad"; title: string; sub: string }
  | { kind: "in"; text: string; time: string }
  | { kind: "tap"; text: string; time: string }
  | { kind: "out"; text: string; time: string; from?: string; ai?: boolean }
  | {
      kind: "template";
      header?: string;
      text: string;
      time: string;
      buttons: string[];
    }
  | { kind: "list"; text: string; time: string; options: string[] };

interface Chip {
  text: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  pos: string;
  rotate: number;
}

interface Scene {
  business: string;
  initial: string;
  avatar: string;
  stage: string;
  glow: string;
  label: string;
  messages: Msg[];
  chips: Chip[];
}

const SCENES: Record<string, Scene> = {
  ecommerce: {
    business: "Rang Ethnic Store",
    initial: "R",
    avatar: "linear-gradient(135deg,#e5527a,#b83261)",
    stage: "linear-gradient(145deg,#fbf6f7 0%,#f6e9ee 55%,#efdbe3 100%)",
    glow: "rgba(229,82,122,0.25)",
    label:
      "Example chat for an online store: an order confirmation template, a customer asks about exchanging for a different size, and the AI agent answers from the store's return policy",
    messages: [
      {
        kind: "template",
        header: "Order received",
        text: "Hi Priya, thank you for shopping with Rang Ethnic Store. We have received your order RG-10432 for ₹1,849.",
        time: "11:02",
        buttons: ["Track order"]
      },
      {
        kind: "in",
        text: "Can I exchange the kurta for size M if it doesn't fit?",
        time: "11:05"
      },
      {
        kind: "out",
        ai: true,
        text: "Yes! Exchanges are free within 7 days of delivery. Just reply here and we'll arrange a pickup.",
        time: "11:05"
      }
    ],
    chips: [
      {
        text: "Order update sent",
        icon: CheckCheck,
        color: "#1aa64e",
        pos: "left-[-50px] max-sm:left-[-34px] top-[-20px]",
        rotate: -3
      },
      {
        text: "AI agent replied",
        icon: Bot,
        color: "#0f3a2c",
        pos: "right-[-50px] max-sm:right-[-34px] bottom-[-22px]",
        rotate: 3
      },
      {
        text: "Tagged: kurta buyer",
        icon: Tag,
        color: "#b83261",
        pos: "left-[-60px] max-sm:left-[-40px] bottom-[16px]",
        rotate: -3
      }
    ]
  },
  education: {
    business: "Bright Minds Academy",
    initial: "B",
    avatar: "linear-gradient(135deg,#9b6fd6,#7a4cc0)",
    stage: "linear-gradient(145deg,#f8f6fc 0%,#eee8f8 55%,#e3daf3 100%)",
    glow: "rgba(122,76,192,0.25)",
    label:
      "Example chat for a coaching institute: a parent asks about coaching, a chatbot sends a menu of courses, the parent picks JEE 2027, and a counsellor takes over",
    messages: [
      {
        kind: "in",
        text: "Hi, I want details for JEE coaching for my son.",
        time: "21:14"
      },
      {
        kind: "list",
        text: "Hi! Which course would you like to know about?",
        time: "21:14",
        options: ["JEE 2027", "NEET 2027", "Foundation (Class 9–10)"]
      },
      { kind: "tap", text: "JEE 2027", time: "21:15" },
      {
        kind: "out",
        from: "Counsellor Anjali",
        text: "Thanks! I'll share the batch timings and fees for Andheri. Is a call tomorrow at 11 okay?",
        time: "09:02"
      }
    ],
    chips: [
      {
        text: "Menu chatbot",
        icon: List,
        color: "#7a4cc0",
        pos: "right-[-44px] max-sm:right-[-30px] top-[-20px]",
        rotate: 4
      },
      {
        text: "Course: JEE 2027",
        icon: Tag,
        color: "#1aa64e",
        pos: "left-[-60px] max-sm:left-[-40px] bottom-[16px]",
        rotate: -3
      },
      {
        text: "Assigned to Anjali",
        icon: UserCheck,
        color: "#0f3a2c",
        pos: "right-[-50px] max-sm:right-[-34px] bottom-[-22px]",
        rotate: 3
      }
    ]
  },
  "real-estate": {
    business: "Urban Nest Realty",
    initial: "U",
    avatar: "linear-gradient(135deg,#e0a82e,#c58a0b)",
    stage: "linear-gradient(145deg,#fbf9f3 0%,#f5eedc 55%,#ede1c4 100%)",
    glow: "rgba(197,138,11,0.25)",
    label:
      "Example chat for a real estate team: a buyer messages from a Click-to-WhatsApp ad for 2 and 3 BHK homes, a chatbot asks their budget, they choose 80 lakh to 1.2 crore, and an agent takes over",
    messages: [
      {
        kind: "ad",
        title: "From your ad",
        sub: "2 & 3 BHK in Whitefield"
      },
      {
        kind: "in",
        text: "Hi, what's the price of the 3 BHK?",
        time: "18:40"
      },
      {
        kind: "list",
        text: "Happy to help! What's your budget?",
        time: "18:40",
        options: ["Under ₹80L", "₹80L – ₹1.2Cr", "Above ₹1.2Cr"]
      },
      { kind: "tap", text: "₹80L – ₹1.2Cr", time: "18:41" },
      {
        kind: "out",
        from: "Agent Rohan",
        text: "We have 3 options in that range. Shall I book a site visit on Saturday?",
        time: "18:47"
      }
    ],
    chips: [
      {
        text: "From Click-to-WhatsApp ad",
        icon: Megaphone,
        color: "#2f6fd6",
        pos: "left-[-56px] max-sm:left-[-36px] top-[-20px]",
        rotate: -3
      },
      {
        text: "Budget: ₹80L–1.2Cr",
        icon: Tag,
        color: "#c58a0b",
        pos: "right-[-62px] max-sm:right-[-40px] bottom-[16px]",
        rotate: 3
      },
      {
        text: "Assigned to Rohan",
        icon: UserCheck,
        color: "#0f3a2c",
        pos: "left-[-50px] max-sm:left-[-34px] bottom-[-22px]",
        rotate: -3
      }
    ]
  },
  healthcare: {
    business: "CareFirst Clinic",
    initial: "C",
    avatar: "linear-gradient(135deg,#17a6b5,#0f7f95)",
    stage: "linear-gradient(145deg,#f4fafb 0%,#e3f2f4 55%,#d2e9ed 100%)",
    glow: "rgba(15,127,149,0.25)",
    label:
      "Example chat for a clinic: an appointment reminder template with Confirm and Reschedule buttons, the patient taps Confirm, and the clinic replies",
    messages: [
      {
        kind: "template",
        header: "Appointment reminder",
        text: "Hi Meera, this is a reminder of your appointment with Dr. Sharma tomorrow, 12 Dec at 10:30 AM at CareFirst Clinic, Salt Lake.",
        time: "17:00",
        buttons: ["Confirm", "Reschedule"]
      },
      { kind: "tap", text: "Confirm", time: "17:12" },
      {
        kind: "out",
        from: "Reception",
        text: "Thank you, Meera. See you tomorrow. Please bring your previous reports.",
        time: "17:14"
      }
    ],
    chips: [
      {
        text: "Reminder sent",
        icon: CalendarCheck,
        color: "#0f7f95",
        pos: "right-[-44px] max-sm:right-[-30px] top-[-20px]",
        rotate: 4
      },
      {
        text: "Confirmed with one tap",
        icon: Check,
        color: "#1aa64e",
        pos: "left-[-56px] max-sm:left-[-38px] bottom-[-22px]",
        rotate: -3
      },
      {
        text: "Reception replied",
        icon: UserCheck,
        color: "#0f3a2c",
        pos: "left-[-50px] max-sm:left-[-34px] top-[-20px]",
        rotate: 3
      }
    ]
  }
};

const Bubble = ({ msg }: { msg: Msg }) => {
  if (msg.kind === "ad")
    return (
      <div
        className="shrink-0 self-center w-[88%] rounded-xl px-3 py-2 flex items-center gap-2"
        style={{ background: "#ffffff", border: "1px solid #dfe5e2" }}
      >
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#e8f0fc", color: "#2f6fd6" }}
        >
          <Megaphone className="w-3.5 h-3.5" />
        </span>
        <span className="min-w-0 leading-tight">
          <span
            className="block text-[10px] font-semibold"
            style={{ color: "#2f6fd6" }}
          >
            {msg.title}
          </span>
          <span
            className="block text-[11.5px] font-semibold truncate"
            style={{ color: "#111b21" }}
          >
            {msg.sub}
          </span>
        </span>
      </div>
    );
  if (msg.kind === "in" || msg.kind === "tap")
    return (
      <div
        className="shrink-0 self-start max-w-[82%] rounded-xl rounded-tl-[4px] px-2.5 py-1.5 text-[12px] leading-[1.4]"
        style={{
          background: "#ffffff",
          color: "#111b21",
          boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
        }}
      >
        {msg.kind === "tap" && (
          <span
            className="flex items-center gap-1 text-[10px] font-semibold mb-0.5"
            style={{ color: "#027eb5" }}
          >
            <Reply className="w-3 h-3" /> Tapped
          </span>
        )}
        <span>{msg.text}</span>
        <span
          className="block text-right text-[9.5px] mt-0.5"
          style={{ color: "#667781" }}
        >
          {msg.time}
        </span>
      </div>
    );
  const green = {
    background: "#d9fdd3",
    boxShadow: "0 1px 1px rgba(11,20,26,0.1)",
    color: "#111b21"
  };
  const meta = (time: string) => (
    <span
      className="flex items-center justify-end gap-1 text-[9.5px] mt-0.5"
      style={{ color: "#667781" }}
    >
      {time}
      <CheckCheck className="w-3.5 h-3.5" style={{ color: "#53bdeb" }} />
    </span>
  );
  if (msg.kind === "out")
    return (
      <div
        className="shrink-0 self-end max-w-[84%] rounded-xl rounded-tr-[4px] px-2.5 py-1.5 text-[12px] leading-[1.4]"
        style={green}
      >
        {(msg.ai || msg.from) && (
          <span
            className="flex items-center gap-1 text-[10px] font-semibold mb-0.5"
            style={{ color: "#0c7d38" }}
          >
            {msg.ai ? <Bot className="w-3 h-3" /> : null}
            {msg.ai ? "Whatching AI" : msg.from}
          </span>
        )}
        <span>{msg.text}</span>
        {meta(msg.time)}
      </div>
    );
  if (msg.kind === "template")
    return (
      <div
        className="shrink-0 self-end w-[86%] rounded-xl rounded-tr-[4px] overflow-hidden"
        style={green}
      >
        <div className="px-2.5 pt-2 pb-1.5 text-[12px] leading-[1.4]">
          {msg.header && <p className="font-semibold mb-0.5">{msg.header}</p>}
          <p>{msg.text}</p>
          {meta(msg.time)}
        </div>
        {msg.buttons.map((b) => (
          <div
            key={b}
            className="flex items-center justify-center gap-1 py-1.5 border-t text-[11.5px] font-semibold"
            style={{ borderColor: "rgba(11,20,26,0.08)", color: "#027eb5" }}
          >
            {b === "Track order" ? (
              <ExternalLink className="w-3 h-3" />
            ) : (
              <Reply className="w-3 h-3" />
            )}{" "}
            {b}
          </div>
        ))}
      </div>
    );
  return (
    <div
      className="shrink-0 self-end w-[86%] rounded-xl rounded-tr-[4px] overflow-hidden"
      style={green}
    >
      <div className="px-2.5 pt-2 pb-1.5 text-[12px] leading-[1.4]">
        <p>{msg.text}</p>
        {meta(msg.time)}
      </div>
      <div className="border-t" style={{ borderColor: "rgba(11,20,26,0.08)" }}>
        {msg.options.map((o) => (
          <div
            key={o}
            className="flex items-center justify-between px-2.5 py-1.5 text-[11.5px] border-t first:border-t-0"
            style={{ borderColor: "rgba(11,20,26,0.06)" }}
          >
            <span>{o}</span>
            <span
              className="w-3 h-3 rounded-full"
              style={{ border: "1.5px solid #8696a0" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryPhone = ({ slug }: { slug: string }) => {
  const scene = SCENES[slug];
  if (!scene) return null;
  return (
    <div
      className={`${styles.heroStage} relative overflow-hidden rounded-[32px]`}
      style={{
        background: scene.stage,
        border: "1px solid rgba(10,18,14,0.06)"
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,18,14,0.12) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "linear-gradient(to right, #000, transparent 55%)",
          maskImage: "linear-gradient(to right, #000, transparent 55%)"
        }}
      />
      <div
        className={`${styles.heroZoom} relative mx-auto my-11`}
        style={{ width: 300, height: 610 }}
        role="img"
        aria-label={scene.label}
      >
        <span
          aria-hidden
          className="absolute left-[8%] right-[-6%] bottom-[-26px] h-[46px] rounded-[50%]"
          style={{ background: scene.glow, filter: "blur(28px)" }}
        />
        <div
          className="absolute inset-0 rounded-[48px] p-[10px]"
          style={{
            background: "linear-gradient(145deg,#232d3a,#0f1620)",
            boxShadow:
              "0 40px 70px -30px rgba(8,40,24,0.45), inset 0 0 0 1.5px #3a4656"
          }}
        >
          <div
            className="relative h-full rounded-[38px] overflow-hidden flex flex-col"
            style={{ background: "#efeae2" }}
          >
            <div
              className="relative h-[34px] shrink-0 px-6 flex items-end justify-between pb-1 text-[11px] font-semibold bg-white"
              style={{ color: "#0b1210" }}
            >
              <span>9:41</span>
              <span
                className="absolute left-1/2 -translate-x-1/2 top-[8px] w-[86px] h-[24px] rounded-full"
                style={{ background: "#05080c" }}
              />
              <span className="flex items-center gap-1">
                <Wifi className="w-3 h-3" strokeWidth={2.6} />
                <span
                  className="inline-block w-[20px] h-[10px] rounded-[3px]"
                  style={{ background: "#0b1210" }}
                />
              </span>
            </div>
            <div
              className="h-[50px] shrink-0 px-2.5 flex items-center gap-2 bg-white border-b"
              style={{ borderColor: "rgba(10,18,14,0.08)" }}
            >
              <ChevronLeft
                className="w-[20px] h-[20px]"
                style={{ color: "#0b1210" }}
              />
              <span
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[12px] font-bold text-white shrink-0"
                style={{ background: scene.avatar }}
              >
                {scene.initial}
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span
                  className="flex items-center gap-1 text-[13px] font-semibold truncate"
                  style={{ color: "#0b1210" }}
                >
                  {scene.business}
                </span>
                <span
                  className="block text-[10.5px]"
                  style={{ color: "#667781" }}
                >
                  Business account
                </span>
              </span>
              <Video
                className="w-[18px] h-[18px]"
                style={{ color: "#0b1210" }}
              />
              <Phone
                className="w-[16px] h-[16px]"
                style={{ color: "#0b1210" }}
              />
            </div>
            <div
              className={`${styles.chat} flex-1 min-h-0 px-3 py-3 flex flex-col justify-end gap-2 overflow-hidden`}
            >
              {scene.messages.map((m, i) => (
                <Bubble key={i} msg={m} />
              ))}
            </div>
            <div className="h-[48px] shrink-0 px-2.5 flex items-center bg-transparent">
              <div
                className="flex-1 h-[34px] rounded-full bg-white px-3.5 flex items-center text-[12px]"
                style={{ color: "#8a9791" }}
              >
                Message
              </div>
            </div>
          </div>
        </div>

        {scene.chips.map((c) => (
          <span
            key={c.text}
            className={`${c.pos} absolute z-10 inline-flex items-center gap-2 rounded-2xl whitespace-nowrap font-bold text-[14px] pl-2 pr-4 py-2`}
            style={{
              background: "#ffffff",
              color: "#0b1210",
              transform: `rotate(${c.rotate}deg)`,
              boxShadow:
                "0 18px 38px -12px rgba(8,40,24,0.4), 0 2px 8px rgba(8,40,24,0.1)"
            }}
          >
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white"
              style={{ background: c.color }}
            >
              <c.icon className="w-3.5 h-3.5" strokeWidth={2.6} />
            </span>
            {c.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IndustryPhone;
