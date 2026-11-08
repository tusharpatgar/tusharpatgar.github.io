import React from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  CheckCircle2,
  GitBranch,
  Terminal,
} from "lucide-react";
import type { Project } from "../data/portfolioData";
import portfolioContent from "../content/portfolio.json";
import siteContent from "../content/site.json";

const PROJECTS = portfolioContent.projects as Project[];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/50 hover:bg-slate-900/90 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 backdrop-blur-sm"
    >
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 -z-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent blur-2xl rounded-full" />

      {project.image && <img src={project.image} alt={project.imageAlt || project.title} className="w-full h-44 object-cover border-b border-slate-800" />}
      {/* Card Header */}
      <div className="relative z-10 p-6 sm:p-7 pb-4">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
              project.badgeType === "primary"
                ? "bg-sky-500/15 text-sky-300 border border-sky-500/30"
                : project.badgeType === "accent"
                  ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
            }`}
          >
            {project.badge}
          </span>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-mono font-medium text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-600 transition-all"
            aria-label={`View GitHub repository for ${project.title}`}
          >
            <GitBranch className="w-3.5 h-3.5 text-sky-400" />
            <span>Repository</span>
          </a>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-sky-400 mt-1 mb-3">
          {project.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Architecture Strip */}
      <div className="relative z-10 px-6 sm:px-7 py-3 bg-slate-950/60 border-y border-slate-800/80 flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
        <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider shrink-0">
          Flow:
        </span>
        <span className="text-[11px] font-mono text-slate-300 truncate">
          {project.architecture}
        </span>
      </div>

      {/* Deliverables / Key Achievements */}
      <div className="relative z-10 p-6 sm:p-7 pt-4 space-y-2.5">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Key Implementation Highlights:
        </div>
        {project.deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      {/* Footer with Tech Stack and Action Link */}
      <div className="relative z-10 p-6 sm:p-7 pt-3 border-t border-slate-800/80 bg-slate-950/40 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:border-sky-500/50 transition-all shrink-0"
        >
          <span>View Source</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = siteContent;
  return (
    <section id="projects" className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            {projects.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {projects.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
