---
layout: page
title: Deepfake Detection
description: Self-consistency and language guidance for generalizable deepfake detection.
importance: 3
category: earlier
related_publications: true
---

Two complementary approaches to detecting synthetic faces, designed for the deployment problem rather than the leaderboard problem.

**Pair-wise self-consistency learning** {% cite zhao2021selfconsistency zhao2020learning %} (ICCV 2021 oral) trains a model to spot the source-feature inconsistency that GenAI generators leave behind, paired with an inconsistency image generator that synthesizes richly annotated training data. The hypothesis worth testing: even when a generator's output is photorealistic to a human, the source features within the forged image preserve a fingerprint detectable by ConvNets.

**AuthGuard** {% cite shen2026authguard %} (WACV 2026) extends the same instinct with a language-guided expert encoder that reasons about logical and perceptual anomalies the way a person would, on top of the statistical artifacts. AUC gains of 6.15% on DFDC and 16.68% on DF40, with a 24.69% improvement on the DDVQA reasoning benchmark.

These ideas shaped the omni-modal trust work and the production model-diagnosis program that addresses the failure modes uncovered by deepfake detection at production scale.
