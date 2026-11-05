import React from "react";
import {
  CalendarDays,
  CheckCheck,
  MousePointerClick,
  Send
} from "lucide-react";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The analytics dashboard, with the same Summer Escape numbers as the
// Broadcasts card. Plain counts only. Meta's charges are the real India
// per-message rates (Marketing ₹0.8631, Utility and Authentication ₹0.1150,
// Service free for the first 1,000 a month) applied to these counts.
// Timeline (seconds): tiles 0.2 + 0.18 each · chart 1.0 · bars 1.2 · total 3.1.
const T = {
  tile: 0.2,
  tileStep: 0.18,
  chart: 1.0,
  bars: 1.2,
  barStep: 0.15,
  foot: 3.1
};

const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

const tiles = [
  { icon: Send, label: "Messages sent", value: "2,483", iconColor: "#57685f" },
  {
    icon: CheckCheck,
    label: "Delivered",
    value: "2,431",
    iconColor: "#57685f"
  },
  { icon: CheckCheck, label: "Read", value: "1,862", iconColor: "#53bdeb" },
  {
    icon: MousePointerClick,
    label: "Button clicks",
    value: "656",
    iconColor: "#169f49"
  }
];

const categories = [
  { label: "Marketing", count: 2483, color: "#169f49" },
  { label: "Utility", count: 312, color: "#52b97f" },
  { label: "Service", count: 540, color: "#8fd3ab" },
  { label: "Authentication", count: 96, color: "#0f3d2e" }
];
const maxCount = Math.max(...categories.map((c) => c.count));

const volume = [
  30, 38, 35, 41, 37, 33, 46, 50, 58, 52, 52, 53, 50, 63, 69, 70, 75, 67, 67,
  75, 77, 85, 90, 83, 87, 81, 84, 96, 99, 100
];
const W = 600;
const H = 200;
const points = volume.map((v, i) => [
  (i / (volume.length - 1)) * W,
  H - 12 - (v / 100) * (H - 36)
]);
const linePath =
  "M" + points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L");
const areaPath = `${linePath} L${W},${H} L0,${H} Z`;

const AnalyticsVisual = () => {
  const play = useInViewPlay<HTMLDivElement>(0.3);

  return (
    <div
      {...play}
      className={`${styles.frame} w-full max-w-5xl mx-auto`}
      role="img"
      aria-label="Whatching analytics dashboard: 2,483 messages sent, 2,431 delivered, 1,862 read and 656 button clicks, a daily conversation volume chart for the last 30 days, and message volume by category with what Meta charged"
    >
      <div className="px-4 sm:px-5 pt-4 pb-3 flex items-center justify-between gap-3">
        <p className="text-[15px] font-bold" style={{ color: "#0b1210" }}>
          Analytics
        </p>
        <span
          className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-lg text-[11.5px] font-medium"
          style={{ border: "1px solid #dfe6e2", color: "#26332d" }}
        >
          <CalendarDays className="w-3.5 h-3.5" aria-hidden /> Last 30 days
        </span>
      </div>

      <div className="px-4 sm:px-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
        {tiles.map((tile, i) => (
          <div
            key={tile.label}
            className={`${styles.in} rounded-xl px-3.5 py-3`}
            style={delay(T.tile + i * T.tileStep, {
              "--dy": "8px",
              background: "#f4fbf6",
              border: "1px solid #cfeadb"
            } as React.CSSProperties)}
          >
            <p
              className="flex items-center gap-1.5 text-[11.5px] font-medium"
              style={{ color: "#57685f" }}
            >
              <tile.icon
                className="w-3.5 h-3.5"
                style={{ color: tile.iconColor }}
                aria-hidden
              />{" "}
              {tile.label}
            </p>
            <p
              className="text-[24px] sm:text-[28px] font-bold leading-tight mt-1 tracking-tight"
              style={{ color: "#0f3d2e" }}
            >
              {tile.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-4 sm:px-5 py-4 grid md:grid-cols-[1.45fr_1fr] gap-x-8 gap-y-6">
        <div className="min-w-0">
          <p
            className="text-[12.5px] font-semibold mb-2"
            style={{ color: "#57685f" }}
          >
            Daily conversation volume
          </p>
          <div className="relative h-[150px] sm:h-[190px]">
            {[0.25, 0.5, 0.75].map((f) => (
              <span
                key={f}
                className="absolute left-0 right-0 border-t"
                style={{ top: `${f * 100}%`, borderColor: "#eef1ef" }}
              />
            ))}
            <div
              className={`${styles.wipe} absolute inset-0`}
              style={delay(T.chart)}
            >
              <svg
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="wv-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#169f49" stopOpacity="0.22" />
                    <stop offset="1" stopColor="#169f49" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#wv-area)" />
                <path
                  d={linePath}
                  fill="none"
                  stroke="#169f49"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          <div
            className="flex justify-between text-[10.5px] mt-1.5"
            style={{ color: "#8a9791" }}
          >
            {["1 Sep", "8 Sep", "15 Sep", "22 Sep", "30 Sep"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex flex-col">
          <p
            className="text-[12.5px] font-semibold mb-2.5"
            style={{ color: "#57685f" }}
          >
            Message volume by category
          </p>
          <div className="flex flex-col gap-2.5">
            {categories.map((c, i) => (
              <div
                key={c.label}
                className="grid grid-cols-[88px_1fr_44px] sm:grid-cols-[96px_1fr_48px] items-center gap-2.5 text-[12px]"
              >
                <span style={{ color: "#57685f" }}>{c.label}</span>
                <span
                  className="h-[14px] rounded-full overflow-hidden"
                  style={{ background: "#f1f3f2" }}
                >
                  <span
                    className={`${styles.growx} block h-full rounded-full`}
                    style={delay(T.bars + i * T.barStep, {
                      width: `${Math.max((c.count / maxCount) * 100, 3)}%`,
                      background: c.color
                    })}
                  />
                </span>
                <span
                  className="text-right font-semibold tabular-nums"
                  style={{ color: "#0b1210" }}
                >
                  {c.count.toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
          <div
            className={`${styles.in} mt-4 md:mt-auto flex items-center justify-between rounded-xl px-3.5 py-2.5`}
            style={delay(T.foot, {
              "--dy": "6px",
              background: "#f4fbf6",
              border: "1px solid #cfeadb"
            } as React.CSSProperties)}
          >
            <span
              className="text-[12px] font-medium"
              style={{ color: "#57685f" }}
            >
              Meta charges
            </span>
            <span
              className="text-[16px] font-bold"
              style={{ color: "#0f3d2e" }}
            >
              ₹2,190
            </span>
          </div>
        </div>
      </div>

      <p
        className="px-4 sm:px-5 pb-3 text-right text-[10.5px]"
        style={{ color: "#8a9791" }}
      >
        Illustrative figures
      </p>
    </div>
  );
};

export default AnalyticsVisual;
