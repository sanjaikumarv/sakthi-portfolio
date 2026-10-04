import React from "react";
import { Section } from "@/components/layout/Section";
import {
  Sparkles,
  Zap,
  Cpu,
  Brain,
  Layers,
  FileCheck,
  Eye,
  Activity,
  ArrowRight,
} from "lucide-react";

interface TechPill {
  name: string;
  role: string;
  status: "Production" | "Integrated";
}

const aiStackGroups = [
  {
    category: "LLM & Foundation Model Routing",
    icon: Brain,
    description:
      "High-throughput model integration using Groq API for rapid streaming token generation.",
    items: [
      { name: "Groq API", role: "Ultra-low latency inference", status: "Production" },
      { name: "GPT-OSS-20B", role: "Open-source reasoning LLM", status: "Production" },
      { name: "Qwen3.6-27B", role: "Multimodal & vision understanding", status: "Production" },
      { name: "Prompt Engineering", role: "Structured directives & memory", status: "Production" },
    ] as TechPill[],
  },
  {
    category: "LLM Orchestration & Context",
    icon: Layers,
    description:
      "Stateful conversation memory, document parsing, and automatic title synthesis.",
    items: [
      { name: "Conversational Memory", role: "Multi-turn context persistence", status: "Production" },
      { name: "Streaming SSE", role: "Token-by-token HTTP streaming", status: "Production" },
      { name: "Document Processing", role: "PDF, TXT, DOCX ingestion", status: "Production" },
      { name: "Context Management", role: "Token budget & session bounds", status: "Production" },
      { name: "Model Routing", role: "Dynamic intent delegation", status: "Production" },
    ] as TechPill[],
  },
  {
    category: "Computer Vision & Embedding Engine",
    icon: Eye,
    description:
      "Biometric facial recognition, 512-D vector extraction, and cosine similarity matching.",
    items: [
      { name: "InsightFace", role: "Deep facial feature extraction", status: "Production" },
      { name: "512-D Embeddings", role: "High-dimensional vector representations", status: "Production" },
      { name: "ONNXRuntime", role: "Optimized graph model execution", status: "Production" },
      { name: "OpenCV & NumPy", role: "Quality validation & preprocessing", status: "Production" },
    ] as TechPill[],
  },
  {
    category: "System Reliability & Verification",
    icon: Activity,
    description:
      "Automated test suites, graceful upstream failure traps, and non-blocking worker pools.",
    items: [
      { name: "59 PyTest Tests", role: "Chat, history, vision & export suites", status: "Production" },
      { name: "Thread-Pool ML Workers", role: "Preventing async loop starvation", status: "Production" },
      { name: "API Failure Fallbacks", role: "Graceful timeout recovery", status: "Production" },
      { name: "Biometric Quality Checks", role: "Single-face & blur validation", status: "Production" },
    ] as TechPill[],
  },
];

export function AIStack() {
  return (
    <Section
      id="ai-stack"
      badge="Applied AI Stack"
      title="Production Generative AI & Vision Technologies"
      subtitle="The exact models, inference libraries, and LLM application frameworks verified in production and project environments."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiStackGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-2.5">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{item.name}</span>
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          {item.role}
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
