import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalExpertiseIndex } from '../data/skills';
import { FadeIn, SpotlightCard } from '../components/MotionComponents';
import { Code2, Server, Database, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Capabilities', icon: Layers },
    { id: 'FRONTEND', label: 'Frontend', icon: Code2 },
    { id: 'BACKEND', label: 'Backend', icon: Server },
    { id: 'DATABASE', label: 'Database', icon: Database },
    { id: 'ENGINEERING WORKFLOW', label: 'Workflow & Tools', icon: Wrench },
  ];

  const filteredDomains = selectedCategory === 'ALL'
    ? technicalExpertiseIndex
    : technicalExpertiseIndex.filter(d => d.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-36 border-b border-[#E3E2DD] dark:border-[#20262B] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">03</span>
          <span>/</span>
          <span>EXPERTISE</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6]">
              Engineering Capability Index
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
              A structured index of technologies, protocols, and tooling deployed across client and server layers. No arbitrary percentages or skill bars.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Domain Filter Tabs */}
        <FadeIn direction="up" delay={0.15} className="mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] border border-[#DDDED8] dark:border-[#20262B] max-w-fit">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-[#121513] dark:text-[#F3F4F6] font-semibold'
                      : 'text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategoryPill"
                      className="absolute inset-0 bg-white dark:bg-[#121417] rounded-md border border-[#DDDED8] dark:border-[#20262B] shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1F6B47] dark:text-[#34D399]' : ''}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Capability Domains */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {filteredDomains.map((domain) => (
                <div key={domain.category} className="space-y-6">
                  
                  {/* Category Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3.5 border-b border-[#121513] dark:border-[#F3F4F6]">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] font-bold">
                        INDEX {domain.indexNumber}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6]">
                        {domain.category}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-[#636966] dark:text-[#9CA3AF]">
                      {domain.description}
                    </p>
                  </div>

                  {/* Technologies Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {domain.technologies.map((tech, tIdx) => (
                      <SpotlightCard
                        key={tIdx} 
                        className="p-5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm hover:border-[#1F6B47]/40 dark:hover:border-[#34D399]/40 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2.5">
                          <span className="text-sm font-mono font-bold text-[#121513] dark:text-[#F3F4F6] group-hover:text-[#1F6B47] dark:group-hover:text-[#34D399] transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#1F6B47] dark:text-[#34D399] px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10">
                            VERIFIED
                          </span>
                        </div>
                        <p className="text-xs text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                          {tech.application}
                        </p>
                      </SpotlightCard>
                    ))}
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
