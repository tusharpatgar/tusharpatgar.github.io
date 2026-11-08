import React from "react";
import { motion } from "motion/react";
import { BookOpen, GraduationCap, BadgeCheck } from "lucide-react";
import siteContent from "../content/site.json";

export const CertificationsEducation: React.FC = () => {
  const { credentials } = siteContent;
  const { education } = credentials;
  return (
    <section id="certifications-education" className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            {credentials.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {credentials.title}
          </h2>
        </div>

        {/* Certifications Card */}
        <div className="space-y-12">
          {credentials.certificationEntries.map((cert, index) => (
            <motion.div
              key={`cert-${cert.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase tracking-wider">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  [{cert.type}]
                </span>
                <span className="text-[11px] font-medium text-slate-500 shrink-0">{index + 1}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                {cert.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1">{cert.issuer}{cert.year ? ` · ${cert.year}` : ""}</p>
              {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 underline mt-2 inline-block">View credential</a>}
              {cert.verified && (
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" /> {credentials.certificationVerifiedLabel}
                </span>
              )}
            </motion.div>
          ))}

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: credentials.certificationEntries.length * 0.08 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 border border-indigo-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-slate-800 p-1">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                </div>
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 mb-3">
                  {credentials.educationBadge}
                </div>
                <h4 className="text-xl font-bold text-slate-100 sm:text-2xl">
                  {education.degree}
                </h4>
                <p className="text-sm text-slate-400 mt-1">{education.institution} · {education.period}</p>
                <p className="text-xs text-slate-500 mt-1">{education.field}</p>
                <div className="mt-3 pt-3 border-t border-slate-800/60 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <BookOpen className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;
