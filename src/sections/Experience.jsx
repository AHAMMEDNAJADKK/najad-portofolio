import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { professionalTimeline, formalEducation } from '../data/experience';
import { FadeIn, SpotlightCard } from '../components/MotionComponents';
import { Briefcase, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-36 border-b border-[#E3E2DD] dark:border-[#20262B] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">02</span>
          <span>/</span>
          <span>EXPERIENCE</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6]">
              Professional Engineering Record
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
              A precise record of full-stack engineering tenure, professional internship, and specialized training.
            </p>
          </FadeIn>
        </div>

        {/* Structured Editorial Timeline with Animated Vertical Progress Indicator */}
        <div ref={containerRef} className="relative space-y-12 sm:space-y-16">
          
          {/* Timeline Vertical Track (Visible on desktop & tablets) */}
          <div className="hidden lg:block absolute left-[24.5%] top-4 bottom-4 w-px bg-[#DDDED8] dark:bg-[#20262B] pointer-events-none">
            <motion.div 
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-[#1F6B47] to-[#34D399] origin-top"
            />
          </div>

          {professionalTimeline.map((item, idx) => (
            <FadeIn key={item.number} direction="up" delay={idx * 0.1}>
              <SpotlightCard className="p-6 sm:p-10 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm hover:border-[#1F6B47]/40 dark:hover:border-[#34D399]/40 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Period & Number (3 cols) */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#1F6B47] dark:text-[#34D399] px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10">
                        RECORD {item.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#121513] dark:text-[#F3F4F6] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399]" />
                      <span>{item.period}</span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF] block">
                      {item.type}
                    </span>
                  </div>

                  {/* Organization & Role (4 cols) */}
                  <div className="lg:col-span-4 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#1F6B47] dark:text-[#34D399]" />
                      <h3 className="text-xl sm:text-2xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                        {item.organization}
                      </h3>
                    </div>

                    <p className="text-sm font-mono text-[#1F6B47] dark:text-[#34D399] font-medium">
                      {item.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed pt-1">
                      {item.summary}
                    </p>
                  </div>

                  {/* Verified Responsibilities (5 cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF] block pb-1 border-b border-[#DDDED8] dark:border-[#20262B]">
                      VERIFIED DELIVERABLES & SCOPE
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#121513] dark:text-[#F3F4F6] leading-relaxed">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 group">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399] mt-0.5 shrink-0" />
                          <span className="group-hover:text-[#1F6B47] dark:group-hover:text-[#34D399] transition-colors">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Formal Education Footer Strip */}
        <FadeIn direction="up" delay={0.2} className="mt-14 pt-8 border-t border-[#DDDED8] dark:border-[#20262B]">
          <div className="p-6 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] text-[#1F6B47] dark:text-[#34D399]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold">FORMAL FOUNDATION: </span>
                <span className="text-[#636966] dark:text-[#9CA3AF]">{formalEducation.institution} &bull; {formalEducation.discipline} ({formalEducation.period})</span>
                <p className="text-[11px] text-[#636966] dark:text-[#9CA3AF] mt-0.5">{formalEducation.note}</p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] font-bold px-2.5 py-1 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 border border-[#1F6B47]/20 dark:border-[#34D399]/20 self-start sm:self-auto">
              VERIFIED KOD BRAND TENURE
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
