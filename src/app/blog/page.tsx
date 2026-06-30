"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { isPersonal } = useMode();

  return (
    <main
      className="min-h-screen pt-36 pb-20 px-8 md:px-12 transition-colors duration-500"
      style={{
        backgroundColor: isPersonal ? "#f8f5f0" : "#0a0a0a",
        color: isPersonal ? "#1a1a1a" : "#ededed",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {isPersonal ? (
            <>
              <h1 className="font-handwriting text-4xl text-neutral-800">writing</h1>
              <p className="mt-6 font-handwriting text-xl text-neutral-500">coming soon. i have thoughts, just haven&apos;t written them down yet.</p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-light tracking-tight">Blog</h1>
              <p className="mt-6 text-neutral-500 font-light">Coming soon.</p>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
