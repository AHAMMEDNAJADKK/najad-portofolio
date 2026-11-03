import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { developmentApproachSteps } from '../data/approach';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="py-20 bg-[#101613]/50 border-t border-[#25342D]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="05 // WORKFLOW & METHODOLOGY"
          title="End-to-End Development Lifecycle"
          subtitle="How I approach software engineering: from uncovering client business goals to architecting, deploying, and maintaining production solutions."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentApproachSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#121A16] border border-[#25342D] hover:border-[#31443B] transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-[#24D18A]/40 group-hover:text-[#24D18A] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A4AEA8] bg-[#101613] px-2 py-0.5 rounded border border-[#25342D]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F5F7F6] group-hover:text-[#24D18A] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#A4AEA8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Footer */}
              <div className="mt-6 pt-4 border-t border-[#25342D]/60 flex items-center gap-2 text-xs font-mono text-[#F5F7F6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </div>
          ))}

          {/* Value Summary Card to balance grid */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121A16] to-[#17221D] border border-[#24D18A]/30 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#24D18A]">
                Summary
              </span>
              <h3 className="text-lg font-bold text-[#F5F7F6]">
                Business Value First
              </h3>
              <p className="text-xs sm:text-sm text-[#A4AEA8] leading-relaxed">
                By maintaining discipline throughout all 7 stages, I avoid scope creep, eliminate architectural bottlenecks early, and deliver software that works reliably in real-world business environments.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25342D] text-xs font-mono text-[#24D18A]">
              Reliable &bull; Maintainable &bull; Scalable
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
