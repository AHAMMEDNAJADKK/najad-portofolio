import React from 'react';
import { developmentProcess } from '../data/approach';
import { FadeIn, SpotlightCard } from '../components/MotionComponents';
import { ArrowRight } from 'lucide-react';

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-36 border-b border-[#E3E2DD] dark:border-[#20262B] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">05</span>
          <span>/</span>
          <span>PROCESS</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6]">
              Development Methodology
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
              A disciplined engineering lifecycle moving from business analysis to stable cloud deployment.
            </p>
          </FadeIn>
        </div>

        {/* 6-Stage Process Grid of Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentProcess.map((step, idx) => (
            <FadeIn key={step.step} direction="up" delay={idx * 0.08}>
              <SpotlightCard className="p-8 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm hover:border-[#1F6B47]/40 dark:hover:border-[#34D399]/40 transition-all flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#DDDED8] dark:border-[#20262B]">
                    <span className="text-2xl font-mono font-bold text-[#1F6B47] dark:text-[#34D399]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF] px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04]">
                      PHASE
                    </span>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3 className="text-xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                      {step.phase}
                    </h3>
                    <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] font-medium">
                      {step.summary}
                    </p>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF]">
                  <span>LIFECYCLE STEP</span>
                  <ArrowRight className="w-3 h-3 text-[#1F6B47] dark:text-[#34D399]" />
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
