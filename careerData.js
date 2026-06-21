export const careerData = {
  frontend_fullstack: {
    title: "Frontend & Fullstack Developer",
    shortDesc: "Build beautiful, interactive web user interfaces and robust server-side APIs.",
    marketOutlook: {
      growth: "+22% Projected 10-Yr Growth",
      demand: "Very High",
      topIndustries: ["Technology", "E-commerce", "Finance", "Healthcare & Telehealth", "SaaS Startups"]
    },
    salary: {
      entry: 78000,
      mid: 112000,
      senior: 165000
    },
    roadmap: [
      {
        title: "Stage 1: Client-Side Foundations",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master semantic HTML5 and CSS3 modern layouts (Flexbox, Grid)",
          "Learn responsive design, media queries, and mobile-first approach",
          "Understand Javascript essentials: DOM Manipulation, Event Listeners, ES6+ syntax"
        ]
      },
      {
        title: "Stage 2: Advanced JS & Modern Frameworks",
        duration: "Weeks 7 - 12",
        milestones: [
          "Understand asynchronous JS: Promises, async/await, and fetching API data",
          "Learn React: components, props, hooks (useState, useEffect), and virtual DOM",
          "Add routing (React Router) and state management (Redux Toolkit or Context API)"
        ]
      },
      {
        title: "Stage 3: Server-Side & Database Integration",
        duration: "Weeks 13 - 18",
        milestones: [
          "Understand Node.js runtime and express.js framework basics",
          "Learn RESTful API design, HTTP status codes, and request methods",
          "Connect to databases: SQL (PostgreSQL) or NoSQL (MongoDB) using ORMs"
        ]
      },
      {
        title: "Stage 4: Deployment & Developer Tooling",
        duration: "Weeks 19 - 24",
        milestones: [
          "Master Version Control with Git & GitHub workflows",
          "Learn Webpack/Vite bundlers and environmental variables",
          "Deploy frontend (Vercel/Netlify) and backend (Render/AWS/Heroku)"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "HTML5 / CSS3 / Flexbox / Grid", category: "Frontend Core" },
        { name: "Vanilla Javascript & ES6+", category: "Programming" },
        { name: "React.js / Next.js", category: "Frameworks" },
        { name: "Node.js & Express.js", category: "Backend" },
        { name: "SQL (PostgreSQL) / MongoDB", category: "Databases" },
        { name: "RESTful API Integration & JSON", category: "Networking" },
        { name: "Git Version Control", category: "Tooling" },
        { name: "Tailwind CSS", category: "Styling" }
      ],
      soft: [
        "Collaborative Problem Solving",
        "Attention to Visual Detail",
        "Technical Communication",
        "Empathy for the End User"
      ]
    },
    education: {
      certifications: [
        { name: "Meta Front-End Developer Professional Certificate (Coursera)", cost: "$39/mo", difficulty: "Beginner" },
        { name: "AWS Certified Developer - Associate", cost: "$150", difficulty: "Intermediate" },
        { name: "freeCodeCamp Responsive Web Design Certificate", cost: "Free", difficulty: "Beginner" }
      ],
      bootcamps: "Recommended for career switchers needing structured accountability and group work. Ensure they offer portfolio building over just algorithmic puzzles.",
      degreeRequired: "Not strictly required. Over 65% of active frontend/fullstack developers succeed with self-taught routes, bootcamps, or vocational certifications backed by a strong GitHub portfolio."
    },
    portfolio: {
      title: "Interactive Collaboration & Project Kanban Dashboard",
      description: "A full-stack collaborative project management tool inspired by Trello. Allows real-time card movements, project workspaces, subtasks, and user authorization.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io"],
      features: [
        "User registration and secure authentication using JWT",
        "Dynamic drag-and-drop workspace boards, columns, and task cards",
        "Real-time notifications for card updates (via Socket.io Websockets)",
        "Search filter for tags, assigned members, and due dates",
        "Responsive, glassmorphic UI styled for desktop and mobile displays"
      ],
      steps: [
        "Initialize express API repo, set up database schemas for Users, Boards, Columns, Cards.",
        "Build signup/login routes using bcrypt hashing and JWT tokens.",
        "Implement CRUD endpoints for boards, columns, and cards; test using Postman.",
        "Create React app, set up Tailwind CSS, and build responsive dashboard layout.",
        "Integrate drag-and-drop mechanics using react-beautiful-dnd or @hello-pangea/dnd.",
        "Add dynamic state synchronization with the backend and add Socket.io for real-time collaboration."
      ]
    },
    resume: {
      keywords: ["React.js", "Next.js", "RESTful APIs", "JWT Authentication", "Git", "Redux", "SQL", "Webpack", "Vite", "JSON", "CI/CD", "Responsive Design", "NoSQL", "Express.js", "Node.js"],
      actionVerbs: ["Developed", "Optimized", "Architected", "Deployed", "Implemented", "Refactored", "Integrated", "Accelerated"],
      metricsTemplate: "Optimized React bundle sizes and lazy-loaded modules, accelerating initial page loading speed by 42% and increasing user session duration by 15%."
    },
    quiz: [
      {
        question: "Which CSS layout system is optimized for one-dimensional layouts (either a row OR a column)?",
        options: ["CSS Grid", "Flexbox", "Floats", "Absolute Positioning"],
        correctAnswerIndex: 1,
        explanation: "Flexbox (Flexible Box Layout) is designed for single-dimensional layouts (either row or column), whereas CSS Grid is designed for two-dimensional layouts (rows and columns simultaneously)."
      },
      {
        question: "What is the primary function of the React 'useEffect' hook?",
        options: [
          "To force a component to re-render constantly",
          "To style components dynamically",
          "To perform side effects like data fetching, subscriptions, or manual DOM changes",
          "To initialize variables that shouldn't persist across renders"
        ],
        correctAnswerIndex: 2,
        explanation: "useEffect is used to synchronize components with external systems, handling side effects like API requests, event listeners, and timers after rendering occurs."
      },
      {
        question: "In Javascript, what is the key difference between '==' and '==='?",
        options: [
          "There is no difference, they perform the same comparison",
          "== compares values and performs type coercion; === compares both value and type strictly",
          "=== converts values to strings before comparing",
          "== is faster to run in modern web browsers"
        ],
        correctAnswerIndex: 1,
        explanation: "== checks for equality of value with automatic type conversion (e.g. 5 == '5' is true). === checks for strict equality without type coercion (e.g. 5 === '5' is false)."
      },
      {
        question: "Which HTTP method is designed for partial updates to an existing resource on a server?",
        options: ["POST", "PUT", "PATCH", "DELETE"],
        correctAnswerIndex: 2,
        explanation: "PATCH is used for applying partial modifications to a resource. PUT is typically used to replace the entire resource, and POST creates a new resource."
      },
      {
        question: "What does the 'npm' acronym stand for in developer environments?",
        options: ["Node Program Manager", "Node Package Manager", "New Project Method", "Network Protocol Module"],
        correctAnswerIndex: 1,
        explanation: "npm stands for Node Package Manager, the default package manager for the Node.js JavaScript runtime environment."
      }
    ],
    interviewPrep: [
      {
        question: "Explain event delegation in Javascript and why it is useful.",
        type: "technical",
        hint: "Think about event bubbling up the DOM tree to a common ancestor, rather than attaching event listeners to individual child elements.",
        keywords: ["bubbling", "listener", "memory", "ancestor", "dynamic"]
      },
      {
        question: "Tell me about a time you had to debug a complex web application issue. How did you resolve it?",
        type: "behavioral",
        hint: "Structure your response using the STAR method. Detail how you isolated the issue (DevTools, logs), actions taken, and the quantified outcome.",
        keywords: ["situation", "task", "action", "result", "debugger", "resolved"]
      },
      {
        question: "What is the virtual DOM in React and how does it optimize rendering performance?",
        type: "technical",
        hint: "React keeps a lightweight memory copy of the UI, compares it using a diffing algorithm, and updates only the changed elements in the real DOM.",
        keywords: ["reconcile", "diffing", "memory", "repaint", "efficient"]
      },
      {
        question: "How do you ensure web pages are accessible to users with screen readers or keyboard-only navigation?",
        type: "technical",
        hint: "Mention semantic HTML elements, ARIA attributes, image alt tags, color contrast ratios, and keyboard focus outlines.",
        keywords: ["aria", "semantic", "tabindex", "contrast", "wcag", "screen reader"]
      },
      {
        question: "Describe a situation where you had a disagreement with a team member about technical architecture. How did you handle it?",
        type: "behavioral",
        hint: "Focus on collaboration, objective evaluation (pros/cons, metrics, benchmarking), compromise, and alignment on business goals.",
        keywords: ["compromise", "listening", "pros", "cons", "objective", "alignment"]
      }
    ],
    learningResources: {
      paid: [
        { title: "The Complete 2026 Web Development Bootcamp (Angela Yu - Udemy)", price: "$15-$25", duration: "65 hours" },
        { title: "Frontend Masters - Front-End Developer Path", price: "$39/mo", duration: "Self-paced subscription" }
      ],
      youtube: [
        { channel: "freeCodeCamp.org", desc: "Full-length 10+ hour comprehensive tutorials on React, Javascript, Node, and CSS." },
        { channel: "Web Dev Simplified (Kyle Cook)", desc: "Bite-sized, practical videos explaining modern JS features, CSS layout tricks, and React patterns." }
      ]
    }
  },

  data_science_ml: {
    title: "Data Scientist & ML Engineer",
    shortDesc: "Extract insights from complex datasets and build predictive machine learning models.",
    marketOutlook: {
      growth: "+35% Projected 10-Yr Growth",
      demand: "Extremely High",
      topIndustries: ["Tech & AI Labs", "Finance & Risk Analysis", "Healthcare Analytics", "Retail & Recommendations", "Logistics"]
    },
    salary: {
      entry: 85000,
      mid: 125000,
      senior: 185000
    },
    roadmap: [
      {
        title: "Stage 1: Mathematics & Python Foundations",
        duration: "Weeks 1 - 6",
        milestones: [
          "Learn Python syntax, control structures, and standard libraries",
          "Master core mathematics: Linear Algebra (matrices, vectors), Calculus (gradients), and Probability & Statistics",
          "Perform data analysis with NumPy and Pandas (data frames, grouping, merging)"
        ]
      },
      {
        title: "Stage 2: Data Wrangling & Visualizations",
        duration: "Weeks 7 - 12",
        milestones: [
          "Clean missing values, handle outliers, and perform feature scaling",
          "Build visual dashboards using Matplotlib, Seaborn, and Plotly",
          "Write complex SQL queries for relational data extraction"
        ]
      },
      {
        title: "Stage 3: Classical Machine Learning & Scikit-Learn",
        duration: "Weeks 13 - 18",
        milestones: [
          "Understand supervised learning (Linear/Logistic Regression, Decision Trees, Random Forests)",
          "Learn unsupervised learning (K-Means clustering, Principal Component Analysis - PCA)",
          "Apply model evaluation: cross-validation, precision, recall, F1 score, ROC-AUC metrics"
        ]
      },
      {
        title: "Stage 4: Deep Learning & ML Ops",
        duration: "Weeks 19 - 24",
        milestones: [
          "Learn Deep Learning fundamentals using PyTorch or TensorFlow frameworks",
          "Understand neural network layers: CNNs (images) and Transformer architectures (NLP)",
          "Deploy models as APIs using Flask/FastAPI and host them using Docker"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Python (Pandas / NumPy / Scikit-Learn)", category: "Programming" },
        { name: "SQL & Relational Databases", category: "Databases" },
        { name: "Probability & Inferential Statistics", category: "Mathematics" },
        { name: "Data Visualizations (Matplotlib / Seaborn)", category: "Analysis" },
        { name: "PyTorch / TensorFlow", category: "Deep Learning" },
        { name: "Model Evaluation & Hyperparameter Tuning", category: "ML Modeling" },
        { name: "Git Version Control", category: "Tooling" },
        { name: "API Deployment (FastAPI / Docker)", category: "MLOps" }
      ],
      soft: [
        "Data Storytelling",
        "Business Acumen",
        "Analytical Curiosity",
        "Scientific Skepticism"
      ]
    },
    education: {
      certifications: [
        { name: "IBM Data Science Professional Certificate (Coursera)", cost: "$39/mo", difficulty: "Beginner" },
        { name: "Google Advanced Data Analytics Professional Certificate", cost: "$39/mo", difficulty: "Intermediate" },
        { name: "TensorFlow Developer Certificate", cost: "$100", difficulty: "Advanced" }
      ],
      bootcamps: "Helpful if transitioning from a non-quantitative background, but ensure the program emphasizes coding from scratch, statistical rigor, and cloud deployments over pre-built GUI modeling tools.",
      degreeRequired: "Frequently requested. While 55% have STEM bachelor's degrees, around 40% hold Masters or Ph.Ds. However, strong open-source research and Kaggle accomplishments are increasingly valued."
    },
    portfolio: {
      title: "End-to-End Customer Churn Prediction Engine",
      description: "A machine learning pipeline that predicts whether banking customers will churn. Features exploratory data analysis (EDA), custom ETL pipeline, model benchmarking, and an API endpoint.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "FastAPI", "Docker", "Matplotlib"],
      features: [
        "Comprehensive Exploratory Data Analysis Jupyter Notebook detailing correlation matrices and feature distribution plots",
        "Custom preprocessing pipelines using Scikit-Learn pipelines (One-hot encoding, scaling, imputation)",
        "Tuned model comparing Random Forest, Logistic Regression, and XGBoost with optuna optimization",
        "Detailed performance dashboard featuring ROC-AUC curve, confusion matrix, and feature importances",
        "FastAPI backend containerized with Docker, hosting model inference endpoints"
      ],
      steps: [
        "Download public churn dataset (e.g., Kaggle Telecom/Bank Churn dataset).",
        "Perform thorough EDA, noting class imbalances and skewness.",
        "Implement target encoding, handle missing records, and balance dataset using SMOTE.",
        "Benchmark models; optimize hyperparameters of XGBoost using GridSearch or Optuna.",
        "Serialize model using Joblib and wrap inside FastAPI predict router.",
        "Write Dockerfile to bundle app, and write unit tests for input schema validation (Pydantic)."
      ]
    },
    resume: {
      keywords: ["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "PyTorch", "TensorFlow", "FastAPI", "Docker", "Machine Learning", "Exploratory Data Analysis", "A/B Testing", "Supervised Learning", "Regression", "Random Forest"],
      actionVerbs: ["Engineered", "Modeled", "Extracted", "Analyzed", "Optimized", "Formulated", "Predicted", "Visualized"],
      metricsTemplate: "Engineered a custom gradient boosting classification model predicting churn, yielding an 89% F1-Score, reducing customer retention costs by 18% (approx. $240K/yr)."
    },
    quiz: [
      {
        question: "What problem is Regularization (L1 Lasso / L2 Ridge) designed to solve in Machine Learning?",
        options: [
          "Slow model training speeds",
          "Overfitting (high variance)",
          "Underfitting (high bias)",
          "Having too little training data"
        ],
        correctAnswerIndex: 1,
        explanation: "Regularization adds a penalty term to the loss function to constrain coefficients, preventing the model from fitting training noise (overfitting) and helping it generalize better to unseen data."
      },
      {
        question: "When evaluating a model with high class imbalance (e.g., 99% negative, 1% positive), why is Accuracy a poor metric?",
        options: [
          "It takes too long to compute",
          "It ignores negative samples entirely",
          "A dummy model predicting 'negative' for all samples achieves 99% accuracy but fails to detect any positive samples",
          "It can only be computed for regression tasks, not classification"
        ],
        correctAnswerIndex: 2,
        explanation: "If only 1% of the classes are positive, a model can simply output 'negative' for everything and be 99% accurate, rendering accuracy useless. Precision, Recall, F1-Score, and ROC-AUC are far better in this scenario."
      },
      {
        question: "Which of the following describes the K-Means clustering algorithm?",
        options: [
          "Supervised learning algorithm used to predict continuous numbers",
          "Unsupervised learning algorithm that groups data points into K clusters based on distance centroids",
          "A deep neural network structure for natural language translation",
          "A regression technique used for forecasting stock market trends"
        ],
        correctAnswerIndex: 1,
        explanation: "K-Means is a popular unsupervised algorithm that partitions data into K clusters. It iteratively adjusts centroids to minimize the distance between data points and their nearest cluster center."
      },
      {
        question: "What does SQL stands for in data administration fields?",
        options: [
          "System Query Language",
          "Structured Query Language",
          "Sequential Question Loop",
          "Source Quantitative Log"
        ],
        correctAnswerIndex: 1,
        explanation: "SQL stands for Structured Query Language, the standard programming language designed for managing and query data stored in relational database management systems."
      },
      {
        question: "In statistics, what is Type I error?",
        options: [
          "Failing to reject a false Null Hypothesis (False Negative)",
          "Rejecting a true Null Hypothesis (False Positive)",
          "Errors caused by hardware floating-point failures",
          "An error resulting from small dataset sample sizing"
        ],
        correctAnswerIndex: 1,
        explanation: "A Type I error is a False Positive. It occurs when you reject a true null hypothesis, concluding that an effect exists when it actually does not."
      }
    ],
    interviewPrep: [
      {
        question: "Explain the Bias-Variance tradeoff in machine learning.",
        type: "technical",
        hint: "Bias is error due to overly simplistic assumptions (underfitting). Variance is error due to overly complex modeling fitting noise (overfitting). Minimizing both is key.",
        keywords: ["overfitting", "underfitting", "simple", "complex", "noise", "tradeoff"]
      },
      {
        question: "How do you handle missing values in a dataset? What are the implications of each method?",
        type: "technical",
        hint: "Mention imputation (mean, median, mode, or predictive imputation like KNN), deletion (row or column removal), and how deletion can introduce bias.",
        keywords: ["imputation", "deletion", "median", "knn", "bias", "mean"]
      },
      {
        question: "Explain how a Random Forest model works under the hood.",
        type: "technical",
        hint: "Mention ensemble learning, bagging (Bootstrap Aggregation), building multiple decision trees on random subsets of data/features, and voting/averaging.",
        keywords: ["ensemble", "bagging", "decision tree", "bootstrap", "voting", "aggregate"]
      },
      {
        question: "Tell me about a time you translated statistical insight into a direct business decision.",
        type: "behavioral",
        hint: "Describe the raw data, the statistical testing/modeling applied (e.g. A/B testing), how you communicated the insight to stakeholders, and the monetary or operational result.",
        keywords: ["situation", "task", "action", "result", "stakeholders", "translated", "metric"]
      },
      {
        question: "What is A/B testing and how do you determine statistical significance?",
        type: "technical",
        hint: "Mention randomized control trials, null and alternative hypotheses, p-values, significance levels (alpha), statistical power, and t-tests or z-tests.",
        keywords: ["hypothesis", "p-value", "significance", "control", "variant", "alpha", "power"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Machine Learning A-Z: AI, Python & R (Kirill Eremenko - Udemy)", price: "$15-$30", duration: "44 hours" },
        { title: "Deep Learning Specialization (Andrew Ng - Coursera)", price: "$49/mo", duration: "approx. 3 months" }
      ],
      youtube: [
        { channel: "StatQuest with Josh Starmer", desc: "Fantastic intuitive explanations of complex statistics, machine learning algorithms, and neural networks with clear graphics." },
        { channel: "3Blue1Brown", desc: "Visually stunning explanations of linear algebra, calculus, and neural network foundations." }
      ]
    }
  },

  ux_ui_design: {
    title: "UX/UI Designer",
    shortDesc: "Design intuitive digital interfaces, build prototypes, and structure optimal user journeys.",
    marketOutlook: {
      growth: "+16% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["Creative Agencies", "Software Companies", "Mobile App Development", "E-Commerce", "Consultancy Firms"]
    },
    salary: {
      entry: 68000,
      mid: 98000,
      senior: 145000
    },
    roadmap: [
      {
        title: "Stage 1: UX Research & User Behavior",
        duration: "Weeks 1 - 6",
        milestones: [
          "Understand user-centered design principles and UX methodologies",
          "Conduct user interviews, create personas, and construct empathy maps",
          "Design user flows, wireframes, and outline information architecture (IA)"
        ]
      },
      {
        title: "Stage 2: UI Design Principles & Figma Mastery",
        duration: "Weeks 7 - 12",
        milestones: [
          "Master Figma vector tools, auto-layouts, frames, and components",
          "Apply typography scales, visual hierarchies, and grids",
          "Learn color theory, contrast ratios, and accessible design principles (WCAG)"
        ]
      },
      {
        title: "Stage 3: Interactive Prototyping & Testing",
        duration: "Weeks 13 - 18",
        milestones: [
          "Build high-fidelity prototypes in Figma with micro-interactions and transitions",
          "Conduct usability testing and iterate designs based on user feedback",
          "Document design specs, grids, and style guidelines for developers"
        ]
      },
      {
        title: "Stage 4: Design Systems & Portfolio Design",
        duration: "Weeks 19 - 24",
        milestones: [
          "Build reusable UI component kits (buttons, fields, modals) with variants",
          "Understand hand-off procedures and code constraints (HTML/CSS)",
          "Construct a professional case-study portfolio outlining problem, research, testing, and UI"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Figma (Auto-Layout / Component Variants)", category: "Design Tools" },
        { name: "Wireframing & Information Architecture", category: "UX Core" },
        { name: "User Research & Persona Building", category: "UX Research" },
        { name: "High-Fidelity Interactive Prototyping", category: "Interactive Design" },
        { name: "Visual Hierarchy & Typography", category: "UI Core" },
        { name: "WCAG Accessibility Guidelines", category: "Accessibility" },
        { name: "Usability Testing & Analytics", category: "Evaluation" },
        { name: "Basic HTML/CSS understanding", category: "Developer Hand-off" }
      ],
      soft: [
        "Empathy & Active Listening",
        "Constructive Feedback Handling",
        "Storytelling & Presentation",
        "Cross-functional Collaboration"
      ]
    },
    education: {
      certifications: [
        { name: "Google UX Design Professional Certificate (Coursera)", cost: "$39/mo", difficulty: "Beginner" },
        { name: "Interaction Design Foundation (IxDF) UX Course Certificates", cost: "$16/mo", difficulty: "Beginner-Advanced" },
        { name: "NN/g (Nielsen Norman Group) UX Certification", cost: "$2000+", difficulty: "Professional" }
      ],
      bootcamps: "Excellent for visual assets and direct project critiques, but verify that the school encourages deep user research processes over pretty but non-functional Dribbble-style UI cards.",
      degreeRequired: "Not required. A degree in Human-Computer Interaction, Psychology, or Graphic Design is advantageous, but 70%+ of recruiting focus is based on portfolio case studies showing problem-solving workflows."
    },
    portfolio: {
      title: "Telehealth Mobile App for Elderly Patient Care",
      description: "A comprehensive UX case study and high-fidelity prototype of a telehealth mobile app designed for users aged 65+. Emphasizes accessibility, simple patterns, and clear visual guidance.",
      techStack: ["Figma", "FigJam (Research)", "Maze (Usability Testing)", "Miro (Card Sorting)"],
      features: [
        "Interactive User Research summary, detailing survey analysis of 50+ seniors",
        "A clear Information Architecture map showing intuitive, shallow menu structures",
        "Lo-fi paper wireframes transitioning to interactive mid-fi design grids",
        "Fully prototype dashboard featuring oversized hit-targets and contrast-tested controls",
        "A usability testing report detailing how task completion rate rose from 60% to 95% after font modifications"
      ],
      steps: [
        "Conduct competitive analysis of existing medical apps; note shortcomings for senior demographics.",
        "Perform user interviews, construct 2 primary personas, and map user journey flows.",
        "Draw paper wireframes to outline primary flows: booking a doctor and viewing test results.",
        "Convert wireframes to digital designs in Figma using an 8pt grid system.",
        "Build a component library with large clickable areas (min 48dp) and clear font weights.",
        "Deploy prototype to Maze, collect testing responses, and document iterations."
      ]
    },
    resume: {
      keywords: ["Figma", "Wireframing", "Prototyping", "User Research", "Information Architecture", "Usability Testing", "Design System", "WCAG", "Interaction Design", "User Journeys", "Card Sorting", "Persona Development", "Heuristic Evaluation"],
      actionVerbs: ["Designed", "Researched", "Prototyped", "Iterated", "Facilitated", "Synthesized", "Mapped", "Standardized"],
      metricsTemplate: "Redesigned checkout conversion flow based on usability test findings, boosting task completion rates by 35% and reducing cart abandonment by 14%."
    },
    quiz: [
      {
        question: "Which term refers to the visual layout rule that states items placed close together are perceived as sharing similar functions or traits?",
        options: ["Fitts's Law", "Law of Proximity (Gestalt)", "Hick's Law", "Occam's Razor"],
        correctAnswerIndex: 1,
        explanation: "The Gestalt Law of Proximity states that objects near each other tend to be grouped together in the user's mind, creating immediate visual structure."
      },
      {
        question: "What is the minimum recommended size for touch targets on mobile devices to ensure easy tapping?",
        options: ["24px x 24px", "32px x 32px", "48px x 48px", "64px x 64px"],
        correctAnswerIndex: 2,
        explanation: "WCAG guidelines recommend a minimum touch target size of 48x48 CSS pixels (or 9mm x 9mm) to prevent user frustration and accidental taps."
      },
      {
        question: "What is the primary difference between a wireframe and a prototype?",
        options: [
          "Wireframes are colorful; prototypes are gray",
          "Wireframes outline structure and layout; prototypes add interactivity and mimic real app behavior",
          "Wireframes are for developers; prototypes are for marketers",
          "Wireframes are drawn on paper; prototypes are only built in HTML"
        ],
        correctAnswerIndex: 1,
        explanation: "Wireframes are static, low-fidelity skeletons showing structural layout. Prototypes are interactive models that simulate actions, transitions, and user flows."
      },
      {
        question: "What is Hick's Law in UI design?",
        options: [
          "User attention increases as screen size gets larger",
          "The time it takes to make a decision increases with the number and complexity of choices",
          "Users spend most of their time on other websites",
          "A user can only remember 7 items in working memory at once"
        ],
        correctAnswerIndex: 1,
        explanation: "Hick's Law states that the time and effort to make a decision increases with the number of options presented. Reducing menu items and options improves usability."
      },
      {
        question: "What does WCAG stand for in accessible product design?",
        options: [
          "Web Creator Accessibility Guide",
          "Web Content Accessibility Guidelines",
          "World Consortium Advisory Group",
          "Web Client Assembly Group"
        ],
        correctAnswerIndex: 1,
        explanation: "WCAG stands for Web Content Accessibility Guidelines, the global standard for making web content accessible to individuals with disabilities."
      }
    ],
    interviewPrep: [
      {
        question: "Walk me through your design process, using a specific project as an example.",
        type: "behavioral",
        hint: "Describe your sequence: Empathize (research), Define (problem statement), Ideate (sketching), Prototype (Figma), and Test (usability reviews). Highlight how user data drove decisions.",
        keywords: ["empathize", "define", "ideate", "prototype", "test", "iteration", "research"]
      },
      {
        question: "How do you handle negative feedback on your designs from developers or product managers?",
        type: "behavioral",
        hint: "Emphasize removing ego, listening to understand constraints (time, code capabilities, business requirements), conducting testing to resolve debates, and collaborating on compromise.",
        keywords: ["feedback", "ego", "collaborate", "objective", "testing", "constraints"]
      },
      {
        question: "What is Fitts's Law, and how do you apply it to UI design?",
        type: "technical",
        hint: "Fitts's Law states that the time to acquire a target is a function of the target's distance and size. Buttons should be large and close to the natural mouse path.",
        keywords: ["fitts", "size", "distance", "target", "clickable", "distance"]
      },
      {
        question: "What are your strategies for designing for web accessibility (WCAG compliance)?",
        type: "technical",
        hint: "Discuss color contrast checks (minimum 4.5:1 ratio for body), keyboard navigability, focus states, alt text for images, and labeling form controls clearly.",
        keywords: ["contrast", "wcag", "keyboard", "focus", "alt text", "label"]
      },
      {
        question: "Explain the difference between qualitative and quantitative user research.",
        type: "technical",
        hint: "Qualitative research focuses on 'why' (interviews, observational studies). Quantitative research focuses on 'what/how many' (analytics, surveys, heatmaps, conversion rates).",
        keywords: ["qualitative", "quantitative", "why", "what", "metrics", "interview", "survey"]
      }
    ],
    learningResources: {
      paid: [
        { title: "User Experience Design Essentials (Udemy)", price: "$15-$25", duration: "13 hours" },
        { title: "Interaction Design Foundation Membership", price: "$16/mo", duration: "Access to all UX certified programs" }
      ],
      youtube: [
        { channel: "Figma", desc: "The official channel. Essential for playlists on auto-layout, design systems, and prototype flows." },
        { channel: "Flux Academy", desc: "Excellent tutorials covering creative UI execution, typography, layouts, and design trends." }
      ]
    }
  },

  product_management: {
    title: "Product Manager",
    shortDesc: "Define product strategy, lead cross-functional squads, and coordinate execution from roadmap to launch.",
    marketOutlook: {
      growth: "+18% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["Software Companies", "Fintech & Payment Platforms", "Hardware & Consumer Tech", "Logistics", "Digital Consulting"]
    },
    salary: {
      entry: 82000,
      mid: 120000,
      senior: 172000
    },
    roadmap: [
      {
        title: "Stage 1: Product Fundamentals & Agile Methodologies",
        duration: "Weeks 1 - 6",
        milestones: [
          "Understand the product lifecycle (Discovery, Delivery, Iteration)",
          "Learn Scrum and Kanban frameworks: sprints, standups, retro, and planning",
          "Master writing comprehensive PRDs (Product Requirement Documents) and User Stories"
        ]
      },
      {
        title: "Stage 2: Metrics, Analytics & Product Strategy",
        duration: "Weeks 7 - 12",
        milestones: [
          "Learn key SaaS and business metrics: CAC, LTV, ARR, Churn, NPS",
          "Master product analytics tools (Mixpanel, Amplitude, Google Analytics)",
          "Study competitive analysis models and market sizing techniques (TAM/SAM)"
        ]
      },
      {
        title: "Stage 3: Customer Discovery & Prioritization Frameworks",
        duration: "Weeks 13 - 18",
        milestones: [
          "Conduct target user discovery interviews and synthesize user problem sets",
          "Apply prioritization matrices: RICE (Reach, Impact, Confidence, Effort), MoSCoW, Kano",
          "Build visual roadmaps aligning with high-level business objectives"
        ]
      },
      {
        title: "Stage 4: Product Delivery & Stakeholder Management",
        duration: "Weeks 19 - 24",
        milestones: [
          "Manage engineering sprint backlogs, task refinements, and QA standards",
          "Develop Go-To-Market (GTM) launch plans and release notes templates",
          "Practice cross-functional alignment and steering committee presentations"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Product Analytics (Amplitude / Mixpanel)", category: "Analytics" },
        { name: "Jira / Confluence / Asana", category: "Project Tooling" },
        { name: "Prioritization Frameworks (RICE / Kano)", category: "Strategy" },
        { name: "A/B Testing & Feature Flagging", category: "Experimentation" },
        { name: "PRD Writing & User Story Mapping", category: "Requirements" },
        { name: "Market Research & Competitive Analysis", category: "Market Strategy" },
        { name: "Agile / Scrum Methodologies", category: "Execution" },
        { name: "Basic SQL & Database queries", category: "Data Access" }
      ],
      soft: [
        "Influence Without Authority",
        "Ruthless Prioritization",
        "Clear Written & Oral Communication",
        "Conflict Resolution"
      ]
    },
    education: {
      certifications: [
        { name: "Google Project Management Professional Certificate (Coursera)", cost: "$39/mo", difficulty: "Beginner" },
        { name: "Certified Scrum Product Owner (CSPO)", cost: "$400-$600", difficulty: "Beginner-Intermediate" },
        { name: "Pragmatic Institute Product Management Certification", cost: "$1195+", difficulty: "Professional" }
      ],
      bootcamps: "Can provide a good portfolio simulation and peer network, but evaluate program faculty to ensure they are active PM leads, not theoretical instructors.",
      degreeRequired: "Not mandatory. MBAs or computer science/engineering degrees are common, but a successful pathway can be built by transitioning internally from Support, Design, or Engineering roles."
    },
    portfolio: {
      title: "Product PRD & Go-To-Market Launch Strategy",
      description: "A comprehensive Product Requirement Document (PRD) and feature launch campaign for an AI-powered meeting summary integration within Slack.",
      techStack: ["Jira", "Confluence / Notion", "Miro (Story Mapping)", "Amplitude (Mock data analysis)"],
      features: [
        "Executive Summary and Business Opportunity validation (using TAM estimation)",
        "Detailed functional requirements with User Stories, Acceptance Criteria, and Edge Cases",
        "Interactive User Story Map created on Miro outlining release phases (MVP vs V2)",
        "RICE Matrix scoring sheet demonstrating how features were selected/prioritized",
        "Detailed launch playbook outlining sales alignment, release channels, and core metrics (activation rate, CSAT)"
      ],
      steps: [
        "Conduct customer interviews with remote team managers to identify core meeting pain points.",
        "Formulate a problem statement and write the PRD objective section.",
        "Draw out UI wireframes of the Slack notification flow, working with design patterns.",
        "Generate user stories; perform RICE analysis to define the MVP scope.",
        "Draft the product metrics tracking matrix, naming specific events for telemetry logging.",
        "Compile the launch playbook and present it as a complete case study slide deck."
      ]
    },
    resume: {
      keywords: ["PRD Writing", "RICE Prioritization", "Product Roadmap", "User Stories", "Agile", "Scrum", "Customer Discovery", "A/B Testing", "KPIs", "SaaS Metrics", "Go-To-Market (GTM)", "Cross-Functional Leadership", "SQL", "Amplitude", "Jira"],
      actionVerbs: ["Launched", "Prioritized", "Led", "Defined", "Drove", "Collaborated", "Increased", "Analyzed"],
      metricsTemplate: "Drove the design and launch of the checkout referral widget, leading a team of 4 engineers and achieving an 18% improvement in customer referral rates inside 90 days."
    },
    quiz: [
      {
        question: "Which component of the RICE prioritization framework evaluates our certainty about our estimates?",
        options: ["Reach", "Impact", "Confidence", "Effort"],
        correctAnswerIndex: 2,
        explanation: "In RICE, Confidence is represented as a percentage (e.g. 100% for high, 80% for medium, 50% for low) to adjust scores when assumptions lack backing data."
      },
      {
        question: "What does the term 'MVP' stand for in lean startup methodologies?",
        options: ["Most Valued Person", "Minimum Viable Product", "Market Verification Phase", "Maximum Volume Production"],
        correctAnswerIndex: 1,
        explanation: "MVP stands for Minimum Viable Product, which is the version of a new product that allows a team to collect the maximum amount of validated learning with the least effort."
      },
      {
        question: "Which product metric measures the percentage of users who stop subscribing or using a product over a given timeframe?",
        options: ["NPS", "LTV", "Churn Rate", "CAC"],
        correctAnswerIndex: 2,
        explanation: "Churn rate is the percentage of customers who cancel or do not renew their subscriptions. Keeping churn low is essential for SaaS business health."
      },
      {
        question: "What is the primary role of a Product Manager during a Sprint Planning meeting?",
        options: [
          "To assign daily tasks to engineers",
          "To estimate the difficulty points of tasks",
          "To clarify the business requirements, goals, and priority of the items in the product backlog",
          "To write code for the high-priority features"
        ],
        correctAnswerIndex: 2,
        explanation: "The PM owns the product backlog and priorities. In Sprint Planning, they align the engineering team on *what* needs to be built next and *why*, while engineers estimate *how much* can be accomplished."
      },
      {
        question: "What is the Net Promoter Score (NPS) used to evaluate?",
        options: [
          "System hardware response times",
          "Customer loyalty and likelihood to recommend the product",
          "Total advertising spend efficiency",
          "Monthly recurring profit totals"
        ],
        correctAnswerIndex: 1,
        explanation: "NPS is a metric derived from asking users how likely they are to recommend a product on a scale of 0-10, classifying them as promoters, passives, or detractors."
      }
    ],
    interviewPrep: [
      {
        question: "How do you decide what features to build next when resources are constrained?",
        type: "technical",
        hint: "Explain your framework: Gather user feedback/data, map to business KPIs, prioritize using quantitative models like RICE, coordinate with engineering on cost, and build MVP to gather data.",
        keywords: ["rice", "kpis", "feedback", "effort", "mvp", "data", "alignment"]
      },
      {
        question: "Tell me about a time you launched a product or feature that failed. What did you learn?",
        type: "behavioral",
        hint: "Detail the hypothesis, what metrics failed, how you investigated (surveys/session logs), what you learned, and how that learning influenced your subsequent product iterations.",
        keywords: ["situation", "task", "action", "result", "failed", "hypothesis", "learned", "metrics"]
      },
      {
        question: "How do you manage influence and alignment with engineering teams when you have no formal authority over them?",
        type: "behavioral",
        hint: "Discuss building trust, translating business goals into developer context, involving engineers in design discovery, using data to settle debates, and respecting engineering's technical decisions.",
        keywords: ["trust", "influence", "collaboration", "empathy", "data", "respect", "involve"]
      },
      {
        question: "How would you design a product metrics dashboard for a new ride-sharing app?",
        type: "technical",
        hint: "Categorize metrics: Acquisition (downloads), Activation (first ride), Engagement (rides/week), Retention (churn), and Monetization (average trip margin). Highlight the 'North Star' metric.",
        keywords: ["north star", "acquisition", "activation", "engagement", "retention", "monetization", "rides"]
      },
      {
        question: "What is the difference between product discovery and product delivery?",
        type: "technical",
        hint: "Discovery focuses on building the *right thing* (user interviews, prototypes, finding value/usability). Delivery focuses on building the *thing right* (sprint execution, QA, shipping code).",
        keywords: ["discovery", "delivery", "right thing", "thing right", "value", "sprints", "quality"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Become a Product Manager (Cole Mercer - Udemy)", price: "$15-$25", duration: "13 hours" },
        { title: "Product Management Modern Certifications (Product School)", price: "$3000+", duration: "Live Cohort Courses" }
      ],
      youtube: [
        { channel: "Product School", desc: "Features masterclasses, interviews, and presentations by active Product Leads from Google, Netflix, and Meta." },
        { channel: "Dan Olsen", desc: "Deep lectures on lean product design, hypothesis validation, and prioritization systems." }
      ]
    }
  },

  cybersecurity: {
    title: "Cybersecurity Analyst",
    shortDesc: "Protect computer networks, monitor security events, audit systems, and respond to cyber threats.",
    marketOutlook: {
      growth: "+32% Projected 10-Yr Growth",
      demand: "Extremely High",
      topIndustries: ["Banking & Finance", "Government Agencies", "Healthcare Systems", "Security Firms", "Defense Contractors"]
    },
    salary: {
      entry: 72000,
      mid: 105000,
      senior: 155000
    },
    roadmap: [
      {
        title: "Stage 1: Networking & Operating Systems",
        duration: "Weeks 1 - 6",
        milestones: [
          "Understand TCP/IP, OSI model layers, subnetting, and networking protocols (DNS, HTTP, SSH)",
          "Master Linux command line, system files, permission configurations, and user management",
          "Learn basic scripting (Bash or Python) to automate system parsing logs"
        ]
      },
      {
        title: "Stage 2: Security Foundations & SIEM Tools",
        duration: "Weeks 7 - 12",
        milestones: [
          "Understand common vulnerabilities (OWASP Top 10) and basic malware concepts",
          "Configure firewalls, intrusion detection systems (IDS), and analyze packets with Wireshark",
          "Learn SIEM log monitoring (Splunk or ELK Stack) and configure alerts"
        ]
      },
      {
        title: "Stage 3: Incident Response & Threat Hunting",
        duration: "Weeks 13 - 18",
        milestones: [
          "Learn containment, eradication, and recovery steps during security breaches",
          "Understand digital forensics: memory analysis and system artifact parsing",
          "Study threat intelligence feeds and frameworks (MITRE ATT&CK framework)"
        ]
      },
      {
        title: "Stage 4: Audits, Compliance & Penetration Basics",
        duration: "Weeks 19 - 24",
        milestones: [
          "Study compliance frameworks (NIST, ISO 27001, SOC 2, HIPAA)",
          "Learn network auditing and asset vulnerability scanning with Nessus/Nmap",
          "Practice ethical hacking basics using Kali Linux on labs like TryHackMe/HackTheBox"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Network Packet Analysis (Wireshark)", category: "Networking" },
        { name: "SIEM Monitoring (Splunk / ELK)", category: "Security Operations" },
        { name: "Linux Administration & CLI", category: "OS Core" },
        { name: "Python / Bash Scripting", category: "Automation" },
        { name: "Firewall & IDS/IPS Configuration", category: "Infrastructure" },
        { name: "Vulnerability Scanning (Nmap / Nessus)", category: "Auditing" },
        { name: "MITRE ATT&CK Framework mapping", category: "Threat Intelligence" },
        { name: "Incident Response Playbooks", category: "Ops" }
      ],
      soft: [
        "Meticulous Attention to Detail",
        "Calmness Under Pressure",
        "Problem Investigation",
        "Ethical Responsibility"
      ]
    },
    education: {
      certifications: [
        { name: "CompTIA Security+", cost: "$392", difficulty: "Beginner" },
        { name: "Certified Information Systems Security Professional (CISSP)", cost: "$749", difficulty: "Advanced (Requires 5-Yr Exp)" },
        { name: "Certified Ethical Hacker (CEH)", cost: "$1199", difficulty: "Intermediate" }
      ],
      bootcamps: "Can offer good hands-on cyber range simulations. Ensure they focus heavily on Blue Team operations (SOC analyst, monitoring) which has much higher entry-level hiring numbers than Red Team (Penetration testing).",
      degreeRequired: "Not strictly required. While 50% have degrees in IT or Computer Science, certifications (Security+, CySA+) and hands-on laboratory experience on platforms like TryHackMe are strong alternatives."
    },
    portfolio: {
      title: "SOC Monitoring & Automated Alerting Lab",
      description: "An isolated security operations center lab environment displaying syslog aggregation, automated alerts for brute-force attacks, and investigation write-ups.",
      techStack: ["Linux", "Elasticsearch & Kibana (ELK)", "Wazuh (IDS)", "Python", "Docker"],
      features: [
        "Infrastructure schematic showing log collection nodes pointing to a central indexer",
        "Configured intrusion rules that detect SSH brute-force actions and log them instantly",
        "A custom Python script parsing raw web logs to detect SQL Injection patterns",
        "3 detailed Incident Reports documenting simulated attack vectors, IOCs (Indicators of Compromise), and containment logs",
        "Fully visual Kibana monitoring dashboard displaying traffic anomalies"
      ],
      steps: [
        "Deploy a Linux Ubuntu Server VM and run an ELK Stack container instance.",
        "Install security shippers (Filebeat/Auditbeat) on mock application nodes.",
        "Perform simulated SSH brute-force attack from a second VM using Hydra.",
        "Create custom threat hunting dashboards in Kibana highlighting SSH anomalies.",
        "Develop response playbooks outlining the steps taken to isolate the attacker's IP."
      ]
    },
    resume: {
      keywords: ["SIEM", "Splunk", "Wireshark", "Nmap", "Firewalls", "Incident Response", "Vulnerability Assessment", "NIST Framework", "Linux CLI", "Python", "IDS/IPS", "OWASP Top 10", "SOC", "TCP/IP", "Active Directory"],
      actionVerbs: ["Monitored", "Investigated", "Audited", "Mitigated", "Configured", "Remediated", "Analyzed", "Secured"],
      metricsTemplate: "Monitored SIEM log aggregates, successfully resolving 180+ daily security alerts and reducing incident classification time (MTTR) by 25%."
    },
    quiz: [
      {
        question: "Which port number is standard for secure shell (SSH) encrypted connections?",
        options: ["Port 21", "Port 22", "Port 80", "Port 443"],
        correctAnswerIndex: 1,
        explanation: "SSH defaults to Port 22. FTP uses 21, HTTP uses 80, and HTTPS uses 443."
      },
      {
        question: "What is a 'Salting' technique used for in credential security databases?",
        options: [
          "To speed up database lookup speeds",
          "To compress large data files",
          "Adding random data to passwords before hashing to protect against pre-computed rainbow table attacks",
          "Encoding database query returns"
        ],
        correctAnswerIndex: 2,
        explanation: "Salting adds a random string to passwords before hashing, ensuring identical passwords generate unique hashes, protecting credentials from rainbow table attacks."
      },
      {
        question: "What is the difference between asymmetric and symmetric encryption?",
        options: [
          "Symmetric encryption is only used on mobile platforms",
          "Symmetric encryption uses a single shared key for encryption and decryption; Asymmetric uses a public key to encrypt and a separate private key to decrypt",
          "Asymmetric encryption is much faster but less secure",
          "Symmetric encryption is deprecated by current security boards"
        ],
        correctAnswerIndex: 1,
        explanation: "Symmetric uses the same key for locking and unlocking. Asymmetric uses a public key to encrypt and a mathematically related private key to decrypt, resolving key exchange issues."
      },
      {
        question: "Which cyber attack vector targets users using deceptive emails to steal login details or deploy malware?",
        options: ["SQL Injection", "Phishing", "Man-in-the-Middle", "DDoS"],
        correctAnswerIndex: 1,
        explanation: "Phishing is a social engineering attack that uses deceptive emails, messages, or websites to trick individuals into disclosing sensitive data or installing malware."
      },
      {
        question: "In security compliance, what does the CIA Triad stand for?",
        options: [
          "Central Intelligence Agency Standards",
          "Confidentiality, Integrity, and Availability",
          "Control, Inspection, and Authentication",
          "Cryptography, Identity, and Auditing"
        ],
        correctAnswerIndex: 1,
        explanation: "The CIA Triad stands for Confidentiality (restricting access), Integrity (ensuring accuracy), and Availability (ensuring systems are accessible)."
      }
    ],
    interviewPrep: [
      {
        question: "What is the difference between IDS and IPS? Give an example of where they sit in a network.",
        type: "technical",
        hint: "IDS (Intrusion Detection System) monitors traffic and sends alerts. IPS (Intrusion Prevention System) actively blocks traffic. IPS sits inline with traffic, IDS sits out-of-band.",
        keywords: ["ids", "ips", "detect", "prevent", "inline", "out-of-band", "block", "alert"]
      },
      {
        question: "Describe the three-way handshake of a TCP connection.",
        type: "technical",
        hint: "State the SYN, SYN-ACK, ACK packet exchange sequences between client and server, outlining their functions.",
        keywords: ["syn", "syn-ack", "ack", "handshake", "client", "server", "sequence"]
      },
      {
        question: "Explain what a cross-site scripting (XSS) attack is and how to prevent it.",
        type: "technical",
        hint: "XSS occurs when malicious scripts are injected into web pages. Prevention includes input sanitization, output encoding, and Content Security Policies (CSP).",
        keywords: ["xss", "script", "inject", "sanitize", "encode", "csp", "input"]
      },
      {
        question: "Tell me about a time you identified a security risk or anomaly in an infrastructure. How did you react?",
        type: "behavioral",
        hint: "Explain how you discovered the risk (logs, visual inspection, audit), who you coordinated with, the containment actions taken, and the policy/system upgrade that prevented future risks.",
        keywords: ["situation", "task", "action", "result", "anomaly", "mitigated", "contain", "log"]
      },
      {
        question: "How do you stay up-to-date with emerging security vulnerabilities and zero-day exploits?",
        type: "behavioral",
        hint: "Mention specific resources like CVE database, NIST NVD, security blogs (Krebs on Security, Dark Reading), podcasts, and active cybersecurity forums.",
        keywords: ["cve", "nist", "feeds", "blogs", "podcast", "zero-day", "vulnerability"]
      }
    ],
    learningResources: {
      paid: [
        { title: "CompTIA Security+ Get Certified Get Ahead (Darril Gibson)", price: "$30-$45", duration: "Study Guide Book" },
        { title: "TryHackMe Premium subscription", price: "$12/mo", duration: "Self-paced laboratory paths" }
      ],
      youtube: [
        { channel: "Professor Messer", desc: "The gold standard for free, structured course series preparing you for Security+, Network+, and A+ exams." },
        { channel: "John Hammond", desc: "Highly engaging threat breakdowns, malware analysis, and TryHackMe/HackTheBox walk-throughs." }
      ]
    }
  },

  cloud_devops: {
    title: "Cloud & DevOps Engineer",
    shortDesc: "Automate code deployments, manage cloud infrastructure, and maintain continuous delivery pipelines.",
    marketOutlook: {
      growth: "+24% Projected 10-Yr Growth",
      demand: "Very High",
      topIndustries: ["Tech Companies", "SaaS Enterprises", "Financial Institutions", "Consultancies", "Streaming Platforms"]
    },
    salary: {
      entry: 84000,
      mid: 122000,
      senior: 175000
    },
    roadmap: [
      {
        title: "Stage 1: Linux & Scripting Core",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master Linux administration, process management, and networking CLI tools",
          "Learn Python or Bash scripting to automate server configs and log parsing",
          "Understand Git branching models and code collaboration models"
        ]
      },
      {
        title: "Stage 2: Containerization & Cloud Fundamentals",
        duration: "Weeks 7 - 12",
        milestones: [
          "Understand container concepts and master Docker (Dockerfiles, Compose, Volumes)",
          "Learn AWS or Google Cloud core services: compute (EC2), storage (S3), network (VPC, IAM)",
          "Understand basic network routing, security groups, and DNS records"
        ]
      },
      {
        title: "Stage 3: CI/CD Pipelines & Infrastructure as Code (IaC)",
        duration: "Weeks 13 - 18",
        milestones: [
          "Build CI/CD pipelines (GitHub Actions, GitLab CI, or Jenkins) executing test suites",
          "Write Infrastructure as Code configurations using Terraform to spin up cloud servers",
          "Configure configuration management using Ansible scripts"
        ]
      },
      {
        title: "Stage 4: Orchestration, Monitoring & Logging",
        duration: "Weeks 19 - 24",
        milestones: [
          "Understand Kubernetes clusters, pods, services, and deployment configurations",
          "Implement site monitoring using Prometheus and Grafana boards",
          "Apply security in pipeline (DevSecOps) and write post-mortem incidents"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Linux Systems Administration", category: "OS Core" },
        { name: "Docker Containerization", category: "Containers" },
        { name: "AWS Cloud (EC2 / S3 / IAM / VPC)", category: "Cloud" },
        { name: "Terraform (Infrastructure as Code)", category: "IaC" },
        { name: "CI/CD (GitHub Actions / Jenkins)", category: "Pipelines" },
        { name: "Kubernetes (Orchestration)", category: "Orchestration" },
        { name: "Prometheus & Grafana monitoring", category: "Telemetry" },
        { name: "Python / Bash scripting", category: "Automation" }
      ],
      soft: [
        "Systemic Thinking",
        "Root Cause Mentality",
        "Collaborative Bridging (Dev + Ops)",
        "Post-Mortem Integrity"
      ]
    },
    education: {
      certifications: [
        { name: "AWS Certified Solutions Architect - Associate", cost: "$150", difficulty: "Intermediate" },
        { name: "HashiCorp Certified: Terraform Associate", cost: "$70", difficulty: "Intermediate" },
        { name: "Certified Kubernetes Administrator (CKA)", cost: "$375", difficulty: "Advanced" }
      ],
      bootcamps: "Useful if they focus deeply on infrastructure pipelines and coding tests. Avoid bootcamps that focus solely on clicking through cloud web interfaces without IaC or CLI automation.",
      degreeRequired: "Not strictly required. 60%+ cloud engineers come from background roles like IT support, system administration, or software engineering. Practical certifications and GitHub IaC projects weigh heavily."
    },
    portfolio: {
      title: "Automated GitOps Cloud Deployment Infrastructure",
      description: "A continuous deployment infrastructure that provisions an AWS VPS using Terraform, builds a container via GitHub Actions, and deploys it automatically on commit.",
      techStack: ["Terraform", "GitHub Actions", "Docker", "AWS (EC2, ECR)", "Nginx", "Prometheus"],
      features: [
        "Terraform directory provisioning VPC, Subnets, Internet Gateways, and EC2 node",
        "GitHub Actions workflow pipeline checking code formatting, running unit tests, and pushing Docker image to registry",
        "Nginx reverse-proxy setup configured with automated Let's Encrypt SSL management",
        "Prometheus script running on node shipping host statistics (CPU, memory) to visual Grafana boards",
        "Fully written architectural walkthrough with post-mortem recovery guidelines"
      ],
      steps: [
        "Write Terraform configuration files describing a secure AWS VPC architecture.",
        "Set up GitHub repository, configuring AWS connection credentials safely via Secrets.",
        "Draft GitHub Actions workflow config triggered on master branch push.",
        "Set up Nginx configuration file routing traffic from HTTP to Docker container port.",
        "Deploy Prometheus agent inside container and sync metrics output to Grafana dashboard.",
        "Run simulated outage test, noting monitoring telemetry responsiveness."
      ]
    },
    resume: {
      keywords: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Linux", "Python", "Bash", "Prometheus", "Grafana", "IaC", "Jenkins", "Nginx", "VPC", "IAM"],
      actionVerbs: ["Automated", "Provisioned", "Containerized", "Deployed", "Orchestrated", "Optimized", "Configured", "Streamlined"],
      metricsTemplate: "Architected a Terraform-based AWS migration and a continuous deployment pipeline using GitHub Actions, decreasing release deploy failures by 38% and shortening deploy cycles from 2 days to under 12 minutes."
    },
    quiz: [
      {
        question: "What is the primary benefit of treating Infrastructure as Code (IaC)?",
        options: [
          "It makes servers load web pages faster",
          "It allows infrastructure versioning, automated testing, and reproducible environments via configuration files",
          "It eliminates the need to pay for cloud hosting costs",
          "It replaces the need to write backend code"
        ],
        correctAnswerIndex: 1,
        explanation: "IaC permits developers to codify resource setups, meaning configurations can be audited, rolled back in Git, tested, and spun up in seconds without manual button-clicking."
      },
      {
        question: "Which Docker instruction specifies the default command executed when a container starts?",
        options: ["RUN", "EXPOSE", "CMD", "COPY"],
        correctAnswerIndex: 2,
        explanation: "CMD states the default program that will run inside the container when booted. RUN is executed during the build stage to set up files, and COPY transfers local files inside the image."
      },
      {
        question: "What is the role of a Load Balancer in system architecture?",
        options: [
          "To encrypt database records",
          "To distribute incoming network traffic across multiple servers to prevent overload and ensure uptime",
          "To compile code during CI/CD steps",
          "To monitor system security logs"
        ],
        correctAnswerIndex: 1,
        explanation: "Load balancers distribute traffic across a farm of backend servers, preventing any single machine from overloading and providing high availability if a node fails."
      },
      {
        question: "What does the 'CI' stand for in CI/CD pipelines?",
        options: ["Computer Interface", "Continuous Integration", "Cloud Infrastructure", "Compiler Integration"],
        correctAnswerIndex: 1,
        explanation: "CI stands for Continuous Integration. It is the dev practice of integrating code updates into a shared repository frequently, triggering automated builds and testing."
      },
      {
        question: "In Kubernetes, what is a Pod?",
        options: [
          "A server rack in a physical data center",
          "The smallest deployable unit representing a single running process or group of tightly coupled containers",
          "A storage partition inside database instances",
          "An administrative team managing deployment configurations"
        ],
        correctAnswerIndex: 1,
        explanation: "A Pod is the basic building block in Kubernetes. It encapsulates one or more containers, shared storage resources, and a unique network IP address."
      }
    ],
    interviewPrep: [
      {
        question: "Describe the differences between rolling deployments, blue-green deployments, and canary releases.",
        type: "technical",
        hint: "Rolling updates replace instances gradually. Blue-Green spins up a complete identical production stack and swaps router points. Canary rolls out to a tiny fraction of users first.",
        keywords: ["rolling", "blue-green", "canary", "swap", "percentage", "instances", "traffic"]
      },
      {
        question: "What is GitOps and how does it differ from traditional CI/CD delivery models?",
        type: "technical",
        hint: "GitOps uses Git repositories as the single source of truth for infrastructure. Pull agents (like ArgoCD) synchronize the state of the cluster with Git rather than pushing scripts.",
        keywords: ["source of truth", "argocd", "pull", "synchronize", "cluster", "declarative"]
      },
      {
        question: "Tell me about a time you experienced a major production outage. How did you diagnose, resolve, and document it?",
        type: "behavioral",
        hint: "Use STAR. Discuss reading metrics (Grafana/logs), rollback actions, restoring traffic, investigating root cause, and writing a blameless post-mortem report.",
        keywords: ["situation", "task", "action", "result", "outage", "grafana", "rollback", "post-mortem", "root cause"]
      },
      {
        question: "What is Infrastructure Drift, and how do tools like Terraform manage it?",
        type: "technical",
        hint: "Drift occurs when manual changes are made in the cloud portal directly. Terraform detects drift via 'terraform plan', showing differences between the real cloud state and state files.",
        keywords: ["drift", "manual", "state file", "plan", "detect", "apply"]
      },
      {
        question: "How do you secure secrets (like API keys, passwords, private keys) in a CI/CD pipeline?",
        type: "technical",
        hint: "Never commit secrets to Git. Use vault storage (HashiCorp Vault, AWS Secrets Manager) and inject them at runtime as encrypted environmental variables.",
        keywords: ["vault", "secrets manager", "inject", "encrypt", "secrets", "environment"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Terraform Associate Certification Course (Zeal Vora - Udemy)", price: "$15-$25", duration: "18 hours" },
        { title: "KodeKloud CKA Exam Prep subscription", price: "$29/mo", duration: "Hands-on Kubernetes labs" }
      ],
      youtube: [
        { channel: "TechWorld with Nana", desc: "Remarkably clear, highly animated explanations of Kubernetes, Docker, CI/CD, YAML, and Devops trends." },
        { channel: "NetworkChuck", desc: "High-energy tutorials covering Linux CLI, networking protocols, Docker container setups, and Python basics." }
      ]
    }
  }
};
