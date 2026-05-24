---
layout: page
title: Hardware-Aware Distillation
description: Training methods for analog in-memory computing inference.
importance: 3
category: current
---

Training methods for deploying LLMs on analog in-memory computing hardware (orders-of-magnitude inference energy efficiency).

Identified an **agentic cliff**: structured outputs fail roughly 2× faster than general knowledge under weight noise. A staged curriculum that gradually exposes the model to incremental hardware non-idealities preserves performance within **2.5 points**, and a reverse-linear noise schedule matches clean-training loss within **0.003**.

The takeaway: deployment-time noise should be modeled during training, not patched in afterward. Treating non-idealities as a curriculum rather than a perturbation is what closes the gap.
