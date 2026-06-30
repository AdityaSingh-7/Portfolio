"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/content";

export default function BlogPostPage() {
  const { isPersonal } = useMode();
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-36 px-6 flex items-center justify-center">
        <p className="font-mono text-sm text-neutral-500">post not found</p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen pt-36 pb-20 px-6 transition-colors duration-500"
      style={{
        backgroundColor: isPersonal ? "#f5f0e8" : "#0a0a0a",
        color: isPersonal ? "#1a1a1a" : "#ededed",
      }}
    >
      <article className="max-w-3xl mx-auto">
        {!isPersonal ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <a href="/blog" className="text-[10px] font-mono text-neutral-500 hover:text-pro-accent transition-colors">&larr; back</a>
            <h1 className="mt-8 text-3xl font-light text-neutral-100 tracking-tight">{post.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-xs text-neutral-500 font-mono">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>{post.readTime} read</span>
            </div>
            <div className="mt-10 text-sm text-neutral-400 leading-relaxed space-y-4">
              <p>{post.excerpt}</p>
              <p>Full post renders from <code className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-[10px] font-mono">/content/blog/{slug}.mdx</code></p>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <a href="/blog" className="text-[10px] font-mono text-neutral-500 hover:text-red-500 transition-colors">[back]</a>
            <div className="mt-8 bg-white border border-neutral-200 p-8 shadow-[3px_3px_0px_#2b2b2b] relative" style={{ transform: "rotate(-0.2deg)" }}>
              <div className="absolute -top-3 left-8 bg-[rgba(255,245,200,0.8)] px-3 py-0.5 text-[8px] font-mono text-neutral-500">blog post</div>
              <h1 className="font-handwriting text-3xl text-neutral-800">{post.title}</h1>
              <div className="mt-2 text-[9px] font-mono text-neutral-400 uppercase">{post.date} / ~{post.readTime}</div>
              <div className="mt-8 text-sm text-neutral-600 leading-relaxed space-y-4 font-handwriting text-base">
                <p>{post.personalExcerpt}</p>
                <p>full post at <code className="px-1.5 py-0.5 bg-neutral-800 text-white text-[9px] font-mono">/content/blog/{slug}.mdx</code></p>
              </div>
            </div>
          </motion.div>
        )}
      </article>
    </main>
  );
}
