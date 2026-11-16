import React, { useState } from 'react';
import { Sparkles, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import commitsData from '../data/commits_sample.json';

interface CommitItem {
  sha: string;
  title: string;
  project: string;
  date: string;
  change_type: string;
  technical_impact: string;
  testing_evidence: string;
  commit_score: number;
  reasoning: string;
}

export const CommitScorerView: React.FC = () => {
  const [testMessage, setTestMessage] = useState('feat(three): implement custom procedural GLSL noise shader for planetary terrain');
  const [testProject, setTestProject] = useState('POA-Skippi');

  const simulateScore = (msg: string, proj: string) => {
    const msgLower = msg.toLowerCase();
    const isMerge = msgLower.startsWith('merge');
    const isBot = msgLower.includes('bump') || msgLower.includes('dependabot');
    const isTrivial = msg.trim().split(' ').length <= 1 && msg.length < 8;

    let architectural = 0;
    let feature = 0;
    let complexity = 0;
    let refactoring = 0;
    let bugfix = 0;

    if (/(arch|structure|setup|turbopack|vite|provider|router|zustand|store)/.test(msgLower)) architectural = 8;
    if (/(feat|add|implement|create|build|integrate|screen|view)/.test(msgLower)) feature = 8.5;
    if (/(three|r3f|shader|glsl|pbr|theatre|groq|face-api|physics|motion|bvh|particle)/.test(msgLower)) complexity = 9.5;
    if (/(refactor|clean|simplify|decouple|optimize|perf)/.test(msgLower)) refactoring = 8.0;
    if (/(fix|patch|resolve|repair|guard|fallback)/.test(msgLower)) bugfix = 7.5;

    if (['skippi', 'mangalyan', 'solar', 'physics'].some(k => proj.toLowerCase().includes(k))) {
      complexity = Math.max(complexity, 7.5);
    }

    const raw = (architectural * 0.20 + feature * 0.20 + complexity * 0.15 + refactoring * 0.15 + bugfix * 0.10 + 0.5) * 10;
    let multiplier = 1.0;
    let rationale = 'Evaluated on structural impact, creative computing components, and domain depth.';

    if (isMerge) {
      multiplier = 0.25;
      rationale = 'Adjusted for branch coordination merge commit baseline.';
    } else if (isBot) {
      multiplier = 0.20;
      rationale = 'Automated dependency upgrade adjustment.';
    } else if (isTrivial) {
      multiplier = 0.30;
      rationale = 'Minimal message payload signals low documented verification.';
    } else if (complexity >= 8) {
      rationale = 'High rating: contains intensive spatial rendering, shader calculations, or ML inference logic.';
    }

    const finalScore = Math.min(99.5, Math.max(15.0, raw * multiplier));
    return {
      score: finalScore.toFixed(1),
      impact: finalScore > 85 ? 'High' : finalScore > 65 ? 'Medium-High' : 'Standard',
      rationale
    };
  };

  const simResult = simulateScore(testMessage, testProject);

  return (
    <section id="commit-intelligence" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
            <Cpu className="w-4 h-4" />
            <span>Analytical Engine // Explainable Metrics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Commit Intelligence &amp; Scoring System
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-3xl">
            A transparent 9-dimension scoring methodology that evaluates engineering significance, architectural impact, and refactoring clarity—rejecting lines-of-code vanity metrics and gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Scored Commits Feed */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-600 font-bold flex items-center justify-between">
              <span>Verified Commit Feed (Latest Evaluated)</span>
              <span className="text-blue-600 text-xs font-semibold">{(commitsData as CommitItem[]).length} Sampled Commits</span>
            </h3>

            <div className="space-y-3">
              {(commitsData as CommitItem[]).slice(0, 6).map((commit, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        TIS: {commit.commit_score}
                      </span>
                      <span className="text-xs font-mono text-slate-700 font-semibold">{commit.project}</span>
                      <span className="text-xs text-slate-400 font-mono">[{commit.sha}]</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {commit.date ? commit.date.slice(0, 10) : 'Recent'}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    {commit.title}
                  </p>

                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 font-mono">Rationale:</strong> {commit.reasoning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Commit Simulator & Explanation Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Simulator */}
            <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-mono uppercase tracking-wider mb-3 font-bold">
                <Terminal className="w-4 h-4" />
                <span>Live TIS Impact Simulator</span>
              </div>
              
              <p className="text-xs text-slate-600 mb-4">
                Test any commit message against Chirag's explainable 9-dimension scoring engine to see calculated TIS and rationale in real time.
              </p>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Target Repository Context</label>
                  <select 
                    value={testProject} 
                    onChange={(e) => setTestProject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="POA-Skippi">POA-Skippi (3D Shark Tank)</option>
                    <option value="Eat-Better-Internship">Eat-Better-Internship (Next.js Turbopack)</option>
                    <option value="ZeePrep-MobileApp">ZeePrep-MobileApp (React Native Expo)</option>
                    <option value="Olympiad-Activities">Olympiad-Activities (Digital Exam)</option>
                    <option value="Mangalyan-India">Mangalyan-India (Aerospace Sim)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Commit Message</label>
                  <textarea
                    rows={3}
                    value={testMessage}
                    onChange={(e) => setTestMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-mono text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Calculated Result Box */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-600 uppercase font-semibold">Simulated TIS Score</span>
                  <span className="text-2xl font-bold font-mono text-blue-700">{simResult.score} <span className="text-xs font-normal text-slate-500">/ 100</span></span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] uppercase font-bold border border-blue-200">
                    Impact: {simResult.impact}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-mono leading-relaxed bg-white p-2.5 rounded-lg border border-blue-100">
                  {simResult.rationale}
                </p>
              </div>
            </div>

            {/* Anti-Gaming Rules Chamber */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Anti-Gaming &amp; Anti-Vanity Safeguards</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                <li><strong className="text-slate-800">No Raw LOC Bias:</strong> Large copy-pasted diffs are attenuated via logarithmic scaling.</li>
                <li><strong className="text-slate-800">Clean Refactor Bonus:</strong> Net deletions with maintained behavior receive a 1.15× quality multiplier.</li>
                <li><strong className="text-slate-800">Bot Mitigation:</strong> Automated package version bumps and trivial merges are automatically filtered.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
