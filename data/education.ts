import { Education, Language } from "@/types/portfolio";

export const educationList: Education[] = [
  {
    id: "kgisl-itech",
    degree: "B.Tech — Bachelor of Technology",
    field: "Information Technology",
    institution: "KGISL Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    startYear: "2019",
    endYear: "2023",
    grade: "CGPA: 8.4 / 10",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
      "Graduated with Distinction (CGPA 8.4/10).",
      "Applied foundational computer science principles to Python backend architecture, machine learning inference, and web systems.",
    ],
  },
];

export const languagesList: Language[] = [
  { language: "English", proficiency: "Professional / Fluent" },
  { language: "Tamil", proficiency: "Native" },
];
