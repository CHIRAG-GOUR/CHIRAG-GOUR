"""
README Builder Engine — "the README is a cartridge" edition.

Lays the profile out like a game: title screen → menu → six stages
(Player Select, Skill Tree, Level Select, High Scores, Bonus Arcade, Continue?)
→ end credits. 3D Chirag runs through every stage banner, rides the snake row by row,
blasts his name out of the contribution grid and stars in the real 3D game hosted on GitHub Pages.

GitHub strips scripts, iframes and styles from READMEs, so everything here is
animated SVG + links; the fully interactive part lives at GAME_URL.
"""

import os
import json
from typing import Dict, Any, List, Optional, Tuple

from generate_game_ui import GAME_URL, MENU, insert_coin_url, generate_cartridges, load_players, DATA_DIR

ASSET = "assets/generated"
GAME = f"{ASSET}/game"


def _img(src: str, alt: str, width: str = "100%") -> str:
    return f'<img src="{src}" alt="{alt}" width="{width}"/>'


def _link(href: str, inner: str) -> str:
    return f'<a href="{href}">{inner}</a>'


def _stage(n: int, anchor: str, title: str) -> str:
    return (
        f'<!-- ═════════════ STAGE 0{n} · {title.upper()} ═════════════ -->\n'
        f'<a name="{anchor}"></a>\n'
        f'{_img(f"{GAME}/stage-{n}.svg", f"Stage 0{n} — {title}")}\n'
    )


def _badge(label: str, message: str, color: str, logo: str = "") -> str:
    q = lambda s: s.replace("-", "--").replace("_", "__").replace(" ", "_")
    logo_part = f"&logo={logo}&logoColor=white" if logo else ""
    return f"https://img.shields.io/badge/{q(label)}-{q(message)}-{color}?style=for-the-badge&labelColor=161B22{logo_part}"


class ReadmeBuilder:
    def __init__(self, username: str = "CHIRAG-GOUR"):
        self.username = username

    # ------------------------------------------------------------------ sections
    def _menu(self) -> str:
        buttons = "\n".join(
            _link(f"#{anchor}", _img(f"{GAME}/menu-{i}.svg", f"0{i} {label.title()}", "15.6%"))
            for i, (anchor, label, _, _) in enumerate(MENU, start=1)
        )
        return f"<!-- MAIN MENU — the cursor hops across the buttons; each one jumps to its stage -->\n{buttons}\n"

    def _player_wall(self, players: Dict[str, Any]) -> str:
        roster = players.get("players", [])
        if not roster:
            return "<sub>🕹️ no players on the wall yet — <b>be Player 1</b></sub>"
        tiles = []
        for i, p in enumerate(roster[-48:][::-1]):
            login = p["login"]
            number = roster.index(p) + 1
            tiles.append(
                f'<a href="https://github.com/{login}" title="Player {number} · @{login}">'
                f'<img src="https://github.com/{login}.png?size=80" width="40" alt="@{login}"/></a>'
            )
        return (
            f"<sub><b>PLAYER WALL</b> · {len(roster)} player{'s' if len(roster) != 1 else ''} · "
            f"{players.get('credits', 0)} credits inserted</sub>\n<br/><br/>\n" + "\n".join(tiles)
        )

    def _cartridge_grid(self, cartridges: List[Tuple[str, str, str]]) -> str:
        rows = []
        for i in range(0, len(cartridges), 2):
            pair = cartridges[i:i + 2]
            rows.append("\n".join(_link(link, _img(f"{GAME}/{f}", alt, "49%")) for f, link, alt in pair))
        return "\n<br/>\n".join(rows)

    # ------------------------------------------------------------------ build
    def build_readme(self,
                     profile: Dict[str, Any],
                     analytics: Dict[str, Any],
                     featured_projects: List[Dict[str, Any]],
                     sync_time: str,
                     trends: Dict[str, Any],
                     cartridges: Optional[List[Tuple[str, str, str]]] = None,
                     players: Optional[Dict[str, Any]] = None) -> str:
        players = players if players is not None else load_players()
        if cartridges is None:
            cartridges = generate_cartridges(featured_projects)
        total_repos = analytics.get("total_repositories", 83)
        coin_url = insert_coin_url()
        zeeprep = next((p for p in featured_projects if p.get("name") == "ZeePrep-MobileApp"), {})
        zeeprep_url = zeeprep.get("live_url") or zeeprep.get("html_url") or f"https://github.com/{self.username}/ZeePrep-MobileApp"

        play_row = "\n&nbsp;\n".join([
            _link(GAME_URL, f'<img src="{_badge("▶ PRESS START", "3D GAME", "8A9A3E", "threedotjs")}" alt="Play Chirag: The Game"/>'),
            _link(f"{GAME_URL}?mode=snake", f'<img src="{_badge("🐍 SNAKE", "RIDE", "39D353")}" alt="Play Snake Ride"/>'),
            _link(f"{GAME_URL}?mode=space", f'<img src="{_badge("🚀 SPACE", "DEFENDER", "38BDF8")}" alt="Play Space Defender"/>'),
            _link(f"{GAME_URL}?mode=ladders", f'<img src="{_badge("🎲 SNAKES", "& LADDERS VS ME", "F472B6")}" alt="Play Snakes and Ladders against Chirag"/>'),
        ])

        md = f"""<div align="center">

<a name="top"></a>

<!-- ═════════════ TITLE SCREEN ═════════════ -->
{_img(f"{ASSET}/identity-header.svg", "Chirag Gour — Computer Science Engineer")}

<br/><br/>

{_link("#levels", _img("assets/Mario.gif", "Pixel-art developer room — press start"))}

<br/><br/>

{self._menu()}
<br/><br/>

{_stage(1, "player", "Player Select")}
<br/>

{_link(GAME_URL, _img(f"{GAME}/player-select.svg", "Player 1 — Chirag Gour, a 3D chibi in an olive CHIRAG hoodie. Click to play as him in 3D"))}

<br/><br/>

{_img(f"{ASSET}/developer-neofetch-bio.svg", "neofetch-style developer bio")}

<br/><br/>

{_img(f"{ASSET}/commit-ticker.svg", "Currently building — latest commit")}

<br/><br/><br/>

{_stage(2, "skills", "Skill Tree")}
<br/>

{_img(f"{ASSET}/portfolio-skills-matrix.svg", "Core technical proficiencies")}

<br/><br/>

{_img(f"{ASSET}/languages-and-radar.svg", "Technical domains and language mix")}

<br/><br/><br/>

{_stage(3, "levels", "Level Select")}
<br/>

{_link(zeeprep_url, _img(f"{ASSET}/mobile-app-phone-mockup.svg", "Featured level — ZeePrep mobile app"))}

<br/><br/>

{self._cartridge_grid(cartridges)}

<br/><br/>

{_link(f"https://github.com/{self.username}?tab=repositories", f'<img src="{_badge("WORLD SELECT", f"ALL {total_repos} REPOS", "7C3AED", "github")}" alt="Explore all repositories"/>')}

<br/><br/><br/>

{_stage(4, "scores", "High Scores")}
<br/>

{_img(f"{ASSET}/developer-xp-streak.svg", "Developer XP and streak")}

<br/><br/>

{_img(f"{ASSET}/trophies-and-achievements.svg", "Milestone trophies")}

<br/><br/><br/>

{_stage(5, "arcade", "Bonus Arcade")}
<br/>

{_link(f"{GAME_URL}?mode=snake", _img(f"{ASSET}/snake-ride.svg", "Snake Ride — Chirag rides a snake row by row across his real contribution graph. Click to play it in 3D"))}

<br/><br/>

{_link(f"{GAME_URL}?mode=space", _img(f"{ASSET}/arcade-rocket-commit-game.svg", "Space Defender — Chirag blasts only the contribution cells that spell CHIRAG. Click to play it in 3D"))}

<br/><br/>

{_img(f"{ASSET}/arcade-pacman-commit-eater.svg", "Commit chomper eating the 10 latest commits")}

<br/><br/>

{_img(f"{ASSET}/commit-skyline-isometric.svg", "3D isometric commit skyline")}

<br/><br/>

{_img(f"{ASSET}/activity-velocity-graph.svg", "Commit velocity and weekly rhythm")}

<br/><br/>

{_img(f"{ASSET}/sound-waveform.svg", "Coding cadence waveform")}

<br/><br/>

{play_row}

<br/><br/><br/>

{_stage(6, "continue", "Continue?")}
<br/>

{_link(coin_url, _img(f"{GAME}/continue.svg", "Continue? Click to insert a coin and join the player wall"))}

<br/><br/>

{self._player_wall(players)}

<br/><br/><br/>

<!-- ═════════════ END CREDITS ═════════════ -->
{_img(f"{GAME}/end-credits.svg", "End credits rolling through every repository")}

<br/><br/>

<sub>🕹️ this README is a cartridge — re-rendered every 2 hours by <a href="https://github.com/{self.username}/{self.username}/tree/main/engine">a Python engine</a> · no JavaScript was harmed · last sync {sync_time}</sub>
<br/>
<sub><a href="#top">▲ back to title screen</a></sub>

</div>
"""
        return md

    def build_from_cache(self) -> str:
        """Rebuild the README from data/current without touching the network."""
        def _load(name, default):
            path = os.path.join(DATA_DIR, name)
            if os.path.exists(path):
                with open(path, "r", encoding="utf-8") as f:
                    return json.load(f)
            return default

        repos = _load("repositories.json", {})
        analytics = _load("analytics.json", {})
        return self.build_readme(
            profile=_load("profile.json", {}),
            analytics=analytics,
            featured_projects=repos.get("featured_projects", []),
            sync_time=analytics.get("sync_timestamp", ""),
            trends={},
        )
