"use client";

import React from "react";
import { portfolioData } from "@/../data/content";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const { about, personal } = portfolioData;

  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="text-accent" size={24} />;
      case 1:
        return <BookOpen className="text-accent" size={24} />;
      case 2:
        return <Award className="text-accent" size={24} />;
      case 3:
      default:
        return <GraduationCap className="text-accent" size={24} />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 md:py-28 relative bg-[#0D0D0D]/60 border-t border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>{about.subheading}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Curious Student, <span className="text-accent">Future Innovator</span>
          </h2>
        </div>

        {/* Top Grid: Bio & College Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 font-body text-gray-300 text-base sm:text-lg leading-relaxed">
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-5 rounded-2xl bg-[#141414] border-l-4 border-accent border-y border-r border-white/[0.06]">
              <p className="font-heading italic text-gray-300 text-sm sm:text-base">
                {about.quote}
              </p>
              <span className="block mt-2 text-xs font-semibold text-accent">
                — {personal.name}, First-Year CSE (AI)
              </span>
            </div>
          </div>

          {/* College Feature Card */}
          <div className="lg:col-span-5">
            <div className="h-full bg-gradient-to-b from-[#181818] to-[#121212] rounded-3xl p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-44 h-44 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6">
                  <GraduationCap size={28} />
                </div>

                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                  Academic Affiliation
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                  {personal.college}
                </h3>
                <p className="text-xs text-gray-400 mb-4 flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent flex-shrink-0" />
                  <span>Vellarakkad, Thrissur, Kerala</span>
                </p>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] mb-4">
                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    Affiliated with <strong className="text-white">{personal.university}</strong>
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Department of Computer Science & Engineering (Artificial Intelligence)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Current Year: 1st Year (2024-2028)
                </span>
                <span className="text-accent font-semibold">KTU Scheme</span>
              </div>
            </div>
          </div>
        </div>

        {/* Honest Student Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {about.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-[#141414] hover:bg-[#181818] p-5 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-accent/40 transition-all duration-200 group text-left"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform">
                {getStatIcon(idx)}
              </div>
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white group-hover:text-accent transition-colors">
                {stat.value}
              </p>
              <p className="font-body text-xs sm:text-sm font-semibold text-gray-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Educational Journey Timeline */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-8">
            <Calendar size={18} className="text-accent" />
            <h3 className="font-heading text-2xl font-bold text-white">
              Educational Timeline
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-white/[0.08] space-y-10">
            {about.timeline.map((item, index) => (
              <div key={item.title} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    index === 0
                      ? "bg-accent border-accent shadow-[0_0_12px_#F7931E]"
                      : "bg-[#141414] border-gray-600 group-hover:border-accent"
                  } transition-colors`}
                />

                {/* Timeline Card */}
                <div className="bg-[#141414] group-hover:bg-[#171717] p-5 sm:p-6 rounded-2xl border border-white/[0.08] group-hover:border-accent/30 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-300 mt-0.5">
                    {item.institution} · <span className="text-gray-400">{item.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

