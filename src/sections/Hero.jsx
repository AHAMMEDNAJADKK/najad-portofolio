import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { profileData } from '../data/profile';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 border-b border-[#1C2420]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typographic Composition (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Professional Label */}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24D18A]"></span>
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-[#8E9892]">
                {profileData.hero.label}
              </p>
            </div>

            {/* Oversized Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] text-[#EDEDEA] leading-[1.08] text-balance">
                Building digital products. <br />
                <span className="font-serif italic font-normal text-[#EDEDEA]/90 tracking-normal">
                  Solving real problems.
                </span>
              </h1>

              <div className="pt-2">
                <p className="text-sm font-mono tracking-wider uppercase text-[#8E9892]">
                  — {profileData.name}
                </p>
              </div>
            </div>

            {/* Concise Professional Bio */}
            <p className="text-base sm:text-lg text-[#8E9892] max-w-xl leading-relaxed font-normal">
              {profileData.hero.description}
            </p>

            {/* Actions & Minimal Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#EDEDEA] text-[#080A09] font-medium text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#080A09]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#101412] border border-[#1C2420] text-[#EDEDEA] font-medium text-xs font-mono uppercase tracking-wider hover:border-[#24D18A] hover:text-[#24D18A] transition-colors"
              >
                <span>Let's Talk</span>
              </a>

              {/* Minimal Social Links */}
              <div className="flex items-center gap-4 pl-2 text-[#8E9892]">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EDEDEA] transition-colors p-1"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EDEDEA] transition-colors p-1"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-[#EDEDEA] transition-colors p-1"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Hairline Frame Container */}
              <div className="relative p-2 rounded-lg bg-[#101412] border border-[#1C2420]">
                
                {/* Crop & Portrait Treatment */}
                <div className="relative aspect-[3/4] overflow-hidden rounded bg-[#0D110F]">
                  <img
                    src={profileData.profileImage}
                    alt={`${profileData.name} portrait`}
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-top filter grayscale-[20%] contrast-[1.05] transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />

                  {/* Subtle tonal gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A09]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Architectural Metadata Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8E9892] bg-[#080A09]/80 backdrop-blur-sm px-2.5 py-1.5 rounded border border-[#1C2420]">
                    <span>FIG. 01 / PORTRAIT</span>
                    <span>KERALA, IN</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Information Strip Below Hero */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 lg:mt-24">
        <div className="pt-6 border-t border-[#1C2420] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-xs font-mono">
          
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-[#5A635E] block">
              LOCATION
            </span>
            <span className="text-[#EDEDEA] font-medium">
              {profileData.hero.infoStrip[0].value}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-[#5A635E] block">
              CURRENT ROLE
            </span>
            <span className="text-[#EDEDEA] font-medium">
              {profileData.hero.infoStrip[1].value}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-[#5A635E] block">
              MAIN FOCUS
            </span>
            <span className="text-[#EDEDEA] font-medium">
              {profileData.hero.infoStrip[2].value}
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
