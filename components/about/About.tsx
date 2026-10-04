import React from "react";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";
import {
  BrainCircuit,
  Server,
  ScanFace,
  Code2,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

const aboutCards = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    badge: "LLM & Multimodal",
    description:
      "Engineered streaming conversational assistants with Groq API, GPT-OSS-20B, and Qwen vision models. Focused on context management, conversational memory, and document understanding.",
    tech: "FastAPI · Groq API · Qwen Vision · SQLAlchemy",
  },
  {
    icon: ScanFace,
    title: "Computer Vision & Inference",
    badge: "Biometrics & Performance",
    description:
      "Built a production face verification microservice with InsightFace, generating 512-D embeddings. Optimized throughput by moving inference into thread pools and tuning model loading.",
    tech: "InsightFace · ONNXRuntime · OpenCV · NumPy",
  },
  {
    icon: Server,
    title: "Software Engineering",
    badge: "APIs & Persistence",
    description:
      "Designed robust backend APIs in FastAPI with comprehensive automated testing (59 automated tests covering chat, documents, vision, and export) and persistent relational/document databases.",
    tech: "FastAPI · SQLite · MongoDB · PyTest",
  },
  {
    icon: Code2,
    title: "Frontend Architecture",
    badge: "Production Delivery",
    description:
      "Built 50+ responsive production web pages across education, sports, food, and enterprise domains with Next.js, React, and modular reusable component architectures.",
    tech: "Next.js · React.js · TypeScript · CSS3",
  },
];

export function About() {
  return (
    <Section
      id="about"
      badge="Background & Approach"
      title="Practical Software Engineer building AI Systems"
      subtitle="Combining state-of-the-art Generative AI models with clean backend microservices and responsive web platforms."
    >
      <div className="space-y-12">
        {/* Bio Text & Location */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">{profile.name}</span>
              <span className="text-slate-500">—</span>
              <span className="text-slate-400">{profile.title}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{profile.location}, India</span>
            </div>
          </div>

          <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            {profile.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* 4 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                  <span className="text-slate-500">Tech:</span>
                  <span>{card.tech}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
