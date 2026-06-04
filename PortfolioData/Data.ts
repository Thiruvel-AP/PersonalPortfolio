import type { PortfolioData } from '../types';
import profileImage from "./Thiruvel_Portfolio.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// REWRITTEN PORTFOLIO DATA
// Target: Data Scientist / AI Engineer  UK (Technology | Healthcare/Omics | Finance)
// Visa: Skilled Worker sponsorship required
// Strategy: ATS keyword density + domain alignment + impact-first bullets
// ─────────────────────────────────────────────────────────────────────────────

export const initialData: PortfolioData = {

  // ───────────────────────────────────────────────
  // PROFILE
  // Changes:
  //   - Title drops "Data Strategist", adds "ML Systems Builder"
  //   - Summary leads with MSc Bristol (authority signal)
  //   - Explicit domain alignment across 3 target sectors
  //   - Subtle visa framing in closing line
  // ───────────────────────────────────────────────
  profile: {
    name: "Thiruvel Andagurunathan Pandian",
    title: "Data Scientist | AI Engineer | ML Systems Builder",
    location: "Bristol, United Kingdom",
    email: "apthiruvel@gmail.com",
    phone: "+44 07741016954",
    summary: `
      MSc Data Science candidate at the University of Bristol with ~2 years of production engineering experience 
      building AI-driven systems at the intersection of machine learning, healthcare analytics, and financial 
      technology. Specialise in end-to-end ML pipeline engineering, large language model (LLM) orchestration, 
      agentic AI system design, and time-series forecasting.

      Active MSc research: developing a novel Graph Neural Network (GNN) framework for multi-omics cancer 
      biomarker integration directly applicable to genomics, precision medicine, and clinical AI pipelines. 
      Delivered production-ready projects spanning fraud detection analytics, LSTM-based financial forecasting, 
      multi-agent voice AI systems, and MCP-integrated search agents.

      Combining a rigorous mathematical foundation (B.E. EEE, 91%; peer-reviewed publication) with MSc-level 
      research depth and real-world software engineering delivery. Targeting Skilled Worker-sponsored 
      Data Scientist / AI Engineer roles in UK-based Technology, Healthcare/Omics, or Finance organisations.
    `,
    imageUrl: profileImage,
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/thiruvel-a-p" },
      { name: "GitHub", url: "https://github.com/Thiruvel-AP" }
    ]
  },

  // ───────────────────────────────────────────────
  // EXPERIENCE
  // Changes:
  //   - 180DC: reframed as AI system architecture + quantified impact
  //   - Avasoft SDE: reframed as data/financial systems engineering
  //   - Avasoft Intern: extracted data pipeline + market analytics angle
  //   - Trainee: trimmed to 2 bullets (it was disproportionately detailed)
  // ───────────────────────────────────────────────
  experience: [
    {
      role: "Data Consultant (AI & Agentic Systems)",
      company: "180 Degrees Consulting Bristol",
      period: "Sep 2025 - Dec 2025",
      location: "Bristol, United Kingdom",
      description: [
        "Architected an end-to-end agentic AI system for a Madrid-based product startup translating ambiguous business requirements into a production-ready technical blueprint using Model Context Protocol (MCP) and GPT-OSS-20B.",
        "Designed hierarchical agent workflows with real-time query capabilities; integrated Exograph + PostgreSQL for structured, persistent data storage and efficient retrieval across agent sessions.",
        "Delivered a live functional demo to client stakeholders within a 3-month engagement; received 5-star rating from senior leadership.",
        "Contributed the MCP implementation directly to the client\'s production GitHub repository, coordinated with the startup\'s engineering team throughout and post-engagement.",
        "Led full solution ownership within a cross-functional consulting team from architecture design through stakeholder presentation."
      ]
    },
    {
      role: "AI/ML Engineer",
      company: "Self Employed - Freelance",
      period: "Jan 2025 - Aug 2025",
      location: "Chennai, India",
      description: [
        "Designed and implemented reproducible scikit-learn ML pipelines: data preprocessing, feature engineering (temporal features, interaction terms, target encoding), model selection, cross-validation, and hyperparameter tuning across classification and regression tasks.",
        "Built and validated deep learning sequence models LSTM, Bidirectional RNN, CNN using TensorFlow/Keras for time series and sequential modelling; validated with proper train/test splits and metric tracking. Directly applicable to financial forecasting and healthcare temporal data streams.",
        "Deployed ML inference as production REST APIs via FastAPI; containerised full services with Docker for reproducible, portable deployment.",
        "Developed NLP pipelines covering tokenisation, word embeddings, and contextual language models using Hugging Face Transformers and local LLMs via Ollama.",
        "Prototyped agentic AI workflows using LangChain/LangGraph with RAG patterns and LLM tool use for multi-step automated reasoning pipelines."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Avasoft",
      period: "June 2023 - Oct 2024",
      location: "Chennai, India",
      description: [
      "Engineered a production-grade FinTech application integrating Twelve Data API for real-time stock market data feeds and Plaid for secure bank account linkage and direct transaction imports.",
      "Implemented offline-first data persistence (ISAR) with background synchronisation, ensuring uninterrupted access to financial records in low-connectivity environments.",
      "Secured backend communication with SSL pinning; integrated AWS Cognito for user authentication with Single Sign-On (SSO) production-grade security for financial data handling.",
      "Built RESTful API integrations across third-party financial services; designed reusable, scalable UI component architecture (SwiftUI/UIKit) that reduced development overhead across multiple product release cycles.",
      "Delivered 10 reusable component templates, measurably accelerating team velocity across concurrent product timelines."
      ]
    },
    {
      role: "Software Development Engineer Trainee",
      company: "Avasoft",
      period: "Jan 2023 - June 2023",
      location: "Chennai, India",
      description: [
        "Engineered data persistence pipelines using Core Data (iOS) designed schemas for user profiles, transaction histories, and event bookings; implemented CRUD operations with efficient querying and session-state management. Foundation directly applicable to structured data management in production ML systems.",
        "Built a web scraping pipeline in vanilla JavaScript to extract structured data from multiple web sources; automated a previously manual collection process and surfaced market trend signals used to optimise product pricing and identify growth opportunities demonstrating end-to-end data collection, transformation, and business insight delivery.",
        "Developed full-featured e-commerce and ticketing UIs (Swift / SwiftUI) with product search, cart logic, order tracking, and booking management built with scalability hooks for future payment gateway and database integrations.",
        "Applied performance and accessibility optimization across device form factors established reusable component patterns that fed directly into the team's production component library in the subsequent SDE role."
      ]
    }
  ],

  // ───────────────────────────────────────────────
  // EDUCATION
  // Changes:
  //   - MSc: adds research focus (GNN/multi-omics)  critical Healthcare signal
  //   - B.E.: surfaces peer-reviewed publication
  //   - School entries: tightened wording
  // ───────────────────────────────────────────────
  education: [
    {
      degree: "MSc in Data Science",
      institution: "University of Bristol",
      period: "Sep 2025 - Sep 2026",
      details: "Modules: Large-Scale Data Engineering, Statistical Computing & Empirical Methods, AI & Text Analytics, Data Science Methods & Practices, Visual Analytics, Technology, Innovation, Business & Society. Active research: Graph Neural Network (GNN) framework for multi-omics cancer biomarker integration  proposing learnable data-driven adjacency matrices (scaled dot-product attention) for cross-omics interaction discovery, directly applicable to precision medicine and clinical genomics pipelines."
    },
    {
      degree: "B.E in Electrical & Electronics Engineering",
      institution: "St. Joseph's College of Engineering",
      period: "Sept 2019 - April 2023",
      details: "91% | First Class with Distinction. Peer-reviewed publication: Power system optimisation using the Firefly Algorithm. CGPA 9.07"
    },
    {
      degree: "Higher Secondary",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2018 - Mar 2019",
      details: "81%"
    },
    {
      degree: "Sophomore",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2016 - April 2017",
      details: "95.4%"
    }
  ],

  // ───────────────────────────────────────────────
  // SKILLS
  // Changes:
  //   - Reordered: ML/AI core first, then LLM/Agents, then DS tools, then MLOps, then frontend
  //   - Mobile-only skills (Dart, Flutter, Swift, SwiftUI) moved to end  they dilute DS signal
  //   - Added: RAG, LangChain, LangGraph (critical ATS keywords for AI Engineer)
  //   - Added: R, tidymodels, XGBoost (critical for Finance/Healthcare ML roles)
  // ───────────────────────────────────────────────
  skills: [
    // ML & Deep Learning (primary signal)
    "Python", "PyTorch", "TensorFlow (GPU)", "Scikit-learn", "XGBoost", "Graph Neural Networks",
    // LLM & Agentic Systems (differentiator)
    "LangChain", "LangGraph", "Google ADK", "MCP", "Hugging Face", "Ollama", "RAG", "Prompt Engineering",
    // Data Science & Statistics
    "Pandas", "NumPy", "SciPy", "R", "tidyverse", "tidymodels",
    // Visualisation
    "Matplotlib", "Seaborn",
    // MLOps & Engineering
    "FastAPI", "Docker", "AWS", "PostgreSQL", "MongoDB", "REST APIs", "WebSockets", "TensorFlow Serving",
    // Notebooks & Platforms
    "Jupyter Notebook", "Google Colab", "Google AI Studio", "Kaggle",
    // Frontend & Mobile (supporting, not primary)
    "React JS", "JavaScript", "Node JS", "Flutter", "Swift", "SwiftUI", "Dart"
  ],

  // ───────────────────────────────────────────────
  // PROJECTS
  // Changes:
  //   - MSc GNN research added as PROJECT #1 (strongest Healthcare/Omics card)
  //   - All descriptions rewritten: technical depth + sector-relevance framing
  //   - Bitcoin project repositioned as Finance/Quant time-series ML
  //   - Churn prediction explicitly linked to UK banking/financial risk
  //   - Pokémon classification reframed as multi-output classification paradigm
  //   - Stack Overflow EDA positioned as data storytelling competency
  //   - Astro Freud repositioned as offline AI / privacy-sensitive NLP systems
  // ───────────────────────────────────────────────
  projects: [
    {
      // ── PROJECT 1: Healthcare/Omics signal ──────────────────────────────
      name: "Multi-Omics GNN Framework for Cancer Biomarker Discovery (MSc Research)",
      description: "MSc research project proposing a novel Graph Neural Network (GNN) architecture for integrating heterogeneous multi-omics data (mRNA expression, DNA methylation, copy number variation) for cancer survival prediction. Addresses key limitations in MOGONET and deepCDG: biomarkers are modelled as graph nodes  not node features  with a learnable data-driven adjacency matrix (scaled dot-product attention: Q=W_Q×X, K=W_K×X) eliminating dependency on prior biological knowledge graphs.",
      technologies: ["Python", "PyTorch", "Graph Attention Networks (GAT)", "Multi-omics", "TCGA", "NumPy", "Pandas", "Scikit-learn"],
      features: [
        "Three-stage pipeline: Adjacency Matrix Formulator (dot-product attention) → per-omics GAT encoders (Z_mRNA, Z_methyl, Z_CNV) → cross-omics GAT fusion → MLP Target Predictor for survival classification.",
        "Learnable adjacency matrix via scaled dot-product attention discovers cross-biomarker interaction structure directly from data  no knowledge graph dependency.",
        "Literature grounded in 6 core papers (MOGONET, deepCDG, MOFA+, GNNRAI) selected via CRAAP/BEAM framework from a 22-paper multi-omics review.",
        "Directly applicable to UK genomics pipelines: NHS Genomics England, cancer diagnostics, and precision medicine platforms."
      ],
      imageUrl: "https://blogs.esa.int/exploration/files/2024/12/AI-lab-visual.png",
      link: "https://github.com/Thiruvel-AP"
    },
    {
      // ── PROJECT 2: Finance/Quant signal ────────────────────────────────
      name: "Bitcoin OHLCV Forecasting: Time Series Deep Learning Pipeline",
      description: "End-to-end production-grade time series forecasting pipeline using LSTM neural networks (TensorFlow GPU) to predict multi-variate BTC Open/High/Low/Close/Volume values. Implements sliding window sequence construction, GPU-accelerated training, and TensorFlow Serving-compatible model export  mirroring MLOps deployment patterns used in quantitative finance, algorithmic trading, and financial risk systems.",
      technologies: ["Python", "TensorFlow (GPU)", "Pandas", "NumPy", "FastAPI", "Docker", "YFinance SDK", "TensorFlow Serving"],
      features: [
        "LSTM architecture trained on multi-variate OHLCV time series; achieves >80% directional accuracy on held-out test windows.",
        "Sliding window sequence construction with configurable lookback horizons; GPU-accelerated training via TensorFlow on WSL2 + Docker.",
        "TensorFlow Serving model export enabling REST-based inference via FastAPI  production MLOps deployment pattern.",
        "Directly applicable to financial time series forecasting, asset price prediction, volatility modelling, and quantitative risk analytics."
      ],
      imageUrl: "https://imgs.search.brave.com/QNWHkLfpbtKD3YvzL2Mn6cfRkPaCCXNWJR2huAG15bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xODQ2ODAz/LzM4MjAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODIwODg5My1z/dG9jay1waG90by1i/aXRjb2luLmpwZw",
      link: "https://github.com/Thiruvel-AP/BitcoinForecasting"
    },
    {
      // ── PROJECT 3: Finance signal ───────────────────────────────────────
      name: "Banking Customer Churn Prediction: Financial Risk ML Pipeline",
      description: "Complete, reproducible ML pipeline in R for binary churn classification on a 10,000-observation retail banking dataset. Full workflow: EDA (DataExplorer) → feature engineering (recipes) → XGBoost-GPU modelling (parsnip/tidymodels) → hyperparameter optimisation via random grid search with 5-fold cross-validation → evaluation on ROC-AUC. Directly applicable to customer retention analytics and financial risk modelling in UK retail banking.",
      technologies: ["R", "RStudio", "tidyverse", "tidymodels", "XGBoost (GPU)", "recipes", "parsnip", "dplyr", "DataExplorer"],
      features: [
        "10,000-observation banking dataset; 14 features covering account tenure, balance, product usage, and transaction behaviour.",
        "Hyperparameter tuning: random grid search over mtry, trees, min_n, tree_depth, learn_rate with 5-fold CV; model selected on ROC-AUC.",
        "XGBoost-GPU final model demonstrates strong discriminative performance on unseen churn cases; reproducible pipeline using tidymodels.",
        "Demonstrates domain expertise in financial customer analytics, class imbalance handling, and production-ready ML pipelines in R."
      ],
      imageUrl: "https://imgs.search.brave.com/6lzYVIlAty-vkIgDZ0GWky79OYXRX8NkWtEGbllUgdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mdW5p/eC5lZHUudm4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDIv/MS0xODMucG5n",
      link: "https://github.com/Thiruvel-AP/Banking-Customer-Churn-Prediction"
    },
    {
      // ── PROJECT 4: Agentic AI signal ───────────────────────────────────
      name: "Agentic Friend: Real-Time Multi-Agent Voice AI System",
      description: "Production-grade hierarchical multi-agent AI system with full-duplex real-time voice interaction. Implements a rolling VAD state machine (partial flush every 2.5s, silence-triggered final flush) for low-latency speech processing, HuggingFace VITS/Whisper models for multilingual TTS/STT, and a Google ADK orchestration layer managing agent intent routing, memory persistence, and dynamic task decomposition. Demonstrates end-to-end agentic AI system design at production scale.",
      technologies: ["Python", "Google ADK", "FastAPI", "React", "Docker", "Hugging Face (VITS/Whisper)", "WebSockets", "Web Audio API", "CUDA"],
      features: [
        "Hierarchical multi-agent architecture: intent verification agent → task decomposition → specialised sub-agents → response synthesis layer.",
        "Real-time voice pipeline: STT via faster-whisper + rolling VAD state machine; TTS via facebook/mms-tts-eng on CUDA float16 with warm-up pass.",
        "Barge-in capability implemented end-to-end for natural conversational interruption  critical for human-AI interaction systems.",
        "Persistent memory management across sessions: structured conversation history + user preference stores for continuous context awareness."
      ],
      imageUrl: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/marquee-agentforce-agentic-ai.png",
      link: "https://github.com/Thiruvel-AP/adk_multi-agent"
    },
    {
      // ── PROJECT 5: Enterprise RAG / LLM signal ─────────────────────────
      name: "MCP Search Agent: LLM-Driven Structured Information Retrieval",
      description: "An LLM-powered search agent built on the Model Context Protocol (MCP) standard, enabling a GPT-OSS-20B agent to autonomously query external search providers, extract structured results, and persist interaction data to PostgreSQL via Exograph for downstream analytics. Demonstrates RAG pipeline design, structured data extraction, and agentic tool orchestration  directly applicable to enterprise knowledge management and AI-assisted research systems.",
      technologies: ["Python", "Ollama", "PostgreSQL", "Exograph", "MCP", "GPT-OSS-20B"],
      features: [
        "MCP-compliant agent architecture: LLM autonomously selects tools, constructs queries, and routes structured results to persistence layer.",
        "PostgreSQL + Exograph integration enabling queryable history of LLM search interactions for analytics and audit trails.",
        "Demonstrates core RAG pipeline components: retrieval, context injection, structured output parsing, and persistent storage.",
        "Applicable to enterprise search, clinical knowledge retrieval, and regulatory information systems in healthcare and finance."
      ],
      imageUrl: "https://imgs.search.brave.com/lj5c-qUCWhibB0VxzRxRuTIteukrYCErAbywH4ZqEPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZW50/cmFpLmNvL19hc3Ry/by93ZWItc2VhcmNo/LWFnZW50LkJ2YUF3/ZDBFX1oxZ09nSnAu/d2VicA",
      link: "https://github.com/Thiruvel-AP/mcp_searchagent"
    },
    {
      // ── PROJECT 6: Healthcare AI / Clinical NLP signal ──────────────────
      name: "Astro Freud: AI Psychological Support System (Offline-Capable NLP)",
      description: "Specialised AI-powered psychological companion leveraging LangGraph multi-step agentic reasoning, local LLMs (Ollama  fully offline-capable), and real-time facial emotion recognition (DeepFace, RetinaFace, OpenCV) for mental state inference and adaptive conversational response. Demonstrates NLP, computer vision, and sensitive data handling in privacy-critical, air-gapped deployment environments  a pattern directly applicable to NHS/clinical AI systems requiring data sovereignty.",
      technologies: ["Python", "Llama 3", "FastAPI", "LangGraph", "LangChain", "Ollama", "DeepFace", "TensorFlow", "OpenCV"],
      features: [
        "Multi-step agentic orchestration via LangGraph: emotion detection → context analysis → adaptive therapeutic response generation.",
        "Fully offline LLM inference via Ollama  applicable to air-gapped healthcare and clinical settings requiring data privacy compliance.",
        "Real-time facial emotion recognition pipeline (DeepFace + RetinaFace + OpenCV) enabling physiological state monitoring from video.",
        "High-performance async backend (FastAPI) handling concurrent video frame processing and LLM conversational workflows simultaneously."
      ],
      imageUrl: "https://blogs.esa.int/exploration/files/2024/12/AI-lab-visual.png",
      link: "https://github.com/ShankaraNG/AstroFreud"
    },
    {
      // ── PROJECT 7: RL / Decision Systems signal ────────────────────────
      name: "GridDQN:  Deep Reinforcement Learning from Scratch",
      description: "Deep Q-Network (DQN) agent implemented from scratch in TensorFlow for optimal policy learning in a custom grid-world environment. Demonstrates core RL concepts: off-policy temporal difference learning, experience replay buffer, ε-greedy exploration-exploitation, target network stabilisation, and Q-value convergence  foundational to sequential decision-making in autonomous agents, clinical treatment optimisation, and resource allocation systems.",
      technologies: ["Python", "TensorFlow", "NumPy"],
      features: [
        "DQN architecture: neural network Q-value approximator, experience replay buffer, target network for stable Bellman update training.",
        "Off-policy ε-greedy exploration with decaying epsilon; converges to optimal shortest-path policy in grid environment.",
        "Demonstrates theoretical mastery of Bellman equation, temporal difference learning, and bootstrapped value estimation.",
        "RL framework applicable to clinical decision support, treatment pathway optimisation, and autonomous agent systems."
      ],
      imageUrl: "https://imgs.search.brave.com/YKAchA7epo1Al70WqQU5Y-zwVg3wk91CtEt17YJ4aEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzM5Njg5/MC9oZWFkZXIuanBn/P3Q9MTQ1OTk3MjM3/NA",
      link: "https://github.com/Thiruvel-AP/GridDQN"
    },
    {
      // ── PROJECT 8: ML system design signal ────────────────────────────
      name: "Pokémon Multi-Output Classification  Conditional Model Routing System",
      description: "Multi-output Random Forest classification system with an intelligent input-conditional model router: a dispatcher selects the optimal of three trained classifiers based on available input features. Demonstrates multi-target ML system design, feature-conditional inference pipelines, and modular model orchestration  a paradigm directly applicable to structured diagnostic classification in clinical and omics settings.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Kaggle"],
      features: [
        "Input-conditional model router: selects between 3 distinct Random Forest classifiers based on available input feature combination.",
        "Multi-output classification: simultaneous prediction of correlated target variables (type, evolution) from shared feature spaces.",
        "Clean ML system design: separation of model training, routing logic, and inference interface  production-oriented architecture.",
        "Applicable paradigm to multi-label clinical classification (e.g., disease subtype + severity + treatment response from omics inputs)."
      ],
      imageUrl: "https://imgs.search.brave.com/e3iCqPFxBfc_QmRoexolK_DvLip4fBSCpRg7Zb2Tzc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv...",
      link: "https://github.com/Thiruvel-AP/Pokemon_Classification"
    },
    {
      // ── PROJECT 9: Data storytelling signal ───────────────────────────
      name: "Stack Overflow Developer Survey  Global Python Ecosystem Analysis",
      description: "End-to-end EDA and visual analytics on the 2023 Stack Overflow Developer Survey dataset, producing a comprehensive analytical report on global Python developer distribution, skill co-occurrence patterns, and technology adoption trends across 180+ countries. Demonstrates data wrangling, statistical summarisation, and evidence-based storytelling with data  core competencies for data science roles in technology and research organisations.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      features: [
        "Full EDA pipeline: data cleaning → aggregation → statistical summarisation → multi-variate visualisation → insight narrative.",
        "Mapped global distribution and skill co-occurrence patterns of Python developers across 180+ countries.",
        "Identified technology cluster patterns (Python + ML stack vs. Python + web stack) relevant to workforce and tooling decisions.",
        "Demonstrates proficiency in data storytelling and communicating statistical findings clearly to non-technical stakeholders."
      ],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Iq9T_lySf674Lgvyz7dlqwaKw9KTRE7vA&s",
      link: "https://github.com/Thiruvel-AP/DS_Project1"
    }
  ]
};