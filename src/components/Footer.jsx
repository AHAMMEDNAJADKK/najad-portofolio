import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080B0A] border-t border-[#25342D] pt-16 pb-12 text-[#A4AEA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#25342D]/60">
          
          {/* Brand & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#121A16] border border-[#25342D] flex items-center justify-center font-mono font-bold text-xs text-[#24D18A]">
                AN
              </div>
              <div>
                <span className="font-bold text-[#F5F7F6] tracking-tight text-lg">
                  {profileData.name}
                </span>
                <span className="block text-xs font-mono text-[#24D18A]">
                  Junior Software Developer &bull; MERN Stack
                </span>
              </div>
            </div>
            <p className="text-xs text-[#A4AEA8] max-w-sm">
              {profileData.hero.positioning}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#121A16] border border-[#25342D] text-xs font-medium text-[#F5F7F6] hover:border-[#24D18A] hover:text-[#24D18A] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#24D18A]" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-[#6C7A73]">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-[#6C7A73]">
            <span>Crafted with MERN Stack precision &bull; Manjeri, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
