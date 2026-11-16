import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCosmos3D } from './components/HeroCosmos3D';
import { MiniGame } from './components/MiniGame';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ProjectUniverse } from './components/ProjectUniverse';
import { CommitScorerView } from './components/CommitScorerView';
import { TimelineJourney } from './components/TimelineJourney';
import { Terminal, ArrowRight, Github, Sparkles, Gamepad2 } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700 relative">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        
        {/* Interactive 3D Background */}
        <HeroCosmos3D />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AUTONOMOUS ECOSYSTEM // CONTINUOUSLY SYNCHRONIZED</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            <span className="block">CHIRAG GOUR</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-3xl sm:text-4xl lg:text-5xl font-mono">
              Creative Computing &amp; Pedagogical Systems
            </span>
          </h1>

          {/* MARIO ANIMATION BANNER */}
          <div className="max-w-2xl mx-auto pt-2 pb-2">
            <div className="relative group overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xl bg-white">
              <img
                src="/Mario.gif"
                alt="Mario Adventure // Chirag Gour"
                className="w-full h-auto object-cover max-h-72 transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-2 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-700 font-bold border border-slate-200 shadow-sm">
                🎮 Jump Into Code
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Architecting spatial 3D web environments, interactive educational simulations (POA Series), and reactive full-stack web &amp; mobile platforms.
          </p>

          {/* Quick Pillars */}
          <div className="pt-2 flex flex-wrap justify-center gap-2.5 text-xs font-mono font-semibold">
            <span className="px-3 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-700">
              Three.js &amp; GLSL Shaders
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">
              Shark Tank 3D Simulations
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700">
              Next.js Turbopack &amp; Vite
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
              Expo Native Mobile
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#game"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Play Commit Runner</span>
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
            >
              <span>Explore 57 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#commit-intelligence"
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
            >
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Commit Intelligence</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Playable Mini Game */}
        <MiniGame />
        {/* Analytics Dashboard */}
        <AnalyticsDashboard />
        {/* Project Universe */}
        <ProjectUniverse />
        {/* Commit Scorer Simulator */}
        <CommitScorerView />
        {/* Chronological Timeline */}
        <TimelineJourney />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Autonomous Developer Ecosystem v2.5.0 // GitHub Actions Verified</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/CHIRAG-GOUR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 font-semibold"
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
