import React, { useState } from 'react';
import { selectedProjects } from '../data/projects';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { ArrowRight, ArrowUpRight, ShieldCheck, Terminal, Layers, Database } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { FadeIn, SpotlightCard, Magnetic } from '../components/MotionComponents';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const p1 = selectedProjects[0]; // LastKey
  const p2 = selectedProjects[1]; // Drive Line
  const p3 = selectedProjects[2]; // Razain-Benz
  const p4 = selectedProjects[3]; // IT Consultant
  const p5 = selectedProjects[4]; // Kod Brand
  const p6 = selectedProjects[5]; // Wear Caviro

  return (
    <section id="projects" className="py-24 sm:py-32 lg:py-36 border-b border-[#E3E2DD] dark:border-[#20262B] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <FadeIn direction="right" className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-[#636966] dark:text-[#9CA3AF] mb-12 sm:mb-16">
          <span className="text-[#1F6B47] dark:text-[#34D399] font-bold">04</span>
          <span>/</span>
          <span>SELECTED WORK</span>
          <span className="w-12 h-px bg-[#DDDED8] dark:bg-[#20262B]"></span>
        </FadeIn>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121513] dark:text-[#F3F4F6]">
              Selected Engineering Work
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
              A curated portfolio of verified production systems, multi-branch CRMs, and full-stack web applications.
            </p>
          </FadeIn>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 01: LASTKEY — FULL-WIDTH PRIMARY FEATURE         */}
        {/* ======================================================== */}
        <FadeIn direction="up" className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#20262B]">
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Project Details (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    FLAGSHIP {p1.number}
                  </span>
                  <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase tracking-wider">{p1.category}</span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p1.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-1 uppercase tracking-wider">
                    {p1.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p1.conciseDescription}
                </p>

                {/* Technical Ownership & Contribution */}
                <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>TECHNICAL OWNERSHIP & ARCHITECTURE</span>
                  </div>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6] leading-relaxed">
                    {p1.actualContribution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#636966] dark:text-[#9CA3AF] block">
                    STACK DEPLOYED
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p1.technologies.map((t) => (
                      <span 
                        key={t} 
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B] hover:border-[#1F6B47] dark:hover:border-[#34D399] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Magnetic strength={12}>
                    <button
                      onClick={() => setActiveProject(p1)}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </Magnetic>

                  {p1.githubUrl && (
                    <a
                      href={p1.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors p-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Large Actual Screenshot Frame (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-[#DDDED8] dark:border-[#20262B] bg-[#F8F7F4] dark:bg-[#090A0C] p-2.5 shadow-md overflow-hidden group">
                  
                  {/* Browser Metadata Header */}
                  <div className="px-4 py-2.5 bg-white dark:bg-[#121417] rounded-t-lg border-b border-[#DDDED8] dark:border-[#20262B] flex items-center justify-between text-[11px] font-mono text-[#636966] dark:text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                      <span className="ml-2 font-semibold text-[#121513] dark:text-[#F3F4F6]">LASTKEY / ASSET VAULT</span>
                    </div>
                    <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] uppercase tracking-wider">
                      ACTUAL INTERFACE SCREENSHOT
                    </span>
                  </div>

                  {/* Screenshot with Hover Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-[#EAE8E3] dark:bg-[#15191C]">
                    <img
                      src={p1.image}
                      alt="LastKey Digital Will application screenshot"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      onError={(e) => {
                        if (p1.backupImage && e.target.src !== p1.backupImage) {
                          e.target.src = p1.backupImage;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </FadeIn>


        {/* ======================================================== */}
        {/* PROJECT 02: DRIVE LINE (Schematic Left, Content Right)   */}
        {/* ======================================================== */}
        <FadeIn direction="up" className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#20262B]">
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Visual Architecture Schematic (6 cols) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-xl border border-[#DDDED8] dark:border-[#20262B] bg-[#F8F7F4] dark:bg-[#090A0C] p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#20262B] text-[#636966] dark:text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399]" />
                      <span>ARCHITECTURAL SCHEMATIC</span>
                    </div>
                    <span>MULTI-BRANCH CRM</span>
                  </div>
                  
                  {/* System Mapping Preview */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-colors">
                      <span className="text-[#1F6B47] dark:text-[#34D399] block font-semibold mb-1">
                        01 / INCOMING INQUIRY PIPELINE
                      </span>
                      <p className="text-[#636966] dark:text-[#9CA3AF] text-[11px]">
                        Customer Inquiry &rarr; Vehicle Make/Model/Year &rarr; Spare-Part Code Indexing
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-colors">
                      <span className="text-[#1F6B47] dark:text-[#34D399] block font-semibold mb-1">
                        02 / BRANCH DATA SCOPING (RBAC)
                      </span>
                      <p className="text-[#636966] dark:text-[#9CA3AF] text-[11px]">
                        Branch Manager Data Isolation &rarr; Super Admin Multi-Branch Executive Overview
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] hover:border-[#1F6B47] dark:hover:border-[#34D399] transition-colors">
                      <span className="text-[#1F6B47] dark:text-[#34D399] block font-semibold mb-1">
                        03 / SUPPLIER LOGISTICS
                      </span>
                      <p className="text-[#636966] dark:text-[#9CA3AF] text-[11px]">
                        Supplier Catalog Match &rarr; Procurement Quotation &rarr; Closed Deal
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF]">
                    <span>MODELS: Customer, Lead, Supplier, VehicleSpecialization</span>
                    <span className="text-[#1F6B47] dark:text-[#34D399]">KOD BRAND CLIENT ERP</span>
                  </div>
                </div>
              </div>

              {/* Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    PROJECT {p2.number}
                  </span>
                  <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase tracking-wider">{p2.category}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p2.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-1 uppercase tracking-wider">
                    {p2.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p2.conciseDescription}
                </p>

                <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                    TECHNICAL OWNERSHIP & CONTRIBUTION
                  </span>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6] leading-relaxed">
                    {p2.actualContribution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p2.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Magnetic strength={12}>
                    <button
                      onClick={() => setActiveProject(p2)}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-95 transition-all"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </FadeIn>


        {/* ======================================================== */}
        {/* PROJECT 03: RAZAIN-BENZ (Content Left, Ledger Right)    */}
        {/* ======================================================== */}
        <FadeIn direction="up" className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#20262B]">
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    PROJECT {p3.number}
                  </span>
                  <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase tracking-wider">{p3.category}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p3.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-1 uppercase tracking-wider">
                    {p3.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p3.conciseDescription}
                </p>

                <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                    TECHNICAL OWNERSHIP & CONTRIBUTION
                  </span>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6] leading-relaxed">
                    {p3.actualContribution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p3.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Magnetic strength={12}>
                    <button
                      onClick={() => setActiveProject(p3)}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-95 transition-all"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                </div>
              </div>

              {/* Financial Ledger & Wireframe (6 cols) */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-[#DDDED8] dark:border-[#20262B] bg-[#F8F7F4] dark:bg-[#090A0C] p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#20262B] text-[#636966] dark:text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399]" />
                      <span>FINANCIAL LEDGER & SEQUENTIAL IDs</span>
                    </div>
                    <span>ATOMIC COUNTER</span>
                  </div>

                  <div className="p-4 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF] block">
                        OFFICIAL RECEIPT GENERATION
                      </span>
                      <span className="text-base font-mono font-bold text-[#121513] dark:text-[#F3F4F6]">
                        REC-2026-0842
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] bg-[#1F6B47]/10 dark:bg-[#34D399]/10 border border-[#1F6B47]/20 dark:border-[#34D399]/20 px-2.5 py-1 rounded">
                      ZERO-GAP SEQUENTIAL
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#636966] dark:text-[#9CA3AF] block">MD DASHBOARD</span>
                      <span className="text-xs font-bold text-[#121513] dark:text-[#F3F4F6]">Real-Time Collections</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#636966] dark:text-[#9CA3AF] block">EOD CASH DRAWER</span>
                      <span className="text-xs font-bold text-[#121513] dark:text-[#F3F4F6]">Cash vs UPI Audit</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF] flex items-center justify-between">
                    <span>PRINTABLE PDF WITH BENZ EMBLEM</span>
                    <span className="text-[#1F6B47] dark:text-[#34D399]">/student-ledger &bull; /daily-collection</span>
                  </div>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </FadeIn>


        {/* ======================================================== */}
        {/* PROJECT 04: IT CONSULTANT (12-Module Lifecycle)          */}
        {/* ======================================================== */}
        <FadeIn direction="up" className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#20262B]">
          <SpotlightCard className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B] shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Visual Workflow (7 cols) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-xl border border-[#DDDED8] dark:border-[#20262B] bg-[#F8F7F4] dark:bg-[#090A0C] p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#20262B] text-[#636966] dark:text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#1F6B47] dark:text-[#34D399]" />
                      <span>NEXORA IT SUITE &bull; 12-MODULE LIFECYCLE</span>
                    </div>
                    <span>AGILE & SLA AUTOMATION</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 01-03</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">Leads & Clients</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 04-06</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">Projects & Sprints</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 07-09</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">Git Webhooks & Audit</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 10</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">Invoices & Finance</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 11</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">Support Desk</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#121417] border border-[#DDDED8] dark:border-[#20262B]">
                      <span className="text-[10px] text-[#1F6B47] dark:text-[#34D399] block font-bold">MOD 12</span>
                      <span className="text-xs font-semibold text-[#121513] dark:text-[#F3F4F6]">SLA Contracts</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#636966] dark:text-[#9CA3AF] flex items-center justify-between">
                    <span>GIT WEBHOOK HMAC-SHA256 AUDIT</span>
                    <span className="text-[#1F6B47] dark:text-[#34D399]">KANBAN DND INTEGRATED</span>
                  </div>
                </div>
              </div>

              {/* Content (5 cols) */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    PROJECT {p4.number}
                  </span>
                  <span className="text-[#DDDED8] dark:text-[#20262B]">/</span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase tracking-wider">{p4.category}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p4.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-1 uppercase tracking-wider">
                    {p4.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p4.conciseDescription}
                </p>

                <div className="p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                    TECHNICAL OWNERSHIP & CONTRIBUTION
                  </span>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6] leading-relaxed">
                    {p4.actualContribution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p4.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Magnetic strength={12}>
                    <button
                      onClick={() => setActiveProject(p4)}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#121513] text-[#F8F7F4] dark:bg-[#F3F4F6] dark:text-[#090A0C] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-95 transition-all"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </FadeIn>


        {/* ======================================================== */}
        {/* COMPACT DUO: PROJECT 05 (KOD BRAND) & PROJECT 06 (WEAR CAVIRO) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PROJECT 05: KOD BRAND CRM */}
          <FadeIn direction="up">
            <SpotlightCard className="p-8 sm:p-10 rounded-2xl border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] shadow-elevated flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#20262B]">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    PROJECT {p5.number}
                  </span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase">{p5.category}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p5.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-0.5 uppercase tracking-wider">
                    {p5.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p5.conciseDescription}
                </p>

                <div className="p-3.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                    CONTRIBUTION
                  </span>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6]">
                    {p5.actualContribution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p5.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDDED8] dark:border-[#20262B]">
                <button
                  onClick={() => setActiveProject(p5)}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#121513] dark:text-[#F3F4F6] hover:text-[#1F6B47] dark:hover:text-[#34D399] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </SpotlightCard>
          </FadeIn>

          {/* PROJECT 06: WEAR CAVIRO E-COMMERCE */}
          <FadeIn direction="up" delay={0.1}>
            <SpotlightCard className="p-8 sm:p-10 rounded-2xl border border-[#DDDED8] dark:border-[#20262B] bg-white dark:bg-[#121417] shadow-elevated flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#20262B]">
                  <span className="px-2 py-0.5 rounded bg-[#1F6B47]/10 dark:bg-[#34D399]/10 text-[#1F6B47] dark:text-[#34D399] font-bold">
                    PROJECT {p6.number}
                  </span>
                  <span className="text-[#636966] dark:text-[#9CA3AF] uppercase">{p6.category}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#121513] dark:text-[#F3F4F6] tracking-tight">
                    {p6.name}
                  </h3>
                  <p className="text-xs font-mono text-[#1F6B47] dark:text-[#34D399] mt-0.5 uppercase tracking-wider">
                    {p6.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#636966] dark:text-[#9CA3AF] leading-relaxed">
                  {p6.conciseDescription}
                </p>

                <div className="p-3.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#DDDED8] dark:border-[#20262B] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F6B47] dark:text-[#34D399] block font-semibold">
                    CONTRIBUTION
                  </span>
                  <p className="text-xs text-[#121513] dark:text-[#F3F4F6]">
                    {p6.actualContribution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p6.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F8F7F4] dark:bg-[#181C20] text-[#636966] dark:text-[#9CA3AF] border border-[#DDDED8] dark:border-[#20262B]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDDED8] dark:border-[#20262B] flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(p6)}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#121513] dark:text-[#F3F4F6] hover:text-[#1F6B47] dark:hover:text-[#34D399] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-3">
                  {p6.githubUrl && (
                    <a
                      href={p6.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-[#636966] dark:text-[#9CA3AF] hover:text-[#121513] dark:hover:text-[#F3F4F6] transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {p6.liveUrl && (
                    <a
                      href={p6.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#1F6B47] dark:text-[#34D399] hover:underline"
                      title="Live Deployment"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>

        </div>

      </div>

      {/* Detailed Case Study Modal with AnimatePresence */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
