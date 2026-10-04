import React from "react";
import { Section } from "@/components/layout/Section";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <Section
      id="experience"
      badge="Career Progression"
      title="Professional Work Experience"
      subtitle="Demonstrated track record of delivering responsive full-stack applications and high-performance AI services."
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </Section>
  );
}
