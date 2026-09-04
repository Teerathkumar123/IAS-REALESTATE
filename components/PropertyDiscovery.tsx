"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROPERTIES, Property } from "@/data/properties";

type CategoryFilter = "ALL" | "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "DEVELOPMENT";

export const PropertyDiscovery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const categories: CategoryFilter[] = ["ALL", "RESIDENTIAL", "COMMERCIAL", "LAND", "DEVELOPMENT"];

  const filteredProperties =
    activeFilter === "ALL"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.category === activeFilter);

  return (
    <section id="properties" className="relative py-28 md:py-36 bg-[#080A0C] text-[#F5F5F2] border-t border-[#2A2F34]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono tracking-[0.3em] text-[#D6B36A] uppercase font-bold">
                02 / PORTFOLIO
              </span>
              <span className="h-[1px] w-12 bg-[#D6B36A]/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F5F2] uppercase leading-[1.05]">
              FIND YOUR NEXT<br />
              <span className="text-[#D6B36A] italic">OPPORTUNITY.</span>
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 bg-[#111417] p-1.5 border border-[#2A2F34] rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[11px] font-sans tracking-[0.2em] font-bold uppercase transition-all duration-300 rounded-sm ${
                  activeFilter === cat
                    ? "bg-[#D6B36A] text-[#080A0C] shadow-md"
                    : "text-[#A7ADB4] hover:text-[#F5F5F2] hover:bg-[#171B1F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProperty(property)}
                className="group relative flex flex-col justify-between bg-[#111417] border border-[#2A2F34] rounded-sm overflow-hidden hover:-translate-y-1.5 hover:border-[#D6B36A]/50 transition-all duration-500 cursor-pointer shadow-xl"
                data-cursor="VIEW"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-[#171B1F]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover mono-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111417] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-[#080A0C]/90 backdrop-blur-md border border-[#2A2F34] text-[9px] font-mono tracking-[0.2em] text-[#D6B36A] uppercase font-bold rounded-sm">
                      {property.category}
                    </span>
                    <span className="px-3 py-1 bg-[#D6B36A] text-[#080A0C] text-[9px] font-sans tracking-[0.2em] uppercase font-bold rounded-sm shadow-md">
                      {property.priceTag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center space-x-1.5 text-[#D6B36A] text-xs mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-sans tracking-wider uppercase font-bold text-[#A7ADB4]">{property.location}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#F5F5F2] group-hover:text-[#D6B36A] transition-colors uppercase mb-3">
                      {property.title}
                    </h3>

                    <p className="text-xs text-[#A7ADB4] font-normal line-clamp-2 leading-relaxed mb-4">
                      {property.description}
                    </p>
                  </div>

                  {/* Footer Specification & Action Link */}
                  <div className="pt-4 border-t border-[#2A2F34] flex items-center justify-between text-xs font-sans">
                    <span className="text-[10px] text-[#A7ADB4] font-mono uppercase tracking-wider font-semibold">
                      {property.specs}
                    </span>
                    <div className="flex items-center space-x-1 text-[#D6B36A] group-hover:translate-x-1 transition-transform duration-300 font-bold">
                      <span className="text-[10px] tracking-[0.2em] uppercase">VIEW</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Property Quick Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080A0C]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#171B1F] border border-[#2A2F34] max-w-2xl w-full p-6 md:p-10 rounded-sm overflow-hidden text-[#F5F5F2] relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 text-[#A7ADB4] hover:text-[#D6B36A] text-sm font-sans tracking-widest uppercase font-bold"
              >
                [ CLOSE ]
              </button>

              <span className="text-[10px] font-mono tracking-[0.3em] text-[#D6B36A] uppercase block mb-2 font-bold">
                {selectedProperty.category} OPPORTUNITY
              </span>
              <h3 className="font-serif text-3xl font-medium uppercase text-[#F5F5F2] mb-2">
                {selectedProperty.title}
              </h3>
              <p className="text-xs text-[#A7ADB4] font-mono uppercase tracking-wider mb-6 font-semibold">
                LOCATION: {selectedProperty.location}
              </p>

              <div className="h-64 w-full mb-6 overflow-hidden rounded-sm border border-[#2A2F34]">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover mono-image"
                />
              </div>

              <p className="text-sm font-normal text-[#A7ADB4] leading-relaxed mb-6">
                {selectedProperty.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#2A2F34]">
                <span className="text-xs font-mono text-[#D6B36A] font-semibold">
                  {selectedProperty.specs}
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProperty(null)}
                  className="px-6 py-3 bg-[#D6B36A] text-[#080A0C] text-xs font-sans tracking-[0.2em] font-bold uppercase rounded-sm hover:bg-[#F0D18A] shadow-md"
                >
                  ENQUIRE ABOUT THIS PROPERTY →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
