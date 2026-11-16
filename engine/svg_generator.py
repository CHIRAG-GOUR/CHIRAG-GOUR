"""
Dynamic SVG Card Generator
Renders high-resolution, dark obsidian cyber-spatial SVG cards
specifically optimized for GitHub profile display across dark and light themes.
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
        svg = f"""<svg width="880" height="260" viewBox="0 0 880 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_grad" x1="0" y1="0" x2="880" y2="260" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#07090E"/>
      <stop offset="50%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#080C14"/>
    </linearGradient>
    <linearGradient id="border_grad" x1="0" y1="0" x2="880" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#8A2BE2" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#00F5A0" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="text_grad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#00E5FF"/>
    </linearGradient>
    <filter id="glow" x="-10" y="-10" width="900" height="280" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="880" height="260" rx="14" fill="url(#bg_grad)"/>
  <rect x="1" y="1" width="878" height="258" rx="13" stroke="url(#border_grad)" stroke-width="1.5"/>

  <!-- Cyber Grid Lines -->
  <g opacity="0.07" stroke="#00E5FF" stroke-width="1">
    <line x1="40" y1="0" x2="40" y2="260"/>
    <line x1="200" y1="0" x2="200" y2="260"/>
    <line x1="440" y1="0" x2="440" y2="260"/>
    <line x1="680" y1="0" x2="680" y2="260"/>
    <line x1="840" y1="0" x2="840" y2="260"/>
    <line x1="0" y1="65" x2="880" y2="65"/>
    <line x1="0" y1="130" x2="880" y2="130"/>
    <line x1="0" y1="195" x2="880" y2="195"/>
  </g>

  <!-- Top Status Bar -->
  <rect x="40" y="24" width="220" height="24" rx="12" fill="#141B2D" stroke="#00E5FF" stroke-opacity="0.3"/>
  <circle cx="54" cy="36" r="4" fill="#00F5A0">
    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="68" y="40" fill="#94A3B8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="600" letter-spacing="1.5">
    AUTONOMOUS ECOSYSTEM // LIVE
  </text>

  <text x="840" y="40" text-anchor="end" fill="#64748B" font-family="'JetBrains Mono', Consolas, monospace" font-size="10">
    SYNC: {sync_time}
  </text>

  <!-- Name & Main Title -->
  <text x="40" y="98" fill="url(#text_grad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">
    CHIRAG GOUR
  </text>

  <text x="40" y="128" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="14" font-weight="600" letter-spacing="2">
    CREATIVE COMPUTING &amp; PEDAGOGICAL SYSTEMS ARCHITECT
  </text>

  <!-- Core Summary -->
  <text x="40" y="162" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="400">
    Architecting spatial 3D web experiences, interactive educational simulations, and production-grade reactive software.
  </text>
  <text x="40" y="182" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">
    Specialized in Three.js / R3F shaders, Next.js Turbopack systems, and serious gaming pedagogical frameworks.
  </text>

  <!-- Bottom Pills -->
  <g transform="translate(40, 208)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="135" height="26" rx="6" fill="#141E33" stroke="#00E5FF" stroke-opacity="0.4"/>
    <text x="67" y="17" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">SPATIAL 3D WEB</text>

    <!-- Pill 2 -->
    <rect x="145" y="0" width="165" height="26" rx="6" fill="#1C1838" stroke="#8A2BE2" stroke-opacity="0.4"/>
    <text x="227" y="17" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">EDTECH SIMULATIONS</text>

    <!-- Pill 3 -->
    <rect x="320" y="0" width="155" height="26" rx="6" fill="#112926" stroke="#00F5A0" stroke-opacity="0.4"/>
    <text x="397" y="17" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">REACT 19 / NEXT.JS</text>

    <!-- Pill 4 -->
    <rect x="485" y="0" width="160" height="26" rx="6" fill="#261E14" stroke="#FFB800" stroke-opacity="0.4"/>
    <text x="565" y="17" text-anchor="middle" fill="#FBBF24" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">EXPO NATIVE MOBILE</text>
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
    <linearGradient id="card_grad" x1="0" y1="0" x2="880" y2="210" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#0D111A"/>
    </linearGradient>
    <linearGradient id="border_base" x1="0" y1="0" x2="880" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>

  <rect width="880" height="210" rx="14" fill="url(#card_grad)"/>
  <rect x="1" y="1" width="878" height="208" rx="13" stroke="url(#border_base)" stroke-width="1"/>

  <!-- Chamber 1: Repositories -->
  <g transform="translate(35, 30)">
    <rect width="180" height="150" rx="10" fill="#0E1626" stroke="#00E5FF" stroke-opacity="0.25" stroke-width="1"/>
    <text x="20" y="32" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">SOURCE REPOSITORIES</text>
    <text x="20" y="80" fill="#00E5FF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{repos_count}</text>
    <text x="20" y="112" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">100% Original Works</text>
    <text x="20" y="130" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10">0 Forks // Pure Origin</text>
  </g>

  <!-- Chamber 2: Analyzed Velocity -->
  <g transform="translate(240, 30)">
    <rect width="180" height="150" rx="10" fill="#141126" stroke="#8A2BE2" stroke-opacity="0.25" stroke-width="1"/>
    <text x="20" y="32" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">ANALYZED COMMITS</text>
    <text x="20" y="80" fill="#C084FC" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{commits_sample}+</text>
    <text x="20" y="112" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Across Active Sample</text>
    <text x="20" y="130" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10">Peak: 276 in Sept 2026</text>
  </g>

  <!-- Chamber 3: TIS Score -->
  <g transform="translate(445, 30)">
    <rect width="180" height="150" rx="10" fill="#0C1B19" stroke="#00F5A0" stroke-opacity="0.25" stroke-width="1"/>
    <text x="20" y="32" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">TECHNICAL IMPACT (TIS)</text>
    <text x="20" y="80" fill="#00F5A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{tis_score}</text>
    <text x="20" y="112" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Explainable Index / 100</text>
    <text x="20" y="130" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10">9 Scoring Dimensions</text>
  </g>

  <!-- Chamber 4: Streak & Cadence -->
  <g transform="translate(650, 30)">
    <rect width="195" height="150" rx="10" fill="#1C180E" stroke="#FFB800" stroke-opacity="0.25" stroke-width="1"/>
    <text x="20" y="32" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">MAX ACTIVE STREAK</text>
    <text x="20" y="80" fill="#FFB800" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="38" font-weight="800">{streak_days} <tspan font-size="20">DAYS</tspan></text>
    <text x="20" y="112" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Sustained Rhythm</text>
    <text x="20" y="130" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10">Fri &amp; Mon Peak Days</text>
  </g>
</svg>"""
        self._save("metrics-dashboard.svg", svg)

    def generate_tech_constellation(self):
        svg = """<svg width="880" height="340" viewBox="0 0 880 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tc_bg" x1="0" y1="0" x2="880" y2="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#0A0F1A"/>
    </linearGradient>
  </defs>

  <rect width="880" height="340" rx="14" fill="url(#tc_bg)"/>
  <rect x="1" y="1" width="878" height="338" rx="13" stroke="#1E293B" stroke-width="1"/>

  <!-- Header -->
  <text x="35" y="38" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="2">
    TECHNICAL ECOSYSTEM // VERIFIED PROFICIENCIES
  </text>

  <!-- Quadrant 1: Spatial & 3D Web -->
  <g transform="translate(35, 55)">
    <rect width="390" height="120" rx="10" fill="#0D1628" stroke="#00E5FF" stroke-opacity="0.3"/>
    <text x="20" y="28" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">01 // CREATIVE 3D &amp; SHADERS</text>
    <text x="20" y="48" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Procedural rendering, timeline keyframing, and custom materials</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="70" height="22" rx="4" fill="#162544"/><text x="35" y="15" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5">Three.js</text>
      <rect x="76" y="0" width="55" height="22" rx="4" fill="#162544"/><text x="103" y="15" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5">R3F</text>
      <rect x="137" y="0" width="85" height="22" rx="4" fill="#162544"/><text x="179" y="15" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5">Theatre.js</text>
      <rect x="228" y="0" width="55" height="22" rx="4" fill="#162544"/><text x="255" y="15" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5">GSAP</text>
      <rect x="289" y="0" width="60" height="22" rx="4" fill="#162544"/><text x="319" y="15" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5">GLSL</text>
    </g>
  </g>

  <!-- Quadrant 2: EdTech & Serious Games -->
  <g transform="translate(455, 55)">
    <rect width="390" height="120" rx="10" fill="#140E2A" stroke="#8A2BE2" stroke-opacity="0.3"/>
    <text x="20" y="28" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">02 // EDTECH &amp; SERIOUS GAMES</text>
    <text x="20" y="48" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Plan of Activity (POA) frameworks, Shark Tank sims, exams</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="80" height="22" rx="4" fill="#281A4E"/><text x="40" y="15" text-anchor="middle" fill="#D8B4FE" font-family="'JetBrains Mono', monospace" font-size="9.5">POA Series</text>
      <rect x="86" y="0" width="80" height="22" rx="4" fill="#281A4E"/><text x="126" y="15" text-anchor="middle" fill="#D8B4FE" font-family="'JetBrains Mono', monospace" font-size="9.5">Gamification</text>
      <rect x="172" y="0" width="70" height="22" rx="4" fill="#281A4E"/><text x="207" y="15" text-anchor="middle" fill="#D8B4FE" font-family="'JetBrains Mono', monospace" font-size="9.5">Zustand</text>
      <rect x="248" y="0" width="65" height="22" rx="4" fill="#281A4E"/><text x="280" y="15" text-anchor="middle" fill="#D8B4FE" font-family="'JetBrains Mono', monospace" font-size="9.5">Recharts</text>
    </g>
  </g>

  <!-- Quadrant 3: Reactive Web & Mobile -->
  <g transform="translate(35, 190)">
    <rect width="390" height="120" rx="10" fill="#0C1B17" stroke="#00F5A0" stroke-opacity="0.3"/>
    <text x="20" y="28" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">03 // REACTIVE WEB &amp; MOBILE</text>
    <text x="20" y="48" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Modern Turbopack pipelines, Expo native routing, and cloud sync</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="65" height="22" rx="4" fill="#14362A"/><text x="32" y="15" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9.5">Next.js</text>
      <rect x="71" y="0" width="85" height="22" rx="4" fill="#14362A"/><text x="113" y="15" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9.5">Turbopack</text>
      <rect x="162" y="0" width="85" height="22" rx="4" fill="#14362A"/><text x="204" y="15" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9.5">Expo Router</text>
      <rect x="253" y="0" width="68" height="22" rx="4" fill="#14362A"/><text x="287" y="15" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9.5">Firebase</text>
    </g>
  </g>

  <!-- Quadrant 4: Vision & Applied AI -->
  <g transform="translate(455, 190)">
    <rect width="390" height="120" rx="10" fill="#1F170B" stroke="#FFB800" stroke-opacity="0.3"/>
    <text x="20" y="28" fill="#FBBF24" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">04 // COMPUTER VISION &amp; FAST AI</text>
    <text x="20" y="48" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Edge face/emotion detection and ultra-low latency LPU reasoning</text>
    <!-- Pills -->
    <g transform="translate(20, 65)">
      <rect x="0" y="0" width="75" height="22" rx="4" fill="#3C2C10"/><text x="37" y="15" text-anchor="middle" fill="#FCD34D" font-family="'JetBrains Mono', monospace" font-size="9.5">Face-API</text>
      <rect x="81" y="0" width="75" height="22" rx="4" fill="#3C2C10"/><text x="118" y="15" text-anchor="middle" fill="#FCD34D" font-family="'JetBrains Mono', monospace" font-size="9.5">Groq SDK</text>
      <rect x="162" y="0" width="95" height="22" rx="4" fill="#3C2C10"/><text x="209" y="15" text-anchor="middle" fill="#FCD34D" font-family="'JetBrains Mono', monospace" font-size="9.5">Edge Vision</text>
      <rect x="263" y="0" width="55" height="22" rx="4" fill="#3C2C10"/><text x="290" y="15" text-anchor="middle" fill="#FCD34D" font-family="'JetBrains Mono', monospace" font-size="9.5">jsPDF</text>
    </g>
  </g>
</svg>"""
        self._save("tech-constellation.svg", svg)

    def generate_featured_projects(self):
        svg = """<svg width="880" height="380" viewBox="0 0 880 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fp_bg" x1="0" y1="0" x2="880" y2="380" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#090E18"/>
    </linearGradient>
  </defs>

  <rect width="880" height="380" rx="14" fill="url(#fp_bg)"/>
  <rect x="1" y="1" width="878" height="378" rx="13" stroke="#1E293B" stroke-width="1"/>

  <!-- Header -->
  <text x="35" y="38" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="2">
    PROJECT UNIVERSE // FEATURED BENCHMARKS
  </text>

  <!-- Project 1: POA Skippi -->
  <g transform="translate(35, 55)">
    <rect width="390" height="140" rx="10" fill="#0C1424" stroke="#00E5FF" stroke-opacity="0.35"/>
    <text x="18" y="28" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">POA-Skippi (Skippi Island)</text>
    <rect x="300" y="13" width="72" height="20" rx="4" fill="#00E5FF" fill-opacity="0.15"/>
    <text x="336" y="27" text-anchor="middle" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">LIVE DEMO</text>
    
    <text x="18" y="52" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">3D Shark Tank Case Study (Grades 4-9). Roo the kangaroo</text>
    <text x="18" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">navigates 13 pedagogical business milestones in real-time 3D.</text>
    <text x="18" y="88" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10">poa-skippi.web.app</text>
    
    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="55" height="20" rx="4" fill="#14233C"/><text x="27" y="14" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9">React</text>
      <rect x="60" y="0" width="70" height="20" rx="4" fill="#14233C"/><text x="95" y="14" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9">Three.js</text>
      <rect x="135" y="0" width="55" height="20" rx="4" fill="#14233C"/><text x="162" y="14" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9">R3F</text>
      <rect x="195" y="0" width="65" height="20" rx="4" fill="#14233C"/><text x="227" y="14" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9">Zustand</text>
      <rect x="265" y="0" width="65" height="20" rx="4" fill="#14233C"/><text x="297" y="14" text-anchor="middle" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9">Recharts</text>
    </g>
  </g>

  <!-- Project 2: Eat Better Internship -->
  <g transform="translate(455, 55)">
    <rect width="390" height="140" rx="10" fill="#0D1A1E" stroke="#00F5A0" stroke-opacity="0.35"/>
    <text x="18" y="28" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">Eat-Better-Internship</text>
    <rect x="295" y="13" width="77" height="20" rx="4" fill="#00F5A0" fill-opacity="0.15"/>
    <text x="333" y="27" text-anchor="middle" fill="#00F5A0" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">ACTIVE NOW</text>

    <text x="18" y="52" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Spatial internship platform integrating 3D canvas viewports,</text>
    <text x="18" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">GSAP micro-choreography, and dynamic PDF reporting.</text>
    <text x="18" y="88" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="10">Pushed Nov 16, 2026 // Latest Production</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="60" height="20" rx="4" fill="#143429"/><text x="30" y="14" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9">Next.js</text>
      <rect x="65" y="0" width="80" height="20" rx="4" fill="#143429"/><text x="105" y="14" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9">Turbopack</text>
      <rect x="150" y="0" width="55" height="20" rx="4" fill="#143429"/><text x="177" y="14" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9">GSAP</text>
      <rect x="210" y="0" width="55" height="20" rx="4" fill="#143429"/><text x="237" y="14" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9">jsPDF</text>
      <rect x="270" y="0" width="60" height="20" rx="4" fill="#143429"/><text x="300" y="14" text-anchor="middle" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9">Motion</text>
    </g>
  </g>

  <!-- Project 3: ZeePrep Mobile -->
  <g transform="translate(35, 215)">
    <rect width="390" height="140" rx="10" fill="#18112C" stroke="#8A2BE2" stroke-opacity="0.35"/>
    <text x="18" y="28" fill="#C084FC" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">ZeePrep-MobileApp</text>
    <rect x="300" y="13" width="72" height="20" rx="4" fill="#8A2BE2" fill-opacity="0.15"/>
    <text x="336" y="27" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">NATIVE APP</text>

    <text x="18" y="52" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Phone-first mobile client for students &amp; teachers connected</text>
    <text x="18" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">to production Firebase backend (zeeprep01) with audio/video.</text>
    <text x="18" y="88" fill="#D8B4FE" font-family="'JetBrains Mono', monospace" font-size="10">React Native // Expo SDK 52</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="90" height="20" rx="4" fill="#2E1B4E"/><text x="45" y="14" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="9">Expo Router</text>
      <rect x="95" y="0" width="75" height="20" rx="4" fill="#2E1B4E"/><text x="132" y="14" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="9">Expo Audio</text>
      <rect x="175" y="0" width="90" height="20" rx="4" fill="#2E1B4E"/><text x="220" y="14" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="9">TanStack Query</text>
      <rect x="270" y="0" width="65" height="20" rx="4" fill="#2E1B4E"/><text x="302" y="14" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="9">Firebase</text>
    </g>
  </g>

  <!-- Project 4: Celestial Launch (Mangalyaan) -->
  <g transform="translate(455, 215)">
    <rect width="390" height="140" rx="10" fill="#211709" stroke="#FFB800" stroke-opacity="0.35"/>
    <text x="18" y="28" fill="#FBBF24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700">Celestial Launch (Mangalyaan)</text>
    <rect x="300" y="13" width="72" height="20" rx="4" fill="#FFB800" fill-opacity="0.15"/>
    <text x="336" y="27" text-anchor="middle" fill="#FFB800" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">SIMULATOR</text>

    <text x="18" y="52" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Nocturnal aerospace launch facility simulating ISRO Mars</text>
    <text x="18" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5">Orbiter Mission with PBR shaders and exhaust telemetry.</text>
    <text x="18" y="88" fill="#FCD34D" font-family="'JetBrains Mono', monospace" font-size="10">High Fidelity Spatial Graphics</text>

    <!-- Tech stack pills -->
    <g transform="translate(18, 104)">
      <rect x="0" y="0" width="65" height="20" rx="4" fill="#3D2908"/><text x="32" y="14" text-anchor="middle" fill="#FDE68A" font-family="'JetBrains Mono', monospace" font-size="9">Three.js</text>
      <rect x="70" y="0" width="75" height="20" rx="4" fill="#3D2908"/><text x="107" y="14" text-anchor="middle" fill="#FDE68A" font-family="'JetBrains Mono', monospace" font-size="9">PBR Shaders</text>
      <rect x="150" y="0" width="70" height="20" rx="4" fill="#3D2908"/><text x="185" y="14" text-anchor="middle" fill="#FDE68A" font-family="'JetBrains Mono', monospace" font-size="9">Radix UI</text>
      <rect x="225" y="0" width="75" height="20" rx="4" fill="#3D2908"/><text x="262" y="14" text-anchor="middle" fill="#FDE68A" font-family="'JetBrains Mono', monospace" font-size="9">Tailwind CSS</text>
    </g>
  </g>
</svg>"""
        self._save("featured-projects.svg", svg)

    def generate_commit_intelligence(self, sample_commits: List[Dict[str, Any]]):
        svg = """<svg width="880" height="340" viewBox="0 0 880 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ci_bg" x1="0" y1="0" x2="880" y2="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#0A101C"/>
    </linearGradient>
  </defs>

  <rect width="880" height="340" rx="14" fill="url(#ci_bg)"/>
  <rect x="1" y="1" width="878" height="338" rx="13" stroke="#1E293B" stroke-width="1"/>

  <!-- Header -->
  <text x="35" y="38" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="2">
    COMMIT INTELLIGENCE ENGINE // EXPLAINABLE SCORING FEED
  </text>

  <!-- Feed Item 1: Skippi Shark Tank Simulation -->
  <g transform="translate(35, 55)">
    <rect width="810" height="78" rx="8" fill="#0D1628" stroke="#00E5FF" stroke-opacity="0.25"/>
    <text x="20" y="24" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 94.2] FEATURE // SPATIAL EDTECH</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">2026-11-13</text>
    <text x="20" y="44" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600">POA-Skippi: Roo 3D hop animation &amp; 13 interactive case study stages</text>
    <text x="20" y="64" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: Involves complex R3F kinematics, Recharts business analytics, and Zustand pedagogical state coordination.</text>
  </g>

  <!-- Feed Item 2: Eat Better Internship -->
  <g transform="translate(35, 145)">
    <rect width="810" height="78" rx="8" fill="#0D1C1A" stroke="#00F5A0" stroke-opacity="0.25"/>
    <text x="20" y="24" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 91.5] ARCHITECTURE // MODERN PIPELINE</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">2026-11-16</text>
    <text x="20" y="44" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600">Eat-Better-Internship: Next.js Turbopack + Three.js canvas viewport orchestration</text>
    <text x="20" y="64" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: High architectural significance; integrates turbopack compiler, 3D viewport canvas, and programmatic PDF generation.</text>
  </g>

  <!-- Feed Item 3: Olympiad Activities Digital Exam -->
  <g transform="translate(35, 235)">
    <rect width="810" height="78" rx="8" fill="#1A112C" stroke="#8A2BE2" stroke-opacity="0.25"/>
    <text x="20" y="24" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">[TIS: 89.0] INTEGRATION // CLOUD &amp; DND</text>
    <text x="730" y="24" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">2026-11-04</text>
    <text x="20" y="44" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600">Olympiad-Activities: Drag-and-drop mechanics &amp; Firebase cloud persistence</text>
    <text x="20" y="64" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Reasoning: Orchestrates DND-Kit interaction states with multi-stage Firebase cloud synchronization under digital exam timing.</text>
  </g>
</svg>"""
        self._save("commit-intelligence.svg", svg)

    def generate_development_journey(self):
        svg = """<svg width="880" height="240" viewBox="0 0 880 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dj_bg" x1="0" y1="0" x2="880" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="100%" stop-color="#0B101C"/>
    </linearGradient>
  </defs>

  <rect width="880" height="240" rx="14" fill="url(#dj_bg)"/>
  <rect x="1" y="1" width="878" height="238" rx="13" stroke="#1E293B" stroke-width="1"/>

  <!-- Header -->
  <text x="35" y="38" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="2">
    CHRONOLOGICAL MILESTONE TRAJECTORY (2025 - NOV 2026)
  </text>

  <!-- Horizontal Axis Line -->
  <line x1="60" y1="120" x2="820" y2="120" stroke="#1E293B" stroke-width="2"/>

  <!-- Milestone 1: Foundations -->
  <g transform="translate(80, 85)">
    <circle cx="20" cy="35" r="7" fill="#07090E" stroke="#00E5FF" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">MAR 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600">Physics Motion</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Kinematic 3D Course</text>
  </g>

  <!-- Milestone 2: Shaders -->
  <g transform="translate(230, 85)">
    <circle cx="20" cy="35" r="7" fill="#07090E" stroke="#8A2BE2" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">APR-MAY 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600">Solaris &amp; Galaxy</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Procedural GLSL Shaders</text>
  </g>

  <!-- Milestone 3: Aerospace Sim -->
  <g transform="translate(390, 85)">
    <circle cx="20" cy="35" r="7" fill="#07090E" stroke="#00F5A0" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#00F5A0" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">AUG 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600">Mangalyaan Launch</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Aerospace PBR Lighting</text>
  </g>

  <!-- Milestone 4: Mobile & Peak Velocity -->
  <g transform="translate(560, 85)">
    <circle cx="20" cy="35" r="7" fill="#07090E" stroke="#FFB800" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#FFB800" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">SEP 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600">ZeePrep &amp; Peak</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">276 Commits in Month</text>
  </g>

  <!-- Milestone 5: Active Production -->
  <g transform="translate(730, 85)">
    <circle cx="20" cy="35" r="8" fill="#00E5FF" stroke="#07090E" stroke-width="2.5"/>
    <text x="20" y="15" text-anchor="middle" fill="#00E5FF" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">NOV 2026</text>
    <text x="20" y="65" text-anchor="middle" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600">Skippi &amp; Eat Better</text>
    <text x="20" y="80" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5">Shark Tank 3D &amp; Next.js</text>
  </g>
</svg>"""
        self._save("development-journey.svg", svg)
