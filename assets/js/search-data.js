// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Systems I have led, the ideas they embody, and the open questions I am working on now.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "For the most up-to-date list, see Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-paper-sharpness-aware-optimization-for-real-world-adversarial-attacks-accepted-at-advml-cvpr-2024",
          title: 'Paper Sharpness-Aware Optimization for Real-World Adversarial Attacks accepted at AdvML @ CVPR 2024....',
          description: "",
          section: "News",},{id: "news-invited-keynote-at-the-5th-chalearn-face-anti-spoofing-workshop-and-challenge-cvpr-2024",
          title: 'Invited keynote at the 5th Chalearn Face Anti-Spoofing Workshop and Challenge @ CVPR...',
          description: "",
          section: "News",},{id: "news-patent-granted-evaluating-biometric-authorization-systems-with-synthesized-images",
          title: 'Patent granted: Evaluating biometric authorization systems with synthesized images.',
          description: "",
          section: "News",},{id: "news-three-papers-accepted-at-cvpr-2025-model-diagnosis-and-correction-optimal-transport-guided-source-free-adaptation-and-ground-v",
          title: 'Three papers accepted at CVPR 2025 — Model Diagnosis and Correction, Optimal Transport-Guided...',
          description: "",
          section: "News",},{id: "news-two-patents-granted-on-digital-identity-and-trust-systems-liveness-detection-based-on-motion-face-and-context-cues-and-liveness-detection-based-on-gesture-validation-facial-expression-analysis-and-concurrency-validation",
          title: 'Two patents granted on digital identity and trust systems: Liveness Detection Based on...',
          description: "",
          section: "News",},{id: "news-paper-salient-concept-aware-generative-data-augmentation-accepted-to-neurips-2025",
          title: 'Paper Salient Concept-Aware Generative Data Augmentation accepted to NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-paper-authguard-generalizable-deepfake-detection-via-language-guidance-accepted-at-wacv-2026",
          title: 'Paper AuthGuard: Generalizable Deepfake Detection via Language Guidance accepted at WACV 2026.',
          description: "",
          section: "News",},{id: "news-paper-decoupling-vision-and-language-codebook-anchored-visual-adaptation-accepted-at-cvpr-2026",
          title: 'Paper Decoupling Vision and Language: Codebook Anchored Visual Adaptation accepted at CVPR 2026....',
          description: "",
          section: "News",},{id: "projects-omni-modal-trust-amp-verification",
          title: 'Omni-Modal Trust &amp;amp; Verification',
          description: "Detecting tampered media across image, video, and audio with explainable reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_omni_modal_trust/";
            },},{id: "projects-billion-scale-face-recognition",
          title: 'Billion-Scale Face Recognition',
          description: "Pose- and occlusion-invariant face recognition behind production identity at scale.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_face_recognition/";
            },},{id: "projects-liveness-detection",
          title: 'Liveness Detection',
          description: "Production face liveness with temporal consistency, behind billion-scale identity checks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_liveness_detection/";
            },},{id: "projects-deepfake-detection",
          title: 'Deepfake Detection',
          description: "Self-consistency and language guidance for generalizable deepfake detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_deepfake_detection/";
            },},{id: "projects-self-evolving-agent",
          title: 'Self-Evolving Agent',
          description: "Hierarchical multi-agent system that runs the threat-to-patch loop autonomously.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_self_evolving_agent/";
            },},{id: "projects-multi-agent-research-harness",
          title: 'Multi-Agent Research Harness',
          description: "Coordination layer for concurrent autonomous agents working on the same codebase.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_multi_agent_harness/";
            },},{id: "projects-co-scientist",
          title: 'Co-Scientist',
          description: "AI agent that drives autonomous research workflows end-to-end.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_co_scientist/";
            },},{id: "projects-super-co-alignment",
          title: 'Super Co-Alignment',
          description: "End-to-end alignment for multi-modal foundation models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_super_alignment/";
            },},{id: "projects-digital-identity-defense",
          title: 'Digital Identity Defense',
          description: "Tech lead for Amazon Rekognition digital identity at billion-level annual scale.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_digital_identity/";
            },},{id: "projects-gpu-accelerated-fhe-inference",
          title: 'GPU-Accelerated FHE Inference',
          description: "Privacy-preserving inference and similarity search at production speed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_fhe_inference/";
            },},{id: "projects-continual-learning-for-fms",
          title: 'Continual Learning for FMs',
          description: "Continual learning that drops the disjoint-task assumption.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_continual_learning/";
            },},{id: "projects-hybrid-attention-recurrent-fm",
          title: 'Hybrid Attention/Recurrent FM',
          description: "Linear-time recurrent layers (GKA) for long-context agentic workloads.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_hybrid_vlm/";
            },},{id: "projects-hardware-aware-distillation",
          title: 'Hardware-Aware Distillation',
          description: "Training methods for analog in-memory computing inference.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_hardware_distillation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%6C%6C%73%66%6F%72%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Khfy-80AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ShownX", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shownx", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
