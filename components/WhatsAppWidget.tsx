"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export const WhatsAppWidget: React.FC = () => {
  const [hoveredWidget, setHoveredWidget] = useState<"whatsapp" | "instagram" | "facebook" | null>(null);

  const whatsappNumber = "918667841110";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20IAS%20Real%20Estate%20%26%20Builders%2C%20I%20am%20interested%20in%20your%20property%20services.`;
  const instagramUrl = "https://www.instagram.com/ias_realestate?igsi=ajMzajd3dzloNzR0";
  const facebookUrl = "https://www.facebook.com/p/IAS-Real-estate-Builders-61582430488508/";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end space-y-2.5 sm:space-y-3">
      {/* Expandable Label Tooltip */}
      <AnimatePresence>
        {hoveredWidget && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex flex-col items-end figma-glass py-2 px-3.5 rounded-md shadow-2xl bg-[#0D1424]/90 border border-[#00F0FF]/30 backdrop-blur-md"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase font-bold">
              {hoveredWidget === "whatsapp"
                ? "DIRECT WHATSAPP"
                : hoveredWidget === "facebook"
                ? "OFFICIAL FACEBOOK"
                : "OFFICIAL INSTAGRAM"}
            </span>
            <span className="text-xs font-sans font-medium text-white">
              {hoveredWidget === "whatsapp"
                ? "+91 8667841110"
                : hoveredWidget === "facebook"
                ? "IAS Real estate Builders"
                : "@ias_realestate"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Facebook Floating Action Button */}
        <motion.a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredWidget("facebook")}
          onMouseLeave={() => setHoveredWidget(null)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group p-2.5 sm:p-3.5 md:p-4 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-blue-400/40 shrink-0"
          aria-label="Follow IAS Real Estate & Builders on Facebook"
          data-cursor="FACEBOOK"
        >
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-current" />
        </motion.a>

        {/* Instagram Floating Action Button */}
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredWidget("instagram")}
          onMouseLeave={() => setHoveredWidget(null)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group p-2.5 sm:p-3.5 md:p-4 bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-pink-400/40 shrink-0"
          aria-label="Follow IAS Real Estate & Builders on Instagram"
          data-cursor="INSTAGRAM"
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
        </motion.a>

        {/* WhatsApp Floating Action Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredWidget("whatsapp")}
          onMouseLeave={() => setHoveredWidget(null)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group p-2.5 sm:p-3.5 md:p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-emerald-400/40 shrink-0"
          aria-label="Contact IAS Real Estate & Builders on WhatsApp"
          data-cursor="WHATSAPP"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};
