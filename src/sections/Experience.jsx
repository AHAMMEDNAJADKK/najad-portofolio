import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData, educationData } from '../data/experience';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="02 // CAREER TIMELINE"
          title="Education & Professional Experience"
          subtitle="A transparent record of my hands-on software development roles, training, and educational background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 pb-4 border-b border-[#25342D]">
              <Briefcase className="w-5 h-5 text-[#24D18A]" />
              <h3 className="text-xl font-bold text-[#F5F7F6]">Work Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-[#25342D] space-y-8">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#080B0A] ${
                    exp.isCurrent ? 'border-[#24D18A] shadow-glow-sm' : 'border-[#6C7A73]'
                  }`}>
                    {exp.isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24D18A] absolute inset-0 m-auto animate-pulse"></span>
                    )}
                  </div>

                  <div className="p-6 rounded-2xl bg-[#121A16] border border-[#25342D] group-hover:border-[#31443B] transition-colors space-y-4">
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-[#F5F7F6]">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-[#24D18A]">
                          {exp.company} &bull; <span className="text-xs text-[#A4AEA8] font-normal">{exp.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#A4AEA8] bg-[#101613] px-3 py-1 rounded-lg border border-[#25342D] w-fit">
                        <Calendar className="w-3.5 h-3.5 text-[#24D18A]" />
                        <span>{exp.startDate ? `${exp.startDate} – ${exp.endDate}` : exp.period}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A4AEA8] leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Detailed Responsibilities */}
                    <div className="pt-3 border-t border-[#25342D]/60 space-y-2">
                      <p className="text-xs font-mono uppercase text-[#A4AEA8] tracking-wider">
                        Core Responsibilities & Deliverables:
                      </p>
                      <ul className="grid grid-cols-1 gap-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[#F5F7F6]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.isCurrent && (
                      <div className="pt-2 text-[11px] font-mono text-[#24D18A]">
                        Current experience: {exp.experienceTime}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 pb-4 border-b border-[#25342D]">
              <GraduationCap className="w-5 h-5 text-[#24D18A]" />
              <h3 className="text-xl font-bold text-[#F5F7F6]">Education & Training</h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#121A16] border border-[#25342D] hover:border-[#31443B] transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#24D18A]">
                    <span className="uppercase tracking-wider">{edu.type}</span>
                    <span className="text-[#A4AEA8]">{edu.period}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#F5F7F6]">
                      {edu.discipline}
                    </h4>
                    <p className="text-xs font-medium text-[#A4AEA8] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs text-[#A4AEA8] leading-relaxed pt-2 border-t border-[#25342D]/50">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Integrity Statement Card */}
              <div className="p-5 rounded-xl bg-[#101613] border border-[#25342D]/70 text-xs text-[#A4AEA8] space-y-1.5">
                <p className="font-mono text-[#24D18A] font-semibold uppercase tracking-wider">
                  Honest Career Documentation
                </p>
                <p className="leading-relaxed">
                  All dates, roles, and institutional affiliations listed above represent verified records. No exaggerated senior titles or synthetic milestones.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
