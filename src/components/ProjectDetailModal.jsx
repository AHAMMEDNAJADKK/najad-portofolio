import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, Shield, Layers, Database, Cpu, AlertCircle, Wrench, Check } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0D110F] border border-[#1C2420] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0D110F]/95 backdrop-blur border-b border-[#1C2420]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#24D18A]">
              {project.number}
            </span>
            <span className="text-xs text-[#5A635E]">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E9892]">
              {project.category}
            </span>
            <span className="hidden sm:inline-block text-xs text-[#5A635E]">&bull;</span>
            <span className="hidden sm:inline-block text-xs font-mono text-[#5A635E]">
              {project.ownership}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-[#8E9892] hover:text-[#EDEDEA] hover:bg-[#141A17] transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 text-[#EDEDEA]">
          
          {/* Hero Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#EDEDEA] leading-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#8E9892] leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>

            {/* Quick Actions & Meta */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#141A17] border border-[#1C2420] hover:border-[#24D18A] text-xs font-mono uppercase tracking-wider text-[#EDEDEA] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#24D18A]" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#EDEDEA] text-[#080A09] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                >
                  <span>Live Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <span className="text-xs font-mono text-[#5A635E]">
                STATUS: <span className="text-[#24D18A]">{project.completionStatus}</span>
              </span>
            </div>
          </div>

          {/* Screenshot Preview */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-[#1C2420] bg-[#080A09]">
              <img 
                src={project.image} 
                alt={`${project.title} detailed preview`}
                className="w-full max-h-[420px] object-cover object-top"
              />
            </div>
          )}

          {/* Overview, Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#101412] border border-[#1C2420] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A] block">
                THE BUSINESS PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#101412] border border-[#1C2420] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A] block">
                SOLUTION PROVIDED
              </span>
              <p className="text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                {project.solutionProvided}
              </p>
            </div>
          </div>

          {/* Role & Contribution */}
          <div className="p-6 rounded-xl bg-[#101412] border border-[#1C2420] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A] block">
              MY ROLE & TECHNICAL OWNERSHIP
            </span>
            <p className="text-xs sm:text-sm text-[#EDEDEA] leading-relaxed">
              {project.roleAndContribution}
            </p>
          </div>

          {/* Frontend, Backend & Database Architecture */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5A635E] block">
              SYSTEM ARCHITECTURE
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg bg-[#101412] border border-[#1C2420] space-y-2">
                <span className="text-xs font-mono text-[#EDEDEA] font-semibold block">Frontend Layer</span>
                <p className="text-xs text-[#8E9892] leading-relaxed">{project.frontendImplementation}</p>
              </div>

              <div className="p-5 rounded-lg bg-[#101412] border border-[#1C2420] space-y-2">
                <span className="text-xs font-mono text-[#EDEDEA] font-semibold block">Backend Layer</span>
                <p className="text-xs text-[#8E9892] leading-relaxed">{project.backendImplementation}</p>
              </div>

              <div className="p-5 rounded-lg bg-[#101412] border border-[#1C2420] space-y-2">
                <span className="text-xs font-mono text-[#EDEDEA] font-semibold block">Database Layer</span>
                <p className="text-xs text-[#8E9892] leading-relaxed">{project.databaseDesign}</p>
              </div>
            </div>
          </div>

          {/* Major Features */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5A635E] block">
              CORE FUNCTIONALITY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.importantFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#101412] border border-[#1C2420] text-xs text-[#EDEDEA]">
                  <span className="text-[#24D18A] mt-0.5">&bull;</span>
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Problem Solving */}
          <div className="p-6 rounded-xl bg-[#101412] border border-[#1C2420] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A] block">
              IMPLEMENTATION CHALLENGES & RESOLUTION
            </span>
            <p className="text-xs sm:text-sm text-[#8E9892] leading-relaxed">
              {project.challengesAndProblemSolving}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5A635E] block">
              TECHNOLOGIES DEPLOYED
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 rounded text-xs font-mono bg-[#101412] border border-[#1C2420] text-[#8E9892]">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#0D110F] border-t border-[#1C2420] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#5A635E]">
            Ahammed Najad KK &bull; Technical Case Study
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#141A17] border border-[#1C2420] text-xs font-mono uppercase text-[#EDEDEA] hover:text-[#24D18A] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
