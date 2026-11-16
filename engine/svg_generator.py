"""
Dynamic SVG Card Generator — Modern Light Theme Edition
Renders clean, high-contrast, editorial light-themed SVG vector cards
specifically optimized for GitHub profile display with crisp typography,
soft porcelain surfaces, subtle glass borders, and vibrant accents.
"""

import os
from typing import Dict, Any, List

class SVGGenerator:
    def __init__(self, output_dir: str):
        self.output_dir = output_dir
        os.makedirs(self.output_dir, exist_ok=True)

    def _save(self, filename: str, content: str):
        path = os.path.join(self.output_dir, filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[SVG] Generated {filename}")

    def generate_identity_header(self, profile: Dict[str, Any], sync_time: str):
        # Light theme: Clean porcelain white card with deep royal blue gradient & fixed pill (no 'LIVE')
        svg = f"""<svg width="880" height="260" viewBox="0 0 880 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="light_bg" x1="0" y1="0" x2="880" y2="260" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
    <linearGradient id="light_border" x1="0" y1="0" x2="880" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#7C3AED" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="title_gradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="70%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <filter id="card_shadow" x="-4" y="-2" width="888" height="268" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.05"/>
    </filter>
  </defs>

  <!-- Base Card -->
  <rect x="2" y="2" width="876" height="256" rx="16" fill="url(#light_bg)" filter="url(#card_shadow)"/>
  <rect x="2" y="2" width="876" height="256" rx="16" stroke="url(#light_border)" stroke-width="1.5"/>

  <!-- Subtle Blueprint Tech Grid -->
  <g opacity="0.04" stroke="#0F172A" stroke-width="1">
    <line x1="40" y1="0" x2="40" y2="260"/>
    <line x1="220" y1="0" x2="220" y2="260"/>
    <line x1="440" y1="0" x2="440" y2="260"/>
    <line x1="660" y1="0" x2="660" y2="260"/>
    <line x1="840" y1="0" x2="840" y2="260"/>
    <line x1="0" y1="65" x2="880" y2="65"/>
    <line x1="0" y1="130" x2="880" y2="130"/>
    <line x1="0" y1="195" x2="880" y2="195"/>
  </g>

  <!-- Top Status Bar (FIXED: 'LIVE' removed, wider pill with generous margins) -->
  <rect x="40" y="24" width="200" height="26" rx="13" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1"/>
  <circle cx="56" cy="37" r="4.5" fill="#10B981">
    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="70" y="41" fill="#1E40AF" font-family="'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="700" letter-spacing="1">
    AUTONOMOUS ECOSYSTEM
  </text>

  <text x="840" y="41" text-anchor="end" fill="#64748B" font-family="'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="500">
    SYNCHRONIZED: {sync_time}
  </text>

  <!-- Name & Professional Title -->
  <text x="40" y="98" fill="url(#title_gradient)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">
    CHIRAG GOUR
  </text>

  <text x="40" y="128" fill="#2563EB" font-family="'JetBrains Mono', Consolas, monospace" font-size="13.5" font-weight="700" letter-spacing="1.5">
    CREATIVE COMPUTING &amp; PEDAGOGICAL SYSTEMS ARCHITECT
  </text>

  <!-- Core Summary -->
  <text x="40" y="160" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="500">
    Architecting spatial 3D web environments, interactive educational simulations, and production-grade reactive software.
  </text>
  <text x="40" y="180" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">
    Specialized in Three.js / R3F shaders, Next.js Turbopack systems, and serious gaming pedagogical frameworks.
  </text>

  <!-- Bottom Pills -->
  <g transform="translate(40, 206)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="135" height="28" rx="7" fill="#EFF6FF" stroke="#BFDBFE"/>
    <text x="67" y="18" text-anchor="middle" fill="#1D4ED8" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">SPATIAL 3D WEB</text>

    <!-- Pill 2 -->
    <rect x="145" y="0" width="165" height="28" rx="7" fill="#FAF5FF" stroke="#E9D5FF"/>
    <text x="227" y="18" text-anchor="middle" fill="#7C3AED" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">EDTECH SIMULATIONS</text>

    <!-- Pill 3 -->
    <rect x="320" y="0" width="155" height="28" rx="7" fill="#ECFDF5" stroke="#A7F3D0"/>
    <text x="397" y="18" text-anchor="middle" fill="#047857" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">REACT 19 / NEXT.JS</text>

    <!-- Pill 4 -->
    <rect x="485" y="0" width="160" height="28" rx="7" fill="#FFFBEB" stroke="#FDE68A"/>
    <text x="565" y="18" text-anchor="middle" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">EXPO NATIVE MOBILE</text>
  </g>
</svg>"""
        self._save("identity-header.svg", svg)

    def generate_metrics_dashboard(self, analytics: Dict[str, Any]):
        repos_count = analytics.get("total_repositories", 57)
        commits_sample = analytics.get("total_commits_sample", 575)
        streak_days = analytics.get("streak_days", 11)
        tis_score = analytics.get("tis_score", 88.4)

        svg = f"""<svg width="880" height="210" viewBox="0 0 880 210" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mbg" x1="0" y1="0" x2="880" y2="210" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <filter id="mshadow" x="-4" y="-2" width="888" height="218" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.04"/>
    </filter>
  </defs>

  <rect x="2" y="2" width="876" height="206" rx="16" fill="url(#mbg)" filter="url(#mshadow)"/>
  <rect x="2" y="2" width="876" height="206" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Chamber 1: Repositories -->
  <g transform="translate(30, 26)">
    <rect width="185" height="155" rx="12" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <text x="20" y="30" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">SOURCE REPOSITORIES</text>
    <text x="20" y="80" fill="#0284C7" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{repos_count}</text>
    <text x="20" y="112" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600">100% Original Works</text>
    <text x="20" y="132" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">0 Forks // Pure Origin</text>
  </g>

  <!-- Chamber 2: Analyzed Velocity -->
  <g transform="translate(235, 26)">
    <rect width="185" height="155" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <text x="20" y="30" fill="#7E22CE" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">ANALYZED COMMITS</text>
    <text x="20" y="80" fill="#9333EA" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{commits_sample}+</text>
    <text x="20" y="112" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600">Across Active Sample</text>
    <text x="20" y="132" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">Peak: 276 in Sept 2026</text>
  </g>

  <!-- Chamber 3: TIS Score -->
  <g transform="translate(440, 26)">
    <rect width="185" height="155" rx="12" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <text x="20" y="30" fill="#047857" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">TECHNICAL IMPACT (TIS)</text>
    <text x="20" y="80" fill="#059669" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{tis_score}</text>
    <text x="20" y="112" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600">Explainable Index / 100</text>
    <text x="20" y="132" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">9 Scoring Dimensions</text>
  </g>

  <!-- Chamber 4: Streak & Cadence -->
  <g transform="translate(645, 26)">
    <rect width="205" height="155" rx="12" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.2"/>
    <text x="20" y="30" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">MAX ACTIVE STREAK</text>
    <text x="20" y="80" fill="#D97706" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{streak_days} <tspan font-size="20">DAYS</tspan></text>
    <text x="20" y="112" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600">Sustained Rhythm</text>
    <text x="20" y="132" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">Fri &amp; Mon Peak Days</text>
  </g>
</svg>"""
        self._save("metrics-dashboard.svg", svg)

    def generate_tech_constellation(self):
        svg = """<svg width="880" height="340" viewBox="0 0 880 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tbg" x1="0" y1="0" x2="880" y2="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="336" rx="16" fill="url(#tbg)"/>
  <rect x="2" y="2" width="876" height="336" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="35" y="38" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="2">
    TECHNICAL ECOSYSTEM // VERIFIED PROFICIENCIES
  </text>

  <!-- Quadrant 1: Spatial & 3D Web -->
  <g transform="translate(35, 55)">
    <rect width="390" height="120" rx="12" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <text x="20" y="28" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">01 // CREATIVE 3D &amp; SHADERS</text>
    <text x="20" y="48" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Procedural rendering, timeline keyframing, and custom materials</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="70" height="24" rx="6" fill="#E0F2FE"/><text x="35" y="16" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Three.js</text>
      <rect x="76" y="0" width="55" height="24" rx="6" fill="#E0F2FE"/><text x="103" y="16" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">R3F</text>
      <rect x="137" y="0" width="85" height="24" rx="6" fill="#E0F2FE"/><text x="179" y="16" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Theatre.js</text>
      <rect x="228" y="0" width="55" height="24" rx="6" fill="#E0F2FE"/><text x="255" y="16" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">GSAP</text>
      <rect x="289" y="0" width="60" height="24" rx="6" fill="#E0F2FE"/><text x="319" y="16" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">GLSL</text>
    </g>
  </g>

  <!-- Quadrant 2: EdTech & Serious Games -->
  <g transform="translate(455, 55)">
    <rect width="390" height="120" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <text x="20" y="28" fill="#7E22CE" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">02 // EDTECH &amp; SERIOUS GAMES</text>
    <text x="20" y="48" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Plan of Activity (POA) frameworks, Shark Tank sims, exams</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="80" height="24" rx="6" fill="#F3E8FF"/><text x="40" y="16" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">POA Series</text>
      <rect x="86" y="0" width="85" height="24" rx="6" fill="#F3E8FF"/><text x="128" y="16" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Gamification</text>
      <rect x="177" y="0" width="70" height="24" rx="6" fill="#F3E8FF"/><text x="212" y="16" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Zustand</text>
      <rect x="253" y="0" width="65" height="24" rx="6" fill="#F3E8FF"/><text x="285" y="16" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Recharts</text>
    </g>
  </g>

  <!-- Quadrant 3: Reactive Web & Mobile -->
  <g transform="translate(35, 190)">
    <rect width="390" height="120" rx="12" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <text x="20" y="28" fill="#047857" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">03 // REACTIVE WEB &amp; MOBILE</text>
    <text x="20" y="48" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Modern Turbopack pipelines, Expo native routing, and cloud sync</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="65" height="24" rx="6" fill="#D1FAE5"/><text x="32" y="16" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Next.js</text>
      <rect x="71" y="0" width="85" height="24" rx="6" fill="#D1FAE5"/><text x="113" y="16" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Turbopack</text>
      <rect x="162" y="0" width="85" height="24" rx="6" fill="#D1FAE5"/><text x="204" y="16" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Expo Router</text>
      <rect x="253" y="0" width="68" height="24" rx="6" fill="#D1FAE5"/><text x="287" y="16" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Firebase</text>
    </g>
  </g>

  <!-- Quadrant 4: Vision & Applied AI -->
  <g transform="translate(455, 190)">
    <rect width="390" height="120" rx="12" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.2"/>
    <text x="20" y="28" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">04 // COMPUTER VISION &amp; FAST AI</text>
    <text x="20" y="48" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Edge face/emotion detection and ultra-low latency LPU reasoning</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="75" height="24" rx="6" fill="#FEF3C7"/><text x="37" y="16" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Face-API</text>
      <rect x="81" y="0" width="75" height="24" rx="6" fill="#FEF3C7"/><text x="118" y="16" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Groq SDK</text>
      <rect x="162" y="0" width="95" height="24" rx="6" fill="#FEF3C7"/><text x="209" y="16" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Edge Vision</text>
      <rect x="263" y="0" width="55" height="24" rx="6" fill="#FEF3C7"/><text x="290" y="16" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">jsPDF</text>
    </g>
  </g>
</svg>"""
        self._save("tech-constellation.svg", svg)

    def generate_featured_projects(self):
        svg = """<svg width="880" height="380" viewBox="0 0 880 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fp_bg" x1="0" y1="0" x2="880" y2="380" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="376" rx="16" fill="url(#fp_bg)"/>
  <rect x="2" y="2" width="876" height="376" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="35" y="38" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="2">
    PROJECT UNIVERSE // FEATURED BENCHMARKS
  </text>

  <!-- Project 1: POA Skippi -->
  <g transform="translate(35, 55)">
    <rect width="390" height="140" rx="12" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <text x="18" y="28" fill="#0369A1" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">POA-Skippi (Skippi Island)</text>
    <rect x="295" y="13" width="77" height="20" rx="4" fill="#0284C7" fill-opacity="0.15"/>
    <text x="333" y="27" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">LIVE DEMO</text>
    
    <text x="18" y="52" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">3D Shark Tank Case Study (Grades 4-9). Roo the kangaroo</text>
    <text x="18" y="68" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">navigates 13 pedagogical business milestones in real-time 3D.</text>
    <text x="18" y="88" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">poa-skippi.web.app</text>
    
    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="55" height="20" rx="4" fill="#E0F2FE"/><text x="27" y="14" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">React</text>
      <rect x="60" y="0" width="70" height="20" rx="4" fill="#E0F2FE"/><text x="95" y="14" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Three.js</text>
      <rect x="135" y="0" width="55" height="20" rx="4" fill="#E0F2FE"/><text x="162" y="14" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">R3F</text>
      <rect x="195" y="0" width="65" height="20" rx="4" fill="#E0F2FE"/><text x="227" y="14" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Zustand</text>
      <rect x="265" y="0" width="65" height="20" rx="4" fill="#E0F2FE"/><text x="297" y="14" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Recharts</text>
    </g>
  </g>

  <!-- Project 2: Eat Better Internship -->
  <g transform="translate(455, 55)">
    <rect width="390" height="140" rx="12" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <text x="18" y="28" fill="#047857" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">Eat-Better-Internship</text>
    <rect x="290" y="13" width="82" height="20" rx="4" fill="#059669" fill-opacity="0.15"/>
    <text x="331" y="27" text-anchor="middle" fill="#047857" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">ACTIVE NOW</text>

    <text x="18" y="52" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Spatial internship platform integrating 3D canvas viewports,</text>
    <text x="18" y="68" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">GSAP micro-choreography, and dynamic PDF reporting.</text>
    <text x="18" y="88" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">Pushed Nov 16, 2026 // Latest Production</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="60" height="20" rx="4" fill="#D1FAE5"/><text x="30" y="14" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Next.js</text>
      <rect x="65" y="0" width="80" height="20" rx="4" fill="#D1FAE5"/><text x="105" y="14" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Turbopack</text>
      <rect x="150" y="0" width="55" height="20" rx="4" fill="#D1FAE5"/><text x="177" y="14" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">GSAP</text>
      <rect x="210" y="0" width="55" height="20" rx="4" fill="#D1FAE5"/><text x="237" y="14" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">jsPDF</text>
      <rect x="270" y="0" width="60" height="20" rx="4" fill="#D1FAE5"/><text x="300" y="14" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Motion</text>
    </g>
  </g>

  <!-- Project 3: ZeePrep Mobile -->
  <g transform="translate(35, 215)">
    <rect width="390" height="140" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <text x="18" y="28" fill="#7E22CE" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">ZeePrep-MobileApp</text>
    <rect x="295" y="13" width="77" height="20" rx="4" fill="#7C3AED" fill-opacity="0.15"/>
    <text x="333" y="27" text-anchor="middle" fill="#7E22CE" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">NATIVE APP</text>

    <text x="18" y="52" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Phone-first mobile client for students &amp; teachers connected</text>
    <text x="18" y="68" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">to production Firebase backend (zeeprep01) with audio/video.</text>
    <text x="18" y="88" fill="#9333EA" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">React Native // Expo SDK 52</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="90" height="20" rx="4" fill="#F3E8FF"/><text x="45" y="14" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Expo Router</text>
      <rect x="95" y="0" width="75" height="20" rx="4" fill="#F3E8FF"/><text x="132" y="14" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Expo Audio</text>
      <rect x="175" y="0" width="90" height="20" rx="4" fill="#F3E8FF"/><text x="220" y="14" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">TanStack Query</text>
      <rect x="270" y="0" width="65" height="20" rx="4" fill="#F3E8FF"/><text x="302" y="14" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Firebase</text>
    </g>
  </g>

  <!-- Project 4: Celestial Launch (Mangalyaan) -->
  <g transform="translate(455, 215)">
    <rect width="390" height="140" rx="12" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.2"/>
    <text x="18" y="28" fill="#B45309" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">Celestial Launch (Mangalyaan)</text>
    <rect x="295" y="13" width="77" height="20" rx="4" fill="#D97706" fill-opacity="0.15"/>
    <text x="333" y="27" text-anchor="middle" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">SIMULATOR</text>

    <text x="18" y="52" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Nocturnal aerospace launch facility simulating ISRO Mars</text>
    <text x="18" y="68" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Orbiter Mission with PBR shaders and exhaust telemetry.</text>
    <text x="18" y="88" fill="#D97706" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">High Fidelity Spatial Graphics</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="65" height="20" rx="4" fill="#FEF3C7"/><text x="32" y="14" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Three.js</text>
      <rect x="70" y="0" width="75" height="20" rx="4" fill="#FEF3C7"/><text x="107" y="14" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">PBR Shaders</text>
      <rect x="150" y="0" width="70" height="20" rx="4" fill="#FEF3C7"/><text x="185" y="14" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Radix UI</text>
      <rect x="225" y="0" width="75" height="20" rx="4" fill="#FEF3C7"/><text x="262" y="14" text-anchor="middle" fill="#92400E" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">Tailwind CSS</text>
    </g>
  </g>
</svg>"""
        self._save("featured-projects.svg", svg)

    def generate_commit_intelligence(self, sample_commits: List[Dict[str, Any]]):
        svg = """<svg width="880" height="340" viewBox="0 0 880 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ci_bg" x1="0" y1="0" x2="880" y2="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="336" rx="16" fill="url(#ci_bg)"/>
  <rect x="2" y="2" width="876" height="336" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="35" y="38" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="2">
    COMMIT INTELLIGENCE ENGINE // EXPLAINABLE SCORING FEED
  </text>

  <!-- Feed Item 1: Skippi Shark Tank Simulation -->
  <g transform="translate(35, 55)">
    <rect width="810" height="78" rx="10" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <text x="20" y="24" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 94.2] FEATURE // SPATIAL EDTECH</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10.5">2026-11-13</text>
    <text x="20" y="44" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">POA-Skippi: Roo 3D hop animation &amp; 13 interactive case study stages</text>
    <text x="20" y="64" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: Involves complex R3F kinematics, Recharts business analytics, and Zustand pedagogical state coordination.</text>
  </g>

  <!-- Feed Item 2: Eat Better Internship -->
  <g transform="translate(35, 145)">
    <rect width="810" height="78" rx="10" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <text x="20" y="24" fill="#047857" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 91.5] ARCHITECTURE // MODERN PIPELINE</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10.5">2026-11-16</text>
    <text x="20" y="44" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Eat-Better-Internship: Next.js Turbopack + Three.js canvas viewport orchestration</text>
    <text x="20" y="64" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: High architectural significance; integrates turbopack compiler, 3D viewport canvas, and programmatic PDF generation.</text>
  </g>

  <!-- Feed Item 3: Olympiad Activities Digital Exam -->
  <g transform="translate(35, 235)">
    <rect width="810" height="78" rx="10" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <text x="20" y="24" fill="#7E22CE" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 89.0] INTEGRATION // CLOUD &amp; DND</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10.5">2026-11-04</text>
    <text x="20" y="44" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Olympiad-Activities: Drag-and-drop mechanics &amp; Firebase cloud persistence</text>
    <text x="20" y="64" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: Orchestrates DND-Kit interaction states with multi-stage Firebase cloud synchronization under digital exam timing.</text>
  </g>
</svg>"""
        self._save("commit-intelligence.svg", svg)

    def generate_development_journey(self):
        svg = """<svg width="880" height="240" viewBox="0 0 880 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dj_bg" x1="0" y1="0" x2="880" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="236" rx="16" fill="url(#dj_bg)"/>
  <rect x="2" y="2" width="876" height="236" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="35" y="38" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="2">
    CHRONOLOGICAL MILESTONE TRAJECTORY (2025 - NOV 2026)
  </text>

  <!-- Horizontal Axis Line -->
  <line x1="60" y1="120" x2="820" y2="120" stroke="#CBD5E1" stroke-width="2"/>

  <!-- Milestone 1: Foundations -->
  <g transform="translate(80, 85)">
    <circle cx="20" cy="35" r="8" fill="#FFFFFF" stroke="#0284C7" stroke-width="3"/>
    <text x="20" y="15" text-anchor="middle" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800">MAR 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Physics Motion</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Kinematic 3D Course</text>
  </g>

  <!-- Milestone 2: Shaders -->
  <g transform="translate(230, 85)">
    <circle cx="20" cy="35" r="8" fill="#FFFFFF" stroke="#7C3AED" stroke-width="3"/>
    <text x="20" y="15" text-anchor="middle" fill="#7C3AED" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800">APR-MAY 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Solaris &amp; Galaxy</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Procedural GLSL Shaders</text>
  </g>

  <!-- Milestone 3: Aerospace Sim -->
  <g transform="translate(390, 85)">
    <circle cx="20" cy="35" r="8" fill="#FFFFFF" stroke="#059669" stroke-width="3"/>
    <text x="20" y="15" text-anchor="middle" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800">AUG 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Mangalyaan Launch</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Aerospace PBR Lighting</text>
  </g>

  <!-- Milestone 4: Mobile & Peak Velocity -->
  <g transform="translate(560, 85)">
    <circle cx="20" cy="35" r="8" fill="#FFFFFF" stroke="#D97706" stroke-width="3"/>
    <text x="20" y="15" text-anchor="middle" fill="#D97706" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800">SEP 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">ZeePrep &amp; Peak</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">276 Commits in Month</text>
  </g>

  <!-- Milestone 5: Active Production -->
  <g transform="translate(730, 85)">
    <circle cx="20" cy="35" r="8" fill="#2563EB" stroke="#FFFFFF" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#2563EB" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800">NOV 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700">Skippi &amp; Eat Better</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Shark Tank 3D &amp; Next.js</text>
  </g>
</svg>"""
        self._save("development-journey.svg", svg)

    def generate_project_previews(self):
        # High fidelity visual project preview mockup card for the README
        svg = """<svg width="880" height="320" viewBox="0 0 880 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="prev_bg" x1="0" y1="0" x2="880" y2="320" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="316" rx="16" fill="url(#prev_bg)"/>
  <rect x="2" y="2" width="876" height="316" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <text x="35" y="38" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" letter-spacing="2">
    VISUAL PROJECT PREVIEWS // SPATIAL &amp; MOBILE SLICES
  </text>

  <!-- Mockup Preview 1: Skippi Island 3D -->
  <g transform="translate(35, 55)">
    <rect width="255" height="235" rx="12" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <!-- Mockup Canvas Screen -->
    <rect x="15" y="15" width="225" height="120" rx="8" fill="#0C1B2A"/>
    <!-- Stylized 3D Island Wireframe -->
    <circle cx="127" cy="80" r="45" fill="#0369A1" fill-opacity="0.2"/>
    <path d="M 60 90 Q 127 50 195 90" stroke="#38BDF8" stroke-width="2" fill="none"/>
    <circle cx="127" cy="65" r="10" fill="#38BDF8"/>
    <text x="127" y="69" text-anchor="middle" fill="#0C1B2A" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="900">ROO</text>
    <text x="25" y="35" fill="#BAE6FD" font-family="'JetBrains Mono', monospace" font-size="9">3D Island Viewport</text>
    
    <text x="15" y="155" fill="#0369A1" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Skippi Island 3D</text>
    <text x="15" y="175" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Shark Tank simulation (Grades 4-9)</text>
    <text x="15" y="195" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">poa-skippi.web.app</text>
    <rect x="15" y="206" width="65" height="18" rx="4" fill="#E0F2FE"/><text x="47" y="219" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Three.js</text>
    <rect x="85" y="206" width="60" height="18" rx="4" fill="#E0F2FE"/><text x="115" y="219" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Zustand</text>
  </g>

  <!-- Mockup Preview 2: Eat Better Next.js -->
  <g transform="translate(312, 55)">
    <rect width="255" height="235" rx="12" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <!-- Mockup Canvas Screen -->
    <rect x="15" y="15" width="225" height="120" rx="8" fill="#06281E"/>
    <rect x="30" y="30" width="80" height="12" rx="3" fill="#34D399"/>
    <rect x="30" y="50" width="165" height="8" rx="2" fill="#059669" fill-opacity="0.4"/>
    <rect x="30" y="64" width="140" height="8" rx="2" fill="#059669" fill-opacity="0.4"/>
    <circle cx="165" cy="90" r="22" stroke="#34D399" stroke-width="2" fill="none"/>
    <path d="M 155 90 L 163 97 L 176 83" stroke="#34D399" stroke-width="2" fill="none"/>
    <text x="25" y="115" fill="#A7F3D0" font-family="'JetBrains Mono', monospace" font-size="8.5">Next.js Turbopack</text>

    <text x="15" y="155" fill="#047857" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Eat Better Internship</text>
    <text x="15" y="175" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Spatial Web &amp; Dynamic jsPDF</text>
    <text x="15" y="195" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">Active Nov 16, 2026</text>
    <rect x="15" y="206" width="65" height="18" rx="4" fill="#D1FAE5"/><text x="47" y="219" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Next.js</text>
    <rect x="85" y="206" width="55" height="18" rx="4" fill="#D1FAE5"/><text x="112" y="219" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">GSAP</text>
  </g>

  <!-- Mockup Preview 3: ZeePrep Mobile -->
  <g transform="translate(590, 55)">
    <rect width="255" height="235" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <!-- Mockup Canvas Screen (Phone Frame) -->
    <rect x="65" y="15" width="125" height="120" rx="10" fill="#1E1035" stroke="#7C3AED" stroke-width="1.5"/>
    <rect x="100" y="20" width="55" height="5" rx="2.5" fill="#7C3AED"/>
    <!-- Audio Waveform inside phone -->
    <line x1="85" y1="75" x2="85" y2="85" stroke="#C084FC" stroke-width="2"/>
    <line x1="95" y1="65" x2="95" y2="95" stroke="#C084FC" stroke-width="2"/>
    <line x1="105" y1="55" x2="105" y2="105" stroke="#C084FC" stroke-width="2"/>
    <line x1="115" y1="70" x2="115" y2="90" stroke="#C084FC" stroke-width="2"/>
    <line x1="125" y1="60" x2="125" y2="100" stroke="#C084FC" stroke-width="2"/>
    <line x1="135" y1="75" x2="135" y2="85" stroke="#C084FC" stroke-width="2"/>
    <text x="127" y="122" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="8">Expo SDK 52</text>

    <text x="15" y="155" fill="#7E22CE" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">ZeePrep Mobile App</text>
    <text x="15" y="175" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Cross-platform phone client</text>
    <text x="15" y="195" fill="#9333EA" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">Firebase zeeprep01</text>
    <rect x="15" y="206" width="80" height="18" rx="4" fill="#F3E8FF"/><text x="55" y="219" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Expo Router</text>
    <rect x="100" y="206" width="60" height="18" rx="4" fill="#F3E8FF"/><text x="130" y="219" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Firebase</text>
  </g>
</svg>"""
        self._save("project-previews.svg", svg)
