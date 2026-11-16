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
import { CORE_CAPABILITIES, PERSONAL_INFO } from "../data/portfolioData";

export const About: React.FC = () => {
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
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Data with Precision & Reliability
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Architecting robust data foundations for enterprise FinTech systems, ensuring regulatory consistency, schema integrity, and sub-second analytical readiness.
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
              Professional Background
            </h3>

            <p>
              I am a <strong className="text-sky-300 font-semibold">Data Engineer</strong> with{" "}
              <strong className="text-white font-semibold">1.4 years of professional experience</strong>{" "}
              developing enterprise-scale ETL/ELT pipelines and cloud-based data solutions across{" "}
              <span className="text-slate-200">FinTech</span> and <span className="text-slate-200">analytics</span> domains.
              I specialize in designing <span className="text-sky-300">Medallion (Bronze–Silver–Gold) lakehouses</span>,
              streaming <span className="text-cyan-300">Change Data Capture (CDC)</span> flows, and establishing automated reconciliation
              frameworks that safeguard financial transaction integrity.
            </p>

            <p>
              My hands-on technical core blends <strong className="text-slate-100 font-semibold">Python, PySpark, SQL, and T-SQL</strong>{" "}
              with the modern cloud ecosystem: <strong className="text-slate-100 font-semibold">AWS (S3, Glue, DMS, Lambda, Redshift, CloudWatch)</strong>,
              Databricks, Delta Lake, Apache Airflow, and dbt. Having delivered production pipelines at{" "}
              <strong className="text-slate-200 font-semibold">Wissen Digital</strong> and <strong className="text-slate-200 font-semibold">Endava Solutions</strong>,
              I am experienced in orchestrating incremental processing, leading system cutovers, and resolving mission-critical data discrepancies.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>Medallion Architecture & ACID Delta Tables</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>Zero-Data-Loss CDC Ingestion (AWS DMS)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>Star Schema Modeling & Analytical Data Marts</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <span>Automated Financial Reconciliation & Audit Checks</span>
              </div>
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
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-slate-100 tracking-wide uppercase text-xs text-sky-400">
                Key Professional Summary
              </h4>

              <div className="space-y-3 divide-y divide-slate-800/80 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Role</span>
                  <span className="text-slate-100 font-medium">{PERSONAL_INFO.role}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-100 font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Experience</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.experienceYears} Years</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Industries</span>
                  <span className="text-slate-100 font-medium">FinTech & Retail Analytics</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Primary Cloud</span>
                  <span className="text-sky-400 font-medium">Amazon Web Services (AWS)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sky-300 hover:underline font-mono text-xs"
                  >
                    {PERSONAL_INFO.email}
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
              Core Engineering Capabilities
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Battle-tested architectural competencies across the modern data lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_CAPABILITIES.map((cap, index) => {
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

