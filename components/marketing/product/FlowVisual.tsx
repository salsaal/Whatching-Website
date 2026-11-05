import React from "react";
import {
  Check,
  GalleryHorizontalEnd,
  List,
  MessageCircle,
  Route,
  Sparkles,
  UserRound,
  Zap
} from "lucide-react";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The "Trip planner flow" from the product demo, on the flow canvas: blocks
// are dropped in one after another and joined, then the flow is published.
// Timeline (seconds): nodes at 0.4 + 0.8 each · publish at 4.7.
const NODE_START = 0.4;
const NODE_STEP = 0.8;
const PUBLISH = NODE_START + NODE_STEP * 5 + 0.3;

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

const blocks = [
  { icon: MessageCircle, label: "Message" },
  { icon: List, label: "List menu" },
  { icon: GalleryHorizontalEnd, label: "Carousel" },
  { icon: Sparkles, label: "AI reply" },
  { icon: UserRound, label: "Assign agent" }
];

const nodes = [
  { icon: Zap, type: "Trigger", title: "Taps “Plan my trip”" },
  { icon: List, type: "List menu", title: "Where to go?" },
  { icon: GalleryHorizontalEnd, type: "Carousel", title: "Thailand packages" },
  { icon: MessageCircle, type: "Message", title: "Booking request received" },
  { icon: UserRound, type: "Assign agent", title: "Hand to sales team" }
];

const FlowVisual = () => {
  const play = useInViewPlay<HTMLDivElement>();

  return (
    <div
      {...play}
      className={`${styles.frame} h-full flex flex-col`}
      role="img"
      aria-label="Whatching chatbot builder: the Trip planner flow, from a customer tapping Plan my trip, through a list menu, a carousel of Thailand packages and a booking confirmation message, to handing the chat to the sales team"
    >
      <div className="px-4 pt-3 pb-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Route
            className="w-4 h-4 shrink-0"
            style={{ color: "#169f49" }}
            aria-hidden
          />
          <p
            className="text-[14px] font-bold truncate"
            style={{ color: "#0b1210" }}
          >
            Trip planner flow
          </p>
          <span className="relative inline-block h-5 w-[44px] shrink-0 text-[10.5px] font-semibold">
            <span
              className={`${styles.out} absolute inset-0 inline-flex items-center justify-center rounded-full`}
              style={delay(PUBLISH, {
                background: "#f1f3f2",
                color: "#57685f"
              })}
            >
              Draft
            </span>
            <span
              className={`${styles.in} absolute inset-0 inline-flex items-center justify-center gap-1 rounded-full`}
              style={delay(PUBLISH, {
                background: "#e7f6ec",
                color: "#0c7d38"
              })}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#169f49" }}
              />{" "}
              Live
            </span>
          </span>
        </div>
        <span className="relative inline-block h-7 w-[92px] shrink-0 text-[11.5px] font-semibold">
          <span
            className={`${styles.out} absolute inset-0 inline-flex items-center justify-center rounded-lg text-white`}
            style={delay(PUBLISH, { background: "#169f49" })}
          >
            Publish
          </span>
          <span
            className={`${styles.in} absolute inset-0 inline-flex items-center justify-center gap-1 rounded-lg text-white`}
            style={delay(PUBLISH, { background: "#0f3d2e" })}
          >
            <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden />{" "}
            Published
          </span>
        </span>
      </div>

      <div
        className="px-4 pb-2.5 border-b"
        style={{ borderColor: "rgba(10,18,14,0.08)" }}
      >
        <p
          className="text-[9.5px] font-bold uppercase tracking-[0.1em] mb-1.5"
          style={{ color: "#8a9791" }}
        >
          Blocks
        </p>
        <div className="flex flex-wrap gap-1.5">
          {blocks.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-medium bg-white"
              style={{ border: "1px solid #e3e9e6", color: "#26332d" }}
            >
              <b.icon
                className="w-3 h-3"
                style={{ color: "#169f49" }}
                aria-hidden
              />{" "}
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex-1 px-4 py-3 flex flex-col justify-center"
        style={{
          backgroundColor: "#fafcfb",
          backgroundImage:
            "radial-gradient(rgba(10,18,14,0.13) 1px, transparent 1.1px)",
          backgroundSize: "14px 14px"
        }}
      >
        {nodes.map((node, i) => {
          const at = NODE_START + NODE_STEP * i;
          return (
            <React.Fragment key={node.type}>
              <div
                className={styles.in}
                style={delay(at, {
                  "--dy": "8px",
                  "--s": 0.97
                } as React.CSSProperties)}
              >
                <div
                  className={`${styles.tint} flex items-center gap-2.5 rounded-[10px] bg-white px-2.5 py-1.5`}
                  style={delay(PUBLISH, {
                    border: "1.5px solid #169f49",
                    boxShadow: "0 1px 2px rgba(10,18,14,0.06)"
                  })}
                >
                  <span
                    className="w-[26px] h-[26px] rounded-md flex items-center justify-center shrink-0"
                    style={{ background: "#e7f6ec", color: "#169f49" }}
                  >
                    <node.icon className="w-3.5 h-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span
                      className="block text-[9.5px] font-bold uppercase tracking-[0.09em] leading-tight"
                      style={{ color: "#667781" }}
                    >
                      {node.type}
                    </span>
                    <span
                      className="block text-[13px] font-semibold leading-tight mt-0.5 truncate"
                      style={{ color: "#0b1210" }}
                    >
                      {node.title}
                    </span>
                  </span>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="h-[13px] flex justify-center" aria-hidden>
                  <span
                    className={`${styles.grow} block w-[2px] h-full rounded-full`}
                    style={delay(at + 0.4, { background: "#169f49" })}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FlowVisual;
