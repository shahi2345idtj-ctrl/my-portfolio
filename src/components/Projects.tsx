"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/../data/content";
import {
  ExternalLink,
  Github,
  FolderGit2,
  Sparkles,
  ArrowRight,
  X,
  Code2,
} from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Selected Work</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>
          <p className="font-body text-gray-400 text-sm sm:text-base max-w-md">
            Handcrafted applications combining responsive frontend design, data
            visualization, and foundational machine learning.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between bg-[#141414] hover:bg-[#181818] rounded-3xl border border-white/[0.08] hover:border-accent/40 transition-all duration-300 p-5 sm:p-6 hover:shadow-[0_12px_40px_rgba(247,147,30,0.12)] transform hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-[#0F0F0F] border border-white/[0.04] flex items-center justify-center p-4">
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl rounded-full pointer-events-none group-hover:bg-accent/20 transition-all" />

                  {/* Icon illustration based on project */}
                  <div className="flex flex-col items-center justify-center text-center z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-accent mb-2 group-hover:scale-110 transition-transform shadow-lg">
                      {idx === 0 ? (
                        <Sparkles size={28} />
                      ) : idx === 1 ? (
                        <FolderGit2 size={28} />
                      ) : idx === 2 ? (
                        <Code2 size={28} />
                      ) : (
                        <FolderGit2 size={28} />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
                      {project.tags[0]} Showcase
                    </span>
                  </div>

                  {/* Corner Badge */}
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent/90 text-black font-bold text-[10px] tracking-wider uppercase shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#1F1F1F] text-gray-300 text-[11px] font-medium border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/[0.05]"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-accent px-3 py-2 rounded-xl hover:bg-white/[0.05] transition-colors"
                  >
                    <span>Details</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-black bg-accent hover:bg-accent-hover px-3.5 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(247,147,30,0.25)] hover:shadow-[0_0_20px_rgba(247,147,30,0.4)]"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <span>Live</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-xl bg-[#161616] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Project Overview
            </span>
            <h3 className="font-heading text-2xl font-bold text-white mt-1 mb-3">
              {selectedProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-body text-gray-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                <span>View Source</span>
              </a>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-accent hover:bg-accent-hover transition-colors shadow-lg"
              >
                <span>Launch Demo</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

