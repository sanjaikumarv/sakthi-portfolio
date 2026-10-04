export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  badge: string;
  location: string;
  yearsOfExperience: string;
  summary: string;
  bioParagraphs: string[];
  social: SocialLinks;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string[];
  technologies: string[];
  features: string[];
  highlights: string[];
  architecture?: {
    flow: string[];
    description: string;
  };
  challenges?: string[];
  implementationDetails?: string[];
  results?: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
  modelOrInferenceInfo?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level?: "Production" | "Advanced" | "Proficient";
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear: string;
  grade: string;
  highlights?: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface AIWorkflowStep {
  step: number;
  title: string;
  role: string;
  technologies: string[];
  details: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  badge: string;
  description: string;
  points: string[];
}
