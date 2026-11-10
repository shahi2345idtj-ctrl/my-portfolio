"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/../data/content";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = portfolioData.navLinks.map((link) =>
        link.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#141414]/90 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#141414]/75 backdrop-blur-sm border border-white/[0.06]"
          }`}
        >
          {/* Logo with 2x2 orange grid icon */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full px-1"
          >
            <div className="w-6 h-6 rounded-md bg-[#1F1F1F] border border-white/10 flex items-center justify-center p-1 group-hover:border-accent/40 transition-colors">
              <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                <span className="w-1.5 h-1.5 rounded-[2px] bg-accent" />
                <span className="w-1.5 h-1.5 rounded-[2px] bg-accent/60" />
                <span className="w-1.5 h-1.5 rounded-[2px] bg-accent/60" />
                <span className="w-1.5 h-1.5 rounded-[2px] bg-accent" />
              </div>
            </div>
            <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-accent transition-colors">
              {portfolioData.personal.name}
              <span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {portfolioData.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-accent"
                        : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-accent rounded-full transition-all duration-300" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Orange Hire Me Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-black bg-accent hover:bg-accent-hover rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(247,147,30,0.3)] hover:shadow-[0_0_25px_rgba(247,147,30,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl bg-[#141414]/95 backdrop-blur-lg border border-white/[0.08] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col space-y-1">
              {portfolioData.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "text-accent bg-accent/10"
                          : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center py-3 text-sm font-semibold text-black bg-accent hover:bg-accent-hover rounded-xl transition-all shadow-[0_0_20px_rgba(247,147,30,0.3)]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

