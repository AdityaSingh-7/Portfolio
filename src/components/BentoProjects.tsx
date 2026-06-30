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
      className="fixed inset-0 z-[250] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        className="bg-[#141414] border border-[#222] rounded-2xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-medium text-white">{project.title}</h2>
          <button onClick={onClose} className="text-neutral-500 hover:text-white text-sm font-mono transition-colors">[x]</button>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed">{project.description}</p>

        {/* Detailed info from README */}
        <div className="mt-4 p-4 bg-[#0a0a0a] border border-[#222] rounded-lg">
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">Details</p>
          <p className="text-xs text-neutral-400 leading-relaxed">{project.details}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs border border-[#333] rounded-lg text-neutral-400">{tech}</span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono bg-[#7c6df0] text-white rounded-lg hover:bg-[#9485f5] transition-colors"
            >
              View Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono border border-[#333] text-neutral-400 rounded-lg hover:text-white hover:border-[#555] transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BentoProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light text-[#ededed] tracking-tight mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-4 grid-rows-3 gap-3 auto-rows-[200px]">
          {projects.map((project, i) => {
            const spanClass = {
              sm: "col-span-1 row-span-1",
              md: "col-span-2 row-span-1",
              lg: "col-span-2 row-span-2",
              wide: "col-span-2 row-span-1",
              tall: "col-span-1 row-span-2",
            }[project.size];

            return (
              <motion.div
                key={project.id}
                className={`${spanClass} group relative bg-[#141414] border border-[#222] rounded-xl p-5 overflow-hidden hover:border-[rgba(124,109,240,0.4)] transition-all cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[rgba(124,109,240,0.1)] to-transparent rounded-xl" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-medium text-[#ededed] group-hover:text-[#7c6df0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#888] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 text-[10px] border border-[#222] rounded text-[#888]">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[#666]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
