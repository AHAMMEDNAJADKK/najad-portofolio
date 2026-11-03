import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { Layout, Server, Database, Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend Development':
        return Layout;
      case 'Backend Development':
        return Server;
      case 'Database & Storage':
        return Database;
      case 'Tools & Deployment':
        return Terminal;
      default:
        return Layout;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#101613]/50 border-t border-[#25342D]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="03 // TECHNICAL EXPERTISE"
          title="Verified Full-Stack Skillset"
          subtitle="Focused on the modern MERN ecosystem, organized by architectural layer with honest proficiency indicators."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#121A16] border border-[#25342D] hover:border-[#31443B] transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#101613] border border-[#25342D] flex items-center justify-center text-[#24D18A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F7F6]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#A4AEA8]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className={`p-3 rounded-xl border transition-colors flex items-center justify-between ${
                          skill.highlight 
                            ? 'bg-[#101613] border-[#24D18A]/30 text-[#F5F7F6]' 
                            : 'bg-[#101613]/60 border-[#25342D] text-[#A4AEA8]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${skill.highlight ? 'text-[#24D18A]' : 'text-[#6C7A73]'}`} />
                          <span className="text-xs sm:text-sm font-semibold truncate text-[#F5F7F6]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#A4AEA8] bg-[#080B0A] px-2 py-0.5 rounded border border-[#25342D] flex-shrink-0 ml-2">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#25342D]/50 flex items-center justify-between text-[11px] font-mono text-[#6C7A73]">
                  <span>MERN Stack Discipline</span>
                  <span className="text-[#24D18A]">{cat.skills.length} Competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
