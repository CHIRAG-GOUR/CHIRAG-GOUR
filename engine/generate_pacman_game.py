"""
Pac-Man Real-Time Commit Chomper Generator
Generates an animated SVG of Pac-Man navigating an 8-10 grid arcade window,
consuming the developer's actual latest commit data in real time with retro
sound/visual animations, score popups, and chasing ghosts.
"""

import os
import json
import html

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))
DATA_COMMITS = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data", "current", "commits_sample.json"))

def load_latest_commits(limit=10):
    """Load latest 10 commits from local cached sample, or provide realistic fallbacks."""
    if os.path.exists(DATA_COMMITS):
        try:
            with open(DATA_COMMITS, "r", encoding="utf-8") as f:
                commits = json.load(f)
            if commits and isinstance(commits, list):
                clean_commits = []
                for c in commits[:limit]:
                    sha = c.get("sha", "HEAD")[:7]
                    proj = c.get("project", "Ecosystem")
                    if len(proj) > 13:
                        proj = proj[:11] + ".."
                    msg = c.get("title", "Updated architecture")
                    if len(msg) > 22:
                        msg = msg[:20] + ".."
                    clean_commits.append({
                        "sha": sha,
                        "project": proj,
                        "title": msg
                    })
                if len(clean_commits) >= limit:
                    return clean_commits
        except Exception as e:
            print(f"[WARN] Failed to read commits_sample.json: {e}")

    # Fallback to authentic Chirag Gour repository commits
    return [
        {"sha": "8950ed5", "project": "Eat-Better", "title": "feat: Module 5 Capstone 3D"},
        {"sha": "b9b293b", "project": "Eat-Better", "title": "feat: Experiential Activity 4"},
        {"sha": "7786d5b", "project": "Eat-Better", "title": "Command Center Distribution"},
        {"sha": "b710063", "project": "podcast-ai", "title": "feat: viral clip finder"},
        {"sha": "973e762", "project": "Eat-Better", "title": "feat: experiential activity 2"},
        {"sha": "106a053", "project": "ZeePrep", "title": "feat: audio/video assessment"},
        {"sha": "6c0c6cd", "project": "Olympiad", "title": "feat: DND interactive exam"},
        {"sha": "28223e9", "project": "Mangalyaan", "title": "feat: PBR launch tower sim"},
        {"sha": "a8779c7", "project": "poa-story", "title": "docs: sprint roadmap spec"},
        {"sha": "9dd977a", "project": "Eat-Better", "title": "Product Innovation Engine"}
    ]

def generate_pacman_game_svg():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    width = 880
    height = 240
    commits = load_latest_commits(10)

    # 10 Grid Stations Geometry:
    # 5 slots on top row (y=50..98), 5 slots on bottom row (y=150..198)
    pad_x = 40
    slot_w = 146
    slot_h = 48
    gap_x = 18

    top_slots_svg = []
    bottom_slots_svg = []

    # Timing schedule across 16s cycle
    # Top Row: t=8%, 16%, 24%, 32%, 40%
    # Turnaround: t=45%..50%
    # Bottom Row: t=58%, 66%, 74%, 82%, 90%
    # Ghost Chomp: t=93%
    # Reset: t=96%..100%

    css_animations = []

    for i in range(5):
        c = commits[i]
        x = pad_x + i * (slot_w + gap_x)
        y = 48
        cx = x + slot_w / 2
        cy = 112 # on top rail

        t_hit = 8.0 + i * 8.0 # 8%, 16%, 24%, 32%, 40%

        # CSS for pellet vanishing
        css_animations.append(f"""
      @keyframes eatPellet_{i+1} {{
        0%, {t_hit-0.5:.1f}% {{ opacity: 1; transform: scale(1); }}
        {t_hit:.1f}%        {{ opacity: 1; transform: scale(1.6); fill: #FFFFFF; }}
        {t_hit+0.5:.1f}%, 94% {{ opacity: 0; transform: scale(0); }}
        96%, 100%           {{ opacity: 1; transform: scale(1); }}
      }}
      .pellet-{i+1} {{
        animation: eatPellet_{i+1} 16s infinite ease-out;
        transform-origin: {cx}px {cy}px;
      }}
      @keyframes slotGlow_{i+1} {{
        0%, {t_hit-0.5:.1f}% {{ stroke: #30363D; }}
        {t_hit:.1f}%        {{ stroke: #FFFFFF; }}
        {t_hit+1.0:.1f}%, 94% {{ stroke: #10B981; }}
        96%, 100%           {{ stroke: #30363D; }}
      }}
      .slot-box-{i+1} {{
        animation: slotGlow_{i+1} 16s infinite ease-out;
      }}
      @keyframes slotStatus_{i+1} {{
        0%, {t_hit-0.5:.1f}% {{ fill: #64748B; }}
        {t_hit:.1f}%, 94%   {{ fill: #34D399; font-weight: 700; }}
        96%, 100%           {{ fill: #64748B; }}
      }}
      .slot-status-{i+1} {{
        animation: slotStatus_{i+1} 16s infinite ease-out;
      }}""")

        # Slot markup
        sha_safe = html.escape(c["sha"])
        proj_safe = html.escape(c["project"])
        title_safe = html.escape(c["title"])

        slot_markup = f"""    <!-- Slot {i+1} -->
    <g transform="translate({x}, {y})">
      <rect width="{slot_w}" height="{slot_h}" rx="5" fill="#0D1117" stroke="#30363D" stroke-width="1.2" class="slot-box-{i+1}"/>
      <text x="8" y="15" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">#{sha_safe}</text>
      <text x="{slot_w-8}" y="15" text-anchor="end" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">{proj_safe}</text>
      <text x="8" y="30" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="500">{title_safe}</text>
      <text x="8" y="42" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" class="slot-status-{i+1}">● INGESTING COMMIT</text>
    </g>
    <!-- Pellet {i+1} on top rail -->
    <circle cx="{cx}" cy="{cy}" r="4" fill="#22C55E" class="pellet-{i+1}"/>"""
        top_slots_svg.append(slot_markup)

    # Bottom row slots (Slots 6 to 10 from right to left)
    for j in range(5):
        slot_idx = 5 + j
        c = commits[slot_idx]
        col_reverse = 4 - j # 4, 3, 2, 1, 0
        x = pad_x + col_reverse * (slot_w + gap_x)
        y = 152
        cx = x + slot_w / 2
        cy = 138 # on bottom rail

        t_hit = 58.0 + j * 8.0 # 58%, 66%, 74%, 82%, 90%

        # Last pellet is the Golden Energizer
        is_energizer = (slot_idx == 9)
        pellet_fill = "#FACC15" if is_energizer else "#22C55E"
        pellet_r = 7.5 if is_energizer else 4

        css_animations.append(f"""
      @keyframes eatPellet_{slot_idx+1} {{
        0%, {t_hit-0.5:.1f}% {{ opacity: 1; transform: scale(1); }}
        {t_hit:.1f}%        {{ opacity: 1; transform: scale(1.6); fill: #FFFFFF; }}
        {t_hit+0.5:.1f}%, 94% {{ opacity: 0; transform: scale(0); }}
        96%, 100%           {{ opacity: 1; transform: scale(1); }}
      }}
      .pellet-{slot_idx+1} {{
        animation: eatPellet_{slot_idx+1} 16s infinite ease-out;
        transform-origin: {cx}px {cy}px;
      }}
      @keyframes slotGlow_{slot_idx+1} {{
        0%, {t_hit-0.5:.1f}% {{ stroke: #30363D; }}
        {t_hit:.1f}%        {{ stroke: #FFFFFF; }}
        {t_hit+1.0:.1f}%, 94% {{ stroke: #10B981; }}
        96%, 100%           {{ stroke: #30363D; }}
      }}
      .slot-box-{slot_idx+1} {{
        animation: slotGlow_{slot_idx+1} 16s infinite ease-out;
      }}
      @keyframes slotStatus_{slot_idx+1} {{
        0%, {t_hit-0.5:.1f}% {{ fill: #64748B; }}
        {t_hit:.1f}%, 94%   {{ fill: #34D399; font-weight: 700; }}
        96%, 100%           {{ fill: #64748B; }}
      }}
      .slot-status-{slot_idx+1} {{
        animation: slotStatus_{slot_idx+1} 16s infinite ease-out;
      }}""")

        sha_safe = html.escape(c["sha"])
        proj_safe = html.escape(c["project"])
        title_safe = html.escape(c["title"])

        slot_markup = f"""    <!-- Slot {slot_idx+1} -->
    <g transform="translate({x}, {y})">
      <rect width="{slot_w}" height="{slot_h}" rx="5" fill="#0D1117" stroke="#30363D" stroke-width="1.2" class="slot-box-{slot_idx+1}"/>
      <text x="8" y="15" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="700">#{sha_safe}</text>
      <text x="{slot_w-8}" y="15" text-anchor="end" fill="#34D399" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="700">{proj_safe}</text>
      <text x="8" y="30" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="500">{title_safe}</text>
      <text x="8" y="42" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" class="slot-status-{slot_idx+1}">● INGESTING COMMIT</text>
    </g>
    <!-- Pellet {slot_idx+1} on bottom rail -->
    <circle cx="{cx}" cy="{cy}" r="{pellet_r}" fill="{pellet_fill}" class="pellet-{slot_idx+1}"/>"""
        bottom_slots_svg.append(slot_markup)

    css_combined = "\n".join(css_animations)

    svg_content = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      <![CDATA[
{css_combined}

      /* Pac-Man Continuous Path Across 10 Slots */
      @keyframes pacmanTrack {{
        0%   {{ transform: translate(35px, 112px) scaleX(1); opacity: 1; }}
        42%  {{ transform: translate(770px, 112px) scaleX(1); opacity: 1; }}
        46%  {{ transform: translate(805px, 125px) scaleX(1); opacity: 1; }} /* right turnaround */
        49%  {{ transform: translate(770px, 138px) scaleX(-1); opacity: 1; }}
        91%  {{ transform: translate(110px, 138px) scaleX(-1); opacity: 1; }} /* eats energizer */
        93%  {{ transform: translate(60px, 138px) scaleX(1); opacity: 1; }} /* turns around & chomps ghost */
        96%  {{ transform: translate(35px, 138px) scaleX(1); opacity: 1; }}
        98%  {{ transform: translate(35px, 112px) scaleX(1); opacity: 0; }}
        100% {{ transform: translate(35px, 112px) scaleX(1); opacity: 1; }}
      }}
      .pacman-sprite {{
        animation: pacmanTrack 16s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }}

      /* Mouth Chomp */
      @keyframes pacmanChomp {{
        0%, 100% {{ d: path('M0,0 L12,-12 A15,15 0 1,0 12,12 Z'); }}
        50%      {{ d: path('M0,0 L15,-2 A15,15 0 1,0 15,2 Z'); }}
      }}
      .pacman-body {{
        animation: pacmanChomp 0.22s infinite ease-in-out;
      }}

      /* Blinky Ghost Chase & Blue Frightened State */
      @keyframes ghostTrack {{
        0%   {{ transform: translate(750px, 112px); fill: #EF4444; }}
        44%  {{ transform: translate(810px, 125px); fill: #EF4444; }}
        49%  {{ transform: translate(760px, 138px); fill: #EF4444; }}
        89%  {{ transform: translate(150px, 138px); fill: #EF4444; }}
        90%  {{ transform: translate(130px, 138px); fill: #3B82F6; }} /* Turns Blue! */
        93%  {{ transform: translate(80px, 138px) scale(0); fill: #3B82F6; opacity: 0; }} /* Eaten! */
        97%  {{ opacity: 0; }}
        100% {{ transform: translate(750px, 112px); fill: #EF4444; opacity: 1; }}
      }}
      .ghost-blinky {{
        animation: ghostTrack 16s infinite ease-in-out;
      }}

      /* Floating Score Popup when Ghost is Eaten */
      @keyframes ghostScore {{
        0%, 91%  {{ opacity: 0; transform: translate(80px, 135px); }}
        93%      {{ opacity: 1; transform: translate(80px, 115px); }}
        96%, 100%{{ opacity: 0; transform: translate(80px, 105px); }}
      }}
      .ghost-score-text {{
        animation: ghostScore 16s infinite ease-out;
      }}

      /* Top HUD Marquee Ticker */
      @keyframes hudTicker {{
        0%, 45%   {{ fill: #38BDF8; }}
        46%, 90%  {{ fill: #34D399; }}
        91%, 100% {{ fill: #FACC15; }}
      }}
      .hud-marquee {{
        animation: hudTicker 16s infinite ease-in-out;
      }}
      ]]>
    </style>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Transparent Frame with Dark Slate Border -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Arcade HUD -->
  <g transform="translate(28, 26)">
    <text x="0" y="0" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="12" font-weight="800" letter-spacing="1">
      🟡 PAC-MAN // REAL-TIME COMMIT CHOMPER
    </text>

    <!-- Center Status Ticker -->
    <text x="480" y="0" text-anchor="middle" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="0.8" class="hud-marquee">
      10 LATEST COMMITS • AUTO-RUNNER
    </text>

    <!-- Right XP & Lives -->
    <g transform="translate(824, 0)" text-anchor="end">
      <text x="0" y="0" fill="#38BDF8" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700">
        XP: 2,211 • LIVES: 🟡 🟡 🟡
      </text>
    </g>
  </g>

  <!-- Dual-Deck Neon Maze Rails -->
  <g stroke="#0284C7" stroke-width="2" opacity="0.45">
    <!-- Top Rail -->
    <line x1="35" y1="112" x2="805" y2="112"/>
    <!-- Bottom Rail -->
    <line x1="35" y1="138" x2="805" y2="138"/>
    <!-- Right Loop Turnaround Arc -->
    <path d="M805,112 A13,13 0 0,1 805,138" fill="none"/>
    <!-- Left Loop Arc -->
    <path d="M35,138 A13,13 0 0,1 35,112" fill="none"/>
  </g>

  <!-- Top 5 Commit Slots (Decks 1-5) -->
  <g>
    {''.join(top_slots_svg)}
  </g>

  <!-- Bottom 5 Commit Slots (Decks 6-10) -->
  <g>
    {''.join(bottom_slots_svg)}
  </g>

  <!-- Floating +400 XP Ghost Score Popup -->
  <g class="ghost-score-text">
    <text x="0" y="0" fill="#FDE047" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800">+400 XP</text>
  </g>

  <!-- Blinky Ghost (Red / Blue Frightened) -->
  <g class="ghost-blinky">
    <path d="M-10,6 L-10,-4 A10,10 0 0,1 10,-4 L10,6 L6,4 L3,6 L0,4 L-3,6 L-6,4 L-10,6 Z"/>
    <circle cx="-3" cy="-3" r="2.5" fill="#FFFFFF"/>
    <circle cx="-2.5" cy="-3" r="1.2" fill="#1E3A8A"/>
    <circle cx="3" cy="-3" r="2.5" fill="#FFFFFF"/>
    <circle cx="3.5" cy="-3" r="1.2" fill="#1E3A8A"/>
  </g>

  <!-- Animated Pac-Man Sprite -->
  <g class="pacman-sprite">
    <path class="pacman-body" fill="#FACC15" d="M0,0 L12,-12 A15,15 0 1,0 12,12 Z"/>
  </g>
</svg>"""

    out_file = os.path.join(OUTPUT_DIR, "arcade-pacman-commit-eater.svg")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[PACMAN] Successfully generated {out_file}")

if __name__ == "__main__":
    generate_pacman_game_svg()
