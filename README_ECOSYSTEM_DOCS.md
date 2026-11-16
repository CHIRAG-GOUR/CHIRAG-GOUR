# Chirag Gour Developer Ecosystem — System Manual & Deployment Guide

Welcome to the **Self-Evolving Autonomous Developer Ecosystem** engineered for **Chirag Gour (`CHIRAG-GOUR`)**.

---

## 1. Architectural Overview

```
CHIRAG-GOUR ECOSYSTEM
├── .github/workflows/
│   ├── sync-ecosystem.yml       # Daily & On-Push auto-sync pipeline
│   └── monthly-growth.yml       # 1st-of-month rollup & historical snapshotting
├── assets/generated/            # High-resolution obsidian SVGs rendered dynamically
│   ├── identity-header.svg      # Holographic neon obsidian developer badge
│   ├── metrics-dashboard.svg    # Commit velocity, streaks, active days, scoring radar
│   ├── tech-constellation.svg   # 4 core technology quadrants
│   ├── featured-projects.svg    # Highlight cards for Skippi, Eat Better, ZeePrep, Celestial Launch
│   ├── commit-intelligence.svg  # 9-dimension explainable scoring feed
│   └── development-journey.svg  # Chronological evolution timeline (2025 - Nov 2026)
├── data/
│   ├── current/                 # Latest extracted telemetry & project profiles
│   │   ├── profile.json
│   │   ├── repositories.json
│   │   ├── commits_sample.json
│   │   └── analytics.json
│   └── snapshots/               # Multi-week historical learning snapshots (YYYY-wWW.json)
├── engine/                      # Python 3.12 Analytics & Scoring Engine
│   ├── github_client.py         # Resilient GitHub API client (with local caching & rate-limit guards)
│   ├── repository_analyzer.py   # Stack discovery & lifecycle categorization
│   ├── commit_scorer.py         # 9-dimension explainable scoring algorithm
│   ├── historical_tracker.py    # Snapshot manager & week-over-week velocity calculator
│   ├── svg_generator.py         # Dark obsidian SVG vector engine
│   ├── readme_builder.py        # Assembles the production GitHub README.md
│   └── run_pipeline.py          # Master orchestrator
├── web/                         # Interactive Companion Portal (Vite + React + Three.js + Tailwind)
│   ├── src/
│   │   ├── components/HeroCosmos3D.tsx     # Interactive Three.js particle constellation
│   │   ├── components/AnalyticsDashboard.tsx
│   │   ├── components/ProjectUniverse.tsx  # Filterable 57-repo constellation
│   │   ├── components/CommitScorerView.tsx # Live interactive TIS simulator & feed
│   │   └── components/TimelineJourney.tsx
│   └── dist/                    # Compiled production build
└── README.md                    # Live GitHub Profile README for https://github.com/CHIRAG-GOUR
```

---

## 2. GitHub Profile Activation Guide

To display this README on your public GitHub profile (`https://github.com/CHIRAG-GOUR`):

1. **Create the Special Profile Repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Name the repository exactly **`CHIRAG-GOUR`** (matching your username).
   - Set visibility to **Public**.
   - Check **"Add a README file"** (or leave unchecked since we already have our production `README.md`).

2. **Push the Ecosystem:**
   ```bash
   cd C:\Users\HP\.gemini\antigravity\scratch\chirag-ecosystem
   git remote add origin https://github.com/CHIRAG-GOUR/CHIRAG-GOUR.git
   git branch -M main
   git push -u origin main
   ```

3. **Verify GitHub Actions Permissions:**
   - In your `CHIRAG-GOUR` repository on GitHub:
   - Navigate to **Settings** → **Actions** → **General** → **Workflow permissions**.
   - Select **"Read and write permissions"** and check **"Allow GitHub Actions to create and approve pull requests"**.
   - Click **Save**.

---

## 3. Automated Synchronization Engine

The ecosystem operates without manual data entry:

- **Trigger 1: Repository Pushes:** Whenever code is pushed to `main`, `sync-ecosystem.yml` evaluates new commits, recalculates the Technical Impact Score (TIS), updates historical snapshots, re-renders SVGs, and refreshes the README.
- **Trigger 2: Daily Cron (00:00 UTC):** Runs every midnight to verify streaks, detect any external repository updates, and refresh timestamps.
- **Trigger 3: Monthly Growth Rollup (1st of month):** Creates a permanent snapshot in `data/snapshots/` comparing monthly performance.
- **Trigger 4: Manual Trigger:** You can trigger synchronization anytime from the **Actions** tab on GitHub via `workflow_dispatch`.

---

## 4. Explainable Scoring Engine (TIS)

Unlike crude metrics that count raw commits or lines of code, the **Technical Impact Score (TIS)** evaluates commits across 9 transparent dimensions:

$$TIS = \min\left(100, \sum_{i=1}^{9} w_i \cdot s_i \cdot M_{\text{anti-gaming}}\right)$$

| Dimension | Weight | Target Signal |
| :--- | :---: | :--- |
| **Architectural Impact** | 0.20 | Modular scaffolds, routing, Turbopack, store setups |
| **Feature Delivery** | 0.20 | User-facing functionality and pedagogical mechanisms |
| **Complex 3D / AI Logic** | 0.15 | Custom GLSL shaders, R3F viewports, face-api neural nets |
| **Refactoring & Decoupling** | 0.15 | Simplification, clean abstraction, net deletions |
| **Stability & Bug Remediation**| 0.10 | Critical edge-case fixes, error boundaries, fallbacks |
| **API & Cloud Integration** | 0.08 | Firebase synchronization, Expo native modules, TanStack |
| **Validation & Testing** | 0.05 | Type safety invariants, Oxlint/ESLint rigor |
| **Documentation & Clarity** | 0.04 | Architectural documentation and setup guidelines |
| **Consistency Cadence** | 0.03 | Active streak contribution |

### Anti-Gaming Multipliers
- **Trivial Commits:** Single-word or uninformative messages are penalized ($0.3\times$).
- **Bot Updates:** Automated dependency bumps are adjusted ($0.2\times$).
- **Refactoring Bonus:** Purposeful cleanups with net deletions receive a $1.15\times$ quality bonus.

---

## 5. Running the Companion Web Experience

The companion web portal provides the interactive Three.js particle cosmos, real-time commit impact simulator, and filterable project galaxy:

```bash
cd web
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

To deploy the web app for free to **Vercel** or **GitHub Pages**:
- Simply connect the repository to Vercel and set Root Directory to `web`, or run `npm run build` and deploy the `web/dist` folder.
