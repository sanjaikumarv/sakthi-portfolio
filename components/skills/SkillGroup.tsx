import React from "react";
import { SkillGroup as SkillGroupType } from "@/types/portfolio";
import { SkillBadge } from "./SkillBadge";
import {
  BrainCircuit,
  Cpu,
  ScanFace,
  Server,
  Layout,
  Database,
  Terminal,
} from "lucide-react";

interface SkillGroupProps {
  group: SkillGroupType;
}

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Cpu,
  ScanFace,
  Server,
  Layout,
  Database,
};

export function SkillGroup({ group }: SkillGroupProps) {
  const IconComponent = iconMap[group.iconName] || Terminal;

  return (
    <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <IconComponent className="w-4 h-4" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            {group.category}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
          {group.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
