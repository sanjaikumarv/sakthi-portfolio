import { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "qube-space",
    company: "Qube Space LLP",
    role: "Software Engineer",
    location: "Coimbatore, Tamil Nadu",
    employmentType: "Full-time",
    startDate: "November 2024",
    endDate: "Present",
    current: true,
    description:
      "Engineering full-stack web applications and AI-driven microservices. Responsible for frontend web architecture in Next.js and backend AI microservices in Python for native mobile workflows.",
    responsibilities: [
      "Developed 50+ responsive web pages across education, sports, food, landing-page, and business domains using Next.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Built reusable frontend components and collaborated with developers and clients to deliver responsive web applications across desktop, tablet, and mobile.",
      "Built a Python-based face verification service for a native mobile employee attendance application, integrating AI-based identity verification into the check-in/check-out workflow.",
    ],
    achievements: [
      "Delivered over 50 responsive production web pages with consistent design and mobile parity.",
      "Successfully integrated real-time AI face verification into native mobile employee check-in/check-out flows.",
      "Architected clean, reusable frontend components that improved delivery speed across multiple domains.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "InsightFace",
      "ONNXRuntime",
      "OpenCV",
      "NumPy",
      "MongoDB",
      "Git",
    ],
  },
];
