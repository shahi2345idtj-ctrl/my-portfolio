import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStackStrip from "@/components/TechStackStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] bg-grid-pattern relative selection:bg-[#F7931E] selection:text-black">
      {/* Subtle top spotlight glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-gradient pointer-events-none z-0" />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <TechStackStrip />
        <Projects />
        <About />
        <Skills />
        <Blog />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

