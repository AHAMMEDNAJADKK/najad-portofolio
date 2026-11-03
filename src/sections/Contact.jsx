import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { profileData } from '../data/profile';
import { Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact() {
  const contactChannels = [
    {
      icon: Mail,
      label: "Email Address",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      actionText: "Send an Email",
      isPrimary: true
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "ahammed-najad-kk",
      href: profileData.linkedin,
      actionText: "Connect on LinkedIn",
      isPrimary: false
    },
    {
      icon: GithubIcon,
      label: "GitHub Profile",
      value: "AHAMMEDNAJADKK",
      href: profileData.github,
      actionText: "View Repositories",
      isPrimary: false
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: profileData.location,
      href: null,
      actionText: "Kerala, India (UTC +5:30)",
      isPrimary: false
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="06 // GET IN TOUCH"
          title="Let's Discuss Your Next Project"
          subtitle="Whether you have an upcoming web project, need CRM development expertise, or wish to explore full-time developer opportunities, I am always open to connecting."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {contactChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#121A16] border border-[#25342D] hover:border-[#31443B] transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#101613] border border-[#25342D] flex items-center justify-center text-[#24D18A] flex-shrink-0 group-hover:border-[#24D18A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono uppercase text-[#A4AEA8] tracking-wider">
                        {channel.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F5F7F6] truncate mt-0.5">
                        {channel.value}
                      </p>
                    </div>
                  </div>

                  {channel.href && (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#101613] border border-[#25342D] text-[#A4AEA8] hover:text-[#24D18A] hover:border-[#24D18A] transition-colors flex-shrink-0"
                      aria-label={channel.actionText}
                      title={channel.actionText}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}

            {/* Quick Note Card */}
            <div className="p-5 rounded-xl bg-[#101613] border border-[#25342D] space-y-2 text-xs text-[#A4AEA8]">
              <div className="flex items-center gap-2 font-mono text-[#24D18A] font-semibold uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>Response Time</span>
              </div>
              <p className="leading-relaxed">
                I typically respond to inquiries within 24 hours. For urgent project discussions, emailing directly or reaching out on LinkedIn is recommended.
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
