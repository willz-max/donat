"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    lines: ["15 Maniel Lane, Front Line", "Berlin, Germany"],
    bgColor: "bg-[#1a5d4e]",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    lines: ["(+58-125) 25-3158", "+163-524-4521"],
    bgColor: "bg-orange-500",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    lines: ["info@donet.com", "allinfo@donet.com"],
    bgColor: "bg-[#0d221f]",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Have Questions?",
    lines: ["Discover more by visiting", "us or joining our community"],
    bgColor: "bg-orange-600",
  },
];

export default function ContactDetails() {
  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side: Info List */}
          <div className="p-8 lg:p-16 flex flex-col gap-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`${info.bgColor} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-2xl shrink-0 shadow-lg`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-gray-500 font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Map */}
          <div className="p-4 lg:p-8">
            <div className="w-full h-[400px] lg:h-full min-h-[500px] rounded-[30px] overflow-hidden grayscale relative border border-gray-100">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.243171813084!2d13.4023028770289!3d52.51139433722718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d954605991%3A0xc399318a6614138b!2sBerlin%20State%20Opera!5e0!3m2!1sen!2sde!4v1715500000000!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4">
                <button className="bg-white/90 backdrop-blur shadow-md px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                   Open in Maps ↗
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}