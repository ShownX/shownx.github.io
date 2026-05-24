---
layout: page
title: Liveness Detection
description: Production face liveness with temporal consistency, behind billion-scale identity checks.
importance: 2
category: earlier
related_publications: true
---

Frame-based liveness detectors at the time of this work {% cite xu2021liveness %} suffered from prediction inconsistency across time: a single frame might flip between live and spoof, producing flicker that broke the downstream face recognition system. The fix combined a temporal smoothing model with an adapter that turns short-clip predictions into a stable per-session decision.

This paper received the **Best Paper Award** at the 5th ChaLearn Face Anti-Spoofing Workshop @ ICCV 2021, and the methods were folded into Amazon Rekognition's online liveness detection. The system has since handled billions of annual identity checks against presentation attacks, and its constraints (legitimate users must not be flagged while attackers shift from physical spoofs to GenAI deepfakes) are exactly what motivated the [continuous lifelong-learning research direction](/projects/7_continual_learning/) that I work on now.

Several patents grew out of this program: liveness from motion, face, and context cues {% cite xu2025liveness %}, gesture/facial-expression/concurrency validation {% cite zhang2025liveness %}, and synthetic-image evaluation of biometric authorization {% cite xu2024evaluating %}.

The lifelong-update problem this program raises also motivated newer research on source-free adaptation {% cite li2025optimal %}: an optimal-transport-guided adaptor lets a deployed anti-spoofing model adapt at the client side at test time, with only a small sample of target data and without touching the base model parameters or training set.
