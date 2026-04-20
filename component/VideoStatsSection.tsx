"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const stats = [
  { value: "15K+", label: "Incredible Volunteers" },
  { value: "1K+", label: "Successful Campaigns" },
  { value: "400+", label: "Monthly Donors" },
  { value: "35K+", label: "Team Support" },
];

export default function VideoStatsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-10 lg:py-0 lg:mb-40">
      
      {/* ─── VIDEO AREA ─── */}
      {/* Added horizontal padding (px-5) to help blend side decorations with white */}
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full overflow-hidden  shadow-2xl">
          
          {/* Background Image with Teal Overlay */}
          <div className="absolute inset-0">
            <img
              src="/video-thumb.png" 
              alt="Charity Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a4a44]/80 mix-blend-multiply" />
          </div>

          {/* Brush Stroke Decorations (Sides) */}
          <div className="absolute left-0 top-0 h-full w-12 md:w-24 opacity-60 z-10">
             <img src="/video-side-2.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-0 top-0 h-full w-12 md:w-24 opacity-60 z-10">
             <img src="/video-side-1.png" alt="" className="h-full w-full object-cover" />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/40 "
              />
              <button 
                onClick={() => setIsOpen(true)}
                className="relative w-20 h-20 md:w-28 md:h-28 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl md:text-3xl shadow-2xl hover:scale-110 transition-transform duration-300 group"
              >
                <FaPlay className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATISTICS BAR ─── */}
      {/* lg:absolute: Floats on desktop | relative: Stacks on mobile */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 w-full lg:w-[90%] max-w-7xl z-30 mt-10 lg:mt-0 px-5 lg:px-0">
        <div className="bg-[#7d8f8a] rounded-[40px] lg:rounded-[60px] py-10 lg:py-16 px-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 items-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 ${
                  index !== stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
                }`}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl lg:text-5xl font-[900] text-white font-nunito mb-1"
                >
                  {stat.value}
                </motion.span>
                <span className="text-white/90 text-sm lg:text-base font-bold tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-5xl font-light hover:text-orange-500"
            >
              &times;
            </button>
            <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/your-video-id" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
            </div>
        </div>
      )}
    </section>
  );
}