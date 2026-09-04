"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest("[data-cursor]");
      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute("data-cursor");
        setCursorText(text || "");
      } else if (target.closest("a, button, input, [role='button']")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer Square Reticle Ring */}
      <motion.div
        animate={{
          x: position.x - (isHovered ? 24 : 12),
          y: position.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderColor: isHovered ? "#00F0FF" : "rgba(0, 240, 255, 0.6)",
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
        className="fixed top-0 left-0 border border-[#00F0FF]/60 rounded-sm flex items-center justify-center shadow-cyan-glow"
      >
        {cursorText && (
          <span className="font-mono text-[9px] text-[#00F0FF] tracking-widest uppercase font-extrabold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Center Dot */}
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 35 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00F0FF] rounded-full shadow-cyan-glow"
      />
    </div>
  );
};
