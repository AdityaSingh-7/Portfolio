"use client";

import { motion } from "framer-motion";
import { spotifyPlaylistId } from "@/data/content";

export default function PlaylistSpread() {
  return (
    <div>
      <h3 className="font-handwriting text-2xl text-neutral-800 mb-4">
        what i listen to
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
          width="100%"
          height="200"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "8px" }}
        />
      </motion.div>

      <p className="text-[8px] font-mono text-neutral-400 mt-2">
        swap playlist ID in src/data/content.ts
      </p>
    </div>
  );
}
