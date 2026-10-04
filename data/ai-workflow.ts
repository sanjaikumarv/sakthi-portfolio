import { AIWorkflowStep } from "@/types/portfolio";

export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    step: 1,
    title: "Client Ingestion",
    role: "User Prompt, Docs & Images",
    technologies: ["Next.js", "REST APIs", "Multipart/Form-Data"],
    details:
      "Captures interactive user queries, uploaded documents (PDF/TXT/DOCX), or native camera frames via secure endpoints.",
  },
  {
    step: 2,
    title: "API Gateway",
    role: "Validation & Request Routing",
    technologies: ["FastAPI", "Uvicorn", "Pydantic"],
    details:
      "Asynchronously validates payload schemes, verifies biometric frame quality, and coordinates multi-tenant endpoint requests.",
  },
  {
    step: 3,
    title: "Context & Memory",
    role: "Session History & Persistence",
    technologies: ["SQLAlchemy", "SQLite", "MongoDB"],
    details:
      "Injects conversational history, retrieves user identity profiles, and establishes stateful context windows without memory bloat.",
  },
  {
    step: 4,
    title: "Multimodal Processing",
    role: "Document & Biometric Analysis",
    technologies: ["OpenCV", "InsightFace", "ONNXRuntime"],
    details:
      "Parses multi-format documents, downscales camera inputs, and computes 512-D facial vectors in non-blocking worker thread pools.",
  },
  {
    step: 5,
    title: "Model Router",
    role: "Accelerated LLM & Vision",
    technologies: ["Groq API", "Qwen3.6-27B", "GPT-OSS-20B"],
    details:
      "Routes instructions to ultra-fast Groq-accelerated language models or vision-specialized Qwen architectures.",
  },
  {
    step: 6,
    title: "Streaming Delivery",
    role: "Chunked SSE & Resilient Fallbacks",
    technologies: ["Server-Sent Events", "Automated Titling", "PyTest"],
    details:
      "Streams low-latency tokens incrementally to client viewports while handling API rate-limit retries and automatic titling.",
  },
];
