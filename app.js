import { careerData } from './careerData.js';

// --- STATE MANAGEMENT ---
let userProfile = null;
let completedRoadmapItems = {}; // { careerKey: [milestoneIndex1, ...] }
let completedSkills = {}; // { careerKey: [skillName1, ...] }
let portfolioFeaturesCompleted = {}; // { careerKey: [featureIndex1, ...] }
let quizHighScore = {}; // { careerKey: scorePercentage }
let streakCount = 0;
let lastStreakDate = "";
let currentQuizQuestionIndex = 0;
let quizScore = 0;
let activeInterviewIndex = null;
let currentChatHistory = [];

// Daily Challenges Database by career
const dailyChallenges = {
  frontend_fullstack: [
    "Review one behavioral question on the Interview Prep tab and write out a response using the STAR framework.",
    "Refactor an old Javascript loop using modern ES6 array helper functions (.map, .filter, or .reduce).",
    "Run a Google Lighthouse audit on your personal website or portfolio, noting performance scores.",
    "Practice writing a CSS Grid layout with areas on Codepen, styling a multi-column dashboard.",
    "Examine an open source project's package.json file on GitHub to see how they structure peer dependencies."
  ],
  data_science_ml: [
    "Examine a classical machine learning model's metrics, noting the mathematical difference between precision and recall.",
    "Write a complex SQL query utilizing window functions (e.g. ROW_NUMBER or PARTITION BY) on a dummy dataset.",
    "Clean a small dummy CSV dataset using Pandas, handling null values and converting datatypes.",
    "Draft a feature importance visualization on Seaborn, mapping correlation coefficients.",
    "Summarize the bias-variance tradeoff in a 3-sentence note for your interview cheat sheet."
  ],
  ux_ui_design: [
    "Open Figma and build a fully responsive button component using Auto-Layout constraints.",
    "Examine a daily app you use (like Slack or Spotify) and write a 1-page heuristic evaluation of its navigation structure.",
    "Test the color contrast ratio of your target portfolio header text using WCAG standards.",
    "Draw 3 lo-fi wireframe variations for a mobile checkout page on paper.",
    "Read a short article on NN/g about senior user accessibility patterns."
  ],
  product_management: [
    "Draft a sample RICE matrix prioritizing 3 mockup product features for a food delivery service.",
    "Write a complete User Story with descriptive Acceptance Criteria (Given/When/Then format) for a login feature.",
    "Analyze TAM (Total Addressable Market) calculations for a new local ride-sharing service.",
    "Define a GTM (Go-to-market) metric sheet highlighting the differences between activation and retention rates.",
    "Practice a mock interview response addressing how you negotiate product timeline constraints with engineers."
  ],
  cybersecurity: [
    "Open Wireshark and examine a sample PCAP packet log, tracking standard TCP handshakes.",
    "Review the OWASP Top 10 vulnerabilities list, drafting a note on preventing SQL Injections.",
    "Write a short Python log-parsing script that flags ssh login entries containing 'failed password'.",
    "Identify the security functions of the CIA Triad (Confidentiality, Integrity, Availability) on a hypothetical web app.",
    "Run an Nmap scan on a local home router address to audit open ports and protocols."
  ],
  cloud_devops: [
    "Write a simple Dockerfile setting up a lightweight Alpine Nginx static page container.",
    "Draft a basic Terraform script provisioning a secure AWS S3 bucket with versioning.",
    "Examine a GitHub Actions YAML script mapping a continuous test suite runner.",
    "Write down a post-mortem layout addressing a simulated database connection pool exhaustion.",
    "Configure a basic Nginx reverse-proxy file block routing traffic to local ports."
  ],
  mobile_developer: [
    "Write a simple layout using SwiftUI Stacks or Compose Rows, testing constraints.",
    "Review standard iOS/Android local storage formats, comparing Keychain to SQLite setups.",
    "Find a mobile open-source repository on GitHub and study their build configuration files.",
    "Practice optimizing image sizes or local image cache pipelines on mobile simulators.",
    "Draft a 2-page list detailing Apple App Store Connect submission steps."
  ],
  ai_researcher: [
    "Write down the scaled dot-product attention equation, summarizing all term variables.",
    "Examine PEFT tuning adapter setups, comparing LoRA rank dimensions.",
    "Draft a ROUGE score comparison sheet evaluating domain translation runs.",
    "Practice writing forward propagation loops for simple Multi-Layer Perceptrons.",
    "Summarize local quantization libraries (e.g. llama.cpp vs vLLM hosting options)."
  ],
  data_engineer: [
    "Practice writing CTE query chains, optimizing tables join indices.",
    "Write a basic Airflow DAG file scheduling two sequential Python jobs.",
    "Format a Parquet schema layout, examining columnar compression statistics.",
    "Audit a snowflake warehouse configuration checking automated scaling controls.",
    "Write down the ACID requirements, outlining Delta Lake capabilities."
  ],
  systems_admin: [
    "Audit virtual subnets on local machines, calculating /26 host limitations.",
    "Configure a test pfSense firewall routing rule preventing unauthorized connection entries.",
    "Draft a PowerShell script listing all Active Directory users having expired accounts.",
    "Review OpenVPN handshake packet captures in Wireshark directories.",
    "Create a Zabbix alert configuration mapping CPU temperature limits."
  ],
  qa_automation: [
    "Write a Page Object Model mapping class for a simple mock signup web page.",
    "Test an API transaction route using Postman, verifying payload assertions.",
    "Identify 3 flaky test scenarios, drafting locator changes to eliminate sleeps.",
    "Configure Playwright browser test runners to run checks in parallel modes.",
    "Review ISTQB guidelines summarizing test severity vs task priority levels."
  ],
  scrum_master: [
    "Write down a Sprint Retrospective template utilizing the Start-Stop-Continue framework.",
    "Create a Jira query listing tasks carried over from previous sprints.",
    "Draft working agreements for a newly formed software engineering squad.",
    "Practice facilitating Planning Poker estimations for 3 complex user stories.",
    "Analyze a mock sprint burndown graph, identifying bottleneck indicators."
  ]
};

// --- DOM ELEMENTS ---
const elements = {
  // Navigation
  navDashboard: document.getElementById('nav-dashboard'),
  navChat: document.getElementById('nav-chat'),
  navRoadmap: document.getElementById('nav-roadmap'),
  navPortfolio: document.getElementById('nav-portfolio'),
  navResume: document.getElementById('nav-resume'),
  navQuiz: document.getElementById('nav-quiz'),
  navInterviews: document.getElementById('nav-interviews'),
  navHub: document.getElementById('nav-hub'),
  navItems: document.querySelectorAll('.nav-item'),
  tabContents: document.querySelectorAll('.tab-content'),
  pageTitle: document.getElementById('page-title'),
  pageSubtitle: document.getElementById('page-subtitle'),
  
  // Onboarding Modal
  onboardingModal: document.getElementById('onboardingModal'),
  usernameInput: document.getElementById('username'),
  currentRoleInput: document.getElementById('current-role'),
  targetCareerSelect: document.getElementById('target-career'),
  experienceLevelSelect: document.getElementById('experience-level'),
  weeklyCommitmentSelect: document.getElementById('weekly-commitment'),
  submitOnboardingBtn: document.getElementById('btn-submit-onboarding'),
  
  // Sidebar Profile Summary
  sidebarAvatar: document.getElementById('sidebar-avatar'),
  sidebarUsername: document.getElementById('sidebar-username'),
  sidebarTarget: document.getElementById('sidebar-target'),
  resetProfileBtn: document.getElementById('sidebar-reset-profile'),
  
  // Dashboard Tab
  heroRoleBadge: document.getElementById('hero-role-badge'),
  welcomeTitle: document.getElementById('hero-welcome-title'),
  welcomeDesc: document.getElementById('hero-welcome-desc'),
  statReadiness: document.getElementById('stat-readiness'),
  statStreak: document.getElementById('stat-streak'),
  statStreakFooter: document.getElementById('stat-streak-footer'),
  statSalary: document.getElementById('stat-salary'),
  progressDial: document.getElementById('progress-dial'),
  progressDialText: document.getElementById('progress-dial-text'),
  marketGrowth: document.getElementById('market-growth'),
  marketSectors: document.getElementById('market-sectors'),
  salaryEntryVal: document.getElementById('salary-entry-val'),
  salaryMidVal: document.getElementById('salary-mid-val'),
  salarySeniorVal: document.getElementById('salary-senior-val'),
  salaryEntryBar: document.getElementById('salary-entry-bar'),
  salaryMidBar: document.getElementById('salary-mid-bar'),
  salarySeniorBar: document.getElementById('salary-senior-bar'),
  challengeDesc: document.getElementById('challenge-desc'),
  completeChallengeBtn: document.getElementById('btn-complete-challenge'),
  
  // Chat Tab
  chatConversation: document.getElementById('chat-conversation'),
  chatInput: document.getElementById('chat-input'),
  sendChatBtn: document.getElementById('btn-send-chat'),
  suggestRoadmapsBtn: document.getElementById('suggest-roadmaps'),
  suggestCertsBtn: document.getElementById('suggest-certs'),
  suggestResumeBtn: document.getElementById('suggest-resume'),
  suggestSalaryBtn: document.getElementById('suggest-salary'),
  
  // Roadmap Tab
  roadmapTimeline: document.getElementById('roadmap-timeline'),
  skillsTechList: document.getElementById('skills-tech-list'),
  skillsSoftList: document.getElementById('skills-soft-list'),
  certificationsList: document.getElementById('certifications-list'),
  eduBootcampText: document.getElementById('edu-bootcamp-text'),
  eduDegreeText: document.getElementById('edu-degree-text'),
  
  // Portfolio Tab
  portfolioTitle: document.getElementById('portfolio-title'),
  portfolioDesc: document.getElementById('portfolio-desc'),
  portfolioStack: document.getElementById('portfolio-stack'),
  portfolioFeatures: document.getElementById('portfolio-features'),
  portfolioSteps: document.getElementById('portfolio-steps'),
  
  // Resume Tab
  resumeInput: document.getElementById('resume-input'),
  jobInput: document.getElementById('job-input'),
  optimizeResumeBtn: document.getElementById('btn-optimize-resume'),
  atsScore: document.getElementById('ats-score'),
  keywordsFound: document.getElementById('keywords-found'),
  keywordsMissing: document.getElementById('keywords-missing'),
  resumeMetricSuggestion: document.getElementById('resume-metric-suggestion'),
  resumeDraftText: document.getElementById('resume-draft-text'),
  
  // Quiz Tab
  quizWelcomePane: document.getElementById('quiz-welcome-pane'),
  startQuizBtn: document.getElementById('btn-start-quiz'),
  quizQPane: document.getElementById('quiz-q-pane'),
  quizProgress: document.getElementById('quiz-progress'),
  quizQIndicator: document.getElementById('quiz-q-indicator'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizOptionsContainer: document.getElementById('quiz-options-container'),
  quizExplanation: document.getElementById('quiz-explanation'),
  quizExplanationTitle: document.getElementById('quiz-explanation-title'),
  quizExplanationText: document.getElementById('quiz-explanation-text'),
  nextQuestionBtn: document.getElementById('btn-next-question'),
  quizResultsPane: document.getElementById('quiz-results-pane'),
  quizResultEmoji: document.getElementById('quiz-result-emoji'),
  quizResultTitle: document.getElementById('quiz-result-title'),
  quizResultScore: document.getElementById('quiz-result-score'),
  quizResultEval: document.getElementById('quiz-result-eval'),
  restartQuizBtn: document.getElementById('btn-restart-quiz'),
  
  // Interview Tab
  interviewQuestionsList: document.getElementById('interview-questions-list'),
  interviewEmptyState: document.getElementById('interview-empty-state'),
  interviewActivePane: document.getElementById('interview-active-pane'),
  activeQBadge: document.getElementById('active-q-badge'),
  activeQText: document.getElementById('active-q-text'),
  activeQHint: document.getElementById('active-q-hint'),
  interviewAnswerInput: document.getElementById('interview-answer-input'),
  submitAnswerBtn: document.getElementById('btn-submit-answer'),
  activeEvalBox: document.getElementById('active-eval-box'),
  evalScore: document.getElementById('eval-score'),
  evalDetails: document.getElementById('eval-details'),
  
  // Learning Hub
  paidCoursesList: document.getElementById('paid-courses-list'),
  youtubeResourcesList: document.getElementById('youtube-resources-list')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initNavigation();
  initEventListeners();
  
  if (!userProfile) {
    showOnboarding();
  } else {
    updateUI();
  }
});

// --- NAVIGATION LOGIC ---
function initNavigation() {
  elements.navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  // Remove active from nav items and content
  elements.navItems.forEach(nav => nav.classList.remove('active'));
  elements.tabContents.forEach(content => content.classList.remove('active'));
  
  // Activate selected
  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  const activeContent = document.getElementById(`tab-${tabId}`);
  
  if (activeNav && activeContent) {
    activeNav.classList.add('active');
    activeContent.classList.add('active');
    
    // Update titles
    const tabTitles = {
      dashboard: { title: "Career Dashboard", subtitle: "Your personalized learning path, profile progress, and market insights." },
      chat: { title: "AI Concierge Mentor", subtitle: "Ask career-related advice, clarify concepts, or request resume checks." },
      roadmap: { title: "Interactive Roadmap", subtitle: "Checklist milestones, technical competencies, and professional credentials." },
      portfolio: { title: "AI Portfolio Planner", subtitle: "Build an industry-grade project showing your capability to hire teams." },
      resume: { title: "Resume Keywords Optimizer", subtitle: "Scan resume content for key terms and audit ATS readiness." },
      quiz: { title: "Competency Quiz", subtitle: "Take localized assessments to test your technical skills." },
      interviews: { title: "STAR Interview Prep", subtitle: "Answer role-specific prompts and receive direct structural feedback." },
      hub: { title: "Curated Learning Hub", subtitle: "High-quality courses and free educational video links." }
    };
    
    elements.pageTitle.innerText = tabTitles[tabId].title;
    elements.pageSubtitle.innerText = tabTitles[tabId].subtitle;
    
    // Extra actions on tab loading
    if (tabId === 'dashboard') {
      calculateReadiness();
      renderDashboardMarketDetails();
    } else if (tabId === 'chat' && currentChatHistory.length === 0) {
      sendMentorWelcomeMessage();
    }
  }
}

// --- STATE STORAGE ---
function loadState() {
  const profileData = localStorage.getItem('lifebridge_profile');
  if (profileData) {
    userProfile = JSON.parse(profileData);
  }
  
  completedRoadmapItems = JSON.parse(localStorage.getItem('lifebridge_roadmap') || '{}');
  completedSkills = JSON.parse(localStorage.getItem('lifebridge_skills') || '{}');
  portfolioFeaturesCompleted = JSON.parse(localStorage.getItem('lifebridge_portfolio') || '{}');
  quizHighScore = JSON.parse(localStorage.getItem('lifebridge_quiz_scores') || '{}');
  streakCount = parseInt(localStorage.getItem('lifebridge_streak') || '0');
  lastStreakDate = localStorage.getItem('lifebridge_streak_date') || "";
  
  // Auto check challenge streak validity
  const todayStr = new Date().toDateString();
  if (lastStreakDate === todayStr) {
    elements.completeChallengeBtn.disabled = true;
    elements.completeChallengeBtn.innerText = "Completed today! Streak Saved";
  } else {
    elements.completeChallengeBtn.disabled = false;
    elements.completeChallengeBtn.innerText = "Complete & Boost Streak";
  }
}

function saveState() {
  localStorage.setItem('lifebridge_profile', JSON.stringify(userProfile));
  localStorage.setItem('lifebridge_roadmap', JSON.stringify(completedRoadmapItems));
  localStorage.setItem('lifebridge_skills', JSON.stringify(completedSkills));
  localStorage.setItem('lifebridge_portfolio', JSON.stringify(portfolioFeaturesCompleted));
  localStorage.setItem('lifebridge_quiz_scores', JSON.stringify(quizHighScore));
  localStorage.setItem('lifebridge_streak', streakCount.toString());
  localStorage.setItem('lifebridge_streak_date', lastStreakDate);
}

// --- ONBOARDING MODAL FLOW ---
function showOnboarding() {
  elements.onboardingModal.classList.add('active');
}

function hideOnboarding() {
  elements.onboardingModal.classList.remove('active');
}

function handleOnboardingSubmit() {
  const name = elements.usernameInput.value.trim();
  const currentRole = elements.currentRoleInput.value.trim();
  const targetCareer = elements.targetCareerSelect.value;
  const experienceLevel = elements.experienceLevelSelect.value;
  const weeklyCommitment = elements.weeklyCommitmentSelect.value;
  
  if (!name || !currentRole || !targetCareer || !experienceLevel || !weeklyCommitment) {
    alert("Please fill in all onboarding profile questions.");
    return;
  }
  
  userProfile = {
    name,
    currentRole,
    targetCareer,
    experienceLevel,
    weeklyCommitment
  };
  
  // Set default state items for new target career
  if (!completedRoadmapItems[targetCareer]) completedRoadmapItems[targetCareer] = [];
  if (!completedSkills[targetCareer]) completedSkills[targetCareer] = [];
  if (!portfolioFeaturesCompleted[targetCareer]) portfolioFeaturesCompleted[targetCareer] = [];
  
  saveState();
  hideOnboarding();
  updateUI();
  switchTab('dashboard');
}

function resetProfile() {
  if (confirm("Are you sure you want to reset your career advisor profile and metrics? All checklist progress will be deleted.")) {
    localStorage.removeItem('lifebridge_profile');
    localStorage.removeItem('lifebridge_roadmap');
    localStorage.removeItem('lifebridge_skills');
    localStorage.removeItem('lifebridge_portfolio');
    localStorage.removeItem('lifebridge_quiz_scores');
    localStorage.removeItem('lifebridge_streak');
    localStorage.removeItem('lifebridge_streak_date');
    
    userProfile = null;
    completedRoadmapItems = {};
    completedSkills = {};
    portfolioFeaturesCompleted = {};
    quizHighScore = {};
    streakCount = 0;
    lastStreakDate = "";
    currentChatHistory = [];
    activeInterviewIndex = null;
    
    // Clear display inputs
    elements.resumeInput.value = "";
    elements.jobInput.value = "";
    elements.atsScore.className = "ats-badge-glow low";
    elements.atsScore.innerText = "00%";
    elements.keywordsFound.innerHTML = '<span style="font-size: 12px; color: var(--text-muted);">None found yet. Paste resume and trigger check.</span>';
    elements.keywordsMissing.innerHTML = '<span style="font-size: 12px; color: var(--text-muted);">Matches will appear after scan.</span>';
    
    loadState();
    showOnboarding();
  }
}

// --- UPDATE UI ELEMENTS ON DATA READY ---
function updateUI() {
  if (!userProfile) return;
  
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  // Sidebar avatar & details
  elements.sidebarAvatar.innerText = userProfile.name.charAt(0).toUpperCase();
  elements.sidebarUsername.innerText = userProfile.name;
  elements.sidebarTarget.innerText = career.title;
  
  // Dashboard Header Hero
  elements.heroRoleBadge.innerText = career.title;
  elements.welcomeTitle.innerText = `Welcome back, ${userProfile.name}!`;
  
  let formattedCommitment = "";
  if (userProfile.weeklyCommitment === "5") formattedCommitment = "Part-time (5 hrs/wk)";
  else if (userProfile.weeklyCommitment === "10") formattedCommitment = "Standard study (10 hrs/wk)";
  else if (userProfile.weeklyCommitment === "20") formattedCommitment = "Accelerated timeline (20 hrs/wk)";
  else formattedCommitment = "Intensive Bootcamp (40 hrs/wk)";
  
  elements.welcomeDesc.innerText = `Your personal career advisor path is set. You are targeting a ${userProfile.experienceLevel.toUpperCase()}-level position as a ${career.title}, aiming for a ${formattedCommitment} program. Explore details below to check job readiness, master keywords, and mock-test core skills.`;
  
  // Streak score dashboard
  elements.statStreak.innerText = `${streakCount} Day${streakCount !== 1 ? 's' : ''}`;
  
  // Generate daily challenge
  const challenges = dailyChallenges[userProfile.targetCareer] || ["Complete one step on the roadmap checklists today."];
  // Select daily challenge index based on the day of the month to keep it stable but dynamic
  const dayOfMonth = new Date().getDate();
  const selectedChallengeText = challenges[dayOfMonth % challenges.length];
  elements.challengeDesc.innerText = selectedChallengeText;
  
  // Compute Readiness & dashboard metrics
  calculateReadiness();
  renderDashboardMarketDetails();
  
  // Render other tabs
  renderRoadmapTimeline();
  renderSkillsChecklists();
  renderCertificationsAndDetails();
  renderPortfolioBuilder();
  renderResumeTemplates();
  initQuizPane();
  renderInterviewQuestions();
  renderLearningHubResources();
}

// --- READINESS & RENDER COMPUTATIONS ---
function calculateReadiness() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  // Count items
  let totalRoadmapItems = 0;
  career.roadmap.forEach(stage => totalRoadmapItems += stage.milestones.length);
  
  const totalSkills = career.skills.technical.length + career.skills.soft.length;
  
  // Completed items count
  const compRoadmap = (completedRoadmapItems[careerKey] || []).length;
  const compSkills = (completedSkills[careerKey] || []).length;
  const highscore = quizHighScore[careerKey] || 0; // percentage
  
  // Weighting: 50% roadmap timeline + 40% skills + 10% high score
  const roadmapPct = totalRoadmapItems > 0 ? (compRoadmap / totalRoadmapItems) * 50 : 0;
  const skillsPct = totalSkills > 0 ? (compSkills / totalSkills) * 40 : 0;
  const quizPct = (highscore / 100) * 10;
  
  const readinessValue = Math.round(roadmapPct + skillsPct + quizPct);
  
  elements.statReadiness.innerText = `${readinessValue}%`;
  elements.progressDialText.innerText = `${readinessValue}%`;
  
  // Update visual progress circular dash offset
  // radius = 60, circumference = 2 * PI * r = 376.99 (~377)
  const offset = 377 - (377 * readinessValue) / 100;
  elements.progressDial.style.strokeDashoffset = offset;
}

function renderDashboardMarketDetails() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  // Outlook
  elements.marketGrowth.innerText = career.marketOutlook.growth;
  
  // Top hiring sectors tags
  elements.marketSectors.innerHTML = "";
  career.marketOutlook.topIndustries.forEach(sector => {
    const badge = document.createElement('span');
    badge.className = 'industry-badge';
    badge.innerText = sector;
    elements.marketSectors.appendChild(badge);
  });
  
  // Salary values
  elements.salaryEntryVal.innerText = `$${career.salary.entry.toLocaleString()}`;
  elements.salaryMidVal.innerText = `$${career.salary.mid.toLocaleString()}`;
  elements.salarySeniorVal.innerText = `$${career.salary.senior.toLocaleString()}`;
  
  // Compute average based on user experience selection
  let selectedSalary = career.salary.mid;
  if (userProfile.experienceLevel === "entry") selectedSalary = career.salary.entry;
  else if (userProfile.experienceLevel === "senior") selectedSalary = career.salary.senior;
  elements.statSalary.innerText = `$${Math.round(selectedSalary / 1000)}k`;
  
  // Highlight target salary line item visually
  elements.salaryEntryBar.style.boxShadow = "none";
  elements.salaryMidBar.style.boxShadow = "none";
  elements.salarySeniorBar.style.boxShadow = "none";
  
  if (userProfile.experienceLevel === "entry") {
    elements.salaryEntryBar.style.boxShadow = "0 0 10px rgba(6, 182, 212, 0.6)";
  } else if (userProfile.experienceLevel === "mid") {
    elements.salaryMidBar.style.boxShadow = "0 0 10px rgba(6, 182, 212, 0.6)";
  } else {
    elements.salarySeniorBar.style.boxShadow = "0 0 10px rgba(6, 182, 212, 0.6)";
  }
}

// --- DAILY CHALLENGE TRIGGER ---
elements.completeChallengeBtn.addEventListener('click', () => {
  const todayStr = new Date().toDateString();
  if (lastStreakDate === todayStr) return;
  
  streakCount++;
  lastStreakDate = todayStr;
  saveState();
  
  elements.statStreak.innerText = `${streakCount} Day${streakCount !== 1 ? 's' : ''}`;
  elements.completeChallengeBtn.disabled = true;
  elements.completeChallengeBtn.innerText = "Completed today! Streak Saved";
  
  // Success trigger animation
  elements.statStreak.style.color = "var(--accent-amber)";
  setTimeout(() => {
    elements.statStreak.style.color = "var(--text-primary)";
  }, 1000);
});

// --- ROADMAP & SKILLS PAGE ---
function renderRoadmapTimeline() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  elements.roadmapTimeline.innerHTML = "";
  
  let milestoneIndexCounter = 0;
  const currentCompleted = completedRoadmapItems[careerKey] || [];
  
  career.roadmap.forEach((stage, stageIndex) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'timeline-step';
    
    // Determine active stage based on previous completed stages
    // If all tasks in stage 0 are complete, stage 1 is active.
    let isStageCompleted = true;
    let isStageActive = false;
    
    stage.milestones.forEach((_, idx) => {
      const globalIndex = milestoneIndexCounter + idx;
      if (!currentCompleted.includes(globalIndex)) {
        isStageCompleted = false;
      }
    });
    
    if (stageIndex === 0) {
      isStageActive = !isStageCompleted;
    } else {
      // previous stage was completed, and this one isn't yet fully completed
      const prevStageMilestonesCount = career.roadmap[stageIndex - 1].milestones.length;
      let prevStageCompleted = true;
      let prevCounter = milestoneIndexCounter - prevStageMilestonesCount;
      
      for(let p = 0; p < prevStageMilestonesCount; p++) {
        if (!currentCompleted.includes(prevCounter + p)) {
          prevStageCompleted = false;
        }
      }
      isStageActive = prevStageCompleted && !isStageCompleted;
    }
    
    if (isStageCompleted) stepDiv.classList.add('completed');
    if (isStageActive) stepDiv.classList.add('active');
    
    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    marker.innerText = isStageCompleted ? '✓' : stageIndex + 1;
    stepDiv.appendChild(marker);
    
    const content = document.createElement('div');
    content.className = 'glass-panel timeline-content';
    
    const header = document.createElement('div');
    header.className = 'timeline-header';
    
    const title = document.createElement('h4');
    title.className = 'timeline-title';
    title.innerText = stage.title;
    header.appendChild(title);
    
    const duration = document.createElement('span');
    duration.className = 'timeline-duration';
    duration.innerText = stage.duration;
    header.appendChild(duration);
    
    content.appendChild(header);
    
    const checklist = document.createElement('ul');
    checklist.className = 'checklist';
    
    stage.milestones.forEach((milestone, idx) => {
      const globalIdx = milestoneIndexCounter;
      milestoneIndexCounter++;
      
      const item = document.createElement('li');
      const isChecked = currentCompleted.includes(globalIdx);
      item.className = `checklist-item ${isChecked ? 'checked' : ''}`;
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isChecked;
      checkbox.addEventListener('change', () => {
        toggleRoadmapMilestone(careerKey, globalIdx);
      });
      
      const label = document.createElement('span');
      label.innerText = milestone;
      
      item.appendChild(checkbox);
      item.appendChild(label);
      item.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
          toggleRoadmapMilestone(careerKey, globalIdx);
        }
      });
      
      checklist.appendChild(item);
    });
    
    content.appendChild(checklist);
    stepDiv.appendChild(content);
    
    elements.roadmapTimeline.appendChild(stepDiv);
  });
}

function toggleRoadmapMilestone(careerKey, index) {
  if (!completedRoadmapItems[careerKey]) {
    completedRoadmapItems[careerKey] = [];
  }
  
  const arr = completedRoadmapItems[careerKey];
  const idx = arr.indexOf(index);
  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(index);
  }
  
  saveState();
  calculateReadiness();
  renderRoadmapTimeline(); // Re-render to update classes
}

function renderSkillsChecklists() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  elements.skillsTechList.innerHTML = "";
  elements.skillsSoftList.innerHTML = "";
  
  const currentSkills = completedSkills[careerKey] || [];
  
  // Render Technical
  career.skills.technical.forEach(skill => {
    const item = document.createElement('div');
    const isChecked = currentSkills.includes(skill.name);
    item.className = 'skill-tag-pill';
    if (isChecked) {
      item.style.borderColor = 'var(--accent-indigo)';
      item.style.background = 'var(--accent-indigo-glow)';
    }
    
    const labelRow = document.createElement('div');
    labelRow.style.display = 'flex';
    labelRow.style.gap = '8px';
    labelRow.style.alignItems = 'center';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;
    checkbox.addEventListener('change', () => {
      toggleSkill(careerKey, skill.name);
    });
    
    const nameSpan = document.createElement('span');
    nameSpan.style.fontWeight = '600';
    nameSpan.innerText = skill.name;
    
    labelRow.appendChild(checkbox);
    labelRow.appendChild(nameSpan);
    
    const catSpan = document.createElement('span');
    catSpan.className = 'category';
    catSpan.innerText = skill.category;
    
    item.appendChild(labelRow);
    item.appendChild(catSpan);
    
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        toggleSkill(careerKey, skill.name);
      }
    });
    
    elements.skillsTechList.appendChild(item);
  });
  
  // Render Soft
  career.skills.soft.forEach(skill => {
    const item = document.createElement('div');
    const isChecked = currentSkills.includes(skill);
    item.className = 'skill-tag-pill';
    if (isChecked) {
      item.style.borderColor = 'var(--accent-teal)';
      item.style.background = 'var(--accent-teal-glow)';
    }
    
    const labelRow = document.createElement('div');
    labelRow.style.display = 'flex';
    labelRow.style.gap = '8px';
    labelRow.style.alignItems = 'center';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;
    checkbox.addEventListener('change', () => {
      toggleSkill(careerKey, skill);
    });
    
    const nameSpan = document.createElement('span');
    nameSpan.style.fontWeight = '600';
    nameSpan.innerText = skill;
    
    labelRow.appendChild(checkbox);
    labelRow.appendChild(nameSpan);
    
    const catSpan = document.createElement('span');
    catSpan.className = 'category';
    catSpan.innerText = "Soft Skill";
    
    item.appendChild(labelRow);
    item.appendChild(catSpan);
    
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        toggleSkill(careerKey, skill);
      }
    });
    
    elements.skillsSoftList.appendChild(item);
  });
}

function toggleSkill(careerKey, name) {
  if (!completedSkills[careerKey]) {
    completedSkills[careerKey] = [];
  }
  
  const arr = completedSkills[careerKey];
  const idx = arr.indexOf(name);
  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(name);
  }
  
  saveState();
  calculateReadiness();
  renderSkillsChecklists();
}

function renderCertificationsAndDetails() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  elements.certificationsList.innerHTML = "";
  career.education.certifications.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    
    const info = document.createElement('div');
    info.className = 'cert-info';
    
    const name = document.createElement('h5');
    name.innerText = cert.name;
    info.appendChild(name);
    
    const meta = document.createElement('span');
    meta.innerText = `Cost: ${cert.cost} • Complexity: ${cert.difficulty}`;
    info.appendChild(meta);
    
    card.appendChild(info);
    
    const badge = document.createElement('span');
    badge.className = 'cert-badge';
    badge.innerText = cert.difficulty;
    card.appendChild(badge);
    
    elements.certificationsList.appendChild(card);
  });
  
  elements.eduBootcampText.innerText = career.education.bootcamps;
  elements.eduDegreeText.innerText = career.education.degreeRequired;
}

// --- PORTFOLIO BUILDER PAGE ---
function renderPortfolioBuilder() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  elements.portfolioTitle.innerText = career.portfolio.title;
  elements.portfolioDesc.innerText = career.portfolio.description;
  
  // Tech stack badges
  elements.portfolioStack.innerHTML = "";
  career.portfolio.techStack.forEach(tech => {
    const badge = document.createElement('span');
    badge.className = 'tech-badge';
    badge.innerText = tech;
    elements.portfolioStack.appendChild(badge);
  });
  
  // Requirements checklist
  elements.portfolioFeatures.innerHTML = "";
  const currentCompleted = portfolioFeaturesCompleted[careerKey] || [];
  
  career.portfolio.features.forEach((feature, index) => {
    const li = document.createElement('li');
    const isChecked = currentCompleted.includes(index);
    li.className = `checklist-item ${isChecked ? 'checked' : ''}`;
    
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = isChecked;
    cb.addEventListener('change', () => {
      togglePortfolioFeature(careerKey, index);
    });
    
    const text = document.createElement('span');
    text.innerText = feature;
    
    li.appendChild(cb);
    li.appendChild(text);
    li.addEventListener('click', (e) => {
      if (e.target !== cb) {
        cb.checked = !cb.checked;
        togglePortfolioFeature(careerKey, index);
      }
    });
    
    elements.portfolioFeatures.appendChild(li);
  });
  
  // Implementation steps timeline
  elements.portfolioSteps.innerHTML = "";
  career.portfolio.steps.forEach((step, index) => {
    const item = document.createElement('div');
    item.className = 'step-item';
    
    const num = document.createElement('div');
    num.className = 'step-num';
    num.innerText = index + 1;
    
    const txt = document.createElement('div');
    txt.className = 'step-text';
    txt.innerText = step;
    
    item.appendChild(num);
    item.appendChild(txt);
    elements.portfolioSteps.appendChild(item);
  });
}

function togglePortfolioFeature(careerKey, index) {
  if (!portfolioFeaturesCompleted[careerKey]) {
    portfolioFeaturesCompleted[careerKey] = [];
  }
  const arr = portfolioFeaturesCompleted[careerKey];
  const idx = arr.indexOf(index);
  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(index);
  }
  saveState();
  renderPortfolioBuilder();
}

// --- RESUME OPTIMIZER PAGE ---
function renderResumeTemplates() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  // Populate draft template text space
  const name = userProfile.name;
  const targetTitle = career.title;
  
  elements.resumeDraftText.value = `=====================================================
${name.toUpperCase()} | TARGET ROLE: ${targetTitle.toUpperCase()}
Email: candidate@domain.com | Phone: (555) 019-2834 | GitHub: github.com/candidate
=====================================================

PROFESSIONAL SUMMARY
Highly motivated candidate transitioning to a ${targetTitle} role, specialized in building functional, high-value systems. Bringing structured knowledge and hands-on portfolio milestones under 10+ hrs/wk dedication plans.

TECHNICAL COMPETENCIES
- Mastered Skills: ${career.skills.technical.slice(0, 4).map(s => s.name).join(', ')}
- Core Knowledge Areas: ${career.skills.technical.slice(4, 7).map(s => s.name).join(', ')}
- Certifications: ${career.education.certifications.map(c => c.name.split(' (')[0]).join(', ')}

SELECTED PORTFOLIO PROJECT
"${career.portfolio.title}"
Tech Stack: ${career.portfolio.techStack.join(', ')}
- [EDIT THIS LINE: Add your first completed feature checklist item e.g. JWT security]
- [EDIT THIS LINE: Add your secondary feature details detailing performance output]
- [EDIT THIS LINE: Explain deployment strategy and integration pipelines]

WORK HISTORY
[Previous Company Name] | [Your Title] | [Start Date] - [End Date]
- [EDIT THIS LINE: Quantify operational impact utilizing metrics: e.g. ${career.resume.metricsTemplate}]
- Collaborated across departments to audit customer requests, optimizing processing latency.
- Initiated automation scripts to clean and manage data reports.

EDUCATION
- ${career.education.certifications[0] ? career.education.certifications[0].name : "Self-Taught Path"}
- Bachelor of Science / Arts - [Your Major], [Graduation Year]
`;
}

elements.optimizeResumeBtn.addEventListener('click', () => {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  const resumeText = elements.resumeInput.value.trim().toLowerCase();
  const jobText = elements.jobInput.value.trim().toLowerCase();
  
  if (!resumeText) {
    alert("Please paste your resume text to execute the optimization sweep.");
    return;
  }
  
  const keywords = career.resume.keywords;
  const found = [];
  const missing = [];
  
  keywords.forEach(kw => {
    // Escape keywords for regex safety (handles .js, +, etc)
    const escaped = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    
    if (regex.test(resumeText)) {
      found.push(kw);
    } else {
      missing.push(kw);
    }
  });
  
  // Calculate match percentage
  let matchPercentage = 0;
  if (keywords.length > 0) {
    matchPercentage = Math.round((found.length / keywords.length) * 100);
  }
  
  // Quantified metrics bonus
  // Checks if text includes percentage improvements (e.g. 20%, $30k, 5x, etc)
  const hasMetrics = /[\d]+[%$x\s\-]+/.test(resumeText);
  if (hasMetrics && found.length > 0) {
    matchPercentage = Math.min(matchPercentage + 10, 100);
  }
  
  // Update gauge classes
  elements.atsScore.innerText = `${matchPercentage}%`;
  elements.atsScore.className = "ats-badge-glow";
  
  if (matchPercentage >= 75) {
    elements.atsScore.classList.add('high');
  } else if (matchPercentage >= 45) {
    elements.atsScore.classList.add('mid');
  } else {
    elements.atsScore.classList.add('low');
  }
  
  // Render Found list tags
  elements.keywordsFound.innerHTML = "";
  if (found.length === 0) {
    elements.keywordsFound.innerHTML = '<span style="font-size: 12px; color: var(--text-muted);">None found yet. Include technical skills on your list.</span>';
  } else {
    found.forEach(kw => {
      const tag = document.createElement('span');
      tag.className = 'status-tag found';
      tag.innerText = `✓ ${kw}`;
      elements.keywordsFound.appendChild(tag);
    });
  }
  
  // Render Missing tags
  elements.keywordsMissing.innerHTML = "";
  if (missing.length === 0) {
    elements.keywordsMissing.innerHTML = '<span style="font-size: 12px; color: #10b981; font-weight: 600;">100% Keyword Compliance Achieved!</span>';
  } else {
    missing.forEach(kw => {
      const tag = document.createElement('span');
      tag.className = 'status-tag missing';
      tag.innerText = `+ Add ${kw}`;
      elements.keywordsMissing.appendChild(tag);
    });
  }
  
  // Custom suggest text
  let suggestion = "";
  if (!hasMetrics) {
    suggestion = `<strong>Warning: Missing Quantified Metrics.</strong> Automated recruiters favor metrics. Try incorporating sentences like: "<em>${career.resume.metricsTemplate}</em>" to replace flat descriptions.`;
  } else if (matchPercentage < 65) {
    suggestion = `<strong>Action Required: Low Match Score.</strong> Your resume lacks critical technical hooks. Try adding missing skills like <strong>${missing.slice(0, 3).join(', ')}</strong> directly under a "Technical Competencies" list header.`;
  } else {
    suggestion = `<strong>Excellent compliance score!</strong> To finalize, make sure your professional summary matches the exact role keywords ("${career.title}").`;
  }
  elements.resumeMetricSuggestion.innerHTML = suggestion;
});

// --- SKILL ASSESSMENT QUIZ ---
let currentQuizCareer = "";

function initQuizPane() {
  if (!userProfile) return;
  
  // Check if target career has changed
  if (currentQuizCareer !== userProfile.targetCareer) {
    currentQuizCareer = userProfile.targetCareer;
    resetQuizState();
  }
}

function resetQuizState() {
  currentQuizQuestionIndex = 0;
  quizScore = 0;
  
  elements.quizWelcomePane.style.display = "block";
  elements.quizQPane.style.display = "none";
  elements.quizResultsPane.style.display = "none";
  elements.quizExplanation.classList.remove('active');
  elements.nextQuestionBtn.style.display = "none";
}

elements.startQuizBtn.addEventListener('click', () => {
  elements.quizWelcomePane.style.display = "none";
  elements.quizQPane.style.display = "block";
  loadQuizQuestion();
});

function loadQuizQuestion() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career || !career.quiz) return;
  
  const question = career.quiz[currentQuizQuestionIndex];
  if (!question) return;
  
  // Progress indicators
  const pct = ((currentQuizQuestionIndex) / career.quiz.length) * 100;
  elements.quizProgress.style.width = `${pct}%`;
  elements.quizQIndicator.innerText = `Question ${currentQuizQuestionIndex + 1} of ${career.quiz.length}`;
  elements.quizQuestionText.innerText = question.question;
  
  // Draw options buttons
  elements.quizOptionsContainer.innerHTML = "";
  elements.quizExplanation.classList.remove('active');
  elements.nextQuestionBtn.style.display = "none";
  
  question.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.innerText = opt;
    btn.addEventListener('click', () => {
      handleAnswerSelection(idx, btn);
    });
    elements.quizOptionsContainer.appendChild(btn);
  });
}

function handleAnswerSelection(selectedIndex, clickedBtn) {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  const question = career.quiz[currentQuizQuestionIndex];
  
  // Lock other buttons
  const buttons = elements.quizOptionsContainer.querySelectorAll('.quiz-option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  clickedBtn.classList.add('selected');
  const isCorrect = selectedIndex === question.correctAnswerIndex;
  
  if (isCorrect) {
    clickedBtn.classList.add('correct');
    quizScore++;
  } else {
    clickedBtn.classList.add('wrong');
    // Highlight the correct one
    buttons[question.correctAnswerIndex].classList.add('correct');
  }
  
  // Show explanations
  elements.quizExplanationTitle.innerText = isCorrect ? "✓ Correct!" : "✗ Incorrect Answer";
  elements.quizExplanationTitle.style.color = isCorrect ? "#10b981" : "#ef4444";
  elements.quizExplanationText.innerText = question.explanation;
  elements.quizExplanation.classList.add('active');
  
  // Enable next questions
  elements.nextQuestionBtn.style.display = "inline-flex";
  elements.nextQuestionBtn.innerText = currentQuizQuestionIndex + 1 === career.quiz.length ? "Finish Quiz" : "Next Question";
}

elements.nextQuestionBtn.addEventListener('click', () => {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  
  currentQuizQuestionIndex++;
  if (currentQuizQuestionIndex < career.quiz.length) {
    loadQuizQuestion();
  } else {
    showQuizResults();
  }
});

function showQuizResults() {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  
  elements.quizQPane.style.display = "none";
  elements.quizResultsPane.style.display = "block";
  
  const scorePercent = Math.round((quizScore / career.quiz.length) * 100);
  
  // Update scores in profile states
  if (!quizHighScore[careerKey] || scorePercent > quizHighScore[careerKey]) {
    quizHighScore[careerKey] = scorePercent;
    saveState();
    calculateReadiness(); // Readiness incorporates quiz score!
  }
  
  elements.quizResultScore.innerText = `You scored ${scorePercent}% (${quizScore}/${career.quiz.length} correct answers)`;
  
  if (scorePercent >= 80) {
    elements.quizResultEmoji.innerText = "🏆";
    elements.quizResultTitle.innerText = "Verification Approved!";
    elements.quizResultEval.innerText = "Excellent understanding of core concepts. You have satisfied this verification gap, boosting your main readiness index. Proceed to interview preparation next!";
  } else {
    elements.quizResultEmoji.innerText = "📚";
    elements.quizResultTitle.innerText = "Study Review Advised";
    elements.quizResultEval.innerText = "A passing grade of 80% is recommended. Review standard roadmaps, check out the resources in the Learning Hub, and attempt this evaluation again.";
  }
}

elements.restartQuizBtn.addEventListener('click', () => {
  resetQuizState();
  elements.quizWelcomePane.style.display = "none";
  elements.quizQPane.style.display = "block";
  loadQuizQuestion();
});

// --- INTERVIEW PREP SIMULATOR ---
function renderInterviewQuestions() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  elements.interviewQuestionsList.innerHTML = "";
  activeInterviewIndex = null;
  elements.interviewEmptyState.style.display = "flex";
  elements.interviewActivePane.style.display = "none";
  
  career.interviewPrep.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'interview-q-card';
    card.addEventListener('click', () => {
      selectInterviewQuestion(index, card);
    });
    
    const row = document.createElement('div');
    row.className = 'interview-badge-row';
    
    const badge = document.createElement('span');
    badge.className = `q-type-badge ${item.type === 'technical' ? 'tech' : 'beh'}`;
    badge.innerText = item.type;
    row.appendChild(badge);
    
    card.appendChild(row);
    
    const txt = document.createElement('div');
    txt.className = 'q-text-stub';
    txt.innerText = item.question;
    card.appendChild(txt);
    
    elements.interviewQuestionsList.appendChild(card);
  });
}

function selectInterviewQuestion(index, cardEl) {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  const question = career.interviewPrep[index];
  if (!question) return;
  
  activeInterviewIndex = index;
  
  // Highlight card
  const cards = elements.interviewQuestionsList.querySelectorAll('.interview-q-card');
  cards.forEach(c => c.classList.remove('active'));
  cardEl.classList.add('active');
  
  // Show details pane
  elements.interviewEmptyState.style.display = "none";
  elements.interviewActivePane.style.display = "flex";
  
  elements.activeQBadge.className = `q-type-badge ${question.type === 'technical' ? 'tech' : 'beh'}`;
  elements.activeQBadge.innerText = question.type;
  elements.activeQText.innerText = question.question;
  elements.activeQHint.innerHTML = `<strong>Mentor Hint:</strong> ${question.hint}`;
  
  // Reset inputs
  elements.interviewAnswerInput.value = "";
  elements.activeEvalBox.classList.remove('active');
}

elements.submitAnswerBtn.addEventListener('click', () => {
  if (activeInterviewIndex === null || !userProfile) return;
  
  const career = careerData[userProfile.targetCareer];
  const question = career.interviewPrep[activeInterviewIndex];
  const answer = elements.interviewAnswerInput.value.trim();
  
  if (!answer || answer.length < 15) {
    alert("Please write a complete answer (at least two sentences) to simulate advisor evaluation feedback.");
    return;
  }
  
  // Analyze words
  const answerLower = answer.toLowerCase();
  const matchedKeywords = [];
  question.keywords.forEach(kw => {
    if (answerLower.includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  let scoreLetter = "D";
  let feedbackText = "";
  
  // Check structural elements (STAR compliance for behavioral)
  const isBehavioral = question.type === "behavioral";
  const containsSTAR = /result|action|situation|task|achieve|challenge|problem|solved/i.test(answerLower);
  
  const keywordsMatchRatio = question.keywords.length > 0 ? matchedKeywords.length / question.keywords.length : 0;
  
  if (isBehavioral) {
    if (keywordsMatchRatio >= 0.5 && containsSTAR) {
      scoreLetter = "A - Excellent";
      feedbackText = `Your response successfully follows the STAR structure! You hit key concepts (<strong>${matchedKeywords.join(', ')}</strong>) and framed the result clearly. Ready for production loops!`;
    } else if (containsSTAR || keywordsMatchRatio >= 0.4) {
      scoreLetter = "B - Capable";
      feedbackText = `Solid attempt, but there is room for optimization. Try specifying structural metrics (e.g. details of the final results) and mention these missing terms: <strong>${question.keywords.filter(k => !matchedKeywords.includes(k)).join(', ')}</strong>.`;
    } else {
      scoreLetter = "C - Needs Refactoring";
      feedbackText = `Your answer is overly brief. For behavioral scenarios, always detail the <strong>Situation</strong>, specify your exact <strong>Task</strong>, state the structural <strong>Action</strong> you took, and quantify the <strong>Result</strong>.`;
    }
  } else {
    // Technical questions
    if (keywordsMatchRatio >= 0.6) {
      scoreLetter = "A - Excellent";
      feedbackText = `Spot on explanation! You successfully hit the core technical parameters (<strong>${matchedKeywords.join(', ')}</strong>). This details exactly what production interview reviewers look for.`;
    } else if (keywordsMatchRatio >= 0.3) {
      scoreLetter = "B - Capable";
      feedbackText = `Your description is accurate but lacks completeness. Ensure you mention and explain terms like: <strong>${question.keywords.filter(k => !matchedKeywords.includes(k)).join(', ')}</strong> to show deeper architectural knowledge.`;
    } else {
      scoreLetter = "C - Needs Refactoring";
      feedbackText = `Missing key architectural patterns. Review the mentor hints box, check details on the <strong>Roadmap</strong> page, and make sure you address: <strong>${question.keywords.join(', ')}</strong>.`;
    }
  }
  
  elements.evalScore.innerText = scoreLetter;
  elements.evalDetails.innerHTML = feedbackText;
  elements.activeEvalBox.classList.add('active');
});

// --- CURATED LEARNING HUB ---
function renderLearningHubResources() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  // Paid Columns
  elements.paidCoursesList.innerHTML = "";
  career.learningResources.paid.forEach(course => {
    const card = document.createElement('div');
    card.className = 'glass-panel resource-card';
    card.style.cursor = 'default'; // Static info cards
    
    const header = document.createElement('div');
    header.className = 'resource-header';
    
    const icon = document.createElement('div');
    icon.className = 'resource-icon-box';
    icon.innerText = "🎓";
    header.appendChild(icon);
    
    const badge = document.createElement('span');
    badge.className = 'resource-badge';
    badge.innerText = course.price;
    header.appendChild(badge);
    
    card.appendChild(header);
    
    const title = document.createElement('h4');
    title.className = 'resource-title';
    title.innerText = course.title;
    card.appendChild(title);
    
    const desc = document.createElement('p');
    desc.className = 'resource-desc';
    desc.innerText = `Duration: ${course.duration} • Highly recommended learning material.`;
    card.appendChild(desc);
    
    elements.paidCoursesList.appendChild(card);
  });
  
  // YouTube Columns
  elements.youtubeResourcesList.innerHTML = "";
  career.learningResources.youtube.forEach(yt => {
    const card = document.createElement('div');
    card.className = 'glass-panel resource-card';
    card.style.cursor = 'default';
    
    const header = document.createElement('div');
    header.className = 'resource-header';
    
    const icon = document.createElement('div');
    icon.className = 'resource-icon-box';
    icon.innerText = "▶";
    icon.style.color = "#ef4444";
    header.appendChild(icon);
    
    const badge = document.createElement('span');
    badge.className = 'resource-badge';
    badge.innerText = "Free Series";
    header.appendChild(badge);
    
    card.appendChild(header);
    
    const title = document.createElement('h4');
    title.className = 'resource-title';
    title.innerText = yt.channel;
    card.appendChild(title);
    
    const desc = document.createElement('p');
    desc.className = 'resource-desc';
    desc.innerText = yt.desc;
    card.appendChild(desc);
    
    elements.youtubeResourcesList.appendChild(card);
  });
}

// --- AI CONCIERGE CHAT INTELLIGENCE ---
function sendMentorWelcomeMessage() {
  if (!userProfile) return;
  const career = careerData[userProfile.targetCareer];
  if (!career) return;
  
  const welcomeText = `Hello **${userProfile.name}**! I am your AI Career Concierge for **${career.title}**.

I can help you build custom learning schedules, parse your resume structure, or clarify tricky concepts you will encounter. What question can I assist you with today?`;
  
  appendMessage("mentor", welcomeText);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.innerText = sender === "mentor" ? "M" : "U";
  
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  
  // Simple markdown-to-HTML parser (bold lists headers)
  let parsedText = text
    .replace(/\n/g, '<br/>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/- (.*?)(<br\/>|$)/g, '<li>$1</li>');
    
  if (parsedText.includes('<li>')) {
    // wrap list items
    parsedText = parsedText.replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>');
    // clean nested wraps
    parsedText = parsedText.replace(/<\/ul><ul>/g, '');
  }
  
  bubble.innerHTML = parsedText;
  
  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  elements.chatConversation.appendChild(msgDiv);
  
  // Auto-scroll chat
  elements.chatConversation.scrollTop = elements.chatConversation.scrollHeight;
  
  // Save history
  currentChatHistory.push({ sender, text });
}

function showTypingIndicator() {
  const ind = document.createElement('div');
  ind.id = 'chat-typing';
  ind.className = 'chat-typing-indicator';
  ind.innerHTML = `<span>Concierge is drafting a reply</span>
                   <div class="dot"></div>
                   <div class="dot"></div>
                   <div class="dot"></div>`;
  elements.chatConversation.appendChild(ind);
  elements.chatConversation.scrollTop = elements.chatConversation.scrollHeight;
}

function removeTypingIndicator() {
  const ind = document.getElementById('chat-typing');
  if (ind) ind.remove();
}

function handleChatSubmit() {
  const query = elements.chatInput.value.trim();
  if (!query) return;
  
  appendMessage("user", query);
  elements.chatInput.value = "";
  
  // Simulate mentor typing delay
  showTypingIndicator();
  
  setTimeout(() => {
    removeTypingIndicator();
    generateMentorResponse(query);
  }, 1000 + Math.random() * 1200);
}

function generateMentorResponse(query) {
  if (!userProfile) return;
  const careerKey = userProfile.targetCareer;
  const career = careerData[careerKey];
  if (!career) return;
  
  const qLower = query.toLowerCase();
  let reply = "";
  
  if (qLower.includes('roadmap') || qLower.includes('path') || qLower.includes('milestone') || qLower.includes('step')) {
    reply = `To succeed as a **${career.title}**, here is the structural step-by-step roadmap you should prioritize:
    
- **${career.roadmap[0].title}** (${career.roadmap[0].duration}): Focus on ${career.roadmap[0].milestones[0].split(':')[0]}.
- **${career.roadmap[1].title}** (${career.roadmap[1].duration}): Master ${career.roadmap[1].milestones[0].split(':')[0]}.
- **${career.roadmap[2].title}** (${career.roadmap[2].duration}): Build pipelines and database layers.
- **${career.roadmap[3].title}** (${career.roadmap[3].duration}): Focus on Git, code reviews, and hosting deployments.
    
Check out the interactive **Roadmap & Skills** tab to check these off!`;
  } 
  else if (qLower.includes('cert') || qLower.includes('certification') || qLower.includes('degree') || qLower.includes('school')) {
    const certNames = career.education.certifications.map(c => `* **${c.name}** (Difficulty: ${c.difficulty}, Cost: ${c.cost})`).join('\n');
    reply = `Regarding education, here is what is competitive for a **${career.title}** role:
    
${certNames}

**Degree Relevance:** ${career.education.degreeRequired}
**Bootcamps:** ${career.education.bootcamps}`;
  } 
  else if (qLower.includes('resume') || qLower.includes('keyword') || qLower.includes('ats') || qLower.includes('buzzword')) {
    reply = `To bypass applicant tracking systems (ATS) for **${career.title}** applications, optimize your resume targeting these core components:
    
- **Buzzwords to include:** ${career.resume.keywords.slice(0, 8).join(', ')}
- **Action Verbs:** ${career.resume.actionVerbs.join(', ')}
- **Metrics Tip:** Try rewriting your projects using this structure: *"${career.resume.metricsTemplate}"*

You can test your document matching score directly inside the **Resume Optimizer** tab!`;
  }
  else if (qLower.includes('salary') || qLower.includes('earn') || qLower.includes('money') || qLower.includes('market') || qLower.includes('outlook')) {
    reply = `The hiring statistics for **${career.title}** are highly encouraging:
    
- **Growth Projections:** ${career.marketOutlook.growth}
- **Hiring Demand:** ${career.marketOutlook.demand}
- **Entry Salary Level:** $${career.salary.entry.toLocaleString()}
- **Mid-Level Median:** $${career.salary.mid.toLocaleString()}
- **Senior Role Salaries:** $${career.salary.senior.toLocaleString()}
    
Target industries include: **${career.marketOutlook.topIndustries.join(', ')}**.`;
  }
  else if (qLower.includes('portfolio') || qLower.includes('project') || qLower.includes('build')) {
    reply = `I highly recommend building this portfolio piece: **"${career.portfolio.title}"**.
    
It is structured with:
- **Core Stack:** ${career.portfolio.techStack.join(', ')}
- **Key Features:** ${career.portfolio.features.slice(0, 3).join(', ')}

Review the **Portfolio Builder** tab to track code milestones and step-by-step assembly tutorials.`;
  }
  else if (qLower.includes('interview') || qLower.includes('question') || qLower.includes('mock')) {
    reply = `You will face structural questions in your interview loops. An example you should practice:
    
**"${career.interviewPrep[0].question}"** (${career.interviewPrep[0].type.toUpperCase()})
*Hint:* ${career.interviewPrep[0].hint}

Try answering this prompt on the **Interview Prep** page to receive structural scoring grading!`;
  }
  else {
    reply = `I understand you are studying details regarding the **${career.title}** career path. 
    
To accelerate your readiness rating, I suggest:
1. Complete checklist points in the **Roadmap** page.
2. Paste a draft resume in the **Resume Optimizer** to check ATS keyword coverage.
3. Test your quantitative knowledge using the **Skill Assessment** quiz.
    
Let me know if you want detailed pointers on certifications, roadmaps, portfolio specs, or salary scales!`;
  }
  
  appendMessage("mentor", reply);
}

// --- CONCIERGE HELP BUTTON TRIGGERS ---
elements.suggestRoadmapsBtn.addEventListener('click', () => {
  elements.chatInput.value = "Tell me about the step-by-step roadmap milestones.";
  handleChatSubmit();
});

elements.suggestCertsBtn.addEventListener('click', () => {
  elements.chatInput.value = "What certifications or degrees do I need to be competitive?";
  handleChatSubmit();
});

elements.suggestResumeBtn.addEventListener('click', () => {
  elements.chatInput.value = "Which resume keywords and metrics should I use?";
  handleChatSubmit();
});

elements.suggestSalaryBtn.addEventListener('click', () => {
  elements.chatInput.value = "What is the salary outlook and market demand?";
  handleChatSubmit();
});

// --- BASE EVENT LISTENERS SETUP ---
function initEventListeners() {
  // Onboarding
  elements.submitOnboardingBtn.addEventListener('click', handleOnboardingSubmit);
  elements.resetProfileBtn.addEventListener('click', resetProfile);
  
  // Chat inputs
  elements.sendChatBtn.addEventListener('click', handleChatSubmit);
  elements.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleChatSubmit();
  });
}
