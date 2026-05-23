---
layout: page
title: Self-Evolving Agent
description: Hierarchical multi-agent system that runs the threat-to-patch loop autonomously.
importance: 1
category: systems
---

A hierarchical, self-evolving agent system that runs the threat-to-patch loop autonomously across multiple Amazon AI services. Three top-level agents — Triage, Red Team, and Model Patch & Handoff — coordinate specialized subagents:

- **Triage** detects emerging threats from tickets and logs and routes them to the right defender.
- **Red Team** discovers and validates new attacks autonomously, building a continually refreshed adversarial dataset.
- **Model Patch & Handoff** applies continual fine-tuning, runs automated benchmarks, and gates the handoff to deployment.

The interesting part is the design pattern: separating threat discovery from defense generation lets each side improve without destabilizing the other. The system compresses launch cadence by **~75%** with limited human-in-the-loop oversight, turning what was a months-long model update cycle into weeks.

The lesson worth porting elsewhere: the bottleneck is rarely model quality — it is the speed at which the threat→fix→ship loop closes. Autonomy across that whole loop, not just one stage, is what compresses time.
