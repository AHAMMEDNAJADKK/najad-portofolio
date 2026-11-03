import React from 'react';
import { X, FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Attempt download
    const link = document.createElement('a');
    link.href = profileData.resumePath;
    link.download = 'Ahammed-Najad-KK-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#101613] border border-[#25342D] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#F5F7F6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#A4AEA8] hover:text-[#F5F7F6] hover:bg-[#121A16] border border-transparent hover:border-[#25342D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#121A16] border border-[#25342D] flex items-center justify-center text-[#24D18A]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F5F7F6]">Curriculum Vitae</h3>
            <p className="text-xs text-[#A4AEA8]">Ahammed Najad KK &bull; MERN Stack Developer</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 mb-6 text-sm text-[#A4AEA8]">
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#25342D] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#24D18A]">
              <span>FILE: Ahammed-Najad-KK-Resume.pdf</span>
              <span>VERIFIED</span>
            </div>
            <p className="text-xs text-[#F5F7F6] font-medium">
              Location: <code className="text-[#24D18A] bg-[#080B0A] px-1.5 py-0.5 rounded">/public/resume/Ahammed-Najad-KK-Resume.pdf</code>
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-xs uppercase tracking-wider text-[#F5F7F6]">Verified Credentials Included:</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0" />
                <span>Junior Software Developer at Kod Brand (August 2026 – Present)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0" />
                <span>MERN Stack Internship at Kod Brand (4 Months)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0" />
                <span>MERN Stack Development Course – Kod Brand Academy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0" />
                <span>Higher Secondary Education – Biology Science</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#24D18A] text-[#080B0A] font-semibold text-sm hover:bg-[#1EB878] transition-all shadow-glow-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <a
            href={`mailto:${profileData.email}?subject=Resume Request - Ahammed Najad KK`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#121A16] border border-[#25342D] text-[#F5F7F6] hover:border-[#24D18A] transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4 text-[#A4AEA8]" />
            Request via Email
          </a>
        </div>
      </div>
    </div>
  );
}
