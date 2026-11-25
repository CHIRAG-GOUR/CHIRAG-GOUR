"""
Game UI Generator — turns the profile README into a playable cartridge.

Renders, from live repository data:
  * menu-N.svg       six title-screen buttons whose selection cursor hops across them in sync
  * stage-N.svg      animated chapter banners ("STAGE 03 — LEVEL SELECT")
  * level-N.svg      one clickable game cartridge per flagship project, each with its own
                     animated cover art
  * continue.svg     CONTINUE? countdown + coin slot (opens the insert-coin issue)
  * end-credits.svg  a rolling movie-style credits sequence built from every public repo

Every SVG is fully self-contained (no external fonts, images or scripts) so GitHub's
image proxy renders it, and each draws its own dark background so it reads the same
in GitHub's light and dark themes.
"""

import os
import sys
import json
import html
import hashlib
from datetime import datetime, timezone
from urllib.parse import quote

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import character as hero  # noqa: E402

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
GAME_DIR = os.path.join(BASE_DIR, "assets", "generated", "game")
DATA_DIR = os.path.join(BASE_DIR, "data", "current")
PLAYERS_PATH = os.path.join(BASE_DIR, "data", "players.json")

USERNAME = "CHIRAG-GOUR"
REPO_SLUG = f"{USERNAME}/{USERNAME}"
GAME_URL = f"https://{USERNAME.lower()}.github.io/{USERNAME}/"

MONO = "'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"
SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"

C = {
    "bg": "#0D1117",
    "panel": "#161B22",
    "line": "#30363D",
    "dim": "#21262D",
    "text": "#E6EDF3",
    "muted": "#7D8590",
    "cyan": "#38BDF8",
    "purple": "#C084FC",
    "green": "#34D399",
    "yellow": "#FACC15",
    "pink": "#F472B6",
    "orange": "#FB923C",
    "red": "#F87171",
}

CATEGORY_ACCENT = {
    "EdTech & Serious Games": C["purple"],
    "Creative Full-Stack": C["green"],
    "Mobile Architecture": C["yellow"],
    "Creative 3D & Simulation": C["cyan"],
    "Simulation & Fast AI": C["orange"],
    "Vision & Applied AI": C["pink"],
    "Applied AI & Media": C["pink"],
    "Modern Reactive Web": C["green"],
    "Foundation & Systems": C["muted"],
}

STAGE_BADGE = {
    "Active": ("ACTIVE", C["green"], True),
    "Maintained": ("STABLE", C["cyan"], False),
    "Showcase": ("SHOWCASE", C["purple"], False),
    "Archived": ("ARCHIVED", C["muted"], False),
}

# Cover-art motif per flagship repo; anything else falls back to its category.
MOTIF_BY_REPO = {
    "Podcast-Tool-New": "podcast",
    "SaltyRevamp": "jewel",
    "POA-Skippi": "island",
    "Olympiad-Activities": "quiz",
    "Eat-Better-Internship": "stack",
    "Mangalyan-India": "rocket",
    "SolarSystem3js": "orbit",
    "physicsmotion2": "projectile",
}
MOTIF_BY_CATEGORY = {
    "EdTech & Serious Games": "quiz",
    "Creative Full-Stack": "stack",
    "Creative 3D & Simulation": "orbit",
    "Simulation & Fast AI": "projectile",
}

# 7x7 pixel icons ('#' = lit pixel)
ICONS = {
    "player": ["..###..", "..###..", "...#...", ".#####.", "...#...", "..#.#..", ".#...#."],
    "star": ["...#...", "...#...", "#######", ".#####.", "..###..", ".##.##.", "##...##"],
    "cart": ["#######", "#.....#", "#.###.#", "#.###.#", "#.....#", "#######", ".#.#.#."],
    "trophy": ["#######", "#.###.#", ".#####.", "..###..", "...#...", "..###..", ".#####."],
    "joystick": ["..##...", "..##...", "...#...", "...#...", ".#####.", "#######", "#######"],
    "coin": ["..###..", ".##.##.", "##.#.##", "##.#.##", "##.#.##", ".##.##.", "..###.."],
}
ROO_SPRITE = ["....##.", "....###", "...##..", ".####..", "######.", "#..##..", "...#.#."]

MENU = [
    ("player", "PLAYER", "cyan", "player"),
    ("skills", "SKILLS", "purple", "star"),
    ("levels", "LEVELS", "green", "cart"),
    ("scores", "SCORES", "yellow", "trophy"),
    ("arcade", "ARCADE", "pink", "joystick"),
    ("continue", "COIN", "orange", "coin"),
]


# --------------------------------------------------------------------------- helpers

def esc(value) -> str:
    return html.escape(str(value), quote=True)


def _save(name: str, svg: str):
    os.makedirs(GAME_DIR, exist_ok=True)
    with open(os.path.join(GAME_DIR, name), "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"[GAME] Rendered {name}")


def _rng(seed: str):
    """Deterministic PRNG so art is stable between runs (no noisy diffs)."""
    state = int.from_bytes(hashlib.sha256(seed.encode()).digest()[:8], "big")

    def rnd() -> float:
        nonlocal state
        state = (state * 6364136223846793005 + 1442695040888963407) & 0xFFFFFFFFFFFFFFFF
        return (state >> 33) / 2 ** 31

    return rnd


def _pixels(pattern, x, y, cell, color, extra="") -> str:
    rects = []
    for r, row in enumerate(pattern):
        for c, ch in enumerate(row):
            if ch == "#":
                rects.append(f'<rect x="{x + c * cell}" y="{y + r * cell}" width="{cell}" height="{cell}"/>')
    return f'<g fill="{color}" {extra}>{"".join(rects)}</g>'


def _stars(seed, w, h, n, color="#FFFFFF") -> str:
    rnd = _rng(seed)
    out = []
    for _ in range(n):
        x, y = rnd() * w, rnd() * h
        r = 0.5 + rnd() * 1.1
        dur = 2 + rnd() * 3
        begin = rnd() * 3
        out.append(
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="{color}" opacity="0.6">'
            f'<animate attributeName="opacity" values="0.15;0.9;0.15" dur="{dur:.1f}s" begin="{begin:.1f}s" repeatCount="indefinite"/>'
            f"</circle>"
        )
    return "".join(out)


def _wrap(text: str, width: int, max_lines: int):
    words, lines, cur = (text or "").split(), [], ""
    for w in words:
        if len(cur) + len(w) + (1 if cur else 0) <= width:
            cur = f"{cur} {w}" if cur else w
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = lines[-1][: width - 1].rstrip(" ,.;—-") + "…"
    return lines


def _split_title(title: str):
    for sep in (" — ", " – ", " - "):
        if sep in title:
            main, sub = title.split(sep, 1)
            return main.strip(), sub.strip()
    return title.strip(), ""


def _svg(w, h, body, style="", title="") -> str:
    style_block = f"<style>{style}</style>" if style else ""
    title_block = f"<title>{esc(title)}</title>" if title else ""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" fill="none">'
        f"{title_block}{style_block}{body}</svg>"
    )


def insert_coin_url() -> str:
    title = "🪙 insert coin"
    body = (
        "Just press **Submit new issue** — nothing else to write.\n\n"
        "A bot will drop your avatar onto the player wall of the README in about 30 seconds "
        "and close this issue for you. Thanks for playing! 🕹️"
    )
    return f"https://github.com/{REPO_SLUG}/issues/new?title={quote(title)}&body={quote(body)}"


def load_players():
    if os.path.exists(PLAYERS_PATH):
        try:
            with open(PLAYERS_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
            data.setdefault("credits", 0)
            data.setdefault("players", [])
            return data
        except (OSError, ValueError) as e:
            print(f"[WARN] players.json unreadable: {e}")
    return {"credits": 0, "players": []}


# --------------------------------------------------------------------------- menu

def generate_menu():
    n, slot = len(MENU), 0.9
    total, pct = slot * n, 100 / n
    for i, (_, label, accent_key, icon) in enumerate(MENU):
        accent = C[accent_key]
        style = (
            f".sel{{opacity:0;animation:sel {total:.1f}s infinite;animation-delay:{i * slot:.1f}s}}"
            f"@keyframes sel{{0%,{pct - 0.1:.2f}%{{opacity:1}}{pct:.2f}%,100%{{opacity:0}}}}"
        )
        body = (
            f'<rect x="1.5" y="1.5" width="237" height="69" rx="12" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="2"/>'
            f'<g class="sel">'
            f'<rect x="1.5" y="1.5" width="237" height="69" rx="12" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-width="3"/>'
            f'<text x="15" y="47" fill="{C["yellow"]}" font-family="{MONO}" font-size="19" font-weight="800">▶</text>'
            f"</g>"
            f'<text x="42" y="28" fill="{accent}" font-family="{MONO}" font-size="12" font-weight="700" letter-spacing="2">0{i + 1}</text>'
            f'<text x="42" y="53" fill="{C["text"]}" font-family="{MONO}" font-size="21" font-weight="800" letter-spacing="1">{label}</text>'
            + _pixels(ICONS[icon], 192, 22, 4, accent)
        )
        _save(f"menu-{i + 1}.svg", _svg(240, 72, body, style, f"{i + 1:02d} {label}"))


# --------------------------------------------------------------------------- stage banners

def generate_stage_banners(total_repos: int):
    stages = [
        ("PLAYER SELECT", "who's holding the controller", "cyan"),
        ("SKILL TREE", f"abilities unlocked across {total_repos} repositories", "purple"),
        ("LEVEL SELECT", "pick a world · every cartridge is clickable", "green"),
        ("HIGH SCORES", "the only rival is last month's me", "yellow"),
        ("BONUS ARCADE", "my commit history — but playable", "pink"),
        ("CONTINUE?", "insert a coin · leave your mark on this README", "orange"),
    ]
    for n, (title, subtitle, accent_key) in enumerate(stages, start=1):
        accent = C[accent_key]
        title_w = len(title) * (28 * 0.6 + 1)
        rail_y = 64
        x0 = int(24 + title_w + 30)
        x1 = 860
        dur = 6.0
        travel = x1 + 14 - (x0 - 14)

        dots = []
        for x in range(x0, x1 - 4, 16):
            f = (x - (x0 - 14)) / travel
            dots.append(
                f'<rect x="{x - 2}" y="{rail_y - 2}" width="4" height="4" fill="{accent}">'
                f'<animate attributeName="opacity" values="0.75;0.75;0;0" keyTimes="0;{f:.3f};{min(f + 0.004, 0.999):.3f};1" dur="{dur}s" repeatCount="indefinite"/>'
                f"</rect>"
            )

        # 3D Chirag sprints along the stage rail collecting commits
        cell = 2.0
        feet = rail_y + 6
        sprite = (
            f'<g><animateTransform attributeName="transform" type="translate" from="{x0 - 14} {feet - hero.RUN_ROWS * cell}" to="{x1 + 14} {feet - hero.RUN_ROWS * cell}" dur="{dur}s" repeatCount="indefinite"/>'
            f'<ellipse cx="0" cy="{hero.RUN_ROWS * cell + 1}" rx="11" ry="2.5" fill="#000" opacity="0.45"/>'
            + hero.runner(-12, 0, cell)
            + "</g>"
        )

        body = (
            f'<rect width="880" height="88" rx="12" fill="{C["bg"]}"/>'
            f'<rect x="0.75" y="0.75" width="878.5" height="86.5" rx="12" stroke="{C["dim"]}" stroke-width="1.5"/>'
            f'<rect x="0" y="22" width="4" height="46" rx="2" fill="{accent}"/>'
            f'<text x="24" y="28" fill="{accent}" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="3">STAGE 0{n}</text>'
            f'<text x="856" y="28" text-anchor="end" fill="{C["muted"]}" font-family="{MONO}" font-size="12">{esc(subtitle)}</text>'
            f'<text x="24" y="70" fill="{C["text"]}" font-family="{MONO}" font-size="28" font-weight="800" letter-spacing="1">{esc(title)}</text>'
            + "".join(dots)
            + sprite
        )
        _save(f"stage-{n}.svg", _svg(880, 88, body, hero.RUNNER_CSS, f"Stage {n:02d} — {title}"))


# --------------------------------------------------------------------------- cartridge cover art
# Each motif draws inside a 396 x 92 screen (local coordinates).

def _motif_island(accent, seed):
    waves = "".join(
        f'<path d="M{x} 78 q10 -6 20 0 t20 0" stroke="#38BDF8" stroke-opacity="0.55" stroke-width="2" fill="none"/>'
        for x in range(-40, 440, 40)
    )
    return (
        '<defs><linearGradient id="sky_i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B2540"/><stop offset="1" stop-color="#103A52"/></linearGradient></defs>'
        '<rect width="396" height="92" fill="url(#sky_i)"/>'
        + _stars(seed, 396, 40, 10)
        + '<circle cx="340" cy="24" r="11" fill="#FACC15" opacity="0.9"><animate attributeName="r" values="11;13;11" dur="4s" repeatCount="indefinite"/></circle>'
        '<rect y="70" width="396" height="22" fill="#0C4A6E"/>'
        f'<g>{waves}<animateTransform attributeName="transform" type="translate" from="0 0" to="40 0" dur="3s" repeatCount="indefinite"/></g>'
        '<ellipse cx="198" cy="72" rx="86" ry="13" fill="#D6B56E"/>'
        '<ellipse cx="198" cy="68" rx="70" ry="8" fill="#22C55E" opacity="0.8"/>'
        '<path d="M250 68 q-4 -22 4 -40" stroke="#A16207" stroke-width="4" stroke-linecap="round"/>'
        '<g stroke="#34D399" stroke-width="3" stroke-linecap="round" fill="none">'
        '<path d="M254 28 q-16 -6 -26 6"/><path d="M254 28 q14 -8 26 4"/><path d="M254 28 q-6 -14 -18 -14"/><path d="M254 28 q8 -14 20 -12"/></g>'
        '<g><animateTransform attributeName="transform" type="translate" values="150 46;166 30;182 46;166 30;150 46" keyTimes="0;0.25;0.5;0.75;1" dur="2.4s" repeatCount="indefinite"/>'
        + _pixels(ROO_SPRITE, 0, 0, 3, C["orange"])
        + "</g>"
        '<text x="12" y="20" fill="#E6EDF3" font-family="' + MONO + '" font-size="9" font-weight="700" opacity="0.8">13 MILESTONES</text>'
    )


def _motif_quiz(accent, seed):
    bars = []
    for i, (label, good) in enumerate([("A. O(N²)", False), ("B. O(log N)", True), ("C. O(N log N)", False)]):
        y = 12 + i * 24
        if good:
            bars.append(
                f'<rect x="24" y="{y}" width="210" height="18" rx="4" fill="{C["dim"]}"/>'
                f'<rect x="24" y="{y}" width="210" height="18" rx="4" fill="{C["green"]}" fill-opacity="0.25" stroke="{C["green"]}">'
                f'<animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.45;0.5;1" dur="6s" repeatCount="indefinite"/></rect>'
                f'<text x="34" y="{y + 13}" fill="{C["text"]}" font-family="{MONO}" font-size="10" font-weight="700">{esc(label)}</text>'
                f'<text x="218" y="{y + 13}" fill="{C["green"]}" font-family="{MONO}" font-size="11" font-weight="800" text-anchor="middle">✓'
                f'<animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.45;0.5;1" dur="6s" repeatCount="indefinite"/></text>'
            )
        else:
            bars.append(
                f'<rect x="24" y="{y}" width="210" height="18" rx="4" fill="{C["dim"]}"/>'
                f'<text x="34" y="{y + 13}" fill="{C["muted"]}" font-family="{MONO}" font-size="10">{esc(label)}</text>'
            )
    cursor = (
        '<g><animateTransform attributeName="transform" type="translate" values="250 80;250 80;130 47;130 47;250 80" keyTimes="0;0.15;0.45;0.85;1" dur="6s" repeatCount="indefinite"/>'
        f'<path d="M0 0 L0 13 L4 10 L7 16 L9 15 L6 9 L11 9 Z" fill="{C["text"]}" stroke="{C["bg"]}" stroke-width="1"/></g>'
    )
    ring = (
        f'<circle cx="290" cy="46" r="26" stroke="{C["dim"]}" stroke-width="6"/>'
        f'<circle cx="290" cy="46" r="26" stroke="{accent}" stroke-width="6" stroke-linecap="round" stroke-dasharray="163.4" transform="rotate(-90 290 46)">'
        '<animate attributeName="stroke-dashoffset" values="0;163.4" dur="6s" repeatCount="indefinite"/></circle>'
        f'<text x="290" y="44" text-anchor="middle" fill="{C["text"]}" font-family="{MONO}" font-size="12" font-weight="800">Q14</text>'
        f'<text x="290" y="57" text-anchor="middle" fill="{C["muted"]}" font-family="{MONO}" font-size="8">OF 25</text>'
    )
    return f'<rect width="396" height="92" fill="{C["bg"]}"/>' + "".join(bars) + ring + cursor


def _motif_stack(accent, seed):
    layers = [("UI · 3D", C["cyan"], 26), ("MOTION", C["purple"], 48), ("PDF · DATA", C["green"], 70)]
    out = [f'<rect width="396" height="92" fill="{C["bg"]}"/>', _stars(seed, 396, 92, 14, C["muted"])]
    for i, (label, color, y) in enumerate(reversed(layers)):
        idx = len(layers) - 1 - i
        out.append(
            f'<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3s" begin="{idx * 0.35:.2f}s" repeatCount="indefinite"/>'
            f'<path d="M198 {y - 14} L268 {y} L198 {y + 14} L128 {y} Z" fill="{color}" fill-opacity="0.18" stroke="{color}" stroke-width="1.5"/>'
            f'<path d="M128 {y} L128 {y + 5} L198 {y + 19} L268 {y + 5} L268 {y}" stroke="{color}" stroke-opacity="0.5" stroke-width="1.5" fill="none"/>'
            f'<text x="282" y="{y + 4}" fill="{color}" font-family="{MONO}" font-size="9" font-weight="700">{label}</text>'
            f"</g>"
        )
    out.append(
        f'<text x="24" y="20" fill="{C["muted"]}" font-family="{MONO}" font-size="9">$ next build --turbo</text>'
        f'<text x="24" y="34" fill="{C["green"]}" font-family="{MONO}" font-size="9">✓ ready in 312ms'
        '<animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.3;0.32;1" dur="5s" repeatCount="indefinite"/></text>'
    )
    return "".join(out)


def _motif_rocket(accent, seed):
    return (
        '<defs><linearGradient id="sky_r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070D"/><stop offset="1" stop-color="#1A1030"/></linearGradient>'
        '<radialGradient id="mars" cx="0.35" cy="0.35" r="0.7"><stop offset="0" stop-color="#F59E0B"/><stop offset="1" stop-color="#B4401F"/></radialGradient></defs>'
        '<rect width="396" height="92" fill="url(#sky_r)"/>'
        + _stars(seed, 396, 92, 26)
        + '<circle cx="338" cy="28" r="16" fill="url(#mars)"/>'
        '<path d="M300 40 Q338 18 380 30" stroke="#FB923C" stroke-dasharray="2 4" stroke-width="1.2" fill="none" opacity="0.7"/>'
        '<rect y="84" width="396" height="8" fill="#111827"/>'
        '<g stroke="#475569" stroke-width="1.5"><path d="M150 84 V30 M162 84 V30"/>'
        '<path d="M150 40 L162 50 M162 40 L150 50 M150 56 L162 66 M162 56 L150 66 M150 72 L162 82 M162 72 L150 82"/></g>'
        '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -120" keyTimes="0;0.35;1" calcMode="spline" keySplines="0 0 1 1;0.55 0 0.9 0.6" dur="4.5s" repeatCount="indefinite"/>'
        '<path d="M186 76 L186 46 Q192 30 198 46 L198 76 Z" fill="#E2E8F0"/>'
        '<rect x="186" y="56" width="12" height="4" fill="#FB923C"/>'
        '<path d="M186 66 L180 78 L186 76 Z M198 66 L204 78 L198 76 Z" fill="#94A3B8"/>'
        '<ellipse cx="192" cy="82" rx="4" ry="7" fill="#FACC15"><animate attributeName="ry" values="5;10;6;9;5" dur="0.4s" repeatCount="indefinite"/></ellipse>'
        '<ellipse cx="192" cy="81" rx="2" ry="4" fill="#FFFFFF"/>'
        "</g>"
        f'<text x="12" y="20" fill="{C["orange"]}" font-family="{MONO}" font-size="9" font-weight="700">T-MINUS'
        '<animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/></text>'
    )


def _motif_orbit(accent, seed):
    return (
        f'<rect width="396" height="92" fill="#05070D"/>'
        + _stars(seed, 396, 92, 30)
        + '<defs><radialGradient id="sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#FFF7AE"/><stop offset="0.6" stop-color="#FACC15"/><stop offset="1" stop-color="#F97316" stop-opacity="0"/></radialGradient></defs>'
        '<ellipse cx="198" cy="46" rx="70" ry="18" stroke="#38BDF8" stroke-opacity="0.35" fill="none"/>'
        '<ellipse cx="198" cy="46" rx="128" ry="34" stroke="#C084FC" stroke-opacity="0.3" fill="none"/>'
        '<circle cx="198" cy="46" r="22" fill="url(#sun)"><animate attributeName="r" values="21;24;21" dur="3s" repeatCount="indefinite"/></circle>'
        '<circle r="5" fill="#38BDF8"><animateMotion dur="5s" repeatCount="indefinite" path="M268 46 A70 18 0 1 1 128 46 A70 18 0 1 1 268 46"/></circle>'
        '<circle r="7" fill="#C084FC"><animateMotion dur="11s" repeatCount="indefinite" path="M70 46 A128 34 0 1 0 326 46 A128 34 0 1 0 70 46"/></circle>'
        '<g><animateMotion dur="11s" repeatCount="indefinite" path="M70 46 A128 34 0 1 0 326 46 A128 34 0 1 0 70 46"/>'
        '<ellipse rx="12" ry="3" stroke="#E9D5FF" stroke-opacity="0.7" fill="none"/></g>'
    )


def _motif_projectile(accent, seed):
    ticks = "".join(f'<rect x="{x}" y="80" width="1" height="4" fill="{C["muted"]}"/>' for x in range(30, 370, 24))
    return (
        f'<rect width="396" height="92" fill="{C["bg"]}"/>'
        f'<defs><pattern id="grid_p" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0 H0 V24" stroke="{C["dim"]}" stroke-width="1" fill="none"/></pattern></defs>'
        '<rect width="396" height="92" fill="url(#grid_p)"/>'
        f'<line x1="20" y1="80" x2="376" y2="80" stroke="{C["line"]}" stroke-width="1.5"/>{ticks}'
        f'<path d="M30 80 Q198 -52 366 80" stroke="{accent}" stroke-opacity="0.6" stroke-dasharray="4 4" fill="none"/>'
        # exact parabola: x linear in time, y uses quadratic ease-out then ease-in
        f'<circle r="6" fill="{accent}">'
        '<animate attributeName="cx" values="30;366" dur="2.6s" repeatCount="indefinite"/>'
        '<animate attributeName="cy" values="80;14;80" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.333 0.667 0.667 1;0.333 0 0.667 0.333" dur="2.6s" repeatCount="indefinite"/>'
        "</circle>"
        f'<text x="12" y="16" fill="{C["muted"]}" font-family="{MONO}" font-size="9">g = 9.81 m/s²</text>'
        f'<text x="384" y="16" text-anchor="end" fill="{C["muted"]}" font-family="{MONO}" font-size="9">θ = 57.5°</text>'
    )


def _motif_grid(accent, seed):
    return (
        f'<rect width="396" height="92" fill="{C["bg"]}"/>'
        + _stars(seed, 396, 92, 30, accent)
        + f'<rect y="0" width="396" height="2" fill="{accent}" opacity="0.5"><animate attributeName="y" values="0;92" dur="3s" repeatCount="indefinite"/></rect>'
    )


def _motif_podcast(accent, seed):
    """AI video studio: live waveform, a playhead sweeping a timeline, a viral clip getting cut."""
    rnd = _rng(seed)
    bars = []
    for i in range(46):
        x = 16 + i * 8
        h = 6 + rnd() * 26
        d = 0.6 + rnd() * 0.9
        h *= 0.8
        bars.append(
            f'<rect x="{x}" y="{34 - h / 2:.1f}" width="4" height="{h:.1f}" rx="2" fill="{accent}" opacity="0.85">'
            f'<animate attributeName="height" values="{h:.1f};{h * 0.35:.1f};{h:.1f}" dur="{d:.2f}s" repeatCount="indefinite"/>'
            f'<animate attributeName="y" values="{34 - h / 2:.1f};{34 - h * 0.175:.1f};{34 - h / 2:.1f}" dur="{d:.2f}s" repeatCount="indefinite"/></rect>'
        )
    clips = (
        f'<rect x="16" y="56" width="150" height="11" rx="3" fill="{C["dim"]}"/>'
        f'<rect x="170" y="56" width="96" height="11" rx="3" fill="{accent}" fill-opacity="0.35" stroke="{accent}">'
        '<animate attributeName="fill-opacity" values="0.15;0.6;0.15" dur="1.6s" repeatCount="indefinite"/></rect>'
        f'<text x="218" y="64.5" text-anchor="middle" fill="{C["text"]}" font-family="{MONO}" font-size="7.5" font-weight="800">VIRAL ✂</text>'
        f'<rect x="270" y="56" width="110" height="11" rx="3" fill="{C["dim"]}"/>'
        f'<rect x="170" y="70" width="210" height="8" rx="2" fill="{C["yellow"]}" fill-opacity="0.25"/>'
        f'<text x="176" y="76.5" fill="{C["yellow"]}" font-family="{MONO}" font-size="6.5" font-weight="700">CC · word-level captions</text>'
    )
    head = (
        f'<line x1="0" y1="10" x2="0" y2="78" stroke="{C["text"]}" stroke-width="1.5">'
        '<animateTransform attributeName="transform" type="translate" values="16 0;380 0" dur="5s" repeatCount="indefinite"/></line>'
    )
    return (
        f'<rect width="396" height="92" fill="{C["bg"]}"/>'
        + "".join(bars) + clips + head
        + f'<circle cx="16" cy="9" r="3.5" fill="{C["red"]}"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/></circle>'
        + f'<text x="24" y="12" fill="{C["muted"]}" font-family="{MONO}" font-size="8" font-weight="700">REC · GEMINI LIVE</text>'
    )


def _motif_jewel(accent, seed):
    """D2C jewellery internship: a faceted gem turning on a pendant chain, sparkles, module ticks."""
    beads = "".join(
        f'<circle cx="{120 + i * 13}" cy="{14 + ((i - 6) ** 2) * 0.55:.1f}" r="2.4" fill="#FDE68A" opacity="0.85"/>' for i in range(13)
    )
    sparkles = "".join(
        f'<path d="M{x} {y - 5} L{x + 1.4} {y - 1.4} L{x + 5} {y} L{x + 1.4} {y + 1.4} L{x} {y + 5} L{x - 1.4} {y + 1.4} L{x - 5} {y} L{x - 1.4} {y - 1.4} Z" fill="#FFFFFF">'
        f'<animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="{b}s" repeatCount="indefinite"/></path>'
        for x, y, b in ((150, 50, 0), (250, 40, 0.6), (232, 76, 1.2), (164, 78, 0.9))
    )
    modules = "".join(
        f'<rect x="{292 + i * 18}" y="70" width="14" height="10" rx="2" fill="{accent if i < 4 else C["dim"]}" fill-opacity="{0.8 if i < 4 else 1}"/>'
        f'<text x="{299 + i * 18}" y="78" text-anchor="middle" fill="{C["bg"] if i < 4 else C["muted"]}" font-family="{MONO}" font-size="7" font-weight="800">{i + 1}</text>'
        for i in range(5)
    )
    return (
        '<defs><linearGradient id="gem" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0ABFC"/><stop offset="0.5" stop-color="#C084FC"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>'
        f'<rect width="396" height="92" fill="#120B1C"/>'
        + beads
        + '<g transform="translate(198 50)"><g><animateTransform attributeName="transform" type="scale" values="1 1;0.25 1;1 1" dur="3.2s" repeatCount="indefinite"/>'
        '<path d="M-22 -8 L-12 -20 L12 -20 L22 -8 L0 24 Z" fill="url(#gem)" stroke="#F5D0FE" stroke-width="1.2"/>'
        '<path d="M-22 -8 L22 -8 M-12 -20 L-6 -8 L0 24 L6 -8 L12 -20 M-6 -8 L0 -20 L6 -8" stroke="#F5D0FE" stroke-opacity="0.7" stroke-width="1" fill="none"/>'
        "</g></g>"
        + sparkles
        + f'<text x="14" y="20" fill="#F5D0FE" font-family="{MONO}" font-size="9" font-weight="800" letter-spacing="3">S A L T Y</text>'
        + f'<text x="292" y="64" fill="{C["muted"]}" font-family="{MONO}" font-size="7.5" font-weight="700">MODULES</text>'
        + modules
    )


MOTIFS = {
    "podcast": _motif_podcast,
    "jewel": _motif_jewel,
    "island": _motif_island,
    "quiz": _motif_quiz,
    "stack": _motif_stack,
    "rocket": _motif_rocket,
    "orbit": _motif_orbit,
    "projectile": _motif_projectile,
}


# --------------------------------------------------------------------------- cartridges

def _cartridge(idx: int, project: dict) -> str:
    accent = CATEGORY_ACCENT.get(project.get("category"), C["cyan"])
    motif_key = MOTIF_BY_REPO.get(project.get("name"), MOTIF_BY_CATEGORY.get(project.get("category"), "grid"))
    motif = MOTIFS.get(motif_key, _motif_grid)(accent, project.get("name", str(idx)))

    main, sub = _split_title(project.get("title") or project.get("name", ""))
    main = main if len(main) <= 30 else main[:29] + "…"
    sub = (sub or project.get("category", "")).upper()
    sub = sub if len(sub) <= 52 else sub[:51] + "…"
    desc = _wrap(project.get("description", ""), 66, 2)

    badge_label, badge_color, blink = STAGE_BADGE.get(project.get("stage_badge"), ("STABLE", C["cyan"], False))
    blink_anim = '<animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite"/>' if blink else ""
    badge_w = len(badge_label) * 6.6 + 26

    days = project.get("days_since_push")
    if days is None:
        save = ""
    elif days <= 0:
        save = "LAST SAVE · TODAY"
    elif days == 1:
        save = "LAST SAVE · YESTERDAY"
    else:
        save = f"LAST SAVE · {days}D AGO"

    chips, cx = [], 22
    for tech in (project.get("key_tech") or [])[:5]:
        w = len(tech) * 6.3 + 16
        if cx + w > 300:
            break
        chips.append(
            f'<rect x="{cx}" y="236" width="{w:.0f}" height="20" rx="5" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-opacity="0.35"/>'
            f'<text x="{cx + w / 2:.0f}" y="250" text-anchor="middle" fill="{accent}" font-family="{MONO}" font-size="10" font-weight="700">{esc(tech)}</text>'
        )
        cx += w + 6

    live = bool(project.get("live_url"))
    cta = "PLAY LIVE" if live else "VIEW CODE"
    cta_color = C["green"] if live else C["cyan"]

    desc_svg = "".join(
        f'<text x="22" y="{208 + i * 15}" fill="{C["muted"]}" font-family="{SANS}" font-size="11.5">{esc(line)}</text>'
        for i, line in enumerate(desc)
    )

    body = (
        # cartridge shell with the chamfered corner and grip ridges
        f'<path d="M18 2 H392 L438 48 V262 A16 16 0 0 1 422 278 H18 A16 16 0 0 1 2 262 V18 A16 16 0 0 1 18 2 Z" fill="{C["panel"]}" stroke="{accent}" stroke-opacity="0.55" stroke-width="2"/>'
        f'<g stroke="{accent}" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round">'
        + "".join(f'<path d="M{387 + t} {7 + t} L{381 + t} {13 + t}"/>' for t in (6, 14, 22))
        + "</g>"
        f'<text x="22" y="28" fill="{accent}" font-family="{MONO}" font-size="11" font-weight="800" letter-spacing="2">WORLD 3-{idx}</text>'
        f'<text x="112" y="28" fill="{C["muted"]}" font-family="{MONO}" font-size="10" letter-spacing="1">{esc(project.get("language") or "")}</text>'
        # cover-art screen
        f'<clipPath id="scr{idx}"><rect x="22" y="40" width="396" height="92" rx="8"/></clipPath>'
        f'<g clip-path="url(#scr{idx})"><g transform="translate(22 40)">{motif}</g>'
        f'<g transform="translate(22 40)" opacity="0.10">' + "".join(f'<rect y="{y}" width="396" height="1" fill="#000"/>' for y in range(0, 92, 3)) + "</g></g>"
        f'<rect x="22" y="40" width="396" height="92" rx="8" stroke="{C["line"]}" stroke-width="1.5"/>'
        # status pill inside the screen
        f'<rect x="{410 - badge_w:.0f}" y="48" width="{badge_w:.0f}" height="18" rx="9" fill="{C["bg"]}" fill-opacity="0.85" stroke="{badge_color}" stroke-opacity="0.6"/>'
        f'<circle cx="{410 - badge_w + 11:.0f}" cy="57" r="3.5" fill="{badge_color}">{blink_anim}</circle>'
        f'<text x="{410 - badge_w + 19:.0f}" y="61" fill="{badge_color}" font-family="{MONO}" font-size="9.5" font-weight="800">{badge_label}</text>'
        f'<text x="30" y="126" fill="{C["text"]}" fill-opacity="0.75" font-family="{MONO}" font-size="9" font-weight="700">{esc(save)}</text>'
        # title block
        f'<text x="22" y="164" fill="{C["text"]}" font-family="{SANS}" font-size="20" font-weight="800">{esc(main)}</text>'
        f'<text x="22" y="184" fill="{accent}" font-family="{MONO}" font-size="10.5" font-weight="700" letter-spacing="1">{esc(sub)}</text>'
        + desc_svg
        + "".join(chips)
        # call to action
        + f'<text x="418" y="251" text-anchor="end" fill="{cta_color}" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="1">'
        f'<tspan>▶<animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></tspan> {cta}</text>'
    )
    return _svg(440, 280, body, title=f"World 3-{idx}: {main}")


def generate_cartridges(featured_projects):
    """Writes level-N.svg and returns [(file, link, alt)] in display order."""
    picks = [p for p in featured_projects if p.get("name") != "ZeePrep-MobileApp"][:6]
    out = []
    for i, p in enumerate(picks, start=1):
        _save(f"level-{i}.svg", _cartridge(i, p))
        link = p.get("live_url") or p.get("html_url") or f"https://github.com/{USERNAME}"
        main, _ = _split_title(p.get("title") or p.get("name", ""))
        out.append((f"level-{i}.svg", link, f"World 3-{i} · {main}"))
    return out


# --------------------------------------------------------------------------- continue screen

def generate_continue_screen(players):
    credits = int(players.get("credits", 0))
    count = len(players.get("players", []))

    digits = []
    for k in range(10):
        digits.append(
            f'<text class="d" style="animation-delay:{k}s" x="742" y="138" text-anchor="middle" fill="{C["yellow"]}" '
            f'font-family="{MONO}" font-size="96" font-weight="800">{9 - k}</text>'
        )
    style = (
        ".d{opacity:0;animation:cd 10s infinite steps(1)}"
        "@keyframes cd{0%{opacity:1}10%,100%{opacity:0}}"
        ".blink{animation:bl 1.1s infinite steps(1)}@keyframes bl{0%{opacity:1}50%{opacity:0}}"
    )

    coin_drop = (
        '<g><animateTransform attributeName="transform" type="translate" values="150 -40;150 -40;150 96;150 96" keyTimes="0;0.2;0.62;1" calcMode="spline" keySplines="0 0 1 1;0.6 0 1 1;0 0 1 1" dur="2.6s" repeatCount="indefinite"/>'
        '<animate attributeName="opacity" values="1;1;1;0;0" keyTimes="0;0.2;0.6;0.62;1" dur="2.6s" repeatCount="indefinite"/>'
        f'<ellipse rx="16" ry="16" fill="{C["yellow"]}" stroke="#A16207" stroke-width="2"><animate attributeName="rx" values="16;3;16" dur="0.7s" repeatCount="indefinite"/></ellipse>'
        f'<text y="5" text-anchor="middle" fill="#A16207" font-family="{MONO}" font-size="14" font-weight="800">¢<animate attributeName="opacity" values="1;0;1" dur="0.7s" repeatCount="indefinite"/></text>'
        "</g>"
    )

    machine = (
        # coin door
        f'<rect x="70" y="72" width="160" height="150" rx="14" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="2"/>'
        f'<rect x="88" y="90" width="124" height="34" rx="6" fill="#2A1A05" stroke="{C["orange"]}" stroke-opacity="0.7"/>'
        f'<text x="150" y="112" text-anchor="middle" fill="{C["orange"]}" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="1" class="blink">INSERT COIN</text>'
        f'<rect x="128" y="138" width="44" height="58" rx="6" fill="{C["bg"]}" stroke="{C["line"]}"/>'
        f'<rect x="147" y="146" width="6" height="40" rx="2" fill="#000"/>'
        f'<text x="150" y="212" text-anchor="middle" fill="{C["muted"]}" font-family="{MONO}" font-size="9">25¢ · 1 PLAY</text>'
    )

    body = (
        f'<rect width="880" height="270" rx="14" fill="{C["bg"]}"/>'
        f'<rect x="1" y="1" width="878" height="268" rx="14" stroke="{C["orange"]}" stroke-opacity="0.35" stroke-width="2"/>'
        + _stars("continue", 880, 270, 40, C["muted"])
        + f'<clipPath id="slot"><rect x="70" y="0" width="160" height="150"/></clipPath>'
        + machine
        + f'<g clip-path="url(#slot)">{coin_drop}</g>'
        + f'<text x="300" y="120" fill="{C["text"]}" font-family="{MONO}" font-size="60" font-weight="800" letter-spacing="2">CONTINUE?</text>'
        + "".join(digits)
        + f'<line x1="300" y1="152" x2="830" y2="152" stroke="{C["dim"]}" stroke-width="1.5"/>'
        + f'<text x="300" y="182" fill="{C["muted"]}" font-family="{MONO}" font-size="13" letter-spacing="1">CREDITS</text>'
        + f'<text x="400" y="182" fill="{C["yellow"]}" font-family="{MONO}" font-size="13" font-weight="800">{credits:03d}</text>'
        + f'<text x="480" y="182" fill="{C["muted"]}" font-family="{MONO}" font-size="13" letter-spacing="1">PLAYERS ON THE WALL</text>'
        + f'<text x="680" y="182" fill="{C["green"]}" font-family="{MONO}" font-size="13" font-weight="800">{count:03d}</text>'
        + f'<text x="300" y="222" fill="{C["green"]}" font-family="{MONO}" font-size="13" font-weight="800">'
        f'<tspan class="blink">▶</tspan> CLICK TO DROP A COIN</text>'
        + f'<text x="300" y="242" fill="{C["muted"]}" font-family="{MONO}" font-size="11">one click opens an issue · a bot adds your avatar below · ~30 seconds</text>'
        # Chirag waits by the machine, hopeful
        + '<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="1.6s" repeatCount="indefinite"/>'
        + f'<ellipse cx="{800 + 22.4:.0f}" cy="254" rx="20" ry="3" fill="#000" opacity="0.5"/>'
        + hero.front(800, 200, 3.2)
        + '</g>'
        + f'<rect x="774" y="164" width="96" height="24" rx="12" fill="{C["panel"]}" stroke="{C["line"]}"/>'
        + f'<path d="M812 188 L818 196 L822 188 Z" fill="{C["panel"]}" stroke="{C["line"]}"/>'
        + f'<rect x="811" y="186" width="12" height="3" fill="{C["panel"]}"/>'
        + f'<text x="822" y="180" text-anchor="middle" fill="{C["text"]}" font-family="{MONO}" font-size="10" font-weight="700">1 coin pls?</text>'
    )
    _save("continue.svg", _svg(880, 270, body, style, "Continue? Insert coin"))


# --------------------------------------------------------------------------- end credits

def generate_end_credits(all_projects, featured_projects, players):
    W, H = 880, 340
    lines = []  # (text, kind)

    def gap(n=1):
        for _ in range(n):
            lines.append(("", "gap"))

    lines += [("CHIRAG GOUR", "h1"), ("COMPUTER SCIENCE ENGINEER", "tag")]
    gap(2)
    lines += [("WRITTEN, DESIGNED, ANIMATED & DEPLOYED BY", "role"), ("Chirag Gour", "name")]
    gap()
    lines.append(("STARRING", "role"))
    for p in featured_projects:
        main, sub = _split_title(p.get("title") or p.get("name", ""))
        lines.append((f"{main}  —  {sub}" if sub else main, "name"))
    gap()

    by_cat = {}
    featured_names = {p.get("name") for p in featured_projects}
    for p in all_projects:
        if p.get("name") in featured_names or p.get("name") == USERNAME:
            continue
        by_cat.setdefault(p.get("category") or "Miscellaneous", []).append(p.get("name"))
    for cat, names in sorted(by_cat.items(), key=lambda kv: -len(kv[1])):
        lines.append((f"{cat.upper()} ENSEMBLE", "role"))
        for i in range(0, len(names), 3):
            lines.append(("   ·   ".join(names[i:i + 3]), "small"))
        gap()

    tech, seen = [], set()
    for p in featured_projects:
        for t in p.get("key_tech") or []:
            if t.lower() not in seen:
                seen.add(t.lower())
                tech.append(t)
    lines.append(("TECH CREW", "role"))
    for i in range(0, len(tech), 4):
        lines.append(("   ·   ".join(tech[i:i + 4]), "small"))
    gap()

    lines.append(("SPECIAL THANKS", "role"))
    names = [pl["login"] for pl in players.get("players", [])][:12]
    if names:
        for i in range(0, len(names), 4):
            lines.append(("   ·   ".join("@" + n for n in names[i:i + 4]), "small"))
    lines.append(("every player who dropped a coin", "small"))
    lines.append(("and you — for scrolling all the way down here", "small"))
    gap()
    lines += [
        ("RENDERED BY", "role"),
        ("Python  ·  hand-written SVG  ·  GitHub Actions", "small"),
        ("re-generated every 2 hours  ·  zero JavaScript", "small"),
    ]
    gap(3)
    lines += [("THANK YOU FOR PLAYING", "h1")]
    gap()
    lines += [
        ("no repositories were harmed in the making of this README", "tiny"),
        (f"© 2024 – {datetime.now(timezone.utc).year}  ·  {USERNAME}", "tiny"),
    ]

    spec = {
        "h1": (40, 30, C["text"], MONO, 800, 3),
        "tag": (22, 13, C["cyan"], MONO, 700, 4),
        "role": (30, 11, C["yellow"], MONO, 800, 3),
        "name": (22, 15, C["text"], SANS, 600, 0),
        "small": (20, 12.5, "#B1BAC4", MONO, 500, 0),
        "tiny": (18, 10.5, C["muted"], MONO, 500, 1),
        "gap": (16, 0, "", "", 0, 0),
    }

    y, texts = 0, []
    for text, kind in lines:
        step, size, color, font, weight, ls = spec[kind]
        y += step
        if kind == "gap":
            continue
        texts.append(
            f'<text x="{W / 2:.0f}" y="{y}" text-anchor="middle" fill="{color}" font-family="{font}" '
            f'font-size="{size}" font-weight="{weight}" letter-spacing="{ls}">{esc(text)}</text>'
        )
    content_h = y + 20
    speed = 34  # px per second
    dur = (H - 150 + content_h) / speed

    body = (
        f'<rect width="{W}" height="{H}" rx="14" fill="{C["bg"]}"/>'
        + _stars("credits", W, H, 60)
        + '<defs>'
        f'<linearGradient id="fade_t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{C["bg"]}"/><stop offset="1" stop-color="{C["bg"]}" stop-opacity="0"/></linearGradient>'
        f'<linearGradient id="fade_b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{C["bg"]}" stop-opacity="0"/><stop offset="1" stop-color="{C["bg"]}"/></linearGradient>'
        f'<clipPath id="win"><rect width="{W}" height="{H}" rx="14"/></clipPath>'
        "</defs>"
        f'<g clip-path="url(#win)"><g>'
        f'<animateTransform attributeName="transform" type="translate" from="0 {H - 150}" to="0 {-content_h}" dur="{dur:.1f}s" repeatCount="indefinite"/>'
        + "".join(texts)
        + "</g></g>"
        f'<rect width="{W}" height="70" fill="url(#fade_t)"/>'
        f'<rect y="{H - 70}" width="{W}" height="70" fill="url(#fade_b)"/>'
        f'<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.4s" repeatCount="indefinite"/>'
        f'<ellipse cx="{W - 70}" cy="{H - 16}" rx="20" ry="3" fill="#000" opacity="0.5"/>'
        + hero.front(W - 92, H - 70, 3.2)
        + "</g>"
        f'<rect x="{W - 190}" y="{H - 66}" width="92" height="24" rx="12" fill="{C["panel"]}" stroke="{C["line"]}"/>'
        f'<text x="{W - 144}" y="{H - 50}" text-anchor="middle" fill="{C["text"]}" font-family="{MONO}" font-size="10" font-weight="700">gg, thanks!</text>'
        f'<text x="24" y="28" fill="{C["muted"]}" font-family="{MONO}" font-size="10" letter-spacing="2">END CREDITS</text>'
        f'<text x="{W - 24}" y="28" text-anchor="end" fill="{C["muted"]}" font-family="{MONO}" font-size="10" letter-spacing="2">'
        f'<tspan fill="{C["red"]}">●</tspan> REC</text>'
        f'<rect x="1" y="1" width="{W - 2}" height="{H - 2}" rx="14" stroke="{C["dim"]}" stroke-width="1.5"/>'
    )
    _save("end-credits.svg", _svg(W, H, body, title="End credits"))


# --------------------------------------------------------------------------- player select

def generate_player_select():
    W, H = 880, 330
    cell = 12
    sw, sh = len(hero.FRONT[0]) * cell, len(hero.FRONT) * cell
    cx, feet = 200, 276
    spin = 7  # seconds for a full front → back → front turn

    turntable = (
        f'<g transform="translate({cx} {feet - sh})">'
        f'<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="2.4s" repeatCount="indefinite"/>'
        f'<g><animateTransform attributeName="transform" type="scale" values="0.04 1;1 1;1 1;0.04 1;1 1;1 1;0.04 1" '
        f'keyTimes="0;0.05;0.45;0.5;0.55;0.95;1" dur="{spin}s" repeatCount="indefinite"/>'
        f'<g><animate attributeName="opacity" values="1;0" keyTimes="0;0.5" calcMode="discrete" dur="{spin}s" repeatCount="indefinite"/>'
        + hero.front(-sw / 2, 0, cell)
        + "</g>"
        f'<g opacity="0"><animate attributeName="opacity" values="0;1" keyTimes="0;0.5" calcMode="discrete" dur="{spin}s" repeatCount="indefinite"/>'
        + hero.back(-sw / 2, 0, cell)
        + "</g></g></g></g>"
    )
    platform = (
        f'<ellipse cx="{cx}" cy="{feet + 8}" rx="120" ry="24" fill="#1F2937"/>'
        f'<ellipse cx="{cx}" cy="{feet + 4}" rx="120" ry="24" fill="#111827" stroke="#8A9A3E" stroke-width="2.5">'
        '<animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite"/></ellipse>'
        f'<ellipse cx="{cx}" cy="{feet + 4}" rx="70" ry="12" fill="#000" opacity="0.45"/>'
        f'<ellipse cx="{cx}" cy="{feet + 4}" rx="120" ry="24" fill="none" stroke="#8A9A3E" stroke-opacity="0.5">'
        '<animate attributeName="rx" values="120;150" dur="2.4s" repeatCount="indefinite"/>'
        '<animate attributeName="ry" values="24;34" dur="2.4s" repeatCount="indefinite"/>'
        '<animate attributeName="stroke-opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite"/></ellipse>'
    )

    stats = [("3D / SHADERS", 95, C["cyan"]), ("EDTECH SIMS", 90, C["purple"]), ("REACTIVE WEB", 92, C["green"]),
             ("MOBILE & AI", 85, C["yellow"]), ("CUTENESS", 100, C["pink"])]
    bars = []
    for i, (label, val, color) in enumerate(stats):
        y = 166 + i * 24
        bw = 250 * val / 100
        bars.append(
            f'<text x="420" y="{y + 10}" fill="{C["text"]}" font-family="{MONO}" font-size="11" font-weight="700">{esc(label)}</text>'
            f'<rect x="560" y="{y}" width="250" height="12" rx="3" fill="{C["dim"]}"/>'
            f'<rect x="560" y="{y}" width="0" height="12" rx="3" fill="{color}">'
            f'<animate attributeName="width" values="0;{bw:.0f}" dur="1.2s" begin="{0.3 + i * 0.15:.2f}s" fill="freeze"/></rect>'
            f'<text x="822" y="{y + 10}" fill="{color}" font-family="{MONO}" font-size="11" font-weight="800">{"MAX" if val >= 100 else val}</text>'
        )

    body = (
        f'<rect width="{W}" height="{H}" rx="14" fill="{C["bg"]}"/>'
        + _stars("select", W, H, 50)
        + f'<rect x="1" y="1" width="{W - 2}" height="{H - 2}" rx="14" stroke="#8A9A3E" stroke-opacity="0.45" stroke-width="2"/>'
        + f'<text x="24" y="32" fill="{C["yellow"]}" font-family="{MONO}" font-size="12" font-weight="800" letter-spacing="3">1P · SELECT YOUR CHARACTER</text>'
        + platform
        + turntable
        + f'<text x="420" y="74" fill="{C["muted"]}" font-family="{MONO}" font-size="12" letter-spacing="2">PLAYER 1</text>'
        + f'<text x="420" y="106" fill="{C["text"]}" font-family="{MONO}" font-size="30" font-weight="800" letter-spacing="1">'
        f'<tspan fill="{C["yellow"]}">◀</tspan> CHIRAG GOUR <tspan fill="{C["yellow"]}">▶</tspan></text>'
        + f'<text x="420" y="130" fill="{C["cyan"]}" font-family="{MONO}" font-size="12" font-weight="700" letter-spacing="1">CLASS · COMPUTER SCIENCE ENGINEER</text>'
        + f'<text x="420" y="150" fill="{C["muted"]}" font-family="{MONO}" font-size="11">olive hoodie · blue jeans · white sneakers · name on the back</text>'
        + "".join(bars)
        + f'<text x="420" y="300" fill="{C["muted"]}" font-family="{MONO}" font-size="11">SPECIAL MOVE · <tspan fill="{C["text"]}">ships a whole 3D world before lunch</tspan></text>'
        + f'<text x="{W - 24}" y="{H - 14}" text-anchor="end" fill="{C["green"]}" font-family="{MONO}" font-size="11" font-weight="800">'
        f'<tspan>▶<animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></tspan> CLICK TO PLAY AS ME IN 3D</text>'
    )
    _save("player-select.svg", _svg(W, H, body, title="Player select — Chirag Gour"))


# --------------------------------------------------------------------------- entry points

def render_all(repo_analysis: dict, analytics: dict, players: dict = None):
    players = players or load_players()
    featured = repo_analysis.get("featured_projects", [])
    total = analytics.get("total_repositories") or repo_analysis.get("total_source_repos") or len(repo_analysis.get("all_projects", []))
    generate_menu()
    generate_stage_banners(total)
    generate_player_select()
    cartridges = generate_cartridges(featured)
    generate_continue_screen(players)
    generate_end_credits(repo_analysis.get("all_projects", []), featured, players)
    return cartridges


def load_cached():
    def _load(name, default):
        path = os.path.join(DATA_DIR, name)
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        return default

    return _load("repositories.json", {}), _load("analytics.json", {}), _load("profile.json", {})


if __name__ == "__main__":
    repos, analytics, _ = load_cached()
    render_all(repos, analytics)
