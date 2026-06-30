"use client";

import { useMode } from "@/context/ModeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spotifyPlaylistId, playlist } from "@/data/content";

export default function MusicPlayer() {
  const { isPersonal } = useMode();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isPersonal) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-[200]"
    >
      {!isExpanded ? (
        <motion.button
          onClick={() => setIsExpanded(true)}
          className="w-14 h-14 bg-neutral-900 border-2 border-neutral-600 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#7c3aed] hover:shadow-[4px_4px_0px_#7c3aed] hover:border-purple-400 transition-all"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" fill="white" />
            <circle cx="18" cy="16" r="3" fill="white" />
          </svg>
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white border-2 border-neutral-800 shadow-[4px_4px_0px_#7c3aed] overflow-hidden w-[320px]"
          style={{ transform: "rotate(0.5deg)" }}
        >
          {/* Header */}
          <div className="bg-neutral-900 px-3 py-2 flex items-center justify-between">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">my music</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-400 hover:text-white text-xs font-mono transition-colors"
            >
              [x]
            </button>
          </div>

          {/* Spotify playlist embed — this is the most reliable approach */}
          <div className="p-2">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: "8px" }}
            />
          </div>

          <p className="px-3 pb-2 text-[8px] font-mono text-neutral-400 text-center">
            replace playlist ID in src/data/content.ts with your own
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
