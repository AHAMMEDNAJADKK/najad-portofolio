import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Shield, Layers, Database, Cpu, AlertCircle, Wrench } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#101613] border border-[#25342D] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#101613]/95 backdrop-blur border-b border-[#25342D]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A] bg-[#121A16] px-2.5 py-1 rounded border border-[#25342D]">
              {project.category}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-[#A4AEA8]">
              {project.ownership}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A4AEA8] hover:text-[#F5F7F6] hover:bg-[#121A16] border border-transparent hover:border-[#25342D] transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-[#F5F7F6]">
          
          {/* Hero / Header Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F7F6]">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-[#A4AEA8] leading-relaxed">
              {project.subtitle}
            </p>

            {/* Quick Links / Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121A16] border border-[#25342D] hover:border-[#24D18A] text-xs font-semibold text-[#F5F7F6] transition-colors"
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
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#24D18A] text-[#080B0A] text-xs font-semibold hover:bg-[#1EB878] transition-colors shadow-glow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Website</span>
                </a>
              )}
              <div className="text-xs font-mono text-[#A4AEA8] px-3 py-1.5 rounded-lg bg-[#121A16] border border-[#25342D]">
                Status: <span className="text-[#24D18A]">{project.completionStatus}</span>
              </div>
            </div>
          </div>

          {/* Screenshot / Visual Banner if available */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-[#25342D] bg-[#080B0A]">
              <img 
                src={project.image} 
                alt={`${project.title} detailed preview`}
                className="w-full max-h-[380px] object-cover object-top"
              />
            </div>
          )}

          {/* 1. Project Overview & Business Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Business Problem</span>
              </div>
              <p className="text-sm text-[#A4AEA8] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Solution Provided</span>
              </div>
              <p className="text-sm text-[#A4AEA8] leading-relaxed">
                {project.solutionProvided}
              </p>
            </div>
          </div>

          {/* 2. My Role & Contribution */}
          <div className="p-5 rounded-xl bg-[#121A16] border border-[#24D18A]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>My Role & Contribution</span>
            </div>
            <p className="text-sm text-[#F5F7F6] leading-relaxed font-medium">
              {project.roleAndContribution}
            </p>
          </div>

          {/* 3. Frontend & Backend Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Frontend Implementation</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A4AEA8] leading-relaxed">
                {project.frontendImplementation}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Backend Implementation</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A4AEA8] leading-relaxed">
                {project.backendImplementation}
              </p>
            </div>
          </div>

          {/* 4. Database Design */}
          <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#24D18A] uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>Database Architecture & Schemas</span>
            </div>
            <p className="text-sm text-[#A4AEA8] leading-relaxed">
              {project.databaseDesign}
            </p>
          </div>

          {/* 5. Important Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#24D18A]">
              Important Implemented Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.importantFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121A16] border border-[#25342D]">
                  <CheckCircle2 className="w-4 h-4 text-[#24D18A] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#F5F7F6] leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Challenges & Problem Solving */}
          <div className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
            <h4 className="text-xs font-mono text-[#24D18A] uppercase tracking-wider">
              Engineering Challenges & Problem Solving
            </h4>
            <p className="text-sm text-[#A4AEA8] leading-relaxed">
              {project.challengesAndProblemSolving}
            </p>
          </div>

          {/* 7. Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#24D18A]">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#121A16] border border-[#25342D] text-[#F5F7F6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#101613] border-t border-[#25342D] flex items-center justify-between">
          <span className="text-xs text-[#A4AEA8] font-mono">
            Ahammed Najad KK &bull; Project Case Study
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#121A16] border border-[#25342D] hover:border-[#24D18A] text-xs font-semibold text-[#F5F7F6] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
