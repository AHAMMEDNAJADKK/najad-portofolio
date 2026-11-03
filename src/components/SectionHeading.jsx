import React from 'react';

export default function SectionHeading({ number, category, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 sm:mb-20 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {/* Editorial Identifier */}
      <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#8E9892] mb-4 ${isCenter ? 'justify-center' : ''}`}>
        {number && <span className="text-[#24D18A]">{number}</span>}
        {number && <span className="text-[#5A635E]">/</span>}
        <span>{category}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#EDEDEA] leading-[1.15] text-balance">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 text-sm sm:text-base text-[#8E9892] leading-relaxed max-w-2xl text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
