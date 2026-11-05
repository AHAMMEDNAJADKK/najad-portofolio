import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

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
    <footer className="bg-[#F5F4F0] dark:bg-[#111311] border-t border-[#DDDED8] dark:border-[#30362F] py-16 text-[#70736D] dark:text-[#A0A49D]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#DDDED8] dark:border-[#30362F]">
          
          <div className="space-y-1">
            <span className="text-base font-semibold text-[#171916] dark:text-[#F2F2EC] tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">
              Junior Software Developer &bull; Kod Brand
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors pl-2"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#70736D]/80 dark:text-[#A0A49D]/80">
          <p>
            &copy; {CURRENT_YEAR} {profileData.name}. All rights reserved.
          </p>
          <p>
            Minimal Swiss Editorial Architecture &bull; Malappuram, Kerala, India
          </p>
        </div>

      </div>
    </footer>
  );
}
