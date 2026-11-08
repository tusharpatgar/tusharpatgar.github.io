import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Briefcase, Calendar, MapPin, Tag } from "lucide-react";
import siteContent from "../content/site.json";

export const ExperienceSection: React.FC = () => {
  const { experience } = siteContent;
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            {experience.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {experience.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {experience.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-500 via-indigo-500 to-emerald-500/30" />

          <div className="space-y-12">
            {experience.entries.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${event.company}-${event.period}`}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center z-10 shadow-lg shadow-sky-500/20">
                    <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900/95 transition-all duration-300 shadow-xl backdrop-blur-sm text-left"
                    >
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-400">
                          {event.domain}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{event.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {event.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mb-1">
                        <span>{event.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {event.location}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="mt-4 space-y-2.5">
                        {event.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
                      <div className="mt-5 pt-4 border-t border-slate-800/80">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {event.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
