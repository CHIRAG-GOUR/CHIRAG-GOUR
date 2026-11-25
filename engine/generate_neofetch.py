"""
Retro Developer Neofetch Terminal Bio Generator
Generates an authentic macOS/Linux neofetch sysinfo terminal widget SVG
customized for Chirag Gour's developer persona with glowing cyan/emerald typography,
macOS traffic lights, ASCII quantum-core logo, live status indicators, and 83 source repositories.
"""

import os
import xml.etree.ElementTree as ET

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

def generate_neofetch_svg(output_path: str = None) -> str:
    if output_path is None:
        output_path = os.path.join(OUTPUT_DIR, "developer-neofetch-bio.svg")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    width = 880
    height = 360

    # Color definitions
    # Emerald: #10B981, Cyan: #38BDF8, Slate: #94A3B8, Dark: #0D1117, Border: #30363D
    # Gold: #F59E0B, Purple: #A855F7, White: #F1F5F9

    svg_content = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="nf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1117" stop-opacity="0.96"/>
      <stop offset="50%" stop-color="#121824" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#0A0E17" stop-opacity="0.96"/>
    </linearGradient>

    <!-- Header Gradient -->
    <linearGradient id="nf-header" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#1A2234"/>
    </linearGradient>

    <!-- Glowing Cyan Accent -->
    <linearGradient id="nf-cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>

    <!-- ASCII Hologram Gradient -->
    <linearGradient id="nf-ascii-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="35%" stop-color="#60A5FA"/>
      <stop offset="70%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>

    <linearGradient id="nf-gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#FCD34D"/>
    </linearGradient>

    <!-- Subtle Scanline Pattern -->
    <pattern id="nf-scanlines" width="100" height="4" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="100" y2="0" stroke="#FFFFFF" stroke-opacity="0.02" stroke-width="1"/>
    </pattern>

    <style>
      <![CDATA[
        @keyframes nfBlink {{
          0%, 49% {{ opacity: 1; }}
          50%, 100% {{ opacity: 0; }}
        }}
        @keyframes nfPulseDot {{
          0%, 100% {{ opacity: 1; transform: scale(1); }}
          50% {{ opacity: 0.35; transform: scale(0.85); }}
        }}
        @keyframes nfScanDrift {{
          0% {{ transform: translateY(0px); }}
          100% {{ transform: translateY(360px); }}
        }}
        .nf-cursor {{
          animation: nfBlink 1.05s infinite;
        }}
        .nf-dot {{
          animation: nfPulseDot 2s ease-in-out infinite;
          transform-origin: 840px 20px;
        }}
        .nf-code {{
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
        }}
        .nf-sans {{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }}
      ]]>
    </style>
  </defs>

  <!-- ================= WINDOW CONTAINER ================= -->
  <!-- Outer Shadow & Glow -->
  <rect x="1" y="1" width="{width - 2}" height="{height - 2}" rx="14" fill="url(#nf-bg)" stroke="#30363D" stroke-width="1.2"/>
  <rect x="0" y="0" width="{width}" height="{height}" rx="14" fill="url(#nf-scanlines)" pointer-events="none"/>

  <!-- Top Ambient Glow Edge -->
  <line x1="20" y1="1" x2="{width - 20}" y2="1" stroke="url(#nf-cyan-glow)" stroke-width="1.8" stroke-opacity="0.7"/>

  <!-- ================= TITLE BAR ================= -->
  <path d="M 1 15 C 1 7.268 7.268 1 15 1 L {width - 15} 1 C {width - 7.268} 1 {width - 1} 7.268 {width - 1} 15 L {width - 1} 38 L 1 38 Z" fill="url(#nf-header)"/>
  <line x1="1" y1="38" x2="{width - 1}" y2="38" stroke="#30363D" stroke-width="1"/>

  <!-- macOS Traffic Light Buttons -->
  <g transform="translate(18, 14)">
    <!-- Red / Close -->
    <circle cx="6" cy="6" r="5.5" fill="#FF5F56" stroke="#E0443E" stroke-width="0.8"/>
    <!-- Yellow / Minimize -->
    <circle cx="24" cy="6" r="5.5" fill="#FFBD2E" stroke="#DEA123" stroke-width="0.8"/>
    <!-- Green / Maximize -->
    <circle cx="42" cy="6" r="5.5" fill="#27C93F" stroke="#1AAB29" stroke-width="0.8"/>
  </g>

  <!-- Centered Terminal Window Title -->
  <g transform="translate({width // 2}, 24)">
    <text text-anchor="middle" fill="#8B949E" class="nf-code" font-size="11.5" font-weight="600" letter-spacing="0.4">
      chirag@quantum-core: ~ (zsh)
    </text>
  </g>

  <!-- Live Node Status on Top Right -->
  <g transform="translate({width - 170}, 24)">
    <circle cx="10" cy="-4" r="4" fill="#10B981" class="nf-dot"/>
    <text x="20" y="0" fill="#38BDF8" class="nf-code" font-size="10" font-weight="700" letter-spacing="0.6">LIVE ARCHITECT</text>
  </g>

  <!-- ================= TERMINAL BODY ================= -->

  <!-- Left Column: ASCII Art Quantum Engine Logo (x=30 to x=310) -->
  <g transform="translate(30, 56)">
    <!-- Quantum Cyber Core Frame -->
    <rect x="0" y="0" width="275" height="280" rx="10" fill="#090D14" fill-opacity="0.75" stroke="#21262D" stroke-width="1"/>
    
    <!-- Accent Corner Glyphs -->
    <path d="M 6 16 L 6 6 L 16 6" stroke="#38BDF8" stroke-width="1.5" fill="none"/>
    <path d="M 269 16 L 269 6 L 259 6" stroke="#38BDF8" stroke-width="1.5" fill="none"/>
    <path d="M 6 264 L 6 274 L 16 274" stroke="#10B981" stroke-width="1.5" fill="none"/>
    <path d="M 269 264 L 269 274 L 259 274" stroke="#10B981" stroke-width="1.5" fill="none"/>

    <!-- ASCII Art Text Block -->
    <text x="137" y="32" text-anchor="middle" fill="url(#nf-ascii-grad)" class="nf-code" font-size="10" font-weight="800" line-height="1.2">
      <tspan x="137" dy="0">  ██████╗ ██╗  ██╗██╗██████╗  █████╗  ██████╗ </tspan>
      <tspan x="137" dy="13"> ██╔════╝ ██║  ██║██║██╔══██╗██╔══██╗██╔════╝ </tspan>
      <tspan x="137" dy="13"> ██║      ███████║██║██████╔╝███████║██║  ███╗</tspan>
      <tspan x="137" dy="13"> ██║      ██╔══██║██║██╔══██╗██╔══██║██║   ██║</tspan>
      <tspan x="137" dy="13"> ╚██████╗ ██║  ██║██║██║  ██║██║  ██║╚██████╔╝</tspan>
      <tspan x="137" dy="13">  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ </tspan>
    </text>

    <!-- Sub-ASCII Isometric Hologram Box -->
    <g transform="translate(137, 138)">
      <!-- Isometric Cube Wireframe -->
      <polygon points="0,-24 24,-10 0,4 -24,-10" fill="#38BDF8" fill-opacity="0.12" stroke="#38BDF8" stroke-width="1.2"/>
      <polygon points="-24,-10 0,4 0,30 -24,16" fill="#818CF8" fill-opacity="0.1" stroke="#818CF8" stroke-width="1.2"/>
      <polygon points="0,4 24,-10 24,16 0,30" fill="#34D399" fill-opacity="0.1" stroke="#34D399" stroke-width="1.2"/>
      <!-- Internal Quantum Orb -->
      <circle cx="0" cy="3" r="5" fill="#FACC15">
        <animate attributeName="r" values="4;6.5;4" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <!-- Orbital Ring -->
      <ellipse cx="0" cy="3" rx="36" ry="12" fill="none" stroke="#38BDF8" stroke-width="1" stroke-dasharray="3,3" transform="rotate(-15)"/>
    </g>

    <!-- System Telemetry Footnote in Left Panel -->
    <g transform="translate(16, 202)" class="nf-code" font-size="9" fill="#8B949E">
      <text x="0" y="0"><tspan fill="#38BDF8" font-weight="700">TARGET:</tspan> Darwin / Linux / Web</text>
      <text x="0" y="15"><tspan fill="#38BDF8" font-weight="700">ENGINE:</tspan> Turbopack + R3F + GLSL</text>
      <text x="0" y="30"><tspan fill="#38BDF8" font-weight="700">STATUS:</tspan> Production Active (0 Errors)</text>
      <text x="0" y="45"><tspan fill="#10B981" font-weight="700">SECURITY:</tspan> GPG-Signed Commits</text>
      <text x="0" y="60"><tspan fill="#F59E0B" font-weight="700">CITADELS:</tspan> 83 Source Workspaces</text>
    </g>
  </g>

  <!-- Vertical Divider Line -->
  <line x1="322" y1="52" x2="322" y2="340" stroke="#21262D" stroke-width="1"/>

  <!-- Right Column: Sysinfo Metadata (x=340 to x=850) -->
  <g transform="translate(342, 60)">
    <!-- Shell Command Prompt -->
    <g class="nf-code" font-size="12.5">
      <text x="0" y="14">
        <tspan fill="#10B981" font-weight="800">chirag</tspan><tspan fill="#8B949E">@</tspan><tspan fill="#38BDF8" font-weight="800">quantum-core</tspan><tspan fill="#8B949E">:</tspan><tspan fill="#FACC15" font-weight="700">~</tspan><tspan fill="#E6EDF3">$ neofetch</tspan>
      </text>
    </g>

    <!-- Glowing Divider -->
    <line x1="0" y1="26" x2="505" y2="26" stroke="#30363D" stroke-width="1.2"/>
    <line x1="0" y1="26" x2="220" y2="26" stroke="url(#nf-cyan-glow)" stroke-width="1.4"/>

    <!-- Sysinfo Key-Value Rows -->
    <g class="nf-code" font-size="11.2" transform="translate(0, 48)">
      <!-- Row 1: OS -->
      <g transform="translate(0, 0)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">OS</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3" font-weight="600">Creative Computing OS <tspan fill="#64748B" font-size="10">(x86_64 / arm64)</tspan></text>
      </g>

      <!-- Row 2: Host -->
      <g transform="translate(0, 20)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Host</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3" font-weight="700">Chirag Gour <tspan fill="#818CF8">// Architect Engine</tspan></text>
      </g>

      <!-- Row 3: Uptime -->
      <g transform="translate(0, 40)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Uptime</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#10B981" font-weight="700">2,211 Commits <tspan fill="#8B949E">/</tspan> <tspan fill="#F59E0B">365 Days Streak (Active)</tspan></text>
      </g>

      <!-- Row 4: Shell -->
      <g transform="translate(0, 60)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Shell</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3">zsh 5.9 <tspan fill="#94A3B8">(Turbopack + Vite + Expo CLI)</tspan></text>
      </g>

      <!-- Row 5: Editor -->
      <g transform="translate(0, 80)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Editor</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3">VS Code <tspan fill="#8B949E">&amp;</tspan> NeoVim <tspan fill="#64748B">(Lua-powered AST workflows)</tspan></text>
      </g>

      <!-- Row 6: Architecture -->
      <g transform="translate(0, 100)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Architecture</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3" font-weight="600">Spatial 3D <tspan fill="#38BDF8">•</tspan> Next.js <tspan fill="#38BDF8">•</tspan> React Native</text>
      </g>

      <!-- Row 7: Repositories (CRITICAL: 83 SOURCE REPOS) -->
      <g transform="translate(0, 120)">
        <text x="0" y="0" fill="#F59E0B" font-weight="800">Repositories</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#FACC15" font-weight="800">83 Source Repos <tspan fill="#10B981" font-weight="700">(0 Forks • 100% Original Source)</tspan></text>
      </g>

      <!-- Row 8: Flagships -->
      <g transform="translate(0, 140)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Deployments</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3">Podcast-AI <tspan fill="#38BDF8">•</tspan> Salty <tspan fill="#38BDF8">•</tspan> Eat-Better <tspan fill="#38BDF8">•</tspan> Olympiad</text>
      </g>

      <!-- Row 9: Neural / Acceleration -->
      <g transform="translate(0, 160)">
        <text x="0" y="0" fill="#38BDF8" font-weight="700">Acceleration</text>
        <text x="125" y="0" fill="#8B949E">:</text>
        <text x="140" y="0" fill="#E6EDF3">WebGL2 / GLSL <tspan fill="#8B949E">+</tspan> Groq LPUs <tspan fill="#8B949E">+</tspan> Theatre.js 3D</text>
      </g>
    </g>

    <!-- Color Blocks (Neofetch Color Palette Swatches) -->
    <g transform="translate(0, 230)">
      <!-- Standard Colors Row -->
      <g>
        <rect x="0" y="0" width="24" height="13" rx="3" fill="#161B22" stroke="#30363D" stroke-width="0.8"/>
        <rect x="28" y="0" width="24" height="13" rx="3" fill="#EF4444"/>
        <rect x="56" y="0" width="24" height="13" rx="3" fill="#10B981"/>
        <rect x="84" y="0" width="24" height="13" rx="3" fill="#F59E0B"/>
        <rect x="112" y="0" width="24" height="13" rx="3" fill="#3B82F6"/>
        <rect x="140" y="0" width="24" height="13" rx="3" fill="#A855F7"/>
        <rect x="168" y="0" width="24" height="13" rx="3" fill="#06B6D4"/>
        <rect x="196" y="0" width="24" height="13" rx="3" fill="#E6EDF3"/>
      </g>

      <!-- Bright / Pastel Colors Row -->
      <g transform="translate(0, 16)">
        <rect x="0" y="0" width="24" height="13" rx="3" fill="#30363D"/>
        <rect x="28" y="0" width="24" height="13" rx="3" fill="#F87171"/>
        <rect x="56" y="0" width="24" height="13" rx="3" fill="#34D399"/>
        <rect x="84" y="0" width="24" height="13" rx="3" fill="#FDE047"/>
        <rect x="112" y="0" width="24" height="13" rx="3" fill="#60A5FA"/>
        <rect x="140" y="0" width="24" height="13" rx="3" fill="#C084FC"/>
        <rect x="168" y="0" width="24" height="13" rx="3" fill="#22D3EE"/>
        <rect x="196" y="0" width="24" height="13" rx="3" fill="#FFFFFF"/>
      </g>

      <!-- Trailing Command Line with Blinking Cursor -->
      <g transform="translate(235, 23)" class="nf-code" font-size="11.5">
        <text x="0" y="0" fill="#10B981" font-weight="700">chirag@quantum-core</text>
        <text x="135" y="0" fill="#8B949E">:</text>
        <text x="143" y="0" fill="#FACC15">~</text>
        <text x="151" y="0" fill="#E6EDF3">$</text>
        <rect x="162" y="-10" width="7" height="13" fill="#10B981" class="nf-cursor"/>
      </g>
    </g>
  </g>
</svg>"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(svg_content)

    print(f"[OK] Generated Neofetch Terminal Bio SVG: {output_path}")
    return output_path

if __name__ == "__main__":
    generate_neofetch_svg()
