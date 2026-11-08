import React from "react";
import { motion } from "motion/react";
import {
  Layers,
  Database,
  ShieldCheck,
  RefreshCw,
  GitPullRequest,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import aboutContent from "../content/about.json";
import personalContent from "../content/personal.json";
import mediaContent from "../content/media.json";

export const About: React.FC = () => {
  const about = aboutContent;
  const personal = personalContent;
  const media = mediaContent;
  const capabilityIcons = [
    Layers,
    Database,
    RefreshCw,
    GitPullRequest,
    ShieldCheck,
    BarChart3,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            {about.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {about.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {about.intro}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              {about.biographyTitle}
            </h3>

            {about.biography.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {about.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" /><span>{highlight}</span></div>)}
            </div>
          </motion.div>

          {/* Quick Profile Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {media.aboutImage && <img src={media.aboutImage} alt={media.aboutImageAlt || personal.name} className="w-full rounded-2xl object-cover border border-slate-800" />}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-slate-100 tracking-wide uppercase text-xs text-sky-400">
                {about.summaryTitle}
              </h4>

              <div className="space-y-3 divide-y divide-slate-800/80 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.roleLabel}</span>
                  <span className="text-slate-100 font-medium">{personal.role}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.locationLabel}</span>
                  <span className="text-slate-100 font-medium">{personal.location}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.experienceLabel}</span>
                  <span className="text-emerald-400 font-semibold">{personal.experienceYears} Years</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.industriesLabel}</span>
                  <span className="text-slate-100 font-medium">{about.industries}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.primaryCloudLabel}</span>
                  <span className="text-sky-400 font-medium">{about.primaryCloud}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">{about.emailLabel}</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sky-300 hover:underline font-mono text-xs"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Capabilities Matrix */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
              {about.capabilityTitle}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {about.capabilitySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.capabilities.map((cap, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all duration-300 group shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-sky-500/15 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

