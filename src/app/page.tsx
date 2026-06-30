"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import BentoProjects from "@/components/BentoProjects";
import Hobbies from "@/components/Hobbies";
import ReceiptExperience from "@/components/ReceiptExperience";
import PolaroidProjects from "@/components/PolaroidProjects";
import PlaylistSpread from "@/components/PlaylistSpread";
import Recommendations from "@/components/Recommendations";
import VisitorCounter from "@/components/VisitorCounter";
import { experiences, socials } from "@/data/content";

function ProfessionalPage() {
  return (
    <div className="bg-pro-bg text-pro-text min-h-screen">
      {/* Hero with photo */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-1">
            <div className="inline-block px-3 py-1 border border-pro-border rounded-full text-xs text-pro-muted font-mono mb-6">
              software engineer · AI/ML · MIT &apos;26
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-pro-text leading-[1.1] tracking-tight">
              Aditya Kumar
              <br />
              <span className="text-pro-accent">Singh</span>
            </h1>
            <p className="mt-8 text-lg text-pro-muted max-w-xl leading-relaxed font-light">
              Building full-stack applications and AI systems. Currently interning
              at Eli Lilly, shipping enterprise GenAI tools used by 200+ employees.
              B.Tech CSE (AI) at MIT &apos;26.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-pro-accent text-white rounded-lg text-sm font-medium hover:bg-pro-accent-hover transition-colors"
              >
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Aditya_Kumar_Singh_Resume.pdf"
                className="px-5 py-2.5 border border-pro-border text-pro-muted rounded-lg text-sm hover:text-pro-text hover:border-pro-muted transition-colors"
              >
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-56 h-64 md:w-64 md:h-72 border border-pro-border rounded-2xl overflow-hidden bg-pro-surface flex items-center justify-center flex-shrink-0"
          >
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-pro-border/50 mb-3" />
              <p className="text-[10px] font-mono text-pro-muted">your photo here</p>
              <p className="text-[8px] font-mono text-pro-muted mt-1">drop image at /public/photo.jpg</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal-style stack */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-light text-pro-text tracking-tight mb-8">Stack</h2>
          <div className="bg-pro-surface border border-pro-border rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-pro-border">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-3 text-xs text-pro-muted">~/.config/stack</span>
            </div>
            {[
              { key: "languages", val: "Python, TypeScript, JavaScript, Java, SQL" },
              { key: "frontend", val: "Next.js, React, Tailwind CSS, Astro.js" },
              { key: "backend", val: "FastAPI, Node.js, Express.js" },
              { key: "ai/ml", val: "PyTorch, TensorFlow, scikit-learn, Transformers" },
              { key: "databases", val: "PostgreSQL, Redis, MongoDB, Pinecone" },
              { key: "infra", val: "Docker, Kubernetes, Git" },
            ].map((line, i) => (
              <motion.div
                key={line.key}
                className="flex gap-2 py-0.5"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-pro-accent">{line.key}:</span>
                <span className="text-pro-muted">{line.val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light text-pro-text tracking-tight mb-12">Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-10 border-l-2 border-pro-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-pro-accent -translate-x-[7px] shadow-[0_0_10px_rgba(124,109,240,0.4)]" />
                <div className="bg-pro-surface border border-pro-border rounded-xl p-8 hover:border-pro-accent/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-pro-text">{exp.role}</h3>
                      <p className="text-sm text-pro-accent mt-1">{exp.company}</p>
                    </div>
                    <span className="text-xs text-pro-muted font-mono bg-pro-bg px-3 py-1 rounded-full border border-pro-border">{exp.period}</span>
                  </div>
                  <p className="text-sm text-pro-muted leading-relaxed">{exp.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs border border-pro-border rounded-lg text-pro-muted hover:border-pro-accent/30 transition-colors">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — Bento Grid */}
      <BentoProjects />

      {/* Contact */}
      <section className="py-24 px-6 border-t border-pro-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-light text-pro-text tracking-tight mb-4">Get in Touch</h2>
          <p className="text-lg text-pro-muted font-light">Open to opportunities and interesting projects.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-mono text-pro-muted border border-pro-border rounded-lg hover:text-pro-accent hover:border-pro-accent/30 transition-colors">GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-mono text-pro-muted border border-pro-border rounded-lg hover:text-pro-accent hover:border-pro-accent/30 transition-colors">LinkedIn</a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-mono text-pro-muted border border-pro-border rounded-lg hover:text-pro-accent hover:border-pro-accent/30 transition-colors">Twitter</a>
            <a href={`mailto:${socials.email}`} className="px-4 py-2 text-xs font-mono text-pro-muted border border-pro-border rounded-lg hover:text-pro-accent hover:border-pro-accent/30 transition-colors">Email</a>
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 border-t border-pro-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-[10px] font-mono text-pro-muted">Aditya Kumar Singh / 2025</span>
          <span className="text-[10px] font-mono text-pro-muted">built with next.js</span>
        </div>
      </footer>
    </div>
  );
}

function PersonalPage() {
  return (
    <div className="bg-[#f8f5f0] text-[#1a1a1a] min-h-screen">
      {/* Hero — stripped back, raw, asymmetric */}
      <section className="pt-28 pb-10 px-8 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {/* Loose, blog-like intro — no container, no card, no tape */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
              {/* Photo — raw, no fancy border */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-200 flex-shrink-0 overflow-hidden" style={{ transform: "rotate(1.5deg)" }}>
                {/* Replace with: <img src="/photo.jpg" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-[8px] font-mono text-neutral-400">photo.jpg</p>
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-handwriting text-neutral-900">
                  Aditya
                </h1>
                <p className="text-neutral-500 font-mono text-xs mt-1">
                  CSE (AI) @ MIT &apos;26 · building stuff @ Eli Lilly
                </p>
              </div>
            </div>

            <p className="mt-8 text-neutral-700 leading-relaxed font-handwriting text-xl max-w-2xl">
              i build full-stack apps and AI systems. currently shipping GenAI tools
              at Lilly. before that — medical imaging research, skin cancer detection
              models, brain tumor segmentation. i also make websites for fun and break
              them for learning.
            </p>

            {/* Links — minimal, no boxes */}
            <div className="mt-6 flex gap-4 flex-wrap text-sm font-mono">
              <a href="/resume.pdf" download="Aditya_Kumar_Singh_Resume.pdf" className="text-neutral-900 underline decoration-2 decoration-red-400 hover:decoration-red-600 transition-colors">resume</a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">github</a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">linkedin</a>
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors">twitter</a>
              <a href={`mailto:${socials.email}`} className="text-neutral-500 hover:text-neutral-900 transition-colors">email</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider — just a hand-drawn line */}
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <svg width="100%" height="8" viewBox="0 0 600 8" preserveAspectRatio="none" className="opacity-20">
          <path d="M0 4 Q 50 1, 100 4 T 200 4 T 300 4 T 400 4 T 500 4 T 600 4" stroke="#333" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Work — no receipts theatrics, just real content presented raw */}
      <section className="pt-12 pb-16 px-8 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-handwriting text-3xl text-neutral-800 mb-10">where i&apos;ve worked</h2>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`${i === 0 ? "pl-0" : i === 1 ? "pl-4 md:pl-8" : "pl-2 md:pl-4"}`}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-handwriting text-xl text-neutral-900">{exp.company}</h3>
                  <span className="font-mono text-[10px] text-neutral-400">{exp.period}</span>
                </div>
                <p className="font-mono text-xs text-neutral-500 mb-2">{exp.role}</p>
                <p className="text-sm text-neutral-600 leading-relaxed font-handwriting text-base">
                  {exp.personalDescription}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-neutral-400">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — newspaper clippings (keep these, they work) */}
      <PolaroidProjects />

      {/* Hobbies */}
      <Hobbies />

      {/* Music + Recs — stacked, not side-by-side, smaller */}
      <section className="py-14 px-8 md:px-12">
        <div className="max-w-xl mx-auto space-y-10">
          <PlaylistSpread />
          <Recommendations />
        </div>
      </section>

      {/* Footer — minimal */}
      <footer className="py-8 px-8 md:px-12 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-neutral-400">adi / 2025</span>
            <VisitorCounter />
          </div>
          <div className="flex gap-3">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-neutral-400 hover:text-neutral-800 transition-colors">gh</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-neutral-400 hover:text-neutral-800 transition-colors">li</a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-neutral-400 hover:text-neutral-800 transition-colors">tw</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HomePage() {
  const { isPersonal } = useMode();

  return (
    <main className="transition-colors duration-500">
      {isPersonal ? <PersonalPage /> : <ProfessionalPage />}
    </main>
  );
}
