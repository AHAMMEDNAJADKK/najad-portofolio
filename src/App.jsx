import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import DevelopmentApproach from './sections/DevelopmentApproach';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ScrollProgress, CustomCursor, BackgroundAmbience } from './components/MotionComponents';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('najad_editorial_theme');
      if (savedTheme) return savedTheme;
    }
    return 'dark'; // Default to Senior Dark Theme as requested
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('najad_editorial_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#121513] dark:bg-[#090A0C] dark:text-[#F3F4F6] font-sans antialiased selection:bg-[#1F6B47] selection:text-white dark:selection:bg-[#34D399] dark:selection:text-[#090A0C] transition-colors duration-300 relative">
      
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Subtle Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Ambient Lighting & Grid Layer */}
      <BackgroundAmbience />

      {/* Sticky Refined Navigation */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <DevelopmentApproach />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
