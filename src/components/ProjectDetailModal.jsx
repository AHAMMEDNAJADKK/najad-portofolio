import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Animated Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Animated Modal Dialog */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#F8F7F4] dark:bg-[#0D1013] border border-[#DDDED8] dark:border-[#20262B] rounded-2xl shadow-2xl overflow-hidden my-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F8F7F4]/90 dark:bg-[#0D1013]/90 backdrop-blur-md border-b border-[#DDDED8] dark:border-[#20262B]">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="font-bold text-[#1F6B47] dark:text-[#34D399] px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10">
                PROJECT {project.number}
              </span>
              <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>
              <span className="text-[#636966] dark:text-[#9CA3AF] uppercase tracking-wider">{project.name}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Case Study Body */}
          <div className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-10 text-[#121513] dark:text-[#F3F4F6]">
            
            {/* Header Overview */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                {project.category}
              </span>
              <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6] leading-tight">
                {project.name} &mdash; <span className="text-[#636966] dark:text-[#9CA3AF]">{project.subtitle}</span>
              </h2>
              <p className="text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed max-w-3xl">
                {cs.introduction}
              </p>

              {/* Quick Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] text-xs font-mono uppercase tracking-wider text-[#121513] dark:text-[#F3F4F6] hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span>Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* 08 — Actual Screenshot or Visual Representation */}
            {project.image ? (
              <div className="rounded-xl border border-[#DDDED8] dark:border-[#20262B] p-2 bg-white dark:bg-[#121417] shadow-sm">
                <div className="text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF] px-3 py-2 mb-1.5 border-b border-[#DDDED8] dark:border-[#20262B] flex justify-between">
                  <span>08 — ACTUAL INTERFACE SCREENSHOT</span>
                  <span className="text-[#1F6B47] dark:text-[#34D399]">VERIFIED PRODUCTION UI</span>
                </div>
                <img 
                  src={project.image} 
                  alt={`${project.name} interface view`} 
                  className="w-full max-h-[460px] object-cover object-top rounded-lg"
                />
              </div>
            ) : (
              <div className="p-6 rounded-xl border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] space-y-2">
                <span className="text-[10px] font-mono text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                  08 — APPLICATION SCREENSHOT NOTICE
                </span>
                <p className="text-xs text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  Actual application interface operates within internal client networks. Architecture, models, and workflows verified directly from production codebase.
                </p>
              </div>
            )}

            {/* 02 & 03: Business Context & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DDDED8] dark:border-[#20262B]">
              <div className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                  02 / BUSINESS CONTEXT
                </span>
                <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {cs.businessContext}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                  03 / PROBLEM
                </span>
                <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {cs.problem}
                </p>
              </div>
            </div>

            {/* 04 & 05: Solution & Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DDDED8] dark:border-[#20262B]">
              <div className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                  04 / SOLUTION PROVIDED
                </span>
                <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                  05 / MY CONTRIBUTION
                </span>
                <p className="text-xs sm:text-sm text-[#121513] dark:text-[#F3F4F6] leading-relaxed font-medium">
                  {cs.contribution}
                </p>
              </div>
            </div>

            {/* 06: Technical Implementation */}
            <div className="space-y-4 pt-4 border-t border-[#DDDED8] dark:border-[#20262B]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                06 / TECHNICAL IMPLEMENTATION
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold block">Frontend Architecture</span>
                  <p className="text-[#636966] dark:text-[#9CA3AF] leading-relaxed font-sans">{cs.technicalImplementation.frontend}</p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold block">Backend Architecture</span>
                  <p className="text-[#636966] dark:text-[#9CA3AF] leading-relaxed font-sans">{cs.technicalImplementation.backend}</p>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold block">Database Modeling</span>
                  <p className="text-[#636966] dark:text-[#9CA3AF] leading-relaxed font-sans">{cs.technicalImplementation.database}</p>
                </div>
              </div>
            </div>

            {/* 07: Features */}
            <div className="space-y-4 pt-4 border-t border-[#DDDED8] dark:border-[#20262B]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                07 / MAJOR FUNCTIONAL MODULES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#121513] dark:text-[#F3F4F6]">
                {cs.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                    <span className="text-[#1F6B47] dark:text-[#34D399] mt-0.5 font-bold">&mdash;</span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 09: Challenges & Problem-Solving */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] block font-bold">
                09 / CHALLENGES & PROBLEM-SOLVING
              </span>
              <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                {cs.challengesAndSolving}
              </p>
            </div>

            {/* 10: Related Projects & Close */}
            <div className="pt-4 border-t border-[#DDDED8] dark:border-[#20262B] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#636966] dark:text-[#9CA3AF]">
              <div>
                <span>10 / RELATED PROJECTS: </span>
                <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold">{cs.relatedProjects.join(' &bull; ')}</span>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] font-semibold hover:opacity-90 transition-opacity self-start sm:self-auto"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
