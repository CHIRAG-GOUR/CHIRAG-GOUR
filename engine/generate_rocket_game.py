"""
Space Defender — 3D Chirag pilots a ship along a horizontal lane under his real
contribution graph and fires ONLY at the cells that spell his name. Each hit flashes
and locks in gold, so CHIRAG is written out shot by shot; then the run resets.
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import character as hero  # noqa: E402
from contributions import load_grid, LEVEL_COLORS  # noqa: E402

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))

LETTERS = {
    "C": [(1, 0), (2, 0), (3, 0), (4, 0), (0, 1), (0, 2), (0, 3), (0, 4), (0, 5), (1, 6), (2, 6), (3, 6), (4, 6)],
    "H": [(0, 0), (4, 0), (0, 1), (4, 1), (0, 2), (4, 2), (0, 3), (1, 3), (2, 3), (3, 3), (4, 3),
          (0, 4), (4, 4), (0, 5), (4, 5), (0, 6), (4, 6)],
    "I": [(0, 0), (1, 0), (2, 0), (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (0, 6), (1, 6), (2, 6)],
    "R": [(0, 0), (1, 0), (2, 0), (3, 0), (0, 1), (4, 1), (0, 2), (4, 2), (0, 3), (1, 3), (2, 3), (3, 3),
          (0, 4), (3, 4), (0, 5), (4, 5), (0, 6), (4, 6)],
    "A": [(1, 0), (2, 0), (3, 0), (0, 1), (4, 1), (0, 2), (4, 2), (0, 3), (1, 3), (2, 3), (3, 3), (4, 3),
          (0, 4), (4, 4), (0, 5), (4, 5), (0, 6), (4, 6)],
    "G": [(1, 0), (2, 0), (3, 0), (4, 0), (0, 1), (0, 2), (0, 3), (2, 3), (3, 3), (4, 3),
          (0, 4), (4, 4), (0, 5), (4, 5), (1, 6), (2, 6), (3, 6), (4, 6)],
}
# Column where each letter starts in the 52-week grid: C H I R A G
OFFSETS = [7, 14, 21, 26, 33, 40]


def get_chirag_name_cells():
    """(col, row) cells that spell CHIRAG across the 52 x 7 contribution grid."""
    cells = set()
    for letter, base in zip("CHIRAG", OFFSETS):
        for dc, r in LETTERS[letter]:
            cells.add((base + dc, r))
    return cells


MONO = "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
W, H = 880, 240
CELL, STRIDE = 11, 15
PAD_X = (W - 52 * STRIDE + (STRIDE - CELL)) // 2
PAD_Y = 52
SHIP_Y = 206          # ship centre line (horizontal flight lane)
CYCLE = 18.0          # seconds per run
SWEEP_START, SWEEP_END = 5.0, 74.0   # % of the cycle spent crossing the grid
GOLD = "#FACC15"


def _pct_for_col(c):
    return SWEEP_START + (SWEEP_END - SWEEP_START) * c / 51.0


def generate_rocket_game_svg():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    grid = load_grid()["grid"]
    name_cells = get_chirag_name_cells()
    name_cols = sorted({c for c, _ in name_cells})
    top_row_of = {c: min(r for cc, r in name_cells if cc == c) for c in name_cols}
    lane_top = SHIP_Y - 26  # where bolts leave the ship

    css = [
        f"@keyframes fly{{0%{{transform:translate({PAD_X - 60}px,{SHIP_Y}px)}}"
        f"{SWEEP_START}%{{transform:translate({PAD_X + CELL / 2:.1f}px,{SHIP_Y}px)}}"
        f"{SWEEP_END}%{{transform:translate({PAD_X + 51 * STRIDE + CELL / 2:.1f}px,{SHIP_Y}px)}}"
        f"80%,93%{{transform:translate({W / 2:.0f}px,{SHIP_Y}px)}}"
        f"100%{{transform:translate({W + 60}px,{SHIP_Y}px)}}}}"
        f".ship{{animation:fly {CYCLE}s infinite linear}}",
        f".hud-a{{animation:hudA {CYCLE}s infinite steps(1)}}.hud-b{{opacity:0;animation:hudB {CYCLE}s infinite steps(1)}}"
        f"@keyframes hudA{{0%{{opacity:1}}{SWEEP_END + 2}%{{opacity:0}}96%{{opacity:1}}}}"
        f"@keyframes hudB{{0%{{opacity:0}}{SWEEP_END + 2}%{{opacity:1}}96%{{opacity:0}}}}",
        "@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.45)}}"
        ".flame{transform-box:fill-box;transform-origin:top;animation:flame .18s infinite}",
    ]

    # one laser bolt per name column, fired the moment the ship is underneath it
    bolts = []
    for c in name_cols:
        p = _pct_for_col(c)
        travel = lane_top - (PAD_Y + top_row_of[c] * STRIDE)
        x = PAD_X + c * STRIDE + CELL / 2 - 1.5
        css.append(
            f"@keyframes b{c}{{0%,{p:.2f}%{{opacity:0;transform:translateY(0)}}{p + 0.05:.2f}%{{opacity:1}}"
            f"{p + 1.3:.2f}%{{opacity:1;transform:translateY(-{travel:.0f}px)}}"
            f"{p + 1.36:.2f}%,100%{{opacity:0;transform:translateY(-{travel:.0f}px)}}}}"
            f".b{c}{{opacity:0;animation:b{c} {CYCLE}s infinite linear}}"
        )
        bolts.append(
            f'<g class="b{c}"><rect x="{x:.1f}" y="{lane_top - 12}" width="3" height="12" rx="1.5" fill="#7DD3FC"/>'
            f'<rect x="{x + 0.75:.1f}" y="{lane_top - 10}" width="1.5" height="8" rx="0.75" fill="#FFFFFF"/></g>'
        )

    # grid: ordinary days stay untouched; only the CHIRAG cells get blasted into gold
    cells = []
    for c in range(52):
        for r in range(7):
            x, y = PAD_X + c * STRIDE, PAD_Y + r * STRIDE
            base = LEVEL_COLORS[grid[c][r]]
            if (c, r) not in name_cells:
                cells.append(f'<rect x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="2.5" fill="{base}"/>')
                continue
            top_y = PAD_Y + top_row_of[c] * STRIDE
            hit = _pct_for_col(c) + 1.3 * (lane_top - y) / (lane_top - top_y)
            cls = f"n{c}_{r}"
            css.append(
                f"@keyframes {cls}{{0%,{hit:.2f}%{{fill:{base};transform:scale(1);filter:drop-shadow(0 0 0 transparent)}}"
                f"{hit + 0.25:.2f}%{{fill:#FFFFFF;transform:scale(1.6);filter:drop-shadow(0 0 0 transparent)}}"
                f"{hit + 0.9:.2f}%,95%{{fill:{GOLD};transform:scale(1);filter:drop-shadow(0 0 3px {GOLD})}}"
                f"98%,100%{{fill:{base};transform:scale(1);filter:drop-shadow(0 0 0 transparent)}}}}"
                f".{cls}{{transform-box:fill-box;transform-origin:center;animation:{cls} {CYCLE}s infinite linear}}"
            )
            cells.append(f'<rect class="{cls}" x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="2.5" fill="{base}"/>')

    # the ship, with Chirag riding on top (seen from behind: CHIRAG on the hoodie)
    rider_cell = 2.0
    rw = len(hero.SIT_BACK[0]) * rider_cell
    rh = len(hero.SIT_BACK) * rider_cell
    ship = (
        '<g class="ship">'
        '<path class="flame" d="M-5 16 L0 30 L5 16 Z" fill="#FB923C"/>'
        '<path class="flame" d="M-2.5 16 L0 24 L2.5 16 Z" fill="#FDE047"/>'
        '<path d="M-26 12 L-8 0 L8 0 L26 12 L26 16 L-26 16 Z" fill="#0284C7"/>'
        '<rect x="-25" y="-6" width="3.5" height="16" rx="1.75" fill="#94A3B8"/>'
        '<rect x="21.5" y="-6" width="3.5" height="16" rx="1.75" fill="#94A3B8"/>'
        '<path d="M0 -18 C11 -14 12 4 10 17 L-10 17 C-12 4 -11 -14 0 -18 Z" fill="#E2E8F0"/>'
        '<rect x="-10" y="4" width="20" height="3" fill="#38BDF8"/>'
        '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -1;0 0" dur="0.5s" repeatCount="indefinite"/>'
        + hero.sit_back(-rw / 2, -rh + 2, rider_cell)
        + "</g></g>"
    )

    stars = "".join(
        f'<circle cx="{(i * 97) % W}" cy="{40 + (i * 53) % 190}" r="{0.6 + (i % 3) * 0.35:.2f}" fill="#FFFFFF" opacity="0.35">'
        f'<animate attributeName="opacity" values="0.1;0.6;0.1" dur="{2 + i % 4}s" begin="{(i % 5) * 0.4:.1f}s" repeatCount="indefinite"/></circle>'
        for i in range(40)
    )

    hud = (
        f'<text x="24" y="30" fill="#38BDF8" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="1">🚀 SPACE DEFENDER // PILOT CHIRAG</text>'
        f'<g class="hud-a"><text x="{W / 2 + 60:.0f}" y="30" text-anchor="middle" fill="#7D8590" font-family="{MONO}" font-size="11" font-weight="700" letter-spacing="1">'
        "MISSION: BLAST ONLY THE CELLS THAT SPELL MY NAME</text></g>"
        f'<g class="hud-b"><text x="{W / 2 + 60:.0f}" y="30" text-anchor="middle" fill="{GOLD}" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="3">'
        "★ C H I R A G  UNLOCKED ★</text></g>"
        f'<text x="{W - 24}" y="30" text-anchor="end" fill="#F472B6" font-family="{MONO}" font-size="11" font-weight="700">TARGETS {len(name_cells)}</text>'
        f'<line x1="24" y1="{SHIP_Y + 22}" x2="{W - 24}" y2="{SHIP_Y + 22}" stroke="#21262D" stroke-dasharray="4 6"/>'
    )

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" fill="none">'
        "<title>Space Defender — Chirag blasts the contribution cells that spell CHIRAG</title>"
        f"<style>{''.join(css)}</style>"
        f'<rect width="{W}" height="{H}" rx="14" fill="#0D1117"/>'
        f'<rect x="1" y="1" width="{W - 2}" height="{H - 2}" rx="14" stroke="#30363D" stroke-width="1.2"/>'
        + stars + hud + "".join(cells) + "".join(bolts) + ship
        + "</svg>"
    )
    out_file = os.path.join(OUTPUT_DIR, "arcade-rocket-commit-game.svg")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"[ROCKET] Rendered horizontal name-blaster ({len(name_cells)} CHIRAG targets) at {out_file}")


if __name__ == "__main__":
    generate_rocket_game_svg()
