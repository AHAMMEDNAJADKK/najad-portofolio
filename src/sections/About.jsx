import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { Code2, Server, Database, Users2, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function About() {
  const coreCompetencies = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "Developing responsive, component-driven user interfaces in React.js and Tailwind CSS, focusing on clean UX and intuitive form states."
    },
    {
      icon: Server,
      title: "Backend & API Architecture",
      description: "Building structured Express and Node.js REST APIs with robust controller logic, JWT authentication, and custom validation middleware."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing efficient MongoDB collections, Mongoose schemas with relational references, and optimizing query aggregations."
    },
    {
      icon: Users2,
      title: "Client Requirements & Problem-Solving",
      description: "Collaborating directly with clients to translate operational bottlenecks into practical, business-focused digital solutions and CRM workflows."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#101613]/50 border-t border-[#25342D]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="01 // ABOUT ME"
          title="Practical Engineering Grounded in Business Realities"
          subtitle="I bridge the gap between business objectives and scalable web applications, combining frontend craft with solid backend fundamentals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Natural Bio & Experience Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121A16] border border-[#25342D] space-y-4">
              <p className="text-base sm:text-lg font-semibold text-[#F5F7F6] leading-relaxed">
                {profileData.about.lead}
              </p>

              {profileData.about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#A4AEA8] leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-[#25342D] flex items-center gap-2 text-xs font-mono text-[#24D18A]">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Based in {profileData.location} &bull; Open to Remote and On-Site Opportunities</span>
              </div>
            </div>

            {/* Quick Metrics / Verified Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {profileData.about.highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#121A16] border border-[#25342D] text-left">
                  <p className="text-[11px] font-mono uppercase text-[#A4AEA8] tracking-wider">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-[#F5F7F6] truncate">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Competency Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#121A16] border border-[#25342D] hover:border-[#31443B] transition-colors flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#101613] border border-[#25342D] flex items-center justify-center text-[#24D18A] flex-shrink-0 group-hover:border-[#24D18A] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F7F6] group-hover:text-[#24D18A] transition-colors">
                      {comp.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#A4AEA8] leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
