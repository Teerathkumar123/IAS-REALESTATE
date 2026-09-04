"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Layers } from "lucide-react";

interface SlideItem {
  id: string;
  title: string;
  tag: string;
  component: React.ReactNode;
}

interface FigmaPageDeckProps {
  slides: SlideItem[];
}

export const FigmaPageDeck: React.FC<FigmaPageDeckProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const isAnimatingRef = useRef(false);

  const goToSlide = (newIndex: number) => {
    if (newIndex === currentSlide || isAnimatingRef.current) return;
    if (newIndex < 0 || newIndex >= slides.length) return;

    setDirection(newIndex > currentSlide ? "down" : "up");
    isAnimatingRef.current = true;
    setCurrentSlide(newIndex);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 850);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Mouse Wheel Debounced Scroll Lock
  useEffect(() => {
    let lastWheelTime = 0;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 850 || isAnimatingRef.current) return;

      if (Math.abs(e.deltaY) > 25) {
        lastWheelTime = now;
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  // Touch Swipe Support for Mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  // Variants for 3D Figma Section Transitions
  const variants = {
    initial: (dir: "up" | "down") => ({
      opacity: 0,
      scale: 0.94,
      y: dir === "down" ? "50vh" : "-50vh",
      rotateX: dir === "down" ? -8 : 8,
      filter: "blur(6px)",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      y: "0vh",
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: "up" | "down") => ({
      opacity: 0,
      scale: 0.94,
      y: dir === "down" ? "-50vh" : "50vh",
      rotateX: dir === "down" ? 8 : -8,
      filter: "blur(6px)",
      transition: {
        duration: 0.7,
        ease: [0.7, 0, 0.84, 0],
      },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#030A14] select-none">
      {/* Active Section Slide Window */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full flex flex-col justify-center items-center overflow-y-auto no-scrollbar"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-auto py-16 md:py-24">
            {slides[currentSlide].component}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Figma Slide Control Dock (Right Edge) */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-3.5 figma-glass py-3.5 px-2 rounded-full border border-emeraldAcc-500/30 shadow-2xl">
        {/* Up Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-1.5 rounded-full transition-all ${
            currentSlide === 0
              ? "opacity-25 cursor-not-allowed text-slate-500"
              : "text-emeraldAcc-500 hover:bg-emeraldAcc-500/20 hover:scale-110"
          }`}
          aria-label="Previous Section Slide"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Slide Dots / Indicator */}
        <div className="flex flex-col space-y-2.5 my-1 items-center">
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className="group relative flex items-center justify-center"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              >
                {/* Tooltip on Hover */}
                <span className="absolute right-full mr-3 hidden group-hover:block whitespace-nowrap text-[9px] font-mono tracking-widest text-emeraldAcc-500 uppercase px-2.5 py-1 figma-glass rounded-sm shadow-xl font-bold">
                  0{index + 1} • {slide.tag}
                </span>

                {/* Dot */}
                <span
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-3 h-3 bg-emeraldAcc-500 shadow-emerald-glow scale-125"
                      : "w-2 h-2 bg-slate-600 group-hover:bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Down Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-1.5 rounded-full transition-all ${
            currentSlide === slides.length - 1
              ? "opacity-25 cursor-not-allowed text-slate-500"
              : "text-emeraldAcc-500 hover:bg-emeraldAcc-500/20 hover:scale-110"
          }`}
          aria-label="Next Section Slide"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Figma Deck Counter (Bottom Left) */}
      <div className="fixed left-4 md:left-8 bottom-5 z-50 flex items-center space-x-3 figma-glass px-3.5 py-1.5 rounded-full border border-emeraldAcc-500/20 text-[10px] font-mono uppercase font-bold text-slate-300 pointer-events-none">
        <Layers className="w-3.5 h-3.5 text-emeraldAcc-500 animate-pulse" />
        <span>
          PAGE <span className="text-emeraldAcc-500">0{currentSlide + 1}</span> / 0{slides.length}
        </span>
        <span className="h-3 w-[1px] bg-slate-700" />
        <span className="text-slate-400 hidden sm:inline">{slides[currentSlide].tag}</span>
      </div>
    </div>
  );
};
