import React, { useState } from 'react';
import { ArrowDown, Mail, Sparkles, Terminal, Code2, ShieldCheck, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { profileData } from '../data/profile';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#24D18A]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121A16] border border-[#25342D] text-xs font-mono text-[#F5F7F6]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24D18A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#24D18A]"></span>
              </span>
              <span className="text-[#A4AEA8]">{profileData.hero.badge}</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <span className="block font-mono text-xs sm:text-sm tracking-wider uppercase text-[#24D18A]">
                {profileData.name}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#F5F7F6] leading-[1.15] text-balance">
                Turning Business Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24D18A] to-[#42E39F]">Powerful Web Applications.</span>
              </h1>
            </div>

            {/* Subheadline & Description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg font-medium text-[#F5F7F6]">
                {profileData.hero.subHeadline}
              </p>
              <p className="text-sm sm:text-base text-[#A4AEA8] leading-relaxed">
                {profileData.hero.description}
              </p>
            </div>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#24D18A] text-[#080B0A] font-semibold text-sm hover:bg-[#1EB878] transition-all shadow-glow-sm"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#121A16] border border-[#25342D] text-[#F5F7F6] font-semibold text-sm hover:border-[#24D18A] hover:text-[#24D18A] transition-all"
              >
                <span>Let's Connect</span>
              </a>

              {/* Social Profile Buttons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="p-3 rounded-xl bg-[#121A16] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-colors"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-4 border-t border-[#25342D]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#A4AEA8]">
              <span className="text-[#6C7A73]">CORE STACK:</span>
              <span className="text-[#F5F7F6]">React.js</span>
              <span className="text-[#25342D]">&bull;</span>
              <span className="text-[#F5F7F6]">Node.js</span>
              <span className="text-[#25342D]">&bull;</span>
              <span className="text-[#F5F7F6]">Express.js</span>
              <span className="text-[#25342D]">&bull;</span>
              <span className="text-[#F5F7F6]">MongoDB</span>
            </div>

          </div>

          {/* RIGHT SIDE: Portrait & Visual Showcase (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Emerald Glow Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#24D18A]/20 via-[#24D18A]/5 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Portrait Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#25342D] via-[#121A16] to-[#080B0A] border border-[#25342D] shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#101613] border border-[#25342D]/50 flex items-center justify-center">
                  
                  {!imageError ? (
                    <img
                      src={profileData.profileImage}
                      alt={profileData.name}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                      }`}
                    />
                  ) : (
                    /* Fallback elegant monogram placeholder if image missing */
                    <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                      <div className="w-20 h-20 rounded-2xl bg-[#121A16] border border-[#24D18A]/40 flex items-center justify-center text-2xl font-mono font-bold text-[#24D18A]">
                        AN
                      </div>
                      <p className="font-bold text-sm text-[#F5F7F6]">{profileData.name}</p>
                      <p className="text-xs text-[#A4AEA8]">Junior Software Developer</p>
                    </div>
                  )}

                  {/* Subtle Gradient Overlay at bottom for seamless blend */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/60 to-transparent pointer-events-none" />

                  {/* Floating Role Chip */}
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-[#101613]/90 backdrop-blur-md border border-[#25342D] flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-[#121A16] border border-[#25342D] flex items-center justify-center text-[#24D18A] flex-shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#F5F7F6] truncate">
                        Junior Software Developer
                      </p>
                      <p className="text-[11px] text-[#24D18A] truncate font-mono">
                        Kod Brand &bull; Manjeri, Kerala
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
