import React from 'react';
import { professionalTimeline, formalEducation } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-36 border-b border-[#DDDED8] dark:border-[#30362F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>02 / EXPERIENCE</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC]">
            Professional Engineering Record
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
            A precise record of full-stack engineering tenure, professional internship, and specialized training.
          </p>
        </div>

        {/* Structured Editorial Timeline / Table */}
        <div className="divide-y divide-[#DDDED8] dark:divide-[#30362F] border-y border-[#DDDED8] dark:border-[#30362F]">
          {professionalTimeline.map((item) => (
            <div 
              key={item.number}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              {/* Period & Number (3 cols) */}
              <div className="lg:col-span-3 space-y-1">
                <span className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] block font-bold">
                  EXPERIENCE {item.number}
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-[#171916] dark:text-[#F2F2EC] font-semibold block">
                  {item.period}
                </span>
                <span className="text-[11px] font-mono text-[#70736D] dark:text-[#A0A49D] block">
                  {item.type}
                </span>
              </div>

              {/* Organization & Role (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {item.organization}
                </h3>
                <p className="text-sm font-mono text-[#315C45] dark:text-[#83A88B]">
                  {item.role}
                </p>
                <p className="text-xs text-[#70736D] dark:text-[#A0A49D] leading-relaxed pt-1">
                  {item.summary}
                </p>
              </div>

              {/* Responsibilities Details (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block mb-2">
                  VERIFIED DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#171916] dark:text-[#F2F2EC] leading-relaxed">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-[#315C45] dark:text-[#83A88B] mt-1 text-[10px]">&mdash;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Formal Education Footer Strip */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#70736D] dark:text-[#A0A49D]">
          <div>
            <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold">FORMAL FOUNDATION: </span>
            <span>{formalEducation.institution} &bull; {formalEducation.discipline} ({formalEducation.period})</span>
          </div>
          <span>ZERO FABRICATED METRICS &bull; VERIFIED KOD BRAND TENURE</span>
        </div>

      </div>
    </section>
  );
}
