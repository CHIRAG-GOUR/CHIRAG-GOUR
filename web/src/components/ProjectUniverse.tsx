import React, { useState } from 'react';
import { ExternalLink, Github, Search, Layers, Sparkles } from 'lucide-react';
import reposData from '../data/repositories.json';

interface Project {
  name: string;
  title: string;
  category: string;
  description: string;
  html_url: string;
  live_url: string | null;
  language: string;
  key_tech: string[];
  stars: number;
  stage_badge: string;
  featured: boolean;
  complexity_tier: string;
}

export const ProjectUniverse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects: Project[] = (reposData as any).all_projects || [];

  const categories = [
    'All',
    'Featured',
    'EdTech & Serious Games',
    'Creative 3D & Simulation',
    'Modern Reactive Web',
    'Mobile Architecture'
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat =
      selectedCategory === 'All'
        ? true
        : selectedCategory === 'Featured'
        ? p.featured
        : p.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.key_tech.some((t) => t.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 bg-obsidian-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Layers className="w-4 h-4" />
              <span>Project Constellation // 57 Original Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              The Project Universe
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              Spatial interactive simulations, serious educational games, and reactive full-stack web and mobile applications—100% verified source creations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search tech, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-950'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => {
            const is3D = proj.category.includes('3D') || proj.name.toLowerCase().includes('skippi') || proj.name.toLowerCase().includes('solar');
            const isEdTech = proj.category.includes('EdTech') || proj.name.toLowerCase().includes('poa');
            const isMobile = proj.category.includes('Mobile') || proj.name.toLowerCase().includes('zeeprep');

            const glowClass = is3D ? 'hover:border-cyan-500/40' : isEdTech ? 'hover:border-purple-500/40' : 'hover:border-emerald-500/40';

            return (
              <div
                key={idx}
                className={`glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800/80 ${glowClass} transition-all duration-300 group`}
              >
                <div>
                  {/* Top Bar with Stage Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                      {proj.stage_badge}
                    </span>
                    {proj.featured && (
                      <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mb-3">
                    {proj.name}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Key Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.key_tech.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={proj.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>

                    {proj.live_url && (
                      <a
                        href={proj.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/60 px-2 py-1 rounded border border-cyan-800/40"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
