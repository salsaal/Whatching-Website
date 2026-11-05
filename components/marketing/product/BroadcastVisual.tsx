import React from "react";
import {
  Check,
  CheckCheck,
  ExternalLink,
  MousePointerClick,
  Reply,
  Send,
  Eye
} from "lucide-react";
import TravelPhoto from "./TravelPhoto";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The "Summer Escape" broadcast from the product demo: the approved
// summer_escape template goes out, ticks turn from sent to delivered to read,
// the counts fill in, and a customer taps "Plan my trip".
// Timeline (seconds): send 0.5 · delivered 1.9 · read 2.9 · tap 3.8.
const T = { send: 0.5, delivered: 1.9, read: 2.9, tap: 3.8 };

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

const stats = [
  { icon: CheckCheck, label: "Delivered", value: "2,431", at: T.delivered },
  { icon: Eye, label: "Read", value: "1,862", at: T.read },
  {
    icon: MousePointerClick,
    label: "Button clicks",
    value: "656",
    at: T.tap + 0.3
  }
];

const BroadcastVisual = () => {
  const play = useInViewPlay<HTMLDivElement>();

  return (
    <div
      {...play}
      className={`${styles.frame} h-full flex flex-col`}
      role="img"
      aria-label="Whatching broadcast “Summer Escape”: the approved summer_escape template sent to 2,483 travel leads, with delivered, read and button click counts"
    >
      <div className="px-4 pt-3 pb-2.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className="text-[10.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "#667781" }}
          >
            Broadcast
          </p>
          <p
            className="text-[15px] font-bold leading-tight mt-0.5"
            style={{ color: "#0b1210" }}
          >
            Summer Escape
          </p>
        </div>
        <div className="relative h-6 shrink-0 text-[11px] font-semibold">
          <span
            className={`${styles.out} absolute right-0 top-0 inline-flex items-center h-6 px-2.5 rounded-full whitespace-nowrap`}
            style={delay(T.send, { background: "#f1f3f2", color: "#57685f" })}
          >
            Scheduled
          </span>
          <span
            className={`${styles.out} absolute right-0 top-0`}
            style={delay(T.delivered)}
          >
            <span
              className={`${styles.in} inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full whitespace-nowrap`}
              style={delay(T.send, { background: "#fff6e0", color: "#8a5a00" })}
            >
              <Send className="w-3 h-3" aria-hidden /> Sending
            </span>
          </span>
          <span
            className={`${styles.in} relative inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full whitespace-nowrap`}
            style={delay(T.delivered, {
              background: "#e7f6ec",
              color: "#0c7d38"
            })}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#169f49" }}
            />{" "}
            Live · 2,483 sent
          </span>
        </div>
      </div>

      <div className="px-4 pb-2.5 flex flex-wrap gap-1.5 text-[10.5px] font-semibold">
        <span
          className="inline-flex items-center h-5 px-2 rounded-md tracking-[0.04em]"
          style={{ background: "#eef2ff", color: "#3b5bdb" }}
        >
          MARKETING
        </span>
        <span
          className="inline-flex items-center gap-1 h-5 px-2 rounded-md"
          style={{ background: "#e7f6ec", color: "#0c7d38" }}
        >
          <Check className="w-3 h-3" strokeWidth={3} aria-hidden /> Approved by
          Meta
        </span>
        <span
          className="inline-flex items-center h-5 px-2 rounded-md"
          style={{ background: "#f1f3f2", color: "#57685f" }}
        >
          summer_escape
        </span>
      </div>

      <div
        className={`${styles.chat} flex-1 px-3 py-2.5 flex justify-end items-center`}
      >
        <div
          className={`${styles.in} w-[88%] rounded-xl rounded-tr-[4px] overflow-hidden`}
          style={delay(T.send, {
            "--dy": "14px",
            background: "#d9fdd3",
            boxShadow: "0 1px 1px rgba(11,20,26,0.1)"
          } as React.CSSProperties)}
        >
          <div className="p-1">
            <div
              className="rounded-lg overflow-hidden"
              style={{ aspectRatio: "240 / 84" }}
            >
              <TravelPhoto className="block w-full h-full" />
            </div>
          </div>
          <div className="px-2.5 pt-1 pb-1.5 text-[12.5px] leading-[1.45]">
            <p>
              Hi <strong>Aarav</strong>, ready for your next escape? Book this
              week and save <strong>25%</strong> on our Thailand and Bali
              packages.
            </p>
            <div className="flex items-end justify-between gap-2 mt-1">
              <span className="text-[10.5px]" style={{ color: "#667781" }}>
                Reply STOP to unsubscribe
              </span>
              <span
                className="inline-flex items-center gap-1 text-[10.5px] shrink-0"
                style={{ color: "#667781" }}
              >
                10:00
                <span className="relative inline-block w-4 h-4">
                  <Check
                    className={`${styles.out} absolute inset-0 w-4 h-4`}
                    style={delay(T.delivered)}
                    strokeWidth={2.4}
                    aria-hidden
                  />
                  <CheckCheck
                    className={`${styles.in} absolute inset-0 w-4 h-4`}
                    style={delay(T.delivered)}
                    strokeWidth={2.4}
                    aria-hidden
                  />
                  <CheckCheck
                    className={`${styles.in} absolute inset-0 w-4 h-4`}
                    style={delay(T.read, { color: "#53bdeb" })}
                    strokeWidth={2.4}
                    aria-hidden
                  />
                </span>
              </span>
            </div>
          </div>
          <div
            className="text-[12.5px] font-semibold"
            style={{ color: "#027eb5" }}
          >
            <div
              className={`${styles.press} flex items-center justify-center gap-1.5 py-1.5 border-t`}
              style={delay(T.tap, { borderColor: "rgba(11,20,26,0.08)" })}
            >
              <Reply className="w-3.5 h-3.5" aria-hidden /> Plan my trip
            </div>
            <div
              className="flex items-center justify-center gap-1.5 py-1.5 border-t"
              style={{ borderColor: "rgba(11,20,26,0.08)" }}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden /> View packages
            </div>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 border-t"
        style={{ borderColor: "rgba(10,18,14,0.08)" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="px-3 py-2.5"
            style={
              i > 0
                ? { borderLeft: "1px solid rgba(10,18,14,0.08)" }
                : undefined
            }
          >
            <p
              className="flex items-center gap-1 text-[10.5px] font-medium whitespace-nowrap"
              style={{ color: "#667781" }}
            >
              <s.icon className="w-3 h-3 shrink-0" aria-hidden /> {s.label}
            </p>
            <p
              className="relative text-[16px] font-bold mt-0.5 h-6"
              style={{ color: "#0b1210" }}
            >
              <span
                className={`${styles.out} absolute left-0 top-0`}
                style={delay(s.at, { color: "#c4ccc8" })}
              >
                —
              </span>
              <span
                className={`${styles.in} absolute left-0 top-0`}
                style={delay(s.at, { "--dy": "4px" } as React.CSSProperties)}
              >
                {s.value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BroadcastVisual;
