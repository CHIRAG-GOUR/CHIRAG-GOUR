"""
Retro Arcade Rocket Ship Commit Defender Game
Generates an animated SVG of a retro spacecraft firing lasers at GitHub
contribution blocks, vaporizing them one by one until only the glowing name
'CHIRAG' remains on the grid.
"""

import os
import random

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

def get_chirag_name_cells():
    """
    Returns a set of (col, row) coordinates forming the word 'CHIRAG'
    in a 52-column x 7-row contribution grid.
    Letters are 5x7 or 3x7 pixel blocks, centered in the grid.
    """
    letters = {
        'C': [
            (1,0),(2,0),(3,0),(4,0),
            (0,1),
            (0,2),
            (0,3),
            (0,4),
            (0,5),
            (1,6),(2,6),(3,6),(4,6)
        ],
        'H': [
            (0,0),(4,0),
            (0,1),(4,1),
            (0,2),(4,2),
            (0,3),(1,3),(2,3),(3,3),(4,3),
            (0,4),(4,4),
            (0,5),(4,5),
            (0,6),(4,6)
        ],
        'I': [
            (0,0),(1,0),(2,0),
            (1,1),
            (1,2),
            (1,3),
            (1,4),
            (1,5),
            (0,6),(1,6),(2,6)
        ],
        'R': [
            (0,0),(1,0),(2,0),(3,0),
            (0,1),(4,1),
            (0,2),(4,2),
            (0,3),(1,3),(2,3),(3,3),
            (0,4),(3,4),
            (0,5),(4,5),
            (0,6),(4,6)
        ],
        'A': [
            (1,0),(2,0),(3,0),
            (0,1),(4,1),
            (0,2),(4,2),
            (0,3),(1,3),(2,3),(3,3),(4,3),
            (0,4),(4,4),
            (0,5),(4,5),
            (0,6),(4,6)
        ],
        'G': [
            (1,0),(2,0),(3,0),(4,0),
            (0,1),
            (0,2),
            (0,3),(2,3),(3,3),(4,3),
            (0,4),(4,4),
            (0,5),(4,5),
            (1,6),(2,6),(3,6),(4,6)
        ]
    }

    # Offsets in 52 columns: C at 7, H at 14, I at 21, R at 26, A at 33, G at 40
    offsets = [7, 14, 21, 26, 33, 40]
    names = ['C', 'H', 'I', 'R', 'A', 'G']

    name_cells = set()
    for name, base_col in zip(names, offsets):
        for c_off, r in letters[name]:
            name_cells.add((base_col + c_off, r))

    return name_cells

def generate_rocket_game_svg():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    cols = 52
    rows = 7
    cell_size = 11
    cell_gap = 3
    pad_x = 42
    pad_y = 52

    width = 880
    height = 240

    # Authentic GitHub Contribution Dark Theme Palette
    c0 = "#161B22" # Empty cell
    c1 = "#0E4429" # Level 1
    c2 = "#006D32" # Level 2
    c3 = "#26A641" # Level 3
    c4 = "#39D353" # Level 4

    name_cells = get_chirag_name_cells()

    # Reproducible commit density across the year
    random.seed(42)
    grid_svg = []
    
    # Generate CSS animations for each column
    column_keyframes = []
    for c in range(cols):
        # Rocket sweeps from col 0 to col 51 between 6.0% and 68.0% of the 16s cycle
        t_start = 6.0 + (c / 51.0) * 62.0
        t_flash = t_start + 0.25
        t_dead = t_start + 0.65
        t_respawn = 92.5
        
        kf = f"""      @keyframes kf_col_{c} {{
        0%, {t_start:.2f}% {{ opacity: 1; transform: scale(1); }}
        {t_flash:.2f}% {{ opacity: 1; fill: #FFFFFF; transform: scale(1.35); }}
        {t_dead:.2f}%, {t_respawn:.2f}% {{ opacity: 0.12; fill: #161B22; transform: scale(0.9); }}
        {t_respawn+3.5:.2f}%, 100% {{ opacity: 1; transform: scale(1); }}
      }}
      .col-hit-{c} {{ animation: kf_col_{c} 16s infinite ease-out; }}"""
        column_keyframes.append(kf)

    # Render each cell
    for col in range(cols):
        for row in range(rows):
            x = pad_x + col * (cell_size + cell_gap)
            y = pad_y + row * (cell_size + cell_gap)

            is_name_cell = (col, row) in name_cells

            if is_name_cell:
                # Name cells stay intact, glowing neon green and pulsing when uncovered
                initial_color = random.choices([c2, c3, c4], weights=[0.15, 0.4, 0.45])[0]
                cell_markup = (
                    f'<rect x="{x}" y="{y}" width="{cell_size}" height="{cell_size}" rx="2" '
                    f'fill="{initial_color}" class="name-block" '
                    f'style="animation-delay: {col * 0.03:.2f}s;"/>'
                )
            else:
                # Debris cells get hit and vaporized as the rocket sweeps past
                # Stagger hit order from bottom (row 6) to top (row 0) as lasers fly up
                if col < 8:
                    weights = [0.55, 0.25, 0.12, 0.08, 0.0]
                elif col < 18:
                    weights = [0.35, 0.30, 0.22, 0.13, 0.0]
                elif col < 32:
                    weights = [0.20, 0.30, 0.28, 0.16, 0.06]
                elif col < 46:
                    weights = [0.06, 0.14, 0.32, 0.26, 0.22]
                else:
                    weights = [0.10, 0.18, 0.34, 0.24, 0.14]

                color = random.choices([c0, c1, c2, c3, c4], weights=weights)[0]
                row_delay = (6 - row) * 0.05 # Bottom row pops first
                cell_markup = (
                    f'<rect x="{x}" y="{y}" width="{cell_size}" height="{cell_size}" rx="2" '
                    f'fill="{color}" class="col-hit-{col}" '
                    f'style="animation-delay: {row_delay:.2f}s; transform-origin: {x+5.5}px {y+5.5}px;"/>'
                )

            grid_svg.append(cell_markup)

    css_content = "\n".join(column_keyframes)

    svg_content = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Rocket Hull Gradient -->
    <linearGradient id="rocket_hull" x1="0" y1="0" x2="28" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Cockpit Canopy Glow -->
    <linearGradient id="cockpit_glow" x1="0" y1="0" x2="0" y2="10" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>

    <style>
      <![CDATA[
{css_content}

      /* Rocket Horizontal Flight Path (Centered Under Columns) */
      @keyframes rocketFly {{
        0%   {{ transform: translate(16px, 192px); opacity: 0; }}
        4%   {{ transform: translate(22px, 192px); opacity: 1; }}
        6%   {{ transform: translate(33.5px, 192px); opacity: 1; }} /* Col 0 Center */
        68%  {{ transform: translate(747.5px, 192px); opacity: 1; }} /* Col 51 Center */
        72%  {{ transform: translate(735px, 192px); opacity: 1; }}
        78%  {{ transform: translate(390px, 192px); opacity: 1; }} /* Center hover */
        91%  {{ transform: translate(390px, 192px); opacity: 1; }}
        96%  {{ transform: translate(16px, 192px); opacity: 0; }}
        100% {{ transform: translate(16px, 192px); opacity: 0; }}
      }}
      .rocket-ship {{
        animation: rocketFly 16s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
      }}

      /* Continuous Upward Rapid-Fire Lasers */
      @keyframes laserPulse {{
        0%   {{ transform: translateY(0); opacity: 1; }}
        80%  {{ opacity: 0.9; }}
        100% {{ transform: translateY(-138px); opacity: 0; }}
      }}
      .laser-bolt-1 {{
        animation: laserPulse 0.24s infinite linear;
      }}
      .laser-bolt-2 {{
        animation: laserPulse 0.24s infinite linear 0.12s;
      }}

      /* Laser Cannons Firing Gate (Only fire while sweeping across grid) */
      @keyframes laserFiringGate {{
        0%, 5.5% {{ opacity: 0; }}
        6.0%, 68.5% {{ opacity: 1; }}
        69.0%, 100% {{ opacity: 0; }}
      }}
      .laser-group {{
        animation: laserFiringGate 16s infinite step-end;
      }}

      /* Thruster Flame Flicker */
      @keyframes thrusterFlicker {{
        0%, 100% {{ transform: scaleY(1); opacity: 0.9; }}
        50%      {{ transform: scaleY(1.4); opacity: 1; }}
      }}
      .thruster-flame {{
        animation: thrusterFlicker 0.15s infinite ease-in-out;
        transform-origin: 14px 18px;
      }}

      /* Name Blocks (CHIRAG) Glow and Reveal */
      @keyframes nameGlow {{
        0%, 68% {{
          fill: #26A641;
          filter: none;
        }}
        73%, 91% {{
          fill: #39D353;
          filter: drop-shadow(0 0 6px #22C55E);
        }}
        95%, 100% {{
          fill: #26A641;
          filter: none;
        }}
      }}
      .name-block {{
        animation: nameGlow 16s infinite ease-in-out;
      }}

      /* Victory Decrypted Banner */
      @keyframes victoryBanner {{
        0%, 71%   {{ opacity: 0; transform: translateY(4px); }}
        74%, 90%  {{ opacity: 1; transform: translateY(0); }}
        93%, 100% {{ opacity: 0; transform: translateY(-4px); }}
      }}
      .victory-banner {{
        animation: victoryBanner 16s infinite ease-in-out;
      }}

      /* Score Ticker Pulse */
      @keyframes scorePulse {{
        0%, 100% {{ opacity: 0.85; }}
        50%      {{ opacity: 1; filter: drop-shadow(0 0 4px #38BDF8); }}
      }}
      .hud-score {{
        animation: scorePulse 2s infinite ease-in-out;
      }}
      ]]>
    </style>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Seamless Transparent Canvas with Subtle Native Border -->
  <rect x="2" y="2" width="{width-4}" height="{height-4}" rx="8" stroke="#30363D" stroke-width="1" fill="none"/>

  <!-- Top Retro Arcade HUD -->
  <g transform="translate(32, 28)">
    <!-- Arcade Ship Icon -->
    <g transform="translate(0, -11) scale(0.65)">
      <polygon points="10,0 20,16 0,16" fill="#38BDF8"/>
      <polygon points="7,16 10,22 13,16" fill="#F97316"/>
    </g>

    <text x="22" y="0" fill="#E6EDF3" font-family="'JetBrains Mono', Consolas, monospace" font-size="12.5" font-weight="700" letter-spacing="0.5">
      SPACE DEFENDER // 2,211 COMMITS
    </text>

    <!-- Mission Objective -->
    <text x="408" y="0" text-anchor="middle" fill="#38BDF8" class="hud-score" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1">
      MISSION: VAPORIZE TO DECRYPT
    </text>

    <!-- Stage and Lives -->
    <g transform="translate(815, 0)" text-anchor="end">
      <text x="0" y="0" fill="#FACC15" font-family="'JetBrains Mono', Consolas, monospace" font-size="10.5" font-weight="600">
        STAGE: 2026 • LIVES: 🚀 🚀 🚀
      </text>
    </g>
  </g>

  <!-- Month Labels -->
  <g fill="#7D8590" font-family="'JetBrains Mono', Consolas, monospace" font-size="9.5" transform="translate(0, 44)">
    <text x="42">Nov</text>
    <text x="112">Dec</text>
    <text x="182">Jan</text>
    <text x="252">Feb</text>
    <text x="322">Mar</text>
    <text x="392">Apr</text>
    <text x="462">May</text>
    <text x="532">Jun</text>
    <text x="602">Jul</text>
    <text x="672">Aug</text>
    <text x="732">Sep</text>
    <text x="782">Oct</text>
    <text x="832">Nov</text>
  </g>

  <!-- Day Labels -->
  <g fill="#7D8590" font-family="'JetBrains Mono', Consolas, monospace" font-size="9.5" text-anchor="end" transform="translate(35, 0)">
    <text y="{pad_y + 1 * (cell_size + cell_gap) + 9}">Mon</text>
    <text y="{pad_y + 3 * (cell_size + cell_gap) + 9}">Wed</text>
    <text y="{pad_y + 5 * (cell_size + cell_gap) + 9}">Fri</text>
  </g>

  <!-- Contribution Heatmap Cells (Target Debris + Name Matrix) -->
  <g>
    {''.join(grid_svg)}
  </g>

  <!-- Victory Decrypted Banner (Reveals when CHIRAG is uncovered) -->
  <g class="victory-banner" transform="translate(440, 168)" text-anchor="middle">
    <rect x="-180" y="-13" width="360" height="20" rx="4" fill="#0D1117" stroke="#39D353" stroke-width="1" opacity="0.95"/>
    <text x="0" y="2" fill="#39D353" font-family="'JetBrains Mono', Consolas, monospace" font-size="11" font-weight="800" letter-spacing="1.5">
      ★ MISSION COMPLETE: PILOT CHIRAG ★
    </text>
  </g>

  <!-- Flying Retro Rocket Ship with Rapid Lasers -->
  <g class="rocket-ship">
    <!-- Upward Laser Cannons (Twin Blaster Beams) -->
    <g class="laser-group">
      <!-- Left Cannon Lasers -->
      <g class="laser-bolt-1">
        <rect x="2" y="-14" width="2.5" height="14" rx="1.25" fill="#38BDF8"/>
        <rect x="2.5" y="-12" width="1.5" height="10" rx="0.75" fill="#FFFFFF"/>
      </g>
      <g class="laser-bolt-2">
        <rect x="2" y="-14" width="2.5" height="14" rx="1.25" fill="#38BDF8"/>
        <rect x="2.5" y="-12" width="1.5" height="10" rx="0.75" fill="#FFFFFF"/>
      </g>

      <!-- Right Cannon Lasers -->
      <g class="laser-bolt-1">
        <rect x="23.5" y="-14" width="2.5" height="14" rx="1.25" fill="#38BDF8"/>
        <rect x="24" y="-12" width="1.5" height="10" rx="0.75" fill="#FFFFFF"/>
      </g>
      <g class="laser-bolt-2">
        <rect x="23.5" y="-14" width="2.5" height="14" rx="1.25" fill="#38BDF8"/>
        <rect x="24" y="-12" width="1.5" height="10" rx="0.75" fill="#FFFFFF"/>
      </g>
    </g>

    <!-- Spacecraft Fuselage -->
    <g transform="translate(0, 0)">
      <!-- Left Delta Wing -->
      <polygon points="6,12 0,22 8,18" fill="#0284C7"/>
      <!-- Right Delta Wing -->
      <polygon points="22,12 28,22 20,18" fill="#0284C7"/>

      <!-- Wingtip Cannons -->
      <rect x="0" y="7" width="2" height="7" rx="1" fill="#38BDF8"/>
      <rect x="26" y="7" width="2" height="7" rx="1" fill="#38BDF8"/>

      <!-- Main Hull -->
      <polygon points="14,0 23,18 5,18" fill="url(#rocket_hull)"/>

      <!-- Cockpit Glass Canopy -->
      <ellipse cx="14" cy="9" rx="3.5" ry="5.5" fill="url(#cockpit_glow)"/>
      <ellipse cx="13" cy="7.5" rx="1.5" ry="2.5" fill="#FFFFFF" opacity="0.8"/>

      <!-- Thruster Nozzle -->
      <rect x="10.5" y="18" width="7" height="3" rx="1" fill="#1E293B"/>

      <!-- Animated Jet Plasma Thruster -->
      <polygon points="11,21 14,31 17,21" fill="#F97316" class="thruster-flame"/>
      <polygon points="12.5,21 14,27 15.5,21" fill="#FDE047" class="thruster-flame"/>
    </g>
  </g>
</svg>"""

    out_file = os.path.join(OUTPUT_DIR, "arcade-rocket-commit-game.svg")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[ROCKET] Successfully generated {out_file}")

if __name__ == "__main__":
    generate_rocket_game_svg()
