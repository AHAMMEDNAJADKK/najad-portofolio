import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  const isFlagship = project.isFlagship;

  return (
    <div 
      className={`group relative rounded-2xl bg-[#121A16] border transition-all duration-300 flex flex-col overflow-hidden ${
        isFlagship 
          ? 'border-[#24D18A]/50 hover:border-[#24D18A] shadow-glow-sm' 
          : 'border-[#25342D] hover:border-[#31443B]'
      }`}
    >
      {/* Visual Header / Screenshot Banner */}
      <div className="relative h-48 sm:h-56 w-full bg-[#101613] overflow-hidden border-b border-[#25342D]">
        {project.image ? (
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // fallback to backup image or placeholder
              if (project.backupImage && e.target.src !== project.backupImage) {
                e.target.src = project.backupImage;
              }
            }}
          />
        ) : (
          /* Premium Architectural Technical Graphic */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#121A16] via-[#101613] to-[#080B0A] relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#24D18A_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#24D18A] bg-[#080B0A]/80 px-2.5 py-1 rounded-md border border-[#25342D]">
                {project.category}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#121A16] border border-[#25342D] flex items-center justify-center text-[#24D18A]">
                <Database className="w-4 h-4" />
              </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-lg font-bold text-[#F5F7F6] group-hover:text-[#24D18A] transition-colors line-clamp-1">
                {project.shortTitle}
              </h4>
              <p className="text-xs text-[#A4AEA8] mt-1 line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-[#A4AEA8]">
              <span className="flex items-center gap-1 text-[#24D18A]">
                <ShieldCheck className="w-3 h-3" />
                {project.ownership}
              </span>
            </div>
          </div>
        )}

        {/* Flagship Badge Overlay */}
        {isFlagship && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#24D18A] text-[#080B0A] shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#080B0A] animate-ping"></span>
              {project.badge}
            </span>
          </div>
        )}

        {/* Completion status pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-mono bg-[#080B0A]/80 backdrop-blur-sm text-[#A4AEA8] px-2 py-0.5 rounded border border-[#25342D]">
            {project.completionStatus}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Title */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#24D18A]">
              {project.category}
            </span>
            <span className="text-xs text-[#25342D]">&bull;</span>
            <span className="text-[11px] text-[#A4AEA8]">
              {project.ownership}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F7F6] group-hover:text-[#24D18A] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#A4AEA8] line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Key Feature highlights */}
          <div className="mt-4 pt-4 border-t border-[#25342D]/60 space-y-1.5">
            {project.importantFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F7F6]/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#24D18A] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span 
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#101613] text-[#A4AEA8] border border-[#25342D]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#101613] text-[#A4AEA8]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Footers */}
        <div className="mt-6 pt-4 border-t border-[#25342D] flex items-center justify-between gap-2">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#24D18A] hover:text-[#42E39F] transition-colors group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#101613] border border-[#25342D] text-[#A4AEA8] hover:text-[#F5F7F6] hover:border-[#24D18A] transition-colors"
                title="View GitHub Repository"
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#101613] border border-[#25342D] text-[#24D18A] hover:bg-[#24D18A] hover:text-[#080B0A] transition-colors"
                title="View Live Website"
                aria-label={`${project.title} Live Demo`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
