"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Sparkles, Filter } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Derive unique categories dynamically
  const categories = [
    "All",
    "Generative AI",
    "Computer Vision",
    "Frontend Engineering",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.some((c) =>
            c.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        );

  return (
    <Section
      id="projects"
      badge="Production Work & Systems"
      title="Featured Engineering Projects"
      subtitle="Deep-dive into production multimodal LLM applications, biometric verification microservices, and responsive client platforms."
    >
      <div className="space-y-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
