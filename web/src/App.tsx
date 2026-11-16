import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCosmos3D } from './components/HeroCosmos3D';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ProjectUniverse } from './components/ProjectUniverse';
import { CommitScorerView } from './components/CommitScorerView';
import { TimelineJourney } from './components/TimelineJourney';
import { Terminal, Shield, Sparkles, ExternalLink, ArrowRight, Github } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        
        {/* Interactive 3D Background */}
        <HeroCosmos3D />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-950">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AUTONOMOUS ECOSYSTEM // CONTINUOUSLY SYNCHRONIZED</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            <span className="block">CHIRAG GOUR</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400 text-3xl sm:text-4xl lg:text-5xl font-mono">
              Creative Computing &amp; Pedagogical Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Architecting spatial 3D web environments, interactive educational simulations (POA Series), and reactive full-stack web &amp; mobile platforms.
          </p>

          {/* Quick Pillars */}
          <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
              Three.js &amp; GLSL Shaders
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300">
              Shark Tank 3D Simulations
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300">
              Next.js Turbopack &amp; Vite
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-300">
              Expo Native Mobile
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-obsidian-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <span>Explore 57 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#commit-intelligence"
              className="px-6 py-3 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Commit Intelligence Feed</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1">
        <AnalyticsDashboard />
        <ProjectUniverse />
        <CommitScorerView />
        <TimelineJourney />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-obsidian-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Autonomous Developer Ecosystem v2.4.0 // GitHub Actions Verified</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/CHIRAG-GOUR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/CHIRAG-GOUR</span>
            </a>
            <span>Zero Credential Exposure Guarantee</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
