import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "genai-conversational-assistant",
    slug: "genai-conversational-assistant",
    title: "GenAI Multimodal Conversational Assistant",
    shortDescription:
      "A ChatGPT-style multimodal AI assistant powered by Groq API, featuring streaming responses, persistent memory, document understanding, and vision reasoning.",
    fullDescription:
      "Engineered an enterprise-ready multimodal conversational assistant utilizing Groq API with ultra-low latency streaming inference. The system supports multi-turn dialogue with automated title generation, document understanding across PDF, TXT, and DOCX formats, vision processing with a vision-capable Qwen model, AI image generation, and persistent conversation context backed by SQLAlchemy and SQLite. Built with resilience at the core, including robust API fallback handling and a comprehensive 59-test automated testing suite.",
    category: ["Generative AI", "LLM Applications", "FastAPI Backend"],
    technologies: [
      "Python",
      "FastAPI",
      "Groq API",
      "GPT-OSS-20B",
      "Qwen3.6-27B",
      "SQLAlchemy",
      "SQLite",
      "Uvicorn",
      "REST APIs",
    ],
    features: [
      "Real-time streaming LLM responses with low-latency token delivery using Groq API.",
      "Persistent multi-turn conversation memory with automatic context preservation and title synthesis.",
      "Multi-format document understanding supporting PDF, TXT, and DOCX file processing.",
      "Multimodal vision reasoning utilizing a vision-capable Qwen model alongside AI image generation.",
      "Robust database-backed session management using SQLAlchemy ORM and SQLite.",
      "Comprehensive test harness containing 59 automated test cases covering chat, history, vision, and export routines.",
    ],
    highlights: [
      "59 automated tests verifying chat, documents, vision, and export functionality.",
      "Streaming SSE responses with automated conversation titling.",
      "Graceful error handling and fallback patterns for upstream LLM/API timeouts.",
    ],
    architecture: {
      flow: [
        "User Document/Prompt Input",
        "FastAPI Asynchronous Gateway",
        "Document Parsing (PDF/TXT/DOCX) & Vision Preprocessor",
        "SQLAlchemy Session & Conversational Memory Manager",
        "Model Router (Groq API / Qwen Vision / GPT-OSS-20B)",
        "Token Streaming & Error Recovery Pipeline",
      ],
      description:
        "Requests enter through FastAPI async endpoints. Inbound documents or images are parsed and ingested into the active session context managed by SQLAlchemy. The orchestrator delegates queries to the appropriate model (Groq-accelerated models or Qwen vision) and streams chunked tokens directly to the client with graceful retry fallbacks.",
    },
    challenges: [
      "Maintaining low-latency token streaming while concurrently persisting conversation turns and context in SQLite.",
      "Handling document parsing variations (PDF/TXT/DOCX) reliably without blocking API worker threads.",
      "Implementing deterministic fallback mechanisms when remote LLM provider rate limits or intermittent connection issues occur.",
    ],
    implementationDetails: [
      "Configured asynchronous streaming generators in FastAPI for seamless chunked transmission.",
      "Structured conversation schemas using SQLAlchemy ORM to track message histories, token usage, and automatic titles.",
      "Constructed isolated unit and integration test fixtures, reaching 59 automated test passes.",
    ],
    results: [
      "Delivered a stable, multi-turn assistant with full document and vision understanding.",
      "Validated end-to-end reliability across 59 automated test suites.",
      "Achieved smooth streaming response delivery with zero memory leaks across extended chat sessions.",
    ],
    metrics: [
      { label: "Automated Tests", value: "59 Tests" },
      { label: "Supported Formats", value: "PDF, TXT, DOCX" },
      { label: "Models Integrated", value: "Groq, Qwen, GPT-OSS" },
    ],
    featured: true,
    modelOrInferenceInfo: "Groq API · GPT-OSS-20B · Qwen3.6-27B Vision",
    github: "https://github.com/sakthi5",
  },
  {
    id: "face-verification-service",
    slug: "face-verification-service",
    title: "Face Verification Service - Mobile Attendance",
    shortDescription:
      "A high-throughput biometric microservice built with FastAPI, InsightFace, and ONNXRuntime, powering real-time employee check-in/check-out verification.",
    fullDescription:
      "Designed and deployed a specialized computer vision microservice in FastAPI to handle employee identity verification for a native mobile attendance application. The system generates 512-dimensional facial embeddings using InsightFace and calculates cosine similarity thresholds for instantaneous validation. Engineered with strict biometric integrity checks—including image quality validation, single-face enforcement, duplicate face registration prevention, and admin-protected face-data deletion. Inference was specifically optimized by selectively loading model weights, reducing detection input resolution, and offloading computation to a dedicated thread pool.",
    category: ["Computer Vision", "Backend Microservice", "Inference Optimization"],
    technologies: [
      "Python",
      "FastAPI",
      "InsightFace",
      "ONNXRuntime",
      "OpenCV",
      "NumPy",
      "MongoDB",
      "PyMongo",
      "Uvicorn",
    ],
    features: [
      "FastAPI-based biometric verification microservice for mobile employee attendance.",
      "Face detection, landmark extraction, and 512-dimensional embedding generation via InsightFace.",
      "High-precision cosine similarity matching with configurable corporate verification thresholds.",
      "Biometric enrollment and verification endpoints with image quality validation and single-face enforcement.",
      "Duplicate-face detection during enrollment to prevent fraudulent multi-account registration.",
      "Admin-protected face data deletion endpoints adhering to security and data privacy standards.",
      "Inference optimization: selective model weight initialization, detection dimension tuning, and thread-pool execution.",
    ],
    highlights: [
      "512-dimensional vector embeddings with cosine similarity matching.",
      "Thread pool offloading preventing event loop blocking during heavy ONNXRuntime inference.",
      "Built-in duplicate-face detection and image quality pre-filtering.",
    ],
    architecture: {
      flow: [
        "Native Mobile Client Camera Frame",
        "FastAPI Image Ingestion & Quality Validation",
        "Single-Face Detection & Input Resizing (OpenCV)",
        "InsightFace / ONNXRuntime 512-D Embedding in ThreadPool",
        "Cosine Similarity Vector Comparison Engine",
        "MongoDB Profile Store & Admin Controls",
      ],
      description:
        "Mobile devices capture an employee face frame and post it to FastAPI. The API validates image quality and verifies only a single face is present. OpenCV standardizes dimensions before passing frames to InsightFace/ONNXRuntime running within a concurrent thread pool. Embeddings are compared against stored 512D vectors using cosine similarity, and verification decisions are returned in sub-second latency.",
    },
    challenges: [
      "Preventing heavy ML matrix computations from starving the async FastAPI event loop under concurrent attendance check-ins.",
      "Rejecting low-quality, blurry, or multi-face camera frames before expensive embedding calculation.",
      "Ensuring duplicate face embeddings are flagged during initial staff onboarding.",
    ],
    implementationDetails: [
      "Decoupled CPU-bound InsightFace model inference into concurrent Python thread pools.",
      "Applied selective loading of only the necessary detection and recognition ONNX models to conserve memory.",
      "Implemented vectorized cosine similarity computation with NumPy against MongoDB stored embedding arrays.",
    ],
    results: [
      "Significantly improved request throughput and concurrency during peak check-in windows.",
      "Guaranteed single-face integrity and duplicate prevention across the employee database.",
      "Successfully integrated as the primary AI attendance verification engine for the native mobile app.",
    ],
    metrics: [
      { label: "Vector Dimension", value: "512-D Embeddings" },
      { label: "Engine", value: "InsightFace + ONNXRuntime" },
      { label: "Concurrency", value: "Thread-Pool Offloaded" },
    ],
    featured: true,
    modelOrInferenceInfo: "InsightFace · ONNXRuntime · Cosine Similarity",
    github: "https://github.com/sakthi5",
  },
  {
    id: "tirupati-mahaal",
    slug: "tirupati-mahaal",
    title: "Tirupati Mahaal - Client Web Platform",
    shortDescription:
      "A responsive client web application built with Next.js, featuring reusable components, fast load times, and mobile-friendly layouts.",
    fullDescription:
      "Developed and deployed a production client website for Tirupati Mahaal utilizing Next.js. Architected a modular component library ensuring responsive design consistency across mobile, tablet, and desktop viewports. Partnered directly with the business stakeholders to translate domain requirements into an interactive, fast, and maintainable web presence.",
    category: ["Frontend Engineering", "Full-Stack Development"],
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
    ],
    features: [
      "Full responsive design optimized for mobile, tablet, and desktop screen sizes.",
      "Modular, reusable UI components built for maintainability.",
      "Client-focused requirement analysis and iterative production deployment.",
      "Fast page loads and accessible semantic layout structure.",
    ],
    highlights: [
      "Engineered and deployed directly for commercial production use.",
      "Reusable component design system for swift updates.",
      "Zero layout shift and fluid responsiveness.",
    ],
    architecture: {
      flow: [
        "Client Design Requirements",
        "Next.js Component Modularization",
        "Responsive Styling & Media Queries",
        "Production Build & Client Deployment",
      ],
      description:
        "Structured with Next.js modern routing and modular React components. All sections are styled with responsive CSS principles to guarantee seamless viewing on handheld mobile devices as well as high-resolution desktop screens.",
    },
    challenges: [
      "Balancing client aesthetic preferences with responsive performance across mobile devices.",
      "Ensuring clean component hierarchy to allow simple updates by non-technical managers.",
    ],
    implementationDetails: [
      "Built customizable section components for event hall showcases and amenities.",
      "Utilized modern CSS layout techniques (flexbox & grid) for fault-tolerant responsiveness.",
    ],
    results: [
      "Successfully delivered the production client website on schedule.",
      "Delivered a seamless mobile experience for incoming prospective event bookings.",
    ],
    metrics: [
      { label: "Platform", value: "Next.js Production" },
      { label: "Layout", value: "100% Mobile Parity" },
    ],
    featured: true,
    github: "https://github.com/sakthi5",
  },
];
