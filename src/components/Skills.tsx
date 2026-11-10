"use client";

import React, { useState } from "react";
import { portfolioData } from "@/../data/content";
import {
  Code2,
  Globe,
  Brain,
  Terminal,
  Sparkles,
  Check,
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "programming languages":
        return <Code2 size={20} className="text-accent" />;
      case "web development":
        return <Globe size={20} className="text-accent" />;
      case "ai & data science (foundations)":
        return <Brain size={20} className="text-accent" />;
      case "developer tools & workflow":
        return <Terminal size={20} className="text-accent" />;
      default:
        return <Sparkles size={20} className="text-accent" />;
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case "proficient":
        return "w-4/5"; // 80%
      case "intermediate":
        return "w-3/5"; // 60%
      case "foundational":
        return "w-2/5"; // 40%
      case "learning":
      default:
        return "w-1/4"; // 25%
    }
  };

  const categories = ["All", ...skills.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skills
      : skills.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Skills and Technical Competencies"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-accent">Toolkit</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Foundations cultivated through coursework at Thejus Engineering College,
            self-driven projects, and continuous hands-on practice.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-black shadow-[0_0_20px_rgba(247,147,30,0.3)]"
                  : "bg-[#141414] text-gray-300 hover:text-white border border-white/[0.06] hover:bg-[#1A1A1A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedCategories.map((group) => (
            <div
              key={group.title}
              className="bg-[#141414] hover:bg-[#171717] rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-accent/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    {getCategoryIcon(group.title)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {group.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {group.skills.length} skills listed
                    </span>
                  </div>
                </div>

                {/* Skills Chips / Progress Rows */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <span className="font-medium text-gray-200 group-hover/item:text-white flex items-center gap-1.5">
                          <Check size={13} className="text-accent" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-semibold text-accent px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                          {skill.level}
                        </span>
                      </div>

                      {/* Subtle Progress Track */}
                      <div className="w-full h-1.5 bg-[#222222] rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-500 ${getLevelWidth(
                            skill.level
                          )}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud summary */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-[10px] text-gray-400 bg-white/[0.03] px-2 py-0.5 rounded"
                  >
                    #{s.name.replace(/\s+/g, "").toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

