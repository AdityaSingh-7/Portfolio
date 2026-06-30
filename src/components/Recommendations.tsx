"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase, Recommendation } from "@/lib/supabase";

export default function Recommendations() {
  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [formType, setFormType] = useState<"movie" | "music">("movie");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchRecs();
  }, []);

  async function fetchRecs() {
    const { data } = await supabase
      .from("recommendations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setRecs(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from("recommendations")
      .insert({ type: formType, title: title.trim(), submitted_by: name.trim() || "anon" });

    if (!error) {
      setSubmitted(true);
      setTitle("");
      setName("");
      fetchRecs();
      setTimeout(() => setSubmitted(false), 3000);
    }
    setSubmitting(false);
  }

  const movieRecs = recs.filter((r) => r.type === "movie");
  const musicRecs = recs.filter((r) => r.type === "music");

  return (
    <div>
      <h3 className="font-handwriting text-2xl text-neutral-800 mb-4">
        recommend me something
      </h3>

      {/* Submit form */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFormType("movie")}
            className={`px-3 py-1 text-[10px] font-mono border transition-colors ${
              formType === "movie" ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-300 text-neutral-500 hover:border-neutral-500"
            }`}
          >
            movie/show
          </button>
          <button
            type="button"
            onClick={() => setFormType("music")}
            className={`px-3 py-1 text-[10px] font-mono border transition-colors ${
              formType === "music" ? "bg-neutral-800 text-white border-neutral-800" : "border-neutral-300 text-neutral-500 hover:border-neutral-500"
            }`}
          >
            music
          </button>
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={formType === "movie" ? "movie or show name..." : "artist / song / album..."}
          className="w-full px-3 py-2 bg-neutral-50 border-b-2 border-neutral-200 text-sm outline-none focus:border-red-500 transition-colors font-handwriting"
          maxLength={100}
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name (optional)"
          className="w-full px-3 py-1.5 bg-neutral-50 border-b border-neutral-200 text-xs outline-none focus:border-neutral-400 transition-colors font-mono"
          maxLength={50}
        />

        <button
          type="submit"
          disabled={submitting || !title.trim()}
          className="px-4 py-1.5 bg-neutral-800 text-white text-[10px] font-mono hover:bg-red-500 transition-colors disabled:opacity-40 disabled:hover:bg-neutral-800 shadow-[2px_2px_0px_#e63946]"
        >
          {submitting ? "sending..." : submitted ? "sent!" : "recommend"}
        </button>
      </form>

      {/* Display recs */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-2">movies / shows</p>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {movieRecs.length === 0 ? (
              <p className="text-[10px] text-neutral-400 font-mono italic">none yet — be the first</p>
            ) : (
              movieRecs.map((rec, i) => (
                <motion.div
                  key={rec.id || i}
                  className="text-[11px] text-neutral-700 font-handwriting flex justify-between items-baseline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="truncate">{rec.title}</span>
                  <span className="text-[8px] font-mono text-neutral-400 flex-shrink-0 ml-2">— {rec.submitted_by}</span>
                </motion.div>
              ))
            )}
          </div>
        </div>

        <div>
          <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-2">music</p>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {musicRecs.length === 0 ? (
              <p className="text-[10px] text-neutral-400 font-mono italic">none yet — be the first</p>
            ) : (
              musicRecs.map((rec, i) => (
                <motion.div
                  key={rec.id || i}
                  className="text-[11px] text-neutral-700 font-handwriting flex justify-between items-baseline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="truncate">{rec.title}</span>
                  <span className="text-[8px] font-mono text-neutral-400 flex-shrink-0 ml-2">— {rec.submitted_by}</span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
