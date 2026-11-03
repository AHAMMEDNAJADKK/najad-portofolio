import React from 'react';
import { X, FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0D110F] border border-[#1C2420] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#EDEDEA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#8E9892] hover:text-[#EDEDEA] hover:bg-[#141A17] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#141A17] border border-[#1C2420] flex items-center justify-center text-[#24D18A]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#EDEDEA]">Curriculum Vitae</h3>
            <p className="text-xs font-mono text-[#8E9892]">Ahammed Najad KK &bull; Verified Credentials</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 mb-6 text-xs text-[#8E9892]">
          <div className="p-4 rounded-lg bg-[#101412] border border-[#1C2420] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#24D18A]">
              <span>FILE: Ahammed-Najad-KK-Resume.pdf</span>
              <span>VERIFIED</span>
            </div>
            <p className="text-[11px] text-[#EDEDEA] font-mono">
              Path: <code className="text-[#24D18A]">/public/resume/Ahammed-Najad-KK-Resume.pdf</code>
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#5A635E]">Verified Career Records Included:</p>
            <ul className="space-y-2 text-xs text-[#EDEDEA]/90">
              <li className="flex items-start gap-2">
                <span className="text-[#24D18A] mt-0.5">&bull;</span>
                <span>Junior Software Developer at Kod Brand (10 August 2026 – Present)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#24D18A] mt-0.5">&bull;</span>
                <span>MERN Stack Internship at Kod Brand (4 Months)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#24D18A] mt-0.5">&bull;</span>
                <span>MERN Stack Development Course – Kod Brand Academy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#24D18A] mt-0.5">&bull;</span>
                <span>Higher Secondary Education – Biology Science</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#EDEDEA] text-[#080A09] font-medium text-xs font-mono uppercase tracking-wider hover:bg-white transition-all"
          >
            <Download className="w-4 h-4 text-[#080A09]" />
            <span>Download PDF</span>
          </button>
          
          <a
            href={`mailto:${profileData.email}?subject=Resume Request - Ahammed Najad KK`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-[#101412] border border-[#1C2420] text-[#EDEDEA] hover:border-[#24D18A] transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#8E9892]" />
            <span>Request Direct</span>
          </a>
        </div>

      </div>
    </div>
  );
}
