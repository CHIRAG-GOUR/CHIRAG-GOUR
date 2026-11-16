import React from 'react';
import { Github, Sparkles, Gamepad2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-blue-500/20">
            CG
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span>CHIRAG GOUR</span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                ● AUTONOMOUS
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              Creative Computing &amp; Pedagogical Systems
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-600 font-semibold">
          <a href="#game" className="hover:text-blue-600 transition-colors flex items-center gap-1 text-blue-600">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Mini-Game</span>
          </a>
          <a href="#analytics" className="hover:text-blue-600 transition-colors">
            Activity
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects (57)
          </a>
          <a href="#commit-intelligence" className="hover:text-blue-600 transition-colors">
            Commit Intelligence
          </a>
          <a href="#timeline" className="hover:text-blue-600 transition-colors">
            Timeline
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/CHIRAG-GOUR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-blue-500 text-xs font-mono text-slate-700 hover:text-blue-600 transition-all shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

      </div>
    </header>
  );
};
