import React from "react";
import { SkillItem } from "@/types/portfolio";

interface SkillBadgeProps {
  skill: SkillItem;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
        skill.highlight
          ? "bg-blue-500/10 text-cyan-300 border border-blue-500/25 shadow-sm shadow-blue-500/10"
          : "bg-white/[0.04] text-slate-300 border border-white/[0.07] hover:border-white/20"
      }`}
    >
      {skill.highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      )}
      <span>{skill.name}</span>
      {skill.level && (
        <span
          className={`text-[9px] uppercase px-1 py-0.2 rounded font-sans ${
            skill.level === "Production"
              ? "bg-blue-600/30 text-blue-300"
              : "bg-white/10 text-slate-400"
          }`}
        >
          {skill.level}
        </span>
      )}
    </div>
  );
}
