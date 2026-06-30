"use client";

import { ModeProvider } from "@/context/ModeContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ModeProvider>{children}</ModeProvider>;
}
