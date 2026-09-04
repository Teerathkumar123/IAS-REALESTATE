"use client";

import React from "react";

export const HubtownSideNav: React.FC = () => {
  const navItems = [
    { label: "FUTURE", href: "#hero" },
    { label: "INNOVATION", href: "#about" },
    { label: "COLLABORATION", href: "#locations" },
    { label: "EXCELLENCE", href: "#why-ias" },
    { label: "PURPOSE", href: "#process" },
    { label: "LEGACY", href: "#contact" },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-1/2 -translate-y-1/2 left-6 md:left-10 z-30 space-y-4 pointer-events-auto">
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="group flex items-center space-x-3 text-xs font-mono tracking-[0.25em] text-[#D5E0FF]/60 hover:text-[#D5E0FF] transition-all uppercase"
        >
          <span className="w-2 h-2 bg-[#D5E0FF]/40 group-hover:bg-[#D5E0FF] group-hover:scale-125 transition-all rounded-none" />
          <span className="opacity-70 group-hover:opacity-100 transition-opacity font-medium">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};
