"""
SVG Post-Processor — dark-theme lock.

The README is dark-theme only. Several generated panels are transparent, so this pass
bakes the dark page colour (#0D1117 — identical to GitHub's dark theme) into each of
them: dark-theme viewers see no change, and anyone browsing GitHub in light mode still
gets the dark design instead of white text on a white page.

Idempotent: a marker comment prevents double application. Safe to run after any
generator.
"""

import os
import re
import sys

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


def main(names=None):
    for name, (px, py) in TARGETS.items():
        if names and name not in names:
            continue
        path = os.path.join(ASSETS_DIR, name)
        if os.path.exists(path) and apply_backdrop(path, px, py):
            print(f"[BACKDROP] {name}")


if __name__ == "__main__":
    main(set(sys.argv[1:]) or None)
