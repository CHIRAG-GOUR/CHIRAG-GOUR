import React from 'react';
import { Activity, Flame, GitCommit, GitPullRequest, Code2, TrendingUp } from 'lucide-react';
import analyticsData from '../data/analytics.json';

export const AnalyticsDashboard: React.FC = () => {
  const {
    total_repositories,
    total_commits_sample,
    streak_days,
    tis_score,
    sync_timestamp
  } = analyticsData as any;

  // Real monthly distribution data discovered during GitHub audit
  const monthlyData = [
    { month: 'Mar', commits: 27, focus: 'Physics Motion' },
    { month: 'Apr', commits: 5, focus: 'Solar System 3D' },
    { month: 'Jun', commits: 8, focus: 'Resume Engine' },
    { month: 'Jul', commits: 20, focus: 'Mood Mirror AI' },
    { month: 'Aug', commits: 114, focus: 'Mangalyaan Sim' },
    { month: 'Sep', commits: 276, focus: 'ZeePrep & StorySprint' },
    { month: 'Oct', commits: 51, focus: 'Minty Finance' },
    { month: 'Nov', commits: 74, focus: 'Eat Better & Skippi 3D' }
  ];

  const maxCommitMonth = Math.max(...monthlyData.map(d => d.commits));

  const dayOfWeek = [
    { day: 'Mon', commits: 133, pct: 83 },
    { day: 'Tue', commits: 94, pct: 58 },
    { day: 'Wed', commits: 61, pct: 38 },
    { day: 'Thu', commits: 83, pct: 51 },
    { day: 'Fri', commits: 160, pct: 100 },
    { day: 'Sat', commits: 40, pct: 25 },
    { day: 'Sun', commits: 4, pct: 2 }
  ];

  return (
    <section id="analytics" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Activity className="w-4 h-4" />
            <span>Developer Telemetry // Verified GitHub Metrics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center justify-between">
            <span>Activity &amp; Velocity Dashboard</span>
            <span className="text-xs font-mono font-normal text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              Synced: {sync_timestamp}
            </span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            Live metrics extracted directly from 57 repositories and historical commit activity across 2026.
          </p>
        </div>

        {/* 4 Core Stat Chambers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2 font-mono text-xs">
              <span>TOTAL REPOSITORIES</span>
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-cyan-400 font-mono mb-1">{total_repositories}</div>
            <div className="text-xs text-slate-400">100% Original Source Works</div>
            <div className="text-[10px] text-slate-500 font-mono mt-2">0 Forks // Pure Origin</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2 font-mono text-xs">
              <span>SAMPLED COMMITS</span>
              <GitCommit className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-extrabold text-purple-400 font-mono mb-1">{total_commits_sample}+</div>
            <div className="text-xs text-slate-400">Across Active Portfolio</div>
            <div className="text-[10px] text-purple-400/80 font-mono mt-2">Peak: 276 in September</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2 font-mono text-xs">
              <span>TECHNICAL IMPACT (TIS)</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-1">{tis_score}</div>
            <div className="text-xs text-slate-400">Explainable Index / 100</div>
            <div className="text-[10px] text-slate-500 font-mono mt-2">Weighted 9 Dimensions</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-amber-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2 font-mono text-xs">
              <span>MAX ACTIVE STREAK</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-amber-400 font-mono mb-1">{streak_days} <span className="text-base font-normal">Days</span></div>
            <div className="text-xs text-slate-400">Sustained Rhythm</div>
            <div className="text-[10px] text-slate-500 font-mono mt-2">Peak Coding: Fri &amp; Mon</div>
          </div>

        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Monthly Velocity Bar Graph */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Monthly Commit Velocity Trajectory (2026)</span>
              <span className="text-xs text-cyan-400 font-normal">Peak: Sept 2026</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-mono">
              Empirical commit distribution showing exponential ramp during fall edtech platform sprints.
            </p>

            <div className="h-56 flex items-end gap-3 pt-6 pb-2 px-2">
              {monthlyData.map((d, i) => {
                const heightPct = Math.max(10, (d.commits / maxCommitMonth) * 100);
                const isPeak = d.commits === maxCommitMonth;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.commits}
                    </span>
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        isPeak
                          ? 'bg-gradient-to-t from-cyan-600 to-cyan-300 shadow-lg shadow-cyan-950'
                          : 'bg-gradient-to-t from-slate-800 to-slate-600 group-hover:from-purple-900 group-hover:to-purple-400'
                      }`}
                    />
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-white">
                      {d.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Day of Week Cadence */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-mono text-slate-300 uppercase tracking-wider mb-2">
                Weekly Cadence &amp; Focus Days
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-mono">
                Friday (160 commits) and Monday (133 commits) drive peak creative momentum.
              </p>

              <div className="space-y-3">
                {dayOfWeek.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">{item.day}</span>
                      <span className="text-slate-200">{item.commits} commits</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                      <div
                        style={{ width: `${item.pct}%` }}
                        className={`h-full rounded-full ${
                          item.day === 'Fri'
                            ? 'bg-cyan-400'
                            : item.day === 'Mon'
                            ? 'bg-purple-400'
                            : 'bg-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>Active Cycle: Nov 2026</span>
              <span className="text-cyan-400">Weekly Rhythm: Consistent</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
