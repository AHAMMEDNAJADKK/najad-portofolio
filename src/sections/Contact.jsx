import React from 'react';
import { profileData } from '../data/profile';
import ContactForm from '../components/ContactForm';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const channels = [
    {
      label: "EMAIL",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      note: "Direct communication"
    },
    {
      label: "LINKEDIN",
      value: "ahammed-najad-kk-786538365",
      href: profileData.linkedin,
      note: "Professional network"
    },
    {
      label: "GITHUB",
      value: "AHAMMEDNAJADKK",
      href: profileData.github,
      note: "Public code repositories"
    },
    {
      label: "LOCATION",
      value: profileData.location,
      href: null,
      note: "Kerala, India (UTC +5:30)"
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>{profileData.contact.label}</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Large Closing Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC] leading-[1.08] text-balance">
            {profileData.contact.statement}
          </h2>
          <p className="text-base sm:text-lg text-[#70736D] dark:text-[#A0A49D] leading-relaxed max-w-2xl font-normal">
            {profileData.contact.subtext}
          </p>
        </div>

        {/* Contact Layout: Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="divide-y divide-[#DDDED8] dark:divide-[#30362F] border-y border-[#DDDED8] dark:border-[#30362F]">
              {channels.map((ch, idx) => (
                <div key={idx} className="py-5 flex items-baseline justify-between gap-4 group">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                      {ch.label}
                    </span>
                    <span className="text-sm font-mono font-medium text-[#171916] dark:text-[#F2F2EC] block break-all sm:break-normal">
                      {ch.value}
                    </span>
                    <span className="text-xs text-[#70736D] dark:text-[#A0A49D] block">
                      {ch.note}
                    </span>
                  </div>

                  {ch.href && (
                    <a
                      href={ch.href}
                      target={ch.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-[#70736D] dark:text-[#A0A49D] group-hover:text-[#171916] dark:group-hover:text-[#F2F2EC] transition-colors"
                      aria-label={ch.label}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] text-xs font-mono text-[#70736D] dark:text-[#A0A49D] space-y-1">
              <span className="text-[#171916] dark:text-[#F2F2EC] font-semibold block uppercase">COMMUNICATION STANDARD</span>
              <p className="leading-relaxed">
                Prompt response guaranteed within 24 business hours for serious technical inquiries and team discussions.
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
