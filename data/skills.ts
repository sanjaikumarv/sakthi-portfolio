import { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "genai-llm",
    category: "Generative AI & LLM Systems",
    description:
      "Production-focused LLM application engineering, streaming architectures, and prompt design.",
    iconName: "BrainCircuit",
    skills: [
      { name: "LLMs & Architecture", level: "Production", highlight: true },
      { name: "Prompt Engineering", level: "Production", highlight: true },
      { name: "Groq API", level: "Production", highlight: true },
      { name: "Multimodal AI", level: "Production", highlight: true },
      { name: "Vision AI", level: "Production", highlight: true },
      { name: "Image Generation", level: "Advanced" },
      { name: "Conversational Memory", level: "Production", highlight: true },
      { name: "Streaming Responses (SSE)", level: "Production", highlight: true },
      { name: "Document Processing (PDF/DOCX)", level: "Production" },
      { name: "Context Management", level: "Production" },
      { name: "Model Routing", level: "Advanced" },
    ],
  },
  {
    id: "ai-models",
    category: "AI Models & Inference",
    description:
      "Integrating, testing, and routing open-source and commercial foundation models.",
    iconName: "Cpu",
    skills: [
      { name: "GPT-OSS-20B", level: "Production", highlight: true },
      { name: "Qwen3.6-27B (Vision)", level: "Production", highlight: true },
      { name: "ONNXRuntime", level: "Production", highlight: true },
      { name: "Inference Thread-Pool Tuning", level: "Production" },
      { name: "Selective Weight Loading", level: "Advanced" },
    ],
  },
  {
    id: "computer-vision",
    category: "Computer Vision & Biometrics",
    description:
      "Identity verification, high-dimensional facial embeddings, and image processing pipelines.",
    iconName: "ScanFace",
    skills: [
      { name: "InsightFace", level: "Production", highlight: true },
      { name: "Face Detection", level: "Production", highlight: true },
      { name: "512-D Face Embeddings", level: "Production", highlight: true },
      { name: "Face Verification", level: "Production", highlight: true },
      { name: "Cosine Similarity Matching", level: "Production" },
      { name: "OpenCV", level: "Production", highlight: true },
      { name: "NumPy", level: "Production" },
    ],
  },
  {
    id: "backend",
    category: "Backend & API Engineering",
    description:
      "High-concurrency asynchronous microservices, REST APIs, and database orchestration.",
    iconName: "Server",
    skills: [
      { name: "Python", level: "Production", highlight: true },
      { name: "FastAPI", level: "Production", highlight: true },
      { name: "REST APIs", level: "Production", highlight: true },
      { name: "Uvicorn", level: "Production" },
      { name: "SQLAlchemy", level: "Production", highlight: true },
      { name: "PyMongo", level: "Production" },
      { name: "Automated Testing (59 Tests)", level: "Production" },
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Web Architecture",
    description:
      "Responsive, accessible web interfaces and component modularity.",
    iconName: "Layout",
    skills: [
      { name: "Next.js", level: "Production", highlight: true },
      { name: "React.js", level: "Production", highlight: true },
      { name: "TypeScript", level: "Production", highlight: true },
      { name: "JavaScript", level: "Production" },
      { name: "HTML5 & CSS3", level: "Production" },
      { name: "Bootstrap 5", level: "Production" },
      { name: "Responsive Component Systems", level: "Production" },
    ],
  },
  {
    id: "database-tools",
    category: "Databases, Data & Tooling",
    description:
      "Persistent stores, ORMs, version control, and data manipulation libraries.",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: "Production", highlight: true },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "SQLite", level: "Production", highlight: true },
      { name: "Prisma", level: "Proficient" },
      { name: "Supabase", level: "Proficient" },
      { name: "Pandas & Matplotlib", level: "Advanced" },
      { name: "Git & GitHub", level: "Production", highlight: true },
    ],
  },
];
