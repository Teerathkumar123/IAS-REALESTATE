"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundAnimations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Slow Rotating Orbital Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] border border-[#00F0FF]/10 rounded-full border-dashed opacity-40"
      />

      {/* 2. Slow Rotating Orbital Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -right-40 w-[750px] h-[750px] border border-[#6366F1]/10 rounded-full border-dotted opacity-30"
      />

      {/* 3. Floating 3D Wireframe Cube 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotateX: [0, 180, 360],
          rotateY: [0, 180, 360],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-20 h-20 border border-[#00F0FF]/25 opacity-40 rounded-sm"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* 4. Floating 3D Wireframe Cube 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotateX: [360, 180, 0],
          rotateY: [360, 180, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-1/5 w-28 h-28 border border-[#6366F1]/25 opacity-30 rounded-sm"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* 5. Diagonal Shooting Light Trail 1 */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          y: ["-100%", "200%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        className="absolute top-0 left-0 w-64 h-[1.5px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-60 transform -rotate-45"
      />

      {/* 6. Diagonal Shooting Light Trail 2 */}
      <motion.div
        animate={{
          x: ["200%", "-100%"],
          y: ["-100%", "200%"],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
        className="absolute top-1/3 right-0 w-80 h-[1.5px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-50 transform rotate-45"
      />

      {/* 7. Drifting Ambient Bokeh Orb 1 */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-[#00F0FF]/05 rounded-full blur-3xl"
      />

      {/* 8. Drifting Ambient Bokeh Orb 2 */}
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/05 rounded-full blur-3xl"
      />

      {/* 9. Pulsing Horizontal & Vertical Grid Line Layer */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00F0FF 1px, transparent 1px), linear-gradient(to bottom, #00F0FF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};
