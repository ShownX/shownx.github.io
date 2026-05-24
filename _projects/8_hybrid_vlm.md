---
layout: page
title: Hybrid Attention/Recurrent FM
description: Linear-time recurrent layers (GKA) for long-context agentic workloads.
importance: 2
category: current
related_publications: true
---

A hybrid VLM that replaces 25% of attention layers with linear-time recurrent layers (GKA) for constant-memory, constant-latency inference on long-context agentic workloads. Trained with progressive distillation from the dense teacher and fine-tuned on vision-language and tool-calling tasks.

Achieves near-parity with the dense model on VL benchmarks at **1.3–1.5× inference speedup** at long contexts. Open question: where the right boundary is between attention and recurrence in a VLM. The current 25% mix was empirical; the principled answer is unclear.

The architecture work builds on the codebook-anchored adaptation thread {% cite wu2026decoupling %} that showed how to decouple visual encoders from language backbones, and on continual learning that determines how often you need to update such an architecture in production.
