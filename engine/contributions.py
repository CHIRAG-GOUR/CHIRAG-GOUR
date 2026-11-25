"""
Real contribution calendar loader.

Reads the public contribution calendar (https://github.com/users/<user>/contributions),
the same 7 x 53 grid GitHub shows on the profile, and returns a 52-week x 7-day grid
of levels 0–4. Falls back to the last cached copy, then to a deterministic pattern,
so offline runs still render.
"""

import os
import re
import json
import random
import urllib.request

USERNAME = "CHIRAG-GOUR"
CACHE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data", "current", "contributions.json"))
COLS, ROWS = 52, 7

# GitHub dark-theme contribution colours, level 0..4
LEVEL_COLORS = ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"]

_memo = None


def _fetch():
    req = urllib.request.Request(
        f"https://github.com/users/{USERNAME}/contributions",
        headers={"User-Agent": "Mozilla/5.0 (profile-readme-engine)"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        page = resp.read().decode("utf-8", "replace")
    cells = {}
    for tag in re.findall(r"<td[^>]*ContributionCalendar-day[^>]*>", page):
        pos = re.search(r'id="contribution-day-component-(\d+)-(\d+)"', tag)
        lvl = re.search(r'data-level="(\d)"', tag)
        date = re.search(r'data-date="([\d-]+)"', tag)
        if pos and lvl:
            cells[(int(pos.group(2)), int(pos.group(1)))] = (int(lvl.group(1)), date.group(1) if date else "")
    if len(cells) < COLS * ROWS * 0.8:
        raise ValueError(f"calendar parse looks wrong ({len(cells)} cells)")
    ncols = max(c for c, _ in cells) + 1
    first = ncols - COLS
    grid = [[cells.get((first + c, r), (0, ""))[0] for r in range(ROWS)] for c in range(COLS)]
    return {"grid": grid, "total_active_days": sum(1 for col in grid for v in col if v > 0)}


def _fallback():
    rnd = random.Random(42)
    grid = []
    for c in range(COLS):
        w = [0.5, 0.3, 0.12, 0.06, 0.02] if c < 20 else [0.25, 0.35, 0.2, 0.13, 0.07]
        grid.append([rnd.choices(range(5), weights=w)[0] for _ in range(ROWS)])
    return {"grid": grid, "total_active_days": sum(1 for col in grid for v in col if v > 0)}


def load_grid():
    """Returns {"grid": [[level]*7]*52, "total_active_days": int}; grid[col][row]."""
    global _memo
    if _memo:
        return _memo
    try:
        data = _fetch()
        os.makedirs(os.path.dirname(CACHE), exist_ok=True)
        with open(CACHE, "w", encoding="utf-8") as f:
            json.dump(data, f)
        print(f"[CONTRIB] Loaded real calendar · {data['total_active_days']} active days")
    except Exception as e:  # network down, markup changed, rate limited…
        print(f"[CONTRIB] Live calendar unavailable ({e}); using cache/fallback")
        if os.path.exists(CACHE):
            with open(CACHE, "r", encoding="utf-8") as f:
                data = json.load(f)
        else:
            data = _fallback()
    _memo = data
    return data
