"use client";

import { useMode } from "@/context/ModeContext";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FallingItem {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: number;
}

const ITEM_SYMBOLS = ["{ }", "< />", "fn()", "☕", "♪", ">>"];
const GAME_DURATION = 30000;
const CANVAS_W = 320;
const CANVAS_H = 400;
const PADDLE_W = 60;
const PADDLE_H = 12;

export default function CatchGame() {
  const { isPersonal } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [items, setItems] = useState<FallingItem[]>([]);
  const [paddleX, setPaddleX] = useState(CANVAS_W / 2 - PADDLE_W / 2);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);
  const gameStartRef = useRef(0);

  // Scroll listener for speech bubble
  useEffect(() => {
    if (!isPersonal || bubbleDismissed) return;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.35 && !showBubble) {
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPersonal, showBubble, bubbleDismissed]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current || !gameActive) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - PADDLE_W / 2;
    setPaddleX(Math.max(0, Math.min(CANVAS_W - PADDLE_W, x)));
  }, [gameActive]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!gameAreaRef.current || !gameActive) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left - PADDLE_W / 2;
    setPaddleX(Math.max(0, Math.min(CANVAS_W - PADDLE_W, x)));
  }, [gameActive]);

  const gameLoop = useCallback(() => {
    const now = Date.now();
    const elapsed = now - gameStartRef.current;

    if (elapsed >= GAME_DURATION) {
      setGameActive(false);
      setItems([]);
      return;
    }

    setTimeLeft(Math.ceil((GAME_DURATION - elapsed) / 1000));

    // Spawn new items
    if (now - lastSpawnRef.current > 600) {
      lastSpawnRef.current = now;
      setItems((prev) => [
        ...prev,
        {
          id: now + Math.random(),
          x: Math.random() * (CANVAS_W - 24),
          y: -20,
          speed: 2 + Math.random() * 2,
          type: Math.floor(Math.random() * ITEM_SYMBOLS.length),
        },
      ]);
    }

    // Move items
    setItems((prev) => {
      const still: FallingItem[] = [];
      let caught = 0;

      for (const item of prev) {
        const newY = item.y + item.speed;

        // Check catch
        if (
          newY >= CANVAS_H - PADDLE_H - 20 &&
          newY <= CANVAS_H - PADDLE_H &&
          item.x + 12 >= paddleX &&
          item.x <= paddleX + PADDLE_W
        ) {
          caught++;
          continue;
        }

        // Remove if off screen
        if (newY > CANVAS_H + 20) continue;

        still.push({ ...item, y: newY });
      }

      if (caught > 0) setScore((s) => s + caught);
      return still;
    });

    animFrameRef.current = requestAnimationFrame(gameLoop);
  }, [paddleX]);

  const startGame = () => {
    setScore(0);
    setItems([]);
    setGameActive(true);
    setTimeLeft(30);
    gameStartRef.current = Date.now();
    lastSpawnRef.current = Date.now();
    animFrameRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    if (gameActive) {
      animFrameRef.current = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [gameActive, gameLoop]);

  if (!isPersonal) return null;

  return (
    <>
      {/* Controller icon — large and noticeable */}
      <div className="fixed bottom-6 left-6 z-[200]">
        <AnimatePresence>
          {showBubble && !bubbleDismissed && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              className="absolute -top-16 left-0 bg-white border-2 border-neutral-800 shadow-[3px_3px_0px_#e63946] px-4 py-2.5 text-xs font-handwriting text-neutral-700 whitespace-nowrap cursor-pointer"
              onClick={() => { setIsOpen(true); setBubbleDismissed(true); setShowBubble(false); }}
            >
              feeling bored? play this game
              <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-white border-r-2 border-b-2 border-neutral-800 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => { setIsOpen(true); setBubbleDismissed(true); setShowBubble(false); }}
          className="w-14 h-14 bg-neutral-900 border-2 border-neutral-600 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#e63946] hover:shadow-[4px_4px_0px_#e63946] hover:border-red-400 transition-all"
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="20" height="12" rx="4" />
            <circle cx="8" cy="11" r="2" fill="white" />
            <circle cx="18" cy="11" r="2" fill="white" />
            <line x1="16" y1="8.5" x2="20" y2="8.5" />
            <line x1="18" y1="6.5" x2="18" y2="10.5" />
            <path d="M9 5 L9 3 L17 3 L17 5" />
          </svg>
        </motion.button>
      </div>

      {/* Game modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50"
            onClick={() => { setIsOpen(false); setGameActive(false); setItems([]); cancelAnimationFrame(animFrameRef.current); }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white border-2 border-neutral-800 shadow-[4px_4px_0px_#2b2b2b] p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">catch game</div>
                  <h3 className="font-handwriting text-lg text-neutral-800">catch the falling stuff</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-neutral-500">score: <span className="text-neutral-800 font-bold">{score}</span></p>
                  {gameActive && <p className="text-[10px] font-mono text-red-500">{timeLeft}s</p>}
                </div>
              </div>

              {/* Game area */}
              <div
                ref={gameAreaRef}
                className="relative bg-neutral-50 border border-neutral-200 overflow-hidden cursor-none select-none"
                style={{ width: CANVAS_W, height: CANVAS_H }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {gameActive ? (
                  <>
                    {/* Falling items */}
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="absolute text-sm font-mono text-neutral-700 select-none"
                        style={{ left: item.x, top: item.y }}
                      >
                        {ITEM_SYMBOLS[item.type]}
                      </div>
                    ))}

                    {/* Paddle */}
                    <div
                      className="absolute bottom-2 bg-neutral-800 rounded-sm"
                      style={{ left: paddleX, width: PADDLE_W, height: PADDLE_H }}
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-3">
                    {score > 0 && (
                      <div className="text-center">
                        <p className="font-handwriting text-xl text-neutral-800">score: {score}</p>
                        <p className="text-[10px] font-mono text-neutral-400 mt-1">
                          {score > 20 ? "impressive." : score > 10 ? "not bad." : "try again?"}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={startGame}
                      className="px-5 py-2 bg-neutral-800 text-white font-mono text-xs hover:bg-red-500 transition-colors shadow-[2px_2px_0px_#e63946]"
                    >
                      {score > 0 ? "play again" : "start"}
                    </button>
                    <p className="text-[9px] font-mono text-neutral-400 mt-2">move mouse/finger to catch items</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => { setIsOpen(false); setGameActive(false); setItems([]); cancelAnimationFrame(animFrameRef.current); }}
                className="mt-3 w-full text-center text-[9px] font-mono text-neutral-400 hover:text-neutral-800"
              >
                [close]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
