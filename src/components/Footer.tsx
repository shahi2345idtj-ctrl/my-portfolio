"use client";

import React from "react";
import { portfolioData } from "@/../data/content";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const { footer, personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A] py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Brand & info */}
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="font-heading font-bold text-lg text-white">
                {personal.name}
                <span className="text-accent">.</span>
              </span>
              <span className="text-xs text-gray-500">|</span>
              <span className="text-xs text-gray-400">
                Thejus Engineering College, Thrissur
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {footer.copyright} · {footer.builtWith}
            </p>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/[0.08] hover:border-accent/40 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200 shadow-sm transform hover:-translate-y-0.5"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="text-accent group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

