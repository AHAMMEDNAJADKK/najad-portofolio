import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080A09] border-t border-[#1C2420] py-16 text-[#8E9892]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-[#1C2420]">
          <div className="space-y-1">
            <span className="text-base font-semibold text-[#EDEDEA] tracking-tight">
              {profileData.name}
            </span>
            <p className="text-xs font-mono text-[#5A635E]">
              Junior Software Developer &bull; MERN Stack
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E9892] hover:text-[#EDEDEA] transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E9892] hover:text-[#EDEDEA] transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="text-[#8E9892] hover:text-[#EDEDEA] transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <span className="text-[#1C2420]">&bull;</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8E9892] hover:text-[#EDEDEA] transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#5A635E]">
          <p>
            &copy; {currentYear} {profileData.name}. All verified records.
          </p>
          <p>
            Crafted with React, Tailwind & MERN architecture &bull; Manjeri, Kerala
          </p>
        </div>

      </div>
    </footer>
  );
}
