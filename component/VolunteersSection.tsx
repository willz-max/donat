"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlus, 
  FaTimes, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaBehance, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";

const volunteers = [
  {
    id: 1,
    name: "Michel Connor",
    role: "Volunteer",
    image: "/team-1.png", 
    color: "border-amber-500",
  },
  {
    id: 2,
    name: "Jessica Lauren",
    role: "Volunteer",
    image: "/team-2.png", 
    color: "border-teal-800",
  },
  {
    id: 3,
    name: "Daniel Thomas",
    role: "Volunteer",
    image: "/team-3.png", 
    color: "border-amber-500",
  },
];

const VolunteerCard = ({ volunteer }: { volunteer: typeof volunteers[0] }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Socials show if the button area is hovered or toggled
  const showSocials = isButtonHovered || isToggled;

  return (
    <div 
      className="flex flex-col items-center w-full max-w-[340px] mx-auto group"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => {
        setIsCardHovered(false);
        setIsButtonHovered(false);
        setIsToggled(false);
      }}
    >
      {/* Image Container */}
      <div className={`relative w-full aspect-[1/1.1] rounded-[40px] overflow-hidden border-b-[6px] ${volunteer.color} transition-all duration-500 shadow-sm bg-gray-100`}>
        <Image
          src={volunteer.image && volunteer.image.startsWith("/") ? volunteer.image : "/placeholder.jpg"}
          alt={volunteer.name}
          fill
          /* CHANGE 1: All images turn grayscale ONLY when the card is hovered */
          className={`object-cover transition-all duration-700 ${isCardHovered ? 'grayscale' : 'grayscale-0'}`}
          priority
        />

        {/* INTERACTIVE SOCIALS AREA */}
        <div 
          className="absolute inset-x-0 bottom-6 flex items-center justify-center z-20"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <AnimatePresence mode="wait">
            {showSocials ? (
              <motion.div 
                key="socials"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="flex items-center justify-center gap-2"
              >
                <button className="w-8 h-8 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white transition-colors">
                  <FaTwitter size={12} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white transition-colors">
                  <FaFacebookF size={12} />
                </button>

                {/* CHANGE 2: Button shows 'Times' (X) whenever showSocials is true (on hover) */}
                <button 
                  onClick={() => setIsToggled(!isToggled)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${showSocials ? 'bg-amber-500 text-white' : 'bg-teal-800 text-white'}`}
                >
                  <FaTimes size={16} />
                </button>

                <button className="w-8 h-8 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white transition-colors">
                  <FaInstagram size={12} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white transition-colors">
                  <FaBehance size={12} />
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="plus"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center shadow-md"
              >
                <FaPlus size={14} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Info Section */}
      <div className="text-center mt-4">
        <h3 className="text-lg lg:text-xl font-bold text-zinc-900 mb-0.5">{volunteer.name}</h3>
        <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">{volunteer.role}</p>
      </div>
    </div>
  );
};

const VolunteersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % volunteers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ─── HEADER ─── */}
        <div className="relative text-center mb-14">
          <span className="text-amber-500 text-lg font-serif italic block mb-1">Our Volunteer</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight">
            Meet The Optimistic Volunteer
          </h2>
          
          {/* Rotating Decoration */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 right-0 md:right-10 w-20 h-20 lg:w-28 lg:h-28 opacity-90 hidden sm:block pointer-events-none"
          >
            <img src="/hand-group.png" alt="Decorative" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* ─── MAIN DISPLAY ─── */}
        <div className="relative">
          
          <div className="hidden md:grid grid-cols-3 gap-8">
            {volunteers.map((v) => (
              <VolunteerCard key={v.id} volunteer={v} />
            ))}
          </div>

          <div className="md:hidden flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <VolunteerCard volunteer={volunteers[currentIndex]} />
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-1.5 mt-8">
              {volunteers.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-teal-800' : 'w-2 bg-gray-200'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;