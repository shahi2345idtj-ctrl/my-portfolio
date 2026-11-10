"use client";

import React, { useState } from "react";
import { portfolioData, BlogPost } from "@/../data/content";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  X,
  Share2,
} from "lucide-react";

export default function Blog() {
  const { blogPosts } = portfolioData;
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      aria-label="Learning Journey and Articles"
      className="py-20 md:py-28 relative bg-[#0D0D0D]/50 border-t border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Student Journal</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Learning <span className="text-accent">Journey</span>
            </h2>
          </div>
          <p className="font-body text-gray-400 text-sm sm:text-base max-w-md">
            Notes, takeaways, and reflections as I navigate my first year of
            computer science and artificial intelligence engineering.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between bg-[#141414] hover:bg-[#181818] rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-accent/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(247,147,30,0.1)] transform hover:-translate-y-1.5 cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div>
                {/* Meta info row */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-3 border-b border-white/[0.05]">
                  <span className="text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
                  {post.snippet}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-white/[0.05]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-gray-300 bg-white/[0.04] px-2 py-0.5 rounded-md"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  <span>Read Notes</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl bg-[#161616] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <span className="text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                {activePost.category}
              </span>
              <span>{activePost.date}</span>
              <span>·</span>
              <span>{activePost.readTime}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {activePost.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {activePost.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-white/[0.08]">
              <p>{activePost.content}</p>
              <p className="text-gray-400 text-xs sm:text-sm italic">
                Published from Thejus Engineering College student lab. More technical explorations to follow!
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="px-5 py-2.5 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

