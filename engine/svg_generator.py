"""
Dynamic SVG Card Generator — Pure Transparent Canvas & Zero White Boxes Edition
Renders clean, high-contrast, visual SVG telemetry that seamlessly blends
into GitHub without solid white cards, frames, or blinding backgrounds.
"""

import os
from typing import Dict, Any

class SVGGenerator:
    def __init__(self, output_dir: str):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)

    def _save(self, filename: str, content: str):
        path = os.path.join(self.output_dir, filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[SVG] Generated transparent {filename}")

    def generate_identity_header(self, profile: Dict[str, Any], sync_time: str):
        """Clean header with zero background boxes, high-contrast typography and colorful accent dots."""
        svg = f"""<svg width="880" height="155" viewBox="0 0 880 155" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hdr_title_grad" x1="0" y1="0" x2="450" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Name & Professional Title -->
  <text x="0" y="45" fill="url(#hdr_title_grad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="900" letter-spacing="-0.8">
    CHIRAG GOUR
  </text>

  <text x="0" y="80" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="14.5" font-weight="700" letter-spacing="1.5">
    CREATIVE COMPUTING &amp; PEDAGOGICAL SYSTEMS ARCHITECT
  </text>

  <text x="0" y="112" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500">
    Spatial 3D Web • Serious Educational Games (POA Series) • Reactive Next.js &amp; Mobile
  </text>

  <!-- Clean Specialty Indicators (No pill boxes, pure typography) -->
  <g transform="translate(0, 142)" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="700">
    <text x="0" y="0" fill="#38BDF8">● SPATIAL 3D WEB</text>
    <text x="180" y="0" fill="#C084FC">● EDTECH SIMULATIONS</text>
    <text x="395" y="0" fill="#34D399">● NEXT.JS / REACT 19</text>
    <text x="600" y="0" fill="#FBBF24">● EXPO NATIVE MOBILE</text>
  </g>
</svg>"""
        self._save("identity-header.svg", svg)

    def generate_commit_ticker(self, commit_hash: str = "b710063", repo_name: str = "poa-skippi", commit_msg: str = "deploy: live 3D Shark Tank case study on Firebase"):
        """Live 'Currently Building' Commit Ticker: Subtle 1-line dark terminal ticker."""
        svg = f"""<svg width="880" height="42" viewBox="0 0 880 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Subtle dark terminal container matching GitHub code blocks -->
  <rect x="1" y="1" width="878" height="40" rx="8" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>

  <!-- Live Pulse Dot -->
  <circle cx="24" cy="21" r="4.5" fill="#22C55E">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
  </circle>

  <!-- Terminal Label -->
  <text x="38" y="25" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">
    CURRENTLY BUILDING //
  </text>

  <!-- Repo Badge -->
  <text x="210" y="25" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">
    [{repo_name}]
  </text>

  <!-- Commit Hash -->
  <text x="340" y="25" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">
    {commit_hash}
  </text>

  <!-- Commit Message -->
  <text x="420" y="25" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="500">
    {commit_msg}
  </text>

  <!-- Right status -->
  <text x="855" y="25" text-anchor="end" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
    ● LIVE SYNC
  </text>
</svg>"""
        self._save("commit-ticker.svg", svg)

    def generate_developer_xp_streak(self):
        """Visual Developer XP & Streak Bar: Clean progress bar tracking current coding consistency and streak score across 2026."""
        svg = """<svg width="880" height="88" viewBox="0 0 880 88" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar_grad" x1="0" y1="0" x2="560" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="45%" stop-color="#818CF8"/>
      <stop offset="80%" stop-color="#C084FC"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Left: Level Shield -->
  <g transform="translate(0, 14)">
    <rect width="68" height="58" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <text x="34" y="24" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">LEVEL</text>
    <text x="34" y="48" text-anchor="middle" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="22" font-weight="900">42</text>
  </g>

  <!-- Middle: XP Bar & Stats -->
  <g transform="translate(86, 18)">
    <text x="0" y="12" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="800">
      DEVELOPER XP &amp; SPRINT PROGRESSION
    </text>
    <text x="590" y="12" text-anchor="end" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
      2,211 / 2,500 XP (88.4%)
    </text>

    <!-- Progress Track -->
    <rect x="0" y="22" width="590" height="12" rx="6" fill="#21262D"/>
    <!-- Filled Gradient Bar -->
    <rect x="0" y="22" width="522" height="12" rx="6" fill="url(#bar_grad)"/>

    <!-- Bottom Metric Tags -->
    <text x="0" y="48" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">
      CADENCE: 94% CONSISTENCY
    </text>
    <text x="215" y="48" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">
      +276 COMMITS PEAK VELOCITY
    </text>
    <text x="460" y="48" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">
      NEXT: LVL 43 MASTER
    </text>
  </g>

  <!-- Right: Streak Flame -->
  <g transform="translate(735, 14)">
    <rect width="145" height="58" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <text x="24" y="28" font-size="18">🔥</text>
    <text x="52" y="26" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">STREAK</text>
    <text x="52" y="45" fill="#FBBF24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" font-weight="700">100% SPRINT</text>
  </g>
</svg>"""
        self._save("developer-xp-streak.svg", svg)

    def generate_achievement_trophies(self):
        """Minimalist gold and silver achievement icons for verified milestones. Zero white boxes."""
        svg = """<svg width="880" height="110" viewBox="0 0 880 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gold Medallion Gradient -->
    <linearGradient id="gold_grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <!-- Silver Medallion Gradient -->
    <linearGradient id="silver_grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F1F5F9"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#64748B"/>
    </linearGradient>
    <!-- Cyan Glow -->
    <linearGradient id="cyan_grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#BAE6FD"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Badge 1: 58+ Repositories (Gold) -->
  <g transform="translate(30, 10)">
    <circle cx="42" cy="42" r="34" fill="#161B22" stroke="url(#gold_grad)" stroke-width="2"/>
    <circle cx="42" cy="42" r="28" fill="#F59E0B" fill-opacity="0.12"/>
    <path d="M 33 28 L 51 28 L 48 44 C 47 48 44 50 42 50 C 40 50 37 48 36 44 Z" fill="url(#gold_grad)"/>
    <path d="M 42 50 L 42 56 M 36 56 L 48 56" stroke="url(#gold_grad)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 33 32 C 28 32 28 40 34 40 M 51 32 C 56 32 56 40 50 40" stroke="url(#gold_grad)" stroke-width="1.8" fill="none"/>
    <text x="42" y="86" text-anchor="middle" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">58+ REPOS</text>
    <text x="42" y="98" text-anchor="middle" fill="#FBBF24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">GOLD TIER</text>
  </g>

  <!-- Badge 2: 2,211+ Commits (Gold) -->
  <g transform="translate(205, 10)">
    <circle cx="42" cy="42" r="34" fill="#161B22" stroke="url(#gold_grad)" stroke-width="2"/>
    <circle cx="42" cy="42" r="28" fill="#F59E0B" fill-opacity="0.12"/>
    <path d="M 44 26 L 33 42 L 41 42 L 39 58 L 52 39 L 44 39 Z" fill="url(#gold_grad)"/>
    <text x="42" y="86" text-anchor="middle" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">2,211+ COMMITS</text>
    <text x="42" y="98" text-anchor="middle" fill="#FBBF24" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">VELOCITY ELITE</text>
  </g>

  <!-- Badge 3: Multi-Language Polyglot (Silver) -->
  <g transform="translate(380, 10)">
    <circle cx="42" cy="42" r="34" fill="#161B22" stroke="url(#silver_grad)" stroke-width="2"/>
    <circle cx="42" cy="42" r="28" fill="#94A3B8" fill-opacity="0.12"/>
    <path d="M 34 32 L 27 42 L 34 52 M 50 32 L 57 42 L 50 52 M 45 28 L 39 56" stroke="url(#silver_grad)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <text x="42" y="86" text-anchor="middle" fill="#E2E8F0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">POLYGLOT</text>
    <text x="42" y="98" text-anchor="middle" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">SILVER ARCHITECT</text>
  </g>

  <!-- Badge 4: Spatial 3D & GLSL (Gold/Cyan) -->
  <g transform="translate(555, 10)">
    <circle cx="42" cy="42" r="34" fill="#161B22" stroke="url(#cyan_grad)" stroke-width="2"/>
    <circle cx="42" cy="42" r="28" fill="#38BDF8" fill-opacity="0.12"/>
    <path d="M 42 27 L 55 34 L 42 41 L 29 34 Z" fill="#38BDF8"/>
    <path d="M 29 35 L 42 42 L 42 57 L 29 50 Z" fill="#0284C7"/>
    <path d="M 55 35 L 42 42 L 42 57 L 55 50 Z" fill="#0369A1"/>
    <text x="42" y="86" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">3D &amp; SHADERS</text>
    <text x="42" y="98" text-anchor="middle" fill="#7DD3FC" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">THREE.JS / GLSL</text>
  </g>

  <!-- Badge 5: Serious Games Creator (Silver/Purple) -->
  <g transform="translate(730, 10)">
    <circle cx="42" cy="42" r="34" fill="#161B22" stroke="#C084FC" stroke-width="2"/>
    <circle cx="42" cy="42" r="28" fill="#A855F7" fill-opacity="0.12"/>
    <rect x="28" y="33" width="28" height="18" rx="6" fill="#C084FC"/>
    <circle cx="34" cy="42" r="2" fill="#161B22"/>
    <circle cx="50" cy="39" r="1.5" fill="#F472B6"/>
    <circle cx="47" cy="44" r="1.5" fill="#38BDF8"/>
    <text x="42" y="86" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">POA EDTECH</text>
    <text x="42" y="98" text-anchor="middle" fill="#E9D5FF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">GAME LEAD</text>
  </g>
</svg>"""
        self._save("trophies-and-achievements.svg", svg)

    def generate_activity_waveform(self):
        """Pure visual area graph & waveform with zero background boxes."""
        svg = """<svg width="880" height="210" viewBox="0 0 880 210" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wave_fill" x1="0" y1="50" x2="0" y2="180" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3"/>
      <stop offset="70%" stop-color="#818CF8" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="wave_stroke" x1="50" y1="0" x2="550" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#818CF8"/>
      <stop offset="80%" stop-color="#C084FC"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Left: Activity Waveform Graph -->
  <g transform="translate(0, 15)">
    <text x="0" y="15" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Commit Velocity Waveform (2026)
    </text>
    <text x="480" y="15" text-anchor="end" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">
      PEAK: 276 COMMITS (SEPTEMBER)
    </text>

    <!-- Grid lines -->
    <line x1="0" y1="55" x2="480" y2="55" stroke="#21262D" stroke-width="1"/>
    <line x1="0" y1="100" x2="480" y2="100" stroke="#21262D" stroke-width="1"/>
    <line x1="0" y1="145" x2="480" y2="145" stroke="#21262D" stroke-width="1"/>
    <line x1="0" y1="180" x2="480" y2="180" stroke="#30363D" stroke-width="1.5"/>

    <!-- Waveform Area -->
    <path d="M 15 170 C 50 165, 75 175, 105 172 C 135 170, 160 162, 200 160 C 235 155, 265 120, 295 110 C 335 100, 365 45, 390 45 C 415 45, 435 135, 465 125 L 465 180 L 15 180 Z" fill="url(#wave_fill)"/>

    <!-- Waveform Stroke -->
    <path d="M 15 170 C 50 165, 75 175, 105 172 C 135 170, 160 162, 200 160 C 235 155, 265 120, 295 110 C 335 100, 365 45, 390 45 C 415 45, 435 135, 465 125" stroke="url(#wave_stroke)" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- Data Nodes -->
    <circle cx="15" cy="170" r="4" fill="#38BDF8"/>
    <circle cx="105" cy="172" r="4" fill="#38BDF8"/>
    <circle cx="200" cy="160" r="4" fill="#818CF8"/>
    <circle cx="295" cy="110" r="4" fill="#818CF8"/>
    <circle cx="390" cy="45" r="6" fill="#C084FC" stroke="#161B22" stroke-width="2"/>
    <circle cx="465" cy="125" r="4.5" fill="#34D399"/>

    <!-- Month markers -->
    <g fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5" text-anchor="middle">
      <text x="15" y="196">Mar</text>
      <text x="105" y="196">May</text>
      <text x="200" y="196">Jul</text>
      <text x="295" y="196">Aug</text>
      <text x="390" y="196" fill="#C084FC" font-weight="700">Sep</text>
      <text x="465" y="196" fill="#34D399" font-weight="700">Nov</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="535" y1="20" x2="535" y2="195" stroke="#21262D" stroke-width="1"/>

  <!-- Right: Day of Week Rhythm Matrix -->
  <g transform="translate(565, 15)">
    <text x="0" y="15" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Weekly Rhythm
    </text>

    <!-- Bars -->
    <g transform="translate(0, 36)">
      <!-- Friday (Peak) -->
      <text x="0" y="12" fill="#E6EDF3" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Fri</text>
      <rect x="35" y="2" width="180" height="12" rx="4" fill="#38BDF8"/>
      <text x="225" y="12" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">160</text>

      <!-- Monday -->
      <text x="0" y="34" fill="#E6EDF3" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Mon</text>
      <rect x="35" y="24" width="150" height="12" rx="4" fill="#818CF8"/>
      <text x="195" y="34" fill="#818CF8" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">133</text>

      <!-- Thursday -->
      <text x="0" y="56" fill="#E6EDF3" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Thu</text>
      <rect x="35" y="46" width="128" height="12" rx="4" fill="#38BDF8"/>
      <text x="173" y="56" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">114</text>

      <!-- Wednesday -->
      <text x="0" y="78" fill="#E6EDF3" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Wed</text>
      <rect x="35" y="68" width="105" height="12" rx="4" fill="#A855F7"/>
      <text x="150" y="78" fill="#A855F7" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">93</text>

      <!-- Tuesday -->
      <text x="0" y="100" fill="#E6EDF3" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Tue</text>
      <rect x="35" y="90" width="85" height="12" rx="4" fill="#34D399"/>
      <text x="130" y="100" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">75</text>

      <!-- Saturday -->
      <text x="0" y="122" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="10.5">Sat</text>
      <rect x="35" y="112" width="45" height="12" rx="4" fill="#30363D"/>
      <text x="90" y="122" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="10">40</text>
    </g>
  </g>
</svg>"""
        self._save("activity-velocity-graph.svg", svg)

    def generate_sound_waveform(self):
        """Dynamic audio frequency spectrum representing coding cadence. Zero white boxes."""
        svg = """<svg width="880" height="74" viewBox="0 0 880 74" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Left: Audio Cadence Label -->
  <g transform="translate(0, 20)">
    <text x="0" y="14" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="800">
      CODING CADENCE &amp; RHYTHM WAVEFORM
    </text>
    <text x="0" y="32" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">
      Harmonic Particle Flow • 2,211 Velocity Pulses Across 2026
    </text>
  </g>

  <!-- Right: 44 Dynamic Audio Frequency Bars -->
  <g transform="translate(370, 15)">
    <rect x="0" y="18" width="6" height="24" rx="3" fill="#38BDF8"/>
    <rect x="11" y="10" width="6" height="32" rx="3" fill="#38BDF8"/>
    <rect x="22" y="22" width="6" height="20" rx="3" fill="#38BDF8"/>
    <rect x="33" y="6" width="6" height="36" rx="3" fill="#0284C7"/>
    <rect x="44" y="14" width="6" height="28" rx="3" fill="#0284C7"/>
    <rect x="55" y="4" width="6" height="38" rx="3" fill="#818CF8"/>
    <rect x="66" y="16" width="6" height="26" rx="3" fill="#818CF8"/>
    <rect x="77" y="8" width="6" height="34" rx="3" fill="#818CF8"/>
    <rect x="88" y="2" width="6" height="40" rx="3" fill="#6366F1"/>
    <rect x="99" y="12" width="6" height="30" rx="3" fill="#6366F1"/>
    <rect x="110" y="20" width="6" height="22" rx="3" fill="#C084FC"/>
    <rect x="121" y="6" width="6" height="36" rx="3" fill="#C084FC"/>
    <rect x="132" y="2" width="6" height="40" rx="3" fill="#A855F7"/>
    <rect x="143" y="15" width="6" height="27" rx="3" fill="#A855F7"/>
    <rect x="154" y="24" width="6" height="18" rx="3" fill="#C084FC"/>
    <rect x="165" y="8" width="6" height="34" rx="3" fill="#A855F7"/>
    <rect x="176" y="3" width="6" height="39" rx="3" fill="#9333EA"/>
    <rect x="187" y="18" width="6" height="24" rx="3" fill="#9333EA"/>
    <rect x="198" y="11" width="6" height="31" rx="3" fill="#C084FC"/>
    <rect x="209" y="5" width="6" height="37" rx="3" fill="#E879F9"/>
    <rect x="220" y="21" width="6" height="21" rx="3" fill="#34D399"/>
    <rect x="231" y="9" width="6" height="33" rx="3" fill="#34D399"/>
    <rect x="242" y="1" width="6" height="41" rx="3" fill="#10B981"/>
    <rect x="253" y="14" width="6" height="28" rx="3" fill="#10B981"/>
    <rect x="264" y="19" width="6" height="23" rx="3" fill="#059669"/>
    <rect x="275" y="7" width="6" height="35" rx="3" fill="#059669"/>
    <rect x="286" y="2" width="6" height="40" rx="3" fill="#34D399"/>
    <rect x="297" y="16" width="6" height="26" rx="3" fill="#34D399"/>
    <rect x="308" y="22" width="6" height="20" rx="3" fill="#6EE7B7"/>
    <rect x="319" y="10" width="6" height="32" rx="3" fill="#6EE7B7"/>
    <rect x="330" y="5" width="6" height="37" rx="3" fill="#38BDF8"/>
    <rect x="341" y="17" width="6" height="25" rx="3" fill="#38BDF8"/>
    <rect x="352" y="12" width="6" height="30" rx="3" fill="#818CF8"/>
    <rect x="363" y="4" width="6" height="38" rx="3" fill="#818CF8"/>
    <rect x="374" y="20" width="6" height="22" rx="3" fill="#C084FC"/>
    <rect x="385" y="8" width="6" height="34" rx="3" fill="#C084FC"/>
    <rect x="396" y="15" width="6" height="27" rx="3" fill="#34D399"/>
    <rect x="407" y="2" width="6" height="40" rx="3" fill="#34D399"/>
    <rect x="418" y="22" width="6" height="20" rx="3" fill="#10B981"/>
    <rect x="429" y="11" width="6" height="31" rx="3" fill="#10B981"/>
    <rect x="440" y="18" width="6" height="24" rx="3" fill="#38BDF8"/>
    <rect x="451" y="6" width="6" height="36" rx="3" fill="#38BDF8"/>
    <rect x="462" y="14" width="6" height="28" rx="3" fill="#C084FC"/>
    <rect x="473" y="23" width="6" height="19" rx="3" fill="#34D399"/>
  </g>
</svg>"""
        self._save("sound-waveform.svg", svg)

    def generate_languages_and_radar(self):
        """Visual Language Stack & Domain Rings. Zero white boxes."""
        svg = """<svg width="880" height="210" viewBox="0 0 880 210" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- Left Side: Concentric Rings for Technical Domains -->
  <g transform="translate(0, 15)">
    <text x="0" y="15" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Technical Domain Rings
    </text>

    <!-- Concentric Rings Center (105, 105) -->
    <g transform="translate(105, 105)">
      <!-- Ring 1: 3D & Shaders (95%) -->
      <circle r="72" stroke="#21262D" stroke-width="8" fill="none"/>
      <circle r="72" stroke="#38BDF8" stroke-width="8" stroke-dasharray="452" stroke-dashoffset="23" stroke-linecap="round" fill="none"/>

      <!-- Ring 2: EdTech Simulations (90%) -->
      <circle r="56" stroke="#21262D" stroke-width="8" fill="none"/>
      <circle r="56" stroke="#C084FC" stroke-width="8" stroke-dasharray="351" stroke-dashoffset="35" stroke-linecap="round" fill="none"/>

      <!-- Ring 3: Reactive Web (92%) -->
      <circle r="40" stroke="#21262D" stroke-width="8" fill="none"/>
      <circle r="40" stroke="#34D399" stroke-width="8" stroke-dasharray="251" stroke-dashoffset="20" stroke-linecap="round" fill="none"/>

      <!-- Ring 4: Mobile & Edge AI (85%) -->
      <circle r="24" stroke="#21262D" stroke-width="8" fill="none"/>
      <circle r="24" stroke="#FBBF24" stroke-width="8" stroke-dasharray="150" stroke-dashoffset="22" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Legend for Rings -->
    <g transform="translate(205, 52)" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
      <circle cx="6" cy="6" r="4.5" fill="#38BDF8"/><text x="18" y="10" fill="#E6EDF3">3D / SHADERS (95%)</text>
      <circle cx="6" cy="28" r="4.5" fill="#C084FC"/><text x="18" y="32" fill="#E6EDF3">EDTECH SIMULATIONS (90%)</text>
      <circle cx="6" cy="50" r="4.5" fill="#34D399"/><text x="18" y="54" fill="#E6EDF3">REACTIVE WEB (92%)</text>
      <circle cx="6" cy="72" r="4.5" fill="#FBBF24"/><text x="18" y="76" fill="#E6EDF3">MOBILE &amp; AI (85%)</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="440" y1="20" x2="440" y2="195" stroke="#21262D" stroke-width="1"/>

  <!-- Right Side: Verified Language Distribution -->
  <g transform="translate(470, 15)">
    <text x="0" y="15" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Verified Language Stack (58 Repositories)
    </text>

    <!-- Stack Bar -->
    <g transform="translate(0, 36)">
      <rect x="0" y="0" width="195" height="16" rx="4" fill="#38BDF8"/>
      <rect x="200" y="0" width="105" height="16" rx="4" fill="#FBBF24"/>
      <rect x="310" y="0" width="50" height="16" rx="4" fill="#818CF8"/>
      <rect x="365" y="0" width="30" height="16" rx="4" fill="#34D399"/>
      <rect x="400" y="0" width="10" height="16" rx="4" fill="#E879F9"/>
    </g>

    <!-- Legend & Percents -->
    <g transform="translate(0, 75)" font-family="'JetBrains Mono', monospace" font-size="10.5">
      <!-- TypeScript -->
      <g transform="translate(0, 0)">
        <circle cx="5" cy="5" r="4.5" fill="#38BDF8"/>
        <text x="16" y="9" fill="#E6EDF3" font-weight="700">TypeScript</text>
        <text x="16" y="24" fill="#7D8590" font-size="9.5">48.2% • 31 Repos</text>
      </g>
      <!-- JavaScript -->
      <g transform="translate(145, 0)">
        <circle cx="5" cy="5" r="4.5" fill="#FBBF24"/>
        <text x="16" y="9" fill="#E6EDF3" font-weight="700">JavaScript</text>
        <text x="16" y="24" fill="#7D8590" font-size="9.5">26.0% • 15 Repos</text>
      </g>
      <!-- Python -->
      <g transform="translate(290, 0)">
        <circle cx="5" cy="5" r="4.5" fill="#818CF8"/>
        <text x="16" y="9" fill="#E6EDF3" font-weight="700">Python</text>
        <text x="16" y="24" fill="#7D8590" font-size="9.5">12.5% • 5 Repos</text>
      </g>
      <!-- GLSL & Dart -->
      <g transform="translate(0, 48)">
        <circle cx="5" cy="5" r="4.5" fill="#34D399"/>
        <text x="16" y="9" fill="#E6EDF3" font-weight="700">GLSL / Shader</text>
        <text x="16" y="24" fill="#7D8590" font-size="9.5">8.1% • 4 Repos</text>
      </g>
      <g transform="translate(145, 48)">
        <circle cx="5" cy="5" r="4.5" fill="#E879F9"/>
        <text x="16" y="9" fill="#E6EDF3" font-weight="700">Dart (Flutter)</text>
        <text x="16" y="24" fill="#7D8590" font-size="9.5">5.2% • 2 Repos</text>
      </g>
    </g>
  </g>
</svg>"""
        self._save("languages-and-radar.svg", svg)

    def generate_project_previews(self):
        """Featured flagship works with dark translucent cards and zero white boxes."""
        svg = """<svg width="880" height="260" viewBox="0 0 880 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <text x="0" y="20" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
    Featured Flagship Works
  </text>

  <!-- Mockup Preview 1: Skippi Island 3D -->
  <g transform="translate(0, 35)">
    <rect width="280" height="215" rx="12" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <rect x="15" y="15" width="250" height="105" rx="8" fill="#0D1117" stroke="#21262D" stroke-width="1"/>
    <circle cx="140" cy="68" r="36" fill="#0369A1" fill-opacity="0.25"/>
    <path d="M 80 78 Q 140 45 200 78" stroke="#38BDF8" stroke-width="2" fill="none"/>
    <circle cx="140" cy="56" r="9" fill="#38BDF8"/>
    <text x="140" y="60" text-anchor="middle" fill="#0D1117" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="900">ROO</text>
    <text x="25" y="32" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="8.5">3D Viewport</text>
    
    <text x="15" y="142" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700">Skippi Island 3D</text>
    <text x="15" y="160" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Shark Tank simulation (Grades 4-9)</text>
    <text x="15" y="178" fill="#7DD3FC" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">poa-skippi.web.app</text>
    <rect x="15" y="188" width="65" height="18" rx="4" fill="#0F2D4A"/><text x="47" y="201" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Three.js</text>
    <rect x="85" y="188" width="60" height="18" rx="4" fill="#0F2D4A"/><text x="115" y="201" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Zustand</text>
  </g>

  <!-- Mockup Preview 2: Eat Better Next.js -->
  <g transform="translate(300, 35)">
    <rect width="280" height="215" rx="12" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <rect x="15" y="15" width="250" height="105" rx="8" fill="#0D1117" stroke="#21262D" stroke-width="1"/>
    <rect x="30" y="30" width="80" height="10" rx="2" fill="#34D399"/>
    <rect x="30" y="48" width="160" height="6" rx="2" fill="#059669" fill-opacity="0.4"/>
    <circle cx="180" cy="75" r="20" stroke="#34D399" stroke-width="2" fill="none"/>
    <path d="M 171 75 L 178 82 L 190 68" stroke="#34D399" stroke-width="2" fill="none"/>
    <text x="25" y="100" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="8.5">Next.js Turbopack</text>

    <text x="15" y="142" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700">Eat Better Internship</text>
    <text x="15" y="160" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Spatial Web &amp; Dynamic jsPDF</text>
    <text x="15" y="178" fill="#6EE7B7" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Active Nov 16, 2026</text>
    <rect x="15" y="188" width="65" height="18" rx="4" fill="#063827"/><text x="47" y="201" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Next.js</text>
    <rect x="85" y="188" width="55" height="18" rx="4" fill="#063827"/><text x="112" y="201" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">GSAP</text>
  </g>

  <!-- Mockup Preview 3: ZeePrep Mobile -->
  <g transform="translate(600, 35)">
    <rect width="280" height="215" rx="12" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <rect x="75" y="15" width="130" height="105" rx="10" fill="#0D1117" stroke="#7C3AED" stroke-width="1.5"/>
    <rect x="112" y="20" width="55" height="4" rx="2" fill="#7C3AED"/>
    <!-- Audio Waveform -->
    <line x1="95" y1="65" x2="95" y2="75" stroke="#C084FC" stroke-width="2"/>
    <line x1="105" y1="55" x2="105" y2="85" stroke="#C084FC" stroke-width="2"/>
    <line x1="115" y1="45" x2="115" y2="95" stroke="#C084FC" stroke-width="2"/>
    <line x1="125" y1="60" x2="125" y2="80" stroke="#C084FC" stroke-width="2"/>
    <line x1="135" y1="52" x2="135" y2="90" stroke="#C084FC" stroke-width="2"/>
    <line x1="145" y1="65" x2="145" y2="75" stroke="#C084FC" stroke-width="2"/>
    <text x="140" y="108" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="8">Expo SDK 52</text>

    <text x="15" y="142" fill="#C084FC" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="700">ZeePrep Mobile App</text>
    <text x="15" y="160" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Cross-platform phone client</text>
    <text x="15" y="178" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Firebase zeeprep01</text>
    <rect x="15" y="188" width="80" height="18" rx="4" fill="#2E1065"/><text x="55" y="201" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Expo Router</text>
    <rect x="100" y="188" width="60" height="18" rx="4" fill="#2E1065"/><text x="130" y="201" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Firebase</text>
  </g>
</svg>"""
        self._save("project-previews.svg", svg)

    def generate_portfolio_skills(self):
        """Top Portfolio Skills Matrix: Clean categorized skill ecosystem with zero white boxes."""
        svg = """<svg width="880" height="190" viewBox="0 0 880 190" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <text x="0" y="20" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" font-weight="800" letter-spacing="0.5">
    PORTFOLIO CORE TECHNICAL PROFICIENCIES
  </text>
  <text x="880" y="20" text-anchor="end" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">
    PROVEN ACROSS 58 REPOSITORIES
  </text>

  <!-- Pillar 1: Spatial 3D & Graphics -->
  <g transform="translate(0, 38)">
    <rect width="212" height="142" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <circle cx="20" cy="22" r="5" fill="#38BDF8"/>
    <text x="32" y="26" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">SPATIAL 3D &amp; GLSL</text>
    
    <g transform="translate(16, 42)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#E6EDF3">
      <text y="0">✦ Three.js &amp; R3F</text>
      <text y="22">✦ Custom GLSL Shaders</text>
      <text y="44">✦ GSAP Motion Physics</text>
      <text y="66">✦ WebGL Viewports</text>
      <text y="88" fill="#7DD3FC" font-size="10.5">Theatre.js Choreography</text>
    </g>
  </g>

  <!-- Pillar 2: Reactive Full-Stack -->
  <g transform="translate(222, 38)">
    <rect width="212" height="142" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <circle cx="20" cy="22" r="5" fill="#34D399"/>
    <text x="32" y="26" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">REACTIVE FULL-STACK</text>

    <g transform="translate(16, 42)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#E6EDF3">
      <text y="0">✦ Next.js (Turbopack)</text>
      <text y="22">✦ React 19 &amp; Vite 6</text>
      <text y="44">✦ Strict TypeScript</text>
      <text y="66">✦ Zustand &amp; TanStack</text>
      <text y="88" fill="#6EE7B7" font-size="10.5">Tailwind CSS Architecture</text>
    </g>
  </g>

  <!-- Pillar 3: Cross-Platform Mobile -->
  <g transform="translate(444, 38)">
    <rect width="212" height="142" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <circle cx="20" cy="22" r="5" fill="#C084FC"/>
    <text x="32" y="26" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">MOBILE APP DEV</text>

    <g transform="translate(16, 42)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#E6EDF3">
      <text y="0">✦ React Native Engine</text>
      <text y="22">✦ Expo SDK 52 Ecosystem</text>
      <text y="44">✦ File-Based Expo Router</text>
      <text y="66">✦ NativeWind Mobile UI</text>
      <text y="88" fill="#E9D5FF" font-size="10.5">Offline-First Cache</text>
    </g>
  </g>

  <!-- Pillar 4: Cloud & AI Intelligence -->
  <g transform="translate(668, 38)">
    <rect width="212" height="142" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1.2"/>
    <circle cx="20" cy="22" r="5" fill="#FBBF24"/>
    <text x="32" y="26" fill="#FBBF24" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">CLOUD &amp; EDGE AI</text>

    <g transform="translate(16, 42)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#E6EDF3">
      <text y="0">✦ Firebase Realtime DB</text>
      <text y="22">✦ Firebase Auth &amp; Hosting</text>
      <text y="44">✦ Groq LPU SDK &amp; LLMs</text>
      <text y="66">✦ Face-API Neural Vision</text>
      <text y="88" fill="#FDE68A" font-size="10.5">REST &amp; Telemetry Sockets</text>
    </g>
  </g>
</svg>"""
        self._save("portfolio-skills-matrix.svg", svg)

    def generate_mobile_phone_mockup(self):
        """Realistic smartphone mockup displaying ZeePrep Mobile App with portfolio architecture details."""
        svg = """<svg width="880" height="470" viewBox="0 0 880 470" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Phone Bezel Gradient -->
    <linearGradient id="phone_chassis" x1="0" y1="0" x2="250" y2="440" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="40%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <!-- Screen Glass Glow -->
    <linearGradient id="screen_glow" x1="0" y1="0" x2="210" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E1035"/>
      <stop offset="50%" stop-color="#0D1117"/>
      <stop offset="100%" stop-color="#090D16"/>
    </linearGradient>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas -->

  <!-- LEFT: REALISTIC SMARTPHONE MOCKUP -->
  <g transform="translate(25, 15)">
    <!-- Outer Phone Chassis with metallic drop shadow -->
    <rect x="0" y="0" width="240" height="440" rx="36" fill="url(#phone_chassis)" stroke="#475569" stroke-width="2.5"/>
    
    <!-- Side Buttons (Volume & Power) -->
    <rect x="-3" y="90" width="3" height="35" rx="1.5" fill="#475569"/>
    <rect x="-3" y="135" width="3" height="35" rx="1.5" fill="#475569"/>
    <rect x="240" y="110" width="3" height="48" rx="1.5" fill="#475569"/>

    <!-- Screen Bezel -->
    <rect x="10" y="10" width="220" height="420" rx="28" fill="url(#screen_glow)"/>

    <!-- Top Dynamic Island / Notch -->
    <rect x="80" y="18" width="80" height="18" rx="9" fill="#000000"/>
    <circle cx="94" cy="27" r="3.5" fill="#1E293B"/>
    <circle cx="148" cy="27" r="2.5" fill="#0284C7" fill-opacity="0.6"/>

    <!-- Status Bar -->
    <text x="24" y="31" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9" font-weight="700">9:41</text>
    <g transform="translate(192, 23)" fill="#E6EDF3">
      <!-- 5G Bars -->
      <rect x="0" y="5" width="2" height="4" rx="0.5"/>
      <rect x="3" y="3" width="2" height="6" rx="0.5"/>
      <rect x="6" y="1" width="2" height="8" rx="0.5"/>
      <rect x="9" y="0" width="2" height="9" rx="0.5"/>
      <!-- Battery -->
      <rect x="14" y="1" width="14" height="7" rx="2" fill="none" stroke="#E6EDF3" stroke-width="1"/>
      <rect x="15" y="2" width="10" height="5" rx="1" fill="#34D399"/>
    </g>

    <!-- APP UI: ZeePrep Mobile -->
    <!-- App Header -->
    <g transform="translate(22, 54)">
      <text x="0" y="14" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="900">⚡ ZeePrep</text>
      <rect x="120" y="0" width="76" height="18" rx="5" fill="#2E1065" stroke="#7C3AED" stroke-width="0.8"/>
      <text x="158" y="12" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">GRADE 8</text>
    </g>

    <!-- Daily Progress Card -->
    <g transform="translate(20, 82)">
      <rect width="200" height="72" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1"/>
      <text x="12" y="20" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700">Digital Olympiad Drill</text>
      <text x="12" y="34" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9">Topic: Algorithmic Logic &amp; Math</text>
      <!-- Progress Bar -->
      <rect x="12" y="46" width="125" height="6" rx="3" fill="#21262D"/>
      <rect x="12" y="46" width="110" height="6" rx="3" fill="#38BDF8"/>
      <text x="12" y="62" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">88% COMPLETED</text>
      
      <!-- Mini Circle Gauge on Right -->
      <circle cx="168" cy="36" r="18" stroke="#21262D" stroke-width="4" fill="none"/>
      <circle cx="168" cy="36" r="18" stroke="#34D399" stroke-width="4" stroke-dasharray="113" stroke-dashoffset="20" fill="none"/>
      <text x="168" y="40" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="800">22/25</text>
    </g>

    <!-- Question Module Card -->
    <g transform="translate(20, 164)">
      <rect width="200" height="175" rx="10" fill="#161B22" stroke="#30363D" stroke-width="1"/>
      <text x="12" y="18" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">QUESTION 14 OF 25</text>
      <text x="12" y="34" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600">Determine time complexity of BVH traversal:</text>
      
      <!-- Option A -->
      <rect x="12" y="48" width="176" height="24" rx="6" fill="#0D1117" stroke="#21262D"/>
      <text x="24" y="64" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9">A. O(N²)</text>

      <!-- Option B (Selected / Correct) -->
      <rect x="12" y="78" width="176" height="24" rx="6" fill="#063827" stroke="#059669" stroke-width="1.2"/>
      <text x="24" y="94" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">B. O(log N)  ✓</text>

      <!-- Option C -->
      <rect x="12" y="108" width="176" height="24" rx="6" fill="#0D1117" stroke="#21262D"/>
      <text x="24" y="124" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9">C. O(N log N)</text>

      <!-- Audio Prep Waveform Strip -->
      <g transform="translate(12, 140)">
        <rect width="176" height="22" rx="5" fill="#2E1065"/>
        <text x="10" y="15" fill="#C084FC" font-size="10">▶</text>
        <text x="26" y="15" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Audio Hint (0:45)</text>
        <!-- Mini sound waves -->
        <line x1="120" y1="8" x2="120" y2="14" stroke="#C084FC" stroke-width="1.5"/>
        <line x1="126" y1="5" x2="126" y2="17" stroke="#C084FC" stroke-width="1.5"/>
        <line x1="132" y1="9" x2="132" y2="13" stroke="#C084FC" stroke-width="1.5"/>
        <line x1="138" y1="6" x2="138" y2="16" stroke="#C084FC" stroke-width="1.5"/>
        <line x1="144" y1="10" x2="144" y2="12" stroke="#C084FC" stroke-width="1.5"/>
        <line x1="150" y1="7" x2="150" y2="15" stroke="#C084FC" stroke-width="1.5"/>
      </g>
    </g>

    <!-- Bottom App Tab Bar -->
    <g transform="translate(20, 350)">
      <rect width="200" height="34" rx="10" fill="#161B22" stroke="#21262D"/>
      <g transform="translate(15, 21)" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">
        <text x="0" y="0" fill="#38BDF8">● DRILL</text>
        <text x="45" y="0" fill="#7D8590">TESTS</text>
        <text x="95" y="0" fill="#7D8590">AUDIO</text>
        <text x="140" y="0" fill="#7D8590">PROFILE</text>
      </g>
    </g>

    <!-- Phone Home Indicator Bar -->
    <rect x="85" y="416" width="70" height="3.5" rx="1.75" fill="#475569"/>
  </g>

  <!-- RIGHT: PORTFOLIO MOBILE ARCHITECTURE SHOWCASE -->
  <g transform="translate(300, 35)">
    <!-- Section Badge -->
    <text x="0" y="15" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="11.5" font-weight="800" letter-spacing="1">
      MOBILE APPLICATION PORTFOLIO
    </text>

    <!-- Project Title -->
    <text x="0" y="52" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900">
      ZeePrep Mobile Platform
    </text>

    <!-- Subtitle -->
    <text x="0" y="80" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500">
      Cross-platform competitive exam &amp; interactive practice client built with Expo &amp; Firebase.
    </text>

    <!-- Highlights Cards -->
    <g transform="translate(0, 105)">
      <!-- Feature 1 -->
      <g transform="translate(0, 0)">
        <rect width="550" height="52" rx="8" fill="#161B22" stroke="#30363D" stroke-width="1"/>
        <circle cx="26" cy="26" r="12" fill="#2E1065"/>
        <text x="26" y="30" text-anchor="middle" fill="#C084FC" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">EX</text>
        <text x="50" y="24" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" font-weight="700">React Native &amp; Expo SDK 52 (Expo Router)</text>
        <text x="50" y="40" fill="#7D8590" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">File-based routing, native hardware acceleration, and dynamic sheet modals.</text>
      </g>

      <!-- Feature 2 -->
      <g transform="translate(0, 62)">
        <rect width="550" height="52" rx="8" fill="#161B22" stroke="#30363D" stroke-width="1"/>
        <circle cx="26" cy="26" r="12" fill="#0C2D48"/>
        <text x="26" y="30" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">FB</text>
        <text x="50" y="24" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" font-weight="700">Firebase Firestore &amp; Offline Persistence</text>
        <text x="50" y="40" fill="#7D8590" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Real-time score sync, auth token refresh, and instant local cache queries.</text>
      </g>

      <!-- Feature 3 -->
      <g transform="translate(0, 124)">
        <rect width="550" height="52" rx="8" fill="#161B22" stroke="#30363D" stroke-width="1"/>
        <circle cx="26" cy="26" r="12" fill="#063827"/>
        <text x="26" y="30" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">NW</text>
        <text x="50" y="24" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" font-weight="700">NativeWind &amp; Hermes Engine Optimization</text>
        <text x="50" y="40" fill="#7D8590" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Sub-second bundle execution, unified Tailwind tokens, and 60 FPS transitions.</text>
      </g>

      <!-- Feature 4 -->
      <g transform="translate(0, 186)">
        <rect width="550" height="52" rx="8" fill="#161B22" stroke="#30363D" stroke-width="1"/>
        <circle cx="26" cy="26" r="12" fill="#3D2005"/>
        <text x="26" y="30" text-anchor="middle" fill="#FBBF24" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">AU</text>
        <text x="50" y="24" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12.5" font-weight="700">Interactive Pedagogical Audio &amp; Timed Drills</text>
        <text x="50" y="40" fill="#7D8590" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Audio-guided practice modules, time-gated question sets, and streak analytics.</text>
      </g>
    </g>

    <!-- Bottom Tags / Actions -->
    <g transform="translate(0, 375)" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
      <rect x="0" y="0" width="165" height="28" rx="6" fill="#2E1065" stroke="#7C3AED" stroke-width="1"/>
      <text x="82" y="18" text-anchor="middle" fill="#E9D5FF">EXPO SDK 52</text>

      <rect x="175" y="0" width="165" height="28" rx="6" fill="#161B22" stroke="#30363D" stroke-width="1"/>
      <text x="257" y="18" text-anchor="middle" fill="#38BDF8">REACT NATIVE</text>

      <rect x="350" y="0" width="170" height="28" rx="6" fill="#161B22" stroke="#30363D" stroke-width="1"/>
      <text x="435" y="18" text-anchor="middle" fill="#34D399">FIREBASE CLOUD</text>
    </g>
  </g>
</svg>"""
        self._save("mobile-app-phone-mockup.svg", svg)