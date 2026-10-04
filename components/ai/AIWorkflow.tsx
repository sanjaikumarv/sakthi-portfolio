"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { aiWorkflowSteps } from "@/data/ai-workflow";
import {
  MessageSquare,
  Shield,
  Database,
  Cpu,
  Zap,
  Radio,
  ArrowRight,
  Info,
  CheckCircle,
} from "lucide-react";

const stepIcons = [
  MessageSquare,
  Shield,
  Database,
  Cpu,
  Zap,
  Radio,
];

export function AIWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = aiWorkflowSteps[activeStep];
  const CurrentIcon = stepIcons[activeStep] || Zap;

  return (
    <Section
      id="workflow"
      badge="System Architecture"
      title="End-to-End AI Application Flow"
      subtitle="Interactive architectural blueprint showing how multimodal queries, context memory, and fast model routing interact in production."
    >
      <div className="space-y-8">
        {/* Step Navigation Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {aiWorkflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Zap;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? "bg-blue-600/15 border-blue-500 shadow-md shadow-blue-500/20"
                    : "glass-panel hover:bg-white/[0.04] border-white/10"
                }`}
              >
                {/* Active indicator dot */}
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                )}

                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isSelected
                        ? "bg-blue-500 text-white"
                        : "bg-white/[0.06] text-slate-400"
                    }`}
                  >
                    0{step.step}
                  </div>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-cyan-400" : "text-slate-500"
                    }`}
                  />
                </div>

                <div>
                  <div
                    className={`text-xs font-bold truncate ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {step.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Detailed Node Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Left description */}
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-blue-400 tracking-wider">
                    Stage 0{current.step} Architecture Node
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {current.title} — {current.role}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.details}
              </p>

              {/* Technologies Involved in this stage */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 block mb-2 font-mono">
                  Integrated Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-cyan-300 border border-blue-500/25 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Flow Visualization & Control */}
            <div className="w-full lg:w-72 shrink-0 p-5 rounded-xl bg-black/40 border border-white/10 space-y-4 font-mono text-xs">
              <div className="text-slate-400 flex items-center justify-between pb-2 border-b border-white/[0.08]">
                <span>Pipeline Stage</span>
                <span className="text-blue-400">
                  {current.step} / {aiWorkflowSteps.length}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Latency Target:</span>
                  <span className="text-emerald-400">&lt; 350ms to first token</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Concurrency:</span>
                  <span className="text-cyan-400">Thread-Pool Offloaded</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Validation:</span>
                  <span className="text-amber-400">Schema & Image Quality</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-white/[0.05] hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={activeStep === aiWorkflowSteps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(aiWorkflowSteps.length - 1, prev + 1)
                    )
                  }
                  className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next Node
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
