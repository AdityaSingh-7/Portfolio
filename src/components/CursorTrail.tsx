"use client";

import { useMode } from "@/context/ModeContext";
import { useEffect, useState } from "react";

export default function CursorTrail() {
  const { isPersonal } = useMode();
  const [splatters, setSplatters] = useState<{ x: number; y: number; id: number; rotation: number }[]>([]);

  useEffect(() => {
    if (!isPersonal) {
      setSplatters([]);
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const splatter = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        rotation: Math.random() * 360,
      };
      setSplatters((prev) => [...prev.slice(-6), splatter]);
      setTimeout(() => {
        setSplatters((prev) => prev.filter((s) => s.id !== splatter.id));
      }, 1500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isPersonal]);

  if (!isPersonal) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99]">
      {splatters.map((s) => (
        <div
          key={s.id}
          className="absolute w-3 h-3 opacity-15 transition-opacity duration-1000"
          style={{ left: s.x - 6, top: s.y - 6, transform: `rotate(${s.rotation}deg)` }}
        >
          <svg viewBox="0 0 12 12" fill="#2b2b2b">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="3" cy="4" r="1" />
            <circle cx="9" cy="8" r="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
