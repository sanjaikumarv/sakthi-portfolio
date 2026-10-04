import { Profile } from "@/types/portfolio";
import { socialLinks } from "./social";

export const profile: Profile = {
  name: "Sakthi Sudharsini S",
  title: "Generative AI Software Engineer",
  badge: "Generative AI & Software Engineer",
  location: "Coimbatore, Tamil Nadu",
  yearsOfExperience: "1–2 Years",
  summary:
    "Software Engineer specialized in Python, Generative AI, LLM applications, and backend systems. Experienced in building streaming multimodal AI systems with FastAPI and Groq API, conversational memory, document processing, and computer vision services including face verification with InsightFace.",
  bioParagraphs: [
    "I am a Software Engineer focused on building practical, production-ready AI applications and scalable backend architectures. My core work centers on combining modern Python frameworks like FastAPI with state-of-the-art LLMs (GPT-OSS-20B, Qwen) via Groq API to deliver low-latency, streaming conversational assistants with persistent memory.",
    "Beyond language models, I develop computer vision microservices. In production, I engineered a high-throughput face verification service using InsightFace, ONNXRuntime, and OpenCV for mobile attendance workflows—optimizing inference through non-blocking thread pools and model selective loading.",
    "On the web frontend, I have built 50+ responsive production web pages using Next.js, React, and modern UI standards, creating cohesive, performant full-stack systems from user interface down to database persistence.",
  ],
  social: socialLinks,
  resumeUrl: "#contact", // direct anchor or mailto
  stats: [
    {
      label: "Responsive Pages",
      value: "50+",
      subtext: "Delivered across education, sports & business",
    },
    {
      label: "Automated Tests",
      value: "59",
      subtext: "Covering chat, history, vision & export in GenAI",
    },
    {
      label: "Embedding Dims",
      value: "512-D",
      subtext: "InsightFace vectors with cosine similarity",
    },
    {
      label: "Academic CGPA",
      value: "8.4 / 10",
      subtext: "B.Tech Information Technology, KGISL iTech",
    },
  ],
};
