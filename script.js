// =========================================================
// Portfolio behavior
// =========================================================

document.getElementById('year').textContent = new Date().getFullYear();

// Theme
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// Language system
// Default: Chinese for a Chinese browser or China timezone.
// Manual selection is remembered in localStorage.
// =========================================================
const translations = {
  en: {
    'hero.handle': 'also known as 万昊 (Wàn Hào)',
    'hero.key.role': '"role"',
    'hero.key.focus': '"focus"',
    'hero.key.status': '"status"',
    'hero.key.location': '"location"',
    'hero.key.seeking': '"seeking"',

    'hero.role': '"AI Application Engineer — Python / Full-Stack"',
    'hero.focus': '"LLM applications, RAG, APIs, automation"',
    'hero.status': '"Software Engineering student, graduating in 2027"',
    'hero.location': '"Chengdu, China"',
    'hero.seeking': '"AI / backend / full-stack internship"',

    'hero.contact': 'Get in touch',
    'hero.github': 'View GitHub',
    'hero.gitee': 'View Gitee',

    'nav.about': '/about',
    'nav.skills': '/skills',
    'nav.projects': '/projects',
    'nav.credentials': '/experience',
    'nav.contact': '/contact',

    'route.about': '/about',
    'route.skills': '/skills',
    'route.projects': '/projects',
    'route.credentials': '/experience',
    'route.contact': '/contact',

    'about.title': 'About',

    'about.p1':
      "I'm a Software Engineering student at Chengdu Neusoft University, graduating in 2027. My current focus is AI application engineering: building practical systems that connect LLMs with real data, APIs, databases, and automation.",

    'about.p2':
      "I work mainly with Python, FastAPI and Django, while also building with LlamaIndex, LangChain, DeepSeek, RAG, Playwright, Vue.js and Docker. I enjoy turning messy real-world data into structured, useful applications.",

    'facts.languages': 'Languages',

    'facts.languagesValue':
      'Arabic (native) · English (fluent) · Chinese (basic, learning)',

    'facts.education': 'Education',
    'facts.educationValue': 'B.Eng. Software Engineering',
    'facts.graduating': 'Graduating',

    'skills.title': 'Skills',
    'skills.ai': 'AI & LLM Applications',
    'skills.backend': 'Backend & APIs',
    'skills.data': 'Data & Automation',
    'skills.fullstack': 'Frontend & Engineering',

    'projects.title': 'Projects',

    'projects.lede':
      'Selected projects, with my role and the main technologies used.',

    'project.featured': 'Featured',
    'project.inDevelopment': 'In development',

    'project.personal': 'Personal project',
    'project.automation': 'Automation',
    'project.university': 'University project',
    'project.frontend': 'Frontend',
    'project.integration': 'Frontend + Backend Integration',
    'project.team': 'Team project',

    'project.role': 'My role:',

    'role.scraper': 'Python / AI Developer',
    'role.worksight': 'Backend & AI Engineer',
    'role.nextwatch': 'Backend / Full-Stack Developer',
    'role.bookkeeping': 'Backend Developer',
    'role.finpal': 'Frontend Developer',
    'role.snapbite': 'Frontend Developer + API Integration',
    'role.levticket': 'Project Lead / Full-Stack Developer',

    'project.scraper.desc':
      'AI-powered product data extraction pipeline. It combines Playwright, JSON-LD extraction, page cleaning, RAG, embeddings, DeepSeek, Pydantic structured output, and an AI review/correction loop to turn dynamic product pages into validated JSON.',

    'project.worksight.desc':
      'AI-powered attendance and workforce management system built around a FastAPI backend, MySQL, Vue.js management portal, and PySide6 desktop client. Covers employee management, attendance, work hours, alerts, reports, and face AI integration.',

    'project.nextwatch.desc':
      'Movie and anime discovery platform with user ratings, preferences, REST APIs, and TMDB integration. Built as a content-based recommendation project with Django REST Framework.',

    'project.maps.desc':
      'Batch web-scraping tool that extracts business listings and exports structured results to CSV and Excel. Supports single-query and batch searches with configurable result limits.',

    'project.bookkeeping.desc':
      'Multi-user Django application for income and expense tracking with category-based organization, user data isolation, and financial dashboard statistics. Developed as a university team project.',

    'project.finpal.desc':
      'Personal finance management SPA with shared-balance tracking, member management, and interactive spending analytics.',

    'project.snapbite.desc':
      'WeChat Mini Program frontend paired with a Python ordering backend. Covers product browsing, product details, cart, and purchase flow.',

    'project.levticket.desc':
      'Java ticketing application developed as a university team project. I coordinated the team while contributing to the application development.',

    'credentials.title': 'Experience & Achievements',

    'credentials.top10':
      'Ranked in the top 10% of my cohort, with strong results in database and web application development coursework.',

    'credentials.president':
      '<strong>President, International Student Union</strong> — Chengdu Neusoft University. Coordinated international students, communicated with university administration, and represented student concerns.',

    'credentials.scholarship':
      '<strong>Outstanding International Student Scholarship</strong> — awarded during undergraduate study.',

    'badge.top10': 'Top 10%',
    'badge.scholarship': 'Scholarship',

    'contact.title': "Let's talk",

    'contact.lede':
      'Open to AI application, backend, and full-stack internship opportunities in China.',

    'contact.email': 'Email',

    'footer.status': '200 — site operational',

    'ui.contentType': 'content-type: application/human'
  },

  zh: {
    'hero.handle': '中文名：万昊（Wàn Hào）',

    'hero.key.role': '"角色"',
    'hero.key.focus': '"重点"',
    'hero.key.status': '"状态"',
    'hero.key.location': '"所在地"',
    'hero.key.seeking': '"求职目标"',

    'hero.role': '"AI 应用开发 — Python / 全栈"',
    'hero.focus': '"大语言模型应用、RAG、API、自动化"',
    'hero.status': '"软件工程本科生，预计2027年毕业"',
    'hero.location': '"中国·成都"',
    'hero.seeking': '"AI / 后端 / 全栈开发实习"',

    'hero.contact': '联系我',
    'hero.github': '查看 GitHub',
    'hero.gitee': '查看 Gitee',

    'nav.about': '/关于',
    'nav.skills': '/技能',
    'nav.projects': '/项目',
    'nav.credentials': '/经历',
    'nav.contact': '/联系',

    'route.about': '/关于',
    'route.skills': '/技能',
    'route.projects': '/项目',
    'route.credentials': '/经历',
    'route.contact': '/联系',

    'about.title': '关于我',

    'about.p1':
      '我是一名就读于成都东软学院的软件工程本科生，预计2027年毕业。目前主要专注于 AI 应用开发，致力于将大语言模型与真实数据、API、数据库和自动化流程结合起来，构建实用的软件系统。',

    'about.p2':
      '我主要使用 Python、FastAPI 和 Django，同时使用 LlamaIndex、LangChain、DeepSeek、RAG、Playwright、Vue.js 和 Docker。我喜欢把复杂的真实数据转换成结构清晰、真正有用的应用。',

    'facts.languages': '语言',

    'facts.languagesValue':
      '阿拉伯语（母语）· 英语（流利）· 中文（基础，持续学习中）',

    'facts.education': '学历',
    'facts.educationValue': '软件工程学士',
    'facts.graduating': '预计毕业',

    'skills.title': '技术栈',

    'skills.ai': 'AI 与大语言模型应用',
    'skills.backend': '后端与 API',
    'skills.data': '数据与自动化',
    'skills.fullstack': '前端与工程实践',

    'projects.title': '项目',

    'projects.lede':
      '精选项目，并清楚说明我的负责内容和主要技术。',

    'project.featured': '重点项目',
    'project.inDevelopment': '开发中',

    'project.personal': '个人项目',
    'project.automation': '自动化工具',
    'project.university': '大学课程项目',
    'project.frontend': '前端项目',
    'project.integration': '前后端整合',
    'project.team': '团队项目',

    'project.role': '我的职责：',

    'role.scraper': 'Python / AI 开发',
    'role.worksight': '后端与 AI 开发',
    'role.nextwatch': '后端 / 全栈开发',
    'role.bookkeeping': '后端开发',
    'role.finpal': '前端开发',
    'role.snapbite': '前端开发 + API 整合',
    'role.levticket': '项目负责人 / 全栈开发',

    'project.scraper.desc':
      'AI 商品信息采集流水线。结合 Playwright、JSON-LD 提取、网页清洗、RAG、Embedding、DeepSeek、Pydantic 结构化输出以及 AI 审核与修正流程，将动态商品页面转换为经过验证的 JSON 数据。',

    'project.worksight.desc':
      'AI 智能考勤与员工管理系统，采用 FastAPI 后端、MySQL、Vue.js 管理端和 PySide6 桌面客户端。包含员工管理、考勤、工时统计、异常提醒、报表以及人脸 AI 功能集成。',

    'project.nextwatch.desc':
      '电影与动漫发现平台，支持用户评分、偏好、REST API 和 TMDB 数据集成。使用 Django REST Framework 构建基于内容的推荐功能。',

    'project.maps.desc':
      '批量网页采集工具，用于提取商户信息并导出为 CSV 和 Excel。支持单关键词和批量关键词搜索，并可设置结果数量限制。',

    'project.bookkeeping.desc':
      '多用户 Django 记账系统，用于收入和支出管理，支持分类、用户数据隔离和财务统计。作为大学团队项目开发。',

    'project.finpal.desc':
      '个人财务管理单页应用，包含共享余额、成员管理以及交互式消费数据分析。',

    'project.snapbite.desc':
      '微信小程序点餐前端，并配套 Python 点餐后端。实现商品浏览、商品详情、购物车和购买流程。',

    'project.levticket.desc':
      '大学团队开发的 Java 票务系统。我负责团队协调，同时参与项目开发。',

    'credentials.title': '经历与荣誉',

    'credentials.top10':
      '专业综合表现位于年级前10%，数据库和 Web 应用开发相关课程成绩较好。',

    'credentials.president':
      '<strong>国际学生会主席</strong> — 成都东软学院（2024–2025）。负责国际学生协调、与学校行政部门沟通，并代表学生处理相关事务。',

    'credentials.scholarship':
      '<strong>优秀国际学生奖学金</strong> — 本科期间获得。',

    'badge.top10': '年级前10%',
    'badge.scholarship': '奖学金',

    'contact.title': '联系我',

    'contact.lede':
      '目前关注中国地区的 AI 应用开发、后端开发和全栈开发实习机会。',

    'contact.email': '邮箱',

    'footer.status': '200 — 网站运行正常',

    'ui.contentType': '内容类型：个人信息'
  }
};

function detectInitialLanguage() {
  const saved = localStorage.getItem('language');

  if (saved === 'en' || saved === 'zh') {
    return saved;
  }

  const browserLanguages =
    navigator.languages || [navigator.language || ''];

  const chineseBrowser = browserLanguages.some(lang =>
    lang.toLowerCase().startsWith('zh')
  );

  const chinaTimezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Shanghai';

  return chineseBrowser || chinaTimezone ? 'zh' : 'en';
}

function applyLanguage(language) {
  const dictionary = translations[language];

  document.documentElement.lang =
    language === 'zh' ? 'zh-CN' : 'en';

  document.title =
    language === 'zh'
      ? '万昊 / Hicham Ouahbi — AI 应用开发'
      : 'Hicham Ouahbi — AI Application Engineer';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  // The button shows the language you can switch TO.
  document.getElementById('langLabel').textContent =
    language === 'zh' ? 'EN' : '中';

  document.getElementById('langToggle').setAttribute(
    'aria-label',
    language === 'zh'
      ? 'Switch to English'
      : '切换到中文'
  );

  document.getElementById('themeToggle').setAttribute(
    'aria-label',
    language === 'zh'
      ? '切换深色/浅色模式'
      : 'Switch between dark and light mode'
  );

  document.getElementById('menuToggle').setAttribute(
    'aria-label',
    language === 'zh'
      ? '打开导航菜单'
      : 'Toggle navigation'
  );

  localStorage.setItem('language', language);
}

let currentLanguage = detectInitialLanguage();

applyLanguage(currentLanguage);

document.getElementById('langToggle').addEventListener('click', () => {
  currentLanguage =
    currentLanguage === 'zh' ? 'en' : 'zh';

  applyLanguage(currentLanguage);
});