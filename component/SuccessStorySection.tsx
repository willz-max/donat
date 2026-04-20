"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

const SuccessStorySection = () => {
  return (
    <section className="relative w-full py-24 px-6 lg:px-20 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <div className="flex flex-col space-y-6 z-10">
          <div className="flex items-center gap-4">
            <span className="text-amber-500 font-serif italic text-2xl">Success Story</span>
            <div className="w-16 h-[1.5px] bg-amber-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1c1c1c] leading-[1.1] tracking-tight">
            We Help Fellow Nonprofits Access The Funding Tools, Training
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Our secure online donation platform allows you to make contributions quickly and safely. 
            Choose from various payment methods and set up one-time.exactly.
          </p>
          
          <div className="pt-4">
            <button className="group flex items-center gap-3 border border-zinc-300 rounded-full px-10 py-4 text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all duration-300">
              Our Success Story
              <FaArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- RIGHT CONTENT --- */}
        <div className="relative flex items-center justify-end">
          
          {/* 1. EXPERIENCE BADGE (Smaller and Higher up as requested) */}
          <div className="absolute -left-10 lg:-left-20 top-4 flex flex-col items-center z-10">
            <div className="[writing-mode:vertical-lr] rotate-180 flex items-center gap-2">
               <span className="text-amber-500 font-bold uppercase tracking-widest text-[11px]">Years of</span>
               <span className="text-[#6b7385] font-black text-xl uppercase tracking-[0.2em]">Experience</span>
            </div>
            {/* Reduced size of 16 */}
            <span className="text-[#6b7385] font-black text-7xl lg:text-8xl leading-none mt-2 opacity-60">16</span>
          </div>

          {/* 2. MAIN HERO IMAGE */}
          <div className="relative w-full lg:w-[500px] aspect-[1.1/1] rounded-[45px] overflow-hidden shadow-sm">
            <Image 
              src="/story-1.png" 
              alt="Success Story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 3. ADAM CRUZ CARD (Positioned lower to reveal the badge above) */}
          <motion.div 
            animate={{ x: [-20, 20, -20] }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-10 -left-6 lg:-left-20 w-full max-w-[320px] bg-white p-8 rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] z-30"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-black text-[#1c1c1c]">Adam Cruz</h4>
              {/* Double Quote Styling */}
              <div className="flex text-amber-500">
                <FaQuoteRight className="text-4xl" />
              </div>
            </div>
            
            <p className="text-gray-500 text-sm leading-[1.8]">
              Our success stories highlight the real life impact of your donations & the resilience of those we help. 
              These narratives showcase the power of compassion.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;