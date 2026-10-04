import React from "react";
import Link from "next/link";
import { Project } from "@/types/portfolio";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Bot,
  ScanFace,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Determine relevant icon
  const isGenAI = project.id.includes("genai");
  const isVision = project.id.includes("face");
  const ProjectIcon = isGenAI ? Bot : isVision ? ScanFace : Globe;

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1">
      {/* Visual Header / Banner */}
      <div className="relative p-6 sm:p-7 border-b border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-white/[0.05] overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

        <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
            <ProjectIcon className="w-6 h-6" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.category.map((cat, i) => (
              <span
                key={i}
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>

        {project.modelOrInferenceInfo && (
          <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{project.modelOrInferenceInfo}</span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* 2-3 Key Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Engineering Highlights:
            </div>
            <ul className="space-y-1.5">
              {project.highlights.slice(0, 3).map((hl, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-4 pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors group/link"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
