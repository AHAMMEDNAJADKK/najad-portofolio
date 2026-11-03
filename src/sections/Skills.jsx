import React from 'react';
import { technicalExpertiseIndex } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-36 border-b border-[#DDDED8] dark:border-[#30362F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>03 / EXPERTISE</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC]">
            Engineering Capability Index
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
            A structured index of technologies, protocols, and tooling deployed across client and server layers. No arbitrary percentages or skill bars.
          </p>
        </div>

        {/* Editorial Index Tables */}
        <div className="space-y-16">
          {technicalExpertiseIndex.map((domain) => (
            <div key={domain.category} className="space-y-4">
              
              {/* Category Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#171916] dark:border-[#F2F2EC]">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] font-bold">
                    INDEX {domain.indexNumber}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC]">
                    {domain.category}
                  </h3>
                </div>
                <p className="text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">
                  {domain.description}
                </p>
              </div>

              {/* Technologies Table */}
              <div className="divide-y divide-[#DDDED8] dark:divide-[#30362F] border-b border-[#DDDED8] dark:border-[#30362F]">
                {domain.technologies.map((tech, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors px-1"
                  >
                    <div className="md:col-span-4">
                      <span className="text-sm font-mono font-semibold text-[#171916] dark:text-[#F2F2EC]">
                        {tech.name}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <span className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                        {tech.application}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
