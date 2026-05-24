---
layout: about
title: About
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

**My research argues that lifelong learning and adversarial post-training have to be co-designed, not treated as separate problems, that is what it takes to keep foundation models useful and aligned in production.** Seven years of industry experience and over fifteen years of research across multimodal AI, agentic systems, and alignment have led me here. I build along four threads, and the loop between them is where I think industry science earns its keep:

- **Alignment, Trust, and Privacy.** I am leading super co-alignment for multi-model foundational models in [Amazon Bedrock](https://aws.amazon.com/bedrock/): multi-modal red-teaming, distributed LLM-as-judge evaluation, adversarial post-training with preference optimization, that reduces attack success rate by an order of magnitude across text and vision while preserving task quality. I led [Amazon Rekognition](https://aws.amazon.com/rekognition/) digital identity verification against presentation attacks, deepfakes, and injection attacks at billion-level annual checks. And I pioneered GPU-accelerated Fully Homomorphic Encryption with ~45× speedup at zero accuracy loss for regulated markets.

- **Agentic AI.** I built a self-evolving multi-agent system for production ML workflows (Triage, Red Team, Model Patch & Handoff) that runs the threat-to-patch loop autonomously and cuts model launch cadence by ~75%. The underlying multi-agent harness (isolated sub-agent contexts, Kanban-style coordination, skill-based knowledge injection, independent verification gating) outperforms single-session agents at ~6× lower cost and runs 200+ autonomous experiments per sprint. A Co-Scientist agent built on the same harness turns 1–2 weeks of literature review into 1–2 days and quarter-long research cycles into about a month.

- **Lifelong learning.** I developed multiple continual-learning algorithms in the more natural continuous setting for VLMs and LLMs that detect semantic overlap across tasks and consolidate redundant experts via context modeling and on-policy self-distillation, beating the strongest baselines by +7–15 points across disjoint and overlapping benchmarks while reducing deployed adapters up to 3×. I created the first VLM continual-learning benchmark with controlled inter-task overlap.

- **Efficient Post-Training & Deployment.** I built a hybrid VLM that replaces 25% of attention with linear-time recurrent (GKA) layers for constant-memory, constant-latency inference on long-context agentic workloads, using progressive distillation from a dense teacher and fine-tuning on vision-language and tool-calling tasks; the result is 1.3–1.5× inference speedup at long contexts with near-parity on VL benchmarks. For analog in-memory computing hardware (orders-of-magnitude inference energy efficiency), I identified an agentic cliff where structured outputs fail ~2× faster than general knowledge under weight noise, then designed a staged curriculum that preserves performance within 2.5 points through incremental hardware non-idealities and a reverse-linear noise schedule matching clean-training loss.

My questions come from production but do not stay there. The systems we deploy today expose failure modes that won't be solved by today's methods, so I work on the next ones now. How do you update a deployed multi-modal model to keep up with an adapting attacker without forgetting what it already knew? How do you make alignment a continuous loop rather than a one-shot post-training step? How much of that loop can a multi-agent system run autonomously, and what does the loop look like before the threat is named? Each system I ship surfaces a failure mode that becomes the next research direction. Each piece of research is aimed at the problem the next system will face, not the last one.

Before Amazon I earned my Ph.D. at the [University of Houston](https://www.uh.edu/) with Professor [Ioannis A. Kakadiaris](https://www.uh.edu/cbl/people/about-director.php) (2014–2019), working on face recognition, 3D reconstruction, and adversarial robustness, problems where robustness, not raw accuracy, was always the binding constraint. I have published 30+ papers at CVPR, ICCV, ECCV, and NeurIPS ([1,600+ citations, h-index 10](https://scholar.google.com/citations?user=Khfy-80AAAAJ), 2 orals, 1 best paper), gave a keynote at the 5th Chalearn Face Anti-Spoofing Workshop @ CVPR 2024, hold 5+ issued patents with 5+ more in review, and review for the top CV and ML venues.

**Prospective interns:** if you are a Ph.D. student interested in agentic systems, alignment, or lifelong learning of foundation models, email me your CV and a short research statement.
