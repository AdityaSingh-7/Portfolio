export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  personalDescription: string;
  technologies: string[];
  hoursWasted: string;
  totalCoffees: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  personalDescription: string;
  details: string;
  technologies: string[];
  github?: string;
  live?: string;
  size: "sm" | "md" | "lg" | "wide" | "tall";
  polaroidCaption: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Eli Lilly and Company",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Jul 2026",
    description:
      "Built and shipped features across an enterprise GenAI assistant platform (Next.js, React, TypeScript, PostgreSQL, Redis) used by 200+ internal employees. Integrated Veeva Vault as an AI knowledge source via MCP with SSE streaming. Resolved 75% of critical/high frontend security vulnerabilities.",
    personalDescription:
      "building an AI platform that 200 people use daily. integrated pharma document systems into LLM workflows. also fixed 75% of the security vulnerabilities — turns out npm audit is terrifying.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Redis", "MCP"],
    hoursWasted: "~800+",
    totalCoffees: 312,
  },
  {
    id: "exp-2",
    company: "ICAS - International Centre for Applied Sciences",
    role: "Research Intern",
    period: "Jun 2025 – Jul 2025",
    description:
      "Built a hierarchical multi-head EfficientNet-B0 classification pipeline achieving 98.32% accuracy on dermoscopic images. Conducted systematic study of loss functions for 3D U-Net brain tumor segmentation (BraTS 2020). Deployed models as FastAPI + React web apps with real-time inference and Grad-CAM heatmaps.",
    personalDescription:
      "did actual medical AI research. built models that detect skin cancer with 98% accuracy and segment brain tumors in 3D MRIs. deployed everything as web apps with real-time inference. this one matters.",
    technologies: ["PyTorch", "EfficientNet", "3D U-Net", "FastAPI", "React"],
    hoursWasted: "~320",
    totalCoffees: 134,
  },
  {
    id: "exp-3",
    company: "Recursive Zero",
    role: "Software Engineer Intern",
    period: "Jan 2025 – Feb 2025",
    description:
      "Migrated 5+ client websites from vanilla HTML/JS to Astro.js, reducing JavaScript bundle size by 40–60% and improving Core Web Vitals and SEO performance across all projects.",
    personalDescription:
      "migrated a bunch of sites from spaghetti HTML to Astro. cut bundle sizes in half. clients thought i was a wizard. i did not correct them.",
    technologies: ["Astro.js", "JavaScript", "SEO", "Performance"],
    hoursWasted: "~160",
    totalCoffees: 67,
  },
];

export const projects: Project[] = [
  {
    id: "proj-2b",
    title: "Self-Healing RAG",
    description:
      "RAG system with self-validation and adaptive retry — validates answers via LLM-as-Judge, auto-heals with 5 strategies when confidence is low.",
    personalDescription:
      "a RAG pipeline that doesn't just answer questions — it judges its own answers and retries with different strategies if it's not confident. it's smarter than me at knowing when it's wrong.",
    details:
      "Self-healing retrieval pipeline: Retrieval → Generation → Validation (LLM-as-Judge). If confidence < 0.8, triggers adaptive healing with 5 strategies in priority order: Query Expansion, Multi-Query (3 rephrased variants), Keyword Fallback, Broader Retrieval (top-5 → top-20), Chunk Refinement (re-chunk at 256 tokens). Tracks strategy performance in SQLite to optimize future attempts. Graceful degradation when all strategies fail. Built with FastAPI, all-MiniLM-L6-v2 embeddings, Pinecone, Groq + Llama 3.3 70B, Next.js 14 frontend.",
    technologies: ["FastAPI", "Pinecone", "Groq", "Llama 3.3", "Next.js", "SQLite"],
    github: "https://github.com/AdityaSingh-7/Self-Healing-RAG",
    size: "lg",
    polaroidCaption: "a RAG that knows when it's wrong",
  },
  {
    id: "proj-2c",
    title: "RAG Systems",
    description:
      "Full-stack RAG with hybrid search, recency-aware ranking, SSE streaming, conversation memory, and RAGAS evaluation metrics.",
    personalDescription:
      "the full-blown RAG system. hybrid search, streaming responses, conversation memory, multi-tenant auth, quality metrics — everything you'd want in a production RAG pipeline.",
    details:
      "Production-grade RAG: PDF ingestion with chunking and embedding, hybrid search (semantic + BM25), recency scoring with exponential decay, token-by-token SSE streaming, multi-turn conversation memory with query rewriting, RAGAS-based evaluation (faithfulness, relevancy, precision, recall), multi-tenant OAuth (Google/GitHub) with per-user document isolation, source attribution with page references. FastAPI backend, Next.js 14 frontend, all-MiniLM-L6-v2 embeddings, Pinecone serverless, Groq + Llama 3.3 70B at 500 tok/s.",
    technologies: ["FastAPI", "Next.js 14", "Pinecone", "Groq", "LlamaIndex", "NextAuth"],
    github: "https://github.com/AdityaSingh-7/RAG-Systems",
    size: "wide",
    polaroidCaption: "production RAG. the real deal.",
  },
  {
    id: "proj-2",
    title: "RunCoach AI",
    description:
      "Intelligent running app with GPS tracking, real-time AI voice coaching (3 personalities), route mapping, and performance analytics.",
    personalDescription:
      "built an AI that yells at me to run faster. three different coaches — one motivational, one data-obsessed, one drill sergeant. i use sergeant steel to punish myself.",
    details:
      "Full-stack running app with real-time GPS route mapping via MapLibre GL, automatic pace/distance/elevation tracking, and smart GPS filtering. Three AI coaching personalities (Coach Mo, Coach Data, Sergeant Steel) that activate on splits, pace changes, and distance milestones. Voice coaching via Vapi SDK with Web Speech API fallback. Analytics dashboard with weekly distance charts, pace trends, personal records, and run history with map replay. Built with Next.js 16, Prisma, shadcn/ui, Zustand, and Recharts.",
    technologies: ["Next.js 16", "TypeScript", "Prisma", "Vapi", "MapLibre", "shadcn/ui", "Zustand"],
    github: "https://github.com/AdityaSingh-7/AI-Running-App",
    size: "wide",
    polaroidCaption: "AI yells at me to run faster",
  },
  {
    id: "proj-1",
    title: "Document Intelligence",
    description:
      "RAG pipeline over unstructured documents with semantic search and real-time QA.",
    personalDescription:
      "taught a machine to read contracts and PDFs. one of my earlier RAG builds.",
    details:
      "Built a RAG pipeline over unstructured documents (PDFs, contracts, reports) using LlamaIndex, Pinecone vector DB, and sentence-transformer embeddings. Delivers real-time QA and summarization via Llama 3 (Groq) through a Next.js + FastAPI interface. Includes a recency-aware retrieval layer that flags conflicting or outdated information across document chunks.",
    technologies: ["TypeScript", "Next.js", "FastAPI", "LlamaIndex", "Pinecone"],
    github: "https://github.com/AdityaSingh-7/Document-Intelligence-system",
    size: "sm",
    polaroidCaption: "the first RAG build",
  },
  {
    id: "proj-3",
    title: "Liver Tumor Radiomics",
    description:
      "Medical imaging research — feature extraction and classification of liver tumors using pyradiomics.",
    personalDescription:
      "medical imaging research. extracting features from liver scans to help classify tumors. this one actually helps people.",
    details:
      "Feature extraction and analysis pipeline for liver tumor classification using pyradiomics. Processes medical imaging data (CT scans) to extract radiomic features for machine learning classification. Research-grade implementation focused on reproducibility and clinical applicability.",
    technologies: ["Python", "Jupyter", "Pyradiomics", "scikit-learn", "Medical Imaging"],
    github: "https://github.com/AdityaSingh-7/liver-tumor-radiomics",
    size: "tall",
    polaroidCaption: "actual research that matters",
  },
  {
    id: "proj-4",
    title: "Interview Prep Bot",
    description:
      "AI interview simulator that generates questions, evaluates responses, and provides feedback.",
    personalDescription:
      "built a bot that grills me with interview questions. it's brutally honest. i hate it. i need it.",
    details:
      "An AI-powered interview preparation tool that simulates technical interviews across multiple domains. Generates contextual follow-up questions based on responses, provides detailed feedback on answer quality, and tracks improvement over time. Built with TypeScript and LLM integration for realistic interview scenarios.",
    technologies: ["TypeScript", "LLM", "AI", "Web"],
    github: "https://github.com/AdityaSingh-7/Interview_prep_bot",
    size: "wide",
    polaroidCaption: "my own personal interviewer (brutal)",
  },
  {
    id: "proj-5",
    title: "Learning Pad",
    description:
      "Interactive educational game for kids — gamified learning with modern web tech. Live at abcdkbd.com.",
    personalDescription:
      "made a learning app for kids. 424 commits deep. turns out designing for 5 year olds is harder than any enterprise software.",
    details:
      "An interactive educational game for children, live at abcdkbd.com. Built with Astro.js, Shadcn components, Tailwind CSS, Zustand for state management, and TypeScript. Features gamified learning with engaging animations, audio feedback, and multi-locale support. 424 commits of ongoing development. MIT licensed.",
    technologies: ["Astro", "Shadcn", "Tailwind", "Zustand", "TypeScript"],
    github: "https://github.com/AdityaSingh-7/abcd",
    live: "https://abcdkbd.com",
    size: "sm",
    polaroidCaption: "harder than enterprise software honestly",
  },
  {
    id: "proj-6",
    title: "Fake News Analyser",
    description:
      "ML system for detecting and classifying fake news using NLP techniques.",
    personalDescription:
      "trained a model to spot fake news. it's surprisingly good. or is it? (it is.)",
    details:
      "Machine learning pipeline for fake news detection using natural language processing. Implements multiple classification approaches (Naive Bayes, SVM, Deep Learning) with TF-IDF and word embedding features. Includes data preprocessing, feature engineering, and model comparison on standard fake news datasets.",
    technologies: ["Python", "Jupyter", "NLP", "scikit-learn", "TF-IDF"],
    github: "https://github.com/AdityaSingh-7/Fake-new-Analyser",
    size: "sm",
    polaroidCaption: "trust issues, but make it code",
  },
  {
    id: "proj-7",
    title: "Sentiment Analysis",
    description:
      "Text sentiment classification pipeline using machine learning models.",
    personalDescription:
      "made a program that understands emotions better than i do. concerning.",
    details:
      "End-to-end sentiment analysis pipeline that classifies text into emotional categories. Implements data preprocessing, feature extraction, model training and evaluation using Python ML ecosystem. Supports multiple classification approaches with performance comparison.",
    technologies: ["Python", "ML", "NLP", "Data Science"],
    github: "https://github.com/AdityaSingh-7/Sentiment-Analysis",
    size: "sm",
    polaroidCaption: "emotionally intelligent code",
  },
  {
    id: "proj-8",
    title: "Research Papers",
    description:
      "Medical AI research — hierarchical skin lesion classification (98.32% accuracy) and 3D brain tumor segmentation on BraTS 2020.",
    personalDescription:
      "actual peer-level research. skin cancer detection and brain tumor segmentation. the stuff that actually matters.",
    details:
      "Two research works: (1) Hierarchical multi-head EfficientNet-B0 on DERM12345 (12,345 dermoscopic images, 40 subclasses) achieving 98.32% binary accuracy and 0.994 AUC — first classification baseline on this Scientific Data (Nature, 2024) dataset. (2) Systematic 6-model study of loss functions (Dice, Tversky, Focal Tversky) on 3D U-Net for BraTS 2020 brain tumor segmentation, achieving 0.77 Dice (Tumor Core) and 0.75 (Enhancing Tumor) on 64³ voxel patches. Both deployed as FastAPI + React apps with Grad-CAM heatmaps.",
    technologies: ["PyTorch", "EfficientNet", "3D U-Net", "FastAPI", "Grad-CAM", "BraTS 2020"],
    github: "https://github.com/AdityaSingh-7/Research-Papers",
    size: "wide",
    polaroidCaption: "the stuff that actually matters",
  },
];

export const researchPapers = [
  {
    title: "Hierarchical Dermatological Classification with EfficientNet-B0",
    description: "Multi-head EfficientNet-B0 pipeline on DERM12345 dataset (12,345 dermoscopic images, 40 subclasses) achieving 98.32% binary accuracy and 0.994 AUC.",
    status: "Completed",
  },
  {
    title: "Loss Function Study for 3D Brain Tumor Segmentation",
    description: "Systematic 6-model study of Dice, Tversky, and Focal Tversky losses on 3D U-Net for BraTS 2020, achieving 0.77 Dice (Tumor Core) on 64³ voxel patches.",
    status: "Completed",
  },
];

export const socials = {
  github: "https://github.com/AdityaSingh-7",
  linkedin: "https://linkedin.com/in/aditya-singh7101",
  twitter: "https://twitter.com",
  email: "adityakumarsingh710@gmail.com",
};

export const blogPosts = [
  {
    slug: "building-in-public",
    title: "Why I Build in Public",
    date: "2025-06-15",
    excerpt: "The benefits of sharing your work-in-progress with the world.",
    personalExcerpt: "i post my half-broken code online and somehow people like it?",
    readTime: "5 min",
  },
  {
    slug: "rust-for-js-devs",
    title: "Rust for JavaScript Developers",
    date: "2025-05-20",
    excerpt: "A practical guide to learning Rust from a JS background.",
    personalExcerpt: "the compiler yelled at me for 3 days. i emerged stronger.",
    readTime: "8 min",
  },
  {
    slug: "perfect-dev-setup",
    title: "My 2025 Dev Setup",
    date: "2025-04-10",
    excerpt: "My complete development environment — tools, configs, and workflow.",
    personalExcerpt: "spent more time configuring my terminal than coding. worth it.",
    readTime: "6 min",
  },
];

// ============================================================
// SPOTIFY: Replace this playlist ID with YOUR playlist
// How: Open your playlist in Spotify → Share → Copy Link
// Link looks like: https://open.spotify.com/playlist/ABC123xyz
// The ID is the part after /playlist/ → "ABC123xyz"
// ============================================================
export const spotifyPlaylistId = "37i9dQZF1DX9wC1KY45plY"; // placeholder — A7X radio

export const playlist = [
  { title: "Hail to the King", artist: "Avenged Sevenfold" },
  { title: "Afterlife", artist: "Avenged Sevenfold" },
  { title: "Bat Country", artist: "Avenged Sevenfold" },
  { title: "So Far Away", artist: "Avenged Sevenfold" },
  { title: "Nightmare", artist: "Avenged Sevenfold" },
  { title: "Seize the Day", artist: "Avenged Sevenfold" },
];
