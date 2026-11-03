import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { projectCategories, projectsData } from '../data/projects';
import { ArrowUpRight, ExternalLink, Database, Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const flagshipProject = projectsData.find(p => p.isFlagship);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#1C2420]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="03"
            category="SELECTED WORK"
            title="Real-World Software Projects & Architecture"
            description="Production web applications, multi-branch CRMs, and full-stack systems engineered with verified technical ownership."
          />

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#101412] border border-[#1C2420] w-fit">
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-[#EDEDEA] text-[#080A09] font-medium'
                      : 'text-[#8E9892] hover:text-[#EDEDEA]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLAGSHIP SHOWCASE: 01 LASTKEY (Full-Width Editorial)   */}
        {/* ======================================================== */}
        {(selectedCategory === "All Projects" || selectedCategory === flagshipProject.category) && flagshipProject && (
          <div className="mb-14 sm:mb-20 rounded-2xl bg-[#101412] border border-[#1C2420] hover:border-[#28362F] transition-all overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
              
              {/* Left Column: Context & Metadata (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#24D18A]">
                    {flagshipProject.number}
                  </span>
                  <span className="text-xs text-[#5A635E]">/</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8E9892]">
                    FLAGSHIP CASE STUDY
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#EDEDEA] leading-tight">
                    {flagshipProject.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-[#24D18A]">
                    {flagshipProject.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#8E9892] leading-relaxed">
                  {flagshipProject.summary}
                </p>

                {/* Key Architectural Highlights */}
                <div className="pt-2 space-y-2 border-t border-[#1C2420]/80">
                  <div className="flex items-start gap-2.5 text-xs text-[#EDEDEA]">
                    <span className="text-[#24D18A] mt-0.5">&bull;</span>
                    <span>Encrypted document & digital asset vault with release triggers</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#EDEDEA]">
                    <span className="text-[#24D18A] mt-0.5">&bull;</span>
                    <span>Death certificate claim portal with admin verification state machine</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#EDEDEA]">
                    <span className="text-[#24D18A] mt-0.5">&bull;</span>
                    <span>Role-based protected routes for owners, nominees, and administrators</span>
                  </div>
                </div>

                {/* Tech Metadata */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagshipProject.technologies.slice(0, 6).map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#080A09] text-[#8E9892] border border-[#1C2420]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Actions */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setActiveProject(flagshipProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#EDEDEA] text-[#080A09] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8E9892] hover:text-[#EDEDEA] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Browser/Visual Frame (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl bg-[#080A09] border border-[#1C2420] overflow-hidden shadow-2xl">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-[#101412] border-b border-[#1C2420] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C2420]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C2420]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C2420]"></div>
                    </div>
                    <span className="text-[10px] font-mono text-[#5A635E]">
                      lastkey.app/vault
                    </span>
                    <span className="text-[10px] font-mono text-[#24D18A]">
                      VERIFIED
                    </span>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0D110F]">
                    <img 
                      src={flagshipProject.image} 
                      alt="LastKey Digital Will application interface"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* ALTERNATING EDITORIAL GRID: PROJECTS 02 - 06             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {filteredProjects
            .filter(p => !p.isFlagship || selectedCategory !== "All Projects")
            .map((project) => {
              const isAccent = project.layoutType === "editorial-card-accent";
              const colSpan = isAccent ? "lg:col-span-12" : "lg:col-span-6";

              return (
                <div 
                  key={project.id}
                  className={`${colSpan} flex flex-col justify-between rounded-2xl bg-[#101412] border border-[#1C2420] hover:border-[#28362F] transition-all p-6 sm:p-8 group`}
                >
                  <div>
                    {/* Header: Number & Category */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#1C2420]">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="font-bold text-[#24D18A]">{project.number}</span>
                        <span className="text-[#5A635E]">/</span>
                        <span className="text-[#8E9892] uppercase tracking-wider">{project.category}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#5A635E] uppercase">
                        {project.ownership}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mt-5 space-y-1">
                      <h4 className="text-xl sm:text-2xl font-semibold text-[#EDEDEA] group-hover:text-[#24D18A] transition-colors tracking-tight">
                        {project.title}
                      </h4>
                      <p className="text-xs font-mono text-[#24D18A]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Architectural Feature Bullets */}
                    <div className="mt-5 pt-4 border-t border-[#1C2420]/70 space-y-2">
                      {project.importantFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#EDEDEA]/90">
                          <span className="text-[#24D18A] mt-0.5 text-[10px]">&bull;</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080A09] text-[#8E9892] border border-[#1C2420]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-8 pt-4 border-t border-[#1C2420] flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#EDEDEA] hover:text-[#24D18A] transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8E9892] hover:text-[#EDEDEA] transition-colors p-1"
                          title="GitHub Repository"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#24D18A] hover:underline"
                          title="Live Demo"
                          aria-label={`${project.title} Live Store`}
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}

        </div>

      </div>

      {/* Case Study Detailed Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
