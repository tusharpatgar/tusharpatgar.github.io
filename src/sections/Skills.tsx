import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Specialized Data Engineering Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Comprehensive proficiency across distributed systems, cloud data platforms, dimensional modeling, and orchestration.
          </p>
        </div>

        {/* Skill Grid - Grouped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              className="rounded-2xl bg-slate-900/60 p-6 backdrop-blur-sm border border-slate-800/80 shadow-md hover:border-sky-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {category.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-sky-400/80" />
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">{category.description}</p>

              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 ${
                      skill.highlighted
                        ? "bg-sky-500/10 border-sky-500/30 text-sky-200"
                        : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-slate-100"
                    }`}
                  >
                    <span className="text-xs font-medium truncate">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-slate-500 shrink-0 capitalize">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Architecture Capabilities Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900/80 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-100">
              Methodologies & Architectural Patterns
            </h4>
            <p className="text-sm text-slate-400">
              Delta Lake ACID Upserts · Medallion Bronze-Silver-Gold · CDC via DMS · SCD Type 1 & 2 · Star Schema Data Marts
            </p>
          </div>
          <a
            href="#architecture"
            className="px-5 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:border-sky-500/50 text-xs font-semibold uppercase tracking-wider transition-all shrink-0"
          >
            Explore Interactive Pipeline Flow
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
