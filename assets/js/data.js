/* =========================================================================
   Professional Profile – content (published at https://stafero.github.io/)
   Edit this file to update the page. index.html + assets/js/app.js render it.
   ========================================================================= */
window.PROFILE = {
  updated: "November 2026",

  /* CV download counter (GoatCounter, free account "stafero").
     offset = downloads counted before the switch to GoatCounter. Set enabled: false to hide it. */
  cvCounter: {
    enabled: true,
    site: "https://stafero.goatcounter.com",
    path: "cv-download",
    title: "CV download",
    offset: 12
  },

  person: {
    name: "Stanislav Ferenc",
    headline: "Data & AI Governance · Adoption & Change · Responsible AI",
    location: "Basel region, Switzerland",
    email: ["ferenc.stanislav", "gmail.com"],   // joined at runtime to keep it out of plain-text scrapers,
    linkedin: "https://www.linkedin.com/in/stanislav-ferenc/",
    summary: [
      "IT professional with 20+ years in complex, global matrix organisations, bridging business, IT and external partners. I translate policies, standards and governance frameworks into practical ways of working that teams actually adopt – with a hands-on foundation in data quality, data reconciliation and data-driven controls across the CRM, billing and provisioning platforms behind more than 5 million mobile, internet and TV subscriptions at Sunrise.",
      "My results come from changing how people work with data, not from tools alone: preventive data-quality controls embedded as standard procedure, cross-functional task forces led without formal authority, and a data-critical migration of 100,000+ customers. I move comfortably between executive status reporting and hands-on coaching.",
      "I build AI governance in practice: in my self-hosted projects I design governed AI – usage caps, full audit logging, customer data scoping and policy-as-code – and I am trained in agentic AI governance and red-teaming, responsible generative AI, ISO/IEC 27001 and IT audit."
    ],
    pageNote: "Here you will find my complete career history, certifications and training, and a selection of those projects.",
    languages: [
      ["English", "C2"],
      ["German", "C1 comprehension · B2 speaking"],
      ["Slovak", "Native"],
      ["Czech", "C2"]
    ]
  },

  stats: [
    { value: "5M+", unit: "", label: "mobile, internet & TV subscriptions on platforms I supported" },
    { value: "CHF 100k", unit: "/month", label: "recovered through preventive data-quality controls" },
    { value: "−50%", unit: "", label: "incidents – task force led without formal authority" },
    { value: "−90%", unit: "", label: "eBill delivery complaints after root-cause analysis" },
    { value: "20+", unit: "years", label: "in global matrix organisations" }
  ],

  experience: [
    {
      role: "IT System Administrator",
      company: "Sunrise Communications AG",
      meta: "Telecommunications · Opfikon / Zürich, Switzerland",
      period: "02/2014 – Present",
      intro: "Supported the mission-critical CRM, billing and provisioning platforms behind 5+ million mobile, internet and TV subscriptions in a semi-outsourced, international matrix setup.",
      bullets: [
        "Shifted data reconciliation across CRM, billing and network systems from reactive clean-up to <b>preventive data-quality controls</b>; secured team and management buy-in, embedded them as standard operating procedure and recovered revenue of <b>up to CHF 100k per month</b> at peak.",
        "Initiated and led a cross-functional task force after the MFA rollout on the MySunrise portal – aligning business, IT and customer care <b>without formal authority</b>; incidents and customer calls cut by <b>over 50%</b>, with procedures written for care agents.",
        "Led the root-cause analysis of undelivered eBill emails across teams and providers; drove the decision to separate transactional and marketing mail pools, reducing reported issues by <b>about 90%</b>.",
        "Drove the final execution of the interbrand migration of UPC Switzerland mobile and customer service platforms – <b>100,000+ customers</b> moved in batches over about one year, with data integrity and operational continuity.",
        "Acted as Single Point of Contact (SPOC) for release projects; managed change by onboarding new systems, processes and releases into production and aligning risks and dependencies with business, IT and vendors.",
        "Onboarded and upskilled external team members from Infosys, Tech Mahindra and Ceavus – access governance (IAM roles, privileges), VDIs, tools and structured knowledge transfer.",
        "Standardised incident, problem and change handling; defined ticket and request workflows with BMC Remedy ITSM administrators.",
        "Operated Amdocs Clarify CRM, Kenan Arbor Postpaid Billing, OPSC Prepaid Billing and SAP RM-CA (FI-CA) across the full application lifecycle – maintenance, upgrades, migrations and recovery.",
        "Root-cause analysis using logs, audit trails and request/response tracking; controlled, well-documented data corrections with SQL on Oracle."
      ],
      tags: ["Data Quality", "Data Reconciliation", "Change & Adoption", "Matrix Leadership", "Amdocs Clarify", "Kenan Arbor", "SAP RM-CA", "Oracle SQL", "ITIL"]
    },
    {
      role: "Consultant",
      company: "SQS Software Quality Systems (Schweiz) AG",
      meta: "IT consulting · Zürich, Switzerland · client: Swiss telecom operator",
      period: "01/2011 – 01/2014",
      intro: "Quality governance and test management consulting for enterprise release and transformation projects.",
      bullets: [
        "Translated governance, standards and policies into practical project frameworks – test strategy, planning, monitoring and closure across the full lifecycle.",
        "Led a team in a matrix setup – assigning tasks and roles, coordinating onsite and offshore resources, business departments and external partners.",
        "Established <b>KPI reporting, quality gates and Go/No-Go recommendations</b>; delivered concise executive status reports that raised the right alarms at the right time.",
        "Applied a risk-based approach, escalated deviations to the PMO and provided effort estimates for binding service offers.",
        "Designed and delivered training and knowledge transfer for the offshore partner; established project incident management.",
        "Coordinated system integration, regression, user acceptance and non-functional testing across Waterfall, Agile and hybrid delivery; established test automation practices."
      ],
      tags: ["Quality Governance", "KPI & Executive Reporting", "Training & Knowledge Transfer", "Risk-Based Approach", "Onsite/Offshore"]
    },
    {
      role: "Software Quality Assurance Specialist",
      company: "Sunrise Communications AG",
      meta: "Telecommunications · Zürich, Switzerland",
      period: "06/2008 – 12/2010",
      intro: "End-to-end quality assurance for CRM, order management and billing projects and productive systems.",
      bullets: [
        "Defined QA strategies and standards for CRM, order management and billing projects; coordinated cross-functional teams and external vendors, including offshore teams.",
        "Maintained the <b>SOX test library</b> in HP Quality Center / ALM, supporting regulatory compliance and audit readiness.",
        "Domain expert for ULL fixed-line products and GSM order handling across Amdocs Clarify, Comptel SAS, Vitria, Comverse Arbor, CDRator and Intershop Enfinity.",
        "Developed and maintained automated regression tests with Selenium; interface testing with soapUI.",
        "Identified risks early and reported quality status and Go/No-Go recommendations to stakeholders."
      ],
      tags: ["SOX Compliance", "QA Standards", "Vendor Coordination", "HP Quality Center", "Selenium"]
    },
    {
      role: "Quality Engineer",
      company: "Ness Technologies",
      meta: "IT services · Prague, Czech Republic · client: T-Mobile Czech Republic",
      period: "04/2007 – 05/2008",
      intro: "Quality engineering for Amdocs Clarify CRM and billing projects.",
      bullets: [
        "Validated specifications and verified CRM and billing changes, including manual billing and CA-based e-stamping of customer bills.",
        "Developed test strategies, detailed test plans and scenario-based test cases within iterative testing cycles.",
        "Performed root-cause analysis through audit-trail reviews, request/response tracking and log analysis.",
        "Maintained QA and project management artifacts for transparent execution and audit readiness."
      ],
      tags: ["Amdocs Clarify", "Billing", "Test Design", "RCA"]
    },
    {
      role: "Customer Service Technician",
      company: "Cegedim",
      meta: "Healthcare & pharma software · Brno, Czech Republic",
      period: "10/2005 – 04/2007",
      intro: "Technical support and administration of a CRM application for pharmaceutical sales representatives.",
      bullets: [
        "Administered server and client components of the application across multiple customer environments.",
        "Installed, configured and ran data imports and migrations; implemented ETL to map customer data to the target database schema.",
        "Performed routine audits, upgrades and backup/restore activities to ensure system stability.",
        "Provided multi-level technical support (on-site and remote) and trained administrators and end users; reported bugs to development."
      ],
      tags: ["ETL", "Data Migration", "Application Support", "User Training"]
    }
  ],

  stories: [
    {
      title: "Reducing production incidents after an MFA rollout",
      challenge: "The gradual rollout of multi-factor authentication on the MySunrise portal caused a surge in hotline calls from customers unable to log in – and a wave of incident tickets that drew management attention.",
      action: "Proposed and coordinated a cross-functional task force, gathered frontline feedback from customer care, identified recurring patterns and introduced more detailed logging to narrow down the root causes.",
      result: "Customer calls and production incidents reduced by <b>over 50%</b>; clear procedures for care agents improved first-contact resolution and SLA adherence."
    },
    {
      title: "From reactive to proactive revenue assurance",
      challenge: "Data inconsistencies between CRM, billing and network systems created a risk of revenue leakage and late charges on customer bills.",
      action: "Analysed the sources of discrepancies, proposed shifting from reactive reconciliation to early-stage validation of system-generated errors, built team consensus and secured management support.",
      result: "Adopted as standard operating procedure; recoveries of <b>up to CHF 100,000 per month</b> at peak and a more consistent billing experience."
    },
    {
      title: "Solving the case of the missing eBill emails",
      challenge: "A growing number of customers stopped receiving eBill emails – with no visible difference between successful and failed deliveries.",
      action: "Spotted that most affected customers used Microsoft-hosted mailboxes, ran task-force sessions and found that marketing and transactional mail shared one server cluster with a damaged sender reputation. Proposed dedicated mail pools for eBill.",
      result: "Reported issues reduced by <b>about 90%</b>; complaints effectively eliminated in the following billing cycles."
    }
  ],

  projects: [
    {
      name: "Compliance self-assessment wizard",
      oneLiner: "Multi-tenant TISAX® / VDA ISA assessment platform with maturity scoring, executive reporting, licensing and governed AI assistance.",
      pitch: "Helps automotive suppliers and their consultants prepare for TISAX® – the information-security label the automotive industry requires across its supply chain. Instead of wrestling with a large Excel questionnaire, assessors are guided control by control, see maturity scores and gaps at a glance, and produce a management-ready executive summary and the official filled-in template with one click. AI assistance drafts answers and explains requirements under strict governance: every AI call is capped, logged and limited to the customer's own data. Designed as a licensable, multi-customer product.",
      kind: "Web application · multi-tenant · self-hosted",
      period: "2026 – ongoing",
      status: "Working MVP · demo on request",
      summary: "TISAX® / VDA ISA assessment wizard.",
      highlights: ["<b>Two questionnaire versions:</b> VDA ISA 6 (80 controls) and ISA 2027 (78 controls) side by side – read from the original Excel templates, with Excel import and export of the filled-in official template.", "<b>Multi-tenant access control:</b> four roles (admin, assessor, customer, technical support) with one central data-scope rule; check-out locking so only one person edits an assessment at a time.", "<b>Scoring & reporting:</b> maturity scoring and gap analysis per chapter; auto-generated Executive Summary (Word) with radar and bar charts in English and Czech.", "<b>Evidence support:</b> 23 evidence-document templates, a document list mapped to controls, working-folder evidence scanning and technical how-tos for verifying controls.", "<b>Governed AI:</b> assistant chatbot, answer drafting, maturity suggestion and semantic search via a single LLM gateway – provider fallback (OpenRouter → Gemini), retries, per-user daily caps and a full audit log; observe-only policy-as-code check (Rego).", "<b>Licensing & SLA:</b> assessor groups, licence keys and capacity units, traffic-light expiry status and a generated SLA document.", "<b>Engineering:</b> FastAPI + React 18, PostgreSQL 16 (32 tables, 38 migrations), 105 API operations, Docker Compose; pull-request workflow with CI and gitleaks secret scanning; source-verified technical documentation – built with AI coding agents (Claude Code)."],
      stack: ["React", "FastAPI", "PostgreSQL", "Docker", "LiteLLM", "Gemini / OpenRouter", "Rego (policy-as-code)", "openpyxl", "python-docx", "GitHub Actions", "gitleaks", "TISAX / VDA ISA", "ISO/IEC 27001"]
    },
    {
      name: "Polling platform",
      pitch: "A platform where communities and organisations run public or private polls and instantly understand the outcome – AI turns raw votes into plain-language summaries and forecasts. Built and operated like a real production service: protected against real-world attacks, continuously tested and monitored. It shows how one person, working with AI coding agents, can deliver a secure, enterprise-grade digital product end to end.",
      oneLiner: "Secure full-stack polling web app (React, FastAPI, PostgreSQL, Docker) with WAF/IPS, SSO, AI features, 3-framework E2E test automation and CI/CD security scanning.",
      kind: "Full-stack web application · self-hosted",
      period: "2026 – ongoing",
      status: "Running locally · demo on request",
      summary: "A web platform for public and private polls with AI-assisted result summaries, used as a realistic playground for secure engineering, test automation and operations – built end-to-end with AI coding agents.",
      highlights: [
        "<b>Architecture:</b> React 18 + Vite SPA, Python 3.12 / FastAPI modular monolith, PostgreSQL 16 with Alembic migrations – 10 Docker Compose containers.",
        "<b>Defence in depth:</b> nginx with ModSecurity WAF (OWASP CRS), CrowdSec IPS, HTTPS via internal CA, JWT + HMAC-signed guest tokens, SSO via Authelia (OIDC) + LLDAP.",
        "<b>Security testing:</b> own penetration-test rounds against the OWASP Top 10 – 7 findings (incl. 3 critical) remediated and re-tested; Nikto, OWASP ZAP and Slowloris DoS checks.",
        "<b>Test automation:</b> E2E suites in Selenium (33 tests), Playwright (34 tests) and Cypress; JMeter load scenarios; CI-safe vs. local suites.",
        "<b>CI/CD:</b> GitHub Actions with 8 jobs – build, Bandit, npm audit, gitleaks, Trivy, deployment checks; feature-branch + PR workflow.",
        "<b>Observability & SOAR:</b> Prometheus, Loki and Grafana dashboards (logs, WAF, security, LLM usage); Grafana alerts enriched by n8n (AbuseIPDB, VirusTotal) and sent to Telegram/e-mail; GLPI as CMDB.",
        "<b>AI features:</b> Google Gemini for result summaries (24 h cache), predictions, content moderation and PDF reports – with rate-limit fallback and an admin kill switch."
      ],
      stack: ["React", "FastAPI", "PostgreSQL", "Docker", "ModSecurity", "CrowdSec", "Authelia", "Grafana", "n8n", "Selenium", "Playwright", "Cypress", "JMeter", "GitHub Actions", "Gemini"]
    },
    {
      name: "Educational crypto trading bot",
      pitch: "A learning platform that makes automated trading decisions transparent and controllable before any real money is at risk. Every strategy is proven step by step – from historical simulation to live practice trading – under strict risk limits, and can be monitored and steered from a dashboard or a phone. A hands-on study in disciplined, safety-first delivery.",
      oneLiner: "Regime-adaptive trading bot in Python/Docker with backtesting, paper and testnet trading, risk management, dashboard and Telegram control.",
      kind: "Python service · self-hosted",
      period: "2026",
      status: "Paper & testnet trading · demo on request",
      summary: "A regime-adaptive, long-only spot trading bot built to learn how trading systems integrate with an exchange and how they can be safely observed and steered. No real-money trading by design – it is a learning project, not a performance product.",
      highlights: [
        "<b>Safety-first progression:</b> backtest → read-only monitor → paper trading → exchange testnet; each stage proven before the next, live trading deliberately not built.",
        "<b>Clean architecture:</b> isolated engine, dashboard and Telegram bot as separate containers sharing one database and a single control path.",
        "<b>Risk management:</b> position sizing, ATR-based stop-loss and take-profit (~1:2 risk/reward), time stops – one shared exit function for backtester and live trader.",
        "<b>Control surfaces:</b> Streamlit dashboard and a whitelisted Telegram bot; secrets kept out of git and logs.",
        "<b>Quality:</b> 42 offline, deterministic pytest tests; CI with pytest, ruff, Docker builds, gitleaks and Trivy; pinned third-party actions."
      ],
      stack: ["Python", "Docker", "SQLite", "ccxt", "Streamlit", "Telegram API", "pytest", "ruff", "GitHub Actions"]
    }
  ],
  projectsNote: "More self-hosted projects will be added as their documentation is completed.",

  skills: [
    { group: "Data & AI Governance", items: ["Data Quality & Reconciliation", "Data Integrity Controls", "Responsible AI", "AI Risk & Guardrails", "LLM Audit Logging", "Policy-as-Code", "ISO/IEC 27001", "SOX Compliance", "Access Governance (IAM)"] },
    { group: "Adoption & Change", items: ["Policy-to-Practice Translation", "SOPs & Standards", "Training & Knowledge Transfer", "Onboarding", "Change & Release Management", "Stakeholder Engagement", "ITIL"] },
    { group: "Leadership & Reporting", items: ["Matrix Leadership", "Leading without Formal Authority", "Stakeholder Management (C-level to Operations)", "KPI & Maturity Frameworks", "Quality Gates & Go/No-Go", "Executive Reporting"] },
    { group: "Telecom OSS/BSS", items: ["CRM", "Order Management & Orchestration", "Billing & Mediation", "Service Fulfillment & Provisioning", "Revenue Assurance", "Amdocs Clarify", "Kenan Arbor", "OPSC", "SAP RM-CA (FI-CA)"] },
    { group: "Quality & Test Management", items: ["Test Strategy & Governance", "Risk-Based Testing", "SIT · UAT · Regression · E2E", "Defect Management", "Test Automation (Selenium, Playwright, Cypress)", "Load Testing (JMeter)"] },
    { group: "Tools, Security & AI Engineering", items: ["Oracle SQL", "Jira", "Confluence", "HP ALM / Octane", "BMC Remedy ITSM", "Docker", "GitHub Actions", "OWASP Top 10", "WAF / IPS", "IAM & SSO (OIDC)", "LLM Integration", "AI Coding Agents", "n8n Automation", "Linux", "Windows", "M365"] }

  ],

  certifications: [
    { name: "CompTIA Security+ ce", issuer: "CompTIA", year: "2015" },
    { name: "ITIL Foundation in IT Service Management", issuer: "AXELOS", year: "2014" },
    { name: "ISTQB Certified Tester – Foundation Level", issuer: "ISTQB", year: "2011" },
    { name: "OMG-Certified UML Professional – Fundamental", issuer: "Object Management Group (OMG)", year: "2007" }
  ],

  courses: [
    { name: "Introduction to Claude Cowork", issuer: "Anthropic", year: "2026", note: "Certificate of completion" },
    { name: "Claude Code 101", issuer: "Anthropic", year: "2026", note: "Certificate of completion" },
    { name: "Claude 101", issuer: "Anthropic", year: "2026", note: "Certificate of completion" },
    { name: "AWS Organizations Getting Started", issuer: "AWS Training & Certification", year: "2026", note: "Completion certificate" },
    { name: "Compute Cost Optimization Services", issuer: "AWS Training & Certification", year: "2026", note: "Completion certificate" },
    { name: "Generative AI and ChatGPT – Quickstart with Examples", issuer: "Packt", year: "2026", note: "Certificate of completion" },
    { name: "Creating with Generative AI: Images, Videos and Prompt Engineering", issuer: "Simon Sez IT", year: "2026", note: "Certificate of completion" },
    { name: "Creating with Generative AI: Understanding Artificial Intelligence", issuer: "Simon Sez IT", year: "2026", note: "Certificate of completion" },
    { name: "Artificial Intelligence: Challenges and Stakes", issuer: "Coorpacademy", year: "2026", note: "Certificate of completion" },
    { name: "Safe & Secure Agentic AI: Governance, Identity & Red-Teaming", issuer: "NobleProg", year: "2026", note: "2-day instructor-led course" },
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", year: "2026", note: "" },
    { name: "SQS PractiQ® Advanced Level – Code Analysis", issuer: "SQS Software Quality Systems", year: "2013", note: "" },
    { name: "SQS PractiQ® Advanced Level – HealthCheck", issuer: "SQS Software Quality Systems", year: "2013", note: "" },
    { name: "SQS PractiQ® Advanced Level – Performance Testing", issuer: "SQS Software Quality Systems", year: "2013", note: "" },
    { name: "SQS PractiQ® Advanced Level – Test Automation", issuer: "SQS Software Quality Systems", year: "2013", note: "" },
    { name: "SQS PractiQ® Advanced Level – Test Management", issuer: "SQS Software Quality Systems", year: "2013", note: "" },
    { name: "SQS PractiQ® Advanced Level – Functional Testing", issuer: "SQS Software Quality Systems", year: "2012", note: "" },
    { name: "SQS PractiQ® Foundation Level", issuer: "SQS Software Quality Systems", year: "2012", note: "" },
    { name: "CCNA 1–2: Networking Basics; Routers & Routing Basics", issuer: "Cisco Networking Academy", year: "2005", note: "" }
  ],

  msLearn: {
    transcript: "https://learn.microsoft.com/en-us/users/stanislavferenc-7341/transcript/d5g96hj8x46rn2w",
    totals: { paths: 8, modules: 44, hours: "31 h 34 min" },
    paths: [
      ["Azure Fundamentals: Describe Azure management and governance", "May 2026"],
      ["Enhance your productivity with prebuilt Microsoft 365 Copilot agents", "May 2026"],
      ["Introduction to machine learning operations (MLOps)", "Mar 2026"],
      ["Manage and optimize a Microsoft Fabric environment", "Mar 2026"],
      ["Work with generative AI models in Azure Machine Learning", "Mar 2026"],
      ["Get started with Azure Cosmos DB SQL API", "Mar 2026"],
      ["Develop generative AI apps in Azure", "Mar 2026"],
      ["Create an AI agent with Microsoft Foundry", "Mar 2026"]
    ],
    /* [title, completed] grouped by topic */
    modules: {
      "AI security & identity": [
        ["Secure access for Microsoft Entra Agent Identity", "May 18, 2026"],
        ["Protect AI workloads with Microsoft Defender for Cloud", "May 18, 2026"],
        ["Understand how Microsoft Defender for Cloud supports AI security and governance in Azure", "May 7, 2026"],
        ["Understand Azure Active Directory", "Mar 19, 2026"]
      ],
      "Generative AI & agents": [
        ["Explore prebuilt Microsoft 365 Copilot agents", "May 4, 2026"],
        ["Understand the Transformer architecture and explore large language models in Azure Machine Learning", "Mar 23, 2026"],
        ["Build knowledge-enhanced AI agents with Foundry IQ", "Mar 19, 2026"],
        ["Responsible generative AI in AI Studio", "Mar 18, 2026"],
        ["Optimize generative AI model performance with Microsoft Foundry", "Mar 17, 2026"],
        ["Develop an AI app with the Microsoft Foundry SDK", "Mar 16, 2026"],
        ["Select, deploy, and evaluate models from the catalog in Microsoft Foundry portal", "Mar 16, 2026"],
        ["Plan and prepare to develop AI solutions on Azure", "Mar 16, 2026"],
        ["Fundamentals of AI agents on Azure", "Mar 16, 2026"],
        ["Fundamentals of generative AI", "Mar 16, 2026"],
        ["Get started with AI on Azure", "Mar 16, 2026"]
      ],
      "Machine learning & MLOps": [
        ["Tune hyperparameters in Azure Databricks", "Apr 29, 2026"],
        ["Use MLflow in Azure Databricks", "Apr 29, 2026"],
        ["Perform data analysis with Azure Databricks", "Apr 1, 2026"],
        ["Explore Azure Databricks", "Mar 31, 2026"],
        ["Work with environments in Azure Machine Learning", "Mar 31, 2026"],
        ["Make data available in Azure Machine Learning", "Mar 30, 2026"],
        ["Register an MLflow model in Azure Machine Learning", "Mar 30, 2026"],
        ["Perform hyperparameter tuning with Azure Machine Learning", "Mar 30, 2026"],
        ["Continuous deployment for machine learning", "Mar 27, 2026"],
        ["Automate machine learning workflows", "Mar 27, 2026"],
        ["Source control for machine learning projects", "Mar 27, 2026"],
        ["Introduction to DevOps principles for machine learning", "Mar 27, 2026"],
        ["Run pipelines in Azure Machine Learning", "Mar 24, 2026"]
      ],
      "Data & analytics": [
        ["Administer Microsoft Fabric", "Mar 26, 2026"],
        ["Secure data access in Microsoft Fabric", "Mar 26, 2026"],
        ["Get started building with Power BI", "Mar 26, 2026"],
        ["Perform advanced streaming data transformations with Apache Spark and Kafka in Azure HDInsight", "Mar 26, 2026"],
        ["Monitor and optimize an analytics solution", "Mar 24, 2026"],
        ["Implement continuous integration and continuous delivery (CI/CD) in Microsoft Fabric", "Mar 24, 2026"],
        ["Try Azure Cosmos DB SQL API", "Mar 23, 2026"],
        ["Introduction to Azure Cosmos DB SQL API", "Mar 23, 2026"],
        ["Introduction to end-to-end analytics using Microsoft Fabric", "Mar 18, 2026"]
      ],
      "Azure fundamentals, governance & containers": [
        ["Describe features and tools for managing and deploying Azure resources", "May 6, 2026"],
        ["Describe features and tools in Azure for governance and compliance", "May 6, 2026"],
        ["Describe cost management in Azure", "May 5, 2026"],
        ["Describe monitoring tools in Azure", "Mar 23, 2026"],
        ["Describe the core architectural components of Azure", "Mar 18, 2026"],
        ["Introduction to Kubernetes", "Mar 23, 2026"],
        ["Introduction to Docker containers", "Mar 19, 2026"]
      ]
    }
  },

  /* status: done | progress | planned ; progress = % */
  udemy: [
    { title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents", by: "Ligency · Ed Donner", status: "done", date: "Nov 2026", points: ["LLM engineering with frontier and open-source models – GPT, Claude, Gemini, Llama, Qwen, DeepSeek", "Retrieval-Augmented Generation (RAG) with LangChain, LlamaIndex and vector databases", "Fine-tuning open-source models with LoRA / QLoRA on Hugging Face; model evaluation and selection", "Multimodal apps, function calling / tool use and Gradio UIs", "Capstone: autonomous multi-agent system with a fine-tuned model competing against frontier LLMs"], skills: ["LLM Engineering", "RAG", "Fine-Tuning", "LoRA / QLoRA", "Hugging Face", "LangChain", "LlamaIndex", "Function Calling", "Multimodal AI", "Model Evaluation"] },
    { title: "AI Builder: Create Agents, Voice Agents & Automations in n8n", by: "Ligency · Ed Donner", status: "done", date: "Oct 2026", points: ["No-code / low-code AI automation with n8n – autonomous agents that plan, reason and execute workflows", "Agentic RAG with vector stores (Supabase pgvector) for private-knowledge agents", "Real-time voice AI agents with ElevenLabs and Twilio", "Multi-agent systems with MCP and FireCrawl – lead generation, enrichment, meeting booking", "LLM integrations (OpenAI, Gemini, Anthropic) with webhooks, Slack, Gmail, Telegram and Google Sheets"], skills: ["n8n", "AI Agents", "Workflow Automation", "Agentic RAG", "Vector Database", "Voice AI", "MCP", "Multi-Agent Systems", "No-Code / Low-Code"] },
    { title: "AI Coder: Complete Claude Code & Coding Agents Course", by: "Ligency · Ed Donner", status: "done", date: "Oct 2026", points: ["Agentic software engineering with AI coding agents – Claude Code, Cursor, GitHub Copilot, OpenAI Codex", "Multi-agent orchestration: sub-agents, agent swarms, orchestrators and Claude Agent Teams", "Context engineering with CLAUDE.md / AGENTS.md; extending agents via MCP, skills, hooks and plugins", "Spec-driven workflows (Ralph loops, feature-dev, GSD) with Jira/GitHub integration and Playwright testing", "Full-stack builds with Next.js, FastAPI and Docker – incl. an AI digital twin and a SaaS legal assistant"], skills: ["Agentic AI", "AI Coding Agents", "Claude Code", "Multi-Agent Orchestration", "Context Engineering", "MCP", "Spec-Driven Development", "GitHub Copilot", "Cursor", "Next.js", "FastAPI", "Docker"] },
    { title: "ISO/IEC 27001: Information Security Management System (ISMS)", by: "Cristian Vlad Lupa · rigcert.education", status: "done", date: "Sep 2026", points: ["ISMS requirements of ISO/IEC 27001:2022 – context, scope, leadership, policy and roles", "Information security risk assessment and risk treatment; Statement of Applicability", "Annex A controls: organisational, people, physical and technological", "Performance evaluation, internal audit, nonconformities and continual improvement", "Preparing for ISMS implementation projects and certification audits"], skills: ["ISO/IEC 27001:2022", "ISMS", "Risk Assessment", "Risk Treatment", "Annex A Controls", "Statement of Applicability", "Internal Audit", "Information Security Governance"] },
    { title: "The Ultimate Dark Web, Anonymity, Privacy & Security Course", by: "Zaid Sabih · zSecurity", status: "done", date: "Sep 2026", points: ["Online anonymity and privacy: Tor, onion services, bridges and VPN chaining", "Hardened, privacy-focused operating systems – TAILS and Qubes OS (compartmentalisation)", "Applied cryptography: symmetric/asymmetric encryption, PGP key management, signing and verification", "Secure communication and OPSEC: encrypted messaging (XMPP), metadata removal, secure file deletion", "Cryptocurrency privacy fundamentals – blockchain, Bitcoin, Monero and wallets"], skills: ["Privacy", "Anonymity", "OPSEC", "Tor", "TAILS", "Qubes OS", "PGP Encryption", "Applied Cryptography"] },
    { title: "IT Audit – Complete Course: Plan and Deliver IT Audits", by: "Cyvitrix Learning", status: "done", date: "Aug 2026", points: ["End-to-end IT audit lifecycle: planning, scoping, risk assessment, fieldwork, reporting and follow-up", "IT General Controls (ITGC): access, change management, backup & recovery, IT operations", "Risk and control matrices (RCM), test plans, sampling and audit evidence / workpapers", "Mapping to COBIT, ISO 27001, NIST CSF, SOX, GDPR and SOC reports", "Auditing cloud, hybrid and on-premises environments; communicating findings and root causes"], skills: ["IT Audit", "ITGC", "Risk & Control Matrix", "Audit Evidence", "COBIT", "SOX", "NIST CSF", "GDPR", "SOC Reports", "Third-Party Risk"] },
    { title: "Complete Ethical Hacking and Cybersecurity Course", by: "Santiago Hernández", status: "done", date: "Jul 2026", points: ["Penetration testing methodology across the five phases – reconnaissance/OSINT to post-exploitation", "Vulnerability assessment and exploitation with Kali Linux, Nmap, Nessus, OpenVAS and Metasploit", "Web application attacks: SQL injection, XSS, CSRF – using Burp Suite and SQLmap", "Network attacks and defence: Man-in-the-Middle, ARP/DNS spoofing, traffic analysis with Wireshark", "Privilege escalation, credential attacks, social engineering/phishing and ML-based anomaly detection"], skills: ["Ethical Hacking", "Penetration Testing", "OSINT", "Vulnerability Assessment", "Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "OWASP", "Social Engineering"] },
    { title: "ISC2 CISSP Full Course & Practice Exam", by: "Jason Dion · Dion Training Solutions", status: "done", date: "Jun 2026", points: ["All 8 CISSP domains – from security & risk management to software development security", "Security governance, compliance and risk frameworks: NIST RMF / CSF, ISO/IEC 27001, PCI DSS, SABSA", "Identity and access management (IAM), secure architecture (cloud, IoT, ICS, microservices)", "Threat modelling, security assessment & testing, incident response and business continuity", "Full-length practice exam"], skills: ["CISSP", "Security Governance", "Risk Management", "NIST RMF", "IAM", "Security Architecture", "Threat Modelling", "Incident Response", "Business Continuity"] },
    { title: "AI Engineer Agentic Track: The Complete Agent & MCP Course", by: "Ed Donner · Ligency", status: "planned", points: ["Agentic AI with OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, Google ADK and AWS Strands", "Model Context Protocol (MCP): building and consuming MCP servers and tools", "Multi-agent patterns: deep research, agent teams, agents that create agents, browser agents", "Structured outputs (Pydantic), guardrails, tool calling and agent deployment (Docker, Hugging Face Spaces)", "Capstone: autonomous trading floor – 4 agents, 6 MCP servers, 44 tools"], skills: ["Agentic AI", "MCP", "OpenAI Agents SDK", "CrewAI", "LangGraph", "AutoGen", "Google ADK", "Guardrails", "Structured Outputs"] },
    { title: "AI Engineer Production Track: Deploy LLMs & Agents at Scale", by: "Ligency · Ed Donner", status: "planned", points: ["LLMOps: deploying LLM and agent SaaS apps to production on AWS, Azure, GCP and Vercel", "Serverless AI architecture – AWS Lambda, API Gateway, S3, CloudFront, SQS, App Runner", "Amazon Bedrock, Bedrock AgentCore, SageMaker and Strands Agents for multi-agent systems", "Infrastructure as Code with Terraform and CI/CD with GitHub Actions (dev / test / prod)", "Enterprise-grade AI: observability, monitoring, guardrails, security and explainability"], skills: ["LLMOps", "AWS Bedrock", "Bedrock AgentCore", "SageMaker", "Serverless", "Terraform", "CI/CD", "Observability", "AI Guardrails", "Azure", "GCP"] },
    { title: "Website Hacking / Penetration Testing", by: "Zaid Sabih · zSecurity", status: "planned", points: ["Web application penetration testing lab with Kali Linux and Metasploitable", "OWASP-class vulnerabilities: SQL injection (incl. blind SQLi), XSS, CSRF, file upload, LFI/RFI, code execution", "Reconnaissance: subdomains, hidden files and technology fingerprinting", "Exploitation and post-exploitation with Burp Suite, OWASP ZAP, BeEF and Metasploit", "Secure coding: how to fix and prevent each vulnerability"], skills: ["Web App Pentesting", "SQL Injection", "XSS", "CSRF", "File Inclusion", "Burp Suite", "OWASP ZAP", "Metasploit", "Secure Coding"] }
  ],

  /* Workshops & events – date ISO; status: attended | registered (future dates show as "Upcoming") */
  workshops: [
    { date: "2026-12-05", title: "«Hack Apertus» Basel Finals", organizer: "aiLights Association", place: "Basel", type: "Community event", status: "registered",
      about: "Finals of the Basel hackathon on Apertus, Switzerland's open large language model – top teams pitch their prototypes, fireside chat with Phoeniqs and presentations of local tech communities.",
      link: "https://luma.com/rivvlso7" },
    { date: "2026-11-24", title: "Your AI system has been compromised. What now?", organizer: "Swiss Cyber Institute", place: "Zürich", type: "Workshop", status: "registered",
      about: "Hands-on AI security incident: working through a realistic scenario – impact assessment, containment, stakeholder involvement and safe return to operation – with a structured debrief.",
      link: "https://swisscyberinstitute.com/resources/events/your-ai-system-has-been-compromised-what-now/" },
    { date: "2026-11-24", title: "Morning Bytes: AI & Data Breakfast Series", organizer: "Deloitte", place: "Zürich / virtual", type: "Breakfast session", status: "registered",
      about: "How Swiss Post built an AI-ready data platform at scale (with AWS), followed by AI Tokenomics – the cost and value economics of running AI.",
      link: "https://mkto.deloitte.com/FY27-Q2-TT-EV-AI--Data-Breakfast-Series-12-CH_Registration-page-Social.html" },
    { date: "2026-11-23", title: "Basel Data Science & AI Meetup November 2026", organizer: "Basel Data Science & AI", place: "Basel", type: "Meetup", status: "registered",
      about: "Three practical talks on ML/AI deployment: making models more efficient (FHNW), AI agents with a knowledge graph and MCP tools for data-warehouse modernisation (Swisscom), and memory design for an AI coach.",
      link: "https://www.meetup.com/basel-data-scientists/events/317093429/" },
    { date: "2026-11-23", title: "The Autonomous (SAP) SOC: AI Investigates, Humans Decide", organizer: "Swiss Cyber Institute / Xiting", place: "Online", type: "Webinar", status: "registered",
      about: "How AI agents gather evidence for SOC investigations in SAP environments – read-only access, auditability and guardrails – and where human oversight and containment decisions must stay with security professionals.",
      link: "https://us02web.zoom.us/webinar/register/WN_yDAKd02VQCCIP23xzefg6w#/registration" },
    { date: "2026-11-04", title: "AI-Enabled IT Operations – Driving Efficiency in Solution Development and Application Management", organizer: "EY Switzerland", place: "Zürich", type: "Executive roundtable", status: "attended",
      about: "How AI drives efficiency in IT operations – solution development and application management – and how to govern it safely through AI control tower capabilities.",
      link: "https://www.ey.com/en_ch/events/2026/11/ai-enabled-it-operations" },
    { date: "2026-11-03", title: "AI Business Strategy for IT Professionals", organizer: "Swiss Cyber Institute", place: "Zürich", type: "Workshop", status: "attended",
      about: "Identifying, evaluating and prioritising AI opportunities from a business perspective – connecting technology with strategic value.",
      link: "https://swisscyberinstitute.com/resources/events/ai-business-strategy-it-professionals/" },
    { date: "2026-10-28", title: "Think like a pen tester: Find the weakness before an attacker does", organizer: "Swiss Cyber Institute", place: "Zürich", type: "Workshop", status: "attended",
      about: "Hands-on security assessment in a demo lab – discovering, validating and documenting vulnerabilities from an attacker's perspective.",
      link: "https://swisscyberinstitute.com/resources/events/think-like-pen-tester-find-weakness-before-attacker-does/" },
    { date: "2026-10-27", title: "IT’s About Tech #14: Tech is consuming ever more resources – ways to escape the trap with tech", organizer: "BaselTech / swiss made software", place: "Basel", type: "Talks & networking", status: "attended",
      about: "Sustainable tech and AI: making technology less resource-hungry, AI through its whole life cycle, and turning data-center waste heat into home heating.",
      link: "https://www.tickettailor.com/events/baseltech/2434980" },
    { date: "2026-09-28", title: "Future of Controls – AI in Risk and Controls", organizer: "Deloitte", place: "Zürich", type: "Event", status: "attended",
      about: "How AI is changing internal controls, risk management and assurance.",
      link: "https://mkto.deloitte.com/FY27-Q2-TT-EV-InternalControls-ZH-CH_Registration-page-Social.html" }
  ],

  education: [
    { degree: "MSc in Computer Science and Engineering", school: "Brno University of Technology, Czech Republic", year: "2005" }
  ],

  /* Only recommendations that are publicly visible on LinkedIn – shown with initials */
  recommendations: [
    { name: "M. H. S.", role: "Project Manager at Sunrise (now Lead Core IT Infrastructure, localsearch)", text: "He brings real ownership to his work and can be trusted in critical situations—whether acting as Single Point of Contact during demanding releases or driving operational issues through to sustainable, well-thought-out solutions." },
    { name: "A. B.", role: "Former colleague (now AI Governance Lead, UBS)", text: "He has provided clear and concise executive status reports that have set off the right alarm levels at the right time, saving us money and resources." },
    { name: "P. C.", role: "Senior Technical Lead, Sunrise", text: "As a Single Point of Contact during release cycles, he coordinates cross-functional teams with clarity, accountability, and a strong focus on problem-solving." },
    { name: "E. F.", role: "Senior IT Architect, Sunrise", text: "He always shows high competence to solve issues and also very good proactivity in reporting defects and suggesting changes to improve the systems." },
    { name: "L. V.", role: "DevOps Engineer, Deutsche Telekom IT Solutions", text: "He handled sensitive data changes in a controlled and well-documented way, ensuring stability in a mission-critical environment." },
    { name: "N. O.", role: "Technical Trainer & Consultant, NicoTech Global", text: "I have collaborated with Stan on technically demanding work involving red-teaming in Agentic AI. His ability to absorb information and apply it effectively is exceptional." },
    { name: "E. D.", role: "Head of Customer Relation Platform, Sunrise", text: "Stanislav has a practical, results-driven approach and consistently contributes to improving efficiency and customer satisfaction." },
    { name: "A. R.", role: "Senior Consultant, Wipro", text: "He communicates clearly, takes full ownership of his responsibilities, and consistently contributes to team success—even beyond his immediate scope." }
  ]
};
