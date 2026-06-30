"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Mode = "professional" | "personal";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  isProfessional: boolean;
  isPersonal: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("professional");

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "professional" ? "personal" : "professional"));
  }, []);

  return (
    <ModeContext.Provider
      value={{
        mode,
        toggleMode,
        isProfessional: mode === "professional",
        isPersonal: mode === "personal",
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) throw new Error("useMode must be used within a ModeProvider");
  return context;
}
