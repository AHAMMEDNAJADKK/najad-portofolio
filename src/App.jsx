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

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('najad_editorial_theme');
      if (savedTheme) return savedTheme;
    }
    return 'light'; // Default is Light Theme as requested
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
    <div className="min-h-screen bg-[#F5F4F0] text-[#171916] dark:bg-[#111311] dark:text-[#F2F2EC] font-sans antialiased selection:bg-[#315C45] selection:text-white dark:selection:bg-[#83A88B] dark:selection:text-[#111311] transition-colors duration-200">
      
      {/* Editorial Navigation */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Sections */}
      <main className="relative">
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
