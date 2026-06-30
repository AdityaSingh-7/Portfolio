"use client";

import { useMode } from "@/context/ModeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <motion.button
      onClick={toggleMode}
      className="relative px-3 py-1.5 rounded border transition-all duration-300 cursor-pointer"
      style={{
        borderColor: mode === "professional" ? "#222" : "#ccc5b8",
        background: mode === "professional" ? "#141414" : "#fff",
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <AnimatePresence mode="wait">
        {mode === "professional" ? (
          <motion.span
            key="pro"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="flex items-center gap-2 text-xs font-mono tracking-wide text-neutral-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pro-accent" />
            go personal
          </motion.span>
        ) : (
          <motion.span
            key="personal"
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="flex items-center gap-2 text-xs font-handwriting text-neutral-600"
          >
            <span className="w-1.5 h-1.5 bg-red-500" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
            go professional
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
