import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { engineeringApproachSteps } from '../data/approach';

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="py-24 sm:py-32 border-b border-[#1C2420]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionHeading
          number="05"
          category="PROCESS"
          title="Engineering Methodology & Workflow"
          description="A disciplined 6-stage lifecycle to ensure business requirements translate into reliable, maintainable web software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {engineeringApproachSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-[#101412] border border-[#1C2420] hover:border-[#28362F] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Number & Phase Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1C2420]">
                  <span className="text-xl font-mono font-bold text-[#24D18A]">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#5A635E]">
                    PHASE {idx + 1}
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-semibold text-[#EDEDEA] group-hover:text-[#24D18A] transition-colors">
                    {step.phase}
                  </h3>
                  <p className="text-xs font-mono text-[#8E9892]">
                    {step.headline}
                  </p>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Footer */}
              <div className="mt-8 pt-4 border-t border-[#1C2420] text-[11px] font-mono text-[#5A635E]">
                OUTPUT: <span className="text-[#EDEDEA]">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
