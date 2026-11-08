import React from "react";
import { motion } from "motion/react";
import {
  FileDown,
  ArrowRight,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import siteContent from "../content/site.json";

export const Hero: React.FC = () => {
  const { hero, personal, media } = siteContent;
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow & grid effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/15 to-purple-700/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{hero.availabilityLabel}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-400" />
                {personal.location}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                {hero.name}
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {hero.title}
              </div>
            </div>

            {/* Tagline & Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              {hero.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={(media.resume || personal.resumePdfUrl)}
                download="Tushar_Patgar_Data_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>{hero.secondaryCtaLabel}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
              >
                <span>{hero.contactCtaLabel}</span>
              </a>
            </div>

            {/* Verified Social links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs uppercase font-medium tracking-wider text-slate-500">{hero.statsLabel}</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-800 hover:text-slate-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-800 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-800 hover:text-rose-400 transition-colors"
                aria-label="Email Tushar Patgar"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Column: Interactive Pipeline Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative space-y-4"
          >
            {media.heroImage && <img src={media.heroImage} alt={media.heroImageAlt || hero.name} className="w-full max-h-64 object-cover rounded-2xl border border-slate-800" />}
            {/* Terminal Window Mockup */}
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl shadow-sky-950/50 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>{hero.terminalTitle}</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {hero.terminalStatus}
                </div>
              </div>

              {/* Terminal Code / Pipeline Stream Content */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed overflow-x-auto">
                <div className="text-slate-500">{hero.terminalComment}</div>
                <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">{hero.terminalCode}</pre>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                  {hero.terminalMetrics.map((metric) => <div key={metric.label} className="flex items-center justify-between text-slate-400"><span>{metric.label}</span><span className="text-slate-200">{metric.value}</span></div>)}
                </div>
              </div>
              </div>
            </div>

            {/* Quick Stat Floating Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md"
            >
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-200">{hero.experienceCardTitle}</div>
                <div className="text-[11px] text-slate-400">{hero.experienceCardSubtitle}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Telemetry Metric Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {personal.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/90 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

