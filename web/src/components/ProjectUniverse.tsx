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
    <section id="projects" className="py-16 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              <Layers className="w-4 h-4" />
              <span>Project Constellation // 57 Original Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              The Project Universe
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-2xl">
              Spatial interactive simulations, serious educational games, and reactive full-stack web and mobile applications—100% verified source creations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search tech, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
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
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl flex flex-col justify-between border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar with Stage Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      {proj.stage_badge}
                    </span>
                    {proj.featured && (
                      <span className="text-[10px] font-mono text-blue-600 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-2">
                    {proj.name}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Key Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.key_tech.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={proj.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-900 transition-colors font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>

                    {proj.live_url && (
                      <a
                        href={proj.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-bold"
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
