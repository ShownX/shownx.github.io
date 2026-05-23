---
layout: page
title: Overlap-Aware Continual Learning for VLMs
description: Continual learning that drops the disjoint-task assumption.
importance: 1
category: current
---

Continual learning frameworks for VLMs and LLMs that detect semantic overlap across tasks, consolidate redundant experts via on-policy self-distillation, and route inputs through zero-parameter or GMM-based routers. Outperforms strongest baselines by **+7–15 points** across disjoint and overlapping benchmarks while reducing deployed adapters by up to **3×**.

I created the first VLM continual-learning benchmark with controlled inter-task overlap, because the standard disjoint-task setup hides the failure mode that matters most in production: tasks that share concepts but differ in distribution.

This work feeds two ECCV 2026 / NeurIPS 2026 submissions: *Beyond Disjoint Tasks* and *Continual On-Policy Distillation from Experts*.
