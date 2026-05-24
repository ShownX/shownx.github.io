---
layout: page
title: Omni-Modal Trust & Verification
description: Detecting tampered media across image, video, and audio with explainable reasoning.
importance: 1
category: earlier
related_publications: true
---

Omni-modal VLMs trained to verify media across image, video, and audio by detecting semantic inconsistencies, temporal artifacts, and audio-visual mismatches. The model outputs chain-of-thought reasoning to make decisions explainable, and generalizes to attacks unseen at training time.

The thread connecting this to the rest of my work: trust models decay because attackers move. The right architectural answer is models that reason about *why* a piece of content is or isn't trustworthy, so updates shift the reasoning rather than retrain a black-box classifier.

The closest published work is AuthGuard {% cite shen2026authguard %}, which uses language-guided commonsense reasoning for deepfake detection (AUC gains of 6.15% on DFDC and 16.68% on DF40). Earlier deepfake work used self-consistency learning {% cite zhao2021selfconsistency %} as the basis for source-feature inconsistency detection. The model-diagnosis-and-correction framework {% cite chen2025model %} closes the loop on this thread: when the model errs, an automated system localizes the cause via attribute editing and synthesizes counterfactual training data to fix it.
