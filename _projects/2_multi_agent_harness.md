---
layout: page
title: Multi-Agent Research Harness
description: Coordination layer for concurrent autonomous agents working on the same codebase.
importance: 2
category: systems
---

A coordination layer for many autonomous agents working in parallel on the same research codebase: isolated sub-agent contexts, Kanban-style task claims with stale-detection, one git worktree per session, skill-based knowledge injection, and independent verification gates.

Outperforms single-session agents on complex tasks at **~6× lower cost** and runs **200+ autonomous experiments per sprint**. The principle worth keeping: agents fail more by stepping on each other than by being individually weak. The harness exists to prevent collisions, not to make any single agent smarter.

Practical building blocks: a shared task ledger that every session re-reads before claiming, a per-session worktree to eliminate file-level conflicts entirely, and verification gates that block merges from agents whose work other agents could not reproduce.
