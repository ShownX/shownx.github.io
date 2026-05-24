---
layout: page
title: Super Co-Alignment
description: End-to-end alignment for multi-modal foundation models.
importance: 4
category: systems
related_publications: true
---

End-to-end alignment pipeline for multi-modal foundation models. Multi-modal red-teaming, distributed evaluation with LLM-as-judge scoring, and adversarial post-training using preference optimization. Reduces attack success rate by an **order of magnitude** across text and vision while preserving task quality.

The thing the literature underweights: alignment in production is a moving target. Static reward models decay against adapting attackers, which is why I treat alignment as a continual learning problem and pair this pipeline with the self-evolving agent for continuous updates.

The principle: a one-shot RLHF pass is the start of alignment, not the end. Production alignment lives in the loop. The adversarial component connects to the sharpness-aware optimization work for transferable attacks {% cite ye2024sharpness %} and the principles-of-design work for remote anti-spoofing systems {% cite xu2024principles %}.
