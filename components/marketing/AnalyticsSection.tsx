import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BarChart3, MessageCircle, TrendingUp, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import { AppFrame, StatCard } from "./AppFrame";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const duration = 1000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

const segmentColors = ["#f59e0b", "var(--primary)", "#3b82f6", "#e0645d"];

const SegmentedBar = ({
  title,
  segments
}: {
  title: string;
  segments: { label: string; value: number; pct: number }[];
}) => (
  <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}>
    <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
      {title}
    </p>
    <div className="flex h-2.5 rounded-full overflow-hidden mb-3" style={{ background: "var(--background-secondary)" }}>
      {segments.map((s, i) => (
        <motion.div
          key={s.label}
          style={{ background: segmentColors[i % segmentColors.length] }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${s.pct}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
    <div className="space-y-1.5">
      {segments.map((s, i) => (
        <div key={s.label} className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: segmentColors[i % segmentColors.length] }} />
            {s.label}
          </span>
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
            {s.value} ({s.pct}%)
          </span>
        </div>
      ))}
    </div>
  </div>
);

const linePoints = [0, 45, 15, 60, 30, 55, 40, 65, 50, 70, 20, 100];
const buildPath = (points: number[], width: number, height: number) =>
  points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - (p / 100) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

const NewContactsChart = () => {
  const width = 400;
  const height = 90;
  const path = buildPath(linePoints, width, height);

  return (
    <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}>
      <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
        New contacts
      </p>
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Daily growth over the last 30 days
      </p>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-24" preserveAspectRatio="none">
        <motion.path
          d={`${path} L${width},${height} L0,${height} Z`}
          fill="var(--accent-wash)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
};

const funnelStages = [
  { label: "Recipients", value: 2483, pct: 100 },
  { label: "Sent", value: 2483, pct: 100 },
  { label: "Delivered", value: 2437, pct: 94 },
  { label: "Read", value: 1701, pct: 66 },
  { label: "Failed", value: 12, pct: 3 }
];

const BroadcastFunnel = () => (
  <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}>
    <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
      Broadcast funnel
    </p>
    <div className="space-y-2.5">
      {funnelStages.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3">
          <span className="text-xs w-20 shrink-0" style={{ color: "var(--text-muted)" }}>
            {s.label}
          </span>
          <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ background: "var(--background-secondary)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: s.label === "Failed" ? "#e0645d" : "var(--primary)", opacity: 1 - i * 0.12 }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            />
          </div>
          <span className="text-xs font-semibold w-12 text-right shrink-0" style={{ color: "var(--text-primary)" }}>
            {s.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const AnalyticsSection = () => (
  <section className="section-padding-large" id="analytics">
    <div className="container-wide">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Analytics"
          title="Know what's working. Scale what isn't."
          description="Delivery, engagement, leads and conversions — across WhatsApp and Instagram — in one dashboard. Figures shown are illustrative demo data."
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <AppFrame activeIndex={1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <StatCard icon={MessageCircle} label="Messages sent" value="48,210" />
            <StatCard icon={TrendingUp} label="Delivery rate" value="98%" />
            <StatCard icon={Users} label="Leads captured" value="1,284" />
            <StatCard icon={BarChart3} label="Conversions" value="342" />
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <SegmentedBar
              title="Conversation status"
              segments={[
                { label: "Open", value: 8, pct: 47 },
                { label: "Resolved", value: 9, pct: 53 }
              ]}
            />
            <SegmentedBar
              title="Bot vs agent"
              segments={[
                { label: "Bot", value: 178, pct: 88 },
                { label: "Agents", value: 17, pct: 8 },
                { label: "Broadcasts", value: 8, pct: 4 }
              ]}
            />
            <SegmentedBar
              title="Channel distribution"
              segments={[
                { label: "WhatsApp", value: 17, pct: 85 },
                { label: "Instagram", value: 3, pct: 15 }
              ]}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <NewContactsChart />
            <BroadcastFunnel />
          </div>
        </AppFrame>
      </Reveal>

      <Reveal delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto text-center">
        {[
          { label: "Read rate", value: 71, suffix: "%" },
          { label: "Click rate", value: 24, suffix: "%" },
          { label: "Replies", value: 6120, suffix: "" },
          { label: "Leads", value: 1284, suffix: "" }
        ].map((m) => (
          <div key={m.label}>
            <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
              <AnimatedNumber value={m.value} suffix={m.suffix} />
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {m.label}
            </p>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default AnalyticsSection;
