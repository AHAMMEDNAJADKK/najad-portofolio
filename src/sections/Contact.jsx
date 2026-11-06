import React, { useState } from 'react';
import { profileData } from '../data/profile';
import ContactForm from '../components/ContactForm';
import { ArrowUpRight, Copy, Check, Mail, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { FadeIn, SpotlightCard } from '../components/MotionComponents';

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const channels = [
    {
      label: "EMAIL",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      note: "Direct communication & technical proposals",
      icon: Mail,
      canCopy: true,
    },
    {
      label: "LINKEDIN",
      value: "ahammed-najad-kk-786538365",
      href: profileData.linkedin,
      note: "Professional network & endorsements",
      icon: LinkedinIcon,
      canCopy: false,
    },
    {
      label: "GITHUB",
      value: "AHAMMEDNAJADKK",
      href: profileData.github,
      note: "Production & public code repositories",
      icon: GithubIcon,
      canCopy: false,
    },
    {
      label: "LOCATION",
      value: profileData.location,
      href: null,
      note: "Kerala, India &bull; Open to Remote & Relocation",
      icon: MapPin,
      canCopy: false,
    }
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">06</span>
          <span>/</span>
          <span>CONTACT</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Large Closing Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24 space-y-4">
          <FadeIn direction="up">
            <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6] leading-[1.08] text-balance">
              {profileData.contact.statement}
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-base sm:text-lg text-[#636966] dark:text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
              {profileData.contact.subtext}
            </p>
          </FadeIn>
        </div>

        {/* Contact Layout: Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="up">
              <div className="space-y-4">
                {channels.map((ch, idx) => {
                  const Icon = ch.icon;
                  const isCopied = copiedIndex === idx;

                  return (
                    <SpotlightCard 
                      key={idx} 
                      className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm hover:border-[#1F6B47]/40 dark:hover:border-[#34D399]/40 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#1F6B47] dark:text-[#34D399]" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF]">
                              {ch.label}
                            </span>
                          </div>

                          <span className="text-sm font-mono font-medium text-[#121513] dark:text-[#F3F4F6] block truncate">
                            {ch.value}
                          </span>

                          <span 
                            className="text-xs text-[#636966] dark:text-[#9CA3AF] block"
                            dangerouslySetInnerHTML={{ __html: ch.note }}
                          />
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {ch.canCopy && (
                            <button
                              onClick={() => handleCopy(ch.value, idx)}
                              className="p-2 rounded-md text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                              title="Copy to clipboard"
                              aria-label={`Copy ${ch.label}`}
                            >
                              {isCopied ? (
                                <Check className="w-4 h-4 text-[#1F6B47] dark:text-[#34D399]" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          )}

                          {ch.href && (
                            <a
                              href={ch.href}
                              target={ch.href.startsWith('mailto') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className="p-2 rounded-md text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                              aria-label={`Visit ${ch.label}`}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </FadeIn>

            {/* SLA Response Guarantee Box */}
            <FadeIn direction="up" delay={0.2}>
              <SpotlightCard className="p-5 rounded-xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#121513] dark:text-[#F3F4F6] uppercase">
                  <Clock className="w-4 h-4 text-[#1F6B47] dark:text-[#34D399]" />
                  <span>COMMUNICATION STANDARD</span>
                </div>
                <p className="text-xs text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  Prompt response guaranteed within 24 business hours for serious technical inquiries, engineering opportunities, and contract collaborations.
                </p>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
