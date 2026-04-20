"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { image } from "framer-motion/client";
import Image from "next/image";

// 1. Add your image paths here
const features = [
  { 
    title: "Donor Friendly", 
    image: "/feature-icon1.svg" // Replace with your image path
  },
  { 
    title: "Fundraising Trust", 
    image: "/feature-icon2.svg" // Replace with your image path
  },
  { 
    title: "Charity Donate", 
    image: "/feature-icon1.svg" // Replace with your image path
  },
  { 
    title: "Treatment Help", 
    image: "/feature-icon2.svg" // Replace with your image path
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-[40px] p-10 shadow-xl shadow-gray-100 border border-gray-50 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Background Heart Decoration */}
            <FaHeart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-50 text-9xl -z-10 opacity-50" />

            {/* 2. Image Placeholder for your Emoji */}
            <div className="mb-6 h-20 w-20 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.
            </p>

            {/* Link */}
            <Link 
              href="/details" 
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-1 group-hover:text-teal-700 group-hover:border-teal-700 transition-all"
            >
              View Details <FaArrowRight className="-rotate-45" size={12} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}