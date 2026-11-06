import React, { useEffect } from 'react';
import { X, FileText, Download, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
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

        {/* Modal Dialog */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#F8F7F4] dark:bg-[#0D1013] border border-[#DDDED8] dark:border-[#20262B] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#121513] dark:text-[#F3F4F6] z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-md text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] flex items-center justify-center text-[#1F6B47] dark:text-[#34D399] shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-semibold text-[#121513] dark:text-[#F3F4F6]">Curriculum Vitae</h3>
              <p className="text-xs font-mono text-[#636966] dark:text-[#9CA3AF]">Ahammed Najad KK &bull; Verified Credentials</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-6 text-xs text-[#636966] dark:text-[#9CA3AF]">
            <div className="p-4 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#1F6B47] dark:text-[#34D399]">
                <span>FILE: Ahammed-Najad-KK-Resume.pdf</span>
                <span className="flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>
              <p className="text-[11px] text-[#121513] dark:text-[#F3F4F6] font-mono break-all pt-0.5">
                Target: Junior Software Developer &bull; MERN Stack
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#121513] dark:text-[#F3F4F6] font-semibold">
                Verified Career Records Included:
              </p>
              <ul className="space-y-2 text-xs text-[#121513] dark:text-[#F3F4F6]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399] mt-0.5 shrink-0" />
                  <span>Junior Software Developer at Kod Brand (10 August 2026 – Present)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399] mt-0.5 shrink-0" />
                  <span>MERN Stack Internship at Kod Brand (4 Months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399] mt-0.5 shrink-0" />
                  <span>MERN Stack Development Course – Kod Brand Academy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399] mt-0.5 shrink-0" />
                  <span>Higher Secondary Education – Biology Science</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={profileData.resumePath}
              download="Ahammed-Najad-KK-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] font-semibold text-xs font-mono uppercase tracking-wider shadow-md hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={profileData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] text-[#121513] dark:text-[#F3F4F6] text-xs font-mono uppercase tracking-wider hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-colors"
            >
              <span>View In Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
