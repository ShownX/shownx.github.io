---
layout: about
title: about
permalink: /
subtitle: <strong>Tech Lead, Senior Applied Scientist</strong> · <a href="https://www.amazon.science/">Amazon AGI</a> · New York, NY

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info:

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 6

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a Tech Lead and Senior Applied Scientist at [Amazon AGI](https://www.amazon.science/), with 7+ years of industry experience and 15+ years of research experience in multimodal AI, agentic systems, and alignment. **My current research argues that lifelong learning and adversarial post-training have to be co-designed, not treated as separate problems — that is what it takes to keep foundation models useful and aligned in production.**

I build along three threads, and the loop between them is where I think industry science earns its keep:

- **Agentic systems.** I built a hierarchical, self-evolving agent — Triage, Red Team, and Model Patch & Handoff — that runs the threat-to-patch loop autonomously, compressing model launch cadence by ~75%. I designed the underlying multi-agent harness (isolated contexts, Kanban-style task coordination, skill injection, verification gating) that runs 200+ autonomous experiments per sprint at ~6× lower cost than single-session agents, and a Co-Scientist agent that compresses literature surveys from 1–2 weeks to 1–2 days and full research iteration from ~3 months to ~1 month.

- **Alignment, trust, and privacy.** I built an end-to-end alignment pipeline — multi-modal red-teaming, distributed LLM-as-judge evaluation, adversarial post-training with preference optimization — that reduces attack success rate by an order of magnitude across text and vision while preserving task quality. I led [Amazon Rekognition](https://aws.amazon.com/rekognition/) digital identity verification against presentation attacks, deepfakes, and injection attacks at billion-level annual checks. And I pioneered GPU-accelerated Fully Homomorphic Encryption with ~45× speedup at zero accuracy loss for regulated markets.

- **Post-training and lifelong learning.** I developed continual-learning frameworks for VLMs and LLMs that detect semantic overlap across tasks and consolidate redundant experts via on-policy self-distillation — beating the strongest baselines by +7–15 points across disjoint and overlapping benchmarks while reducing deployed adapters up to 3×. I built a hybrid VLM that replaces 25% of attention with linear-time recurrent layers (GKA) for 1.3–1.5× inference speedup at long contexts, and developed staged-curriculum and noise-schedule techniques for deploying LLMs on analog in-memory computing.

The questions I ask come from production: how do you update a deployed multi-modal model to keep up with an adapting attacker without forgetting what it already knew? How do you make alignment a continuous loop instead of a one-shot post-training step? How much of that loop can a multi-agent system run autonomously? Each system I ship surfaces failure modes that become the next research direction. Each piece of research feeds the next iteration of the system.

Before Amazon I earned my Ph.D. at the [University of Houston](https://www.uh.edu/) with Professor [Ioannis A. Kakadiaris](https://www.uh.edu/cbl/people/about-director.php) (2014–2019), working on face recognition, 3D reconstruction, and adversarial robustness — problems where robustness, not raw accuracy, was always the binding constraint. I have published 30+ papers at CVPR, ICCV, ECCV, and NeurIPS ([1,600+ citations, h-index 10](https://scholar.google.com/citations?user=Khfy-80AAAAJ), 2 orals, 1 best paper), gave a keynote at the 5th Chalearn Face Anti-Spoofing Workshop @ CVPR 2024, hold 5+ issued patents with 5+ more in review, and review for the top CV and ML venues.

**Prospective interns:** if you are a Ph.D. student interested in agentic systems, alignment, or lifelong learning of foundation models, email me your CV and a short research statement.
