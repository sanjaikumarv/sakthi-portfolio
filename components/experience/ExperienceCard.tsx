import React from "react";
import { Experience } from "@/types/portfolio";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Layers,
} from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group">
      {/* Vertical Timeline Rule */}
      <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[2px] bg-white/[0.08] group-last:hidden" />

      {/* Timeline Node Dot */}
      <div className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full bg-[#0a0d16] border-2 border-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      {/* Main Experience Card */}
      <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                {experience.employmentType}
              </span>
              {experience.current && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Current Role
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {experience.role}
            </h3>

            <div className="text-base font-semibold text-blue-400">
              {experience.company}
            </div>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {experience.startDate} — {experience.endDate}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Role Overview */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {experience.description}
        </p>

        {/* Key Responsibilities */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            Core Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements / Key Highlights */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Verified Accomplishments
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((ach, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Applied */}
        <div className="pt-4 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-slate-400 mb-2.5">
            Technologies Applied:
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
