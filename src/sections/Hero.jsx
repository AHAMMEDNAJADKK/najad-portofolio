import React, { useState } from 'react';
import { ArrowDownRight, ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Magnetic, SpotlightCard } from '../components/MotionComponents';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 border-b border-[#E3E2DD] dark:border-[#20262B] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* 12-Column Editorial Layout: 60% Left (7 cols) / 40% Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Animated Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-8 lg:pr-6"
          >
            
            {/* Small Label Identifier with Live Status */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F6B47] dark:bg-[#34D399]"></span>
              </span>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#636966] dark:text-[#9CA3AF]">
                {profileData.hero.label}
              </p>
            </motion.div>

            {/* Headline with Staggered Entrance */}
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6] leading-[1.08] text-balance break-words"
              >
                Engineering digital <br />
                solutions for <span className="font-serif italic font-normal text-[#1F6B47] dark:text-[#34D399] tracking-normal">real-world</span> <br />
                problems.
              </motion.h1>

              <motion.div variants={itemVariants} className="pt-1 flex items-center gap-2">
                <span className="h-px w-6 bg-[#1F6B47]/60 dark:bg-[#34D399]/60" />
                <p className="text-xs font-mono tracking-wider uppercase text-[#636966] dark:text-[#9CA3AF]">
                  {profileData.name} &bull; {profileData.roleTitle}
                </p>
              </motion.div>
            </div>

            {/* Professional Introduction */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[#636966] dark:text-[#9CA3AF] leading-relaxed max-w-xl font-normal"
            >
              {profileData.hero.introduction}
            </motion.p>

            {/* Action Buttons with Magnetic Effect */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <Magnetic strength={15}>
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all overflow-hidden"
                >
                  <span className="relative z-10">{profileData.hero.actions.primary}</span>
                  <ArrowDownRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity" />
                </a>
              </Magnetic>

              <Magnetic strength={12}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/50 dark:bg-[#121417]/50 border border-[#DDDED8] dark:border-[#20262B] text-[#121513] dark:text-[#F3F4F6] text-xs font-mono uppercase tracking-wider font-medium hover:border-[#121513] dark:hover:border-[#34D399] transition-all backdrop-blur-sm"
                >
                  <span>{profileData.hero.actions.secondary}</span>
                </a>
              </Magnetic>
            </motion.div>

          </motion.div>

          {/* Right Column (5 cols): Editorial Portrait Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              
              {/* Minimal Rectangular Frame with Spotlight Glow */}
              <SpotlightCard className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-elevated transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-[#EAE8E3] dark:bg-[#15191C] group">
                  {/* Subtle Shimmer Skeleton while loading */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent animate-pulse" />
                  )}

                  <img
                    src={profileData.profileImage}
                    alt={`${profileData.name} portrait`}
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-top filter grayscale-[10%] contrast-[1.04] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Subtle Corner Caption Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF] bg-white/95 dark:bg-[#090A0C]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#DDDED8] dark:border-[#20262B] shadow-sm">
                    <span className="font-semibold text-[#121513] dark:text-[#F3F4F6]">AHAMMED NAJAD KK</span>
                    <span className="text-[#1F6B47] dark:text-[#34D399] font-medium">FIG. 01</span>
                  </div>
                </div>
              </SpotlightCard>

            </div>
          </motion.div>

        </div>

        {/* Compact Horizontal Information Strip Below Hero */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-24 pt-8 border-t border-[#DDDED8] dark:border-[#20262B]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs font-mono">
            {profileData.hero.infoStrip.map((item, idx) => (
              <SpotlightCard
                key={idx} 
                className="p-4 rounded-lg bg-white/60 dark:bg-[#121417]/60 border border-[#DDDED8]/80 dark:border-[#20262B]/80 hover:border-[#1F6B47]/40 dark:hover:border-[#34D399]/40 transition-colors space-y-1.5"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#636966] dark:text-[#9CA3AF] block font-mono">
                  {item.label}
                </span>
                <span className="text-[#121513] dark:text-[#F3F4F6] font-semibold block text-balance">
                  {item.value}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator Prompt */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="inline-flex flex-col items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors group"
            aria-label="Scroll to About section"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="p-1 rounded-full border border-[#DDDED8] dark:border-[#20262B] group-hover:border-[#1F6B47] dark:group-hover:border-[#34D399]"
            >
              <ArrowDown className="w-3 h-3 text-[#1F6B47] dark:text-[#34D399]" />
            </motion.div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
