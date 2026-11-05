import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Navbar({ theme, onToggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Process', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'approach', 'contact'];
      const scrollPos = window.scrollY + 200;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F5F4F0]/95 dark:bg-[#111311]/95 backdrop-blur-md border-b border-[#DDDED8] dark:border-[#30362F] py-3.5' 
          : 'bg-[#F5F4F0] dark:bg-[#111311] border-b border-[#DDDED8]/60 dark:border-[#30362F]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Identification */}
          <a 
            href="#home" 
            className="flex items-baseline gap-2 group text-xs font-mono tracking-wider focus:outline-none"
            aria-label="Ahammed Najad KK — Personal Portfolio"
          >
            <span className="font-semibold text-[#171916] dark:text-[#F2F2EC] group-hover:text-[#315C45] dark:group-hover:text-[#83A88B] transition-colors">
              AHAMMED NAJAD KK
            </span>
            <span className="text-[#70736D] dark:text-[#A0A49D] hidden sm:inline">
              / PERSONAL PORTFOLIO
            </span>
          </a>

          {/* Center / Right: Clean Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#171916] dark:text-[#F2F2EC] font-semibold border-b border-[#171916] dark:border-[#F2F2EC] pb-0.5'
                      : 'text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Utilities: Social, Resume & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors p-1"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors p-1"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-xs font-mono tracking-wider text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors px-2.5 py-1 rounded border border-[#DDDED8] dark:border-[#30362F] hover:border-[#171916] dark:hover:border-[#F2F2EC]"
            >
              CV / RESUME
            </button>

            {/* Subtle Theme Toggle Switch */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] border border-[#DDDED8] dark:border-[#30362F] hover:border-[#171916] dark:hover:border-[#F2F2EC] transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-[#171916] dark:text-[#F2F2EC] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F4F0] dark:bg-[#111311] border-b border-[#DDDED8] dark:border-[#30362F] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-mono tracking-wider uppercase py-1 ${
                    isActive 
                      ? 'text-[#315C45] dark:text-[#83A88B] font-bold' 
                      : 'text-[#70736D] dark:text-[#A0A49D]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#DDDED8] dark:border-[#30362F] flex items-center justify-between text-xs font-mono">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-[#70736D] dark:text-[#A0A49D]"
            >
              DOWNLOAD CV
            </button>
            <div className="flex items-center gap-3">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-[#70736D] dark:text-[#A0A49D]">
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#70736D] dark:text-[#A0A49D]">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
