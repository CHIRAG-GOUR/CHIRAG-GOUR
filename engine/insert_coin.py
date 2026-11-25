"""
Insert-coin handler — run by .github/workflows/insert-coin.yml when a visitor opens
an "insert coin" issue. Adds them to data/players.json, re-renders the CONTINUE?
screen + credits, rebuilds the README from cached data (no network), and writes the
player's number to $GITHUB_OUTPUT for the bot's reply.

The login comes from the event payload via an env var (never interpolated into a
shell) and is validated against GitHub's username rules before use.
"""

import os
import re
import sys
import json
from datetime import datetime, timezone, timedelta

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from generate_game_ui import PLAYERS_PATH, load_players, load_cached, render_all  # noqa: E402
from readme_builder import ReadmeBuilder  # noqa: E402

LOGIN_RE = re.compile(r"^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$")
COOLDOWN = timedelta(minutes=30)
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def _output(**kv):
    path = os.environ.get("GITHUB_OUTPUT")
    lines = [f"{k}={v}" for k, v in kv.items()]
    if path:
        with open(path, "a", encoding="utf-8") as f:
            f.write("\n".join(lines) + "\n")
    print(" ".join(lines))


def main() -> int:
    login = (os.environ.get("PLAYER_LOGIN") or "").strip()
    if not LOGIN_RE.match(login):
        print(f"[COIN] Rejected invalid login: {login!r}")
        _output(status="invalid", player="0")
        return 0

    now = datetime.now(timezone.utc)
    data = load_players()
    roster = data["players"]
    existing = next((p for p in roster if p["login"].lower() == login.lower()), None)

    if existing:
        last = datetime.fromisoformat(existing.get("last_coin", existing["first_seen"]))
        if now - last < COOLDOWN:
            _output(status="cooldown", player=str(roster.index(existing) + 1))
            return 0
        existing["coins"] = existing.get("coins", 1) + 1
        existing["last_coin"] = now.isoformat(timespec="seconds")
        status = "returning"
    else:
        existing = {"login": login, "first_seen": now.isoformat(timespec="seconds"),
                    "last_coin": now.isoformat(timespec="seconds"), "coins": 1}
        roster.append(existing)
        status = "new"

    data["credits"] = int(data.get("credits", 0)) + 1
    os.makedirs(os.path.dirname(PLAYERS_PATH), exist_ok=True)
    with open(PLAYERS_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

    repos, analytics, _ = load_cached()
    render_all(repos, analytics, data)
    readme = ReadmeBuilder().build_from_cache()
    with open(os.path.join(BASE_DIR, "README.md"), "w", encoding="utf-8") as f:
        f.write(readme)

    _output(status=status, player=str(roster.index(existing) + 1), credits=str(data["credits"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
