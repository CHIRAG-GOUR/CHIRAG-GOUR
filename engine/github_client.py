"""
GitHub Client Module
Handles resilient API fetching with rate-limit protection, local caching,
and seamless fallback for offline execution.
"""

import os
import json
import urllib.request
import urllib.error
import time
from typing import Dict, Any, List, Optional

CACHE_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "current")

class GitHubClient:
    def __init__(self, username: str = "CHIRAG-GOUR", token: Optional[str] = None):
        self.username = username
        self.token = token or os.environ.get("GITHUB_TOKEN")
        self.headers = {
            "User-Agent": "Chirag-Developer-Ecosystem/1.0",
            "Accept": "application/vnd.github.v3+json"
        }
        if self.token:
            self.headers["Authorization"] = f"Bearer {self.token}"

    def _get(self, url: str) -> Optional[Any]:
        req = urllib.request.Request(url, headers=self.headers)
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                remaining = resp.headers.get("X-RateLimit-Remaining")
                if remaining and int(remaining) < 5:
                    print(f"[WARN] GitHub API rate limit low: {remaining} remaining.")
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            if e.code == 403:
                print(f"[WARN] Rate limit reached or forbidden for {url}: {e}")
            else:
                print(f"[ERROR] HTTP {e.code} for {url}: {e}")
            return None
        except Exception as e:
            print(f"[ERROR] Request failed for {url}: {e}")
            return None

    def fetch_user_profile(self) -> Dict[str, Any]:
        url = f"https://api.github.com/users/{self.username}"
        data = self._get(url)
        if data:
            return data
        # Fallback to local cached data
        fallback_path = os.path.join(CACHE_DIR, "profile.json")
        if os.path.exists(fallback_path):
            with open(fallback_path, "r", encoding="utf-8") as f:
                return json.load(f)
        return {
            "login": self.username,
            "name": "Chirag Gour",
            "public_repos": 57,
            "followers": 1,
            "following": 1,
            "created_at": "2024-07-05T12:28:52Z"
        }

    def fetch_all_repositories(self) -> List[Dict[str, Any]]:
        url = f"https://api.github.com/users/{self.username}/repos?per_page=100&sort=updated"
        repos = self._get(url)
        if repos and isinstance(repos, list):
            return repos
        # Fallback to cached repos
        fallback_path = os.path.join(CACHE_DIR, "repositories.json")
        if os.path.exists(fallback_path):
            with open(fallback_path, "r", encoding="utf-8") as f:
                return json.load(f)
        # Check scratch data
        scratch_path = "C:/Users/HP/.gemini/antigravity/scratch/ecosystem_data/repos.json"
        if os.path.exists(scratch_path):
            with open(scratch_path, "r", encoding="utf-8") as f:
                return json.load(f)
        return []

    def fetch_commits_for_repo(self, repo_name: str, limit: int = 100) -> List[Dict[str, Any]]:
        url = f"https://api.github.com/repos/{self.username}/{repo_name}/commits?per_page={limit}"
        commits = self._get(url)
        if commits and isinstance(commits, list):
            return commits
        # Check scratch all_commits
        scratch_commits = "C:/Users/HP/.gemini/antigravity/scratch/ecosystem_data/all_commits.json"
        if os.path.exists(scratch_commits):
            with open(scratch_commits, "r", encoding="utf-8") as f:
                all_c = json.load(f)
                if repo_name in all_c:
                    return all_c[repo_name]
        return []
