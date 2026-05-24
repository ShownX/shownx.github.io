---
layout: page
title: Billion-Scale Face Recognition
description: Pose- and occlusion-invariant face recognition behind production identity at scale.
importance: 4
category: earlier
related_publications: true
---

A line of work on face recognition that stays robust under the conditions that break naive 2D pipelines: large pose variation, partial occlusion, expression, and dataset shift between training and deployment. The thread runs through my Ph.D. and shipped components for production identity systems handling billion-level annual checks.

The 3D-aided 2D face recognition system **UR2D** {% cite xu2017evaluation xu2017ur2d %} uses a 3D model registered against the 2D image to handle pose variation up to 90°. Joint head pose estimation and face alignment {% cite xu2017joint %} share global and local CNN features, which we extended into face reconstruction with proper feature aggregation {% cite xu2019feature %}. Under occlusions specifically, OREO {% cite xu2020generalization %} improved generalization by 10.17% rank-1 accuracy in single-image settings. The **FaRE** package {% cite xu2019fare %} packaged consistent open-source evaluation across these benchmarks.

The thread connecting all of it: robustness, not raw accuracy, is the binding constraint of deployed face recognition. That lesson carried into the production identity work and the lifelong-learning research that followed.
