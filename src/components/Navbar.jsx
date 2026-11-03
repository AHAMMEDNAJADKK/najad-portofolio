import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'about', 'experience', 'skills', 'approach', 'contact'];
      const scrollPos = window.scrollY + 180;

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
          ? 'bg-[#080A09]/95 backdrop-blur-md border-b border-[#1C2420] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity: Typographic & Architectural */}
          <a 
            href="#home" 
            className="group flex items-baseline gap-2 text-sm tracking-tight focus:outline-none"
            aria-label="Ahammed Najad KK — Software Developer"
          >
            <span className="font-semibold tracking-[-0.02em] text-[#EDEDEA] group-hover:text-[#24D18A] transition-colors">
              AHAMMED NAJAD
            </span>
            <span className="text-xs font-mono text-[#5A635E]">
              / 026
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-mono transition-colors ${
                    isActive
                      ? 'text-[#EDEDEA] font-semibold'
                      : 'text-[#8E9892] hover:text-[#EDEDEA]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean CV & Direct Inquiry */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono tracking-wider text-[#8E9892] hover:text-[#EDEDEA] px-3 py-1.5 rounded border border-transparent hover:border-[#1C2420] transition-colors"
            >
              Resume / CV
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded bg-[#101412] border border-[#1C2420] text-[#EDEDEA] hover:border-[#24D18A] hover:text-[#24D18A] transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#24D18A]" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#8E9892] hover:text-[#EDEDEA] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080A09] border-b border-[#1C2420] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono tracking-wider uppercase py-1 ${
                    isActive ? 'text-[#24D18A] font-semibold' : 'text-[#8E9892]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#1C2420] flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs font-mono text-[#8E9892] hover:text-[#EDEDEA]"
            >
              View Resume
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded bg-[#101412] border border-[#1C2420] text-[#EDEDEA]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#24D18A]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
