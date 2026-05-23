---
layout: page
title: Hybrid Attention/Recurrent VLM
description: Linear-time recurrent layers (GKA) for long-context agentic workloads.
importance: 2
category: current
---

A hybrid VLM that replaces 25% of attention layers with linear-time recurrent layers (GKA) for constant-memory, constant-latency inference on long-context agentic workloads. Trained with progressive distillation from the dense teacher and fine-tuned on vision-language and tool-calling tasks.

Achieves near-parity with the dense model on VL benchmarks at **1.3–1.5× inference speedup** at long contexts. Open question: where the right boundary is between attention and recurrence in a VLM. The current 25% mix was empirical; the principled answer is unclear.
