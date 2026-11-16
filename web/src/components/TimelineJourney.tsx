import React from 'react';
import { Compass, CheckCircle2, Rocket, Stars, Orbit, Laptop } from 'lucide-react';

export const TimelineJourney: React.FC = () => {
  const milestones = [
    {
      period: 'March 2026',
      title: 'Kinematic Foundations & Physics Motion',
      tech: 'React, Three.js, Canvas',
      desc: 'Engineered interactive physics coursework (`physics-motion` & `physicsmotion2`) utilizing 3D coordinate spaces and kinematic simulation.',
      icon: Orbit,
      badge: 'Foundation'
    },
    {
      period: 'April – May 2026',
      title: 'Procedural GLSL Shaders & Spatial Audio',
      tech: 'Three.js, Custom Shaders, GSAP, Leva',
      desc: 'Built Solaris 3D (`SolarSystem3js`) and Milkyway galaxy simulations featuring procedural GLSL noise shaders, post-processing bloom, and synchronized spatial audio loops.',
      icon: Stars,
      badge: 'Shader Engineering'
    },
    {
      period: 'July 2026',
      title: 'Edge Computer Vision & Mood Detection',
      tech: '@vladmandic/face-api, React, Vite, Oxlint',
      desc: 'Implemented browser-based neural network facial landmark detection and emotional state estimation (`Mood-Mirror-2026`) operating with zero server roundtrips.',
      icon: Laptop,
      badge: 'Edge AI'
    },
    {
      period: 'August 2026',
      title: 'Celestial Launch — Mangalyaan ISRO Mission',
      tech: 'React, Three.js, Radix UI, PBR Materials',
      desc: 'Constructed nocturnal aerospace launch simulator featuring PBR lighting, atmospheric particle smoke, and real-time telemetry towers celebrating Indian space exploration.',
      icon: Rocket,
      badge: 'Spatial Sim'
    },
    {
      period: 'September 2026',
      title: 'Peak Velocity Month — ZeePrep & POA Sprints',
      tech: 'React Native, Expo Router, Firebase, TanStack Query',
      desc: 'Delivered 276 commits in 30 days. Architected ZeePrep mobile client with audio/video assessments, and built collaborative digital classroom platforms like StorySprint.',
      icon: CheckCircle2,
      badge: '276 Commits Peak'
    },
    {
      period: 'November 2026 (Active)',
      title: 'POA Skippi Island & Eat Better Production',
      tech: 'Next.js Turbopack, R3F, Zustand, jsPDF, Firebase',
      desc: 'Launched Skippi Island 3D Shark Tank case study simulation live on Firebase (`poa-skippi.web.app`) and actively building the Eat Better Next.js spatial internship portal.',
      icon: Compass,
      badge: 'Active Production'
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4" />
            <span>Evolutionary Journey // Chronological Milestones</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Engineering Trajectory (2026)
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            A chronological timeline of actual engineering milestones, new framework adoptions, and project breakthroughs.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            const isLatest = idx === milestones.length - 1;

            return (
              <div key={idx} className="relative group">
                
                {/* Node Dot */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                    isLatest
                      ? 'bg-cyan-500 border-cyan-300 text-obsidian-950 shadow-md shadow-cyan-500/50'
                      : 'bg-obsidian-900 border-slate-700 text-slate-400 group-hover:border-cyan-400 group-hover:text-cyan-300'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                </div>

                {/* Content Card */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 mb-2">
                    Stack: {item.tech}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
