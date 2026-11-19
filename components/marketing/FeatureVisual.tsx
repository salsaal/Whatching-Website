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
  <div className="media-stage rounded-[28px] p-5 sm:p-8 flex items-center justify-center">
    <div className="relative w-full flex justify-center">{children}</div>
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
