"""
Snake Ride — 3D Chirag rides a snake across his real contribution graph.

The snake sweeps the 52-week x 7-day grid horizontally, row by row (left → right,
then right → left on the next row), eating every active day it passes. Chirag sits
on the snake's head the whole way. Pure SMIL animation, dark theme, no external assets.
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import character as hero  # noqa: E402
from contributions import load_grid, LEVEL_COLORS, COLS, ROWS  # noqa: E402

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))
OUT_NAME = "snake-ride.svg"

MONO = "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
W, H = 880, 200
CELL, STRIDE = 11, 15
PAD_X = (W - COLS * STRIDE + (STRIDE - CELL)) // 2
PAD_Y = 70
SEGMENTS = 10          # snake length in cells
MARGIN = SEGMENTS + 2  # off-screen run-in / run-out so the loop restart is invisible
STEP = 0.085           # seconds per cell


def _center(c, r):
    return PAD_X + c * STRIDE + CELL / 2, PAD_Y + r * STRIDE + CELL / 2


def _route():
    """Serpentine route (col, row) waypoints + per-cell distance along the route."""
    pts = [(-MARGIN, 0)]
    dist = {}
    d = MARGIN  # distance (in cells) from route start to (0, 0)
    for r in range(ROWS):
        cols = range(COLS) if r % 2 == 0 else range(COLS - 1, -1, -1)
        for i, c in enumerate(cols):
            if i == 0 and r > 0:
                d += 1  # the one-cell drop to the next row
            elif i > 0:
                d += 1
            dist[(c, r)] = d
        end_col = COLS - 1 if r % 2 == 0 else 0
        pts.append((end_col, r))
        if r < ROWS - 1:
            pts.append((end_col, r + 1))
    exit_col = COLS - 1 + MARGIN if (ROWS - 1) % 2 == 0 else -MARGIN
    pts.append((exit_col, ROWS - 1))
    total = d + MARGIN
    return pts, dist, total


def generate_snake_svg():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    data = load_grid()
    grid = data["grid"]
    pts, dist, total = _route()
    dur = total * STEP
    path = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in (_center(c, r) for c, r in pts))

    # cells — every active day gets eaten the moment the head reaches it
    cells = []
    for c in range(COLS):
        for r in range(ROWS):
            lvl = grid[c][r]
            x, y = PAD_X + c * STRIDE, PAD_Y + r * STRIDE
            base = LEVEL_COLORS[lvl]
            if lvl == 0:
                cells.append(f'<rect x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="2.5" fill="{base}" stroke="#30363D" stroke-opacity="0.35"/>')
                continue
            f = (dist[(c, r)] - SEGMENTS) / total
            cells.append(
                f'<rect x="{x}" y="{y}" width="{CELL}" height="{CELL}" rx="2.5" fill="{base}">'
                f'<animate attributeName="fill" values="{base};{base};#FACC15;{LEVEL_COLORS[0]};{LEVEL_COLORS[0]};{base}" '
                f'keyTimes="0;{f:.4f};{f + 0.002:.4f};{f + 0.006:.4f};0.992;1" dur="{dur:.2f}s" repeatCount="indefinite"/></rect>'
            )

    # snake body: each segment trails the head by one cell along the same route
    body = []
    for k in range(SEGMENTS - 1, 0, -1):
        size = CELL + 1 - k * 0.35
        shade = "#39D353" if k % 2 else "#26A641"
        body.append(
            f'<rect x="{-size / 2:.1f}" y="{-size / 2:.1f}" width="{size:.1f}" height="{size:.1f}" rx="3.5" fill="{shade}" stroke="#0D1117" stroke-width="1">'
            f'<animateMotion path="{path}" dur="{dur:.2f}s" begin="{-(SEGMENTS - k) * STEP:.3f}s" repeatCount="indefinite"/></rect>'
        )

    cell = 1.3
    rw, rh = len(hero.SIT_FRONT[0]) * cell, len(hero.SIT_FRONT) * cell
    head = (
        f'<g><animateMotion path="{path}" dur="{dur:.2f}s" begin="{-SEGMENTS * STEP:.3f}s" repeatCount="indefinite"/>'
        '<rect x="-8" y="-8" width="16" height="16" rx="5" fill="#39D353" stroke="#0D1117" stroke-width="1.2"/>'
        '<circle cx="-3.5" cy="-2" r="2.3" fill="#fff"/><circle cx="3.5" cy="-2" r="2.3" fill="#fff"/>'
        '<circle cx="-3.5" cy="-2" r="1.1" fill="#0D1117"/><circle cx="3.5" cy="-2" r="1.1" fill="#0D1117"/>'
        '<path d="M-1 8 L0 12 L1 8" stroke="#F87171" stroke-width="1.2" fill="none">'
        '<animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/></path>'
        '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur="0.34s" repeatCount="indefinite"/>'
        + hero.sit_front(-rw / 2, -rh - 5, cell)
        + "</g></g>"
    )

    active = data.get("total_active_days", 0)
    hud = (
        f'<text x="24" y="30" fill="#39D353" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="1">🐍 SNAKE RIDE // P1 CHIRAG</text>'
        f'<text x="{W / 2:.0f}" y="30" text-anchor="middle" fill="#7D8590" font-family="{MONO}" font-size="11" font-weight="700" letter-spacing="1">'
        f"ROW BY ROW THROUGH {active} ACTIVE DAYS</text>"
        f'<text x="{W - 24}" y="30" text-anchor="end" fill="#38BDF8" font-family="{MONO}" font-size="11" font-weight="700">LENGTH {SEGMENTS} · 52 WEEKS</text>'
    )

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" fill="none">'
        "<title>Snake Ride — Chirag rides a snake across his contribution graph</title>"
        f'<rect width="{W}" height="{H}" rx="14" fill="#0D1117"/>'
        f'<rect x="1" y="1" width="{W - 2}" height="{H - 2}" rx="14" stroke="#30363D" stroke-width="1.2"/>'
        + hud
        + f'<clipPath id="board"><rect x="8" y="40" width="{W - 16}" height="{H - 48}"/></clipPath>'
        + "".join(cells)
        + f'<g clip-path="url(#board)">{"".join(body)}{head}</g>'
        + "</svg>"
    )
    out_file = os.path.join(OUTPUT_DIR, OUT_NAME)
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"[SNAKE] Rendered horizontal snake ride ({dur:.1f}s loop) at {out_file}")


if __name__ == "__main__":
    generate_snake_svg()
