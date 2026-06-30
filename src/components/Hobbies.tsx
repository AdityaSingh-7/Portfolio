"use client";

import { motion } from "framer-motion";

interface HobbyItem {
  label: string;
  style: "normal" | "bold" | "underline" | "circled" | "scratchy" | "caps";
}

const hobbies: HobbyItem[] = [
  { label: "football", style: "bold" },
  { label: "volleyball", style: "normal" },
  { label: "badminton", style: "underline" },
  { label: "tennis", style: "normal" },
  { label: "paddleball", style: "scratchy" },
  { label: "squash", style: "normal" },
  { label: "running", style: "caps" },
  { label: "basketball", style: "underline" },
  { label: "chess", style: "circled" },
  { label: "gym", style: "bold" },
  { label: "music", style: "bold" },
  { label: "sketching", style: "normal" },
  { label: "painting", style: "underline" },
  { label: "movies", style: "scratchy" },
  { label: "anime", style: "circled" },
  { label: "travelling", style: "bold" },
];

function HobbyWord({ hobby, index }: { hobby: HobbyItem; index: number }) {
  const rotations = [-0.6, 0.4, -0.2, 0.5, -0.4, 0.2, -0.5, 0.3, -0.1, 0.6, -0.3, 0.2, -0.4, 0.5, -0.2, 0.3];
  const rot = rotations[index];

  if (hobby.style === "bold") {
    return (
      <span className="font-handwriting text-xl font-bold text-neutral-900" style={{ transform: `rotate(${rot}deg)`, display: "inline-block" }}>
        {hobby.label}
      </span>
    );
  }

  if (hobby.style === "underline") {
    return (
      <span className="relative inline-block" style={{ transform: `rotate(${rot}deg)` }}>
        <span className="font-handwriting text-lg text-neutral-800">{hobby.label}</span>
        <svg className="absolute -bottom-1 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 8" preserveAspectRatio="none">
          <path d="M2 5 Q 25 2, 50 5 T 98 4" stroke="#e63946" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  if (hobby.style === "circled") {
    return (
      <span className="relative inline-block px-2 py-1" style={{ transform: `rotate(${rot}deg)` }}>
        <span className="font-handwriting text-lg text-neutral-800 relative z-10">{hobby.label}</span>
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
          <ellipse cx="50" cy="20" rx="48" ry="17" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="3 2" opacity="0.5" />
        </svg>
      </span>
    );
  }

  if (hobby.style === "scratchy") {
    return (
      <span className="font-mono text-sm text-neutral-700 uppercase tracking-wide" style={{ transform: `rotate(${rot}deg)`, display: "inline-block" }}>
        {hobby.label}
      </span>
    );
  }

  if (hobby.style === "caps") {
    return (
      <span className="font-handwriting text-lg text-neutral-800 uppercase tracking-wider" style={{ transform: `rotate(${rot}deg)`, display: "inline-block" }}>
        {hobby.label}
      </span>
    );
  }

  // normal
  return (
    <span className="font-handwriting text-lg text-neutral-700" style={{ transform: `rotate(${rot}deg)`, display: "inline-block" }}>
      {hobby.label}
    </span>
  );
}

export default function Hobbies() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="bg-[rgba(255,245,200,0.8)] inline-block px-3 py-0.5 text-[8px] font-mono text-neutral-500 mb-4" style={{ transform: "rotate(-0.5deg)" }}>
          off-screen
        </div>

        <h2 className="font-handwriting text-3xl text-neutral-800 mb-8">
          when i&apos;m not staring at a screen
        </h2>

        {/* Journal page */}
        <motion.div
          className="relative bg-white shadow-[3px_3px_0px_#2b2b2b] border border-neutral-200 overflow-hidden"
          style={{ transform: "rotate(-0.3deg)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Ruled lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #ece8e3 28px)",
            backgroundPosition: "0 36px",
          }} />

          {/* Red margin */}
          <div className="absolute top-0 bottom-0 left-10 w-px bg-red-300/50" />

          {/* Spiral holes */}
          <div className="absolute top-0 bottom-0 left-2 flex flex-col justify-around py-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full border border-neutral-300 bg-neutral-50" />
            ))}
          </div>

          {/* Content */}
          <div className="relative pl-14 pr-6 py-8">
            {/* Header */}
            <p className="font-handwriting text-sm text-neutral-400 mb-6" style={{ transform: "rotate(-0.4deg)" }}>
              things i do for fun:
            </p>

            {/* 3-col with mixed styles */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-[30px]">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={hobby.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <HobbyWord hobby={hobby} index={i} />
                </motion.div>
              ))}
            </div>

            {/* Doodles in margins and gaps */}

            {/* Star doodle */}
            <svg className="absolute top-12 left-2 w-5 h-5 opacity-30" viewBox="0 0 20 20" fill="none" stroke="#444" strokeWidth="0.8" strokeLinecap="round">
              <path d="M10 2L12 8H18L13 11.5L14.5 18L10 14L5.5 18L7 11.5L2 8H8L10 2Z" />
            </svg>

            {/* Checkmark */}
            <svg className="absolute top-[30%] left-3 w-4 h-4 opacity-30" viewBox="0 0 16 16" fill="none" stroke="#444" strokeWidth="1.2" strokeLinecap="round">
              <path d="M3 8L7 12L13 4" />
            </svg>

            {/* Arrow pointing at content */}
            <svg className="absolute top-[55%] left-1 w-6 h-4 opacity-25" viewBox="0 0 24 14" fill="none" stroke="#444" strokeWidth="0.8" strokeLinecap="round">
              <path d="M2 7Q8 4 16 7M16 7L13 4.5M16 7L13.5 10" />
            </svg>

            {/* Small heart */}
            <svg className="absolute bottom-16 left-2 w-4 h-4 opacity-25" viewBox="0 0 14 13" fill="none" stroke="#444" strokeWidth="0.8" strokeLinecap="round">
              <path d="M7 12C7 12 1 8 1 4.5C1 2 3 1 4.5 1C5.8 1 6.5 2 7 2.5C7.5 2 8.2 1 9.5 1C11 1 13 2 13 4.5C13 8 7 12 7 12Z" />
            </svg>

            {/* Squiggle at bottom */}
            <svg className="absolute bottom-6 right-6 w-16 h-4 opacity-20" viewBox="0 0 60 12" fill="none" stroke="#444" strokeWidth="0.6" strokeLinecap="round">
              <path d="M2 6Q10 2 18 6T34 6T50 6T58 6" />
            </svg>

            {/* Bottom note */}
            <p className="font-mono text-[9px] text-neutral-400 mt-6 italic" style={{ transform: "rotate(0.3deg)" }}>
              * no particular order. all equally important.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
