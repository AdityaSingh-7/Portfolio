"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";

export default function ReceiptExperience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[rgba(255,245,200,0.8)] inline-block px-3 py-0.5 text-[8px] font-mono text-neutral-500 mb-4" style={{ transform: "rotate(-0.5deg)" }}>
          work history
        </div>

        <h2 className="font-handwriting text-3xl text-neutral-800 mb-10">
          places that trusted me with their codebase
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.5}deg)` }}
            >
              {/* Thermal receipt paper */}
              <div
                className="bg-[#fefef8] px-8 py-8 font-mono text-xs text-neutral-800 shadow-[3px_3px_0px_#ccc] relative border border-neutral-100"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 23px, #f5f5f0 24px)",
                }}
              >
                {/* Torn top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#fefef8] torn-edge" />

                {/* Header */}
                <div className="text-center mb-5">
                  <p className="text-[9px] tracking-[0.5em] text-neutral-400">EMPLOYMENT RECEIPT</p>
                  <p className="text-neutral-300 mt-1 select-none">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-[12px]">
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-500">EMPLOYER</span>
                    <span className="border-b border-dotted border-neutral-300 flex-1 mx-3" />
                    <span className="font-bold text-right">{exp.company}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-500">POSITION</span>
                    <span className="border-b border-dotted border-neutral-300 flex-1 mx-3" />
                    <span className="text-right">{exp.role}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-500">DATES</span>
                    <span className="border-b border-dotted border-neutral-300 flex-1 mx-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-500">HOURS LOGGED</span>
                    <span className="border-b border-dotted border-neutral-300 flex-1 mx-3" />
                    <span>{exp.hoursWasted}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-neutral-500">COFFEES</span>
                    <span className="border-b border-dotted border-neutral-300 flex-1 mx-3" />
                    <span>{exp.totalCoffees}</span>
                  </div>
                </div>

                <p className="text-neutral-300 my-4 select-none">- - - - - - - - - - - - - - - - - - - - - - - - -</p>

                {/* Tech used */}
                <div className="text-[11px]">
                  <p className="text-neutral-400 mb-2 uppercase tracking-wider">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-neutral-100 px-2 py-0.5 text-neutral-700 text-[10px]">{tech}</span>
                    ))}
                  </div>
                </div>

                <p className="text-neutral-300 my-4 select-none">- - - - - - - - - - - - - - - - - - - - - - - - -</p>

                {/* Notes - handwritten */}
                <div>
                  <p className="text-[10px] text-neutral-400 mb-2 uppercase tracking-wider">Personal Notes:</p>
                  <p className="font-handwriting text-base text-neutral-700 leading-relaxed">
                    {exp.personalDescription}
                  </p>
                </div>

                <p className="text-neutral-300 mt-5 select-none">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p className="text-[9px] text-neutral-400 text-center mt-2 tracking-wider">THANK YOU FOR YOUR SERVICE</p>
                <p className="text-[8px] text-neutral-300 text-center mt-0.5">NO REFUNDS</p>

                {/* Torn bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fefef8] torn-edge rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
