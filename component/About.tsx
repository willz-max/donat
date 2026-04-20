"use client";

import React from "react";
import { motion } from "framer-motion"; 
import { FaHeart, FaHandHoldingHeart, FaDonate, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  const stats = [
    { label: "Incredible Volunteers", value: "15K+" },
    { label: "Successful Campaigns", value: "1K+", color: "text-[#F9A606]" },
    { label: "Monthly Donors", value: "15+" },
    { label: "Team Support", value: "35K+", color: "text-[#F9A606]" },
  ];

  const benefits = [
    "Providing essential resources to underserved communities.",
    "Offering support through educational and health programs.",
    "Facilitating volunteer opportunities for community involvement.",
  ];

  return (
    <div className="w-full bg-white font-sans text-[#333]">
      {/* ─── STATS SECTION ─── */}
      <div className="bg-[#f8f9fa] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-start md:items-center px-4 ${
                  i !== stats.length - 1 ? "md:border-r border-gray-300" : ""
                }`}
              >
                <h2 className={`text-4xl font-extrabold ${stat.color || "text-[#125B50]"}`}>
                  {stat.value}
                </h2>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT US CONTENT SECTION ─── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-16">
        
        {/* LEFT: IMAGES WITH BLOB SHAPES */}
        <div className="relative mb-24 flex justify-center lg:mb-0 lg:w-1/2">
          
          {/* Main Big Image - Fixed Blob Shape */}
          <div 
            className="relative h-[450px] w-[320px] md:h-[550px] md:w-[450px] overflow-hidden shadow-xl"
            style={{ borderRadius: "160px 60px 180px 160px" }} 
          >
            <img
              src="/about-main.png" 
              alt="Charity Work"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Smaller Girl Image (Overlay) - Circular + Floating Animation */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="absolute -bottom-12 right-0 md:-right-8 h-[220px] w-[220px] md:h-[280px] md:w-[280px] z-20"
          >
            <div className="h-full w-full rounded-full border-[12px] border-white shadow-2xl overflow-hidden">
                <img
                src="/about-small.png" 
                alt="Girl with bowl"
                className="h-full w-full object-cover grayscale"
                />
            </div>
          </motion.div>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl italic text-[#F9A606]" style={{ fontFamily: 'cursive' }}>
              About Us Charity
            </span>
            <div className="h-0.5 w-12 bg-[#F9A606]" />
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">
            Making A Difference, One Life At A Time
          </h1>

          <p className="mb-10 text-gray-500 leading-relaxed text-lg">
            Our secure online donation platform allows you to make contributions quickly and
            safely. Choose from various payment methods and set up one-time or recurring
            donations with ease. Your support helps us continue our mission.
          </p>

          {/* Icon Boxes */}
          <div className="mb-10 flex flex-col gap-10 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#125B50] text-white rotate-45 rounded-2xl shadow-lg">
                <FaHandHoldingHeart size={28} className="-rotate-45" />
              </div>
              <span className="text-lg font-bold text-[#1a1a1a] leading-tight">Be a Hero, <br/> Contribute Now</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#F9A606] text-white rotate-45 rounded-2xl shadow-lg">
                <FaDonate size={28} className="-rotate-45" />
              </div>
              <span className="text-lg font-bold text-[#1a1a1a] leading-tight">Help Children <br/> with Donations</span>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200 mb-8" />

          {/* Checklist */}
          <ul className="mb-10 space-y-4">
            {benefits.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaHeart className="mt-1 shrink-0 text-[#F9A606]" size={14} />
                <span className="text-gray-700 font-medium">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="flex items-center gap-2 rounded-full bg-[#125B50] px-10 py-5 font-bold text-white transition-all hover:bg-[#0e4940] hover:translate-y-[-2px] shadow-lg">
            About More <FaArrowRight className="-rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;