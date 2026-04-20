"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const logos = [
  { id: 1, src: "/brand1-1.svg", alt: "Ultra Prestigious" },
  { id: 2, src: "/brand1-2.svg", alt: "Power XR2" },
  { id: 3, src: "/brand1-3.svg", alt: "Ultimate Winner" },
  { id: 4, src: "/brand1-4.svg", alt: "International Mega Standard" },
  { id: 5, src: "/brand1-5.svg", alt: "Logoipsum" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white font-nunito">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-[900] text-center text-[#1a1a1a] mb-16 leading-tight">
          Trusted By Over <span className="text-orange-500">90K+</span> Companies Worldwide
        </h2>

        {/* ─── DESKTOP VIEW (Grid) ─── */}
        <div className="hidden lg:flex items-center justify-between gap-8 opacity-60">
          {logos.map((logo) => (
            <div key={logo.id} className="flex-1 flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* ─── MOBILE VIEW (Carousel) ─── */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 3 },
            }}
            className="logo-swiper"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="flex justify-center items-center h-20 grayscale opacity-70">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}