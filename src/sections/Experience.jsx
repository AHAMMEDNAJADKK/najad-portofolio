import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { professionalExperience, academicAndTraining } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-[#1C2420]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionHeading
          number="02"
          category="EXPERIENCE"
          title="Professional Career Record"
          description="A chronological record of full-stack software development experience, industry training, and academic background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Work Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1C2420] text-xs font-mono uppercase tracking-widest text-[#8E9892]">
              <span>WORK EXPERIENCE</span>
            </div>

            <div className="space-y-12">
              {professionalExperience.map((exp, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#1C2420]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#EDEDEA]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-[#8E9892] mt-0.5">
                        {exp.company} &bull; {exp.location}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-[#24D18A] tracking-wider uppercase">
                      {exp.startDate ? `${exp.startDate} — ${exp.endDate}` : exp.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#8E9892] leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="pt-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#5A635E] mb-3">
                      Key Deliverables & Responsibilities
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#EDEDEA]/90">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-[#24D18A] mt-1 text-[10px]">&bull;</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.isCurrent && (
                    <div className="pt-2 text-[11px] font-mono text-[#5A635E]">
                      Current Tenure: {exp.experienceTime}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Training & Education (4 cols) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex items-center gap-2 pb-3 border-b border-[#1C2420] text-xs font-mono uppercase tracking-widest text-[#8E9892]">
              <span>EDUCATION & TRAINING</span>
            </div>

            <div className="space-y-8">
              {academicAndTraining.map((item, idx) => (
                <div key={idx} className="space-y-2 pb-6 border-b border-[#1C2420]/60 last:border-0">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8E9892]">
                    <span className="uppercase tracking-wider">{item.type}</span>
                    <span className="text-[#5A635E]">{item.period}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-[#EDEDEA]">
                    {item.discipline}
                  </h4>
                  <p className="text-xs text-[#8E9892] font-mono">
                    {item.institution}
                  </p>

                  <p className="text-xs text-[#5A635E] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded bg-[#101412] border border-[#1C2420] text-[11px] font-mono text-[#8E9892] space-y-1">
                <span className="text-[#EDEDEA] font-semibold block">INTEGRITY COMMITMENT</span>
                <p className="leading-relaxed">
                  All dates, roles, and institutional records verified accurately. No unverified milestones or fabricated seniority claims.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
