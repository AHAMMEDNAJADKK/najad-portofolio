import React from 'react';
import { developmentProcess } from '../data/approach';

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-36 border-b border-[#DDDED8] dark:border-[#30362F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>05 / PROCESS</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC]">
            Development Methodology
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
            A disciplined engineering lifecycle moving from business analysis to stable cloud deployment.
          </p>
        </div>

        {/* 6-Stage Process: Structured Editorial Table */}
        <div className="divide-y divide-[#DDDED8] dark:divide-[#30362F] border-y border-[#DDDED8] dark:border-[#30362F]">
          {developmentProcess.map((step) => (
            <div 
              key={step.step}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
            >
              {/* Step Number (2 cols) */}
              <div className="md:col-span-2">
                <span className="text-xl sm:text-2xl font-mono font-medium text-[#315C45] dark:text-[#83A88B]">
                  {step.step}
                </span>
              </div>

              {/* Phase Name & Summary (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-lg sm:text-xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {step.phase}
                </h3>
                <p className="text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">
                  {step.summary}
                </p>
              </div>

              {/* Detailed Description (6 cols) */}
              <div className="md:col-span-6">
                <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
