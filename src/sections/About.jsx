import React from 'react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 border-b border-[#DDDED8] dark:border-[#30362F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>{profileData.about.label}</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Large Editorial Heading & Technical Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC] leading-[1.18] text-balance">
              "{profileData.about.statement}"
            </h2>

            {/* Structured Metadata Box */}
            <div className="pt-6 border-t border-[#DDDED8] dark:border-[#30362F] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                TECHNICAL VERIFICATION
              </span>
              <div className="space-y-2 text-xs font-mono">
                {profileData.about.technicalHighlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1.5 border-b border-[#DDDED8]/50 dark:border-[#30362F]/50">
                    <span className="text-[#70736D] dark:text-[#A0A49D]">{item.label}</span>
                    <span className="text-[#171916] dark:text-[#F2F2EC] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Editorial Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#70736D] dark:text-[#A0A49D] leading-relaxed font-normal">
            {profileData.about.biography.map((paragraph, idx) => (
              <p key={idx} className="text-balance">
                {paragraph}
              </p>
            ))}

            <div className="pt-8 border-t border-[#DDDED8] dark:border-[#30362F] text-xs font-mono text-[#315C45] dark:text-[#83A88B]">
              SPECIALIZATION: MERN STACK &bull; BUSINESS CRM SYSTEMS &bull; REST API ARCHITECTURE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
