"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ChevronRight, Terminal } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "AI Stack", href: "/#ai-stack" },
  { label: "Architecture", href: "/#workflow" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/#home"
          className="group flex items-center gap-2.5 text-white font-semibold tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] shadow-sm shadow-blue-500/30">
            <div className="w-full h-full bg-[#090a0f] rounded-[7px] flex items-center justify-center group-hover:bg-transparent transition-colors">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-slate-100 uppercase">
              {profile.name}
            </span>
            <span className="text-[10px] text-blue-400 font-mono tracking-tight -mt-0.5">
              GenAI Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Links */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors border border-transparent hover:border-white/10"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/30 transition-all hover:scale-[1.02]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0c14]/98 border-b border-white/10 px-6 py-6 mt-3 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.05]"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 text-white text-xs font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
