import React from "react";
import type { VisualType } from "@/lib/data/features";
import BroadcastVisual from "./product/BroadcastVisual";
import FlowVisual from "./product/FlowVisual";
import AIAgentVisual from "./product/AIAgentVisual";
import InboxVisual from "./product/InboxVisual";
import AnalyticsVisual from "./product/AnalyticsVisual";
import InstagramPhone from "./InstagramPhone";

// The code-drawn product picture for a feature or industry page hero. The
// card-sized pictures sit on a soft stage so they fill the column.
const Stage = ({ children }: { children: React.ReactNode }) => (
  <div
    className="rounded-[28px] p-5 sm:p-8 flex items-center justify-center"
    style={{
      background:
        "radial-gradient(70% 60% at 80% 90%, rgba(34,197,94,0.22), rgba(34,197,94,0) 70%), linear-gradient(145deg, #f5faf6 0%, #e6f4ec 60%, #d8eee1 100%)",
      border: "1px solid rgba(22,159,73,0.12)"
    }}
  >
    {children}
  </div>
);

const FeatureVisual = ({ type }: { type: VisualType }) => {
  switch (type) {
    case "instagram-comment":
    case "instagram-dm":
    case "instagram-flow":
      return <InstagramPhone />;
    case "inbox":
      return (
        <Stage>
          <div className="w-full">
            <InboxVisual />
          </div>
        </Stage>
      );
    case "analytics":
      return (
        <Stage>
          <div className="w-full">
            <AnalyticsVisual />
          </div>
        </Stage>
      );
    case "ai":
      return (
        <Stage>
          <div className="w-full max-w-[420px] h-[460px]">
            <AIAgentVisual />
          </div>
        </Stage>
      );
    case "flow":
      return (
        <Stage>
          <div className="w-full max-w-[420px] h-[460px]">
            <FlowVisual />
          </div>
        </Stage>
      );
    default:
      return (
        <Stage>
          <div className="w-full max-w-[420px] h-[440px]">
            <BroadcastVisual />
          </div>
        </Stage>
      );
  }
};

export default FeatureVisual;
