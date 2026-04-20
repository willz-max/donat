"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  const checkItems = [
    { label: "Charity For Foods", color: "text-teal-700" },
    { label: "Charity For Water", color: "text-orange-500" },
    { label: "Charity For Education", color: "text-orange-600" },
    { label: "Charity For Medical", color: "text-teal-900" },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden bg-white font-nunito">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Stylized Image */}
        <div className="relative">
          <div className="absolute inset-0 scale-110 opacity-10 grayscale pointer-events-none">
             <div className="w-full h-full bg-[url('/brush-bg.png')] bg-contain bg-no-repeat bg-center" />
          </div>

          <div className="relative p-6">
            <div className="absolute inset-0 border-[10px] border-teal-800 rounded-[50px] translate-x-3 translate-y-3 -z-10" />
            <div className="relative">
              <img 
                src="/smiling-kids.png" 
                alt="Happy Children" 
                className="w-full h-auto object-cover rounded-[40px]"
              />
              
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col gap-4">
          {/* Subtitle - Caveat Font & Reduced Size */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500 font-bold text-2xl font-caveat italic">
              About Us Donat
            </span>
            <div className="h-[2px] w-12 bg-orange-500 opacity-60" />
          </div>

          {/* Main Title - Nunito Font & Reduced Size */}
          <h2 className="text-3xl md:text-4xl font-[900] text-gray-900 leading-tight font-nunito">
            We Believe That We Can <br /> Save More Life's With You
          </h2>

          <p className="text-gray-500 text-base leading-relaxed font-nunito">
            Donet is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country. We help nonprofits from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need.
          </p>

          {/* Checklist - Nunito Font & Reduced Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mt-2 font-nunito">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className={`${item.color} text-xl shrink-0`} />
                <span className="text-gray-900 font-extrabold text-base">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link 
            href="/about" 
            className="mt-6 bg-[#1a5d4e] hover:bg-orange-500 text-white font-black px-8 h-14 rounded-full flex items-center justify-center gap-3 self-start transition-all shadow-md group text-sm font-nunito"
          >
            About More 
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}