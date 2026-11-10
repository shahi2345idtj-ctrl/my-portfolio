"use client";

import React from "react";
import { portfolioData } from "@/../data/content";
import {
  Code2,
  FileCode,
  Layers,
  Globe,
  Layout,
  Palette,
  GitBranch,
  Terminal,
  Coffee,
} from "lucide-react";

export default function TechStackStrip() {
  const { techStackStrip } = portfolioData;

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "python":
        return <Code2 className="text-[#3776AB]" size={20} />;
      case "javascript":
        return <FileCode className="text-[#F7DF1E]" size={20} />;
      case "react":
        return <Layers className="text-[#61DAFB]" size={20} />;
      case "next.js":
        return <Globe className="text-white" size={20} />;
      case "html / css":
        return <Layout className="text-[#E34F26]" size={20} />;
      case "tailwind css":
        return <Palette className="text-[#38BDF8]" size={20} />;
      case "git / github":
        return <GitBranch className="text-[#F05032]" size={20} />;
      case "c language":
        return <Terminal className="text-[#A8B9CC]" size={20} />;
      case "java":
        return <Coffee className="text-[#ED8B00]" size={20} />;
      default:
        return <Code2 className="text-accent" size={20} />;
    }
  };

  // Duplicate items for seamless continuous marquee on small screens
  const marqueeItems = [...techStackStrip.items, ...techStackStrip.items];

  return (
    <section
      id="tech-stack"
      aria-label="Technologies"
      className="relative w-full bg-[#111111] border-y border-white/[0.06] py-8 sm:py-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
          {/* Left Title & Subtitle */}
          <div className="flex-shrink-0 text-left lg:max-w-xs">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
              {techStackStrip.title}
            </h2>
            <p className="font-body text-xs sm:text-sm text-gray-400 mt-1">
              {techStackStrip.subtitle}
            </p>
          </div>

          {/* Desktop Row: Grid / Flex badges */}
          <div className="hidden lg:flex items-center justify-end flex-wrap gap-3">
            {techStackStrip.items.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#171717] hover:bg-[#1E1E1E] border border-white/[0.06] hover:border-accent/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(247,147,30,0.12)] cursor-default"
              >
                <div className="p-1 rounded-lg bg-black/40 group-hover:scale-110 transition-transform">
                  {getTechIcon(tech.name)}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-gray-200 group-hover:text-white">
                    {tech.name}
                  </span>
                  <span className="block text-[10px] text-gray-400 group-hover:text-accent font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Auto-Scrolling Marquee */}
        <div className="lg:hidden mt-4 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 py-2">
            {marqueeItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#171717] border border-white/[0.06] flex-shrink-0 shadow-sm"
              >
                <div className="p-1 rounded-lg bg-black/40">
                  {getTechIcon(tech.name)}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-gray-200">
                    {tech.name}
                  </span>
                  <span className="block text-[9px] text-gray-400 font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

