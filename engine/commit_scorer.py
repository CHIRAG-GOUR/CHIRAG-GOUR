"""
Explainable Commit Intelligence & Scoring Engine
Scores development activity across 9 transparent dimensions, enforces anti-gaming
rules, and outputs human-readable rationales for every technical evaluation.
"""

import re
from typing import Dict, Any, List

class CommitScorer:
    def __init__(self):
        # Lexical patterns for dimension matching
        self.PATTERNS = {
            "architectural": [
                r"arch", r"structure", r"setup", r"scaffold", r"init", r"config",
                r"turbopack", r"vite", r"provider", r"router", r"zustand", r"store",
                r"modular", r"layer", r"layout", r"migration"
            ],
            "feature": [
                r"feat", r"add", r"implement", r"create", r"build", r"integrate",
                r"support", r"screen", r"view", r"dashboard", r"scene", r"portal"
            ],
            "complexity_3d_ai": [
                r"three", r"r3f", r"shader", r"glsl", r"pbr", r"theatre", r"groq",
                r"face-api", r"physics", r"motion", r"bvh", r"kinematic", r"canvas",
                r"particle", r"audio", r"audiovisual", r"simulation", r"landmark"
            ],
            "refactoring": [
                r"refactor", r"clean", r"simplify", r"decouple", r"dedup", r"optimize",
                r"perf", r"extract", r"reorganize", r"streamline"
            ],
            "bugfix_stability": [
                r"fix", r"patch", r"resolve", r"repair", r"correct", r"handle error",
                r"fallback", r"catch", r"crash", r"issue", r"guard", r"null"
            ],
            "integration_api": [
                r"firebase", r"api", r"endpoint", r"fetch", r"query", r"client",
                r"expo", r"audio", r"video", r"tanstack", r"sync", r"stream"
            ],
            "testing_validation": [
                r"test", r"spec", r"lint", r"oxlint", r"eslint", r"type", r"types",
                r"validate", r"assert", r"schema"
            ],
            "documentation": [
                r"doc", r"readme", r"guide", r"comment", r"note", r"instruction",
                r"changelog", r"specification"
            ]
        }

    def evaluate_commit(self, commit: Dict[str, Any], project_name: str = "") -> Dict[str, Any]:
        msg = commit.get("message", "").strip()
        first_line = msg.split("\n")[0]
        msg_lower = msg.lower()

        # Dimension signals (raw 0 to 10 scale)
        dims = {
            "architectural": 0.0,
            "feature": 0.0,
            "complexity_3d_ai": 0.0,
            "refactoring": 0.0,
            "bugfix_stability": 0.0,
            "integration_api": 0.0,
            "testing_validation": 0.0,
            "documentation": 0.0,
            "consistency": 5.0 # baseline consistency presence
        }

        reasons = []

        # Anti-gaming checks
        # 1. Merge commits
        is_merge = msg_lower.startswith("merge branch") or msg_lower.startswith("merge pull request")
        # 2. Automated dependency updates
        is_bot = "bump" in msg_lower and "from" in msg_lower or "dependabot" in msg_lower
        # 3. Trivial or single-word commit
        is_trivial = len(msg.split()) <= 1 and len(msg) < 8 and not any(k in msg_lower for k in ["init", "setup"])

        # Detect pattern matches
        for dim, patterns in self.PATTERNS.items():
            matches = [p for p in patterns if re.search(r"\b" + p, msg_lower)]
            if matches:
                # Intensity scale
                dims[dim] = min(10.0, 4.0 + len(matches) * 2.0)

        # Contextual boost from known repository domain
        proj_lower = project_name.lower()
        if any(k in proj_lower for k in ["skippi", "mangalyan", "solar", "physics", "eat-better"]):
            if dims["feature"] > 0 or dims["complexity_3d_ai"] > 0:
                dims["complexity_3d_ai"] = max(dims["complexity_3d_ai"], 7.0)

        # Classification of primary change type
        if is_merge:
            change_type = "Merge Coordination"
            impact_level = "Low"
        elif is_bot:
            change_type = "Dependency Maintenance"
            impact_level = "Low"
        elif dims["complexity_3d_ai"] >= 6.0:
            change_type = "3D Simulation & Creative Logic"
            impact_level = "High"
            reasons.append("Involves spatial rendering, shaders, or advanced interactive computing")
        elif dims["architectural"] >= 6.0:
            change_type = "Architectural Foundation"
            impact_level = "High"
            reasons.append("Structural framework setup, state store configuration, or routing modernization")
        elif dims["feature"] >= 5.0:
            change_type = "Feature Delivery"
            impact_level = "Medium-High"
            reasons.append("User-facing capability or interactive pedagogical mechanism")
        elif dims["bugfix_stability"] >= 5.0:
            change_type = "Stability & Remediation"
            impact_level = "Medium"
            reasons.append("Edge-case resolution or critical runtime stability patch")
        elif dims["refactoring"] >= 5.0:
            change_type = "Code Quality & Refactoring"
            impact_level = "Medium-High"
            reasons.append("Simplification and structural decoupling without behavior regression")
        elif dims["documentation"] >= 5.0:
            change_type = "Technical Documentation"
            impact_level = "Medium"
            reasons.append("Pedagogical clarity, installation guidelines, and system specs")
        else:
            change_type = "Incremental Iteration"
            impact_level = "Standard"
            reasons.append("General maintenance and iterative code adjustment")

        # Weighted score computation
        # Weights sum to 1.00
        weights = {
            "architectural": 0.20,
            "feature": 0.20,
            "complexity_3d_ai": 0.15,
            "refactoring": 0.15,
            "bugfix_stability": 0.10,
            "integration_api": 0.08,
            "testing_validation": 0.05,
            "documentation": 0.04,
            "consistency": 0.03
        }

        raw_score = sum(dims[k] * weights[k] * 10.0 for k in weights)

        # Apply multiplier penalties or bonuses
        multiplier = 1.0
        if is_merge:
            multiplier = 0.25
            reasons.append("Adjusted for merge commit baseline")
        elif is_bot:
            multiplier = 0.20
            reasons.append("Automated dependency management adjustment")
        elif is_trivial:
            multiplier = 0.30
            reasons.append("Minimal message payload indicates low documented impact")
        elif dims["refactoring"] >= 6.0 and dims["bugfix_stability"] >= 4.0:
            multiplier = 1.15
            reasons.append("Bonus awarded for proactive stabilization and cleanup")

        final_score = round(min(100.0, max(15.0, raw_score * multiplier)), 1)

        # Testing & verification evidence detection
        test_evidence = "Detected" if dims["testing_validation"] >= 4.0 else "Not explicitly logged in commit"

        # Construct explainable rationale string
        explanation = "; ".join(reasons) if reasons else "Standard progressive development contribution"

        return {
            "sha": commit.get("sha", "")[:7],
            "full_sha": commit.get("sha", ""),
            "title": first_line[:90],
            "project": project_name,
            "date": commit.get("date"),
            "change_type": change_type,
            "technical_impact": impact_level,
            "testing_evidence": test_evidence,
            "commit_score": final_score,
            "dimensions": dims,
            "reasoning": explanation
        }

    def aggregate_portfolio_scores(self, evaluated_commits: List[Dict[str, Any]]) -> Dict[str, Any]:
        if not evaluated_commits:
            return {
                "overall_developer_activity_score": 0,
                "technical_growth_score": 0,
                "recent_commits_evaluated": 0
            }

        scores = [c["commit_score"] for c in evaluated_commits]
        avg_score = sum(scores) / len(scores)

        # High impact count
        high_impact = [c for c in evaluated_commits if c["technical_impact"] in ["High", "Medium-High"]]
        high_impact_ratio = len(high_impact) / len(evaluated_commits)

        # Overall activity score (composite of volume, quality, and high impact delivery)
        overall_activity = round(min(98.5, avg_score * 0.7 + (high_impact_ratio * 100.0) * 0.3), 1)
        
        # Technical growth score (measures adoption of 3D, AI, and complex mobile patterns)
        growth_count = sum(1 for c in evaluated_commits if c["dimensions"]["complexity_3d_ai"] >= 5.0 or c["dimensions"]["architectural"] >= 5.0)
        growth_score = round(min(99.0, 60.0 + (growth_count / len(evaluated_commits)) * 80.0), 1)

        return {
            "overall_developer_activity_score": overall_activity,
            "technical_growth_score": growth_score,
            "average_commit_score": round(avg_score, 1),
            "high_impact_commit_count": len(high_impact),
            "total_commits_evaluated": len(evaluated_commits)
        }
