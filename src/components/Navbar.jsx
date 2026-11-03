import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080B0A]/90 backdrop-blur-md border-b border-[#25342D] py-3.5 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ahammed Najad KK Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#121A16] border border-[#25342D] flex items-center justify-center font-mono font-bold text-sm text-[#24D18A] group-hover:border-[#24D18A] transition-all shadow-sm">
              AN
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base text-[#F5F7F6] group-hover:text-[#24D18A] transition-colors">
                AHAMMED NAJAD
              </span>
              <span className="text-[11px] font-mono text-[#A4AEA8] tracking-wider uppercase">
                MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101613]/80 border border-[#25342D] px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'text-[#080B0A] bg-[#24D18A] font-semibold shadow-sm'
                      : 'text-[#A4AEA8] hover:text-[#F5F7F6] hover:bg-[#121A16]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Social */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#F5F7F6] bg-[#121A16] border border-[#25342D] hover:border-[#24D18A] hover:text-[#24D18A] transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#24D18A]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#24D18A] text-[#080B0A] hover:bg-[#1EB878] transition-all shadow-glow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#121A16] border border-[#25342D] text-[#24D18A] hover:text-white"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121A16] border border-[#25342D] text-[#F5F7F6] hover:text-[#24D18A] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B0A]/95 border-b border-[#25342D] backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#24D18A] text-[#080B0A] font-bold'
                      : 'text-[#A4AEA8] hover:text-[#F5F7F6] bg-[#121A16] border border-[#25342D]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F5F7F6] bg-[#121A16] border border-[#25342D]"
            >
              <FileText className="w-4 h-4 text-[#24D18A]" />
              <span>Download Resume PDF</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#24D18A] text-[#080B0A]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
