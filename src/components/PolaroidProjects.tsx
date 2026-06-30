"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, Project } from "@/data/content";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[250] flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, rotate: -2 }}
        animate={{ scale: 1, rotate: 0.5 }}
        exit={{ scale: 0.9, rotate: 2 }}
        className="bg-white border-2 border-neutral-800 shadow-[5px_5px_0px_#2b2b2b] p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <h2 className="font-handwriting text-2xl text-neutral-800">{project.title}</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-800 text-xs font-mono transition-colors">[x]</button>
        </div>

        <p className="text-sm text-neutral-600 font-handwriting text-base leading-relaxed">{project.personalDescription}</p>

        <div className="mt-4 p-3 bg-neutral-50 border border-neutral-200">
          <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">the details</p>
          <p className="text-xs text-neutral-600 leading-relaxed">{project.details}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-[10px] font-mono bg-neutral-800 text-white">{tech}</span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-mono bg-neutral-800 text-white hover:bg-red-500 transition-colors shadow-[2px_2px_0px_#e63946]">
              view source
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-mono border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors">
              live demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Different "clipping" styles to make each card feel unique
const clippingStyles = [
  // Large headline style
  { width: "w-64", rotate: -2, style: "headline" },
  // Small classified ad
  { width: "w-44", rotate: 3, style: "classified" },
  // Medium column clipping
  { width: "w-52", rotate: -1, style: "column" },
  // Wide feature cut
  { width: "w-60", rotate: 2, style: "feature" },
  // Tiny snippet
  { width: "w-40", rotate: -3, style: "snippet" },
  // Torn-edge piece
  { width: "w-48", rotate: 1.5, style: "torn" },
  // Small box ad
  { width: "w-44", rotate: -2.5, style: "boxad" },
  // Large feature
  { width: "w-56", rotate: 1, style: "headline" },
];

export default function PolaroidProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[rgba(255,245,200,0.8)] inline-block px-3 py-0.5 text-[8px] font-mono text-neutral-500 mb-4" style={{ transform: "rotate(-0.5deg)" }}>
          projects
        </div>

        <h2 className="font-handwriting text-3xl text-neutral-800 mb-10">
          stuff i shipped
        </h2>

        {/* Newspaper clippings layout */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {projects.map((project, i) => {
            const clip = clippingStyles[i % clippingStyles.length];

            return (
              <motion.div
                key={project.id}
                className={`${clip.width} cursor-pointer relative`}
                style={{ transform: `rotate(${clip.rotate}deg)` }}
                initial={{ opacity: 0, y: 30, rotate: clip.rotate - 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: clip.rotate }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 150 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Tape strip (some cards get tape, some get pins) */}
                {i % 3 === 0 ? (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[rgba(255,245,200,0.7)] z-10 shadow-sm" style={{ transform: `rotate(${-clip.rotate * 0.3}deg)` }} />
                ) : i % 3 === 1 ? (
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full shadow-md" style={{ background: "radial-gradient(circle at 30% 30%, #ff8a80, #d32f2f)", border: "1px solid #b71c1c" }} />
                  </div>
                ) : null}

                {/* The clipping itself */}
                {clip.style === "headline" ? (
                  <div className="bg-[#fefef8] p-4 border border-neutral-300/60 shadow-[2px_3px_8px_rgba(0,0,0,0.15)]" style={{ clipPath: "polygon(0% 1%, 2% 0%, 5% 1.5%, 98% 0%, 100% 1%, 100% 98%, 97% 100%, 3% 99%, 0% 100%)" }}>
                    <h3 className="text-lg font-bold text-neutral-900 leading-tight font-serif">{project.title}</h3>
                    <div className="w-full h-px bg-neutral-800 my-2" />
                    <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[8px] font-mono text-neutral-500 italic">{t}</span>
                      ))}
                    </div>
                  </div>
                ) : clip.style === "classified" ? (
                  <div className="bg-[#fffff0] p-3 border border-neutral-300/50 shadow-[1px_2px_5px_rgba(0,0,0,0.12)]">
                    <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider border-b border-dashed border-neutral-300 pb-1 mb-2">project</p>
                    <h3 className="text-sm font-bold text-neutral-900 font-serif">{project.title}</h3>
                    <p className="text-[10px] text-neutral-600 mt-1 leading-snug line-clamp-2">{project.description}</p>
                    <p className="text-[8px] font-mono text-neutral-400 mt-2">{project.technologies.slice(0, 2).join(" • ")}</p>
                  </div>
                ) : clip.style === "column" ? (
                  <div className="bg-[#fefef8] p-4 border-l-2 border-neutral-800 shadow-[2px_2px_6px_rgba(0,0,0,0.12)]">
                    <h3 className="text-base font-bold text-neutral-900 font-serif leading-tight">{project.title}</h3>
                    <p className="text-[10px] text-neutral-600 mt-2 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="mt-2 pt-2 border-t border-neutral-200">
                      <p className="text-[8px] font-mono text-neutral-400">{project.technologies.join(" / ")}</p>
                    </div>
                  </div>
                ) : clip.style === "feature" ? (
                  <div className="bg-[#fefef8] p-4 border-2 border-neutral-800 shadow-[3px_3px_0px_#2b2b2b]">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-[7px] font-mono bg-neutral-800 text-white px-1.5 py-0.5 uppercase">featured</span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 font-serif">{project.title}</h3>
                    <p className="text-[10px] text-neutral-600 mt-2 leading-relaxed line-clamp-3">{project.description}</p>
                    <p className="text-[8px] font-mono text-neutral-400 mt-2">{project.technologies.slice(0, 3).join(" • ")}</p>
                  </div>
                ) : clip.style === "snippet" ? (
                  <div className="bg-[#fffff8] p-3 shadow-[1px_2px_5px_rgba(0,0,0,0.1)]" style={{ clipPath: "polygon(1% 0%, 100% 1%, 99% 100%, 0% 98%)" }}>
                    <h3 className="text-sm font-bold text-neutral-900 font-serif">{project.title}</h3>
                    <p className="text-[9px] text-neutral-500 mt-1 line-clamp-2 italic">{project.description}</p>
                  </div>
                ) : clip.style === "torn" ? (
                  <div className="bg-[#fefef8] p-4 shadow-[2px_3px_8px_rgba(0,0,0,0.15)] torn-edge">
                    <h3 className="text-sm font-bold text-neutral-900 font-serif leading-tight">{project.title}</h3>
                    <div className="w-8 h-0.5 bg-red-500 my-2" />
                    <p className="text-[10px] text-neutral-600 leading-relaxed line-clamp-3">{project.description}</p>
                    <p className="text-[8px] font-mono text-neutral-400 mt-2">{project.technologies.slice(0, 2).join(" • ")}</p>
                  </div>
                ) : (
                  <div className="bg-[#fffff0] p-3 border border-neutral-800 shadow-sm">
                    <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-widest mb-1">project</p>
                    <h3 className="text-sm font-bold text-neutral-900 font-serif">{project.title}</h3>
                    <p className="text-[9px] text-neutral-600 mt-1.5 leading-snug line-clamp-2">{project.description}</p>
                    <div className="mt-2 flex gap-1">
                      {project.technologies.slice(0, 2).map((t) => (
                        <span key={t} className="text-[7px] font-mono bg-neutral-100 px-1 py-0.5 text-neutral-600">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
