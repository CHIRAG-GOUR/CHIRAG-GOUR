"""
Retro Arcade Highlight Projects Game Generator
Creates 5 unique animated arcade game SVGs themed around Chirag's flagship projects:
1. POA-Skippi: 8-Bit Roo Kangaroo Island Milestone Runner
2. Mangalyan-India: Vector Asteroids & Mars Orbital Defense
3. Eat-Better-Internship: Pac-Man Nutrition & Commit Chaser
4. Olympiad-Activities: Breakout / Arkanoid Knowledge Brick Breaker
5. physicsmotion2: Conway's Game of Life Cellular Automata & Kinematics
"""

import os

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

def generate_skippi_runner_svg():
    """Game 1: 8-Bit Roo Kangaroo Island Milestone Runner (POA-Skippi)"""
    width, height = 880, 190
    svg = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      <![CDATA[
      @keyframes rooHop {{
        0%, 100% {{ transform: translate(110px, 118px) rotate(0deg); }}
        20%      {{ transform: translate(110px, 68px) rotate(-8deg); }}
        45%      {{ transform: translate(110px, 58px) rotate(2deg); }}
        70%      {{ transform: translate(110px, 92px) rotate(6deg); }}
        85%      {{ transform: translate(110px, 118px) rotate(0deg); }}
      }}
      .roo-character {{
        animation: rooHop 1.4s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
      }}

      @keyframes terrainScroll {{
        0%   {{ transform: translateX(0); }}
        100% {{ transform: translateX(-440px); }}
      }}
      .scrolling-terrain {{
        animation: terrainScroll 4s infinite linear;
      }}

      @keyframes coinSpin {{
        0%, 100% {{ transform: scaleX(1); }}
        50%      {{ transform: scaleX(0.15); }}
      }}
      .spinning-coin {{
        animation: coinSpin 0.7s infinite ease-in-out;
        transform-origin: center;
      }}

      @keyframes scoreFloat {{
        0%   {{ transform: translateY(0); opacity: 0; }}
        25%  {{ opacity: 1; }}
        80%  {{ transform: translateY(-24px); opacity: 1; }}
        100% {{ transform: translateY(-34px); opacity: 0; }}
      }}
      .score-popup {{
        animation: scoreFloat 1.4s infinite ease-out 0.3s;
      }}
      ]]>
    </style>
  </defs>

  <!-- Border & Transparent Frame -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#F59E0B" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      ★ POA-SKIPPI // 3D SHARK TANK EDTECH
    </text>
    <text x="440" y="0" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      STAGE: SKIPI ISLAND • 13/13 MILESTONES CLEARED
    </text>
    <text x="824" y="0" text-anchor="end" fill="#10B981" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      SCORE: 13,400 XP
    </text>
  </g>

  <!-- Sky Starfield & Floating Island Clouds -->
  <g opacity="0.35" fill="#38BDF8">
    <circle cx="80" cy="50" r="1.5"/>
    <circle cx="240" cy="42" r="1"/>
    <circle cx="480" cy="55" r="1.5"/>
    <circle cx="680" cy="48" r="1"/>
    <circle cx="810" cy="62" r="1.5"/>
  </g>

  <!-- Floating Coins -->
  <g transform="translate(110, 60)" class="score-popup">
    <text x="18" y="0" fill="#FDE047" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">+250 XP</text>
  </g>

  <!-- Scrolling Track & Obstacles (Repeated Pattern for seamless scroll) -->
  <g class="scrolling-terrain">
    <!-- First Section -->
    <g transform="translate(0, 0)">
      <!-- Ground line -->
      <line x1="0" y1="152" x2="1320" y2="152" stroke="#30363D" stroke-width="2"/>
      <line x1="0" y1="154" x2="1320" y2="154" stroke="#10B981" stroke-width="1.5" stroke-dasharray="14 8"/>

      <!-- Milestone 1 -->
      <rect x="220" y="128" width="32" height="24" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="236" y="144" fill="#38BDF8" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">M1</text>
      <circle cx="236" cy="100" r="7" fill="#FACC15" class="spinning-coin"/>

      <!-- Milestone 4 -->
      <rect x="420" y="118" width="32" height="34" rx="4" fill="#1E293B" stroke="#C084FC" stroke-width="1.5"/>
      <text x="436" y="139" fill="#C084FC" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">M4</text>
      <circle cx="436" cy="85" r="7" fill="#FACC15" class="spinning-coin"/>

      <!-- Milestone 8 -->
      <rect x="640" y="124" width="32" height="28" rx="4" fill="#1E293B" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="656" y="142" fill="#F59E0B" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">M8</text>
      <circle cx="656" cy="95" r="7" fill="#FACC15" class="spinning-coin"/>

      <!-- Milestone 13 (Shark Tank Victory) -->
      <rect x="860" y="110" width="36" height="42" rx="4" fill="#1E293B" stroke="#10B981" stroke-width="1.5"/>
      <text x="878" y="135" fill="#10B981" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">M13</text>
      <circle cx="878" cy="78" r="8" fill="#FDE047" class="spinning-coin"/>

      <!-- Loop repetition -->
      <rect x="1080" y="128" width="32" height="24" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="1096" y="144" fill="#38BDF8" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800">M1</text>
      <circle cx="1096" cy="100" r="7" fill="#FACC15" class="spinning-coin"/>
    </g>
  </g>

  <!-- Roo Kangaroo Character (8-Bit Vector Mascot) -->
  <g class="roo-character">
    <!-- Tail -->
    <path d="M-8,14 Q-18,22 -22,12 Q-14,8 -6,10 Z" fill="#D97706"/>
    <!-- Feet -->
    <ellipse cx="6" cy="22" rx="8" ry="3.5" fill="#B45309"/>
    <ellipse cx="-4" cy="21" rx="7" ry="3" fill="#92400E"/>
    <!-- Body -->
    <ellipse cx="0" cy="10" rx="9" ry="12" fill="#F59E0B"/>
    <!-- Pouch -->
    <ellipse cx="3" cy="13" rx="5" ry="6" fill="#FDE68A"/>
    <!-- Head -->
    <circle cx="5" cy="-2" r="7" fill="#F59E0B"/>
    <circle cx="8" cy="-4" r="1.5" fill="#000000"/>
    <circle cx="8.5" cy="-4.5" r="0.6" fill="#FFFFFF"/>
    <!-- Snout -->
    <ellipse cx="10" cy="-1" rx="3.5" ry="2" fill="#FDE68A"/>
    <circle cx="12" cy="-1.5" r="0.9" fill="#000000"/>
    <!-- Ears -->
    <polygon points="2,-7 6,-18 7,-6" fill="#F59E0B"/>
    <polygon points="3,-7 6,-15 5,-7" fill="#FDE68A"/>
    <polygon points="-1,-7 1,-16 3,-7" fill="#D97706"/>
    <!-- Paws -->
    <ellipse cx="6" cy="7" rx="3" ry="2" fill="#B45309"/>
  </g>
</svg>"""
    return svg

def generate_mangalyaan_asteroids_svg():
    """Game 2: Vector Asteroids & Mars Orbital Defense (Mangalyan-India)"""
    width, height = 880, 190
    svg = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Mars Atmospheric Radial Glow -->
    <radialGradient id="mars_glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="60%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0.8"/>
    </radialGradient>

    <style>
      <![CDATA[
      /* Mangalyaan Orbiter Rotation & Inertia */
      @keyframes orbiterManeuver {{
        0%   {{ transform: translate(380px, 95px) rotate(0deg); }}
        25%  {{ transform: translate(395px, 90px) rotate(15deg); }}
        50%  {{ transform: translate(380px, 102px) rotate(-10deg); }}
        75%  {{ transform: translate(365px, 92px) rotate(25deg); }}
        100% {{ transform: translate(380px, 95px) rotate(0deg); }}
      }}
      .mangalyaan-ship {{
        animation: orbiterManeuver 8s infinite ease-in-out;
      }}

      /* Asteroid 1 Orbit and Tumble */
      @keyframes asteroidTumble1 {{
        0%   {{ transform: translate(140px, 40px) rotate(0deg); }}
        100% {{ transform: translate(140px, 40px) rotate(360deg); }}
      }}
      .asteroid-1 {{
        animation: asteroidTumble1 12s infinite linear;
        transform-origin: 140px 40px;
      }}

      /* Asteroid 2 Tumble */
      @keyframes asteroidTumble2 {{
        0%   {{ transform: translate(660px, 130px) rotate(0deg); }}
        100% {{ transform: translate(660px, 130px) rotate(-360deg); }}
      }}
      .asteroid-2 {{
        animation: asteroidTumble2 10s infinite linear;
        transform-origin: 660px 130px;
      }}

      /* Laser Railgun Blast */
      @keyframes railgunBlast {{
        0%, 30%  {{ opacity: 0; stroke-dashoffset: 80; }}
        35%      {{ opacity: 1; stroke-dashoffset: 0; }}
        42%, 100%{{ opacity: 0; stroke-dashoffset: -80; }}
      }}
      .railgun-beam {{
        stroke-dasharray: 60 120;
        animation: railgunBlast 3s infinite linear;
      }}

      /* Thruster Plume */
      @keyframes thrusterPulse {{
        0%, 100% {{ transform: scaleY(1); opacity: 0.8; }}
        50%      {{ transform: scaleY(1.5); opacity: 1; }}
      }}
      .thruster-plume {{
        animation: thrusterPulse 0.2s infinite ease-in-out;
        transform-origin: 0px 16px;
      }}
      ]]>
    </style>
  </defs>

  <!-- Border & Transparent Frame -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#EF4444" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      ★ MANGALYAAN-INDIA // ISRO MARS LAUNCH &amp; ORBIT
    </text>
    <text x="440" y="0" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      AREOCENTRIC ORBIT • TELEMETRY: 11.2 KM/S
    </text>
    <text x="824" y="0" text-anchor="end" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      TRAJECTORY: LOCKED
    </text>
  </g>

  <!-- Glowing Planet Mars in Background -->
  <g transform="translate(740, 95)">
    <circle cx="0" cy="0" r="42" fill="url(#mars_glow)" opacity="0.85"/>
    <ellipse cx="-12" cy="-14" rx="14" ry="7" fill="#FCA5A5" opacity="0.3"/>
    <ellipse cx="14" cy="18" rx="20" ry="9" fill="#B91C1C" opacity="0.5"/>
    <!-- Atmosphere haze ring -->
    <circle cx="0" cy="0" r="46" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4"/>
  </g>

  <!-- Vector Wireframe Asteroid 1 -->
  <g class="asteroid-1">
    <polygon points="140,25 155,30 160,45 145,55 130,50 125,35" stroke="#94A3B8" stroke-width="1.5" fill="#1E293B" fill-opacity="0.5"/>
    <line x1="140" y1="25" x2="145" y2="42" stroke="#64748B" stroke-width="1"/>
    <line x1="160" y1="45" x2="145" y2="42" stroke="#64748B" stroke-width="1"/>
    <line x1="125" y1="35" x2="145" y2="42" stroke="#64748B" stroke-width="1"/>
  </g>

  <!-- Vector Wireframe Asteroid 2 -->
  <g class="asteroid-2">
    <polygon points="660,115 675,120 678,138 662,148 648,140 645,125" stroke="#94A3B8" stroke-width="1.5" fill="#1E293B" fill-opacity="0.5"/>
    <line x1="660" y1="115" x2="664" y2="132" stroke="#64748B" stroke-width="1"/>
    <line x1="678" y1="138" x2="664" y2="132" stroke="#64748B" stroke-width="1"/>
  </g>

  <!-- Railgun Vector Laser Beam -->
  <line x1="395" y1="92" x2="655" y2="130" stroke="#38BDF8" stroke-width="2.5" class="railgun-beam"/>

  <!-- Mangalyaan Orbiter Spacecraft -->
  <g class="mangalyaan-ship">
    <!-- Solar Panels -->
    <rect x="-38" y="-7" width="26" height="14" rx="2" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
    <line x1="-25" y1="-7" x2="-25" y2="7" stroke="#38BDF8" stroke-width="1"/>
    <rect x="12" y="-7" width="26" height="14" rx="2" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
    <line x1="25" y1="-7" x2="25" y2="7" stroke="#38BDF8" stroke-width="1"/>

    <!-- High Gain Antenna Dish -->
    <ellipse cx="0" cy="-14" rx="12" ry="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
    <line x1="0" y1="-14" x2="0" y2="-9" stroke="#94A3B8" stroke-width="1.5"/>

    <!-- Central Gold Foil Cubesat Body -->
    <rect x="-10" y="-9" width="20" height="18" rx="2" fill="#D97706" stroke="#FBBF24" stroke-width="1.5"/>

    <!-- LAM (Liquid Apogee Motor) Thruster Nozzle -->
    <polygon points="-4,9 4,9 6,15 -6,15" fill="#475569"/>
    <!-- Plasma Plume -->
    <polygon points="-3,16 0,26 3,16" fill="#38BDF8" class="thruster-plume"/>
    <polygon points="-1.5,16 0,22 1.5,16" fill="#FFFFFF" class="thruster-plume"/>
  </g>
</svg>"""
    return svg

def generate_eatbetter_pacman_svg():
    """Game 3: Pac-Man Commit & Nutrition Chaser (Eat-Better-Internship)"""
    width, height = 880, 190
    svg = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      <![CDATA[
      /* Pac-Man Horizontal Chomp Path */
      @keyframes pacmanMove {{
        0%   {{ transform: translate(40px, 95px) scaleX(1); }}
        48%  {{ transform: translate(780px, 95px) scaleX(1); }}
        50%  {{ transform: translate(780px, 95px) scaleX(-1); }}
        98%  {{ transform: translate(40px, 95px) scaleX(-1); }}
        100% {{ transform: translate(40px, 95px) scaleX(1); }}
      }}
      .pacman-runner {{
        animation: pacmanMove 10s infinite linear;
      }}

      /* Blinky Red Ghost Chaser */
      @keyframes ghostMove {{
        0%   {{ transform: translate(0px, 95px); }}
        48%  {{ transform: translate(720px, 95px); }}
        52%  {{ transform: translate(720px, 95px); }}
        98%  {{ transform: translate(0px, 95px); }}
        100% {{ transform: translate(0px, 95px); }}
      }}
      .ghost-runner {{
        animation: ghostMove 10s infinite linear 0.4s;
      }}

      /* Mouth Chomp Animation */
      @keyframes mouthChomp {{
        0%, 100% {{ d: path('M0,0 L14,-14 A18,18 0 1,0 14,14 Z'); }}
        50%      {{ d: path('M0,0 L18,-2 A18,18 0 1,0 18,2 Z'); }}
      }}
      .pacman-mouth {{
        animation: mouthChomp 0.28s infinite ease-in-out;
      }}

      /* Energizer Pulse */
      @keyframes energizerPulse {{
        0%, 100% {{ transform: scale(1); opacity: 0.8; }}
        50%      {{ transform: scale(1.4); opacity: 1; }}
      }}
      .energizer-dot {{
        animation: energizerPulse 1s infinite ease-in-out;
        transform-origin: center;
      }}
      ]]>
    </style>
  </defs>

  <!-- Border & Transparent Frame -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      ★ EAT-BETTER-INTERNSHIP // SPATIAL PLATFORM &amp; THREE.JS
    </text>
    <text x="440" y="0" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      TURBOPACK 3.2X • COMMITS CONSUMED: 2,211
    </text>
    <text x="824" y="0" text-anchor="end" fill="#34D399" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      HIGH SCORE: 98,200
    </text>
  </g>

  <!-- Retro Neon Maze Rails -->
  <g stroke="#38BDF8" stroke-width="2" opacity="0.65">
    <line x1="30" y1="58" x2="850" y2="58"/>
    <line x1="30" y1="138" x2="850" y2="138"/>
  </g>

  <!-- Regular Commit Pellets Along the Corridor -->
  <g fill="#22C55E" opacity="0.85">
    {''.join([f'<circle cx="{x}" cy="95" r="3.5"/>' for x in range(70, 840, 36)])}
  </g>

  <!-- Large Power Energizers (Turbopack Powered) -->
  <circle cx="180" cy="95" r="8" fill="#FACC15" class="energizer-dot"/>
  <circle cx="540" cy="95" r="8" fill="#38BDF8" class="energizer-dot"/>
  <circle cx="760" cy="95" r="8" fill="#FACC15" class="energizer-dot"/>

  <!-- Ghost 1 (Blinky / Red) -->
  <g class="ghost-runner">
    <path d="M-12,8 L-12,-4 A12,12 0 0,1 12,-4 L12,8 L8,5 L4,8 L0,5 L-4,8 L-8,5 Z" fill="#EF4444"/>
    <ellipse cx="-4" cy="-4" rx="3.5" ry="4.5" fill="#FFFFFF"/>
    <circle cx="-3" cy="-4" r="2" fill="#1E3A8A"/>
    <ellipse cx="4" cy="-4" rx="3.5" ry="4.5" fill="#FFFFFF"/>
    <circle cx="5" cy="-4" r="2" fill="#1E3A8A"/>
  </g>

  <!-- Pac-Man Runner -->
  <g class="pacman-runner">
    <path class="pacman-mouth" fill="#FACC15" d="M0,0 L14,-14 A18,18 0 1,0 14,14 Z"/>
  </g>
</svg>"""
    return svg

def generate_olympiad_breakout_svg():
    """Game 4: Breakout / Arkanoid Knowledge Brick Breaker (Olympiad-Activities)"""
    width, height = 880, 190
    svg = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      <![CDATA[
      /* Paddle Horizontal Tracking */
      @keyframes paddleMove {{
        0%, 100% {{ transform: translateX(280px); }}
        35%      {{ transform: translateX(480px); }}
        65%      {{ transform: translateX(160px); }}
        85%      {{ transform: translateX(420px); }}
      }}
      .breakout-paddle {{
        animation: paddleMove 6s infinite ease-in-out;
      }}

      /* Photon Ball Physics Bounce */
      @keyframes ballBounce {{
        0%   {{ transform: translate(320px, 150px); }}
        20%  {{ transform: translate(440px, 68px); }}
        40%  {{ transform: translate(560px, 150px); }}
        60%  {{ transform: translate(380px, 78px); }}
        80%  {{ transform: translate(220px, 150px); }}
        100% {{ transform: translate(320px, 150px); }}
      }}
      .energy-ball {{
        animation: ballBounce 6s infinite linear;
      }}

      /* Brick Smash Animation */
      @keyframes brickPop {{
        0%, 18%  {{ opacity: 1; transform: scale(1); }}
        20%      {{ opacity: 1; fill: #FFFFFF; transform: scale(1.2); }}
        24%, 90% {{ opacity: 0.12; fill: #1E293B; }}
        95%, 100%{{ opacity: 1; }}
      }}
      .brick-hit-1 {{
        animation: brickPop 6s infinite ease-out;
        transform-origin: center;
      }}
      ]]>
    </style>
  </defs>

  <!-- Border & Transparent Frame -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      ★ OLYMPIAD-ACTIVITIES // DIGITAL EXAMINATION ENGINE
    </text>
    <text x="440" y="0" text-anchor="middle" fill="#34D399" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      ACCURACY: 99.4% • QUESTIONS SMASHED: 48/50
    </text>
    <text x="824" y="0" text-anchor="end" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      RANK: #1 GLOBAL
    </text>
  </g>

  <!-- Wall of Examination Bricks -->
  <!-- Row 1 (Purple - Advanced Logic) -->
  <g transform="translate(45, 50)">
    {''.join([f'<rect x="{i*49}" y="0" width="44" height="12" rx="2" fill="#8B5CF6"/>' for i in range(16)])}
  </g>
  <!-- Row 2 (Cyan - Computer Architecture) -->
  <g transform="translate(45, 66)">
    {''.join([f'<rect x="{i*49}" y="0" width="44" height="12" rx="2" fill="{("#38BDF8" if i != 8 else "#FFFFFF")}" class="{("brick-hit-1" if i == 8 else "")}"/>' for i in range(16)])}
  </g>
  <!-- Row 3 (Emerald - Mathematics & Vectors) -->
  <g transform="translate(45, 82)">
    {''.join([f'<rect x="{i*49}" y="0" width="44" height="12" rx="2" fill="#10B981"/>' for i in range(16)])}
  </g>

  <!-- Bouncing Photon Ball -->
  <g class="energy-ball">
    <circle cx="0" cy="0" r="5" fill="#38BDF8"/>
    <circle cx="0" cy="0" r="2.5" fill="#FFFFFF"/>
  </g>

  <!-- Player Arkanoid Paddle -->
  <g class="breakout-paddle" transform="translate(0, 156)">
    <rect x="0" y="0" width="80" height="10" rx="5" fill="#38BDF8"/>
    <rect x="15" y="2" width="50" height="6" rx="3" fill="#E0F2FE"/>
    <!-- Laser Winglets -->
    <rect x="-4" y="2" width="4" height="6" fill="#F43F5E"/>
    <rect x="80" y="2" width="4" height="6" fill="#F43F5E"/>
  </g>
</svg>"""
    return svg

def generate_physics_automata_svg():
    """Game 5: Conway's Game of Life Cellular Automata & Kinematics (physicsmotion2)"""
    width, height = 880, 190
    svg = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      <![CDATA[
      /* Glider Diagonal Flight */
      @keyframes gliderFly {{
        0%   {{ transform: translate(60px, 45px); }}
        100% {{ transform: translate(740px, 120px); }}
      }}
      .conway-glider {{
        animation: gliderFly 10s infinite linear;
      }}

      /* Pulsar Cell Oscillator */
      @keyframes cellOscillate {{
        0%, 100% {{ transform: scale(1); opacity: 0.9; }}
        50%      {{ transform: scale(1.35); opacity: 1; fill: #38BDF8; }}
      }}
      .pulsar-cell {{
        animation: cellOscillate 1.2s infinite ease-in-out;
        transform-origin: center;
      }}

      /* Vector Field Wave */
      @keyframes vectorPulse {{
        0%, 100% {{ opacity: 0.25; }}
        50%      {{ opacity: 0.65; }}
      }}
      .vector-matrix {{
        animation: vectorPulse 3s infinite ease-in-out;
      }}
      ]]>
    </style>
  </defs>

  <!-- Border & Transparent Frame -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#34D399" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      ★ PHYSICSMOTION2 // KINEMATIC SIMULATION &amp; AUTOMATA
    </text>
    <text x="440" y="0" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      INFERENCE: GROQ LPU • RULES: B3/S23 (CONWAY)
    </text>
    <text x="824" y="0" text-anchor="end" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
      GEN: 2,211 • ACTIVE: 142
    </text>
  </g>

  <!-- Background Cellular Automata Grid Points -->
  <g class="vector-matrix" fill="#30363D">
    {''.join([f'<circle cx="{x}" cy="{y}" r="1.5"/>' for x in range(48, 840, 24) for y in range(54, 168, 20)])}
  </g>

  <!-- Oscillator 1 (Pulsar Pattern at x=180, y=90) -->
  <g transform="translate(180, 95)">
    <rect x="-16" y="-4" width="8" height="8" rx="1.5" fill="#10B981" class="pulsar-cell"/>
    <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="#34D399" class="pulsar-cell"/>
    <rect x="8" y="-4" width="8" height="8" rx="1.5" fill="#10B981" class="pulsar-cell"/>
    <!-- Velocity vectors -->
    <line x1="20" y1="0" x2="42" y2="0" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 2"/>
    <polygon points="42,0 37,-3 37,3" fill="#38BDF8"/>
    <text x="46" y="3" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="9">v_x = 2.4 m/s</text>
  </g>

  <!-- Oscillator 2 (Beacon Pattern at x=640, y=85) -->
  <g transform="translate(640, 85)">
    <rect x="-10" y="-10" width="8" height="8" rx="1.5" fill="#38BDF8" class="pulsar-cell"/>
    <rect x="-2" y="-10" width="8" height="8" rx="1.5" fill="#38BDF8" class="pulsar-cell"/>
    <rect x="-10" y="-2" width="8" height="8" rx="1.5" fill="#38BDF8" class="pulsar-cell"/>
    <rect x="6" y="6" width="8" height="8" rx="1.5" fill="#C084FC" class="pulsar-cell"/>
    <rect x="14" y="6" width="8" height="8" rx="1.5" fill="#C084FC" class="pulsar-cell"/>
    <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#C084FC" class="pulsar-cell"/>
  </g>

  <!-- Flying Conway Glider (Migrating across the screen) -->
  <g class="conway-glider">
    <!-- Glider 5-cell pattern:
         . # .
         . . #
         # # # -->
    <rect x="12" y="0" width="9" height="9" rx="2" fill="#FACC15"/>
    <rect x="24" y="12" width="9" height="9" rx="2" fill="#FACC15"/>
    <rect x="0" y="24" width="9" height="9" rx="2" fill="#FACC15"/>
    <rect x="12" y="24" width="9" height="9" rx="2" fill="#FACC15"/>
    <rect x="24" y="24" width="9" height="9" rx="2" fill="#FACC15"/>

    <!-- Kinematic Trail Vector -->
    <line x1="-12" y1="-12" x2="-2" y2="-2" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="2 2"/>
    <text x="-40" y="-14" fill="#FACC15" font-family="'JetBrains Mono', monospace" font-size="8.5">GLIDER [c/4]</text>
  </g>
</svg>"""
    return svg

def generate_all_project_games():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    games = [
        ("game-skippi-roo-runner.svg", generate_skippi_runner_svg()),
        ("game-mangalyaan-asteroids.svg", generate_mangalyaan_asteroids_svg()),
        ("game-eatbetter-pacman.svg", generate_eatbetter_pacman_svg()),
        ("game-olympiad-breakout.svg", generate_olympiad_breakout_svg()),
        ("game-physics-automata.svg", generate_physics_automata_svg()),
    ]
    for filename, content in games:
        path = os.path.join(OUTPUT_DIR, filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[GAME] Generated {filename}")

if __name__ == "__main__":
    generate_all_project_games()
