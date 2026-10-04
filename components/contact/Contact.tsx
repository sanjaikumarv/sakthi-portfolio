"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import {
  Mail,
  Copy,
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Section
      id="contact"
      badge="Direct Outreach"
      title="Let's build something intelligent."
      subtitle="Currently open to discussing Generative AI, LLM application engineering, and backend microservice opportunities."
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden space-y-10">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Intro row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Challenges
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {profile.name}
              </h3>
              <p className="text-sm text-slate-300 max-w-lg">
                Whether you need a dedicated Generative AI engineer to architect LLM
                streaming pipelines, or optimize high-throughput computer vision
                services—let&apos;s connect.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{profile.location}, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between space-y-4 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={copyEmail}
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono">Email Directly</div>
                <div className="text-sm font-semibold text-white truncate">
                  {socialLinks.email}
                </div>
              </div>

              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium hover:text-cyan-300 transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between space-y-4 hover:border-blue-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <LinkedinIcon className="w-4 h-4" />
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono">Professional Network</div>
                <div className="text-sm font-semibold text-white">LinkedIn</div>
              </div>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium hover:text-cyan-300 transition-colors"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between space-y-4 hover:border-blue-500/30 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <GithubIcon className="w-4 h-4" />
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono">Source Repositories</div>
                <div className="text-sm font-semibold text-white">GitHub</div>
              </div>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-medium hover:text-cyan-300 transition-colors"
              >
                <span>Browse Code</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
