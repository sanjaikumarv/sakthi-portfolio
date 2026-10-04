import React from "react";
import { Section } from "@/components/layout/Section";
import { educationList, languagesList } from "@/data/education";
import { GraduationCap, Calendar, Award, Languages, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      badge="Academic Foundation"
      title="Education & Languages"
      subtitle="Foundational computer science grounding in Information Technology and multilingual capabilities."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Details Card */}
        <div className="lg:col-span-2 space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-medium text-blue-400">
                      {edu.field}
                    </div>
                    <div className="text-sm text-slate-300">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Graduated {edu.endYear}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    {edu.grade}
                  </div>
                </div>
              </div>

              {edu.highlights && (
                <div className="space-y-2 pt-1">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Spoken Languages Card */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
                <span className="text-xs text-slate-400">Communication Proficiencies</span>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {languagesList.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-white">
                    {lang.language}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] text-xs text-slate-400 leading-relaxed">
            Effective technical collaboration across English-speaking international teams and regional partner stakeholders.
          </div>
        </div>
      </div>
    </Section>
  );
}
