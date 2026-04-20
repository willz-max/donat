"use client";

import Image from "next/image";
import { FaPlay, FaArrowUp, FaArrowRight } from "react-icons/fa";

// Partner list based on your images
const partners = [
  { name: "Logoipsum", src: "/brand1-1.svg" },
  { name: "Ultra Prestigious", src: "/brand1-2.svg" },
  { name: "Power XR2", src: "/brand1-3.svg" },
  { name: "Winner Badge", src: "/brand1-4.svg" },
  { name: "International Standard", src: "/brand1-5.svg" },
];

const DonationCta = () => {
  

  return (
    <section className="relative w-full overflow-hidden bg-zinc-900">
      
      {/* ─── HERO CTA SECTION ─── */}
      <div className="relative min-h-175lg:min-h-[85vh] flex items-center pt-32 pb-20 px-6 lg:px-20">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-bg4-1.png" // replace with your hero image
            alt="Donation Hero"
            fill
            className="object-cover opacity-40 grayscale-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* ─── FLOATING DECORATIONS ─── */}
        {/* Red/Orange Blob - Top Left */}
        <div className="absolute top-[-5%] left-[5%] w-32 h-32 lg:w-48 lg:h-48 z-10 animate-float-slow hidden md:block">
          <img src="/story_shape.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Green/Dots Blob - Top Right */}
        <div className="absolute top-[2%] right-[-5%] w-48 h-48 lg:w-72 lg:h-72 z-10 animate-float-delayed hidden lg:block">
          <img src="/cta_shape2_2.png" alt="" className="w-full h-full object-contain" />
        </div>

      

        {/* White Brush Stroke - Left Side */}
        <div className="absolute bottom-[20%] left-[-2%] w-64 lg:w-96 z-10 opacity-90 pointer-events-none">
          <img src="/brush-stroke.png" alt="" className="w-full h-auto" />
        </div>

        {/* ─── MAIN CONTENT ─── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Headline */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Support And Contribute To Their Urgent Needs
              </h1>
            </div>

            {/* Watch Video Button */}
            <div className="flex flex-col items-center lg:items-end">
              <button className="group flex flex-col items-center transition-transform hover:scale-105 duration-300">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4 group-hover:bg-white/20">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <FaPlay className="text-amber-500 ml-1 text-xl lg:text-2xl" />
                  </div>
                </div>
                <span className="text-amber-400 text-2xl lg:text-3xl font-serif italic tracking-wide">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          <hr className="my-10 lg:my-16 border-white/20" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Heart Badge & Text */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left max-w-2xl">
              <div className="w-24 h-24 shrink-0 animate-pulse-slow">
                <img src="/cta-icon4.png" alt="Open Heart Badge" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-100">
                Every small contribution can create a <span className="text-amber-400">meaningful change.</span>
              </p>
            </div>

            {/* Main CTA */}
            <button className="group overflow-hidden bg-amber-500 hover:bg-teal-800 text-white font-bold py-4 px-12 rounded-full flex items-center gap-3 transition-all duration-500 shadow-xl">
              <span className="text-lg uppercase tracking-wider">Get Involved</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-2 -rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── PARTNER LOGOS SECTION ─── */}
      <div className="relative w-full bg-white py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* The Infinite Slider */}
            <div className="flex w-fit items-center gap-12 lg:gap-24 animate-scroll-infinite">
              {/* Loop through partners twice for a seamless transition */}
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index} 
                  className="shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className="h-10 md:h-14 lg:h-16 w-auto object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button - Positioned within the white section as per your second image */}
      
      </div>

      {/* ─── CUSTOM ANIMATIONS ─── */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite; animation-delay: 1s; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
        .animate-scroll-infinite {
          animation: scroll 25s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default DonationCta;