import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 border-b border-[#DDDED8] dark:border-[#30362F]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* 12-Column Editorial Grid: 60% Left (7 cols) / 40% Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (60% / 7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pr-6">
            
            {/* Small Label */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315C45] dark:bg-[#83A88B]"></span>
              <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D]">
                {profileData.hero.label}
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC] leading-[1.08] text-balance">
                Engineering digital <br />
                solutions for <span className="font-serif italic font-normal text-[#315C45] dark:text-[#83A88B]">real-world</span> <br />
                problems.
              </h1>

              <div className="pt-1">
                <p className="text-xs font-mono tracking-wider uppercase text-[#70736D] dark:text-[#A0A49D]">
                  — {profileData.name}
                </p>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-[#70736D] dark:text-[#A0A49D] leading-relaxed max-w-xl font-normal">
              {profileData.hero.introduction}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
              >
                <span>{profileData.hero.actions.primary}</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-transparent border border-[#DDDED8] dark:border-[#30362F] text-[#171916] dark:text-[#F2F2EC] text-xs font-mono uppercase tracking-wider font-medium hover:border-[#171916] dark:hover:border-[#F2F2EC] transition-colors"
              >
                <span>{profileData.hero.actions.secondary}</span>
              </a>
            </div>

          </div>

          {/* Right Column (40% / 5 cols): Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
              
              {/* Minimal Rectangular Frame */}
              <div className="relative p-2 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#EAE8E3] dark:bg-[#161A16]">
                  <img
                    src={profileData.profileImage}
                    alt={`${profileData.name} portrait`}
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-top filter grayscale-[15%] contrast-[1.03] transition-opacity duration-700 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Subtle Corner Caption Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] bg-white/90 dark:bg-[#111311]/90 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#DDDED8] dark:border-[#30362F]">
                    <span>AHAMMED NAJAD KK</span>
                    <span>FIG. 01</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Compact Horizontal Information Strip Below Hero */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-[#DDDED8] dark:border-[#30362F]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-xs font-mono">
            {profileData.hero.infoStrip.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#70736D] dark:text-[#A0A49D] block">
                  {item.label}
                </span>
                <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold block text-balance">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
