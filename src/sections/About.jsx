import React from 'react';
import { profileData } from '../data/profile';
import { FadeIn, SpotlightCard, StaggerContainer, StaggerItem } from '../components/MotionComponents';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 border-b border-[#E3E2DD] dark:border-[#20262B] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">01</span>
          <span>/</span>
          <span>ABOUT</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Large Editorial Heading & Technical Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6] leading-[1.18] text-balance">
                "{profileData.about.statement}"
              </h2>
            </FadeIn>

            {/* Structured Technical Highlights Box */}
            <FadeIn direction="up" delay={0.15}>
              <SpotlightCard className="p-5 sm:p-6 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#DDDED8] dark:border-[#20262B]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF] block">
                    TECHNICAL CREDENTIALS
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#1F6B47] dark:text-[#34D399]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  {profileData.about.technicalHighlights.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[#DDDED8]/60 dark:border-[#20262B]/60 last:border-none last:pb-0"
                    >
                      <span className="text-[#636966] dark:text-[#9CA3AF] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#1F6B47] dark:text-[#34D399]" />
                        {item.label}
                      </span>
                      <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Right Column: Detailed Editorial Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#636966] dark:text-[#9CA3AF] leading-relaxed font-normal">
            <StaggerContainer staggerDelay={0.12}>
              {profileData.about.biography.map((paragraph, idx) => (
                <StaggerItem key={idx} className="text-balance mb-6 last:mb-0">
                  <p className="hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors duration-200">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}

              <StaggerItem>
                <div className="mt-8 pt-8 border-t border-[#DDDED8] dark:border-[#20262B] flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase mr-2">CORE FOCUS:</span>
                  <span className="px-3 py-1 rounded-full bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] border border-[#1F6B47]/20 dark:border-[#34D399]/20 font-medium">
                    MERN Stack Architecture
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] text-[#121513] dark:text-[#F3F4F6] border border-[#DDDED8] dark:border-[#20262B]">
                    Business CRM Systems
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.05] text-[#121513] dark:text-[#F3F4F6] border border-[#DDDED8] dark:border-[#20262B]">
                    Secure REST APIs & RBAC
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

        </div>

      </div>
    </section>
  );
}
