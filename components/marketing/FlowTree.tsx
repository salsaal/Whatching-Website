import React from "react";
import { motion } from "framer-motion";

export interface FlowNode {
  label: string;
  type: string;
  child?: FlowNode;
}

const NodeBox = ({ node, accent, dim = false, full = false }: { node: FlowNode; accent: string; dim?: boolean; full?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4 }}
    className={`rounded-xl px-4 py-2.5 text-left shrink-0 ${full ? "w-full" : ""}`}
    style={{
      background: "var(--surface)",
      border: dim ? "1px solid var(--border-light)" : `1.5px solid ${accent}`,
      minWidth: full ? undefined : 148
    }}
  >
    <p className="text-[10px] font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
      {node.type}
    </p>
    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
      {node.label}
    </p>
  </motion.div>
);

const connectorStyle = (accent: string) => ({ background: accent, opacity: 0.5 });

export const FlowTree = ({
  root,
  branches,
  accent = "var(--primary)"
}: {
  root: FlowNode;
  branches: FlowNode[];
  accent?: string;
}) => (
  <>
    {/* Mobile — simple vertical stack, no branching lines to squeeze */}
    <div className="flex flex-col items-stretch sm:hidden">
      <NodeBox node={root} accent={accent} full />
      {branches.map((branch) => (
        <React.Fragment key={branch.label}>
          <div className="w-px h-5 mx-auto" style={connectorStyle(accent)} />
          <NodeBox node={branch} accent={accent} dim full />
          {branch.child && (
            <>
              <div className="w-px h-5 mx-auto" style={connectorStyle(accent)} />
              <NodeBox node={branch.child} accent={accent} full />
            </>
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Tablet / desktop — branching tree */}
    <div className="hidden sm:flex flex-col items-center py-2">
      <NodeBox node={root} accent={accent} />
      <div className="w-px h-5" style={connectorStyle(accent)} />

      <div className="relative flex justify-center w-full">
        {branches.length > 1 && (
          <div
            className="absolute top-0 h-px"
            style={{ ...connectorStyle(accent), left: `${100 / (branches.length * 2)}%`, right: `${100 / (branches.length * 2)}%` }}
          />
        )}
        <div className="flex gap-6 lg:gap-10 pt-0 flex-wrap justify-center">
          {branches.map((branch) => (
            <div key={branch.label} className="flex flex-col items-center">
              <div className="w-px h-5" style={connectorStyle(accent)} />
              <NodeBox node={branch} accent={accent} dim />
              {branch.child && (
                <>
                  <div className="w-px h-5" style={connectorStyle(accent)} />
                  <NodeBox node={branch.child} accent={accent} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default FlowTree;
