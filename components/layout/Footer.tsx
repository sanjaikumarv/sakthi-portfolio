import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Terminal, Heart } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080d] py-14 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-base font-bold text-white tracking-wide">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Generative AI Software Engineer building production LLM workflows,
              multimodal systems, FastAPI microservices, and responsive web platforms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/#about" className="hover:text-blue-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#ai-stack" className="hover:text-blue-400 transition-colors">
                  AI Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/#workflow" className="hover:text-blue-400 transition-colors">
                  AI Architecture Workflow
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-blue-400 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-blue-400 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-blue-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Specs */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Core Competencies
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>FastAPI + Groq Streaming</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Qwen Vision & GPT-OSS-20B</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>InsightFace 512D Embeddings</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Next.js Responsive Frontends</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>59 Automated Test Coverage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-medium">
              Available for GenAI & Backend Engineering Roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
