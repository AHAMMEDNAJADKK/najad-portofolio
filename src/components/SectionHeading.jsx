import React from 'react';
import { FadeIn } from './MotionComponents';

export default function SectionHeading({ number, category, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 sm:mb-20 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {/* Editorial Identifier */}
      <FadeIn direction={isCenter ? "up" : "right"}>
        <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#636966] dark:text-[#9CA3AF] mb-4 ${isCenter ? 'justify-center' : ''}`}>
          {number && <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">{number}</span>}
          {number && <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>}
          <span>{category}</span>
          <span className="w-8 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </div>
      </FadeIn>

      {/* Main Title */}
      <FadeIn direction="up" delay={0.05}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6] leading-[1.15] text-balance">
          {title}
        </h2>
      </FadeIn>

      {/* Description */}
      {description && (
        <FadeIn direction="up" delay={0.1}>
          <p className="mt-4 text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed max-w-2xl text-balance">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
