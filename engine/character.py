"""
Voxel Character Engine — "3D Chirag", the lead character of the README.

A cute chibi: big head, olive-green hoodie with CHIRAG printed on the back,
blue jeans, white sneakers. Sprites are authored as pixel grids and rendered
as extruded voxels (lit top face + shaded side face + front face), so they read
as little 3D blocks. Change PALETTE to recolour him everywhere at once — the
3D web game (game/main.js) uses the same colours.
"""

PALETTE = {
    "H": "#2A1F1A",  # hair
    "S": "#D69E74",  # skin
    "E": "#1A1423",  # eyes
    "W": "#FFFFFF",  # eye sparkle
    "R": "#F28B82",  # blush
    "M": "#9A3B3B",  # mouth
    "O": "#6B7A2E",  # olive hoodie
    "Q": "#55621F",  # hood / hoodie shadow
    "D": "#EEF2E2",  # hoodie strings
    "J": "#3E6FB0",  # blue jeans
    "K": "#F8FAFC",  # white sneakers
}
TEXT_ON_BACK = "CHIRAG"

_HEAD_FRONT = [
    "....HHHHHH....",
    "..HHHHHHHHHH..",
    ".HHHHHHHHHHHH.",
    ".HHSHHHHHHSHH.",
    ".HSSSSSSSSSSH.",
    ".SSEWSSSSEWSS.",
    ".SSEESSSSEESS.",
    ".SRSSSMMSSSRS.",
    "..SSSSSSSSSS..",
]
_HEAD_BACK = [
    "....HHHHHH....",
    "..HHHHHHHHHH..",
    ".HHHHHHHHHHHH.",
    ".HHHHHHHHHHHH.",
    ".HHHHHHHHHHHH.",
    ".HHHHHHHHHHHH.",
    ".SHHHHHHHHHHS.",
    "..HHHHHHHHHH..",
    "...SSSSSSSS...",
]

FRONT = _HEAD_FRONT + [
    "...OOOOOOOO...",
    "..OOODOODOOO..",
    ".SOOOOOOOOOOS.",
    "..OOOOOOOOOO..",
    "...JJJJJJJJ...",
    "...JJJ..JJJ...",
    "..KKKK..KKKK..",
]
BACK = _HEAD_BACK + [
    "..QQQQQQQQQQ..",
    "..OQQQQQQQQO..",
    ".SOOOOOOOOOOS.",
    "..OOOOOOOOOO..",
    "...JJJJJJJJ...",
    "...JJJ..JJJ...",
    "..KKKK..KKKK..",
]
SIT_FRONT = _HEAD_FRONT + [
    "...OOOOOOOO...",
    "..OOODOODOOO..",
    ".SOOOOOOOOOOS.",
    "..JJJJJJJJJJ..",
    "..KK......KK..",
]
SIT_BACK = _HEAD_BACK + [
    "..QQQQQQQQQQ..",
    "..OQQQQQQQQO..",
    ".SOOOOOOOOOOS.",
    "..JJJJJJJJJJ..",
    "..KK......KK..",
]
EYE_ROWS = (5, 6)

# Side view running right (12 wide): body + two alternating leg frames
RUN_BODY = [
    "...HHHHHH...",
    ".HHHHHHHHHH.",
    "HHHHHHHHHHH.",
    "HHHHHHHSHSH.",
    "HHHHSSSSSSS.",
    "HHHSSSSSEWS.",
    "HHHSSSSSEES.",
    ".HSSSSSRSSS.",
    "..SSSSSSMS..",
    "...QOOOOO...",
    "..QQOOOOOS..",
    "..QOOOOOO...",
    "...OOOOOO...",
    "...JJJJJ....",
]
RUN_LEGS_A = [
    "..JJ..JJ....",
    ".KKK...KKK..",
]
RUN_LEGS_B = [
    "....JJ......",
    "....KKK.....",
]
RUN_ROWS = len(RUN_BODY) + 2

for _sprite in (FRONT, BACK, SIT_FRONT, SIT_BACK, RUN_BODY, RUN_LEGS_A, RUN_LEGS_B):
    assert len({len(r) for r in _sprite}) == 1, "sprite rows must share one width"


def _shade(hex_color: str, factor: float) -> str:
    h = hex_color.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    if factor >= 1:
        r, g, b = (int(v + (255 - v) * (factor - 1)) for v in (r, g, b))
    else:
        r, g, b = (int(v * factor) for v in (r, g, b))
    return f"#{max(0, min(255, r)):02X}{max(0, min(255, g)):02X}{max(0, min(255, b)):02X}"


def voxel(sprite, x=0.0, y=0.0, cell=4.0, depth=None, row_offset=0) -> str:
    """Render a pixel grid as extruded voxels. Returns an SVG <g> string.

    Depth faces (lit top + shaded right side) go down first, then every front
    face on top — correct for this oblique projection since fronts are nearest.
    """
    d = cell * 0.45 if depth is None else depth
    sides, fronts = [], []
    for r, row in enumerate(sprite):
        for c, ch in enumerate(row):
            if ch not in PALETTE:
                continue
            base = PALETTE[ch]
            px, py = x + c * cell, y + (r + row_offset) * cell
            above = r > 0 and sprite[r - 1][c] in PALETTE
            right = c + 1 < len(row) and row[c + 1] in PALETTE
            if not above:
                sides.append(f'<path d="M{px:.1f} {py:.1f}l{d:.1f} {-d:.1f}h{cell:.1f}l{-d:.1f} {d:.1f}Z" fill="{_shade(base, 1.35)}"/>')
            if not right:
                sides.append(f'<path d="M{px + cell:.1f} {py:.1f}l{d:.1f} {-d:.1f}v{cell:.1f}l{-d:.1f} {d:.1f}Z" fill="{_shade(base, 0.6)}"/>')
            fronts.append(f'<rect x="{px:.1f}" y="{py:.1f}" width="{cell + 0.35:.2f}" height="{cell + 0.35:.2f}" fill="{base}"/>')
    return f'<g>{"".join(sides)}{"".join(fronts)}</g>'


def _blink(sprite, x, y, cell) -> str:
    lids = []
    for r in EYE_ROWS:
        for c, ch in enumerate(sprite[r]):
            if ch in "EW":
                lids.append(f'<rect x="{x + c * cell:.1f}" y="{y + r * cell:.1f}" width="{cell + 0.35:.2f}" height="{cell + 0.35:.2f}"/>')
    return (
        f'<g fill="{PALETTE["S"]}" opacity="0">{"".join(lids)}'
        '<animate attributeName="opacity" values="0;0;1;0" keyTimes="0;0.93;0.96;1" dur="3.6s" repeatCount="indefinite"/></g>'
    )


def back_text(x, y, cell, body_row=11, cols=14) -> str:
    """CHIRAG printed across the hoodie back (aligned to the BACK/SIT_BACK sprites)."""
    size = cell * 1.75
    return (
        f'<text x="{x + cols * cell / 2:.1f}" y="{y + (body_row + 0.95) * cell:.1f}" text-anchor="middle" '
        f'fill="#F8FAFC" font-family="\'Arial Black\', Impact, \'Segoe UI\', sans-serif" font-size="{size:.1f}" '
        f'font-weight="900" letter-spacing="{cell * 0.08:.2f}">{TEXT_ON_BACK}</text>'
    )


def front(x=0.0, y=0.0, cell=6.0, blink=True) -> str:
    return f"<g>{voxel(FRONT, x, y, cell)}{_blink(FRONT, x, y, cell) if blink else ''}</g>"


def back(x=0.0, y=0.0, cell=6.0) -> str:
    return f"<g>{voxel(BACK, x, y, cell)}{back_text(x, y, cell)}</g>"


def sit_front(x=0.0, y=0.0, cell=2.0, blink=True) -> str:
    return f"<g>{voxel(SIT_FRONT, x, y, cell)}{_blink(SIT_FRONT, x, y, cell) if blink else ''}</g>"


def sit_back(x=0.0, y=0.0, cell=2.0) -> str:
    return f"<g>{voxel(SIT_BACK, x, y, cell)}{back_text(x, y, cell)}</g>"


def runner(x=0.0, y=0.0, cell=3.0) -> str:
    """Running side view. Embedding SVG must include RUNNER_CSS. Feet at y + RUN_ROWS*cell."""
    return (
        "<g>"
        f'<g class="legA">{voxel(RUN_LEGS_A, x, y, cell, row_offset=len(RUN_BODY))}</g>'
        f'<g class="legB">{voxel(RUN_LEGS_B, x, y, cell, row_offset=len(RUN_BODY))}</g>'
        f"{voxel(RUN_BODY, x, y, cell)}"
        "</g>"
    )


RUNNER_CSS = (
    ".legA{animation:legA .32s infinite steps(1)}.legB{animation:legB .32s infinite steps(1)}"
    "@keyframes legA{0%{opacity:1}50%{opacity:0}}@keyframes legB{0%{opacity:0}50%{opacity:1}}"
)


def size(sprite, cell):
    return len(sprite[0]) * cell, len(sprite) * cell
