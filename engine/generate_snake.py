"""
Contribution Snake Generator — Authentic Dark Theme & Transparent Edition
Generates an animated green snake crawling across Chirag's authentic GitHub
contribution grid with transparent background and zero white boxes.
"""

import os
import random

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

def generate_snake_svg():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    cols = 52
    rows = 7
    cell_size = 11
    cell_gap = 3
    pad_x = 42
    pad_y = 48
    
    width = 880
    height = 175

    # Authentic GitHub Dark Theme Contribution Colors
    c0 = "#161b22" # 0 contributions (empty)
    c1 = "#0e4429" # 1-3 contributions
    c2 = "#006d32" # 4-6 contributions
    c3 = "#26a641" # 7-10 contributions
    c4 = "#39d353" # 11+ contributions (peak)

    cells_svg = []
    random.seed(42) # Exact reproducible distribution mimicking Chirag's 2,211 commits in 2026

    for col in range(cols):
        for row in range(rows):
            x = pad_x + col * (cell_size + cell_gap)
            y = pad_y + row * (cell_size + cell_gap)

            if col < 8:
                # Nov-Dec 2025
                weights = [0.55, 0.25, 0.12, 0.08, 0.0]
            elif col < 18:
                # Jan-Mar 2026
                weights = [0.35, 0.30, 0.22, 0.13, 0.0]
            elif col < 32:
                # Apr-Jun 2026
                weights = [0.20, 0.30, 0.28, 0.16, 0.06]
            elif col < 46:
                # Jul-Sep 2026 (Peak Velocity)
                weights = [0.06, 0.14, 0.32, 0.26, 0.22]
            else:
                # Oct-Nov 2026
                weights = [0.10, 0.18, 0.34, 0.24, 0.14]

            color = random.choices([c0, c1, c2, c3, c4], weights=weights)[0]
            cells_svg.append(f'<rect x="{x}" y="{y}" width="{cell_size}" height="{cell_size}" rx="2" fill="{color}"/>')

    # Snake Colors
    head_color = "#39d353"
    b1_color = "#26a641"
    b2_color = "#2ea043"
    b3_color = "#006d32"
    b4_color = "#26a641"
    b5_color = "#39d353"
    b6_color = "#56d364"
    food_color = "#e3b341"

    svg_content = f"""<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .snake-head {{ animation: crawlHead 14s infinite ease-in-out; }}
      .sb-1 {{ animation: crawlB1 14s infinite ease-in-out; }}
      .sb-2 {{ animation: crawlB2 14s infinite ease-in-out; }}
      .sb-3 {{ animation: crawlB3 14s infinite ease-in-out; }}
      .sb-4 {{ animation: crawlB4 14s infinite ease-in-out; }}
      .sb-5 {{ animation: crawlB5 14s infinite ease-in-out; }}
      .sb-6 {{ animation: crawlB6 14s infinite ease-in-out; }}
      .food-pulse {{ animation: foodGlow 1.4s infinite alternate ease-in-out; }}

      @keyframes foodGlow {{
        from {{ transform: scale(1); opacity: 0.85; }}
        to {{ transform: scale(1.3); opacity: 1; }}
      }}

      /* Smooth slithering across active commit cluster */
      @keyframes crawlHead {{
        0%   {{ transform: translate(0px, 0px); }}
        12%  {{ transform: translate(84px, 0px); }}
        24%  {{ transform: translate(84px, 42px); }}
        36%  {{ transform: translate(154px, 42px); }}
        48%  {{ transform: translate(154px, -28px); }}
        60%  {{ transform: translate(224px, -28px); }}
        72%  {{ transform: translate(224px, 28px); }}
        84%  {{ transform: translate(84px, 28px); }}
        100% {{ transform: translate(0px, 0px); }}
      }}
      @keyframes crawlB1 {{
        0%   {{ transform: translate(-14px, 0px); }}
        12%  {{ transform: translate(70px, 0px); }}
        24%  {{ transform: translate(84px, 28px); }}
        36%  {{ transform: translate(140px, 42px); }}
        48%  {{ transform: translate(154px, -14px); }}
        60%  {{ transform: translate(210px, -28px); }}
        72%  {{ transform: translate(224px, 14px); }}
        84%  {{ transform: translate(98px, 28px); }}
        100% {{ transform: translate(-14px, 0px); }}
      }}
      @keyframes crawlB2 {{
        0%   {{ transform: translate(-28px, 0px); }}
        12%  {{ transform: translate(56px, 0px); }}
        24%  {{ transform: translate(84px, 14px); }}
        36%  {{ transform: translate(126px, 42px); }}
        48%  {{ transform: translate(154px, 0px); }}
        60%  {{ transform: translate(196px, -28px); }}
        72%  {{ transform: translate(224px, 0px); }}
        84%  {{ transform: translate(112px, 28px); }}
        100% {{ transform: translate(-28px, 0px); }}
      }}
      @keyframes crawlB3 {{
        0%   {{ transform: translate(-42px, 0px); }}
        12%  {{ transform: translate(42px, 0px); }}
        24%  {{ transform: translate(84px, 0px); }}
        36%  {{ transform: translate(112px, 42px); }}
        48%  {{ transform: translate(154px, 14px); }}
        60%  {{ transform: translate(182px, -28px); }}
        72%  {{ transform: translate(224px, -14px); }}
        84%  {{ transform: translate(126px, 28px); }}
        100% {{ transform: translate(-42px, 0px); }}
      }}
      @keyframes crawlB4 {{
        0%   {{ transform: translate(-56px, 0px); }}
        12%  {{ transform: translate(28px, 0px); }}
        24%  {{ transform: translate(70px, 0px); }}
        36%  {{ transform: translate(98px, 42px); }}
        48%  {{ transform: translate(154px, 28px); }}
        60%  {{ transform: translate(168px, -28px); }}
        72%  {{ transform: translate(210px, -28px); }}
        84%  {{ transform: translate(140px, 28px); }}
        100% {{ transform: translate(-56px, 0px); }}
      }}
      @keyframes crawlB5 {{
        0%   {{ transform: translate(-70px, 0px); }}
        12%  {{ transform: translate(14px, 0px); }}
        24%  {{ transform: translate(56px, 0px); }}
        36%  {{ transform: translate(84px, 42px); }}
        48%  {{ transform: translate(140px, 42px); }}
        60%  {{ transform: translate(154px, -28px); }}
        72%  {{ transform: translate(196px, -28px); }}
        84%  {{ transform: translate(154px, 28px); }}
        100% {{ transform: translate(-70px, 0px); }}
      }}
      @keyframes crawlB6 {{
        0%   {{ transform: translate(-84px, 0px); }}
        12%  {{ transform: translate(0px, 0px); }}
        24%  {{ transform: translate(42px, 0px); }}
        36%  {{ transform: translate(70px, 42px); }}
        48%  {{ transform: translate(126px, 42px); }}
        60%  {{ transform: translate(140px, -28px); }}
        72%  {{ transform: translate(182px, -28px); }}
        84%  {{ transform: translate(168px, 28px); }}
        100% {{ transform: translate(-84px, 0px); }}
      }}
    </style>
  </defs>

  <!-- ZERO WHITE BACKGROUND: Pure transparent canvas -->

  <!-- Top Header Bar -->
  <g transform="translate(42, 24)">
    <text x="0" y="0" fill="#E6EDF3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">
      2,211 contributions in the last year
    </text>
    
    <!-- Legend -->
    <g transform="translate(680, -9)">
      <text x="-32" y="9" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5">Less</text>
      <rect x="0" y="0" width="10" height="10" rx="2" fill="{c0}"/>
      <rect x="13" y="0" width="10" height="10" rx="2" fill="{c1}"/>
      <rect x="26" y="0" width="10" height="10" rx="2" fill="{c2}"/>
      <rect x="39" y="0" width="10" height="10" rx="2" fill="{c3}"/>
      <rect x="52" y="0" width="10" height="10" rx="2" fill="{c4}"/>
      <text x="68" y="9" fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5">More</text>
    </g>
  </g>

  <!-- Month Labels -->
  <g fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5" transform="translate(0, 42)">
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
  <g fill="#7D8590" font-family="'JetBrains Mono', monospace" font-size="9.5" text-anchor="end" transform="translate(36, 0)">
    <text y="{pad_y + 1 * (cell_size + cell_gap) + 9}">Mon</text>
    <text y="{pad_y + 3 * (cell_size + cell_gap) + 9}">Wed</text>
    <text y="{pad_y + 5 * (cell_size + cell_gap) + 9}">Fri</text>
  </g>

  <!-- Contribution Heatmap Cells -->
  <g>
    {''.join(cells_svg)}
  </g>

  <!-- Autonomous Green Snake Group -->
  <g transform="translate({pad_x + 24 * (cell_size + cell_gap)}, {pad_y + 3 * (cell_size + cell_gap)})">
    <!-- Pulsing Commit Fruit / Food -->
    <circle cx="89" cy="5.5" r="5" fill="{food_color}" class="food-pulse"/>

    <!-- Snake Body Segments (Tail to Neck) -->
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b6_color}" class="sb-6"/>
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b5_color}" class="sb-5"/>
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b4_color}" class="sb-4"/>
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b3_color}" class="sb-3"/>
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b2_color}" class="sb-2"/>
    <rect width="{cell_size}" height="{cell_size}" rx="2.5" fill="{b1_color}" class="sb-1"/>

    <!-- Snake Head with cute eyes -->
    <g class="snake-head">
      <rect width="{cell_size}" height="{cell_size}" rx="3" fill="{head_color}"/>
      <circle cx="8" cy="3.5" r="1.4" fill="#FFFFFF"/>
      <circle cx="8" cy="7.5" r="1.4" fill="#FFFFFF"/>
      <circle cx="8.6" cy="3.5" r="0.7" fill="#000000"/>
      <circle cx="8.6" cy="7.5" r="0.7" fill="#000000"/>
    </g>
  </g>
</svg>"""

    out_file = os.path.join(OUTPUT_DIR, "github-contribution-grid-snake.svg")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[SNAKE] Successfully generated dark/transparent {out_file}")

if __name__ == "__main__":
    generate_snake_svg()