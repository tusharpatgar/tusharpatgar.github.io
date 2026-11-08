import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Database,
  ArrowRight,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  Clock,
  HardDrive,
  Sparkles,
  Info,
} from "lucide-react";
import siteContent from "../content/site.json";

export const ArchitectureShowcase: React.FC = () => {
  const { architecture, media } = siteContent;
  const [selectedStageIndex, setSelectedStageIndex] = useState(2); // Default to Processing stage
  const selectedStage = architecture.stages[selectedStageIndex];

  const stageIcons = [
    Database,   // Sources
    ArrowRight, // Ingestion
    Cpu,        // Processing
    Layers,     // Storage
    BarChart3,  // Analytics
  ];

  return (
    <section id="architecture" className="relative py-20 md:py-28 border-t border-slate-900 bg-slate-950/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-600/10 blur-[150px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            {architecture.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {architecture.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {architecture.description}
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 px-3 py-1 rounded-md border border-slate-800">
            <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{architecture.note}</span>
          </div>
        </div>

        {media.architectureImage && <img src={media.architectureImage} alt={media.architectureImageAlt || architecture.title} className="w-full max-h-96 object-contain rounded-2xl border border-slate-800 mb-10" />}
        {/* Pipeline Stage Navigation Cards */}
        <div className="relative mb-12">
          {/* Connecting glowing line behind cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-[2px] bg-gradient-to-r from-sky-500/30 via-indigo-500/40 to-purple-500/30 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {architecture.stages.map((stage, idx) => {
              const Icon = stageIcons[idx];
              const isSelected = selectedStageIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`relative text-left p-5 rounded-2xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-sky-400 group ${
                    isSelected
                      ? "bg-slate-900/95 border-sky-400/80 shadow-xl shadow-sky-500/20 ring-1 ring-sky-400/40"
                      : "bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeStageIndicator"
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-sky-400 text-[10px] font-extrabold text-slate-950 uppercase tracking-widest shadow-md"
                    >
                      {architecture.inspectorLabel}
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      {stage.number}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-sky-400 text-slate-950"
                          : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 mb-1 leading-snug">
                    {stage.name}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 line-clamp-1">
                    {stage.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Inspector Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Stage Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    STAGE {selectedStage.number}
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {selectedStage.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  {selectedStage.name}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {selectedStage.description}
                </p>

                {/* Key Technical Highlight */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                      {architecture.highlightLabel}
                    </div>
                    <div className="text-sm font-medium text-slate-200 mt-0.5">
                      {selectedStage.highlight}
                    </div>
                  </div>
                </div>

                {/* Technologies in this Stage */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    {architecture.technologiesLabel}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedStage.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-slate-800/80 border border-slate-700/70 hover:border-sky-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Stage Telemetry & SLA Panel */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {architecture.specsTitle}
                  </h4>

                  <div className="space-y-3.5 divide-y divide-slate-800/80 text-sm">
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-sky-400" />
                        {architecture.latencyLabel}
                      </span>
                      <span className="font-mono font-semibold text-emerald-400">
                        {selectedStage.latency}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <span className="text-slate-400 flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-purple-400" />
                        {architecture.formatLabel}
                      </span>
                      <span className="font-mono text-slate-200 text-xs">
                        {selectedStage.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <span className="text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        {architecture.auditLabel}:
                      </span>
                      <span className="text-slate-200 text-xs font-medium">
                        {architecture.auditValue}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] text-slate-500 font-mono">
                      {architecture.lineageLabel} {architecture.stages.map((s) => s.name).join(" ➔ ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArchitectureShowcase;

