import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#121A16] border border-[#25342D] text-[#24D18A] mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#24D18A] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7F6] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#A4AEA8] leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
