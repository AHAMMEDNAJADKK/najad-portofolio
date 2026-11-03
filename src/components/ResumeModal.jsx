import React from 'react';
import { X, FileText, Download, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = profileData.resumePath;
    link.download = 'Ahammed-Najad-KK-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] rounded-lg p-6 sm:p-8 shadow-2xl text-[#171916] dark:text-[#F2F2EC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-10 h-10 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] flex items-center justify-center text-[#315C45] dark:text-[#83A88B]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#171916] dark:text-[#F2F2EC]">Curriculum Vitae</h3>
            <p className="text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">Ahammed Najad KK &bull; Verified Credentials</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6 text-xs text-[#70736D] dark:text-[#A0A49D]">
          <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#315C45] dark:text-[#83A88B]">
              <span>FILE: Ahammed-Najad-KK-Resume.pdf</span>
              <span>VERIFIED</span>
            </div>
            <p className="text-[11px] text-[#171916] dark:text-[#F2F2EC] font-mono">
              Path: <code>/public/resume/Ahammed-Najad-KK-Resume.pdf</code>
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#171916] dark:text-[#F2F2EC]">Verified Career Records Included:</p>
            <ul className="space-y-2 text-xs text-[#171916] dark:text-[#F2F2EC]">
              <li className="flex items-start gap-2">
                <span className="text-[#315C45] dark:text-[#83A88B] mt-0.5">&mdash;</span>
                <span>Junior Software Developer at Kod Brand (10 August 2026 – Present)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#315C45] dark:text-[#83A88B] mt-0.5">&mdash;</span>
                <span>MERN Stack Internship at Kod Brand (4 Months)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#315C45] dark:text-[#83A88B] mt-0.5">&mdash;</span>
                <span>MERN Stack Development Course – Kod Brand Academy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#315C45] dark:text-[#83A88B] mt-0.5">&mdash;</span>
                <span>Higher Secondary Education – Biology Science</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
          
          <a
            href={`mailto:${profileData.email}?subject=Resume Request - Ahammed Najad KK`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] text-[#171916] dark:text-[#F2F2EC] hover:border-[#171916] dark:hover:border-[#F2F2EC] transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#70736D] dark:text-[#A0A49D]" />
            <span>Request Direct</span>
          </a>
        </div>

      </div>
    </div>
  );
}
