import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  GitBranch,
  GraduationCap,
  Layers3,
  Rocket,
  Scale,
  ShieldCheck,
  Trophy,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Signal", href: "#signal" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "James Matthew Llanos",
  shortName: "James Matthew",
  brand: "james.dev",
  role: "AI Engineer",
  email: "llanosjamesmatthew30@gmail.com",
  linkedIn: "https://www.linkedin.com/in/jamesmatthewdev/",
  cvPath: "/Curriculum_Vitae_LLANOS.pdf",
  cvFileName: "James_Matthew_Llanos_CV.pdf",
  availability: "Available for AI engineering, automation, and full-stack product work",
  hero:
    "AI Engineer building production systems, agents, and automation that move real workflows.",
  summary:
    "AI engineer focused on production-grade systems, not experiments. I design AI agents, ML pipelines, backend automations, and product interfaces that turn messy operational work into reliable software.",
  quickStats: [
    "AI Engineering",
    "Agent Orchestration",
    "Workflow Automation",
    "Full-Stack Delivery",
  ],
  proofPoints: [
    {
      label: "Production AI",
      value: "Agents, orchestration, validation",
      detail:
        "Full lifecycle design, development, deployment, logging, monitoring, and error handling for AI systems.",
      icon: BrainCircuit,
    },
    {
      label: "Automation Depth",
      value: "n8n, Twilio, Retell AI, APIs",
      detail:
        "Workflow automation and communication systems built around real-time decision-making.",
      icon: Workflow,
    },
    {
      label: "Full-Stack Delivery",
      value: "Next.js, Vue, Node.js, FastAPI",
      detail:
        "Frontend, backend, API, database, and deployment experience across startup environments.",
      icon: Layers3,
    },
    {
      label: "Responsible AI",
      value: "AI & Society Fellow",
      detail:
        "Responsible AI, AI safety, and AI ethics signal through Societal AI @ UVA.",
      icon: Scale,
    },
  ],
};

export const workExperience = [
  {
    company: "Partner AI",
    role: "AI Developer",
    period: "Current / recent",
    location: "United Kingdom",
    category: "Production AI System",
    summary:
      "Lead developer and architect for a production-grade AI system built around reasoning, validation, and operational reliability.",
    bullets: [
      "Designed multi-layer AI architecture across data processing, reasoning, and validation layers.",
      "Built automated workflows, orchestrators, and system modules for complex real-time decisions.",
      "Implemented AI API integrations, prompt engineering, abstraction layers, CI/CD, logging, monitoring, and error handling.",
    ],
    stack: ["AI APIs", "Prompt Engineering", "CI/CD", "Monitoring", "System Design"],
  },
  {
    company: "Accelerated Fleet Services",
    role: "Junior Backend Engineer",
    period: "Freelance startup work",
    location: "Texas, USA",
    category: "AI Agent Backend",
    summary:
      "Startup backend engineering for AI agent tooling, automation, and communication workflows.",
    bullets: [
      "Helped build backend logic, automations, testing flows, and developer tools for an AI agent.",
      "Worked with TypeScript, Node.js, Twilio, n8n, Retell AI, Claude Code, PostgreSQL, Postman, and Docker.",
      "Contributed in a fast-moving freelance startup environment with production-oriented constraints.",
    ],
    stack: ["TypeScript", "Node.js", "Twilio", "n8n", "PostgreSQL", "Docker"],
  },
  {
    company: "Digiplus Interactive Corp.",
    role: "Frontend Developer Intern",
    period: "Internship",
    location: "BGC, Philippines",
    category: "Frontend Internship",
    summary:
      "Frontend engineering experience with Vue, Pinia, TypeScript, APIs, Git, and cross-functional collaboration.",
    bullets: [
      "Built and maintained frontend work using Vue.js, Pinia, TypeScript, APIs, Git, and GitHub.",
      "Joined huddles to discuss blockers, share knowledge, and improve delivery flow.",
      "Collaborated with cross-functional teams to move project work forward.",
    ],
    stack: ["Vue.js", "Pinia", "TypeScript", "APIs", "GitHub"],
  },
  {
    company: "Project NEO",
    role: "Junior Frontend Engineer",
    period: "Startup work",
    location: "Canada",
    category: "Startup Frontend",
    summary:
      "Junior software engineering work across MERN and Next.js, with steady growth into full-stack development.",
    bullets: [
      "Developed frontend pages and contributed to startup product delivery.",
      "Used MERN and Next.js stacks while continuously upskilling in full-stack engineering.",
      "Built client-facing product experience in a startup context.",
    ],
    stack: ["MERN", "Next.js", "React", "Full-Stack"],
  },
];

export const projects = [
  {
    name: "Parrot AI",
    category: "Hackathon",
    role: "Builder",
    location: "Voice AI Hackathon Manila 2026",
    headline:
      "2nd Runner-Up project built to give job seekers a real edge in a tough job market.",
    visual:
      "A voice AI hackathon build born from frustration with job search friction, shaped into a practical career-support product.",
    bullets: [
      "Placed 2nd Runner-Up among strong teams at Voice AI Hackathon Manila 2026.",
      "Built a product concept for job seekers in the Philippines, focused on giving them a clearer edge.",
      "Presented the work to judges from the Philippine tech scene during an AWS Cloud Club Philippines, Agora, and TRAE organized event.",
    ],
    stack: ["Voice AI", "Career Tech", "Hackathon", "Product Strategy"],
  },
  {
    name: "Nayon",
    category: "Hackathon",
    role: "Builder",
    location: "University of the Philippines Los Banos",
    headline:
      "Champion project and Best Presentation winner at P2OJECT: YSES Ideathon 2025.",
    visual: "A high-pressure prototype for a digital community serving next-generation farmers.",
    bullets: [
      "Delivered a working prototype with a three-member team against larger university teams.",
      "Built a mobile app concept enabling a digital community for next-generation farmers.",
      "Pitched the product and won Best Presentation among nationwide competitors.",
    ],
    stack: ["Mobile App", "Prototype", "Pitch", "Product Strategy"],
  },
  {
    name: "EcoMend",
    category: "Capstone",
    role: "Project Manager & Lead Developer",
    location: "Sto. Tomas, Batangas",
    headline:
      "AI-assisted solid dry waste identification system with practical repurposing recommendations.",
    visual: "Computer intelligence applied to sustainability: classify waste, then recommend what to do next.",
    bullets: [
      "Led the team and owned project management across research, development, and delivery.",
      "Handled machine learning and artificial intelligence development for waste classification and recommendations.",
      "Connected sustainability goals with usable AI product behavior.",
    ],
    stack: ["AI/ML", "Classification", "Recommendation System", "Leadership"],
  },
  {
    name: "WasteLess",
    category: "Hackathon",
    role: "Project Manager & Lead Developer",
    location: "Sta. Mesa, Philippines",
    headline:
      "AI/ML-powered mobile application that uses food scrap images to recommend ways to minimize waste.",
    visual: "Food scrap images become recommendations through computer vision and AI-assisted product logic.",
    bullets: [
      "Built around computer vision and AI API recommendations for food repurposing.",
      "Led development and project direction through a hackathon-style product cycle.",
      "Focused on practical environmental impact through accessible mobile UX.",
    ],
    stack: ["Computer Vision", "AI API", "Mobile App", "ML"],
  },
  {
    name: "PUP Hackathon: UtHack ang Puhunan",
    category: "Hackathon",
    role: "Team Lead / Main Feature Developer",
    location: "PUP Sta. Mesa",
    headline:
      "Top 10 hackathon project involving research, pitching, product direction, and application development.",
    visual: "A team-led hackathon build moving from research and business idea into application feature work.",
    bullets: [
      "Led the team to research and develop a paper for the hackathon.",
      "Secured a top 10 spot and advanced through development and business idea phases.",
      "Owned the main feature of the application while supporting team members.",
    ],
    stack: ["Research", "Pitching", "Product", "Feature Development"],
  },
];

export const clientProjects = [
  {
    name: "Venture Freight",
    category: "Client Frontend",
    role: "Frontend Developer",
    location: "Canada",
    headline:
      "Frontend feature development for an existing logistics website using a Next.js stack.",
    bullets: [
      "Developed frontend features for a client project through Project NEO.",
      "Used Next.js to improve an existing production website experience.",
      "Worked within an established product surface rather than a greenfield demo.",
    ],
    stack: ["Next.js", "Frontend", "Logistics", "Client Delivery"],
    link: "https://www.venturefreight.com.au/",
  },
];

export const fellowshipExperience = [
  {
    company: "Societal AI @ UVA",
    role: "AI & Society Fellow",
    period: "February 2026 - April 2026",
    location: "United States · Remote",
    summary:
      "Completed the AI & Society Fellowship, adding responsible AI, AI safety, and AI ethics context to production AI engineering work.",
  },
];

export const stackGroups = [
  {
    title: "AI Systems",
    icon: Bot,
    items: ["AI Agents", "Prompt Engineering", "AI APIs", "ML Pipelines", "Computer Vision"],
  },
  {
    title: "Backend & Automation",
    icon: DatabaseZap,
    items: ["TypeScript", "Node.js", "FastAPI", "PostgreSQL", "n8n", "Twilio", "Retell AI"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js", "React", "Vue.js", "Pinia", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Engineering Practice",
    icon: GitBranch,
    items: ["Docker", "Postman", "Git", "GitHub", "CI/CD", "Logging", "Monitoring"],
  },
];

export const achievements = [
  {
    title: "Voice AI Hackathon Manila 2026 2nd Runner-Up",
    detail:
      "Built Parrot AI, a job-seeker focused voice AI product, and placed 2nd Runner-Up at Voice AI Hackathon Manila 2026.",
    icon: Trophy,
  },
  {
    title: "P2OJECT: YSES Ideathon 2025 Champion",
    detail:
      "Built Nayon, a mobile app enabling a digital community for next-generation farmers, and won Best Presentation.",
    icon: Rocket,
  },
  {
    title: "PUP Hackathon Top 10",
    detail:
      "Led research and development, pitched to judges and audience, and owned the main application feature.",
    icon: BrainCircuit,
  },
  {
    title: "Magna Cum Laude",
    detail:
      "Bachelor of Science in Information Technology, Polytechnic University of the Philippines.",
    icon: GraduationCap,
  },
  {
    title: "AI & Society Fellowship",
    detail:
      "Completed the Societal AI @ UVA fellowship, strengthening responsible AI, AI safety, and AI ethics credibility.",
    icon: Scale,
  },
  {
    title: "Security + AI Certifications",
    detail:
      "Cyber Security Operations Job Simulation, AWS Generative AI fundamentals, Coursera Software Engineering, and Schneider Electric Network Security.",
    icon: ShieldCheck,
  },
];

export const certifications = [
  "Cyber Security Operations Job Simulation - Datacom",
  "Fundamentals of Generative AI for Beginners - AWS",
  "Introduction to Software Engineering - Coursera",
  "Schneider Electric Fundamental Principles of Network Security",
  "JavaScript Essentials 1 - Cisco",
  "SQL (Basic) - HackerRank",
];
