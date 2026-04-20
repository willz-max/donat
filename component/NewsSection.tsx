"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaTag, FaArrowRight } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "See Your Impact: Transparent Donation Tracking",
    date: "January 3, 2025",
    category: "Donations",
    image: "/blog-1.png", // Replace with your image
  },
  {
    id: 2,
    title: "Every Contribution Counts: Make a Difference",
    date: "January 3, 2025",
    category: "Educations",
    image: "/blog-2.png", // Replace with your image
  },
  {
    id: 3,
    title: "Partner for Good: Corporate Sponsorship",
    date: "January 3, 2025",
    category: "Medical Help",
    image: "/blog-3.png", // Replace with your image
  },
];

const NewsCard = ({ article }: { article: typeof articles[0] }) => {
  return (
    <div className="group bg-white rounded-[35px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
      {/* --- IMAGE AREA --- */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
        />
        {/* Subtle dark overlay that clears on hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <FaCalendarAlt size={14} />
            <span className="text-gray-400 font-medium normal-case">{article.date}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <FaTag size={14} />
            <span className="text-gray-400 font-medium normal-case">{article.category}</span>
          </div>
        </div>

        {/* Title (Elegant Sizing) */}
        <h3 className="text-xl lg:text-[22px] font-bold text-zinc-900 leading-tight mb-8 group-hover:text-teal-800 transition-colors">
          {article.title}
        </h3>

        {/* Read More Button */}
        <div className="mt-auto">
          <button className="flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm group/btn">
            Read More
            <FaArrowRight className="-rotate-45 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic for mobile (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-lg font-serif italic block mb-2">News & Articles</span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-zinc-900 tracking-tight">
            Our Latest News & Articles
          </h2>
        </div>

        {/* --- DISPLAY LOGIC --- */}
        <div className="relative">
          
          {/* Desktop Grid (3 items) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Mobile Carousel (1 item) */}
          <div className="lg:hidden w-full relative flex flex-col items-center">
            <div className="w-full min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <NewsCard article={articles[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-10">
              {articles.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-teal-800' : 'w-2 bg-gray-200'
                  }`} 
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewsSection;