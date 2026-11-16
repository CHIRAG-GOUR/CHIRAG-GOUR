"""
Dynamic SVG Card Generator — Ultra Clean Minimalist Edition
Zero pill containers, high-contrast light theme typography, and pure visual telemetry.
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
        # NO PILL CONTAINERS: Clean, elegant, premium typography with minimal layout
        svg = f"""<svg width="880" height="200" viewBox="0 0 880 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="light_bg" x1="0" y1="0" x2="880" y2="200" gradientUnits="userSpaceOnUse">
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
    <filter id="card_shadow" x="-4" y="-2" width="888" height="208" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.05"/>
    </filter>
  </defs>

  <rect x="2" y="2" width="876" height="196" rx="16" fill="url(#light_bg)" filter="url(#card_shadow)"/>
  <rect x="2" y="2" width="876" height="196" rx="16" stroke="url(#light_border)" stroke-width="1.5"/>

  <!-- Subtle Blueprint Grid -->
  <g opacity="0.04" stroke="#0F172A" stroke-width="1">
    <line x1="40" y1="0" x2="40" y2="200"/>
    <line x1="220" y1="0" x2="220" y2="200"/>
    <line x1="440" y1="0" x2="440" y2="200"/>
    <line x1="660" y1="0" x2="660" y2="200"/>
    <line x1="840" y1="0" x2="840" y2="200"/>
    <line x1="0" y1="50" x2="880" y2="50"/>
    <line x1="0" y1="100" x2="880" y2="100"/>
    <line x1="0" y1="150" x2="880" y2="150"/>
  </g>

  <!-- Name & Professional Title -->
  <text x="40" y="65" fill="url(#title_gradient)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="900" letter-spacing="-0.8">
    CHIRAG GOUR
  </text>

  <text x="40" y="98" fill="#2563EB" font-family="'JetBrains Mono', Consolas, monospace" font-size="14" font-weight="700" letter-spacing="1.5">
    CREATIVE COMPUTING &amp; PEDAGOGICAL SYSTEMS ARCHITECT
  </text>

  <text x="40" y="132" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500">
    Spatial 3D Web • Serious Educational Games (POA Series) • Reactive Next.js &amp; Mobile
  </text>

  <!-- Clean Minimalist Specialty Indicators (NO PILL CONTAINERS) -->
  <g transform="translate(40, 162)" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
    <text x="0" y="0" fill="#0284C7">● SPATIAL 3D WEB</text>
    <text x="175" y="0" fill="#7C3AED">● EDTECH SIMULATIONS</text>
    <text x="380" y="0" fill="#059669">● NEXT.JS / REACT 19</text>
    <text x="575" y="0" fill="#D97706">● EXPO NATIVE MOBILE</text>
  </g>
</svg>"""
        self._save("identity-header.svg", svg)

    def generate_activity_waveform(self):
        svg = """<svg width="880" height="240" viewBox="0 0 880 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="act_bg" x1="0" y1="0" x2="880" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="wave_fill" x1="0" y1="50" x2="0" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#818CF8" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="wave_stroke" x1="50" y1="0" x2="550" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="80%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="236" rx="16" fill="url(#act_bg)"/>
  <rect x="2" y="2" width="876" height="236" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Left: Activity Waveform Graph -->
  <g transform="translate(30, 25)">
    <text x="15" y="15" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Commit Velocity Waveform (2026)
    </text>
    <text x="470" y="15" text-anchor="end" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">
      PEAK: 276 COMMITS (SEPTEMBER)
    </text>

    <!-- Grid lines -->
    <line x1="15" y1="55" x2="470" y2="55" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="15" y1="100" x2="470" y2="100" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="15" y1="145" x2="470" y2="145" stroke="#F1F5F9" stroke-width="1"/>
    <line x1="15" y1="180" x2="470" y2="180" stroke="#E2E8F0" stroke-width="1.5"/>

    <!-- Waveform Area -->
    <path d="M 25 170 C 60 165, 80 175, 110 172 C 140 170, 160 162, 200 160 C 230 155, 260 120, 290 110 C 330 100, 360 45, 385 45 C 410 45, 430 135, 455 125 L 455 180 L 25 180 Z" fill="url(#wave_fill)"/>

    <!-- Waveform Stroke -->
    <path d="M 25 170 C 60 165, 80 175, 110 172 C 140 170, 160 162, 200 160 C 230 155, 260 120, 290 110 C 330 100, 360 45, 385 45 C 410 45, 430 135, 455 125" stroke="url(#wave_stroke)" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- Data Nodes -->
    <circle cx="25" cy="170" r="4" fill="#0284C7"/>
    <circle cx="110" cy="172" r="4" fill="#0284C7"/>
    <circle cx="200" cy="160" r="4" fill="#2563EB"/>
    <circle cx="290" cy="110" r="4" fill="#2563EB"/>
    <circle cx="385" cy="45" r="6" fill="#7C3AED" stroke="#FFFFFF" stroke-width="2"/>
    <circle cx="455" cy="125" r="4.5" fill="#059669"/>

    <!-- Month markers -->
    <g fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9.5" text-anchor="middle">
      <text x="25" y="196">Mar</text>
      <text x="110" y="196">May</text>
      <text x="200" y="196">Jul</text>
      <text x="290" y="196">Aug</text>
      <text x="385" y="196" fill="#7C3AED" font-weight="700">Sep</text>
      <text x="455" y="196" fill="#059669" font-weight="700">Nov</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="535" y1="25" x2="535" y2="215" stroke="#E2E8F0" stroke-width="1"/>

  <!-- Right: Day of Week Rhythm Matrix -->
  <g transform="translate(565, 25)">
    <text x="0" y="15" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Weekly Rhythm
    </text>

    <!-- Bars -->
    <g transform="translate(0, 36)">
      <!-- Friday (Peak) -->
      <text x="0" y="12" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Fri</text>
      <rect x="35" y="2" width="180" height="12" rx="4" fill="#0284C7"/>
      <text x="225" y="12" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">160</text>

      <!-- Monday -->
      <text x="0" y="34" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Mon</text>
      <rect x="35" y="24" width="150" height="12" rx="4" fill="#2563EB"/>
      <text x="195" y="34" fill="#2563EB" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">133</text>

      <!-- Tuesday -->
      <text x="0" y="56" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10.5">Tue</text>
      <rect x="35" y="46" width="105" height="12" rx="4" fill="#7C3AED"/>
      <text x="150" y="56" fill="#7C3AED" font-family="'JetBrains Mono', monospace" font-size="10">94</text>

      <!-- Thursday -->
      <text x="0" y="78" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="10.5">Thu</text>
      <rect x="35" y="68" width="95" height="12" rx="4" fill="#9333EA"/>
      <text x="140" y="78" fill="#9333EA" font-family="'JetBrains Mono', monospace" font-size="10">83</text>

      <!-- Wednesday -->
      <text x="0" y="100" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10.5">Wed</text>
      <rect x="35" y="90" width="70" height="12" rx="4" fill="#A855F7"/>
      <text x="115" y="100" fill="#A855F7" font-family="'JetBrains Mono', monospace" font-size="10">61</text>

      <!-- Weekend -->
      <text x="0" y="122" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10.5">Sat</text>
      <rect x="35" y="112" width="45" height="12" rx="4" fill="#CBD5E1"/>
      <text x="90" y="122" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10">40</text>
    </g>

    <text x="0" y="195" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="9.5">
      Peak Velocity on Friday &amp; Monday
    </text>
  </g>
</svg>"""
        self._save("activity-velocity-graph.svg", svg)

    def generate_languages_and_radar(self):
        svg = """<svg width="880" height="230" viewBox="0 0 880 230" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rad_bg" x1="0" y1="0" x2="880" y2="230" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="226" rx="16" fill="url(#rad_bg)"/>
  <rect x="2" y="2" width="876" height="226" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Left: Concentric Skill Arc Radians -->
  <g transform="translate(35, 25)">
    <text x="0" y="15" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Technical Domain Rings
    </text>

    <!-- Concentric Rings Center (105, 105) -->
    <g transform="translate(105, 105)">
      <!-- Ring 1: 3D & Shaders (95%) -->
      <circle r="72" stroke="#E2E8F0" stroke-width="8" fill="none"/>
      <circle r="72" stroke="#0284C7" stroke-width="8" fill="none" stroke-dasharray="452" stroke-dashoffset="36" stroke-linecap="round"/>

      <!-- Ring 2: EdTech & POA (92%) -->
      <circle r="56" stroke="#E2E8F0" stroke-width="8" fill="none"/>
      <circle r="56" stroke="#7C3AED" stroke-width="8" fill="none" stroke-dasharray="351" stroke-dashoffset="35" stroke-linecap="round"/>

      <!-- Ring 3: React / Next.js (90%) -->
      <circle r="40" stroke="#E2E8F0" stroke-width="8" fill="none"/>
      <circle r="40" stroke="#059669" stroke-width="8" fill="none" stroke-dasharray="251" stroke-dashoffset="30" stroke-linecap="round"/>

      <!-- Ring 4: Mobile & Vision (85%) -->
      <circle r="24" stroke="#E2E8F0" stroke-width="8" fill="none"/>
      <circle r="24" stroke="#D97706" stroke-width="8" fill="none" stroke-dasharray="150" stroke-dashoffset="24" stroke-linecap="round"/>
    </g>

    <!-- Legend Beside Rings -->
    <g transform="translate(210, 48)">
      <circle cx="6" cy="6" r="5" fill="#0284C7"/>
      <text x="18" y="10" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Spatial 3D &amp; Shaders <tspan fill="#64748B">95%</tspan></text>

      <circle cx="6" cy="30" r="5" fill="#7C3AED"/>
      <text x="18" y="34" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">EdTech &amp; Serious Games <tspan fill="#64748B">92%</tspan></text>

      <circle cx="6" cy="54" r="5" fill="#059669"/>
      <text x="18" y="58" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Next.js &amp; React 19 <tspan fill="#64748B">90%</tspan></text>

      <circle cx="6" cy="78" r="5" fill="#D97706"/>
      <text x="18" y="82" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">Mobile Expo &amp; Vision <tspan fill="#64748B">85%</tspan></text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="495" y1="25" x2="495" y2="205" stroke="#E2E8F0" stroke-width="1"/>

  <!-- Right: Language Distribution Bars -->
  <g transform="translate(525, 25)">
    <text x="0" y="15" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
      Verified Language Distribution
    </text>

    <!-- Multi-Segment Color Bar -->
    <g transform="translate(0, 36)">
      <rect x="0" y="0" width="170" height="12" rx="4" fill="#3178C6"/>
      <rect x="174" y="0" width="80" height="12" rx="4" fill="#F7DF1E"/>
      <rect x="258" y="0" width="40" height="12" rx="4" fill="#5686F5"/>
      <rect x="302" y="0" width="18" height="12" rx="4" fill="#E34F26"/>
    </g>

    <!-- Language Breakdown List -->
    <g transform="translate(0, 70)">
      <circle cx="6" cy="6" r="4.5" fill="#3178C6"/>
      <text x="16" y="10" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">TypeScript <tspan fill="#64748B" font-weight="500">54.4% (31 Repos)</tspan></text>

      <circle cx="6" cy="28" r="4.5" fill="#F7DF1E"/>
      <text x="16" y="32" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">JavaScript <tspan fill="#64748B" font-weight="500">26.3% (15 Repos)</tspan></text>

      <circle cx="6" cy="50" r="4.5" fill="#5686F5"/>
      <text x="16" y="54" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">GLSL / Shaders &amp; 3D <tspan fill="#64748B" font-weight="500">14.0%</tspan></text>

      <circle cx="6" cy="72" r="4.5" fill="#E34F26"/>
      <text x="16" y="76" fill="#0F172A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">HTML &amp; Native Styles <tspan fill="#64748B" font-weight="500">5.3%</tspan></text>
    </g>
  </g>
</svg>"""
        self._save("languages-and-radar.svg", svg)

    def generate_project_previews(self):
        svg = """<svg width="880" height="300" viewBox="0 0 880 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="prev_bg" x1="0" y1="0" x2="880" y2="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="296" rx="16" fill="url(#prev_bg)"/>
  <rect x="2" y="2" width="876" height="296" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <text x="35" y="35" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">
    Featured Flagship Works
  </text>

  <!-- Mockup Preview 1: Skippi Island 3D -->
  <g transform="translate(35, 50)">
    <rect width="255" height="225" rx="12" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="1.2"/>
    <rect x="15" y="15" width="225" height="115" rx="8" fill="#0C1B2A"/>
    <circle cx="127" cy="75" r="40" fill="#0369A1" fill-opacity="0.2"/>
    <path d="M 65 85 Q 127 50 190 85" stroke="#38BDF8" stroke-width="2" fill="none"/>
    <circle cx="127" cy="62" r="9" fill="#38BDF8"/>
    <text x="127" y="66" text-anchor="middle" fill="#0C1B2A" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="900">ROO</text>
    <text x="25" y="32" fill="#BAE6FD" font-family="'JetBrains Mono', monospace" font-size="8.5">3D Viewport</text>
    
    <text x="15" y="150" fill="#0369A1" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Skippi Island 3D</text>
    <text x="15" y="168" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Shark Tank simulation (Grades 4-9)</text>
    <text x="15" y="186" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">poa-skippi.web.app</text>
    <rect x="15" y="196" width="65" height="18" rx="4" fill="#E0F2FE"/><text x="47" y="209" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Three.js</text>
    <rect x="85" y="196" width="60" height="18" rx="4" fill="#E0F2FE"/><text x="115" y="209" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Zustand</text>
  </g>

  <!-- Mockup Preview 2: Eat Better Next.js -->
  <g transform="translate(312, 50)">
    <rect width="255" height="225" rx="12" fill="#ECFDF5" stroke="#A7F3D0" stroke-width="1.2"/>
    <rect x="15" y="15" width="225" height="115" rx="8" fill="#06281E"/>
    <rect x="30" y="30" width="80" height="10" rx="2" fill="#34D399"/>
    <rect x="30" y="48" width="160" height="6" rx="2" fill="#059669" fill-opacity="0.4"/>
    <circle cx="165" cy="85" r="20" stroke="#34D399" stroke-width="2" fill="none"/>
    <path d="M 156 85 L 163 92 L 175 78" stroke="#34D399" stroke-width="2" fill="none"/>
    <text x="25" y="110" fill="#A7F3D0" font-family="'JetBrains Mono', monospace" font-size="8.5">Next.js Turbopack</text>

    <text x="15" y="150" fill="#047857" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">Eat Better Internship</text>
    <text x="15" y="168" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Spatial Web &amp; Dynamic jsPDF</text>
    <text x="15" y="186" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Active Nov 16, 2026</text>
    <rect x="15" y="196" width="65" height="18" rx="4" fill="#D1FAE5"/><text x="47" y="209" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Next.js</text>
    <rect x="85" y="196" width="55" height="18" rx="4" fill="#D1FAE5"/><text x="112" y="209" text-anchor="middle" fill="#065F46" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">GSAP</text>
  </g>

  <!-- Mockup Preview 3: ZeePrep Mobile -->
  <g transform="translate(590, 50)">
    <rect width="255" height="225" rx="12" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1.2"/>
    <rect x="65" y="15" width="125" height="115" rx="10" fill="#1E1035" stroke="#7C3AED" stroke-width="1.5"/>
    <rect x="100" y="20" width="55" height="4" rx="2" fill="#7C3AED"/>
    <!-- Audio Waveform -->
    <line x1="85" y1="72" x2="85" y2="82" stroke="#C084FC" stroke-width="2"/>
    <line x1="95" y1="62" x2="95" y2="92" stroke="#C084FC" stroke-width="2"/>
    <line x1="105" y1="52" x2="105" y2="102" stroke="#C084FC" stroke-width="2"/>
    <line x1="115" y1="66" x2="115" y2="88" stroke="#C084FC" stroke-width="2"/>
    <line x1="125" y1="58" x2="125" y2="96" stroke="#C084FC" stroke-width="2"/>
    <line x1="135" y1="72" x2="135" y2="82" stroke="#C084FC" stroke-width="2"/>
    <text x="127" y="118" text-anchor="middle" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="8">Expo SDK 52</text>

    <text x="15" y="150" fill="#7E22CE" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700">ZeePrep Mobile App</text>
    <text x="15" y="168" fill="#475569" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11">Cross-platform phone client</text>
    <text x="15" y="186" fill="#9333EA" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">Firebase zeeprep01</text>
    <rect x="15" y="196" width="80" height="18" rx="4" fill="#F3E8FF"/><text x="55" y="209" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Expo Router</text>
    <rect x="100" y="196" width="60" height="18" rx="4" fill="#F3E8FF"/><text x="130" y="209" text-anchor="middle" fill="#6B21A8" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">Firebase</text>
  </g>
</svg>"""
        self._save("project-previews.svg", svg)

    def generate_achievement_trophies(self):
        """Minimalist gold and silver achievement icons for verified milestones. Zero text walls — pure visual badges."""
        svg = """<svg width="880" height="120" viewBox="0 0 880 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card_bg" x1="0" y1="0" x2="880" y2="120" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
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
    <!-- Platinum / Cyan Glow -->
    <linearGradient id="cyan_grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#BAE6FD"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="116" rx="16" fill="url(#card_bg)"/>
  <rect x="2" y="2" width="876" height="116" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Badge 1: 58+ Repositories (Gold) -->
  <g transform="translate(48, 16)">
    <circle cx="42" cy="42" r="34" fill="#FFFBEB" stroke="url(#gold_grad)" stroke-width="2.5"/>
    <circle cx="42" cy="42" r="28" fill="#FEF3C7" fill-opacity="0.4"/>
    <!-- Trophy Icon -->
    <path d="M 33 28 L 51 28 L 48 44 C 47 48 44 50 42 50 C 40 50 37 48 36 44 Z" fill="url(#gold_grad)"/>
    <path d="M 42 50 L 42 56 M 36 56 L 48 56" stroke="url(#gold_grad)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Handles -->
    <path d="M 33 32 C 28 32 28 40 34 40 M 51 32 C 56 32 56 40 50 40" stroke="url(#gold_grad)" stroke-width="1.8" fill="none"/>
    <text x="42" y="88" text-anchor="middle" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">58+ REPOS</text>
    <text x="42" y="100" text-anchor="middle" fill="#92400E" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">GOLD TIER</text>
  </g>

  <!-- Badge 2: 2,211+ Commits (Gold) -->
  <g transform="translate(216, 16)">
    <circle cx="42" cy="42" r="34" fill="#FFFBEB" stroke="url(#gold_grad)" stroke-width="2.5"/>
    <circle cx="42" cy="42" r="28" fill="#FEF3C7" fill-opacity="0.4"/>
    <!-- Lightning Velocity Icon -->
    <path d="M 44 26 L 33 42 L 41 42 L 39 58 L 52 39 L 44 39 Z" fill="url(#gold_grad)"/>
    <text x="42" y="88" text-anchor="middle" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">2,211+ COMMITS</text>
    <text x="42" y="100" text-anchor="middle" fill="#92400E" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">VELOCITY ELITE</text>
  </g>

  <!-- Badge 3: Multi-Language Polyglot (Silver) -->
  <g transform="translate(384, 16)">
    <circle cx="42" cy="42" r="34" fill="#F8FAFC" stroke="url(#silver_grad)" stroke-width="2.5"/>
    <circle cx="42" cy="42" r="28" fill="#F1F5F9" fill-opacity="0.5"/>
    <!-- Code Brackets Icon -->
    <path d="M 34 32 L 27 42 L 34 52 M 50 32 L 57 42 L 50 52 M 45 28 L 39 56" stroke="url(#silver_grad)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <text x="42" y="88" text-anchor="middle" fill="#475569" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">POLYGLOT</text>
    <text x="42" y="100" text-anchor="middle" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">SILVER ARCHITECT</text>
  </g>

  <!-- Badge 4: Spatial 3D & GLSL (Gold) -->
  <g transform="translate(552, 16)">
    <circle cx="42" cy="42" r="34" fill="#F0F9FF" stroke="url(#cyan_grad)" stroke-width="2.5"/>
    <circle cx="42" cy="42" r="28" fill="#E0F2FE" fill-opacity="0.5"/>
    <!-- 3D Cube Icon -->
    <path d="M 42 27 L 55 34 L 42 41 L 29 34 Z" fill="#38BDF8"/>
    <path d="M 29 35 L 42 42 L 42 57 L 29 50 Z" fill="#0284C7"/>
    <path d="M 55 35 L 42 42 L 42 57 L 55 50 Z" fill="#0369A1"/>
    <text x="42" y="88" text-anchor="middle" fill="#0369A1" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">3D &amp; SHADERS</text>
    <text x="42" y="100" text-anchor="middle" fill="#0284C7" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">THREE.JS / GLSL</text>
  </g>

  <!-- Badge 5: Serious Games Creator (Silver) -->
  <g transform="translate(720, 16)">
    <circle cx="42" cy="42" r="34" fill="#FAF5FF" stroke="#A855F7" stroke-width="2.5"/>
    <circle cx="42" cy="42" r="28" fill="#F3E8FF" fill-opacity="0.5"/>
    <!-- Controller Icon -->
    <rect x="28" y="33" width="28" height="18" rx="6" fill="#9333EA"/>
    <circle cx="34" cy="42" r="2" fill="#FFFFFF"/>
    <circle cx="50" cy="39" r="1.5" fill="#F472B6"/>
    <circle cx="47" cy="44" r="1.5" fill="#38BDF8"/>
    <text x="42" y="88" text-anchor="middle" fill="#7E22CE" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">POA EDTECH</text>
    <text x="42" y="100" text-anchor="middle" fill="#9333EA" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="600" letter-spacing="0.5">GAME LEAD</text>
  </g>
</svg>"""
        self._save("trophies-and-achievements.svg", svg)

    def generate_developer_xp_streak(self):
        """Visual Developer XP & Streak Bar: Clean progress bar tracking current coding consistency and streak score across 2026."""
        svg = """<svg width="880" height="98" viewBox="0 0 880 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="xp_bg" x1="0" y1="0" x2="880" y2="98" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="bar_grad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="45%" stop-color="#2563EB"/>
      <stop offset="80%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="94" rx="16" fill="url(#xp_bg)"/>
  <rect x="2" y="2" width="876" height="94" rx="16" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Left: Level Shield -->
  <g transform="translate(30, 20)">
    <rect width="64" height="58" rx="10" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5"/>
    <text x="32" y="24" text-anchor="middle" fill="#1D4ED8" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">LEVEL</text>
    <text x="32" y="48" text-anchor="middle" fill="#1E40AF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="22" font-weight="900">42</text>
  </g>

  <!-- Middle: XP Bar & Stats -->
  <g transform="translate(110, 24)">
    <text x="0" y="12" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="800">
      DEVELOPER XP &amp; SPRINT PROGRESSION
    </text>
    <text x="560" y="12" text-anchor="end" fill="#2563EB" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">
      2,211 / 2,500 XP (88.4%)
    </text>

    <!-- Progress Track -->
    <rect x="0" y="22" width="560" height="14" rx="7" fill="#E2E8F0"/>
    <!-- Filled Gradient Bar -->
    <rect x="0" y="22" width="495" height="14" rx="7" fill="url(#bar_grad)"/>

    <!-- Bottom Metric Tags -->
    <text x="0" y="48" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">
      CADENCE: 94% CONSISTENCY
    </text>
    <text x="210" y="48" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">
      +276 COMMITS PEAK VELOCITY
    </text>
    <text x="440" y="48" fill="#7C3AED" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">
      NEXT: LVL 43 MASTER
    </text>
  </g>

  <!-- Right: Streak Flame -->
  <g transform="translate(710, 20)">
    <rect width="138" height="58" rx="10" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5"/>
    <text x="24" y="28" font-size="18">🔥</text>
    <text x="52" y="26" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">STREAK</text>
    <text x="52" y="45" fill="#D97706" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" font-weight="700">100% SPRINT</text>
  </g>
</svg>"""
        self._save("developer-xp-streak.svg", svg)

    def generate_commit_ticker(self, commit_hash: str = "b710063", repo_name: str = "poa-skippi", commit_msg: str = "deploy: live 3D Shark Tank case study on Firebase"):
        """Live 'Currently Building' Commit Ticker: A subtle 1-line terminal ticker displaying latest commit and repository."""
        svg = f"""<svg width="880" height="46" viewBox="0 0 880 46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ticker_bg" x1="0" y1="0" x2="880" y2="46" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="42" rx="10" fill="url(#ticker_bg)"/>
  <rect x="2" y="2" width="876" height="42" rx="10" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Live Pulse Dot -->
  <circle cx="28" cy="23" r="4.5" fill="#10B981">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
  </circle>

  <!-- Terminal Label -->
  <text x="44" y="27" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="0.5">
    CURRENTLY BUILDING //
  </text>

  <!-- Repo Badge -->
  <text x="215" y="27" fill="#0284C7" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">
    [{repo_name}]
  </text>

  <!-- Commit Hash -->
  <text x="345" y="27" fill="#7C3AED" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">
    {commit_hash}
  </text>

  <!-- Commit Message -->
  <text x="425" y="27" fill="#334155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="500">
    {commit_msg}
  </text>

  <!-- Right status -->
  <text x="850" y="27" text-anchor="end" fill="#059669" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">
    ● LIVE
  </text>
</svg>"""
        self._save("commit-ticker.svg", svg)

    def generate_sound_waveform(self):
        """Interactive Particle Flow / Sound Waveform: Visual audio frequency spectrum & flow wave representing coding cadence."""
        svg = """<svg width="880" height="84" viewBox="0 0 880 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sound_bg" x1="0" y1="0" x2="880" y2="84" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F8FAFC"/>
    </linearGradient>
    <linearGradient id="spectrum_grad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="35%" stop-color="#2563EB"/>
      <stop offset="70%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="876" height="80" rx="14" fill="url(#sound_bg)"/>
  <rect x="2" y="2" width="876" height="80" rx="14" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Left: Audio Cadence Label -->
  <g transform="translate(32, 28)">
    <text x="0" y="12" fill="#0F172A" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="800">
      CODING CADENCE &amp; RHYTHM WAVEFORM
    </text>
    <text x="0" y="30" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">
      Harmonic Particle Flow • 2,211 Velocity Pulses
    </text>
  </g>

  <!-- Right: 38 Dynamic Audio Frequency Bars -->
  <g transform="translate(360, 20)">
    <!-- Bar 1 -->
    <rect x="0" y="18" width="6" height="24" rx="3" fill="#0284C7"/>
    <rect x="11" y="10" width="6" height="32" rx="3" fill="#0284C7"/>
    <rect x="22" y="22" width="6" height="20" rx="3" fill="#0284C7"/>
    <rect x="33" y="6" width="6" height="36" rx="3" fill="#0369A1"/>
    <rect x="44" y="14" width="6" height="28" rx="3" fill="#0369A1"/>
    <rect x="55" y="4" width="6" height="38" rx="3" fill="#2563EB"/>
    <rect x="66" y="16" width="6" height="26" rx="3" fill="#2563EB"/>
    <rect x="77" y="8" width="6" height="34" rx="3" fill="#2563EB"/>
    <rect x="88" y="2" width="6" height="40" rx="3" fill="#1D4ED8"/>
    <rect x="99" y="12" width="6" height="30" rx="3" fill="#1D4ED8"/>
    <rect x="110" y="20" width="6" height="22" rx="3" fill="#7C3AED"/>
    <rect x="121" y="6" width="6" height="36" rx="3" fill="#7C3AED"/>
    <rect x="132" y="2" width="6" height="40" rx="3" fill="#6D28D9"/>
    <rect x="143" y="15" width="6" height="27" rx="3" fill="#6D28D9"/>
    <rect x="154" y="24" width="6" height="18" rx="3" fill="#7C3AED"/>
    <rect x="165" y="8" width="6" height="34" rx="3" fill="#8B5CF6"/>
    <rect x="176" y="3" width="6" height="39" rx="3" fill="#9333EA"/>
    <rect x="187" y="18" width="6" height="24" rx="3" fill="#9333EA"/>
    <rect x="198" y="11" width="6" height="31" rx="3" fill="#A855F7"/>
    <rect x="209" y="5" width="6" height="37" rx="3" fill="#C084FC"/>
    <rect x="220" y="21" width="6" height="21" rx="3" fill="#10B981"/>
    <rect x="231" y="9" width="6" height="33" rx="3" fill="#10B981"/>
    <rect x="242" y="1" width="6" height="41" rx="3" fill="#059669"/>
    <rect x="253" y="14" width="6" height="28" rx="3" fill="#059669"/>
    <rect x="264" y="19" width="6" height="23" rx="3" fill="#047857"/>
    <rect x="275" y="7" width="6" height="35" rx="3" fill="#047857"/>
    <rect x="286" y="2" width="6" height="40" rx="3" fill="#10B981"/>
    <rect x="297" y="16" width="6" height="26" rx="3" fill="#10B981"/>
    <rect x="308" y="22" width="6" height="20" rx="3" fill="#34D399"/>
    <rect x="319" y="10" width="6" height="32" rx="3" fill="#34D399"/>
    <rect x="330" y="5" width="6" height="37" rx="3" fill="#0284C7"/>
    <rect x="341" y="17" width="6" height="25" rx="3" fill="#0284C7"/>
    <rect x="352" y="12" width="6" height="30" rx="3" fill="#2563EB"/>
    <rect x="363" y="4" width="6" height="38" rx="3" fill="#2563EB"/>
    <rect x="374" y="20" width="6" height="22" rx="3" fill="#7C3AED"/>
    <rect x="385" y="8" width="6" height="34" rx="3" fill="#7C3AED"/>
    <rect x="396" y="15" width="6" height="27" rx="3" fill="#10B981"/>
    <rect x="407" y="2" width="6" height="40" rx="3" fill="#10B981"/>
    <rect x="418" y="22" width="6" height="20" rx="3" fill="#059669"/>
    <rect x="429" y="11" width="6" height="31" rx="3" fill="#059669"/>
    <rect x="440" y="18" width="6" height="24" rx="3" fill="#0284C7"/>
    <rect x="451" y="6" width="6" height="36" rx="3" fill="#0284C7"/>
    <rect x="462" y="14" width="6" height="28" rx="3" fill="#7C3AED"/>
    <rect x="473" y="23" width="6" height="19" rx="3" fill="#10B981"/>
  </g>
</svg>"""
        self._save("sound-waveform.svg", svg)
