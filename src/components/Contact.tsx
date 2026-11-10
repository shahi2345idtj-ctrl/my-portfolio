"use client";

import React, { useState } from "react";
import { portfolioData } from "@/../data/content";
import {
  Mail,
  MapPin,
  GraduationCap,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const { contact, personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a short message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with realistic network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>{contact.subheading}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            {contact.description}
          </p>
        </div>

        {/* Contact Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy button */}
            <div className="bg-[#141414] p-6 rounded-3xl border border-white/[0.08] relative group">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-heading font-semibold text-white group-hover:text-accent transition-colors text-sm sm:text-base break-all"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-xs text-emerald-400 font-medium mt-2 inline-block">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* Location & College info */}
            <div className="bg-[#141414] p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Location
                  </span>
                  <p className="font-heading font-semibold text-white text-sm sm:text-base">
                    {contact.locationText}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    Campus
                  </span>
                  <p className="font-heading font-semibold text-white text-sm sm:text-base">
                    {contact.collegeText}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-[#141414] p-6 rounded-3xl border border-white/[0.08]">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#1A1A1A] hover:bg-[#202020] border border-white/[0.06] hover:border-accent/40 text-gray-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <span className="text-accent">{getSocialIcon(item.icon)}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-2xl relative">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="font-body text-xs sm:text-sm text-gray-400 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] text-white placeholder-gray-500 text-sm border ${
                      errors.name
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-white/[0.08] focus:border-accent"
                    } transition-colors outline-none`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                      <AlertCircle size={13} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] text-white placeholder-gray-500 text-sm border ${
                      errors.email
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-white/[0.08] focus:border-accent"
                    } transition-colors outline-none`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                      <AlertCircle size={13} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Shahid, I came across your portfolio and would love to chat about..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#1A1A1A] text-white placeholder-gray-500 text-sm border resize-none ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-white/[0.08] focus:border-accent"
                    } transition-colors outline-none`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base text-black bg-accent hover:bg-accent-hover transition-all duration-200 shadow-[0_0_25px_rgba(247,147,30,0.3)] hover:shadow-[0_0_35px_rgba(247,147,30,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1C1C1C] text-white px-5 py-3.5 rounded-2xl border border-emerald-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">
              Message Sent Successfully!
            </h4>
            <p className="text-xs text-gray-300">
              Thank you for reaching out. I will respond to your email soon!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

