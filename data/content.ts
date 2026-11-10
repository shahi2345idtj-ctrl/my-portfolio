/**
 * =========================================================================
 * SHAHID's PORTFOLIO - CENTRAL CONTENT CONFIGURATION
 * =========================================================================
 * Edit all your personal information, links, projects, skills, education,
 * and blog posts in this single file.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: string; // e.g. "Intermediate", "Proficient", "Learning"
    iconName?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const portfolioData = {
  // 1. Personal & Brand Details
  personal: {
    name: "Shahid",
    fullName: "Shahid",
    tagline: "CSE (AI) Student & Aspiring Full-Stack / ML Developer",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    college: "Thejus Engineering College",
    university: "APJ Abdul Kalam Technological University (KTU)",
    location: "Thrissur, Kerala, India",
    email: "shahid.dev.cse@gmail.com",
    availableForHire: true,
    statusText: "Open to internships & open-source collaborations",
    bio: [
      "I'm a first-year Computer Science & Engineering (Artificial Intelligence) student at Thejus Engineering College, Thrissur, affiliated with APJ Abdul Kalam Technological University (KTU).",
      "I am passionate about combining modern frontend engineering with artificial intelligence to build software that is both technically sophisticated and deeply intuitive for everyday users.",
      "When I am not coding, you can find me exploring machine learning papers, tuning web interfaces, or contributing to student tech community events in Kerala."
    ],
  },

  // 2. Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      username: "shahid-dev",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      username: "shahid-cse",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      username: "@shahid.codes",
      icon: "Instagram",
    },
    {
      name: "Email",
      url: "mailto:shahid.dev.cse@gmail.com",
      username: "shahid.dev.cse@gmail.com",
      icon: "Mail",
    },
  ],

  // 3. Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],

  // 4. Hero Section Data
  hero: {
    preHeadline: "Welcome to my portfolio",
    headlineLine1: "Building Intelligent",
    headlineHighlight: "Digital Experiences",
    subtext: "CSE (AI) student passionate about web development, machine learning and creating user-friendly products.",
    primaryCtaText: "Let's Talk",
    secondaryCtaText: "Projects",
    photoPath: "/shahid.png",
    photoAlt: "Shahid - B.Tech CSE (AI) Student",
    chatBubbleText: "Hi, I'm Shahid",
    experienceBadgeText: "B.Tech CSE (AI) · Year 1",
  },

  // 5. Tech Stack Strip
  techStackStrip: {
    title: "My Tech Stack",
    subtitle: "Tools I use to bring ideas to life",
    items: [
      { name: "Python", category: "AI & Backend", level: "Proficient", icon: "Code2" },
      { name: "JavaScript", category: "Language", level: "Proficient", icon: "FileCode" },
      { name: "React", category: "Frontend", level: "Intermediate", icon: "Layers" },
      { name: "Next.js", category: "Framework", level: "Intermediate", icon: "Globe" },
      { name: "HTML / CSS", category: "Frontend", level: "Proficient", icon: "Layout" },
      { name: "Tailwind CSS", category: "Styling", level: "Proficient", icon: "Palette" },
      { name: "Git / GitHub", category: "Dev Tools", level: "Proficient", icon: "GitBranch" },
      { name: "C Language", category: "Core CS", level: "Foundational", icon: "Terminal" },
      { name: "Java", category: "Object Oriented", level: "Foundational", icon: "Coffee" },
    ],
  },

  // 6. Projects Section
  projects: [
    {
      id: "portfolio-v1",
      title: "Intelligent Portfolio Website",
      description: "Modern, high-performance personal portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.",
      longDescription: "A modern developer portfolio featuring near-black dark aesthetics, custom orange accents (#F7931E), responsive design for all screen resolutions, animated floating elements, and a centralized content architecture.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/projects/project-portfolio.png",
      githubUrl: "https://github.com",
      liveUrl: "https://shahid-portfolio.vercel.app",
      featured: true,
    },
    {
      id: "smart-weather-app",
      title: "SkyCast: Weather & Kerala AQI Tracker",
      description: "Interactive real-time weather and air-quality monitoring dashboard with geolocation support and 5-day forecasts.",
      longDescription: "SkyCast pulls data from OpenWeather and Air Quality APIs to present clear atmospheric insights, humidity charts, sunrise-sunset markers, and temperature trends customized for Kerala districts.",
      tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "Chart.js"],
      image: "/projects/project-weather.png",
      githubUrl: "https://github.com",
      liveUrl: "https://skycast-demo.vercel.app",
      featured: true,
    },
    {
      id: "student-ml-predictor",
      title: "Student Grade & Iris ML Predictor",
      description: "Machine learning model predicting student performance indicators with interactive Scikit-Learn visualization.",
      longDescription: "A hands-on exploratory machine learning application featuring classification and regression models. Includes an interactive playground to test feature inputs such as study hours, attendance, and quiz scores.",
      tags: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Streamlit"],
      image: "/projects/project-ml.png",
      githubUrl: "https://github.com",
      liveUrl: "https://ml-predictor-demo.streamlit.app",
      featured: true,
    },
    {
      id: "quick-notes-hub",
      title: "QuickDev Notes & CheatSheets",
      description: "Lightweight developer note-taking app with markdown parsing, syntax highlighting, and local storage persistence.",
      longDescription: "A handy tool designed for computer science students to quickly jot down code snippets, algorithms, and KTU university exam revision notes with instant tag filtering.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      image: "/projects/project-notes.png",
      githubUrl: "https://github.com",
      liveUrl: "https://quickdev-notes.vercel.app",
      featured: false,
    },
  ] as Project[],

  // 7. About Me & Timeline
  about: {
    heading: "Engineering Curious Minds Into Practical Software",
    subheading: "About Me",
    quote: "\"First-year student today, creating intelligent solutions for tomorrow.\"",
    stats: [
      { label: "Projects Built", value: "5+", detail: "Web & Machine Learning prototypes" },
      { label: "Technologies", value: "9+", detail: "Languages, libraries & modern tools" },
      { label: "Certifications", value: "3+", detail: "Python, Web & AI fundamentals" },
      { label: "Academic Standing", value: "Year 1", detail: "B.Tech CSE (AI) · Thejus College" },
    ],
    timeline: [
      {
        year: "2024 - 2028 (Present)",
        title: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
        institution: "Thejus Engineering College, Thrissur",
        location: "Vellarakkad, Kerala",
        description: "Focusing on data structures, algorithms, Python programming, linear algebra for ML, and modern web application development under APJ Abdul Kalam Technological University (KTU).",
        badge: "Undergraduate",
      },
      {
        year: "2022 - 2024",
        title: "Higher Secondary Education (Class XII)",
        institution: "Higher Secondary Board of Kerala",
        location: "Kerala, India",
        description: "Completed higher secondary with Computer Science, Mathematics, Physics, and Chemistry, cultivating a strong analytical and algorithmic foundation.",
        badge: "Higher Secondary",
      },
      {
        year: "2022",
        title: "Secondary School Leaving Certificate (SSLC)",
        institution: "Kerala State Education Board",
        location: "Kerala, India",
        description: "Graduated secondary schooling with high distinction, active participation in school science exhibitions and computer clubs.",
        badge: "High School",
      },
    ] as TimelineItem[],
  },

  // 8. Skills Section (Grouped)
  skills: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "C Programming", level: "Intermediate" },
        { name: "Java", level: "Foundational" },
        { name: "JavaScript (ES6+)", level: "Proficient" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      title: "Web Development",
      icon: "Globe",
      skills: [
        { name: "React.js", level: "Intermediate" },
        { name: "Next.js (App Router)", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "HTML5 / Semantic Web", level: "Proficient" },
        { name: "Responsive CSS3", level: "Proficient" },
        { name: "REST APIs & JSON", level: "Intermediate" },
      ],
    },
    {
      title: "AI & Data Science (Foundations)",
      icon: "Brain",
      skills: [
        { name: "NumPy & Pandas", level: "Intermediate" },
        { name: "Scikit-Learn Basics", level: "Intermediate" },
        { name: "Data Preprocessing", level: "Intermediate" },
        { name: "Supervised Learning", level: "Learning" },
        { name: "Jupyter Notebooks", level: "Proficient" },
      ],
    },
    {
      title: "Developer Tools & Workflow",
      icon: "Terminal",
      skills: [
        { name: "Git & Version Control", level: "Proficient" },
        { name: "GitHub Collaboration", level: "Proficient" },
        { name: "Visual Studio Code", level: "Proficient" },
        { name: "Vercel Deployment", level: "Proficient" },
        { name: "Linux CLI Basics", level: "Foundational" },
      ],
    },
  ] as SkillCategory[],

  // 9. Blog / Learning Journey
  blogPosts: [
    {
      id: "python-for-ai-beginners",
      title: "Getting Started with Python for AI: What I Learned in My First Month",
      snippet: "How moving from standard syntax to vectorized operations with NumPy completely changed how I think about data.",
      content: "When starting out with Artificial Intelligence as a first-year student, Python feels friendly at first. But the real game begins when you realize for-loops are not how matrices work in high-performance machine learning. Here is my breakdown of NumPy array slicing, vectorization, and why Python remains the undisputed king of AI.",
      date: "Nov 2024",
      readTime: "4 min read",
      category: "Artificial Intelligence",
      tags: ["Python", "NumPy", "AI Basics"],
    },
    {
      id: "why-cse-ai-thejus",
      title: "Why I Chose CSE (Artificial Intelligence) at Thejus Engineering College",
      snippet: "Reflecting on my first semester at Thejus, KTU coursework, and why specialized AI engineering excites me.",
      content: "Entering engineering college is a milestone. Choosing the AI specialization within Computer Science was a deliberate decision: algorithms are no longer just static procedural logic; they learn from patterns. At Thejus Engineering College, balancing KTU academics with real-world side projects has been an exhilarating journey.",
      date: "Oct 2024",
      readTime: "5 min read",
      category: "Student Life",
      tags: ["College", "KTU", "Engineering"],
    },
    {
      id: "crafting-dark-mode-tailwind",
      title: "Crafting High-End Dark Themed UIs with Tailwind CSS & Micro-Interactions",
      snippet: "Design principles behind #0A0A0A backgrounds, 1px subtle white borders, and vibrant orange accents.",
      content: "Dark mode isn't just pure black (#000000). High quality dark themes use near-black (#0A0A0A), slight contrast elevations (#141414), ultra-subtle borders (white at 8% opacity), and a single punchy accent color (#F7931E) to guide the user's eye smoothly across the interface.",
      date: "Sep 2024",
      readTime: "3 min read",
      category: "Frontend Design",
      tags: ["TailwindCSS", "UI/UX", "Next.js"],
    },
  ] as BlogPost[],

  // 10. Contact Details
  contact: {
    heading: "Let's Connect & Build Something Great",
    subheading: "Contact",
    description: "Have a project in mind, an internship opportunity, or just want to discuss Artificial Intelligence and Web Development? Drop me a message below or reach out via email.",
    locationText: "Thrissur, Kerala, India",
    collegeText: "Thejus Engineering College, Thrissur (KTU)",
    email: "shahid.dev.cse@gmail.com",
    phone: "+91 98765 43210",
  },

  // 11. Footer
  footer: {
    tagline: "Building intelligent digital experiences, one line of code at a time.",
    copyright: `© ${new Date().getFullYear()} Shahid. All rights reserved.`,
    builtWith: "Crafted with Next.js, Tailwind CSS & Framer Motion.",
  },
};
