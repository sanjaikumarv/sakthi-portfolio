import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Trophy,
  Activity,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${profile.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-radial-glow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Featured Projects</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.category.map((cat, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-cyan-300 border border-blue-500/20"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/30"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs border border-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>

        {/* Metrics Bar if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl glass-panel border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                <div className="text-lg sm:text-xl font-bold text-cyan-300">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Overview */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        {/* Architecture & Flow */}
        {project.architecture && (
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                System Architecture & Data Flow
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                End-to-end data pipeline from client request to model inference.
              </p>
            </div>

            <div className="space-y-2.5">
              {project.architecture.flow.map((node, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-200"
                >
                  <span className="w-6 h-6 rounded-md bg-blue-500/20 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">
                    {i + 1}
                  </span>
                  <span>{node}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/[0.06]">
              {project.architecture.description}
            </p>
          </section>
        )}

        {/* Key Features */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            Key Capabilities & Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Engineering Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              Key Engineering Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-sm text-slate-300 leading-relaxed"
                >
                  <span className="font-semibold text-white block mb-1">
                    Challenge {i + 1}:
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Implementation Details */}
        {project.implementationDetails && project.implementationDetails.length > 0 && (
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-400" />
              Technical Implementation
            </h2>
            <ul className="space-y-3">
              {project.implementationDetails.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results & Verification */}
        {project.results && project.results.length > 0 && (
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              Results & Impact
            </h2>
            <ul className="space-y-2.5">
              {project.results.map((res, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technologies Integrated */}
        <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technologies & Frameworks
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <a
            href={`mailto:${profile.social.email}?subject=Inquiry regarding ${project.title}`}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            <span>Inquire About This Project</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </main>
  );
}
