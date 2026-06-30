"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const { isPersonal } = useMode();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isPersonal ? "sent. i'll get back to you." : "Thank you. I'll be in touch.");
  };

  const socials = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <main
      className="min-h-screen pt-36 pb-20 px-6 transition-colors duration-500"
      style={{
        backgroundColor: isPersonal ? "#f5f0e8" : "#0a0a0a",
        color: isPersonal ? "#1a1a1a" : "#ededed",
      }}
    >
      <div className="max-w-2xl mx-auto">
        {!isPersonal ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-light tracking-tight">Contact</h1>
            <p className="mt-2 text-sm text-neutral-500 font-light">Open to opportunities and interesting conversations.</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-[rgba(255,245,200,0.8)] inline-block px-3 py-0.5 text-[8px] font-mono text-neutral-500 mb-4" style={{ transform: "rotate(-0.5deg)" }}>contact</div>
            <h1 className="font-handwriting text-4xl text-neutral-800">let&apos;s talk</h1>
          </motion.div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-xs transition-all ${
                !isPersonal
                  ? "border border-neutral-800 rounded-lg text-neutral-500 hover:text-neutral-200 hover:border-pro-accent/30 font-light"
                  : "bg-neutral-800 text-white font-mono shadow-[2px_2px_0px_#e63946] hover:shadow-[3px_3px_0px_#e63946]"
              }`}
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {!isPersonal ? (
            <>
              <div>
                <label className="block text-[10px] text-neutral-500 font-mono mb-2">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200 outline-none focus:border-pro-accent/50 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[10px] text-neutral-500 font-mono mb-2">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200 outline-none focus:border-pro-accent/50 transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-[10px] text-neutral-500 font-mono mb-2">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} rows={4} className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-200 outline-none focus:border-pro-accent/50 transition-colors resize-none" placeholder="What's on your mind?" />
              </div>
              <button type="submit" className="w-full py-2.5 bg-pro-accent text-white rounded-lg text-sm font-medium hover:bg-pro-accent-hover transition-colors">Send</button>
            </>
          ) : (
            <div className="bg-white border border-neutral-200 p-6 shadow-[3px_3px_0px_#2b2b2b] relative" style={{ transform: "rotate(0.2deg)" }}>
              <div className="absolute -top-3 right-10 bg-[rgba(255,245,200,0.8)] px-3 py-0.5 text-[8px] font-mono text-neutral-500">message form</div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[9px] font-mono text-neutral-400 mb-1">name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2 bg-neutral-50 border-b-2 border-neutral-200 text-sm outline-none focus:border-red-500 transition-colors font-handwriting" placeholder="who are you" />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-neutral-400 mb-1">email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2 bg-neutral-50 border-b-2 border-neutral-200 text-sm outline-none focus:border-red-500 transition-colors font-handwriting" placeholder="your@email" />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-neutral-400 mb-1">message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} rows={4} className="w-full px-3 py-2 bg-neutral-50 border-b-2 border-neutral-200 text-sm outline-none focus:border-red-500 transition-colors resize-none font-handwriting" placeholder="say something..." />
                </div>
                <button type="submit" className="w-full py-2 bg-neutral-800 text-white font-mono text-xs hover:bg-red-500 transition-colors shadow-[2px_2px_0px_#e63946]">send it</button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </main>
  );
}
