"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { isPersonal } = useMode();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
      style={{
        backgroundColor: isPersonal ? "rgba(245, 240, 232, 0.9)" : "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        borderColor: isPersonal ? "#ddd5c8" : "#1a1a1a",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <motion.span className="transition-all duration-300" whileHover={{ scale: 1.05 }}>
            {isPersonal ? (
              <span className="font-handwriting text-2xl text-neutral-800 font-bold" style={{ display: "inline-block", transform: "rotate(-2deg)" }}>
                adi
              </span>
            ) : (
              <span className="text-sm font-mono text-neutral-300 tracking-widest font-medium">AKS</span>
            )}
          </motion.span>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`transition-colors duration-300 hover:opacity-70 ${
                isPersonal
                  ? "text-neutral-700 font-handwriting text-base"
                  : "text-neutral-500 text-xs font-light hover:text-neutral-200"
              }`}>
                {link.label}
              </span>
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
