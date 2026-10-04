import React from "react";
import { Section } from "@/components/layout/Section";
import { skillGroups } from "@/data/skills";
import { SkillGroup } from "./SkillGroup";

export function Skills() {
  return (
    <Section
      id="skills"
      badge="Technical Expertise"
      title="Skills & Technologies"
      subtitle="Comprehensive breakdown of production competencies across Generative AI, computer vision, backend services, and web engineering."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
