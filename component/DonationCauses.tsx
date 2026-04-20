"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
interface Cause {
  id: number;
  title: string;
  image: string;
  raised: number;
  goal: number;
  percent: number;
}

// --- Data (Replace paths with your actual images) ---
const CAUSES: Cause[] = [
  {
    id: 1,
    title: "Raise Fund for Clean & Healthy Water",
    image: "/donation-1.png", 
    raised: 1285,
    goal: 50000,
    percent: 2.57,
  },
  {
    id: 2,
    title: "Help us touch their lives of these youths",
    image: "/donation-2.png",
    raised: 1305,
    goal: 70000,
    percent: 1.86,
  },
  {
    id: 3,
    title: "Help Children poor Insurance & Medical",
    image: "/donation-3.png",
    raised: 860,
    goal: 80000,
    percent: 1.08,
  },
  {
    id: 4,
    title: "Your Little Help Can Heal Their Helps",
    image: "/donation-4.png",
    raised: 10,
    goal: 90000,
    percent: 0.01,
  },
];

// --- Sub-component: The Card ---
const DonationCard = ({ cause }: { cause: Cause }) => {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
      {/* Image with Zoom Transition */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-12 leading-tight min-h-12 group-hover:text-[#125B50] transition-colors cursor-pointer">
          {cause.title}
        </h3>

        {/* Progress Bar Area */}
        <div className="relative pt-6">
          {/* Percentage Tooltip */}
          <div
            className="absolute -top-4 bg-[#125B50] text-white text-[10px] font-bold py-1 px-2 rounded-md transform -translate-x-1/2"
            style={{ left: `${Math.max(cause.percent, 6)}%` }} 
          >
            {cause.percent}%
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[5px] border-t-[#125B50]" />
          </div>

          {/* Progress Bar Background */}
          <div className="h-[6px] w-full bg-[#e6edec] rounded-full relative">
            <div
              className="h-full bg-[#125B50] rounded-full relative transition-all duration-1000 ease-out"
              style={{ width: `${cause.percent}%` }}
            >
              {/* Teal End Dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#125B50] border-2 border-white rounded-full shadow-sm" />
            </div>
          </div>

          {/* Raised vs Goal */}
          <div className="flex justify-between mt-5 text-[15px] font-medium">
            <p className="text-gray-500">
              Raised - <span className="text-[#1a1a1a]">${cause.raised.toLocaleString()}.00</span>
            </p>
            <p className="text-[#125B50]">
              Goal - <span>${cause.goal.toLocaleString()}.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DonationCauses = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  // Auto-scrolling logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % CAUSES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8fafa] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#F9A606]" />
            <span className="text-[#F9A606] text-xl italic" style={{ fontFamily: 'cursive' }}>
              Lets Start Donating
            </span>
            <div className="h-px w-10 bg-[#F9A606]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight max-w-2xl mx-auto">
            See Your Impact: Transparent Donation Causes
          </h2>
        </div>

        {/* --- Desktop Card Grid --- */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-20">
          {CAUSES.map((cause) => (
            <DonationCard key={cause.id} cause={cause} />
          ))}
        </div>

        {/* --- Mobile Carousel --- */}
        <div className="lg:hidden mb-16 relative overflow-hidden min-h-125">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <DonationCard cause={CAUSES[mobileIndex]} />
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {CAUSES.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  mobileIndex === i ? "w-8 bg-[#125B50]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- Corrected Bottom Banner --- */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="
            relative 
            bg-white 
            border border-gray-200 
            /* Shape adjustment: Box on mobile, Pill on Desktop */
            rounded-[40px] md:rounded-full 
            p-10 md:p-3
            flex flex-col md:flex-row 
            items-center 
            text-center md:text-left 
            gap-8 md:gap-5
            shadow-sm
          ">
            {/* The Image Circle */}
            <div className="w-20 h-20 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
              <img 
                src="/donate-profile.png" 
                alt="Banner thumb" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* The Text */}
            <p className="
              text-2xl md:text-2xl 
              font-medium 
              text-[#1a1a1a] 
              flex-1 
              leading-snug
            " 
            style={{ fontFamily: 'cursive' }}
            >
              We are supporting over 10+ additional causes to aid people worldwide.
            </p>
            
            {/* The Action Button */}
            <Link 
              href="/causes" 
              className="
                flex items-center gap-2 
                bg-[#125B50] hover:bg-[#0e4940] 
                text-white 
                px-10 py-4 md:px-8 
                rounded-full 
                font-bold 
                transition-all 
                shadow-lg 
                whitespace-nowrap
              "
            >
              More Cause <FaArrowRight className="-rotate-45" size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonationCauses;