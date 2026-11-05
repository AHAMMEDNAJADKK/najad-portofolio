import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
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
  const cs = project.caseStudy;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] rounded-lg shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F5F4F0]/95 dark:bg-[#111311]/95 backdrop-blur-sm border-b border-[#DDDED8] dark:border-[#30362F]">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="font-bold text-[#315C45] dark:text-[#83A88B]">PROJECT {project.number}</span>
            <span className="text-[#DDDED8] dark:text-[#30362F]">/</span>
            <span className="text-[#70736D] dark:text-[#A0A49D] uppercase tracking-wider">{project.name}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Case Study Body */}
        <div className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-12 text-[#171916] dark:text-[#F2F2EC]">
          
          {/* Header Overview */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#315C45] dark:text-[#83A88B] block">
              {project.category}
            </span>
            <h2 id="modal-project-title" className="text-3xl sm:text-4xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC] leading-tight">
              {project.name} — {project.subtitle}
            </h2>
            <p className="text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed max-w-3xl">
              {cs.introduction}
            </p>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] text-xs font-mono uppercase tracking-wider text-[#171916] dark:text-[#F2F2EC] hover:border-[#171916] dark:hover:border-[#F2F2EC] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* 08 — Actual Screenshot or Visual Representation */}
          {project.image ? (
            <div className="rounded border border-[#DDDED8] dark:border-[#30362F] p-2 bg-white dark:bg-[#191D19]">
              <div className="text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D] px-2 py-1 mb-1 border-b border-[#DDDED8] dark:border-[#30362F] flex justify-between">
                <span>08 — ACTUAL INTERFACE SCREENSHOT</span>
                <span>VERIFIED PRODUCTION UI</span>
              </div>
              <img 
                src={project.image} 
                alt={`${project.name} interface view`} 
                className="w-full max-h-[440px] object-cover object-top rounded-sm"
              />
            </div>
          ) : (
            <div className="p-6 rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] space-y-2">
              <span className="text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D] block">
                08 — SCREENSHOT NOTICE
              </span>
              <p className="text-xs text-[#70736D] dark:text-[#A0A49D]">
                Actual application interface operates within internal client networks. Architecture, models, and workflows verified directly from codebase repository.
              </p>
            </div>
          )}

          {/* 02 & 03: Business Context & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DDDED8] dark:border-[#30362F]">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
                02 / BUSINESS CONTEXT
              </span>
              <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {cs.businessContext}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
                03 / PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {cs.problem}
              </p>
            </div>
          </div>

          {/* 04 & 05: Solution & My Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DDDED8] dark:border-[#30362F]">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
                04 / SOLUTION PROVIDED
              </span>
              <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {cs.solution}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
                05 / MY CONTRIBUTION
              </span>
              <p className="text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] leading-relaxed font-medium">
                {cs.contribution}
              </p>
            </div>
          </div>

          {/* 06: Technical Implementation */}
          <div className="space-y-4 pt-4 border-t border-[#DDDED8] dark:border-[#30362F]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
              06 / TECHNICAL IMPLEMENTATION
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold block">Frontend Architecture</span>
                <p className="text-[#70736D] dark:text-[#A0A49D] leading-relaxed font-sans">{cs.technicalImplementation.frontend}</p>
              </div>
              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold block">Backend Architecture</span>
                <p className="text-[#70736D] dark:text-[#A0A49D] leading-relaxed font-sans">{cs.technicalImplementation.backend}</p>
              </div>
              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold block">Database Modeling</span>
                <p className="text-[#70736D] dark:text-[#A0A49D] leading-relaxed font-sans">{cs.technicalImplementation.database}</p>
              </div>
            </div>
          </div>

          {/* 07: Features */}
          <div className="space-y-4 pt-4 border-t border-[#DDDED8] dark:border-[#30362F]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
              07 / MAJOR FUNCTIONAL MODULES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC]">
              {cs.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F]">
                  <span className="text-[#315C45] dark:text-[#83A88B] mt-0.5">&mdash;</span>
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 09: Challenges & Problem-Solving */}
          <div className="p-6 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#315C45] dark:text-[#83A88B] block">
              09 / CHALLENGES & PROBLEM-SOLVING
            </span>
            <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
              {cs.challengesAndSolving}
            </p>
          </div>

          {/* 10: Related Projects */}
          <div className="pt-4 border-t border-[#DDDED8] dark:border-[#30362F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">
            <div>
              <span>10 / RELATED PROJECTS: </span>
              <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold">{cs.relatedProjects.join(' &bull; ')}</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] text-[#171916] dark:text-[#F2F2EC] hover:border-[#171916] dark:hover:border-[#F2F2EC]"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
