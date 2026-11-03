import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center font-black text-slate-950 text-base shadow-md shadow-sky-500/20">
              TP
            </div>
            <div>
              <div className="font-bold text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-sky-400 transition-colors">
              Architecture
            </a>
            <a href="#certifications-education" className="hover:text-sky-400 transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Vite, Tailwind CSS & Motion.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>GitHub Pages Continuous Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
