import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { engineeringCapabilities } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-[#1C2420]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionHeading
          number="04"
          category="CAPABILITIES"
          title="Technical Expertise & Engineering Stack"
          description="A disciplined, production-tested MERN stack capability matrix organized by architectural domain. No arbitrary skill bars or inflated percentages."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {engineeringCapabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-[#101412] border border-[#1C2420] hover:border-[#28362F] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1C2420]">
                  <h3 className="text-sm font-mono tracking-widest uppercase text-[#24D18A] font-bold">
                    {cap.category}
                  </h3>
                  <span className="text-xs font-mono text-[#5A635E]">
                    {cap.subtitle}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                  {cap.description}
                </p>

                {/* Items List */}
                <div className="mt-6 divide-y divide-[#1C2420] border-y border-[#1C2420]">
                  {cap.items.map((item, iIdx) => (
                    <div key={iIdx} className="py-3 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#EDEDEA] font-medium">
                        {item.name}
                      </span>
                      <span className="text-[#5A635E]">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between text-[11px] font-mono text-[#5A635E]">
                <span>ARCHITECTURAL DOMAIN 0{idx + 1}</span>
                <span className="text-[#8E9892]">VERIFIED IN PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
