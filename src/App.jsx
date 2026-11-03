import React, { useState } from 'react';
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
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B0A] text-[#F5F7F6] font-sans antialiased relative selection:bg-[#24D18A] selection:text-[#080B0A]">
      {/* Background Decorative Ambient Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `linear-gradient(#24D18A 1px, transparent 1px), linear-gradient(90deg, #24D18A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <DevelopmentApproach />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Download Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
