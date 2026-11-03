import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#1C2420]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Identifier */}
        <SectionHeading
          number="01"
          category="ABOUT"
          title="Engineering Identity"
        />

        {/* Large Editorial Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <p className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.025em] text-[#EDEDEA] leading-[1.3] text-balance">
            "{profileData.about.statement}"
          </p>
        </div>

        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#8E9892] leading-relaxed">
            {profileData.about.paragraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-[#1C2420] flex items-center justify-between text-xs font-mono text-[#5A635E]">
              <span>RESIDENCE: MANJERI, MALAPPURAM</span>
              <span className="text-[#24D18A]">OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* Structured Domain Columns (6 cols) */}
          <div className="lg:col-span-6 space-y-0 divide-y divide-[#1C2420] border-y border-[#1C2420]">
            {profileData.about.pillars.map((pillar, idx) => (
              <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
                <div className="w-full sm:w-2/5 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#5A635E]">0{idx + 1}</span>
                  <h3 className="text-sm font-semibold text-[#EDEDEA] group-hover:text-[#24D18A] transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="w-full sm:w-3/5 text-xs text-[#8E9892] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
