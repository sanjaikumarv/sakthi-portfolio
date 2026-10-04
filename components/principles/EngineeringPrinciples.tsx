import React from "react";
import { Section } from "@/components/layout/Section";
import { engineeringPrinciples } from "@/data/principles";
import { ShieldCheck, Cpu, Database, Layout, CheckCircle2 } from "lucide-react";

const icons = [ShieldCheck, Cpu, Database, Layout];

export function EngineeringPrinciples() {
  return (
    <Section
      id="principles"
      badge="Engineering Standards"
      title="How I Engineer Systems"
      subtitle="Core principles prioritized when developing resilient AI systems, non-blocking inference, and high-concurrency microservices."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringPrinciples.map((principle, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={principle.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                    {principle.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {principle.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {principle.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {principle.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
