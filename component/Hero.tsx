"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown, FaPlay, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
// --- Mock Data ---
const SLIDES = [
  {
    id: 0,
    image: "/hero_bg_1.png", 
    subtitle: "Making a Difference",
    title: "Changing Lives, One Donation at a Time",
    description: "Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support.",
  },
  {
    id: 1,
    image: "/hero_bg_2.png",
    subtitle: "Help the Children",
    title: "Brighter Futures for the Next Generation",
    description: "Your contributions provide education, nutrition, and clean water to children in remote areas across the globe.",
  },
  {
    id: 2,
    image: "/hero_bg_3.png",
    subtitle: "Emergency Relief",
    title: "Rapid Response in Times of Global Crisis",
    description: "Supporting communities affected by natural disasters and providing immediate medical aid and shelter when it's needed most.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white mt-20">
      {/* 1. CROSS-FADE BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={SLIDES[index].image}
              alt="Background"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. MAIN CONTENT (Left Side) */}
      <div className="container relative z-20 mx-auto flex h-full items-center px-6 md:px-16">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h4 className="mb-4 text-2xl md:text-3xl italic text-[#f9a606] font-serif">
                {SLIDES[index].subtitle}
              </h4>
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-8xl">
                {SLIDES[index].title}
              </h1>
              <p className="mb-10 max-w-xl text-lg text-gray-200 opacity-90 leading-relaxed">
                {SLIDES[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-8">
            <Link href="#" className="group h-14 flex items-center gap-3 rounded-full bg-[#125b50] px-10 py- text-lg font-bold transition hover:bg-[#0e4940]">
              Discover Now 
              <FaArrowRight className="transition-transform group-hover:-rotate-45" />
            </Link>
            <div className="relative flex items-center justify-center">
              {/* Pulsing glow animation */}
              <span className="absolute h-16 w-16 animate-ping rounded-full bg-[#f9a606] opacity-30"></span>
              <Link href="#" className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#f9a606] transition hover:scale-110">
                <FaPlay className="ml-1 text-white" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. VERTICAL CAROUSEL (Right Side) */}
      <div className="absolute right-10 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex">
        {/* Up Arrow */}
        <button onClick={prevSlide} className="text-white/40 hover:text-white transition">
          <FaChevronUp size={24} />
        </button>

        {/* Thumbnails Container */}
        <div className="relative flex flex-col gap-6 py-4">
          {/* Faint vertical line background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/20" />
          
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setIndex(i)}
              className={`relative z-10 h-14 w-14 overflow-hidden rounded-full border-2 transition-all duration-500 ${
                index === i 
                  ? "scale-125 border-[#f9a606] opacity-100" 
                  : "border-transparent opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
              }`}
            >
              <img src={slide.image} alt="thumb" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Down Arrow */}
        <button onClick={nextSlide} className="text-white/40 hover:text-white transition">
          <FaChevronDown size={24} />
        </button>
      </div>

      {/* DECORATIVE ELEMENTS */}
      {/* Hand drawing lines in bottom left */}
      <div className="absolute bottom-12 left-12 opacity-20 hidden lg:block pointer-events-none">
        <img src="/images/hand-lines.png" alt="" className="w-48" />
      </div>

      {/* Brush stroke at the bottom edge */}
      <img 
        src="/images/brush-stroke.png" 
        alt="" 
        className="absolute -bottom-5 right-0 z-10 w-125 opacity-80 pointer-events-none"
      />
    </section>
  );
};

export default Hero;