import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';
import { Magnetic } from './MotionComponents';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Process', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#F8F7F4] dark:bg-[#090A0C] border-t border-[#DDDED8] dark:border-[#20262B] py-16 text-[#636966] dark:text-[#9CA3AF] relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#DDDED8] dark:border-[#20262B]">
          
          <div className="space-y-1">
            <span className="text-base font-semibold text-[#121513] dark:text-[#F3F4F6] tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-xs font-mono text-[#636966] dark:text-[#9CA3AF]">
              Junior Software Developer &bull; Kod Brand &bull; Kerala, India
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors p-2 rounded-md hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors p-2 rounded-md hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <Magnetic strength={15}>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#121513] dark:text-[#F3F4F6] px-3 py-1.5 rounded-md border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-all"
                aria-label="Back to top"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </Magnetic>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#636966]/80 dark:text-[#9CA3AF]/80">
          <p>
            &copy; {CURRENT_YEAR} {profileData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with Precision & Minimal Motion</span>
            <span>&bull;</span>
            <span>Malappuram, Kerala</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
