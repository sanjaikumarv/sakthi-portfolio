"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"genai" | "vision">("genai");
  const [streamingIndex, setStreamingIndex] = useState(0);

  const streamTokens = [
    "POST /v1/chat/stream",
    "→ Auth passed: session_id='conv_8492'",
    "→ Model router: selected Groq::Qwen3.6-27B",
    "→ Retrieving context: SQLAlchemy persistent history",
    "→ Generating token stream: [200 OK]",
    '"Synthesizing response for multimodal doc analysis..."',
    "→ Stream completed (59/59 automated tests passed)",
  ];

  const visionSteps = [
    "POST /v1/attendance/verify",
    "→ Ingest image frame (OpenCV quality check: OK)",
    "→ Single-face validation: 1 face detected",
    "→ InsightFace model loaded in thread pool",
    "→ Extract 512-D normalized vector embedding",
    "→ Cosine similarity computed against MongoDB: 0.942",
    "→ Verification Status: [VERIFIED_AUTHORIZED]",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStreamingIndex((prev) => (prev < 6 ? prev + 1 : 0));
    }, 1800);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl glass-panel border border-white/10 p-1 shadow-2xl shadow-blue-950/40">
      {/* Glow highlight */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#0c0f1a]/80 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            ai_runtime_daemon.py
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center p-0.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
          <button
            onClick={() => {
              setActiveTab("genai");
              setStreamingIndex(0);
            }}
            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-all ${
              activeTab === "genai"
                ? "bg-blue-600 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            LLM Stream
          </button>
          <button
            onClick={() => {
              setActiveTab("vision");
              setStreamingIndex(0);
            }}
            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-all ${
              activeTab === "vision"
                ? "bg-indigo-600 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Vision 512-D
          </button>
        </div>
      </div>

      {/* Code / Logs View */}
      <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2.5 min-h-[260px] bg-[#090b12]/90 rounded-b-xl overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-blue-400">
            <Zap className="w-3.5 h-3.5" />
            FastAPI Asynchronous Gateway
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Runtime: Healthy
          </span>
        </div>

        {/* Streaming Lines */}
        <div className="space-y-1.5 pt-1">
          {(activeTab === "genai" ? streamTokens : visionSteps).map((line, idx) => {
            const isVisible = idx <= streamingIndex;
            const isCurrent = idx === streamingIndex;
            return (
              <div
                key={idx}
                className={`transition-opacity duration-300 flex items-start gap-2 ${
                  isVisible ? "opacity-100" : "opacity-20"
                }`}
              >
                <span className="text-slate-600 select-none text-[10px] w-4 pt-0.5">
                  {idx + 1}
                </span>
                <span
                  className={`${
                    line.startsWith("POST")
                      ? "text-yellow-400 font-semibold"
                      : line.includes("VERIFIED") || line.includes("passed")
                      ? "text-emerald-400 font-semibold"
                      : line.startsWith('"')
                      ? "text-cyan-300 italic"
                      : "text-slate-300"
                  }`}
                >
                  {line}
                  {isCurrent && (
                    <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-1 translate-y-0.5 animate-pulse" />
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {/* Live Architecture Tags */}
        <div className="pt-4 mt-4 border-t border-white/[0.05] grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-center">
            <div className="text-slate-400">Orchestrator</div>
            <div className="text-blue-400 font-medium font-sans">
              {activeTab === "genai" ? "Groq API + FastAPI" : "FastAPI REST"}
            </div>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-center">
            <div className="text-slate-400">Engine / Model</div>
            <div className="text-cyan-400 font-medium font-sans">
              {activeTab === "genai" ? "Qwen3.6 / GPT-OSS" : "InsightFace 512D"}
            </div>
          </div>
          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-center">
            <div className="text-slate-400">Storage / State</div>
            <div className="text-indigo-400 font-medium font-sans">
              {activeTab === "genai" ? "SQLAlchemy + SQLite" : "MongoDB Vectors"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
