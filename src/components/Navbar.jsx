import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'approach', 'contact'];
      const scrollPos = window.scrollY + 220;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
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
    handleScroll();
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
    <motion.header 
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F7F4]/85 dark:bg-[#090A0C]/85 backdrop-blur-md border-b border-[#E3E2DD] dark:border-[#20262B] py-3.5 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]' 
          : 'bg-[#F8F7F4]/60 dark:bg-[#090A0C]/60 backdrop-blur-sm border-b border-[#E3E2DD]/40 dark:border-[#20262B]/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Identification & Status */}
          <div className="flex items-center gap-4">
            <a 
              href="#home" 
              className="flex items-baseline gap-2 group text-xs font-mono tracking-wider focus:outline-none"
              aria-label="Ahammed Najad KK — Personal Portfolio"
            >
              <span className="font-semibold text-[#121513] dark:text-[#F3F4F6] group-hover:text-[#1F6B47] dark:group-hover:text-[#34D399] transition-colors">
                AHAMMED NAJAD KK
              </span>
              <span className="text-[#636966] dark:text-[#9CA3AF] hidden sm:inline">
                / PORTFOLIO
              </span>
            </a>

            {/* Subtle Available Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>OPEN TO ROLES</span>
            </div>
          </div>

          {/* Center: Clean Navigation with Animated Floating Underline */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-[#121513] dark:text-[#F3F4F6] font-semibold'
                      : 'text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6]'
                  }`}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute inset-0 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#1F6B47] dark:bg-[#34D399] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Utilities: Social, Resume & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors p-2 rounded-md hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors p-2 rounded-md hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#121513] dark:text-[#F3F4F6] transition-all px-3 py-1.5 rounded-md border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] hover:border-[#1F6B47] dark:hover:border-[#34D399] shadow-sm"
            >
              <span>CV / RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-[#636966] dark:text-[#9CA3AF] group-hover:text-[#1F6B47] dark:group-hover:text-[#34D399] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Subtle Theme Toggle Switch */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-md text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] hover:border-[#121513] dark:hover:border-[#F3F4F6] transition-all"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-3.5 h-3.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-md text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#121513] dark:text-[#F3F4F6] border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#F8F7F4]/95 dark:bg-[#090A0C]/95 backdrop-blur-lg border-b border-[#DDDED8] dark:border-[#20262B] px-6 py-6 space-y-4 overflow-hidden"
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className="flex flex-col space-y-2"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs font-mono tracking-wider uppercase py-2 px-3 rounded transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'text-[#1F6B47] dark:text-[#34D399] font-bold bg-[#1F6B47]/10 dark:bg-[#34D399]/10' 
                        : 'text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#1F6B47] dark:bg-[#34D399]" />}
                  </motion.a>
                );
              })}
            </motion.div>

            <div className="pt-4 border-t border-[#DDDED8] dark:border-[#20262B] flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 text-[#121513] dark:text-[#F3F4F6] font-semibold px-3 py-1.5 rounded border border-[#DDDED8] dark:border-[#20262B]"
              >
                <span>CV / RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-3">
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6]"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6]"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
