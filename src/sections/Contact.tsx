import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  FileDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import siteContent from "../content/site.json";

export const Contact: React.FC = () => {
  const { personal, contact, media } = siteContent;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/80">
      {/* Background ambient gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-t from-sky-600/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              {contact.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              {contact.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {contact.description}
            </p>
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Direct Info */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                    {contact.directContactLabel}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1">
                    {personal.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {personal.role}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{contact.locationLabel}</div>
                      <div className="font-medium text-slate-200">
                        {personal.location} <span className="text-xs text-slate-500">{contact.timezoneSuffix}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{contact.emailLabel}</div>
                      <div className="font-mono text-xs sm:text-sm text-slate-200 font-medium">
                        {personal.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {contact.availabilityLabel}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="space-y-4 md:border-l md:border-slate-800/80 md:pl-8">
                {/* Send Email Action */}
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent(contact.subject)}`}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contact.emailButton}</span>
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/70 hover:border-slate-600 font-medium text-sm transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{contact.copiedButton}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{contact.copyButton}</span>
                    </>
                  )}
                </button>

                {/* Resume Download Action */}
                <a
                  href={media.resume || personal.resumePdfUrl}
                  download="Tushar_Patgar_Data_Engineer_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 font-medium text-sm transition-all"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>{contact.resumeButton}</span>
                </a>

                {/* Social Profiles Grid */}
                <div className="pt-2 grid grid-cols-2 gap-2.5">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/40 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/40 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
