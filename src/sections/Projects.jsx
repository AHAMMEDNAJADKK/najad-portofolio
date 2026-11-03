import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { projectCategories, projectsData } from '../data/projects';
import { Sparkles, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="04 // FEATURED WORK"
          title="Engineered Projects & Case Studies"
          subtitle="Explore real-world full-stack web applications, multi-branch CRMs, and enterprise tools built with verified technical integrity."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            const count = category === "All Projects" 
              ? projectsData.length 
              : projectsData.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#24D18A] text-[#080B0A] shadow-glow-sm font-bold'
                    : 'bg-[#121A16] text-[#A4AEA8] border border-[#25342D] hover:text-[#F5F7F6] hover:border-[#31443B]'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-[#080B0A]/20 text-[#080B0A]' : 'bg-[#101613] text-[#24D18A]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* Bottom Context Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6C7A73] font-mono">
            * All project architecture, models, and workflows verified against actual codebase repositories.
          </p>
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
