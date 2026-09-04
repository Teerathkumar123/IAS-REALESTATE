"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "PAVILION RESIDENCE",
      category: "RESIDENTIAL",
      image: "/images/residential.jpg",
      span: "lg:col-span-8 lg:row-span-2",
      height: "h-96 lg:h-[500px]",
    },
    {
      title: "VANGUARD TOWER",
      category: "COMMERCIAL",
      image: "/images/commercial.jpg",
      span: "lg:col-span-4 lg:row-span-1",
      height: "h-64 lg:h-[240px]",
    },
    {
      title: "APEX LAND PARCEL",
      category: "LAND DEVELOPMENT",
      image: "/images/land.jpg",
      span: "lg:col-span-4 lg:row-span-1",
      height: "h-64 lg:h-[244px]",
    },
    {
      title: "BRUTALIST VILLA",
      category: "CUSTOM BUILD",
      image: "/images/hero.jpg",
      span: "lg:col-span-6 lg:row-span-1",
      height: "h-72 lg:h-[320px]",
    },
    {
      title: "AURA MASTERPLAN",
      category: "MASTERPLANNING",
      image: "/images/featured.jpg",
      span: "lg:col-span-6 lg:row-span-1",
      height: "h-72 lg:h-[320px]",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#080E18] text-foreground border-t border-amber-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono tracking-[0.3em] text-accent-gold uppercase font-semibold">
                07 / VISUAL ARCHIVE
              </span>
              <span className="h-[1px] w-12 bg-amber-500/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground uppercase leading-[1.05]">
              ARCHITECTURAL<br />
              <span className="text-accent-gold italic">PORTFOLIO.</span>
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-slate-400 uppercase max-w-xs">
            EDITORIAL PREVIEW OF LUXURY BUILDS, LAND PROMOTIONS & COMMERCIAL LANDMARKS.
          </p>
        </div>

        {/* Asymmetric Masonry Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group overflow-hidden border border-amber-500/20 rounded-sm bg-[#0F172A] ${item.span} ${item.height}`}
              data-cursor="VIEW"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover mono-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Meta Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-accent-gold uppercase block mb-1 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-white uppercase">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2 bg-[#080E18]/80 backdrop-blur-md border border-amber-500/30 rounded-full text-accent-gold">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
