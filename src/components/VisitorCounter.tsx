"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    incrementAndFetch();
  }, []);

  async function incrementAndFetch() {
    // Try to increment. If Supabase isn't configured, show a fallback.
    try {
      // Increment
      await supabase.rpc("increment_visitors");

      // Fetch current count
      const { data } = await supabase
        .from("visitors")
        .select("count")
        .single();

      if (data) setCount(data.count);
    } catch {
      // Supabase not configured — show placeholder
      setCount(null);
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-1">
        {/* Retro LED-style counter */}
        {count !== null ? (
          <span className="font-mono text-[10px] text-neutral-500">
            visitor #{count.toLocaleString()}
          </span>
        ) : (
          <span className="font-mono text-[10px] text-neutral-600">
            visitor #—
          </span>
        )}
      </div>
      {/* Blinking dot — site is live */}
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
    </div>
  );
}
