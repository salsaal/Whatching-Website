import React, { useEffect, useId, useState } from "react";
import {
  BarChart3,
  Bot,
  Building2,
  CalendarDays,
  ChevronDown,
  Contact,
  Instagram,
  Megaphone,
  MessagesSquare,
  Palmtree,
  Sailboat,
  Settings,
  Sunset
} from "lucide-react";
import styles from "./product.module.css";
import { useInViewPlay } from "./useInViewPlay";

// The analytics screen for Wanderly Travels in September, drawn as the app:
// a slim sidebar, a header, four totals and four panels. Plain counts only.
// The chart answers to the pointer (a tooltip per day) and its legend turns
// each channel on or off. Below about 768px the three lower panels become
// tabs so the picture stays short on phones.
//
// Meta's charges use the India rates in lib/data/pricing.ts: Marketing
// ₹0.8631, Utility and Authentication ₹0.1150, Service ₹0.1150 after the
// first 1,000 a month. Summer Escape keeps the numbers used on the
// Broadcasts card elsewhere on the site.

export type AnalyticsPanel = "channels" | "ads" | "broadcasts" | "charges";
type TabPanel = Exclude<AnalyticsPanel, "channels">;

const fmt = (n: number) => n.toLocaleString("en-IN");
const delay = (seconds: number, extra: React.CSSProperties = {}) =>
  ({ "--d": `${seconds}s`, ...extra }) as React.CSSProperties;

// Conversations per day, 1 to 30 September. The Summer Escape broadcast
// went out on the 12th; an Instagram reel did well on the 22nd.
const whatsapp = [
  22, 26, 24, 29, 27, 18, 16, 25, 28, 27, 31, 74, 58, 37, 34, 38, 41, 39, 44,
  30, 28, 45, 47, 49, 46, 52, 36, 33, 51, 55
];
const instagram = [
  8, 10, 9, 12, 11, 14, 13, 9, 11, 10, 12, 13, 15, 14, 11, 12, 13, 12, 16, 18,
  17, 41, 33, 22, 19, 18, 21, 24, 20, 19
];
const DAYS = whatsapp.length;
const sum = (a: number[]) => a.reduce((t, v) => t + v, 0);

const SERIES = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    color: "#169f49",
    values: whatsapp,
    total: sum(whatsapp)
  },
  {
    key: "instagram",
    label: "Instagram",
    color: "#d6249f",
    values: instagram,
    total: sum(instagram)
  }
] as const;
type SeriesKey = (typeof SERIES)[number]["key"];

// 1 September 2026 is a Tuesday.
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayLabel = (i: number) => `${WEEKDAYS[(2 + i) % 7]} ${i + 1} Sep`;

const W = 600;
const H = 200;
const Y_MAX = 80;
const px = (i: number) => (i / (DAYS - 1)) * W;
const py = (v: number) => H - (v / Y_MAX) * (H - 6);
const linePath = (vals: readonly number[]) =>
  "M" +
  vals.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" L");
const areaPath = (vals: readonly number[]) =>
  `${linePath(vals)} L${W},${H} L0,${H} Z`;

const broadcasts = [
  {
    name: "Summer Escape",
    date: "12 Sep",
    sent: 2483,
    delivered: 2431,
    read: 1862,
    replied: 318,
    clicks: 656
  },
  {
    name: "Weekend in Goa",
    date: "26 Sep",
    sent: 1312,
    delivered: 1287,
    read: 941,
    replied: 126,
    clicks: 289
  },
  {
    name: "Kerala monsoon",
    date: "3 Sep",
    sent: 1140,
    delivered: 1118,
    read: 802,
    replied: 97,
    clicks: 214
  }
];

const ads = [
  {
    name: "Thailand · 25% off",
    chats: 168,
    icon: Palmtree,
    bg: "linear-gradient(135deg,#f6a21a,#e8553a)"
  },
  {
    name: "Bali honeymoons",
    chats: 97,
    icon: Sunset,
    bg: "linear-gradient(135deg,#f08a3c,#d6336c)"
  },
  {
    name: "Dubai long weekend",
    chats: 52,
    icon: Building2,
    bg: "linear-gradient(135deg,#2a9fd8,#5b5fd6)"
  },
  {
    name: "Kerala houseboats",
    chats: 24,
    icon: Sailboat,
    bg: "linear-gradient(135deg,#1fb37a,#0f7a6c)"
  }
];
const adChats = sum(ads.map((a) => a.chats));
const maxAd = Math.max(...ads.map((a) => a.chats));

const marketing = sum(broadcasts.map((b) => b.sent));
const charges = [
  {
    label: "Marketing",
    count: marketing,
    amount: marketing * 0.8631,
    color: "#169f49"
  },
  {
    label: "Service",
    count: 1210,
    amount: (1210 - 1000) * 0.115,
    color: "#5fbf87",
    note: "1,000 free"
  },
  { label: "Utility", count: 312, amount: 312 * 0.115, color: "#a6dbbd" },
  { label: "Authentication", count: 96, amount: 96 * 0.115, color: "#cfeadb" }
];
const chargeTotal = sum(charges.map((c) => c.amount));
const messageTotal = sum(charges.map((c) => c.count));
const rupees = (n: number) =>
  "₹" +
  n.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const tiles = [
  {
    label: "Conversations",
    value: fmt(SERIES[0].total + SERIES[1].total),
    sub: "On both channels"
  },
  {
    label: "Chats from ads",
    value: fmt(adChats),
    sub: `From ${ads.length} ads`
  },
  {
    label: "Button clicks",
    value: fmt(sum(broadcasts.map((b) => b.clicks))),
    sub: `Across ${broadcasts.length} broadcasts`
  },
  {
    label: "Meta charges",
    value: "₹" + fmt(Math.round(chargeTotal)),
    sub: `For ${fmt(messageTotal)} messages`
  }
];

const rail = [
  MessagesSquare,
  Megaphone,
  Bot,
  Instagram,
  Contact,
  BarChart3
] as const;

const MARKER: Record<AnalyticsPanel, number> = {
  channels: 1,
  ads: 2,
  broadcasts: 3,
  charges: 4
};

const TABS: { id: TabPanel; label: string }[] = [
  { id: "broadcasts", label: "Broadcasts" },
  { id: "ads", label: "Ads" },
  { id: "charges", label: "Meta charges" }
];

const muted = "#7d8b85";
const line = "#e6ebe8";

const Panel = ({
  id,
  title,
  sub,
  right,
  focus,
  markers,
  className = "",
  children
}: {
  id: AnalyticsPanel;
  title: string;
  sub?: string;
  right?: React.ReactNode;
  focus?: AnalyticsPanel | null;
  markers?: boolean;
  className?: string;
  children: React.ReactNode;
}) => (
  <section
    className={`min-w-0 rounded-xl bg-white p-3.5 @lg:p-4 transition-[opacity,box-shadow] duration-300 ${className}`}
    style={{
      border: `1px solid ${line}`,
      opacity: focus && focus !== id ? 0.35 : 1,
      boxShadow:
        focus === id
          ? "0 0 0 2px #169f49, 0 14px 32px -14px rgba(22,159,73,0.45)"
          : "0 1px 2px rgba(10,18,14,0.04)"
    }}
  >
    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 mb-3">
      <div className="min-w-0">
        <p
          className="flex items-center gap-1.5 text-[13px] font-semibold"
          style={{ color: "#0b1210" }}
        >
          {markers && (
            <span
              className="w-[18px] h-[18px] rounded-full grid place-items-center text-[10.5px] font-bold text-white shrink-0"
              style={{ background: "#169f49" }}
              aria-hidden
            >
              {MARKER[id]}
            </span>
          )}
          {title}
        </p>
        {sub && (
          <p className="text-[11.5px] mt-0.5" style={{ color: muted }}>
            {sub}
          </p>
        )}
      </div>
      {right}
    </div>
    {children}
  </section>
);

const ChannelChart = ({
  focus,
  markers
}: {
  focus?: AnalyticsPanel | null;
  markers?: boolean;
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [shown, setShown] = useState<Record<SeriesKey, boolean>>({
    whatsapp: true,
    instagram: true
  });
  const [hover, setHover] = useState<number | null>(null);
  const visible = SERIES.filter((s) => shown[s.key]);

  const toggle = (k: SeriesKey) =>
    setShown((s) => {
      const next = { ...s, [k]: !s[k] };
      return next.whatsapp || next.instagram ? next : s;
    });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const f = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
    setHover(Math.round(f * (DAYS - 1)));
  };

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const step = e.key === "ArrowLeft" ? -1 : 1;
    setHover((h) =>
      Math.min(Math.max((h ?? (step > 0 ? -1 : DAYS)) + step, 0), DAYS - 1)
    );
  };

  const pct = hover === null ? 0 : (px(hover) / W) * 100;

  return (
    <Panel
      id="channels"
      title="Conversations"
      sub="Per day, by channel"
      focus={focus}
      markers={markers}
      right={
        <div className="flex gap-1.5">
          {SERIES.map((s) => (
            <button
              key={s.key}
              type="button"
              aria-pressed={shown[s.key]}
              onClick={() => toggle(s.key)}
              className="inline-flex items-center gap-1.5 h-7 px-2 rounded-md text-[11.5px] font-medium transition-opacity hover:bg-[#f6f8f7]"
              style={{
                border: `1px solid ${line}`,
                color: "#26332d",
                opacity: shown[s.key] ? 1 : 0.45
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: s.color }}
                aria-hidden
              />
              {s.label}
              <span className="font-semibold tabular-nums">{fmt(s.total)}</span>
            </button>
          ))}
        </div>
      }
    >
      <div className="relative pl-7">
        <div
          className="relative h-[150px] @lg:h-[172px] @3xl:h-[188px] outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-[#169f49] cursor-crosshair"
          style={{ touchAction: "pan-y" }}
          tabIndex={0}
          aria-label="Conversations per day. Use the left and right arrow keys to read each day."
          onPointerMove={onMove}
          onPointerDown={onMove}
          onPointerLeave={() => setHover(null)}
          onBlur={() => setHover(null)}
          onKeyDown={onKey}
        >
          {[0, 20, 40, 60, 80].map((v) => (
            <span
              key={v}
              className="absolute left-0 right-0 border-t"
              style={{
                top: `${(py(v) / H) * 100}%`,
                borderColor: v === 0 ? "#dfe5e2" : "#f0f3f1"
              }}
            >
              <span
                className="absolute -left-7 w-5 -translate-y-1/2 text-right text-[10px] tabular-nums"
                style={{ color: "#9aa6a0" }}
                aria-hidden
              >
                {v}
              </span>
            </span>
          ))}

          <div
            className={`${styles.wipe} absolute inset-0`}
            style={delay(0.35)}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              aria-hidden
            >
              <defs>
                {SERIES.map((s) => (
                  <linearGradient
                    key={s.key}
                    id={`${uid}-${s.key}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor={s.color}
                      stopOpacity={s.key === "whatsapp" ? 0.2 : 0.12}
                    />
                    <stop offset="1" stopColor={s.color} stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>
              {visible.map((s) => (
                <g key={s.key}>
                  <path d={areaPath(s.values)} fill={`url(#${uid}-${s.key})`} />
                  <path
                    d={linePath(s.values)}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}
            </svg>
          </div>

          {hover !== null && (
            <>
              <span
                className="absolute top-0 bottom-0 w-px pointer-events-none"
                style={{ left: `${pct}%`, background: "#c5cfca" }}
              />
              {visible.map((s) => (
                <span
                  key={s.key}
                  className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    left: `${pct}%`,
                    top: `${(py(s.values[hover]) / H) * 100}%`,
                    background: s.color,
                    boxShadow: "0 0 0 2px #fff, 0 1px 4px rgba(0,0,0,0.25)"
                  }}
                />
              ))}
              <div
                className="absolute top-0 z-10 rounded-lg px-2.5 py-2 text-[11.5px] whitespace-nowrap pointer-events-none"
                style={{
                  left: `${pct}%`,
                  transform:
                    pct > 55
                      ? "translateX(calc(-100% - 12px))"
                      : "translateX(12px)",
                  background: "#0b1210",
                  color: "#fff",
                  boxShadow: "0 10px 24px -8px rgba(11,18,16,0.45)"
                }}
                role="status"
              >
                <p className="font-semibold mb-1">{dayLabel(hover)}</p>
                {visible.map((s) => (
                  <p key={s.key} className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: s.color }}
                      aria-hidden
                    />
                    {s.label}
                    <span className="ml-auto pl-4 font-semibold tabular-nums">
                      {s.values[hover]}
                    </span>
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
        <div
          className="flex justify-between text-[10.5px] mt-1.5"
          style={{ color: "#9aa6a0" }}
          aria-hidden
        >
          {["1 Sep", "8 Sep", "15 Sep", "22 Sep", "30 Sep"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </Panel>
  );
};

const AnalyticsVisual = ({
  focus = null,
  markers = false
}: {
  focus?: AnalyticsPanel | null;
  markers?: boolean;
}) => {
  const play = useInViewPlay<HTMLElement>(0.25);
  const [tab, setTab] = useState<TabPanel>("broadcasts");

  // When a panel is pointed out from outside, make sure it is the one
  // showing on narrow screens.
  useEffect(() => {
    if (focus && focus !== "channels") setTab(focus);
  }, [focus]);

  const tabbed = (id: TabPanel) =>
    `${tab === id ? "block" : "hidden"} @3xl:block`;

  return (
    <figure
      {...play}
      className={`${styles.frame} @container w-full max-w-[1040px] mx-auto text-left`}
      aria-label="Example of the Whatching analytics screen for a travel agency in September: conversations per day on WhatsApp and Instagram, chats from Click-to-WhatsApp ads, results for three broadcasts, and what Meta charged by message category"
    >
      <div className="flex">
        <aside
          className="hidden @3xl:flex w-[56px] shrink-0 flex-col items-center gap-1 py-3 bg-white"
          style={{ borderRight: `1px solid ${line}` }}
          aria-hidden
        >
          <span
            className="w-8 h-8 rounded-[10px] grid place-items-center text-[15px] font-bold text-white mb-3"
            style={{ background: "#169f49" }}
          >
            W
          </span>
          {rail.map((Icon, i) => {
            const active = i === rail.length - 1;
            return (
              <span
                key={i}
                className="w-9 h-9 rounded-[10px] grid place-items-center"
                style={
                  active
                    ? { background: "#e7f5ec", color: "#12843d" }
                    : { color: "#93a19a" }
                }
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.9} />
              </span>
            );
          })}
          <span
            className="mt-auto w-9 h-9 grid place-items-center"
            style={{ color: "#93a19a" }}
          >
            <Settings className="w-[18px] h-[18px]" strokeWidth={1.9} />
          </span>
        </aside>

        <div className="min-w-0 flex-1" style={{ background: "#f6f8f7" }}>
          <header
            className="flex items-center justify-between gap-3 px-4 @lg:px-5 h-14 bg-white"
            style={{ borderBottom: `1px solid ${line}` }}
          >
            <div className="min-w-0">
              <p
                className="text-[15px] font-bold leading-tight"
                style={{ color: "#0b1210" }}
              >
                Analytics
              </p>
              <p className="text-[11.5px] truncate" style={{ color: muted }}>
                Wanderly Travels
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-[12px] font-medium"
                style={{ border: `1px solid ${line}`, color: "#26332d" }}
              >
                <CalendarDays className="w-3.5 h-3.5" aria-hidden />1 – 30 Sep
                <ChevronDown
                  className="w-3.5 h-3.5"
                  style={{ color: muted }}
                  aria-hidden
                />
              </span>
              <span
                className="hidden @md:grid w-8 h-8 rounded-full place-items-center text-[11px] font-bold text-white"
                style={{
                  background: "linear-gradient(135deg,#1aa3c2,#0c6f8f)"
                }}
                aria-hidden
              >
                WT
              </span>
            </div>
          </header>

          <div className="p-2.5 @md:p-3 @lg:p-4 grid gap-2.5 @lg:gap-3">
            <div
              className="grid grid-cols-2 @3xl:grid-cols-4 gap-2.5 @lg:gap-3 transition-opacity duration-300"
              style={{ opacity: focus ? 0.35 : 1 }}
            >
              {tiles.map((t, i) => (
                <div
                  key={t.label}
                  className={`${styles.in} rounded-xl bg-white px-3.5 py-3`}
                  style={delay(0.05 + i * 0.07, {
                    "--dy": "8px",
                    border: `1px solid ${line}`,
                    boxShadow: "0 1px 2px rgba(10,18,14,0.04)"
                  } as React.CSSProperties)}
                >
                  <p
                    className="text-[11.5px] font-medium"
                    style={{ color: muted }}
                  >
                    {t.label}
                  </p>
                  <p
                    className="text-[22px] @lg:text-[26px] font-bold leading-tight mt-0.5 tracking-tight tabular-nums"
                    style={{ color: "#0b1210" }}
                  >
                    {t.value}
                  </p>
                  <p
                    className="text-[11px] mt-0.5 truncate"
                    style={{ color: "#9aa6a0" }}
                  >
                    {t.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid @3xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-2.5 @lg:gap-3">
              <ChannelChart focus={focus} markers={markers} />

              <div
                className="@3xl:hidden flex rounded-lg p-0.5 text-[12px] font-semibold"
                style={{ background: "#e9eeeb" }}
              >
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className="flex-1 h-8 rounded-md transition-colors"
                    style={
                      tab === t.id
                        ? {
                            background: "#fff",
                            color: "#0b1210",
                            boxShadow: "0 1px 2px rgba(10,18,14,0.1)"
                          }
                        : { color: "#57685f" }
                    }
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <Panel
                id="ads"
                title="Chats from ads"
                sub="Click-to-WhatsApp ads"
                focus={focus}
                markers={markers}
                className={tabbed("ads")}
                right={
                  <span
                    className="text-[15px] font-bold tabular-nums"
                    style={{ color: "#0b1210" }}
                  >
                    {fmt(adChats)}
                  </span>
                }
              >
                <ul className="grid gap-3.5">
                  {ads.map((a, i) => (
                    <li key={a.name} className="flex items-center gap-2.5">
                      <span
                        className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                        style={{ background: a.bg }}
                        aria-hidden
                      >
                        <a.icon
                          className="w-4 h-4 text-white"
                          strokeWidth={2}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-2 text-[12.5px]">
                          <span
                            className="truncate font-medium"
                            style={{ color: "#26332d" }}
                          >
                            {a.name}
                          </span>
                          <span
                            className="font-semibold tabular-nums"
                            style={{ color: "#0b1210" }}
                          >
                            {a.chats}
                          </span>
                        </span>
                        <span
                          className="block h-1.5 rounded-full mt-1.5 overflow-hidden"
                          style={{ background: "#eef2f0" }}
                        >
                          <span
                            className={`${styles.growx} block h-full rounded-full`}
                            style={delay(0.5 + i * 0.08, {
                              width: `${(a.chats / maxAd) * 100}%`,
                              background: "#169f49"
                            })}
                          />
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel
                id="broadcasts"
                title="Broadcasts"
                sub={`${broadcasts.length} sent in September`}
                focus={focus}
                markers={markers}
                className={tabbed("broadcasts")}
              >
                <table className="w-full text-[12px] tabular-nums">
                  <thead>
                    <tr style={{ color: muted }}>
                      <th className="text-left font-medium pb-2">Broadcast</th>
                      <th className="text-right font-medium pb-2 pl-2">Sent</th>
                      <th className="hidden @xl:table-cell text-right font-medium pb-2 pl-2">
                        Delivered
                      </th>
                      <th className="text-right font-medium pb-2 pl-2">Read</th>
                      <th className="hidden @xl:table-cell text-right font-medium pb-2 pl-2">
                        Replied
                      </th>
                      <th className="text-right font-medium pb-2 pl-2">
                        Clicks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {broadcasts.map((b) => (
                      <tr
                        key={b.name}
                        className="transition-colors hover:bg-[#f6faf7]"
                        style={{ borderTop: `1px solid ${line}` }}
                      >
                        <td className="py-2 pr-2">
                          <span
                            className="block font-semibold"
                            style={{ color: "#0b1210" }}
                          >
                            {b.name}
                          </span>
                          <span
                            className="block text-[11px]"
                            style={{ color: "#9aa6a0" }}
                          >
                            {b.date}
                          </span>
                        </td>
                        <td
                          className="text-right pl-2"
                          style={{ color: "#26332d" }}
                        >
                          {fmt(b.sent)}
                        </td>
                        <td
                          className="hidden @xl:table-cell text-right pl-2"
                          style={{ color: "#26332d" }}
                        >
                          {fmt(b.delivered)}
                        </td>
                        <td
                          className="text-right pl-2"
                          style={{ color: "#26332d" }}
                        >
                          {fmt(b.read)}
                        </td>
                        <td
                          className="hidden @xl:table-cell text-right pl-2"
                          style={{ color: "#26332d" }}
                        >
                          {fmt(b.replied)}
                        </td>
                        <td
                          className="text-right pl-2 font-semibold"
                          style={{ color: "#12843d" }}
                        >
                          {fmt(b.clicks)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Panel>

              <Panel
                id="charges"
                title="Meta charges"
                sub="By message category"
                focus={focus}
                markers={markers}
                className={tabbed("charges")}
                right={
                  <span
                    className="text-[15px] font-bold tabular-nums"
                    style={{ color: "#0b1210" }}
                  >
                    {rupees(chargeTotal)}
                  </span>
                }
              >
                <div
                  className={`${styles.growx} flex h-2 rounded-full overflow-hidden gap-[2px]`}
                  style={delay(0.6)}
                  aria-hidden
                >
                  {charges.map((c) => (
                    <span
                      key={c.label}
                      style={{
                        width: `${(c.count / messageTotal) * 100}%`,
                        background: c.color
                      }}
                    />
                  ))}
                </div>
                <ul className="mt-3 grid gap-2 text-[12px] tabular-nums">
                  {charges.map((c) => (
                    <li key={c.label} className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: c.color }}
                        aria-hidden
                      />
                      <span
                        className="font-medium"
                        style={{ color: "#26332d" }}
                      >
                        {c.label}
                      </span>
                      <span className="truncate" style={{ color: "#9aa6a0" }}>
                        {fmt(c.count)} msgs{c.note ? ` · ${c.note}` : ""}
                      </span>
                      <span
                        className="ml-auto font-semibold"
                        style={{ color: "#0b1210" }}
                      >
                        {rupees(c.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <p
              className="text-right text-[10.5px] px-1"
              style={{ color: "#9aa6a0" }}
            >
              Illustrative figures
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default AnalyticsVisual;
