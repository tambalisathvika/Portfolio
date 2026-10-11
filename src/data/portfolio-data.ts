export interface Project {
  id: string;
  title: string;
  category: "Web Development" | "Automation" | "Frontend" | "Full-Stack";
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  grade?: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge: string;
}

export interface CodingProfile {
  name: string;
  platform: string;
  url: string;
  handle: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Tambali Sathvika",
    shortName: "Sathvika",
    role: "Web Developer & Workflow Automation Builder",
    greeting: "Welcome to",
    bio: "Hi there! I'm Sathvika, a web developer and workflow automation builder passionate about turning ideas into practical, elegant digital solutions. I specialize in building responsive modern websites, clean landing pages, and smart n8n automations that streamline operations.",
    location: "India",
    email: "tambalisathvika@gmail.com",
    github: "https://github.com/tambalisathvika",
    linkedin: "https://www.linkedin.com/in/tambali-sathvika/",
    status: "Open to Opportunities & Freelance Projects",
  },

  about: {
    title: "About Me",
    headline: "Passionate about creating clean code, intuitive user experiences, and automated workflows.",
    paragraphs: [
      "I am a developer who loves building practical digital tools and responsive web experiences. From crafting interactive frontends to designing backend automation pipelines with n8n, Google Sheets, and Gmail, I focus on building things that work reliably and solve real problems.",
      "My development toolkit combines modern web standards (HTML5, CSS3, JavaScript, React, Tailwind CSS) with AI-assisted workflows to build faster without compromising code quality. Whether designing a cafe menu showcase, an academic lab portal, or automating lead dispatching, I love seeing projects go from concept to live deployment.",
    ],
    highlights: [
      {
        title: "Modern Web Development",
        desc: "Creating responsive, fast-loading interfaces that look crisp on mobile, tablet, and desktop screens.",
      },
      {
        title: "Workflow Automation",
        desc: "Automating repetitive data handling using n8n, webhooks, Google Sheets, and Gmail triggers.",
      },
      {
        title: "AI-Assisted Efficiency",
        desc: "Leveraging cutting-edge developer tools and prompt workflows to iterate rapidly and deliver high-quality code.",
      },
      {
        title: "Strong CS Fundamentals",
        desc: "Active practice in Data Structures & Algorithms with a focus on optimal time and space complexity.",
      },
    ],
  },

  skills: {
    frontend: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Responsive UI/UX", level: "Advanced" },
    ],
    backendAndAutomation: [
      { name: "n8n Workflow Automation", level: "Advanced" },
      { name: "Google Sheets API", level: "Advanced" },
      { name: "Gmail API & Webhooks", level: "Advanced" },
      { name: "REST APIs & JSON", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Node.js Basics", level: "Intermediate" },
    ],
    databaseAndTools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "GitHub Pages & Vercel", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "PostgreSQL & Supabase", level: "Intermediate" },
      { name: "Clean Documentation", level: "Advanced" },
    ],
    fundamentals: [
      { name: "Data Structures & Algorithms", level: "Intermediate" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "AI-Assisted Engineering", level: "Advanced" },
      { name: "Attention to Detail", level: "Advanced" },
    ],
  },

  projects: [
    {
      id: "cafe-website",
      title: "Artisan Cafe & Bistro Website",
      category: "Web Development",
      summary: "Modern, warm, and responsive small-business website with interactive menus and table reservation booking.",
      description: "A rich digital showcase for an artisan cafe and bakery designed with a warm coffee-toned palette. Includes structured food & beverage categories, customer reviews, photo gallery, and an intuitive table booking inquiry flow.",
      features: [
        "Fully responsive layout optimized for mobile ordering and desktop browsing",
        "Interactive categorized food and drink menu with smooth transitions",
        "Customer testimonial carousel and ambiance photo gallery",
        "Online table reservation booking flow with form validation",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UX/UI"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://tambalisathvika.github.io/cafe-website/",
      githubUrl: "https://github.com/tambalisathvika/cafe-website",
      featured: true,
    },
    {
      id: "datascience-lab",
      title: "Data Science Lab Educational Portal",
      category: "Full-Stack",
      summary: "Interactive academic platform organizing ML practicals, code samples, and structured documentation.",
      description: "A centralized laboratory hub built to organize data science practical experiments, Python notebooks, dataset overviews, and algorithmic walkthroughs for students and researchers.",
      features: [
        "Index of 15+ machine learning and data science laboratory experiments",
        "Structured code snippet viewer and algorithm breakdown",
        "Exploratory Data Analysis (EDA) documentation and visualization guides",
        "Clean, distraction-free reading experience with fast navigation",
      ],
      technologies: ["JavaScript", "HTML5", "Data Science", "Python Practicals", "Technical Docs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://tambalisathvika.github.io/DataScience-lab/",
      githubUrl: "https://github.com/tambalisathvika/DataScience-lab",
      featured: true,
    },
    {
      id: "n8n-automation",
      title: "Service Request & Lead Automation Pipeline",
      category: "Automation",
      summary: "End-to-end n8n workflow capturing webhooks, syncing to Google Sheets, and sending automated Gmail alerts.",
      description: "An automated backend operations pipeline that captures client inquiries through webhook triggers, validates the incoming payload, updates a Google Sheets CRM database in real-time, and sends personalized Gmail confirmation notifications.",
      features: [
        "Webhook listener capturing inbound form requests under 300ms",
        "Automated data normalization and row appending into Google Sheets",
        "Dynamic Gmail dispatch with personalized message templates",
        "Built-in error logging and retry mechanisms for zero lead loss",
      ],
      technologies: ["n8n", "Google Sheets API", "Gmail API", "Webhooks", "JSON"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/tambalisathvika",
      featured: true,
    },
    {
      id: "dsa-repo",
      title: "Data Structures & Algorithms Repository",
      category: "Frontend",
      summary: "Curated collection of optimal algorithmic solutions with time and space complexity breakdowns.",
      description: "An active personal computer science repository implementing classic and advanced data structures and algorithm solutions across arrays, strings, trees, linked lists, and recursion.",
      features: [
        "Implementations of core data structures and standard algorithmic patterns",
        "Time and space complexity analysis documented per solution",
        "Modular, well-commented code written for clarity and reusability",
        "Continuous practice for competitive programming and technical interviews",
      ],
      technologies: ["Data Structures", "Algorithms", "C++ / Python", "Problem Solving", "Git"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/tambalisathvika/DSA",
      featured: false,
    },
  ] as Project[],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Engineering College / University",
      period: "2024 - 2028",
      description: "Focusing on core computer science fundamentals, data structures, algorithms, database management systems, and modern web software development.",
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (Intermediate)",
      institution: "Junior College",
      period: "2022 - 2024",
      description: "Major in Mathematics, Physics, and Chemistry (MPC) with academic distinction.",
    },
  ] as EducationItem[],

  milestones: [
    {
      id: "m-1",
      title: "Full-Stack & Modern Web Development",
      organization: "Self-Directed & Hands-on Projects",
      date: "2024 - Present",
      description: "Built multiple production-style applications including Cafe Bistro and Data Science Lab portals.",
      badge: "Web Dev",
    },
    {
      id: "m-2",
      title: "Workflow Automation with n8n",
      organization: "Process Optimization",
      date: "2024",
      description: "Architected automated webhook pipelines integrating Google Sheets, Gmail, and public web forms.",
      badge: "Automation",
    },
    {
      id: "m-3",
      title: "Data Structures & Algorithms Mastery",
      organization: "Continuous Learning",
      date: "Ongoing",
      description: "Solved 70+ algorithmic problems focusing on clean implementation and complexity optimization.",
      badge: "Problem Solving",
    },
  ] as MilestoneItem[],

  codingProfiles: [
    {
      name: "GitHub",
      platform: "Version Control & Code",
      url: "https://github.com/tambalisathvika",
      handle: "@tambalisathvika",
      description: "Explore all my open source repositories, projects, code snippets, and active commits.",
      badge: "Primary Codebase",
    },
    {
      name: "LinkedIn",
      platform: "Professional Network",
      url: "https://www.linkedin.com/in/tambali-sathvika/",
      handle: "Tambali Sathvika",
      description: "Connect with me professionally, view my background, and send direct messages.",
      badge: "Connect Directly",
    },
  ] as CodingProfile[],
};
