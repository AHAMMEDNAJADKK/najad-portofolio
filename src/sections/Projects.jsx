import React, { useState } from 'react';
import { selectedProjects } from '../data/projects';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { ArrowRight, ArrowUpRight, Database, Layers, ShieldCheck, Terminal, FileCode2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const p1 = selectedProjects[0]; // LastKey
  const p2 = selectedProjects[1]; // Drive Line
  const p3 = selectedProjects[2]; // Razain-Benz
  const p4 = selectedProjects[3]; // IT Consultant
  const p5 = selectedProjects[4]; // Kod Brand
  const p6 = selectedProjects[5]; // Wear Caviro

  return (
    <section id="projects" className="py-24 sm:py-32 lg:py-36 border-b border-[#DDDED8] dark:border-[#30362F]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Small Label Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#70736D] dark:text-[#A0A49D] mb-12 sm:mb-16">
          <span>04 / SELECTED WORK</span>
          <span className="w-8 h-[1px] bg-[#DDDED8] dark:bg-[#30362F]"></span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171916] dark:text-[#F2F2EC]">
            Selected Engineering Work
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
            A curated portfolio of verified production systems, multi-branch CRMs, and full-stack web applications.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 01: LASTKEY — FULL-WIDTH PRIMARY FEATURE         */}
        {/* ======================================================== */}
        <div className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#30362F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Project Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p1.number}</span>
                <span className="text-[#DDDED8] dark:text-[#30362F]">/</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase tracking-wider">{p1.category}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p1.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-1 uppercase tracking-wider">
                  {p1.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p1.conciseDescription}
              </p>

              {/* My Actual Contribution */}
              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  TECHNICAL OWNERSHIP & CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC] leading-relaxed">
                  {p1.actualContribution}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  STACK DEPLOYED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {p1.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-white dark:bg-[#191D19] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-5">
                <button
                  onClick={() => setActiveProject(p1)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {p1.githubUrl && (
                  <a
                    href={p1.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>

            </div>

            {/* Large Actual Screenshot Frame (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] p-2 shadow-sm">
                
                {/* Browser Metadata Header */}
                <div className="px-4 py-2 bg-[#F5F4F0] dark:bg-[#111311] border-b border-[#DDDED8] dark:border-[#30362F] flex items-center justify-between text-[11px] font-mono text-[#70736D] dark:text-[#A0A49D]">
                  <span>LASTKEY / ASSET VAULT</span>
                  <span>ACTUAL INTERFACE SCREENSHOT</span>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE8E3] dark:bg-[#161A16]">
                  <img
                    src={p1.image}
                    alt="LastKey Digital Will application screenshot"
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* ======================================================== */}
        {/* PROJECT 02: DRIVE LINE (Image/Schematic Left, Content Right) */}
        {/* ======================================================== */}
        <div className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#30362F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Architecture Representation (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#30362F] text-[#70736D] dark:text-[#A0A49D]">
                  <span>ARCHITECTURAL SCHEMATIC</span>
                  <span>MULTI-BRANCH CRM</span>
                </div>
                
                {/* System Mapping Preview */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[#315C45] dark:text-[#83A88B] block font-semibold mb-1">01 / INCOMING INQUIRY</span>
                    <p className="text-[#70736D] dark:text-[#A0A49D] text-[11px]">Customer Inquiry &rarr; Vehicle Make/Model/Year &rarr; Spare-Part Code</p>
                  </div>
                  <div className="p-3 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[#315C45] dark:text-[#83A88B] block font-semibold mb-1">02 / BRANCH DATA SCOPING</span>
                    <p className="text-[#70736D] dark:text-[#A0A49D] text-[11px]">Branch Manager Data Scoping &rarr; Cross-Branch Super Admin Aggregation</p>
                  </div>
                  <div className="p-3 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[#315C45] dark:text-[#83A88B] block font-semibold mb-1">03 / SUPPLIER FULFILLMENT</span>
                    <p className="text-[#70736D] dark:text-[#A0A49D] text-[11px]">Supplier Catalog Match &rarr; Procurement Quotation &rarr; Closed Deal</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D]">
                  <span>MODELS: Customer, Lead, Supplier, VehicleSpecialization</span>
                  <span>KOD BRAND CLIENT ERP</span>
                </div>
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p2.number}</span>
                <span className="text-[#DDDED8] dark:text-[#30362F]">/</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase tracking-wider">{p2.category}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p2.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-1 uppercase tracking-wider">
                  {p2.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p2.conciseDescription}
              </p>

              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  TECHNICAL OWNERSHIP & CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC] leading-relaxed">
                  {p2.actualContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p2.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-white dark:bg-[#191D19] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveProject(p2)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* ======================================================== */}
        {/* PROJECT 03: RAZAIN-BENZ (Content Left, Visual/Branded Right) */}
        {/* ======================================================== */}
        <div className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#30362F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p3.number}</span>
                <span className="text-[#DDDED8] dark:text-[#30362F]">/</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase tracking-wider">{p3.category}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p3.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-1 uppercase tracking-wider">
                  {p3.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p3.conciseDescription}
              </p>

              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  TECHNICAL OWNERSHIP & CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC] leading-relaxed">
                  {p3.actualContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p3.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-white dark:bg-[#191D19] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveProject(p3)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Financial Ledger & Logo Wireframe (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#30362F] text-[#70736D] dark:text-[#A0A49D]">
                  <span>FINANCIAL LEDGER & SEQUENTIAL IDs</span>
                  <span>ATOMIC COUNTER SYSTEM</span>
                </div>

                <div className="p-4 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D] block">OFFICIAL RECEIPT GENERATION</span>
                    <span className="text-sm font-mono font-bold text-[#171916] dark:text-[#F2F2EC]">REC-2026-0842</span>
                  </div>
                  <span className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] border border-[#315C45]/30 dark:border-[#83A88B]/30 px-2.5 py-1 rounded">
                    ZERO-GAP SEQUENTIAL
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#70736D] dark:text-[#A0A49D] block">MD DASHBOARD</span>
                    <span className="text-xs font-bold text-[#171916] dark:text-[#F2F2EC]">Real-Time Collections</span>
                  </div>
                  <div className="p-3 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#70736D] dark:text-[#A0A49D] block">EOD CASH DRAWER</span>
                    <span className="text-xs font-bold text-[#171916] dark:text-[#F2F2EC]">Cash vs Digital Reconciliation</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D] flex items-center justify-between">
                  <span>PRINTABLE PDF WITH BENZ EMBLEM</span>
                  <span>/student-ledger &bull; /daily-collection</span>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* ======================================================== */}
        {/* PROJECT 04: IT CONSULTANT (12-Module ERP Platform)       */}
        {/* ======================================================== */}
        <div className="mb-24 sm:mb-32 pb-20 border-b border-[#DDDED8] dark:border-[#30362F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Workflow (7 cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#30362F] text-[#70736D] dark:text-[#A0A49D]">
                  <span>NEXORA IT SUITE &bull; 12-MODULE LIFECYCLE</span>
                  <span>AGILE & SLA AUTOMATION</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 01-03</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">Leads & Clients</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 04-06</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">Projects & Sprints</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 07-09</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">Git & Timesheets</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 10</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">Invoices & Finance</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 11</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">Support Desk</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F]">
                    <span className="text-[10px] text-[#315C45] dark:text-[#83A88B] block">MOD 12</span>
                    <span className="text-[11px] font-semibold text-[#171916] dark:text-[#F2F2EC]">SLA Contracts</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#70736D] dark:text-[#A0A49D] flex items-center justify-between">
                  <span>GIT WEBHOOK HMAC-SHA256 SIGNATURE VERIFICATION</span>
                  <span>KANBAN DND</span>
                </div>
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p4.number}</span>
                <span className="text-[#DDDED8] dark:text-[#30362F]">/</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase tracking-wider">{p4.category}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p4.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-1 uppercase tracking-wider">
                  {p4.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p4.conciseDescription}
              </p>

              <div className="p-4 rounded bg-white dark:bg-[#191D19] border border-[#DDDED8] dark:border-[#30362F] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  TECHNICAL OWNERSHIP & CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC] leading-relaxed">
                  {p4.actualContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p4.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-white dark:bg-[#191D19] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveProject(p4)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#171916] text-[#F5F4F0] dark:bg-[#F2F2EC] dark:text-[#111311] text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* ======================================================== */}
        {/* COMPACT DUO: PROJECT 05 (KOD BRAND) & PROJECT 06 (WEAR CAVIRO) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* PROJECT 05: KOD BRAND CRM */}
          <div className="p-8 sm:p-10 rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#30362F]">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p5.number}</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase">{p5.category}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p5.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-0.5 uppercase tracking-wider">
                  {p5.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p5.conciseDescription}
              </p>

              <div className="p-3.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC]">
                  {p5.actualContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p5.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F5F4F0] dark:bg-[#111311] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDDED8] dark:border-[#30362F]">
              <button
                onClick={() => setActiveProject(p5)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#171916] dark:text-[#F2F2EC] hover:text-[#315C45] dark:hover:text-[#83A88B] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PROJECT 06: WEAR CAVIRO E-COMMERCE */}
          <div className="p-8 sm:p-10 rounded border border-[#DDDED8] dark:border-[#30362F] bg-white dark:bg-[#191D19] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#DDDED8] dark:border-[#30362F]">
                <span className="text-[#315C45] dark:text-[#83A88B] font-bold">PROJECT {p6.number}</span>
                <span className="text-[#70736D] dark:text-[#A0A49D] uppercase">{p6.category}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#171916] dark:text-[#F2F2EC] tracking-tight">
                  {p6.name}
                </h3>
                <p className="text-xs font-mono text-[#315C45] dark:text-[#83A88B] mt-0.5 uppercase tracking-wider">
                  {p6.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#70736D] dark:text-[#A0A49D] leading-relaxed">
                {p6.conciseDescription}
              </p>

              <div className="p-3.5 rounded bg-[#F5F4F0] dark:bg-[#111311] border border-[#DDDED8] dark:border-[#30362F] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#70736D] dark:text-[#A0A49D] block">
                  CONTRIBUTION
                </span>
                <p className="text-xs text-[#171916] dark:text-[#F2F2EC]">
                  {p6.actualContribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p6.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F5F4F0] dark:bg-[#111311] text-[#70736D] dark:text-[#A0A49D] border border-[#DDDED8] dark:border-[#30362F]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDDED8] dark:border-[#30362F] flex items-center justify-between">
              <button
                onClick={() => setActiveProject(p6)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#171916] dark:text-[#F2F2EC] hover:text-[#315C45] dark:hover:text-[#83A88B] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                {p6.githubUrl && (
                  <a
                    href={p6.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#70736D] dark:text-[#A0A49D] hover:text-[#171916] dark:hover:text-[#F2F2EC] transition-colors p-1"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {p6.liveUrl && (
                  <a
                    href={p6.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#315C45] dark:text-[#83A88B] hover:underline"
                    title="Live Deployment"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Detailed Case Study Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
