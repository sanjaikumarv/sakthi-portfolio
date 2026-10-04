import { EngineeringPrinciple } from "@/types/portfolio";

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "ai-reliability",
    title: "AI Reliability & Fallback Engineering",
    badge: "Fault Tolerance",
    description:
      "Language model APIs can fluctuate in latency or experience intermittent timeouts. Applications must remain resilient without crashing client interfaces.",
    points: [
      "Deterministic exception traps and fallback routing when primary LLM endpoints encounter rate limits.",
      "Thorough test coverage—validated through 59 automated test fixtures spanning chat, history, vision, and export.",
      "Input schema sanitization before passing unstructured data to foundation models.",
    ],
  },
  {
    id: "inference-optimization",
    title: "Non-Blocking Inference Architecture",
    badge: "Performance",
    description:
      "Executing heavy neural networks directly within an asynchronous event loop starves concurrent API requests.",
    points: [
      "Decoupled CPU-bound InsightFace and ONNXRuntime inference into isolated Python thread pools.",
      "Selective initialization of only necessary model weights to conserve RAM on production servers.",
      "Input image downscaling and pre-validation in OpenCV prior to high-dimensional embedding extraction.",
    ],
  },
  {
    id: "conversational-memory",
    title: "Context Persistence & Stateful Dialogue",
    badge: "State Management",
    description:
      "Effective AI assistants require contextual memory without causing context length overflow or unbounded token consumption.",
    points: [
      "Database-backed session management via SQLAlchemy and SQLite for reliable multi-turn persistence.",
      "Automated conversation title synthesis based on early interaction topics.",
      "Structured document ingestion (PDF, TXT, DOCX) preserving context at the session level.",
    ],
  },
  {
    id: "modular-frontend",
    title: "Scalable Component Systems",
    badge: "Maintainability",
    description:
      "Delivering 50+ web pages across varied industries requires reusable, composable component design systems.",
    points: [
      "Strict separation of UI primitives and business logic using Next.js and React patterns.",
      "Zero layout shift design with responsive parity across desktop, tablet, and mobile breakpoints.",
      "Type-safe data pipelines preventing runtime UI rendering defects.",
    ],
  },
];
