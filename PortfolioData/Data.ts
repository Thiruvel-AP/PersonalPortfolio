import type { PortfolioData } from '../types';
import profileImage from "./Thiruvel_Portfolio.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA (updated 2026-10-03)
// Target: Data Scientist / AI Engineer, UK (Technology | Healthcare/Life Sciences | Finance)
// Rule for this file: every line must be something you can defend in an interview.
// Lines tagged "CONFIRM" carry a claim that could not be checked against your
// records. They are kept as you wrote them; confirm or delete each one.
// ─────────────────────────────────────────────────────────────────────────────


export const initialData: PortfolioData = {

  // ───────────────────────────────────────────────
  // PROFILE
  // ───────────────────────────────────────────────
  profile: {
    name: "Thiruvel Andagurunathan Pandian",
    title: "Data Scientist | AI Engineer | ML Systems Builder",
    location: "Bristol, United Kingdom",
    email: "apthiruvel@gmail.com",
    tagline: "I'm a Data Scientist who builds systems that turn complex data into real decisions.",
    status: "Open to data science roles across the UK.",
    about: [
      "I've completed my MSc in Data Science at the University of Bristol, and I have over a year of hands-on experience building and deploying machine learning and LLM systems.",
      "My work spans agentic AI and applied deep learning: tool-calling agents with LangChain, LangGraph, Google ADK and MCP, real-time voice pipelines, graph-based analysis of multi-omics data, and sequence models for temporal forecasting. I work across the stack, from PyTorch and TensorFlow to FastAPI, Docker, PostgreSQL and AWS, and I've contributed to LoRA fine-tuning of an open-weight LLM.",
      "I've gone deep in healthcare AI and financial data, and each domain has sharpened the toolkit further. I'm energised by unfamiliar problem spaces (new data, new modality, new constraint) and I'm looking for a role where I can keep pushing that depth into new territory."
    ],
    imageUrl: profileImage,
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/thiruvel-a-p" },
      { name: "GitHub", url: "https://github.com/Thiruvel-AP" }
    ]
  },

  // ───────────────────────────────────────────────
  // EXPERIENCE (newest first)
  // ───────────────────────────────────────────────
  experience: [
    {
      // CONFIRM: LinkedIn shows "Present"; your CV shows Sep 2026. Use whichever a reference check would confirm.
      role: "Data Scientist",
      company: "AstraZeneca · GeneTraceAI, University of Bristol",
      period: "May 2026 - Sep 2026",
      location: "Bristol, United Kingdom",
      description: [
        "Built a tool-calling LLM agent (LangChain, Claude Haiku 4.5 on AWS Bedrock) for a multi-omics cancer research platform, with three tools for gene alias resolution, scoring-methodology explanation and dataset provenance.",
        "Designed a deterministic hallucination-guard architecture and fail-safe data resolution: live Ensembl/HGNC APIs behind circuit breakers, with a local 19,213-gene parquet fallback.",
        "Deployed the agent as a Docker container on AWS Lambda (Lambda Web Adapter) with ECR image pipelines and IAM execution roles; ran AWS account governance (root-user isolation, IAM groups, least-privilege policies).",
        "Wrote a three-tier test framework (tool-level, API/integration, live agent; ~65 tests across 8 files) and used it to validate the migration from Groq to AWS Bedrock after a rate-limit evaluation.",
        "Surveyed 14 heterogeneous source datasets (gene expression, gene properties, nomenclature), owned the identity-spine datasets (sample_info, Cellosaurus, DepMap) and set metadata boundaries for downstream modelling.",
        "Integrated the agent into a React front end with real-time gene alias enrichment and an animated methodology sidebar."
      ]
    },
    {
      // CONFIRM: start month. Your CV says Sep 2025; other notes say Oct 2025. Match your 180DC certificate.
      role: "Data Consultant",
      company: "180 Degrees Consulting Bristol",
      period: "Sep 2025 - Dec 2025",
      location: "Bristol, United Kingdom",
      description: [
        "Proposed an MCP-based architecture for an AI-driven dashboard product for a Madrid-based start-up client, turning loosely defined requirements into a working design.",
        "Built the proof of concept in Python (FastMCP, Ollama gpt-oss:20b, Tavily, Exograph GraphQL, PostgreSQL, GitHub Actions CI) and presented it in a live stakeholder demo; the engagement received a 5-star commendation from senior leadership.",
        "The approved design shipped as a TypeScript/Node.js MCP server (MCP SDK) with OpenAI-based query generation over a Convex database and dashboards built in AWS QuickSight; contributed to the client's production repository, where it is in live day-to-day use."
      ]
    },
    {
      role: "AI/ML Engineer (Freelance)",
      company: "Self-employed",
      period: "Jan 2025 - Aug 2025",
      location: "Chennai, India",
      description: [
        "Built reproducible scikit-learn pipelines (preprocessing, feature engineering, cross-validation, hyperparameter tuning) for classification and regression tasks.",
        "Built LSTM, bidirectional RNN and CNN models in TensorFlow/Keras and deployed models as FastAPI REST services in Docker.",
        // CONFIRM: this RAG system is on file as yours, but not definitely from the freelance period.
        "Built a RAG and agentic retrieval system (Claude API, LangChain, ChromaDB) served through FastAPI on GCP Cloud Run.",
        "Built NLP and agentic workflows with Hugging Face Transformers, local LLMs via Ollama, and LangChain/LangGraph.",
        "Contributed to a team LoRA fine-tune of a Llama base model for a maths-focused task."
      ]
    },
    {
      // CONFIRM: dates. Your earlier portfolio said Jun 2023 - Oct 2024; your CVs and profile say Jul 2023 - Sep 2024.
      // Removed: the "offline-first persistence (ISAR)" bullet. ISAR is a Flutter/Dart database and conflicts with
      // the native SwiftUI/UIKit stack on file. Restore it only if you actually used it here.
      role: "Software Development Engineer",
      company: "Avasoft",
      period: "Jul 2023 - Sep 2024",
      location: "Chennai, India",
      description: [
        "Integrated Twelve Data (real-time stock market feeds) and Plaid (bank-account linkage, transaction imports) into an iOS FinTech app.",
        "Secured the app with SSL pinning and AWS Cognito sign-in with single sign-on (SSO) for financial data.",
        "Delivered 10 reusable SwiftUI/UIKit component templates that measurably accelerated team velocity across concurrent releases."
      ]
    },
    {
      role: "Software Development Engineer Trainee",
      company: "Avasoft",
      period: "Jan 2023 - Jun 2023",
      location: "Chennai, India",
      description: [
        "Designed Core Data schemas for user profiles, transaction histories and event bookings, with CRUD operations and session-state management.",
        "Built a JavaScript web-scraping pipeline that automated a manual data-collection process and surfaced market-trend signals used for pricing decisions.",
        "Built e-commerce and ticketing UIs in Swift/SwiftUI with product search, cart logic, order tracking and booking management."
      ]
    }
  ],

  // ───────────────────────────────────────────────
  // EDUCATION
  // ───────────────────────────────────────────────
  education: [
    {
      degree: "MSc Data Science",
      institution: "University of Bristol",
      period: "Sep 2025 - Sep 2026",
      details: "Completed. Modules: Large-Scale Data Engineering, Statistical Computing & Empirical Methods, AI & Text Analytics, Data Science Methods & Practices, Visual Analytics; Technology, Innovation, Business & Society. Dissertation: GeneTraceAI Cell Line Finder, an LLM agent for an AstraZeneca-affiliated multi-omics cancer research platform."
    },
    {
      // CONFIRM: the 91%, CGPA 9.07 and the publication are not in my records. Add the paper's venue or DOI if you keep it.
      degree: "B.E. Electrical & Electronics Engineering",
      institution: "St. Joseph's College of Engineering",
      period: "Sep 2019 - Apr 2023",
      details: "First Class with Distinction | 91% | CGPA 9.07. Peer-reviewed publication: power system optimisation using the Firefly Algorithm."
    },
    {
      degree: "Higher Secondary",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2018 - Mar 2019",
      details: "81%"
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2016 - Apr 2017",
      details: "95.4%"
    }
  ],

  // ───────────────────────────────────────────────
  // CERTIFICATIONS & AWARDS
  // ───────────────────────────────────────────────
  certifications: [
    { name: "Model Context Protocol: Introductory and Advanced certifications", issuer: "Anthropic", date: "Jun 2026" },
    { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services (AWS Academy)", date: "Nov 2025" },
    { name: "Data Science Consultant Certificate", issuer: "180 Degrees Consulting Bristol", date: "Dec 2025" },
    { name: "Bristol PLUS Award", issuer: "University of Bristol", date: "Mar 2026" }
  ],

  // ───────────────────────────────────────────────
  // SKILLS (most relevant first)
  // Removed: "Graph Neural Networks" (no GNN has been trained; the GAT work is a design only),
  // "Prompt Engineering" (now "Prompt design").
  // ───────────────────────────────────────────────
  skills: {
    "Languages & Machine Learning": [
      "Python", "SQL", "R", "TypeScript", "JavaScript", "Swift",
      "PyTorch", "TensorFlow / Keras", "Scikit-learn", "XGBoost", "Random Forest", "Isolation Forest", "LSTM", "RAPIDS cuML",
      "Hypothesis Testing", "ANOVA", "Bootstrap", "PCA", "Time-Series Forecasting"
    ],
    "LLMs & Agents": [
      "LangChain", "LangGraph", "Google ADK", "MCP (FastMCP, MCP SDK)", "AWS Bedrock", "Claude API", "OpenAI API",
      "Gemini (LiteLLM)", "Hugging Face Transformers", "Ollama", "RAG", "ChromaDB", "Tool Calling", "LoRA Fine-Tuning",
      "LLM Evaluation", "Prompt Design"
    ],
    "Data & Visualisation": [
      "Pandas", "NumPy", "SciPy", "NLTK", "networkx", "Leiden Clustering", "tidyverse", "tidymodels", "PostgreSQL",
      "Databricks / PySpark (coursework)",
      "Matplotlib", "Seaborn", "ggplot2", "Tableau", "Streamlit",
      "Jupyter Notebook", "Google Colab", "Google AI Studio", "Kaggle"
    ],
    "Cloud, MLOps & Engineering": [
      "AWS (Lambda, ECR, IAM, S3, SQS, DynamoDB, EC2)", "GCP Cloud Run", "Docker", "GitHub Actions", "pytest", "MLflow",
      "FastAPI", "REST APIs", "WebSockets", "TensorFlow Serving", "Git",
      "React", "Node.js", "SwiftUI / UIKit", "Core Data",
      // CONFIRM: not in my records. Keep only if you can talk through a real use.
      "MongoDB", "Flutter", "Dart"
    ]
  },

  // ───────────────────────────────────────────────
  // PROJECTS (strongest first)
  // ───────────────────────────────────────────────
  projects: [
    {
      slug: "genetraceai-cell-line-finder",
      name: "GeneTraceAI Cell Line Finder: LLM Agent for Cancer Research (AstraZeneca-affiliated)",
      description: "Tool-calling LLM agent for a multi-omics cancer research platform, built as an AstraZeneca-affiliated MSc dissertation. It answers researchers' questions about genes and cell lines through three tools, with deterministic guards so it cannot invent gene names or data sources, and runs serverless on AWS.",
      featured: true,
      caseStudy: {
        // Every field below is lifted from this project's description/features and the AstraZeneca experience entry.
        problem: "Researchers on a multi-omics cancer research platform need answers about genes and cell lines, and the agent must not invent gene names or data sources.",
        approach: "A tool-calling LLM agent (LangChain, Claude Haiku 4.5 on AWS Bedrock) with three tools: gene alias resolution, scoring-methodology explanation and dataset provenance, behind a deterministic hallucination-guard layer.",
        decisions: [
          "Fail-safe data resolution: live Ensembl/HGNC APIs with circuit breakers and a local 19,213-gene parquet fallback.",
          "Three-tier test suite (tool, API/integration, live agent; ~65 tests across 8 files) used to validate the move from Groq to AWS Bedrock after a rate-limit evaluation.",
          "Docker container on AWS Lambda (Lambda Web Adapter) with ECR image pipelines and least-privilege IAM."
        ],
        result: "Deployed serverless on AWS and integrated into a React front end with real-time gene alias enrichment and an animated methodology sidebar.",
        // improve: not written yet. Add a string here to show a "What I would improve" section.
        links: {}
        // CONFIRM: no public repo link. Add links.repo if the GeneTraceAI repository is public.
      },
      technologies: ["Python", "LangChain", "AWS Bedrock (Claude Haiku 4.5)", "AWS Lambda", "Docker", "ECR", "IAM", "React", "pytest"],
      features: [
        "Three tools (gene alias resolution, scoring-methodology explanation, dataset provenance) behind a deterministic hallucination-guard layer.",
        "Fail-safe data resolution: live Ensembl/HGNC APIs with circuit breakers and a local 19,213-gene parquet fallback.",
        "Three-tier test suite (tool, API/integration, live agent; ~65 tests across 8 files) used to validate the move from Groq to AWS Bedrock after a rate-limit evaluation.",
        "Docker container on AWS Lambda (Lambda Web Adapter) with ECR image pipelines and least-privilege IAM; React front end with real-time gene alias enrichment."
      ],
      // CONFIRM: no public repo link. Add one if the GeneTraceAI repository is public.
    },
    {
      slug: "gtai-graph-poc",
      name: "GTAI Graph PoC: Cancer Cell-Line Omics Graph",
      description: "Personal proof of concept that grew out of the MSc group project. It turns public cancer cell-line omics data into one heterogeneous graph, so a gene query returns the cell lines that behave unusually and the cell lines most similar to them.",
      featured: true,
      caseStudy: {
        problem: "Turn public cancer cell-line omics data into one graph, so a gene query returns the cell lines that behave unusually and the cell lines most similar to them.",
        approach: "17,784 nodes (1,399 cell lines, 16,385 genes) and 2,791,396 edges: cosine k-NN similarity edges plus gene-to-cell-line evidence edges, with mRNA and protein evidence combined by Stouffer's method.",
        decisions: [
          "Identifier crosswalk to Cellosaurus across 14 source files (DepMap, HPA, CCLE proteomics, GEO and others), with robust z-scores for expression.",
          "Leiden communities on the similarity graph (19 clusters, modularity 0.822); resumable chunked GPU training on a free Colab T4, and a fixed set-ordering reproducibility bug."
        ],
        result: "Per-gene protein-prediction models for 11,459 genes (OLS + GPU Random Forest ensemble): mean test Pearson 0.545 vs 0.807 on train, with the overfitting reported openly.",
        links: { repo: "https://github.com/Thiruvel-AP/GTAI-GraphPOC" }
      },
      technologies: ["Python", "networkx", "leidenalg", "python-igraph", "scikit-learn", "RAPIDS cuML", "SciPy", "Pandas"],
      features: [
        "17,784 nodes (1,399 cell lines, 16,385 genes) and 2,791,396 edges: cosine k-NN similarity edges plus gene-to-cell-line evidence edges, with mRNA and protein evidence combined by Stouffer's method.",
        "Identifier crosswalk to Cellosaurus across 14 source files (DepMap, HPA, CCLE proteomics, GEO and others), with robust z-scores for expression.",
        "Per-gene protein-prediction models for 11,459 genes (OLS + GPU Random Forest ensemble): mean test Pearson 0.545 vs 0.807 on train, with the overfitting reported openly.",
        "Leiden communities on the similarity graph (19 clusters, modularity 0.822); resumable chunked GPU training on a free Colab T4, and a fixed set-ordering reproducibility bug."
      ],
      link: "https://github.com/Thiruvel-AP/GTAI-GraphPOC"
    },
    {
      slug: "agenticfriend-voice-agent",
      name: "AgenticFriend: Real-Time Voice AI Agent",
      description: "Real-time voice assistant with full-duplex speech: a React front end talks over WebSockets to a FastAPI + Google ADK backend that transcribes speech as it streams, runs the agent and speaks the reply, and the user can interrupt it mid-sentence.",
      featured: true,
      caseStudy: {
        problem: "A voice assistant with full-duplex speech, where the user can interrupt the agent mid-sentence.",
        approach: "A React front end talks over WebSockets to a FastAPI + Google ADK backend that transcribes speech as it streams, runs the agent and speaks the reply.",
        decisions: [
          "Streaming speech-to-text with faster-whisper and a rolling VAD state machine (partial flush every 2.5 s, final flush on silence or timeout).",
          "Barge-in: AudioWorklet speech-start events interrupt playback so the user can talk over the agent.",
          "Text-to-speech with facebook/mms-tts-eng on CUDA in float16, warmed up at start-up.",
          // CONFIRM: the multi-agent hierarchy and cross-session memory are not in my records.
          "Google ADK agent layer with intent verification, task decomposition and specialised sub-agents, plus conversation memory across sessions."
        ],
        result: "A real-time voice loop with streaming transcription, an agent reply and spoken output, packaged in an nvidia/cuda Docker image with PyTorch 2.7.",
        links: { repo: "https://github.com/Thiruvel-AP/adk_multi-agent" }
      },
      technologies: ["Python", "Google ADK", "FastAPI", "React", "WebSockets", "faster-whisper", "Hugging Face (MMS-TTS)", "PyTorch", "CUDA", "Docker"],
      features: [
        "Streaming speech-to-text with faster-whisper and a rolling VAD state machine (partial flush every 2.5 s, final flush on silence or timeout).",
        "Barge-in: AudioWorklet speech-start events interrupt playback so the user can talk over the agent.",
        "Text-to-speech with facebook/mms-tts-eng on CUDA in float16, warmed up at start-up; packaged in an nvidia/cuda Docker image with PyTorch 2.7.",
        // CONFIRM: the multi-agent hierarchy and cross-session memory are not in my records.
        "Google ADK agent layer with intent verification, task decomposition and specialised sub-agents, plus conversation memory across sessions."
      ],
      link: "https://github.com/Thiruvel-AP/adk_multi-agent"
    },
    {
      slug: "mcp-search-agent",
      name: "MCP Search Agent: Open-Weight LLM with Web Search and a GraphQL Data Layer",
      description: "Proof of concept for a 180 Degrees Consulting client: a FastMCP server and stdio client let a local open-weight model (gpt-oss:20b via Ollama) call web search and store the results through a GraphQL layer on PostgreSQL. The client design it proved later shipped in TypeScript/Node.js.",
      featured: true,
      caseStudy: {
        problem: "A 180 Degrees Consulting client needed the MCP approach demonstrated before committing to a production build.",
        approach: "A FastMCP server and stdio client let a local open-weight model (gpt-oss:20b via Ollama) call web search and store the results through a GraphQL layer on PostgreSQL.",
        decisions: [
          "FastMCP server exposes tools; a stdio client drives a local gpt-oss:20b model through Ollama.",
          "Tavily web-search tool, with results persisted through Exograph GraphQL on PostgreSQL for later querying.",
          "GitHub Actions CI across Python 3.9 to 3.11."
        ],
        result: "Used to demonstrate the MCP approach to the client; the client design it proved later shipped in TypeScript/Node.js.",
        links: { repo: "https://github.com/Thiruvel-AP/mcp_searchagent" }
      },
      technologies: ["Python", "FastMCP", "MCP", "Ollama", "gpt-oss:20b", "Tavily", "Exograph (GraphQL)", "PostgreSQL", "GitHub Actions"],
      features: [
        "FastMCP server exposes tools; a stdio client drives a local gpt-oss:20b model through Ollama.",
        "Tavily web-search tool, with results persisted through Exograph GraphQL on PostgreSQL for later querying.",
        "GitHub Actions CI across Python 3.9 to 3.11.",
        "Used to demonstrate the MCP approach to the client before the production build."
      ],
      link: "https://github.com/Thiruvel-AP/mcp_searchagent"
    },
    {
      slug: "coverfit-insurance-benchmarking",
      name: "CoverFit: Insurance Benchmarking API (Bristol × UWE AI Hackathon)",
      description: "Insurance benchmarking API built for Capsule Cover at the University of Bristol × UWE AI Hackathon (Aug 2026). It finds comparable companies deterministically, then makes a single LLM call to explain the result, so the numbers never come from the model.",
      featured: false,
      technologies: ["Python", "FastAPI", "Pandas", "Pydantic", "LiteLLM", "Gemini", "pytest"],
      features: [
        "Deterministic comparable-company matching in pandas.",
        "One LLM call (Gemini via LiteLLM) writes the rationale: about £0.003 per query, response under 3 seconds.",
        "Typed Pydantic schemas and pytest coverage on a FastAPI service.",
        "Dataset kept private under the event's data-sharing terms."
      ],
      link: "https://github.com/Thiruvel-AP/AIHackathon-Phoenix",
      // CONFIRM: github.com/Thiruvel-AP/AIHackathon-Phoenix is not publicly reachable. Make it public or leave the link off.
    },
    {
      slug: "lloyds-banking-datathon",
      name: "Lloyd's Banking Group Datathon: 3rd Place",
      description: "Datathon run by Lloyd's Banking Group, finishing 3rd. The task was anomaly detection on heavily imbalanced financial data.",
      featured: false,
      technologies: ["Python", "Isolation Forest", "Ensemble Classifiers", "MLflow"],
      features: [
        "Anomaly detection on data with a 200:1 class imbalance, using Isolation Forest and ensemble classifiers.",
        "Experiments tracked in MLflow for comparable, repeatable runs.",
        "Placed 3rd."
      ],
    },
    {
      slug: "astrofreud-interview-agent",
      name: "AstroFreud: LangGraph Psychological Interview Agent",
      description: "LangGraph agent that runs a structured 14-node psychological interview on a local Llama 3 model, verifies the user's identity by face before a session, scores answers on five psycholinguistic dimensions and sends an alert email when a response is flagged as an emergency.",
      featured: false,
      technologies: ["Python", "LangGraph", "LangChain", "Ollama (Llama 3)", "FastAPI", "React", "DeepFace (Facenet512)", "Docker"],
      features: [
        "14-node LangGraph pipeline managing interview phases and state.",
        "Face verification with DeepFace (Facenet512) before a session starts.",
        "Psycholinguistic scoring across five dimensions, with emergency email alerting.",
        "FastAPI backend and React front end; the LLM runs locally through Ollama."
      ],
      link: "https://github.com/Thiruvel-AP/AstroFreud"
    },
    {
      slug: "airline-feedback-nlp",
      name: "Mining Insights from Customer Feedback: NLP Pipeline (MSc Team Project)",
      description: "Five-person MSc project (AI & Text Analytics) on an airline customer-support ticket dataset. My parts: EDA, the preprocessing pipeline, and the clustering pipeline across four text representations.",
      featured: false,
      technologies: ["Python", "Scikit-learn", "NLTK", "gensim", "sentence-transformers (SBERT)", "BERTopic", "Matplotlib"],
      features: [
        "Preprocessing pipeline: lowercasing, contraction expansion, entity placeholder substitution, regex noise removal, tokenisation, stopword removal and lemmatisation.",
        "Clustering with K-Means, HAC and DBSCAN across BoW, TF-IDF, Skip-gram and SBERT, visualised with PCA.",
        "Traced weak clusters (silhouette below 0.30; 600+ DBSCAN clusters) to repeated template wording in the tickets, which collapsed the embeddings into one dense region.",
        "Set up the team's GitHub branch-and-PR workflow and Trello board; worked with the team on the LDA and BERTopic topic models."
      ],
      link: "https://github.com/Thiruvel-AP/TextAnalytics"
    },
    {
      slug: "aws-data-pipelines",
      name: "Cloud Data Pipelines on AWS (MSc Large-Scale Data Engineering)",
      description: "Two AWS architectures built for MSc coursework: a serverless image-processing service and an auto-scaling word-frequency pipeline, with the second benchmarked across instance configurations.",
      featured: false,
      technologies: ["AWS Lambda", "EC2", "S3", "SQS", "SNS", "DynamoDB", "CloudWatch", "Auto Scaling", "IAM", "Python"],
      features: [
        "\"ART AI\" image pipeline: Route 53, CloudFront, ALB, Lambda, EC2 with Triton GPU inference, ECR, S3/Glacier, SQS, SNS, DynamoDB, KMS and IAM.",
        "Word-frequency pipeline: EC2 workers fed by SQS, results in S3 and DynamoDB, scaled by an Auto Scaling group on CloudWatch queue alarms.",
        "Benchmarks: one t2.micro and four t3.micro both finished in 8 minutes; five t2.nano took 14 to 15 minutes."
      ],
    },
    {
      // Removed ">80% directional accuracy": not in my records. Re-add with the evaluation output if you have it.
      slug: "bitcoin-ohlcv-forecasting",
      name: "Bitcoin OHLCV Forecasting: Time-Series Deep Learning",
      description: "LSTM pipeline forecasting multivariate Bitcoin Open/High/Low/Close/Volume values, tuned with time-series-aware validation and served through TensorFlow Serving.",
      featured: false,
      technologies: ["Python", "TensorFlow (GPU)", "Pandas", "NumPy", "Docker", "YFinance", "TensorFlow Serving"],
      features: [
        "LSTM on multivariate OHLCV data with sliding-window sequences and cyclic date encoding.",
        "Custom grid search over TimeSeriesSplit folds, so validation never sees future data.",
        "Model exported to TensorFlow Serving and queried over a REST API.",
        "GPU training with TensorFlow on WSL2 and Docker."
      ],
      link: "https://github.com/Thiruvel-AP/BitcoinForecasting"
    },
    {
      // CONFIRM: your old text said random grid search + ROC-AUC; the repo README says Bayesian search + MCC. The README version is used.
      slug: "banking-churn-prediction",
      name: "Banking Customer Churn Prediction (R, tidymodels)",
      description: "Reproducible churn classifier in R on a 10,000-customer retail banking dataset, built with tidymodels so preprocessing, resampling and tuning stay in one leak-free workflow.",
      featured: false,
      technologies: ["R", "tidyverse", "tidymodels", "recipes", "parsnip", "XGBoost", "SMOTE", "DataExplorer"],
      features: [
        "EDA with DataExplorer across tenure, balance, product usage and activity features.",
        "SMOTE inside the recipe, so oversampling never leaks into validation folds.",
        "XGBoost tuned with a two-stage Bayesian hyperparameter search.",
        "Evaluated with the Matthews correlation coefficient (MCC), which stays honest under class imbalance."
      ],
      link: "https://github.com/Thiruvel-AP/Banking-Customer-Churn-Prediction"
    },
    {
      // Relabelled: this is a written design with a diagram, not implemented code or trained research.
      // CONFIRM: github.com/Thiruvel-AP/Multi-Omics-research-GAT is not publicly reachable, so no link is set.
      slug: "multi-omics-gat-design",
      name: "Multi-Omics Graph Attention Network: Design Proposal (MSc Coursework)",
      description: "Design proposal for a graph attention network that integrates mRNA expression, DNA methylation and copy-number data for cancer classification. It is a written design with an architecture diagram; it has not been implemented or trained.",
      featured: false,
      technologies: ["Graph Attention Networks (design)", "Multi-omics", "Attention", "ANOVA feature selection", "draw.io"],
      features: [
        "Learnable adjacency matrix from scaled dot-product attention (Q = W_Q·X, K = W_K·X) with soft thresholding, removing the need for a prior knowledge graph.",
        "Per-omics GAT encoders, concatenated, then a masked multi-head GAT for cross-omics fusion and a per-node MLP classifier.",
        "Preprocessing specified per modality: ANOVA F-statistic feature selection and z-score normalisation.",
        "Grounded in a literature review covering MOGONET, deepCDG, MOFA+ and GNNRAI."
      ],
      link:"https://github.com/Thiruvel-AP/Multi-Omics-research-GAT",
    },
    {
      slug: "griddqn",
      name: "GridDQN: Deep Reinforcement Learning from Scratch",
      description: "Deep Q-Network agent written from scratch in TensorFlow, with no RL libraries, learning a policy in a custom grid-world environment.",
      featured: false,
      technologies: ["Python", "TensorFlow", "NumPy"],
      features: [
        "Neural Q-value approximator with an experience replay buffer and a target network for stable Bellman updates.",
        "Epsilon-greedy exploration with decaying epsilon.",
        "Every RL component implemented by hand rather than imported from a library."
      ],
      link: "https://github.com/Thiruvel-AP/GridDQN"
    },
    {
      slug: "pokemon-classification",
      name: "Pokémon Multi-Target Classification",
      description: "Three Random Forest models predict several Pokémon attributes at once; a dispatcher picks the model that matches whichever inputs are available.",
      featured: false,
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "joblib", "Jupyter Notebook"],
      features: [
        "Three multi-target Random Forest models, each tuned with GridSearchCV (96 combinations per model, 480 fits).",
        "Custom scoring with Hamming loss, F1 and precision for multi-target outputs.",
        "Input-conditional dispatcher selects the right model; models serialised with joblib."
      ],
      link: "https://github.com/Thiruvel-AP/Pokemon_Classification"
    },
    {
      // CONFIRM: "180+ countries" is not in my records.
      slug: "stack-overflow-survey",
      name: "Stack Overflow Developer Survey: Python Ecosystem Analysis",
      description: "Exploratory analysis of the 2023 Stack Overflow Developer Survey: where Python developers are, which skills they combine, and how technology adoption differs across countries.",
      featured: false,
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      features: [
        "Cleaning, aggregation and statistical summaries of the survey data.",
        "Mapped the global distribution of Python developers across 180+ countries.",
        "Identified skill clusters (Python with ML tools vs Python with web tools)."
      ],
      link: "https://github.com/Thiruvel-AP/DS_Project1"
    }
  ]
};