import React from "react";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { AIStack } from "@/components/ai/AIStack";
import { AIWorkflow } from "@/components/ai/AIWorkflow";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { EngineeringPrinciples } from "@/components/principles/EngineeringPrinciples";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <AIStack />
      <AIWorkflow />
      <Experience />
      <Projects />
      <Skills />
      <EngineeringPrinciples />
      <Education />
      <Contact />
    </main>
  );
}
