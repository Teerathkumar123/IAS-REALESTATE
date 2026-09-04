"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface BeveledCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "cyan";
  onClick?: () => void;
  maxTilt?: number;
}

export const BeveledCard: React.FC<BeveledCardProps> = ({
  children,
  className = "",
  variant = "glass",
  onClick,
  maxTilt = 8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion 3D Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "solid":
        return "bg-[#00F0FF] text-[#050811] border-[#00F0FF]";
      case "cyan":
        return "bg-[#0D1424]/90 text-[#00F0FF] border-[#00F0FF]/40 shadow-cyan-glow";
      case "glass":
      default:
        return "bg-[#0D1424]/75 backdrop-blur-md text-[#F8FAFC] border-[#00F0FF]/20 hover:border-[#00F0FF]/60 hover:shadow-cyan-glow";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group p-6 sm:p-8 border rounded-xl transition-all duration-300 ${getVariantStyles()} ${className}`}
    >
      {/* Specular Light Sheen */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 255, 0.15), transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
