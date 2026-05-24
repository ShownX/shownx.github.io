---
layout: page
title: Digital Identity Defense
description: Tech lead for Amazon Rekognition digital identity at billion-level annual scale.
importance: 5
category: systems
related_publications: true
---

I am the tech lead for digital identity verification on [Amazon Rekognition](https://aws.amazon.com/rekognition/), defending billion-level annual identity checks against presentation attacks, deepfakes, and injection attacks. The program ships multiple model updates per year to track new threat vectors, and I designed the proactive challenge-response paradigm at its core.

The technical risk that shaped the program: keeping false-positive rates flat for legitimate users while attackers shift from physical spoofs to GenAI deepfakes, a continuous-distribution-shift problem. That problem is what motivated the [lifelong-learning research direction](/projects/7_continual_learning/). Production constraints become research questions.

Research artifacts: design principles for remote anti-spoofing systems {% cite xu2024principles %}. Production artifacts include patents on liveness from motion/face/context {% cite xu2025liveness %}, mobile device user authorization {% cite xu2025mobile %}, and gesture/expression/concurrency validation {% cite zhang2025liveness %}, with synthetic-image evaluation of biometric authorization {% cite xu2024evaluating %} as the testing methodology.
