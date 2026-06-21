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
  },

  mobile_developer: {
    title: "Mobile App Developer (iOS/Android)",
    shortDesc: "Create highly responsive and interactive native or cross-platform mobile applications.",
    marketOutlook: {
      growth: "+19% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["Finance & Banking", "Entertainment & Media", "Health & Fitness", "E-Commerce", "On-Demand Delivery"]
    },
    salary: {
      entry: 76000,
      mid: 110000,
      senior: 160000
    },
    roadmap: [
      {
        title: "Stage 1: Core Programming & UI Layouts",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master Swift (iOS) or Kotlin (Android) syntax and type system",
          "Learn declarative layout paradigms: SwiftUI or Jetpack Compose",
          "Understand mobile design principles and standard layout structures"
        ]
      },
      {
        title: "Stage 2: State Management & Device Features",
        duration: "Weeks 7 - 12",
        milestones: [
          "Master state bindings, view models, and reactive programming flows",
          "Access device APIs: Camera, GPS Location, local alerts, and device storage",
          "Connect apps to remote RESTful backends and serialize JSON responses"
        ]
      },
      {
        title: "Stage 3: Cross-Platform Frameworks & CoreData",
        duration: "Weeks 13 - 18",
        milestones: [
          "Learn React Native or Flutter framework architecture basics",
          "Implement offline-first capabilities using CoreData, Room, or SQLite databases",
          "Understand authentication flows and secure storage keychain wrappers"
        ]
      },
      {
        title: "Stage 4: App Store Deployments & CI/CD",
        duration: "Weeks 19 - 24",
        milestones: [
          "Audit app performance using instruments (memory leaks, thread locks)",
          "Configure provisioning profiles, developer certificates, and credentials",
          "Build and submit apps to Apple App Store Connect and Google Play Console"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Swift / SwiftUI (iOS Native)", category: "Programming" },
        { name: "Kotlin / Jetpack Compose (Android)", category: "Programming" },
        { name: "React Native / Flutter", category: "Cross-Platform" },
        { name: "RESTful API & JSON Serialization", category: "Networking" },
        { name: "CoreData / SQLite / Realm", category: "Local Databases" },
        { name: "Git Version Control", category: "Tooling" },
        { name: "App Store & Play Store publishing", category: "Deployment" },
        { name: "Keychain & Mobile Security", category: "Security" }
      ],
      soft: [
        "Device Interaction Empathy",
        "Visual Attention to Detail",
        "Performance Optimization Mindset",
        "Asynchronous Thinking"
      ]
    },
    education: {
      certifications: [
        { name: "Meta iOS Developer Professional Certificate (Coursera)", cost: "$39/mo", difficulty: "Beginner" },
        { name: "Google Associate Android Developer Certification", cost: "$149", difficulty: "Intermediate" },
        { name: "Apple Swift Developer Associate Credential", cost: "Free/Beta", difficulty: "Intermediate" }
      ],
      bootcamps: "Helpful if focusing heavily on app architecture patterns over just layout styles. Ensure they teach local caching, memory leak tracking, and deployment protocols.",
      degreeRequired: "Not strictly required. A portfolio containing a live, downloadable app from the App Store or Google Play holds significantly higher weight than formal coursework during mobile review loops."
    },
    portfolio: {
      title: "Offline-First Location-Based Travel Journal App",
      description: "A fully offline-ready mobile application letting users capture location photos, write diary logs, pin geographic map nodes, and sync when online.",
      techStack: ["SwiftUI / Swift", "CoreData", "MapKit", "CloudKit / Firebase", "URLSession"],
      features: [
        "Interactive Map view showcasing pins corresponding to user notes location",
        "Camera utility to capture and compress photos saved directly to device storage",
        "Offline synchronization syncing records to a CloudKit/Firebase database when internet recovers",
        "Password lock and biometric verification using FaceID / TouchID keychain API",
        "Elegant list dashboards featuring filters, search, and custom card swipe gestures"
      ],
      steps: [
        "Design view layouts in SwiftUI, building clean mock views for map and input forms.",
        "Set up CoreData persistence layers, mapping entity relationships for entries, locations, and images.",
        "Integrate MapKit geolocation services, auto-fetching coordinate details.",
        "Implement image compression utilities to optimize local database weight constraints.",
        "Add Biometric Authentication layers via LocalAuthentication framework checks.",
        "Integrate background sync listeners updating remote CloudKit containers."
      ]
    },
    resume: {
      keywords: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "React Native", "Flutter", "CoreData", "MapKit", "SQLite", "JSON", "RESTful APIs", "Firebase", "App Store Connect", "CocoaPods", "Gradle"],
      actionVerbs: ["Developed", "Engineered", "Published", "Optimized", "Refactored", "Integrated", "Debugged", "Architected"],
      metricsTemplate: "Optimized CoreData fetch request loops and image caching routines, decreasing overall battery consumption by 24% and reducing app launching latency by 1.2s."
    },
    quiz: [
      {
        question: "Which of the following is the modern recommended language for native Android app development?",
        options: ["Java", "Swift", "Kotlin", "Dart"],
        correctAnswerIndex: 2,
        explanation: "Kotlin was declared the preferred programming language for Android developers by Google in 2019 due to its safety patterns, concise syntax, and interoperability."
      },
      {
        question: "In SwiftUI, which property wrapper is used to manage dynamic state variables owned by the view itself?",
        options: ["@ObservedObject", "@State", "@Binding", "@EnvironmentObject"],
        correctAnswerIndex: 1,
        explanation: "@State is used for lightweight, local state variables created and managed inside the specific View struct."
      },
      {
        question: "What is the primary role of a 'Provisioning Profile' in iOS development?",
        options: [
          "To speed up UI rendering actions",
          "To translate Swift code into objective-c binaries",
          "To link developer certificates, app identifiers, and device IDs, authorizing the app to run on physical devices",
          "To secure database encryption profiles"
        ],
        correctAnswerIndex: 2,
        explanation: "Provisioning Profiles act as the digital link connecting Apple Developer Certificates, the App ID, and designated UDIDs (device lists) to allow testing on real iOS hardware."
      },
      {
        question: "Which of the following describes cross-platform frameworks like React Native?",
        options: [
          "They compile directly into binary WebAssembly pages",
          "They write a single JavaScript/TS codebase that maps to native platform view controllers at runtime",
          "They run inside browser wrappers only",
          "They replace the need for remote REST APIs"
        ],
        correctAnswerIndex: 1,
        explanation: "React Native uses a JS/TS codebase which communicates via a bridge or native layout engine to render actual native buttons, text, and components, ensuring native responsiveness."
      },
      {
        question: "What does ANR stand for in Android system metrics?",
        options: ["Access Network Registry", "App Not Responding", "Activity Node Routing", "Automatic Network Recovery"],
        correctAnswerIndex: 1,
        explanation: "ANR stands for 'Application Not Responding'. It occurs when the Android main UI thread blocks for too long (e.g. over 5 seconds), causing the system to prompt the user to force quit."
      }
    ],
    interviewPrep: [
      {
        question: "Explain the difference between value types and reference types in Swift.",
        type: "technical",
        hint: "Structs are value types (passed by copy); Classes are reference types (passed by reference/pointer). Talk about memory allocation (stack vs heap).",
        keywords: ["struct", "class", "value", "reference", "copy", "heap", "stack", "pointer"]
      },
      {
        question: "What is the difference between Android's Activity and Fragment cycles?",
        type: "technical",
        hint: "An Activity represents a single, complete system screen window. A Fragment is a modular, reusable sub-section of a screen cycle embedded inside an Activity.",
        keywords: ["activity", "fragment", "embedded", "reusable", "host", "sub-section", "screen"]
      },
      {
        question: "Tell me about a time you optimized a mobile app's performance or resolved a memory leak.",
        type: "behavioral",
        hint: "Explain how you diagnosed the issue (e.g. Xcode Instruments, Profiler, leak traces), located retain cycles, replaced strong variables with weak/unowned, and verified battery/RAM outcomes.",
        keywords: ["situation", "task", "action", "result", "instruments", "retain cycle", "weak", "leak", "profiler"]
      },
      {
        question: "How do you handle offline sync conflict resolution in mobile data sync?",
        type: "technical",
        hint: "State standard patterns: last-write-wins, client-wins, server-wins, or prompting user selection. Highlight timestamp checks and merge pipelines.",
        keywords: ["sync", "conflict", "timestamp", "last-write-wins", "merge", "client", "server"]
      },
      {
        question: "How do you ensure app layouts display correctly across varying screen aspect ratios?",
        type: "technical",
        hint: "Discuss AutoLayout constraints (iOS) or ConstraintLayout (Android), responsive grid units, and declarative stacks scaling dynamically.",
        keywords: ["autolayout", "constraints", "responsive", "constraintlayout", "flexbox", "scaling", "grid"]
      }
    ],
    learningResources: {
      paid: [
        { title: "iOS & Swift - The Complete iOS App Development Bootcamp (Udemy)", price: "$15-$25", duration: "59 hours" },
        { title: "Android App Development Masterclass Kotlin (Udemy)", price: "$15-$30", duration: "42 hours" }
      ],
      youtube: [
        { channel: "Sean Allen", desc: "Superb native Swift/iOS focus, covers Xcode tips, SwiftUI setups, and interview mock prep questions." },
        { channel: "Philipp Lackner", desc: "Expert Jetpack Compose and Kotlin tutorials for modern native Android architecture patterns." }
      ]
    }
  },

  ai_researcher: {
    title: "AI/ML Researcher & NLP Engineer",
    shortDesc: "Conduct research in AI fields, design deep learning models, and engineer natural language solutions.",
    marketOutlook: {
      growth: "+45% Projected 10-Yr Growth",
      demand: "Extremely High",
      topIndustries: ["Artificial Intelligence Labs", "Autonomous Vehicle Firms", "Big Tech Research Teams", "Healthcare & Biotech Labs", "SaaS Automation"]
    },
    salary: {
      entry: 92000,
      mid: 140000,
      senior: 210000
    },
    roadmap: [
      {
        title: "Stage 1: Deep Mathematical AI Foundations",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master calculus derivatives, multivariate gradients, and optimization rules",
          "Learn probability models: Bayes theorem, distributions, expectations",
          "Understand matrix algebra, eigenvalues, vectors, and decomposition rules"
        ]
      },
      {
        title: "Stage 2: Neural Networks & Deep Models",
        duration: "Weeks 7 - 12",
        milestones: [
          "Code forward and backward propagation loops from scratch in pure Python",
          "Master PyTorch framework: tensors, autograd, and neural network layers",
          "Understand CNNs for computer vision and RNN/LSTM sequences"
        ]
      },
      {
        title: "Stage 3: Transformers & NLP Pipelines",
        duration: "Weeks 13 - 18",
        milestones: [
          "Understand self-attention mechanisms and the original Transformer architecture",
          "Train NLP pipelines: tokenization, text embeddings, and language modelling",
          "Implement LLM fine-tuning strategies: LoRA, QLoRA, and PEFT concepts"
        ]
      },
      {
        title: "Stage 4: AI Deployments & Evaluation Tuning",
        duration: "Weeks 19 - 24",
        milestones: [
          "Evaluate model generations using BLEU, ROUGE, and LLM-as-a-judge frameworks",
          "Quantize and compress models (AWQ, GPTQ) for local hardware deployments",
          "Deploy custom inference APIs using vLLM or HuggingFace TGI tools"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "PyTorch / TensorFlow", category: "Deep Learning" },
        { name: "Hugging Face Ecosystem", category: "NLP Core" },
        { name: "Linear Algebra & Optimization", category: "Mathematics" },
        { name: "LLM Fine-Tuning (LoRA / QLoRA)", category: "Large Models" },
        { name: "Model Quantization & Inference (vLLM)", category: "Deployment" },
        { name: "Vector Databases (Chroma / Pinecone)", category: "RAG Systems" },
        { name: "Git Version Control", category: "Tooling" },
        { name: "CUDA & GPU programming", category: "Hardware Acceleration" }
      ],
      soft: [
        "Scientific Writing & Rigor",
        "Curious Exploration",
        "Ethical AI Awareness",
        "Analytical Problem Breakdown"
      ]
    },
    education: {
      certifications: [
        { name: "Deep Learning Specialization by Andrew Ng (Coursera)", cost: "$49/mo", difficulty: "Intermediate" },
        { name: "Natural Language Processing Specialization", cost: "$49/mo", difficulty: "Advanced" },
        { name: "AWS Certified Machine Learning - Specialty", cost: "$300", difficulty: "Advanced" }
      ],
      bootcamps: "Rarely recommended. AI research is heavily academic; bootcamps often lack the deep mathematical rigor (advanced calculus, matrix models) required to debug transformer loss curves.",
      degreeRequired: "Highly requested. While some developers transition via open-source LLM work, over 75% of research engineers hold STEM Master's or Ph.D. degrees in Math, Statistics, or Computer Science."
    },
    portfolio: {
      title: "Fine-Tuned Domain-Specific Assistant with RAG Pipeline",
      description: "A customized small language model (e.g. Llama-3-8B) fine-tuned on specialized dataset files, paired with a semantic retrieval database for accurate vector responses.",
      techStack: ["Python", "PyTorch", "HuggingFace Transformers", "QLoRA / PEFT", "ChromaDB", "FastAPI"],
      features: [
        "Model training dataset loader notebook featuring semantic tokenization audits",
        "Fully executed training run logs demonstrating training loss stabilization graphs",
        "Custom vector search retrieval class converting user queries to semantic matches",
        "API service exposing inference routes backed by vLLM execution containers",
        "Evaluation benchmark notebook matching output accuracy scores against base models"
      ],
      steps: [
        "Collect and format niche text data records, cleaning format tags.",
        "Perform PEFT/QLoRA parameter training configuration using transformers library.",
        "Save and merge trained weight adapters with base target parameters.",
        "Build indexing system parsing PDF archives into ChromaDB vector nodes.",
        "Combine retriever query matching with model input templates (RAG prompt).",
        "Deploy model inference endpoints under FastAPI, configuring inputs."
      ]
    },
    resume: {
      keywords: ["PyTorch", "NLP", "LLM", "Transformers", "Fine-Tuning", "LoRA", "Vector Databases", "Embeddings", "Hugging Face", "CUDA", "ROUGE Score", "Retrieval Augmented Generation (RAG)", "vLLM", "Python", "Linear Algebra"],
      actionVerbs: ["Researched", "Fine-Tuned", "Engineered", "Optimized", "Formulated", "Implemented", "Evaluated", "Accelerated"],
      metricsTemplate: "Fine-tuned an open-source 8B LLM using QLoRA configurations, improving domain accuracy scores by 34% while reducing inference hosting costs by 62% via model quantization."
    },
    quiz: [
      {
        question: "What is the primary function of Self-Attention inside Transformer model layers?",
        options: [
          "To clean dataset text columns automatically",
          "To compute dynamic visual weights for image boundaries",
          "To measure the contextual dependency of each word in a sequence relative to all other words in the same sequence",
          "To speed up database index lookups"
        ],
        correctAnswerIndex: 2,
        explanation: "Self-attention computes a mathematical weight matrix mapping how words relate to other words in the text, capturing rich context regardless of distance."
      },
      {
        question: "What does LoRA (Low-Rank Adaptation) accomplish during large language model training?",
        options: [
          "It compresses the model text into smaller character sets",
          "It updates only a tiny subset of model parameters by training low-rank decomposed adapter matrices, saving significant GPU memory",
          "It acts as a firewall guarding AI weights",
          "It speeds up internet connection bandwidth to training rigs"
        ],
        correctAnswerIndex: 1,
        explanation: "LoRA inserts small, trainable parameter blocks (decomposed rank matrices) into model layers, freezing base weights, which dramatically cuts memory consumption."
      },
      {
        question: "When training neural networks, what does Gradient Vanishing refer to?",
        options: [
          "The loss calculation function returning zero values",
          "Gradients shrinking exponentially during backpropagation, causing early layer parameters to stop learning",
          "The training system deleting files randomly",
          "The memory storage limit of GPU cards being breached"
        ],
        correctAnswerIndex: 1,
        explanation: "Vanishing gradients occur when successive chain rule multiplications yield microscopic updates, leaving early layer weights unaltered during parameter optimization loops."
      },
      {
        question: "Which evaluation metric is standard for summarizing language translation model output relative to target translations?",
        options: ["F1-Score", "BLEU Score", "Confusion Matrix", "ROC-AUC"],
        correctAnswerIndex: 1,
        explanation: "BLEU (Bilingual Evaluation Understudy) measures n-gram overlaps between model translations and target human references, outputting scores from 0 to 1."
      },
      {
        question: "What is the purpose of Vector Embeddings in machine learning?",
        options: [
          "To secure code directories",
          "Representing raw text, images, or audio as numerical coordinate arrays that capture semantic meaning",
          "Mapping database tables",
          "Formatting HTML structures"
        ],
        correctAnswerIndex: 1,
        explanation: "Embeddings translate high-dimensional categorical data (like text) into dense numerical vectors in a continuous vector space where similar concepts cluster near one another."
      }
    ],
    interviewPrep: [
      {
        question: "Explain how the self-attention mechanism works mathematically.",
        type: "technical",
        hint: "Discuss Query (Q), Key (K), and Value (V) matrices. Mention calculating scaled dot-product attention: Softmax(QK^T / sqrt(d_k))V.",
        keywords: ["query", "key", "value", "softmax", "scaled dot-product", "dimension", "similarity"]
      },
      {
        question: "What is Retrieval-Augmented Generation (RAG) and how does it prevent model hallucination?",
        type: "technical",
        hint: "RAG extracts factual context matching the user query from external databases, feeding it as prompt guidelines to the LLM, grounding generations.",
        keywords: ["grounding", "context", "hallucination", "database", "query", "vector", "retrieve"]
      },
      {
        question: "Tell me about a time your AI model failed to generalize to testing datasets. How did you diagnose and resolve the issue?",
        type: "behavioral",
        hint: "Explain checking loss curves, identifying overfitting, collecting diverse data, applying regularization, or adjusting learning rates.",
        keywords: ["situation", "task", "action", "result", "generalize", "overfitting", "loss curve", "regularization", "learning rate"]
      },
      {
        question: "Describe the differences between fine-tuning and in-context learning (few-shot prompting).",
        type: "technical",
        hint: "Fine-tuning modifies model parameters/weights permanently on new datasets. In-context learning passes examples inside the prompt window without weight modifications.",
        keywords: ["weights", "parameters", "prompt", "examples", "context window", "training"]
      },
      {
        question: "What are your strategies for evaluating LLM outputs when targeting open-ended tasks?",
        type: "technical",
        hint: "Discuss LLM-as-a-judge patterns, human evaluation rubrics, automated checks (ROUGE/BLEU), and domain safety guards.",
        keywords: ["eval", "judge", "rouge", "bleu", "human eval", "rubric", "safety"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Deep Learning Specialization (Coursera - Andrew Ng)", price: "$49/mo", duration: "approx. 3 months" },
        { title: "NLP Specialization (HuggingFace/Coursera)", price: "$49/mo", duration: "approx. 2 months" }
      ],
      youtube: [
        { channel: "Andrej Karpathy", desc: "Arguably the finest deep-dive tutorials explaining transformer neural networks from scratch, coding GPT layers block-by-block." },
        { channel: "Yannic Kilcher", desc: "Reviews modern AI research publications and explains paper structures, architectures, and breakthroughs." }
      ]
    }
  },

  data_engineer: {
    title: "Data Engineer & Database Architect",
    shortDesc: "Design and build data pipelines, data warehouses, and scalable database schemas for big data operations.",
    marketOutlook: {
      growth: "+28% Projected 10-Yr Growth",
      demand: "Very High",
      topIndustries: ["Big Data Technology", "Financial Institutions", "Healthcare Systems", "Streaming & Entertainment", "E-commerce Networks"]
    },
    salary: {
      entry: 82000,
      mid: 118000,
      senior: 170000
    },
    roadmap: [
      {
        title: "Stage 1: SQL Mastery & Data Modeling",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master SQL: window functions, CTEs, aggregation, complex joins, indexing",
          "Learn database schemas: Star, Snowflake, normalized vs denormalized structures",
          "Understand ACID transaction properties and isolation levels"
        ]
      },
      {
        title: "Stage 2: Python Scripting & ETL Pipelines",
        duration: "Weeks 7 - 12",
        milestones: [
          "Use Python libraries (Pandas, PySpark) to clean, merge, and transform raw files",
          "Learn API data harvesting and automated cron configurations",
          "Implement pipeline orchestrators like Apache Airflow or Prefect to schedule DAG tasks"
        ]
      },
      {
        title: "Stage 3: Data Warehouses & Distributed Computing",
        duration: "Weeks 13 - 18",
        milestones: [
          "Understand cloud data warehouses: Snowflake, Google BigQuery, or Amazon Redshift",
          "Learn distributed compute frameworks: Apache Spark or Hadoop",
          "Build dbt (data build tool) projects transforming raw tables into cleaned analyst views"
        ]
      },
      {
        title: "Stage 4: Streaming Architecture & Real-Time Data",
        duration: "Weeks 19 - 24",
        milestones: [
          "Understand real-time stream data queues using Apache Kafka or AWS Kinesis",
          "Configure data lake structures (Delta Lake, Apache Iceberg) on cloud storage",
          "Apply pipeline security, data validation checks, and telemetry alerts"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "SQL (Window Functions / CTEs)", category: "Databases" },
        { name: "Python Programming (Pandas / PySpark)", category: "Programming" },
        { name: "Apache Airflow (DAG Pipelines)", category: "Orchestration" },
        { name: "Snowflake / Google BigQuery / AWS Redshift", category: "Data Warehousing" },
        { name: "Apache Spark (Distributed Compute)", category: "Big Data" },
        { name: "dbt (Data Build Tool)", category: "Transformation" },
        { name: "Apache Kafka / AWS Kinesis", category: "Streaming" },
        { name: "Git Version Control", category: "Tooling" }
      ],
      soft: [
        "Data Quality Integrity",
        "Systems Architecture Vision",
        "Cross-team Bridging (Analysts + Devs)",
        "Structured Troubleshooting"
      ]
    },
    education: {
      certifications: [
        { name: "Google Cloud Professional Data Engineer", cost: "$200", difficulty: "Advanced" },
        { name: "SnowPro Core Certification (Snowflake)", cost: "$175", difficulty: "Intermediate" },
        { name: "AWS Certified Data Engineer - Associate", cost: "$150", difficulty: "Intermediate" }
      ],
      bootcamps: "Highly recommended if they focus on command-line pipeline scripting, warehouse design, and cloud setups over basic Python syntax tutorials.",
      degreeRequired: "Not strictly required. A quantitative degree is helpful, but 70%+ of data engineering hires are judged on hands-on system designs demonstrating Spark operations or clean dbt models."
    },
    portfolio: {
      title: "Automated Orchestrated E-commerce Analytics Warehouse",
      description: "A complete data engineering workflow scraping source transactions, cleaning records via Spark, warehousing in Snowflake, and orchestrating via Apache Airflow.",
      techStack: ["Python", "Apache Airflow", "Apache Spark", "Snowflake", "dbt", "Docker", "S3"],
      features: [
        "Airflow DAG mapping out the dependency tasks with failure notification triggers",
        "Distributed Spark cleanup script normalizing user demographic files",
        "Snowflake data warehouse setup detailing staging schemas and production models",
        "dbt transformations transforming user profiles into aggregates (daily LTV graphs)",
        "Fully written data quality suite executing column constraints audits (Great Expectations)"
      ],
      steps: [
        "Launch local Airflow and Spark instances containerized in Docker Compose configurations.",
        "Develop raw data intake script pushing log batches to AWS S3 buckets.",
        "Configure Spark transformation job joining transaction tables with user logs.",
        "Set up Snowflake staging credentials, creating pipelines loading S3 records.",
        "Write dbt transformations tracking target aggregations; test queries.",
        "Wrap the sequence steps inside an Airflow DAG script, ensuring error isolation."
      ]
    },
    resume: {
      keywords: ["SQL", "Python", "ETL", "Apache Airflow", "Snowflake", "Apache Spark", "dbt", "Kafka", "Data Modeling", "Data Warehousing", "Big Data", "AWS Redshift", "BigQuery", "Data Pipelines", "Docker"],
      actionVerbs: ["Orchestrated", "Architected", "Engineered", "Optimized", "Aggregated", "Ingested", "Normalized", "Streamlined"],
      metricsTemplate: "Architected an automated ETL pipeline loading transactions using Airflow and Snowflake, decreasing overall query processing latency by 42% and trimming compute costs by $15k/year."
    },
    quiz: [
      {
        question: "What distinguishes normalized databases (OLTP) from denormalized databases (OLAP)?",
        options: [
          "OLTP uses no database tables; OLAP uses flat txt files",
          "OLTP reduces redundancy and ensures transaction integrity (ACID); OLAP duplicates data to optimize query performance for massive analytical operations",
          "OLTP is faster to access over wireless networks",
          "OLAP is deprecated by current data engineering standards"
        ],
        correctAnswerIndex: 1,
        explanation: "OLTP focuses on write operations, structuring tables to prevent anomalies. OLAP denormalizes data into star/snowflake structures, trading duplication for lightning-fast query reads."
      },
      {
        question: "In Apache Airflow, what does a DAG stand for?",
        options: ["Data Aggregation Grid", "Directed Acyclic Graph", "Database Array Grouping", "Digital Archive Gateway"],
        correctAnswerIndex: 1,
        explanation: "DAG stands for Directed Acyclic Graph. It is a collection of tasks organized in a clear directional path with no circular loops, defining operational workflows."
      },
      {
        question: "Which file format is standard for columnar big data storage, offering excellent compression and split-processing benefits?",
        options: ["JSON", "CSV", "Parquet", "XML"],
        correctAnswerIndex: 2,
        explanation: "Apache Parquet is a columnar file storage format optimized for analytical queries, compressing values heavily and allowing engines to load only specific columns."
      },
      {
        question: "What does the 'T' represent in modern ELT cloud warehouse architectures?",
        options: ["Transfer", "Translate", "Transform", "Telemetry"],
        correctAnswerIndex: 2,
        explanation: "ELT stands for Extract, Load, Transform. Data is loaded raw into the cloud database, and the Transformation occurs inside the target warehouse engine (e.g. via dbt)."
      },
      {
        question: "In SQL, what is the key difference between WHERE and HAVING statements?",
        options: [
          "There is no difference, they are query synonyms",
          "WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY execution",
          "HAVING executes queries faster",
          "WHERE is only used on numeric values"
        ],
        correctAnswerIndex: 1,
        explanation: "WHERE filters rows before groupings are processed. HAVING specifies filter criteria on columns derived from aggregate mathematical computations (e.g. SUM or AVG)."
      }
    ],
    interviewPrep: [
      {
        question: "Explain the difference between a Star Schema and a Snowflake Schema.",
        type: "technical",
        hint: "Star Schema uses denormalized dimensions directly connected to a central fact table. Snowflake normalizes dimensions into sub-tables, reducing space but increasing join complexity.",
        keywords: ["star", "snowflake", "normalize", "denormalize", "dimension", "fact table", "joins"]
      },
      {
        question: "What is data lineage and why is it important in enterprise warehouses?",
        type: "technical",
        hint: "Lineage tracks the movement, origins, transformations, and destinations of datasets. Essential for debugging errors and auditing data quality origins.",
        keywords: ["lineage", "origin", "destination", "audit", "trace", "transformation", "quality"]
      },
      {
        question: "Tell me about a time you optimized a slow SQL query. What modifications did you implement?",
        type: "behavioral",
        hint: "Discuss parsing the execution plan, identifying table scans vs index seeks, adding indices, replacing correlated subqueries with CTEs/joins, or partitioning.",
        keywords: ["situation", "task", "action", "result", "execution plan", "index", "cte", "scan", "join"]
      },
      {
        question: "How do you handle pipeline scaling when dealing with out-of-order data streams?",
        type: "technical",
        hint: "Discuss event time vs processing time, partitioning logs, dead-letter queues, and streaming watermarks.",
        keywords: ["watermark", "event time", "processing time", "dead-letter queue", "stream", "out-of-order"]
      },
      {
        question: "What are ACID properties in databases, and does a distributed system like Apache Spark enforce them?",
        type: "technical",
        hint: "ACID represents Atomicity, Consistency, Isolation, Durability. Traditional relational systems enforce them strictly; Spark does not natively enforce ACID unless utilizing frameworks like Delta Lake.",
        keywords: ["acid", "atomicity", "consistency", "isolation", "durability", "delta lake", "spark"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Data Engineering Zoomcamp (DataTalks.Club)", price: "Free/Donation", duration: "approx. 10 weeks" },
        { title: "Snowflake Masterclass - Build Data Pipelines (Udemy)", price: "$15-$25", duration: "16 hours" }
      ],
      youtube: [
        { channel: "Data Engineering Academy", desc: "Superb structured guides covering dbt, SQL profiling, Airflow scripting, and warehouse optimization." },
        { channel: "Seattle Data Guy (Ben Rogojan)", desc: "Practical, career-focused advice breaking down data engineering software stacks, interviews, and portfolio projects." }
      ]
    }
  },

  systems_admin: {
    title: "Systems & Network Administrator",
    shortDesc: "Manage operating systems, configure local/cloud networks, ensure hardware uptime, and enforce security policies.",
    marketOutlook: {
      growth: "+14% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["Enterprise Corporations", "Universities & Schools", "Government Agencies", "IT Consultancies", "Data Center Facilities"]
    },
    salary: {
      entry: 65000,
      mid: 88000,
      senior: 125000
    },
    roadmap: [
      {
        title: "Stage 1: OS Core & Command Line Essentials",
        duration: "Weeks 1 - 6",
        milestones: [
          "Master Linux administration: permissions, file structures, users, systemd services",
          "Learn Windows Server administration and Active Directory (AD) hierarchy basics",
          "Automate repetitive OS tasks using Bash or PowerShell scripting"
        ]
      },
      {
        title: "Stage 2: Enterprise Networking Core",
        duration: "Weeks 7 - 12",
        milestones: [
          "Understand TCP/IP subnetting, routing, VLAN structures, and firewall configurations",
          "Configure standard network services: DHCP, DNS, NAT, SSH, VPN connections",
          "Analyze network anomalies and traffic packets using Wireshark CLI"
        ]
      },
      {
        title: "Stage 3: Active Directory & Identity Management",
        duration: "Weeks 13 - 18",
        milestones: [
          "Configure Active Directory Domain Services (AD DS) and Group Policy Objects (GPOs)",
          "Manage Single Sign-On (SSO) systems and multi-factor authorization (MFA) parameters",
          "Implement access structures (RBAC) and network security configurations"
        ]
      },
      {
        title: "Stage 4: Virtualization, Backup & Telemetry",
        duration: "Weeks 19 - 24",
        milestones: [
          "Understand hypervisors: VMware ESXi, Hyper-V, or Proxmox setups",
          "Configure automated system backup models and disaster recovery pipelines",
          "Deploy monitoring telemetry (Nagios, Zabbix, or Prometheus) to track server status"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Linux / Windows Server Administration", category: "OS Core" },
        { name: "Active Directory & Group Policies (GPO)", category: "Identity Management" },
        { name: "PowerShell / Bash Automation", category: "Scripting" },
        { name: "TCP/IP Subnetting & VLAN configuration", category: "Networking" },
        { name: "DNS / DHCP / VPN configuration", category: "Services" },
        { name: "VMware / Hyper-V Virtualization", category: "Virtualization" },
        { name: "Zabbix / Prometheus monitoring", category: "Telemetry" },
        { name: "System Backup & Disaster Recovery", category: "Infrastructure" }
      ],
      soft: [
        "Uptime Responsibility",
        "Clear Documentation Habits",
        "Calm Crisis Resolution",
        "Methodical Troubleshooting"
      ]
    },
    education: {
      certifications: [
        { name: "CompTIA Network+", cost: "$358", difficulty: "Beginner" },
        { name: "Cisco Certified Network Associate (CCNA)", cost: "$300", difficulty: "Beginner-Intermediate" },
        { name: "Microsoft Certified: Windows Server Hybrid Administrator Associate", cost: "$165", difficulty: "Intermediate" }
      ],
      bootcamps: "Rarely needed. Systems administration relies heavily on hands-on config experience and self-study certs like CCNA which are cheaper and universally respected.",
      degreeRequired: "Not strictly required. An Associate degree or Bachelor's in IT is common, but active industry certifications (CCNA, Network+) paired with a physical home lab portfolio are highly effective."
    },
    portfolio: {
      title: "Secure Active Directory Domain & Enterprise VPN Home Lab",
      description: "A configured network virtual environment displaying Active Directory Domain Service controls, GPO security policies, DHCP server configuration, and remote VPN client access.",
      techStack: ["Windows Server", "pfSense (Virtual Firewall)", "Ubuntu Server (Linux)", "PowerShell", "Proxmox / VirtualBox"],
      features: [
        "Architecture layout showing isolated subnet segments (Management, LAN, DMZ)",
        "GPO script enforcing password complexities and automatic desktop locks across test computers",
        "PowerShell script automating onboarding for 100 dummy employees into custom OUs",
        "Configured pfSense routing rules preventing LAN nodes from accessing raw database subnets",
        "Active monitoring panel sending emails if host CPU limits exceed 90%"
      ],
      steps: [
        "Install Proxmox or VirtualBox on local hardware VM hosts.",
        "Provision a pfSense VM routing traffic between virtual LAN and local WAN lines.",
        "Deploy a Windows Server VM, elevating to Domain Controller (Active Directory).",
        "Deploy secondary Linux nodes, joining domain controls; write GPO guidelines.",
        "Build OpenVPN config inside pfSense, testing client remote connection handshakes.",
        "Install Zabbix alerts agents on nodes, verifying monitoring dashboard triggers."
      ]
    },
    resume: {
      keywords: ["Windows Server", "Active Directory", "Linux CLI", "PowerShell", "TCP/IP", "DNS", "DHCP", "VPN", "VLAN", "Group Policy (GPO)", "pfSense", "Virtualization", "VMware", "System Administration", "CCNA"],
      actionVerbs: ["Configured", "Administered", "Automated", "Secured", "Resolved", "Provisioned", "Upgraded", "Monitored"],
      metricsTemplate: "Configured Windows Server Active Directory structures and PowerShell onboarding loops, reducing client workstation provisioning times by 68% and automating weekly security GPOs."
    },
    quiz: [
      {
        question: "Which system service dynamically allocates network IP addresses, subnet masks, and DNS details to host computers?",
        options: ["DNS", "DHCP", "SSH", "NAT"],
        correctAnswerIndex: 1,
        explanation: "DHCP (Dynamic Host Configuration Protocol) automatically distributes IP parameters to network nodes, preventing manual configuration conflicts."
      },
      {
        question: "What is the primary function of Group Policy Objects (GPOs) in Active Directory environments?",
        options: [
          "To route network packets between routers",
          "To centrally manage and enforce OS settings, security parameters, and user configurations across domain-joined systems",
          "To compile programming files",
          "To speed up local hard drive writes"
        ],
        correctAnswerIndex: 1,
        explanation: "GPOs allow network administrators to enforce security profiles (like desktop lock timers, password complexity, and USB blocks) across thousands of corporate computers centrally."
      },
      {
        question: "If a system administrator wants to check raw connectivity handshakes and identify the hops/routers to a target server, which command is most appropriate?",
        options: ["ipconfig", "nslookup", "traceroute (Linux) / tracert (Windows)", "ping"],
        correctAnswerIndex: 2,
        explanation: "Traceroute outputs the exact sequence of router IP hops a packet traverses to reach its destination, detailing latency delays at each junction."
      },
      {
        question: "In Linux system administration, which command changes directory ownership profiles?",
        options: ["chmod", "chown", "mkdir", "sudo"],
        correctAnswerIndex: 1,
        explanation: "chown is used to change user and group ownership of files and directories. chmod is used to modify read/write/execute permissions metrics."
      },
      {
        question: "What is a Hypervisor?",
        options: [
          "A high-speed router port configuration",
          "Virtualization software that runs and coordinates multiple Virtual Machines on a single physical host computer",
          "A tool to check memory storage temperatures",
          "A database clustering strategy"
        ],
        correctAnswerIndex: 1,
        explanation: "A hypervisor (like VMware ESXi or Hyper-V) sits between hardware and OS layers, slicing resources to host independent guest VMs."
      }
    ],
    interviewPrep: [
      {
        question: "Explain what DNS is and the difference between an A record, a CNAME record, and an MX record.",
        type: "technical",
        hint: "DNS translates domain names to IPs. A record maps domain to IPv4 address. CNAME maps domain to alias domain. MX record maps domain to mail exchange servers.",
        keywords: ["dns", "translate", "ipv4", "alias", "cname", "a record", "mx record", "mail"]
      },
      {
        question: "How do you calculate subnets? If you have an IP range of 192.168.1.0/26, how many hosts can you allocate?",
        type: "technical",
        hint: "A /26 subnet leaves 6 bits for hosts (32 - 26 = 6). 2^6 = 64. Subtract 2 (network and broadcast addresses) to get 62 usable host addresses.",
        keywords: ["subnet", "hosts", "network address", "broadcast", "62", "power of 2", "bits"]
      },
      {
        question: "Tell me about a time you had to handle a critical server outage during non-business hours. How did you react?",
        type: "behavioral",
        hint: "Mention diagnostic steps, checking logs, restoring backups or adjusting services, coordinating communications with teams, and implementing updates to prevent recurrences.",
        keywords: ["situation", "task", "action", "result", "outage", "diagnostic", "backup", "logs", "communication"]
      },
      {
        question: "What is Active Directory, and what is the difference between a Forest, a Domain, and an OU (Organizational Unit)?",
        type: "technical",
        hint: "AD is Microsoft's directory network system. Forest is the top security boundary containing domain trees. Domain is a logical group of accounts. OU is a sub-folder container within a domain used to organize nodes.",
        keywords: ["forest", "domain", "organizational unit", "ou", "active directory", "boundary", "hierarchy"]
      },
      {
        question: "Explain the differences between RAID 0, RAID 1, RAID 5, and RAID 10 configurations.",
        type: "technical",
        hint: "RAID 0 is striping (fast, no safety). RAID 1 is mirroring (safe, half space). RAID 5 uses parity blocks across 3+ disks. RAID 10 is striped mirrors (needs 4+ disks).",
        keywords: ["raid 0", "raid 1", "raid 5", "raid 10", "striping", "mirroring", "parity", "disks"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Cisco CCNA 200-301 Complete Course (Jeremy's IT Lab - Udemy)", price: "$15-$25", duration: "approx. 40 hours" },
        { title: "Windows Server Hybrid Administrator Path (Microsoft Learn)", price: "Free", duration: "Self-paced study modules" }
      ],
      youtube: [
        { channel: "Jeremy's IT Lab", desc: "Arguably the finest free resource for CCNA network builders, complete with packet tracer files." },
        { channel: "NetworkChuck", desc: "High-energy tutorials covering commands, DNS architectures, virtualization systems, and port setups." }
      ]
    }
  },

  qa_automation: {
    title: "QA Automation & Testing Engineer",
    shortDesc: "Write automated scripts to test web/mobile applications, perform integration checks, and audit code quality.",
    marketOutlook: {
      growth: "+17% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["SaaS Enterprises", "Financial Software", "Healthcare Platforms", "Mobile Gaming Networks", "E-commerce Hubs"]
    },
    salary: {
      entry: 70000,
      mid: 96000,
      senior: 140000
    },
    roadmap: [
      {
        title: "Stage 1: Testing Fundamentals & Manual Quality Checks",
        duration: "Weeks 1 - 6",
        milestones: [
          "Understand software testing lifecycle (STLC), bug reporting, and severity levels",
          "Write descriptive, high-quality test cases and trace requirements matrices",
          "Perform manual web audits checking Chrome DevTools console networks"
        ]
      },
      {
        title: "Stage 2: Scripting & Web UI Testing Automation",
        duration: "Weeks 7 - 12",
        milestones: [
          "Master Javascript, Python, or Java essentials needed for test execution",
          "Learn selector engines (CSS selectors, XPaths) to isolate web buttons",
          "Build UI automated test scripts using Selenium WebDriver, Playwright, or Cypress"
        ]
      },
      {
        title: "Stage 3: API testing & Automation Pipelines",
        duration: "Weeks 13 - 18",
        milestones: [
          "Test REST API routes manually using Postman, verifying payload return parameters",
          "Automate API endpoint tests using Javascript libraries (Axios/Supertest) or Python requests",
          "Implement Page Object Model (POM) architectural design patterns to keep scripts clean"
        ]
      },
      {
        title: "Stage 4: Pipeline integration & Performance Auditing",
        duration: "Weeks 19 - 24",
        milestones: [
          "Integrate automated test runs into CI/CD scripts (GitHub Actions, GitLab CI)",
          "Perform API and database load testing using JMeter or Locust scripts",
          "Understand cross-browser testing networks and generate validation report logs"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Playwright / Cypress / Selenium", category: "UI Automation" },
        { name: "Javascript / Python Programming", category: "Programming" },
        { name: "Postman & REST API testing", category: "API Testing" },
        { name: "Page Object Model (POM) patterns", category: "Architecture" },
        { name: "CSS Selectors & XPath selectors", category: "Web Traversal" },
        { name: "Locust / JMeter performance testing", category: "Performance" },
        { name: "CI/CD automated testing triggers", category: "Pipelines" },
        { name: "Git Version Control", category: "Tooling" }
      ],
      soft: [
        "Attention to Edge Cases",
        "Destructive Testing Mindset",
        "Clear Bug Reporting Documentation",
        "Technical Empathy"
      ]
    },
    education: {
      certifications: [
        { name: "ISTQB Certified Tester Foundation Level (CTFL)", cost: "$250", difficulty: "Beginner" },
        { name: "ISTQB Test Automation Engineer (Advanced)", cost: "$250", difficulty: "Advanced" },
        { name: "freeCodeCamp Javascript Algorithms & Data Structures", cost: "Free", difficulty: "Beginner" }
      ],
      bootcamps: "Recommended if focusing heavily on writing test runner libraries, database testing, and Jenkins/GitHub pipeline integrations over just manual click testing.",
      degreeRequired: "Not strictly required. 60%+ QA Automation professionals successfully enter the field via self-taught scripting, ISTQB certifications, and public GitHub test repositories."
    },
    portfolio: {
      title: "Playwright End-to-End Testing Suite & API Testing Suite",
      description: "An automated UI and API test library validating user registration, database login validation, and e-commerce shopping workflows, running on GitHub Actions commit loops.",
      techStack: ["Playwright", "Javascript", "Node.js", "Supertest", "GitHub Actions", "Allure Reports"],
      features: [
        "Page Object Model (POM) library abstraction classes mapping login and cart components",
        "Automated mock database setup script cleaning records before test cycles",
        "Parallel test configuration file execution checking layouts on Chrome, Firefox, and Safari views",
        "API automated test pipeline validating payloads, response codes, and schemas",
        "Configured GitHub Actions workflow file that runs tests and publishes HTML results dashboards"
      ],
      steps: [
        "Initialize node.js test directory, installing Playwright runner modules.",
        "Build page abstractions for UI target views, defining locators.",
        "Write assertions matching correct credentials, wrong credentials, and checkout flows.",
        "Implement parallel API testing scripts using Playwright's built-in request context.",
        "Set up GitHub Actions script running tests on every repository branch commit.",
        "Integrate report generation dashboards sending status logs to summary tables."
      ]
    },
    resume: {
      keywords: ["Playwright", "Cypress", "Selenium", "Postman", "API Testing", "Page Object Model (POM)", "JavaScript", "Python", "CI/CD", "GitHub Actions", "Manual Testing", "Test Automation", "JMeter", "XPath", "ISTQB"],
      actionVerbs: ["Automated", "Tested", "Validated", "Identified", "Scripted", "Integrated", "Debugged", "Documented"],
      metricsTemplate: "Architected a Playwright automated UI test suite with Page Object Model patterns, decreasing overall manual regression testing loops by 85% and identifying 42 core bugs before production releases."
    },
    quiz: [
      {
        question: "What is the primary benefit of utilizing the Page Object Model (POM) pattern in test automation libraries?",
        options: [
          "It accelerates internet browser loading performance",
          "It encapsulates page elements and selector tags, reducing script duplication and making updates simpler to maintain",
          "It replaces the need to run HTML code",
          "It converts Java tests to Python scripts"
        ],
        correctAnswerIndex: 1,
        explanation: "POM isolates page selector strings and behaviors in classes. When visual layouts change, only the POM class file needs edits, rather than dozens of test files."
      },
      {
        question: "Which term refers to validating that recently updated code did not introduce new bugs or break existing functional sections?",
        options: ["Smoke Testing", "Sanity Testing", "Regression Testing", "Unit Testing"],
        correctAnswerIndex: 2,
        explanation: "Regression testing validates that system updates, bug fixes, or enhancements have not negatively impacted established application features."
      },
      {
        question: "In web selectors, which string matches buttons having an ID property value set to 'submit-checkout'?",
        options: [".submit-checkout", "button[id=submit-checkout]", "#submit-checkout", "both options 2 and 3"],
        correctAnswerIndex: 3,
        explanation: "In CSS selector engines, the '#' prefix indicates IDs (Option 3). Option 2 is also a syntactically valid CSS selector locating buttons with that exact ID attribute."
      },
      {
        question: "What is the difference between Severity and Priority when documenting application bugs?",
        options: [
          "There is no difference, they are terms for the same metric",
          "Severity measures the technical impact of the bug on application functions; Priority designates the operational timeline for fixing it",
          "Priority is decided by developers; Severity is decided by sales leads",
          "Severity is only used for database crash bugs"
        ],
        correctAnswerIndex: 1,
        explanation: "Severity maps how broken the system is (e.g., app crashes = High Severity). Priority is the business urgency of the fix (e.g., misspelling on logo = High Priority, Low Severity)."
      },
      {
        question: "What does the 'Smoke Test' validate in release cycles?",
        options: [
          "Whether server fans are overheating",
          "That the basic, most critical paths of the build (e.g. app boots, users can login) function successfully before executing deep tests",
          "How the system responds to massive database spikes",
          "The security integrity of API keys"
        ],
        correctAnswerIndex: 1,
        explanation: "Smoke tests are rapid checks verifying core foundations are sound, confirming the build is stable enough to merit launching heavy automated suites."
      }
    ],
    interviewPrep: [
      {
        question: "What is the difference between implicit wait, explicit wait, and fluent wait in Selenium/Playwright?",
        type: "technical",
        hint: "Implicit waits set global timeouts. Explicit waits target specific conditions (element visible). Fluent waits define polling frequencies to look for components.",
        keywords: ["implicit", "explicit", "fluent", "timeout", "polling", "condition", "visible", "global"]
      },
      {
        question: "How do you automate API testing, and what checks should you run on return payloads?",
        type: "technical",
        hint: "Test status codes (e.g. 200 OK), payload schemas (field types), data boundaries, and latency response times using tools like Postman or Supertest.",
        keywords: ["postman", "supertest", "status code", "schema", "headers", "latency", "response body", "assert"]
      },
      {
        question: "Tell me about a time you had a dispute with a developer regarding a bug you reported. How did you resolve it?",
        type: "behavioral",
        hint: "Focus on objective logs. Discuss providing step-by-step reproduction guidelines, console error screenshots, isolating requirements in specs, and alignment on quality.",
        keywords: ["situation", "task", "action", "result", "dispute", "reproduce", "objective", "documentation", "console log"]
      },
      {
        question: "Explain what flaky tests are, and what strategies you implement to eliminate them.",
        type: "technical",
        hint: "Flaky tests pass or fail unpredictably. Causes include dynamic page load latency or hardcoded sleeps. Resolve using dynamic element selectors and auto-waits.",
        keywords: ["flaky", "sleeps", "latency", "auto-wait", "dynamic", "locator", "race condition"]
      },
      {
        question: "What is the difference between black-box testing, white-box testing, and grey-box testing?",
        type: "technical",
        hint: "Black-box checks functions without internal code access. White-box audits code architecture and logic direct. Grey-box combines both (checks behaviors knowing base codes).",
        keywords: ["black-box", "white-box", "grey-box", "internal", "code access", "behavior", "logic"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Automated Testing with Playwright (Udemy)", price: "$15-$25", duration: "18 hours" },
        { title: "ISTQB Foundation Level Training (Udemy)", price: "$15-$30", duration: "12 hours" }
      ],
      youtube: [
        { channel: "Testing Peer", desc: "Superb coverage of automation tools, selector engines, CI test integrations, and STLC best practices." },
        { channel: "ExecuteAutomation", desc: "Detailed, developer-grade tutorials covering Playwright setups, Docker integration, and test architectures." }
      ]
    }
  },

  scrum_master: {
    title: "Scrum Master & Agile Project Manager",
    shortDesc: "Facilitate agile ceremonies, remove operational blockers, coach squads, and drive continuous delivery milestones.",
    marketOutlook: {
      growth: "+15% Projected 10-Yr Growth",
      demand: "High",
      topIndustries: ["Software Companies", "Fintech Providers", "Corporate IT Departments", "Telehealth Networks", "Government Systems"]
    },
    salary: {
      entry: 78000,
      mid: 108000,
      senior: 150000
    },
    roadmap: [
      {
        title: "Stage 1: Scrum Foundations & Ceremonies",
        duration: "Weeks 1 - 6",
        milestones: [
          "Understand the core values, roles, and pillars of the Scrum Guide",
          "Learn facilitation models for Sprint Planning, Standups, Retros, and Reviews",
          "Master mapping agile task boards on tools like Jira or Azure DevOps"
        ]
      },
      {
        title: "Stage 2: Metrics & Delivery Benchmarks",
        duration: "Weeks 7 - 12",
        milestones: [
          "Analyze team capacity metrics: Velocity, Burndown/Burnup charts, and Cumulative Flow",
          "Implement story estimation methodologies: Planning Poker, T-shirt sizing, Fibonacci metrics",
          "Identify process bottlenecks, waste factors, and cycle delays"
        ]
      },
      {
        title: "Stage 3: Coaching, Conflict & Impediment Removal",
        duration: "Weeks 13 - 18",
        milestones: [
          "Practice non-directive coaching strategies to cultivate self-organizing engineering squads",
          "Facilitate conflict resolution models, negotiating department priorities",
          "Track and clear complex cross-team dependencies, shielding developers from distractions"
        ]
      },
      {
        title: "Stage 4: Scaling Agile & Product Collaboration",
        duration: "Weeks 19 - 24",
        milestones: [
          "Study scaled agile frameworks: SAFe, LeSS, or Scrum at Scale basics",
          "Collaborate with Product Owners to optimize and refine backlogs and user stories",
          "Develop visual metric presentation dashboards for executive steering committees"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Scrum Guide framework expertise", category: "Core Framework" },
        { name: "Jira / Confluence administration", category: "Project Tooling" },
        { name: "Agile Metrics (Velocity / Burndown)", category: "Metrics" },
        { name: "Kanban / WIP limits configuration", category: "Methodology" },
        { name: "Prioritization & Backlog Refinement", category: "Collaboration" },
        { name: "Conflict Resolution & Facilitation", category: "Leadership" },
        { name: "Scaled Agile (SAFe / LeSS) basics", category: "Scaling" },
        { name: "Excel / Confluence reporting", category: "Reporting" }
      ],
      soft: [
        "Servant Leadership",
        "Empathetic Active Listening",
        "Negotiation & Influence",
        "Patience & Facilitation"
      ]
    },
    education: {
      certifications: [
        { name: "Professional Scrum Master I (PSM I - Scrum.org)", cost: "$150", difficulty: "Beginner" },
        { name: "Certified ScrumMaster (CSM - Scrum Alliance)", cost: "$400+", difficulty: "Beginner" },
        { name: "PMI Agile Certified Practitioner (PMI-ACP)", cost: "$435", difficulty: "Advanced" }
      ],
      bootcamps: "Can offer good roleplay simulations for facilitating retrospective friction, but check if they cover Jira configuration, query structures, and metrics generation.",
      degreeRequired: "Not mandatory. MBAs or communications/management degrees are popular, but the most direct pathways are constructed by transitioning from technical support, QA, or development roles using credentials."
    },
    portfolio: {
      title: "Scrum Team Launch Playbook & Sprint Performance Report",
      description: "A detailed blueprint outlining how to build and launch an agile team, configure backlog rules in Jira, run ceremonies, and analyze sprint delivery indicators.",
      techStack: ["Jira Software", "Confluence", "Miro (Ceremony Templates)", "Excel (Telemetry charts)"],
      features: [
        "Structured Team Charter detailing roles, working agreements, and definition of done",
        "Jira board setup schematic detailing custom workflow columns and transition rules",
        "Sprint Retrospective playbook featuring interactive templates created on Miro boards",
        "Comprehensive Sprint metrics analysis sheet comparing Velocity across 3 sprints",
        "Detailed Impediment Log mapping blockers, dependency trackers, and mitigation actions"
      ],
      steps: [
        "Draft the team's working agreements, outlining Standup schedules and code review SLAs.",
        "Set up a Jira project workspace, creating issues, tags, and epic hierarchies.",
        "Facilitate a mock Sprint Planning meeting, mapping estimations using planning poker.",
        "Build burndown charts tracking mock daily tasks; analyze deviations.",
        "Draft a Retro summary detailing items to start, stop, and continue.",
        "Compile the metrics sheet showing delivery averages; create slides for review."
      ]
    },
    resume: {
      keywords: ["Scrum Master", "Agile Coach", "Jira", "Sprint Planning", "Daily Standup", "Sprint Retrospective", "Sprint Review", "Backlog Refinement", "Velocity", "Burndown Chart", "Servant Leadership", "Impediment Removal", "Kanban", "Scrum.org", "Agile Metrics"],
      actionVerbs: ["Facilitated", "Coached", "Resolved", "Streamlined", "Led", "Optimized", "Empowered", "Tracked"],
      metricsTemplate: "Facilitated agile transitions and optimized backlog refinement structures, boosting overall team velocity by 28% and increasing sprint goal delivery rates from 65% to 94%."
    },
    quiz: [
      {
        question: "Who is responsible for managing the priorities and values of items in the Product Backlog during Scrum sprints?",
        options: ["The Scrum Master", "The Product Owner", "The Developers", "The Agile Sponsor"],
        correctAnswerIndex: 1,
        explanation: "The Product Owner is the sole owner of the Product Backlog. They represent business interests, defining features and sizing their priorities."
      },
      {
        question: "What is the maximum duration recommended for the Daily Standup meeting?",
        options: ["10 minutes", "15 minutes", "30 minutes", "None, it can run as long as needed"],
        correctAnswerIndex: 1,
        explanation: "The Daily Standup is a time-boxed event of exactly 15 minutes. It is designed to keep alignments rapid, tracking progress and highlighting blockers."
      },
      {
        question: "What does the Burndown Chart track in sprint tracking views?",
        options: [
          "The budget expenditures of the company",
          "The estimated remaining work (in story points/hours) plotted against the days remaining in the sprint timeline",
          "The count of lines of code added by developers",
          "The security alert events inside nodes"
        ],
        correctAnswerIndex: 1,
        explanation: "A burndown chart displays remaining effort over the sprint. An ideal trendline slopes to zero, indicating tasks are finishing on pace."
      },
      {
        question: "In Scrum frameworks, what does 'Definition of Done' (DoD) signify?",
        options: [
          "The list of features the customer wants built",
          "A shared, formal standard describing when a backlog item has satisfied all quality, review, testing, and deployment parameters to be declared shippable",
          "The developer finished writing code on their local machine",
          "The project manager approved billing totals"
        ],
        correctAnswerIndex: 1,
        explanation: "The DoD is a quality agreement. It guarantees that any story declared 'done' matches necessary requirements (e.g. passed QA, documented, reviewed)."
      },
      {
        question: "Which meeting ceremony occurs at the end of every Sprint to evaluate process bottlenecks, team friction, and agree on improvements?",
        options: ["Sprint Review", "Sprint Retrospective", "Sprint Planning", "Refinement Meeting"],
        correctAnswerIndex: 1,
        explanation: "The Sprint Retrospective focus is the *team and process*. They reflect on what went well, what failed, and agree on actionable updates for the next sprint."
      }
    ],
    interviewPrep: [
      {
        question: "How do you handle a team member who refuses to update their tasks on the Jira board?",
        type: "behavioral",
        hint: "Avoid mandate. Focus on empathy: discuss private alignments, explain the 'why' (metrics transparency, stakeholder reporting), ask about blockers, and work together on solutions.",
        keywords: ["empathy", "understand", "why", "transparency", "coaching", "collaborate", "private", "blocker"]
      },
      {
        question: "What is the difference between Velocity and Capacity, and how do they impact Sprint Planning?",
        type: "technical",
        hint: "Velocity is the average story points a team completes per sprint historically. Capacity is the availability of resources (vacations/holidays) for the upcoming sprint. Both define the commitment limit.",
        keywords: ["velocity", "capacity", "story points", "availability", "history", "planning", "limit"]
      },
      {
        question: "Tell me about a time you had to resolve a severe conflict within your agile team.",
        type: "behavioral",
        hint: "Explain identifying the root cause, bringing parties together in a neutral space, establishing guidelines, guiding them toward a shared agreement, and tracking team morale outcomes.",
        keywords: ["situation", "task", "action", "result", "conflict", "neutral space", "active listening", "compromise", "agreements"]
      },
      {
        question: "How do you coach a team that is carrying over multiple unfinished stories from sprint to sprint?",
        type: "technical",
        hint: "Investigate during Retros: are stories too large (need splitting)? Is testing lagging behind coding? Are blockers unresolved? Implement smaller sizing limits.",
        keywords: ["carryover", "spillover", "splitting", "retro", "sizing", "work in progress", "wip", "testing"]
      },
      {
        question: "How do you help a Product Owner write better user stories and manage backlog bloat?",
        type: "technical",
        hint: "Introduce INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable) and set up recurring backlog refinement loops.",
        keywords: ["invest", "refinement", "backlog", "po", "coaching", "user story", "prioritize"]
      }
    ],
    learningResources: {
      paid: [
        { title: "Professional Scrum Master I (PSM I) Prep (Udemy)", price: "$15-$25", duration: "10 hours" },
        { title: "Agile Crash Course: Agile Project Management (Udemy)", price: "$15-$20", duration: "8 hours" }
      ],
      youtube: [
        { channel: "Scrum.org", desc: "The official masterclass guides covering agile roles, scaling patterns, standups, and certifications." },
        { channel: "Development That Pays", desc: "Clear, animated summaries of agile, sprint, kanban, estimation, and scrum methodologies." }
      ]
    }
  }
};

