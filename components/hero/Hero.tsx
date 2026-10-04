"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  FileText,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow"
    >
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{profile.badge}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">{profile.yearsOfExperience} Exp</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building intelligent software with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Generative AI
              </span>
              .
            </h1>

            {/* Supporting Description from Resume */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Software Engineer specialized in building LLM-based applications
              using <span className="text-white font-medium">FastAPI</span> and{" "}
              <span className="text-white font-medium">Groq API</span>, featuring
              streaming tokens, conversational memory, document understanding, and
              multimodal reasoning. Also experienced in high-throughput computer vision
              and 50+ responsive production web interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get in Touch</span>
              </Link>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Key Stats Bar from Resume */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
