"use client";

import { useMode } from "@/context/ModeContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalNudge() {
  const { isProfessional } = useMode();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!isProfessional || dismissed) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => setShow(true), 4000);
    const autoHide = setTimeout(() => setShow(false), 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, [isProfessional, dismissed]);

  if (!isProfessional) return null;

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="fixed top-14 right-[260px] z-[55]"
          onClick={() => { setDismissed(true); setShow(false); }}
        >
          <div className="bg-pro-accent/10 border border-pro-accent/40 backdrop-blur-sm rounded-xl px-5 py-3.5 shadow-[0_8px_40px_rgba(124,109,240,0.25)] cursor-pointer hover:bg-pro-accent/15 hover:border-pro-accent/60 transition-all max-w-[220px]">
            <p className="text-sm text-neutral-200 leading-relaxed">
              click <span className="text-pro-accent font-semibold">&quot;go personal&quot;</span> to see the personal side
            </p>
            {/* Arrow pointing up toward the toggle */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-pro-accent/40" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
