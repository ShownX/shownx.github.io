---
layout: page
title: Continual Learning for FMs
description: Continual learning that drops the disjoint-task assumption.
importance: 1
category: current
related_publications: true
---

Continual learning frameworks for VLMs and LLMs that detect semantic overlap across tasks, consolidate redundant experts via on-policy self-distillation, and route inputs through zero-parameter or GMM-based routers. Outperforms strongest baselines by **+7–15 points** across disjoint and overlapping benchmarks while reducing deployed adapters by up to **3×**.

I created the first VLM continual-learning benchmark with controlled inter-task overlap, because the standard disjoint-task setup hides the failure mode that matters most in production: tasks that share concepts but differ in distribution.

This is the model-side complement to the production agent system: the agent answers *how to ship updates fast*, this work answers *how to ship them without forgetting*. The thread connects to earlier domain-adaptation work {% cite xu2019dsne zhou2020dsne %} that established stochastic neighborhood embedding for cross-domain transfer, and to recent advances in instruction grounding {% cite zong2025groundv %} and salient-concept-aware data augmentation {% cite zhao2025salient %}.
