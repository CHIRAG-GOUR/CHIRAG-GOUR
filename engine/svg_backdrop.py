"""
SVG Post-Processor — dark-theme lock + the snake rider.

The README is dark-theme only. Several generated panels are transparent, so this pass
bakes the dark page colour (#0D1117 — identical to GitHub's dark theme) into each of
them: dark-theme viewers see no change, and anyone browsing GitHub in light mode still
gets the dark design instead of white text on a white page.

Idempotent: a marker comment prevents double application. Safe to run after any
generator, including the third-party contribution snake action.
"""

import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import character as hero  # noqa: E402

ASSETS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "generated"))
MARKER = "<!--backdrop-->"
BG = "#0D1117"

# file -> (pad_x, pad_y); kept at 0 so the dark-mode layout is pixel-identical
TARGETS = {
    "identity-header.svg": (0, 0),
    "portfolio-skills-matrix.svg": (0, 0),
    "mobile-app-phone-mockup.svg": (0, 0),
    "developer-xp-streak.svg": (0, 0),
    "trophies-and-achievements.svg": (0, 0),
    "activity-velocity-graph.svg": (0, 0),
    "sound-waveform.svg": (0, 0),
    "languages-and-radar.svg": (0, 0),
    "github-contribution-grid-snake.svg": (0, 0),
    "arcade-rocket-commit-game.svg": (0, 0),
    "arcade-pacman-commit-eater.svg": (0, 0),
}


def _num(v: str) -> float:
    return float(re.sub(r"[^0-9.\-]", "", v))


def apply_backdrop(path: str, pad_x: float, pad_y: float) -> bool:
    with open(path, "r", encoding="utf-8") as f:
        svg = f.read()
    if MARKER in svg:
        return False

    m = re.search(r"<svg\b[^>]*>", svg)
    if not m:
        return False
    tag = m.group(0)

    vb = re.search(r'viewBox="([^"]+)"', tag)
    if vb:
        x, y, w, h = (float(p) for p in re.split(r"[ ,]+", vb.group(1).strip()))
    else:
        x, y = 0.0, 0.0
        w = _num(re.search(r'\bwidth="([^"]+)"', tag).group(1))
        h = _num(re.search(r'\bheight="([^"]+)"', tag).group(1))

    nx, ny, nw, nh = x - pad_x, y - pad_y, w + 2 * pad_x, h + 2 * pad_y
    fmt = lambda v: f"{v:g}"
    new_tag = tag
    new_vb = f'viewBox="{fmt(nx)} {fmt(ny)} {fmt(nw)} {fmt(nh)}"'
    new_tag = re.sub(r'viewBox="[^"]+"', new_vb, new_tag) if vb else new_tag.replace("<svg", f"<svg {new_vb}", 1)
    new_tag = re.sub(r'\bwidth="[^"]+"', f'width="{fmt(nw)}"', new_tag, count=1)
    new_tag = re.sub(r'\bheight="[^"]+"', f'height="{fmt(nh)}"', new_tag, count=1)

    rect = f'{MARKER}<rect x="{fmt(nx)}" y="{fmt(ny)}" width="{fmt(nw)}" height="{fmt(nh)}" rx="14" fill="{BG}"/>'
    svg = svg[: m.start()] + new_tag + rect + svg[m.end():]
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    return True


RIDER_MARKER = "<!--rider-->"


def add_snake_rider(path: str) -> bool:
    """Seat 3D Chirag on the contribution snake's head.

    The Platane/snk SVG animates each segment with a CSS class (.s.s0 is the head), so a
    group sharing those classes inherits the exact same keyframed path and rides along.
    """
    with open(path, "r", encoding="utf-8") as f:
        svg = f.read()
    if RIDER_MARKER in svg or 'class="s s0"' not in svg:
        return False
    cell = 1.2
    w = len(hero.SIT_FRONT[0]) * cell
    h = len(hero.SIT_FRONT) * cell
    rider = (
        f'{RIDER_MARKER}<g class="s s0" style="fill:none">'
        f'<g transform="translate({8 - w / 2:.2f} {3.5 - h:.2f})">{hero.sit_front(0, 0, cell)}</g></g>'
    )
    end = svg.rfind("</svg>")
    svg = svg[:end] + rider + svg[end:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    return True


def main(names=None):
    snake = os.path.join(ASSETS_DIR, "github-contribution-grid-snake.svg")
    if os.path.exists(snake) and add_snake_rider(snake):
        print("[RIDER] Chirag is riding the snake")
    for name, (px, py) in TARGETS.items():
        if names and name not in names:
            continue
        path = os.path.join(ASSETS_DIR, name)
        if os.path.exists(path) and apply_backdrop(path, px, py):
            print(f"[BACKDROP] {name}")


if __name__ == "__main__":
    main(set(sys.argv[1:]) or None)
