"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alex Furnandes",
    role: "CEO, Founder",
    image: "/testi_3.png", // Replace with your image paths
    text: "“Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Check our event calendar for details. We prioritize your security. Our donation process uses the latest encryption technology to protect your personal and financial information. Donate with confidence knowing.”",
  },
  {
    id: 2,
    name: "Brandon Dixon",
    role: "CEO, Founder",
    image: "/testi_2.png", 
    text: "“Our donation process uses the latest encryption technology to protect your personal and financial information. Donate with confidence knowing Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Check our event calendar for details.”",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "CEO, Founder",
    image: "/testi_1.png",
    text: "“Stay informed about our upcoming events and campaigns. Whether it's a fundraising gala, a charity run, or a community outreach program, there are plenty of ways to get involved and support our cause. Check our event calendar for details. We prioritize your security. Our donation process uses the latest encryption technology to protect your information.”",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative w-full py-20 px-6 lg:px-20 bg-[#0a251e] overflow-hidden text-white min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* --- LEFT: ARCH IMAGE (Background Arches stay static) --- */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          
          {/* Static Decorative Arch Outlines */}
          <div className="absolute -left-6 -top-6 w-[320px] h-[450px] border-2 border-amber-500 rounded-t-full opacity-40 hidden md:block"></div>
          <div className="absolute -left-2 -top-2 w-[320px] h-[450px] border border-white/10 rounded-t-full hidden md:block"></div>
          
          <div className="relative w-[300px] h-[420px] md:w-[320px] md:h-[450px] z-10">
            {/* Animated Image Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-t-full overflow-hidden relative shadow-2xl"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Static Orange Badge */}
            <div className="absolute bottom-10 -left-6 bg-amber-500 p-5 rounded-tr-[40px] rounded-bl-[40px] shadow-xl z-20 flex items-center gap-2">
              <FaStar className="text-teal-950 text-sm" />
              <span className="text-teal-950 font-bold text-lg">5</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT: CONTENT (Header stays static, Quote/Name animates) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Static Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-amber-500"></div>
            <span className="text-amber-500 font-serif italic text-2xl">Testimonials</span>
          </div>

          {/* Static Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight">
            What People Say About <br /> Our Charity
          </h2>

          {/* Animated Testimonial Text & Bio */}
          <div className="min-h-[250px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-10">
                  {active.text}
                </p>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{active.name}</h4>
                  <p className="text-amber-500 font-medium tracking-wide uppercase text-sm">
                    {active.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- PAGINATION & PROGRESS BAR --- */}
          <div className="flex items-center gap-8 mt-16 max-w-lg">
            {/* Current Index */}
            <span className="text-4xl md:text-5xl font-black text-white tabular-nums">
              0{index + 1}
            </span>

            {/* Progress Bar */}
            <div className="relative flex-grow h-1 bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: `${((index + 1) / testimonials.length) * 100}%` }}
                className="h-full bg-amber-500"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            {/* Total Count */}
            <span className="text-lg md:text-xl font-bold text-gray-500">
              0{testimonials.length}
            </span>
          </div>
        </div>
      </div>

      {/* Background decoration line matching design bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-b-4 border-amber-500/20 rounded-bl-[100px] pointer-events-none hidden lg:block" />
    </section>
  );
};

export default TestimonialSection;