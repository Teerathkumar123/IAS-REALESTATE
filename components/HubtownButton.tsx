"use client";

import React, { useState } from "react";

interface HubtownButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "transparent";
  className?: string;
}

export const HubtownButton: React.FC<HubtownButtonProps> = ({
  children,
  href,
  onClick,
  variant = "transparent",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      {/* Outer Beveled Box */}
      <div
        className={`relative flex items-center justify-center px-6 py-3 border transition-all duration-300 ${
          variant === "solid"
            ? "bg-[#D5E0FF] text-[#020A19] border-[#D5E0FF] hover:bg-white"
            : "bg-[#D5E0FF]/10 text-[#D5E0FF] border-[#D5E0FF]/25 hover:border-[#D5E0FF] hover:bg-[#D5E0FF]/20"
        }`}
        style={{
          clipPath:
            "polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
        }}
      >
        {/* Animated Square Dot Matrix Icon (Hubtown signature) */}
        <div className="relative w-3.5 h-3.5 mr-3 grid grid-cols-2 gap-0.5 shrink-0">
          <span
            className={`w-1.5 h-1.5 transition-all duration-200 ${
              isHovered ? "bg-[#C5A059] scale-125" : variant === "solid" ? "bg-[#020A19]" : "bg-[#D5E0FF]"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 transition-all duration-200 delay-75 ${
              isHovered ? "bg-[#D5E0FF] scale-125" : variant === "solid" ? "bg-[#020A19]/50" : "bg-[#D5E0FF]/50"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 transition-all duration-200 delay-100 ${
              isHovered ? "bg-[#D5E0FF] scale-125" : variant === "solid" ? "bg-[#020A19]/50" : "bg-[#D5E0FF]/50"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 transition-all duration-200 delay-150 ${
              isHovered ? "bg-[#C5A059] scale-125" : variant === "solid" ? "bg-[#020A19]" : "bg-[#D5E0FF]"
            }`}
          />
        </div>

        {/* Text */}
        <span className="font-mono text-xs tracking-[0.25em] font-extrabold uppercase whitespace-nowrap">
          {children}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
