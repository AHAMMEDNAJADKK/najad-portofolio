import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { profileData } from '../data/profile';
import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact() {
  const directChannels = [
    {
      label: "DIRECT EMAIL",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      note: "Primary communication channel"
    },
    {
      label: "LINKEDIN",
      value: "ahammed-najad-kk",
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
      value: profileData.fullLocation,
      href: null,
      note: "Kerala, India (UTC +5:30)"
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Identifier */}
        <SectionHeading
          number="06"
          category="CONTACT"
          title="Have a project or an opportunity in mind?"
          description="Let's discuss how technology can turn your ideas into practical digital solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {directChannels.map((channel, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#101412] border border-[#1C2420] hover:border-[#28362F] transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1 min-w-0 pr-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A635E] block">
                      {channel.label}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#EDEDEA] truncate">
                      {channel.value}
                    </p>
                    <p className="text-[11px] text-[#8E9892]">
                      {channel.note}
                    </p>
                  </div>

                  {channel.href && (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-[#080A09] border border-[#1C2420] text-[#8E9892] group-hover:text-[#24D18A] group-hover:border-[#24D18A] transition-colors flex-shrink-0"
                      aria-label={channel.label}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#080A09] border border-[#1C2420] text-xs font-mono text-[#8E9892] space-y-1">
              <span className="text-[#EDEDEA] font-semibold block uppercase">AVAILABILITY</span>
              <p className="leading-relaxed">
                Available for full-time junior developer positions, contract development, and select freelance web applications.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
