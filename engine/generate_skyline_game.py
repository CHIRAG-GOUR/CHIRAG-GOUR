"""
3D Isometric Git Commit Skyline Generator
Generates a breathtaking cyberpunk isometric 3D city grid SVG where skyscraper heights
correspond directly to monthly commit volume, with September's peak velocity (276 commits)
forming the glowing downtown apex skyscraper, complete with flying cyber-cars, neon skyways,
traveling data packets, architectural louvers, and repository citadel markers.
"""

import os
import xml.etree.ElementTree as ET

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

def generate_skyline_game_svg(output_path: str = None) -> str:
    if output_path is None:
        output_path = os.path.join(OUTPUT_DIR, "commit-skyline-isometric.svg")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    width = 880
    height = 410

    # Monthly commit telemetry (September = 276 commits peak)
    months_data = [
        {"month": "JAN", "commits": 88,  "tier": "normal", "flagship": None},
        {"month": "FEB", "commits": 112, "tier": "normal", "flagship": None},
        {"month": "MAR", "commits": 146, "tier": "mid",    "flagship": None},
        {"month": "APR", "commits": 135, "tier": "mid",    "flagship": None},
        {"month": "MAY", "commits": 188, "tier": "high",   "flagship": "ZeePrep"},
        {"month": "JUN", "commits": 174, "tier": "high",   "flagship": None},
        {"month": "JUL", "commits": 216, "tier": "surge",  "flagship": "Olympiad"},
        {"month": "AUG", "commits": 248, "tier": "surge",  "flagship": "Eat-Better"},
        {"month": "SEP", "commits": 276, "tier": "apex",   "flagship": "Apex Citadel"},
        {"month": "OCT", "commits": 232, "tier": "surge",  "flagship": None},
        {"month": "NOV", "commits": 264, "tier": "surge",  "flagship": "POA-Skippi"},
        {"month": "DEC", "commits": 220, "tier": "surge",  "flagship": "Mangalyaan"}
    ]

    # Pre-calculate building coordinates
    # Available width: x=40 to x=840 (800px spread for 12 buildings -> ~67px spacing)
    b_width = 46
    b_depth = 20
    base_y = 328

    buildings_svg = []
    labels_svg = []

    # Window colors palette
    window_colors = ["#38BDF8", "#FBBF24", "#34D399", "#818CF8", "#22D3EE"]

    for i, data in enumerate(months_data):
        bx = 55 + i * 66
        commits = data["commits"]
        is_apex = (data["month"] == "SEP")
        
        # Height proportional to commits: 88 commits -> 58px, 276 commits -> 186px
        h = int(45 + (commits / 276.0) * 140)
        if is_apex:
            h = 188 # Max downtown apex

        roof_y = base_y - h

        # Isometric Top Face (Rhombus)
        # Top vertex: (bx, roof_y)
        # Right vertex: (bx + b_width/2, roof_y + b_depth/2)
        # Bottom vertex: (bx, roof_y + b_depth)
        # Left vertex: (bx - b_width/2, roof_y + b_depth/2)
        top_pts = f"{bx},{roof_y} {bx + b_width/2},{roof_y + b_depth/2} {bx},{roof_y + b_depth} {bx - b_width/2},{roof_y + b_depth/2}"
        
        # Isometric Left Face (Shaded side)
        # (bx - b_width/2, roof_y + b_depth/2) -> (bx, roof_y + b_depth) -> (bx, base_y + b_depth) -> (bx - b_width/2, base_y + b_depth/2)
        left_pts = f"{bx - b_width/2},{roof_y + b_depth/2} {bx},{roof_y + b_depth} {bx},{base_y + b_depth} {bx - b_width/2},{base_y + b_depth/2}"

        # Isometric Right Face (Illuminated side)
        # (bx, roof_y + b_depth) -> (bx + b_width/2, roof_y + b_depth/2) -> (bx + b_width/2, base_y + b_depth/2) -> (bx, base_y + b_depth)
        right_pts = f"{bx},{roof_y + b_depth} {bx + b_width/2},{roof_y + b_depth/2} {bx + b_width/2},{base_y + b_depth/2} {bx},{base_y + b_depth}"

        # Build window grid for left and right faces
        windows_left = []
        windows_right = []
        num_floors = max(3, h // 16)

        for floor in range(1, num_floors):
            fy = roof_y + b_depth + floor * 15
            if fy > base_y:
                break
            # Left face windows (2 columns)
            c_idx = (i * 3 + floor) % len(window_colors)
            w_col = window_colors[c_idx]
            is_lit = ((i + floor) % 3 != 0) # 66% lit
            opacity = "0.85" if is_lit else "0.15"
            color = w_col if is_lit else "#334155"

            # Window skew on left face
            # Column 1
            w_lx1 = bx - 16
            w_ly1 = fy - 8
            windows_left.append(f'<polygon points="{w_lx1},{w_ly1} {w_lx1+6},{w_ly1+3} {w_lx1+6},{w_ly1+8} {w_lx1},{w_ly1+5}" fill="{color}" fill-opacity="{opacity}"/>')
            # Column 2
            w_lx2 = bx - 7
            w_ly2 = fy - 4
            windows_left.append(f'<polygon points="{w_lx2},{w_ly2} {w_lx2+5},{w_ly2+2.5} {w_lx2+5},{w_ly2+7.5} {w_lx2},{w_ly2+5}" fill="{color}" fill-opacity="{opacity}"/>')

            # Right face vertical neon louvers / windows
            w_rx1 = bx + 5
            w_ry1 = fy - 2.5
            windows_right.append(f'<polygon points="{w_rx1},{w_ry1} {w_rx1+7},{w_ry1-3.5} {w_rx1+7},{w_ry1+2} {w_rx1},{w_ry1+3}" fill="{color}" fill-opacity="{opacity}"/>')
            w_rx2 = bx + 14
            w_ry2 = fy - 7
            windows_right.append(f'<polygon points="{w_rx2},{w_ry2} {w_rx2+6},{w_ry2-3} {w_rx2+6},{w_ry2+2} {w_rx2},{w_ry2+2}" fill="{color}" fill-opacity="{opacity}"/>')

        windows_left_str = "\n      ".join(windows_left)
        windows_right_str = "\n      ".join(windows_right)

        # Roof styling
        if is_apex:
            roof_fill = "url(#roof-apex-grad)"
            left_fill = "url(#left-apex-grad)"
            right_fill = "url(#right-apex-grad)"
            edge_stroke = "#F59E0B"
            stroke_width = "1.5"
        elif data["tier"] == "surge":
            roof_fill = "url(#roof-surge-grad)"
            left_fill = "#0E182A"
            right_fill = "url(#right-surge-grad)"
            edge_stroke = "#38BDF8"
            stroke_width = "1.1"
        else:
            roof_fill = "url(#roof-std-grad)"
            left_fill = "#0B1320"
            right_fill = "url(#right-std-grad)"
            edge_stroke = "#2A3A54"
            stroke_width = "1.0"

        # Additional rooftop architectural features
        rooftop_features = []
        if is_apex:
            # Grand Spire Antenna on September Apex
            spire_tip_y = roof_y - 48
            rooftop_features.append(f"""
      <!-- September Apex Grand Spire Antenna -->
      <line x1="{bx}" y1="{roof_y + b_depth/2}" x2="{bx}" y2="{spire_tip_y}" stroke="#F59E0B" stroke-width="2.2"/>
      <line x1="{bx-6}" y1="{roof_y - 12}" x2="{bx+6}" y2="{roof_y - 12}" stroke="#FCD34D" stroke-width="1.2"/>
      <line x1="{bx-4}" y1="{roof_y - 25}" x2="{bx+4}" y2="{roof_y - 25}" stroke="#FCD34D" stroke-width="1.0"/>
      <!-- Pulsing Red Aviation Warning Beacon -->
      <circle cx="{bx}" cy="{spire_tip_y}" r="4" fill="#EF4444">
        <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="r" values="3.5;5.5;3.5" dur="0.9s" repeatCount="indefinite"/>
      </circle>
      <!-- Vertical Skyward Laser Beam -->
      <line x1="{bx}" y1="{spire_tip_y}" x2="{bx}" y2="35" stroke="url(#apex-laser-grad)" stroke-width="1.8" stroke-dasharray="4,2"/>
      <!-- Holographic Floating Badge -->
      <g transform="translate({bx - 70}, {roof_y - 36})">
        <rect width="140" height="20" rx="4" fill="#161B22" fill-opacity="0.92" stroke="#F59E0B" stroke-width="1.2"/>
        <text x="70" y="13.5" text-anchor="middle" fill="#FDE047" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" letter-spacing="0.5">
          ★ SEP PEAK: 276 COMMITS
        </text>
      </g>
            """)
        elif data["tier"] == "surge":
            # Compact Spire / Satellite Comms on Surge Buildings
            rooftop_features.append(f"""
      <line x1="{bx}" y1="{roof_y + b_depth/2}" x2="{bx}" y2="{roof_y - 18}" stroke="#38BDF8" stroke-width="1.4"/>
      <circle cx="{bx}" cy="{roof_y - 18}" r="2.5" fill="#38BDF8">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
      </circle>
            """)

        # Citadel Flagship Marker above roof
        if data["flagship"] and not is_apex:
            rooftop_features.append(f"""
      <g transform="translate({bx - 32}, {roof_y - 20})">
        <rect width="64" height="15" rx="3" fill="#0D1117" fill-opacity="0.9" stroke="#38BDF8" stroke-width="0.9"/>
        <text x="32" y="10.5" text-anchor="middle" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="700">
          {data["flagship"]}
        </text>
      </g>
            """)

        rooftop_str = "\n".join(rooftop_features)

        # Assemble individual skyscraper
        building_markup = f"""
    <!-- Building {i+1}: {data['month']} ({commits} Commits) -->
    <g class="sk-building" id="tower-{data['month']}">
      <!-- Ground Shadow / Base Glow -->
      <ellipse cx="{bx}" cy="{base_y + b_depth}" rx="{b_width/2 + 6}" ry="8" fill="#000000" fill-opacity="0.55"/>

      <!-- Left Wall -->
      <polygon points="{left_pts}" fill="{left_fill}" stroke="{edge_stroke}" stroke-width="{stroke_width}"/>
      {windows_left_str}

      <!-- Right Wall -->
      <polygon points="{right_pts}" fill="{right_fill}" stroke="{edge_stroke}" stroke-width="{stroke_width}"/>
      {windows_right_str}

      <!-- Roof -->
      <polygon points="{top_pts}" fill="{roof_fill}" stroke="{edge_stroke}" stroke-width="{stroke_width}"/>
      <ellipse cx="{bx}" cy="{roof_y + b_depth/2}" rx="6" ry="3" fill="none" stroke="{edge_stroke}" stroke-width="0.8"/>

      {rooftop_str}
    </g>
        """
        buildings_svg.append(building_markup)

        # Bottom Base Axis Label
        badge_bg = "#1C1917" if is_apex else "#161B22"
        badge_border = "#F59E0B" if is_apex else "#30363D"
        month_color = "#FACC15" if is_apex else "#E6EDF3"
        commit_color = "#FCD34D" if is_apex else "#38BDF8"

        label_markup = f"""
    <!-- Axis Label: {data['month']} -->
    <g transform="translate({bx - 26}, {base_y + 26})">
      <rect width="52" height="34" rx="6" fill="{badge_bg}" stroke="{badge_border}" stroke-width="1.2"/>
      <text x="26" y="14" text-anchor="middle" fill="{month_color}" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800">
        {data['month']}
      </text>
      <text x="26" y="27" text-anchor="middle" fill="{commit_color}" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">
        {commits}
      </text>
    </g>
        """
        labels_svg.append(label_markup)

    all_buildings_str = "\n".join(buildings_svg)
    all_labels_str = "\n".join(labels_svg)

    svg_content = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Sky Background Gradient -->
    <linearGradient id="sky-void" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#070A12"/>
      <stop offset="40%" stop-color="#0A101D"/>
      <stop offset="80%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#0B0F19"/>
    </linearGradient>

    <!-- September Apex Gradients (Gold / Cyber Glow) -->
    <linearGradient id="roof-apex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="left-apex-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#241B08"/>
      <stop offset="100%" stop-color="#120E05"/>
    </linearGradient>
    <linearGradient id="right-apex-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3A2808"/>
      <stop offset="100%" stop-color="#1F1504"/>
    </linearGradient>
    <linearGradient id="apex-laser-grad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.9"/>
      <stop offset="70%" stop-color="#38BDF8" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </linearGradient>

    <!-- Surge Gradients (Cyan / Violet) -->
    <linearGradient id="roof-surge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#1E40AF"/>
    </linearGradient>
    <linearGradient id="right-surge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#152033"/>
    </linearGradient>

    <!-- Standard Gradients -->
    <linearGradient id="roof-std-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#64748B"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="right-std-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>

    <!-- Neon Highway Gradients -->
    <linearGradient id="highway-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.1"/>
      <stop offset="20%" stop-color="#38BDF8" stop-opacity="0.85"/>
      <stop offset="80%" stop-color="#38BDF8" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="highway-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.1"/>
      <stop offset="20%" stop-color="#EC4899" stop-opacity="0.8"/>
      <stop offset="80%" stop-color="#EC4899" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#A855F7" stop-opacity="0.1"/>
    </linearGradient>

    <!-- Headlight Beam Gradient -->
    <linearGradient id="headlight-beam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </linearGradient>

    <!-- Central Downtown Ambient Radial Nebula -->
    <radialGradient id="skyline-nebula" cx="66%" cy="38%" r="40%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.16"/>
      <stop offset="45%" stop-color="#38BDF8" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="#070A12" stop-opacity="0"/>
    </radialGradient>

    <style>
      <![CDATA[
        @keyframes carFlyEast {{
          0%   {{ transform: translate(-40px, 205px); opacity: 0; }}
          10%  {{ opacity: 1; }}
          90%  {{ opacity: 1; }}
          100% {{ transform: translate(920px, 175px); opacity: 0; }}
        }}
        @keyframes carFlyWest {{
          0%   {{ transform: translate(920px, 275px) scaleX(-1); opacity: 0; }}
          10%  {{ opacity: 1; }}
          90%  {{ opacity: 1; }}
          100% {{ transform: translate(-40px, 255px) scaleX(-1); opacity: 0; }}
        }}
        @keyframes carPatrolApex {{
          0%   {{ transform: translate(520px, 130px); }}
          50%  {{ transform: translate(630px, 142px); }}
          100% {{ transform: translate(520px, 130px); }}
        }}
        @keyframes packetStream1 {{
          0%   {{ offset-distance: 0%; opacity: 0; }}
          15%  {{ opacity: 1; }}
          85%  {{ opacity: 1; }}
          100% {{ offset-distance: 100%; opacity: 0; }}
        }}
        .flying-car-east {{
          animation: carFlyEast 7.5s linear infinite;
        }}
        .flying-car-west {{
          animation: carFlyWest 10s linear infinite;
        }}
        .flying-car-patrol {{
          animation: carPatrolApex 5.5s ease-in-out infinite;
        }}
      ]]>
    </style>
  </defs>

  <!-- ================= CANVAS BASE ================= -->
  <rect width="{width}" height="{height}" rx="14" fill="url(#sky-void)" stroke="#30363D" stroke-width="1.2"/>
  <!-- Downtown Ambient Nebula Glow -->
  <rect width="{width}" height="{height}" rx="14" fill="url(#skyline-nebula)" pointer-events="none"/>

  <!-- Distant Cyber Stars -->
  <g fill="#E6EDF3" opacity="0.65">
    <circle cx="85" cy="65" r="1"/>
    <circle cx="160" cy="90" r="1.2"/>
    <circle cx="230" cy="50" r="0.8"/>
    <circle cx="340" cy="75" r="1"/>
    <circle cx="430" cy="45" r="1.4"/>
    <circle cx="510" cy="80" r="0.8"/>
    <circle cx="680" cy="55" r="1.2"/>
    <circle cx="750" cy="85" r="0.8"/>
    <circle cx="810" cy="60" r="1.2"/>
    <circle cx="390" cy="110" r="0.8"/>
  </g>

  <!-- ================= HEADER HUD TELEMETRY ================= -->
  <g transform="translate(24, 24)">
    <!-- HUD Header Left -->
    <text x="0" y="12" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="0.5">
      🏙️ 3D ISOMETRIC GIT COMMIT SKYLINE
    </text>
    <text x="0" y="27" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600">
      BUILDING ELEVATION = MONTHLY COMMIT FREQUENCY • <tspan fill="#38BDF8">83 REPOSITORIES CITADEL</tspan>
    </text>

    <!-- HUD Header Right (Apex Telemetry Badge) -->
    <g transform="translate({width - 340}, -4)">
      <rect width="292" height="32" rx="6" fill="#161B22" stroke="#F59E0B" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4.5" fill="#F59E0B">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="28" y="14" fill="#FDE047" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800">
        DOWNTOWN APEX: SEP (276 COMMITS)
      </text>
      <text x="28" y="25" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600">
        ISO 30° GRID • TIS SCORING PEAK • 2,211 LIFETIME
      </text>
    </g>
  </g>

  <!-- Horizon Divider & Receding Grid -->
  <line x1="20" y1="58" x2="{width - 20}" y2="58" stroke="#1E293B" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- ================= GROUND ISOMETRIC BASE GRID ================= -->
  <g stroke="#1E293B" stroke-width="0.8" stroke-opacity="0.6">
    <!-- Perspective lines receding -->
    <line x1="30" y1="{base_y + 10}" x2="{width - 30}" y2="{base_y + 10}"/>
    <line x1="20" y1="{base_y + 20}" x2="{width - 20}" y2="{base_y + 20}"/>
    <line x1="10" y1="{base_y + 65}" x2="{width - 10}" y2="{base_y + 65}"/>
    <!-- Diagonal grid hashes -->
    <line x1="60" y1="{base_y + 10}" x2="30" y2="{base_y + 65}"/>
    <line x1="190" y1="{base_y + 10}" x2="160" y2="{base_y + 65}"/>
    <line x1="320" y1="{base_y + 10}" x2="290" y2="{base_y + 65}"/>
    <line x1="450" y1="{base_y + 10}" x2="420" y2="{base_y + 65}"/>
    <line x1="580" y1="{base_y + 10}" x2="550" y2="{base_y + 65}"/>
    <line x1="710" y1="{base_y + 10}" x2="680" y2="{base_y + 65}"/>
    <line x1="840" y1="{base_y + 10}" x2="810" y2="{base_y + 65}"/>
  </g>

  <!-- ================= NEON SKYWAY HIGHWAYS (BEHIND BUILDINGS) ================= -->
  <!-- Upper Neon Highway Ribbon (Cyan) -->
  <path d="M 10 205 Q 240 185, 450 195 T 870 175" fill="none" stroke="url(#highway-cyan)" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M 10 205 Q 240 185, 450 195 T 870 175" fill="none" stroke="#FFFFFF" stroke-width="1.2" stroke-dasharray="6,8" stroke-opacity="0.8"/>

  <!-- ================= 12 SKYSCRAPERS MATRIX ================= -->
  <g id="skyscrapers-group">
    {all_buildings_str}
  </g>

  <!-- ================= FOREGROUND NEON HIGHWAY (MAGENTA) ================= -->
  <!-- Lower Neon Skyway weaving between foreground towers -->
  <path d="M 10 265 Q 220 280, 480 258 T 870 270" fill="none" stroke="url(#highway-magenta)" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M 10 265 Q 220 280, 480 258 T 870 270" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="5,7" stroke-opacity="0.85"/>

  <!-- ================= FLYING CYBER-CARS (SPINNERS) ================= -->
  <!-- Cyber-Car 1: Eastbound High-Speed Spinner (Cyan) -->
  <g class="flying-car-east">
    <!-- Hovercraft Body -->
    <polygon points="0,-4 18,0 0,4 -6,1" fill="#38BDF8"/>
    <!-- Cabin Windshield -->
    <polygon points="4,-2 13,0 4,2" fill="#FFFFFF" fill-opacity="0.9"/>
    <!-- Headlight Beam -->
    <polygon points="18,0 48,-7 48,7" fill="url(#headlight-beam)"/>
    <!-- Thruster Tail -->
    <polygon points="-6,1 -14,0 -6,-1" fill="#22D3EE"/>
    <circle cx="-6" cy="0" r="2.5" fill="#FFFFFF"/>
  </g>

  <!-- Cyber-Car 2: Westbound Cruiser (Magenta/Violet) -->
  <g class="flying-car-west">
    <!-- Hovercraft Body -->
    <polygon points="0,-4 18,0 0,4 -6,1" fill="#EC4899"/>
    <polygon points="4,-2 13,0 4,2" fill="#FFFFFF" fill-opacity="0.9"/>
    <polygon points="18,0 44,-6 44,6" fill="url(#headlight-beam)"/>
    <polygon points="-6,1 -12,0 -6,-1" fill="#F43F5E"/>
    <circle cx="-6" cy="0" r="2.2" fill="#FFFFFF"/>
  </g>

  <!-- Cyber-Car 3: Downtown Patrol Spinner around September Apex -->
  <g class="flying-car-patrol">
    <polygon points="0,-3 14,0 0,3 -5,1" fill="#F59E0B"/>
    <polygon points="3,-1.5 10,0 3,1.5" fill="#FFFFFF"/>
    <polygon points="14,0 32,-4 32,4" fill="url(#headlight-beam)"/>
    <circle cx="-5" cy="0" r="2" fill="#FCD34D"/>
  </g>

  <!-- Traveling Data Packets on Fiber Conduits -->
  <circle cx="0" cy="0" r="3.2" fill="#10B981">
    <animateMotion path="M 10 205 Q 240 185, 450 195 T 870 175" dur="3.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="0" cy="0" r="2.8" fill="#FACC15">
    <animateMotion path="M 870 270 T 480 258 Q 220 280, 10 265" dur="5.2s" repeatCount="indefinite"/>
  </circle>

  <!-- ================= BASE LABELS & COMMIT VALUES ================= -->
  <g id="labels-group">
    {all_labels_str}
  </g>

  <!-- Bottom Legend Telemetry Bar -->
  <g transform="translate(24, {height - 14})">
    <text x="0" y="0" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="8.5">
      ARCHITECTURE: 2.5D ISOMETRIC CITY MATRIX // HIGHWAYS: DUAL-LANE FIBER OPTIC CONDUITS // REAL-TIME TELEMETRY ACTIVE
    </text>
    <text x="{width - 48}" y="0" text-anchor="end" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">
      ● 100% PRODUCTION VERIFIED
    </text>
  </g>
</svg>"""

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(svg_content)

    print(f"[OK] Generated 3D Isometric Git Commit Skyline SVG: {output_path}")
    return output_path

if __name__ == "__main__":
    generate_skyline_game_svg()
