"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/../data/content";
import {
  Send,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const { hero, personal, socialLinks } = portfolioData;
  const [imageError, setImageError] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "mail":
      default:
        return <Mail size={18} />;
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/[0.08] w-fit mb-6 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.statusText}</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.1] mb-6">
              {hero.headlineLine1}{" "}
              <span className="text-accent inline-block relative">
                {hero.headlineHighlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              {hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-black bg-accent hover:bg-accent-hover transition-all duration-200 shadow-[0_0_25px_rgba(247,147,30,0.35)] hover:shadow-[0_0_35px_rgba(247,147,30,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.primaryCtaText}</span>
                <Send size={16} className="-rotate-12 translate-y-[-1px]" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-white hover:text-accent bg-transparent hover:bg-white/[0.05] border border-white/10 hover:border-accent/40 transition-all duration-200"
              >
                <span>{hero.secondaryCtaText}</span>
                <ArrowUpRight size={18} className="text-gray-400 group-hover:text-accent" />
              </button>
            </div>

            {/* Connect with me row */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
                Connect with me
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Shahid's ${item.name}`}
                    className="w-11 h-11 rounded-xl bg-[#141414] border border-white/[0.08] hover:border-accent/60 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-[#1A1A1A] transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(247,147,30,0.2)] transform hover:-translate-y-0.5"
                  >
                    {getSocialIcon(item.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photo Card with Organic Shape & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Organic Card Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[36px] bg-gradient-to-b from-[#1C1C1C] via-[#141414] to-[#0E0E0E] p-3 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
              
              {/* Inner frame with rounded corners matching reference */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#181818] flex items-center justify-center border border-white/[0.04]">
                
                {/* Subtle spotlight inside card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/15 blur-2xl rounded-full pointer-events-none" />

                {/* Photo or stylized avatar fallback */}
                {!imageError ? (
                  <>
                    <img
                      src={hero.photoPath}
                      alt={hero.photoAlt}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Seamless dark blend at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1E1E1E] to-[#121212]">
                    <div className="w-28 h-28 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center text-accent mb-4 shadow-[0_0_30px_rgba(247,147,30,0.2)]">
                      <GraduationCap size={52} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">Shahid</h3>
                    <p className="text-xs text-accent font-medium mb-3">B.Tech CSE (AI) · Year 1</p>
                    <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                      Thejus Engineering College, Thrissur
                    </p>
                    <span className="mt-4 text-[11px] text-gray-500 bg-[#161616] px-3 py-1 rounded-full border border-white/5">
                      Replace /public/shahid.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Chat Bubble Tag at Top-Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-left-5 z-20"
              >
                <div className="relative bg-white text-gray-900 px-4 py-2 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] font-semibold text-xs sm:text-sm flex items-center gap-1.5 border border-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{hero.chatBubbleText}</span>
                  {/* Chat tail */}
                  <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
                </div>
              </motion.div>

              {/* Experience / Status Badge at Bottom-Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -right-3 sm:-right-4 z-20"
              >
                <div className="bg-white text-gray-900 px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex items-center gap-2.5 border border-white/90">
                  <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-accent">
                    <Sparkles size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">KTU Kerala</p>
                    <p className="font-heading font-bold text-xs text-gray-900 leading-tight">
                      {hero.experienceBadgeText}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small Decorative Floating Dots Matching Reference */}
              {/* 1. Green Dot (top-right of photo) */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 right-20 sm:right-28 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399] z-10 pointer-events-none"
              />

              {/* 2. Blue Hollow Ring (top-right corner) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 right-6 sm:right-10 w-4.5 h-4.5 rounded-full border-[2.5px] border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] z-10 pointer-events-none"
              />

              {/* 3. Red/Pink Dot (mid-right side) */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/3 -right-3 sm:-right-5 w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_12px_#F43F5E] z-10 pointer-events-none"
              />

              {/* 4. Subtle Orange glow dot (bottom-left) */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-12 -left-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#F7931E] z-10 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

