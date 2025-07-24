import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Build an AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/ai-resume-analyzer",
    url: "https://ai-resume-analyzer-mauve.vercel.app/",
    tags: ["React", "React Router", "Puter.js", "Tailwind CSS", "TypeScript", "Vite", "Zustand", "AI"],
  },
  {
    id: "fullstack-chat-video-calling-app",
    title: "Fullstack Chat & Video Calling App",
    description:
      "A comprehensive chat and video calling application featuring real-time messaging with typing indicators & reactions, 1-on-1 and group video calls with screen sharing & recording, JWT authentication, and a language exchange platform with 32 unique UI themes.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/Chat-Video-Calling-App",
    tags: ["React", "Express.js", "MongoDB", "Tailwind CSS", "TanStack Query", "Zustand", "Stream", "JWT"],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart, payment integration, order tracking, and admin dashboard. Built with modern technologies for scalability and performance.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/ecommerce-platform",
    url: "https://ecommerce-demo.saikattanti.xyz",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "NextAuth", "Tailwind CSS"],
  },
  {
    id: "task-management-dashboard",
    title: "Task Management Dashboard",
    description:
      "A comprehensive project management tool with real-time collaboration, kanban boards, team management, file uploads, notifications, and analytics. Features drag-and-drop functionality and responsive design.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/task-management-dashboard",
    url: "https://taskmanager.saikattanti.xyz",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Material-UI", "Redux"],
  },
  {
    id: "social-media-api",
    title: "Social Media API",
    description:
      "A robust RESTful API for social media applications with user management, posts, comments, likes, followers, real-time notifications, and image uploads. Includes comprehensive documentation and testing.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/social-media-api",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Socket.io", "Swagger", "Jest"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark/light theme support, responsive design, smooth animations, and optimized performance.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/saikattanti/portfolio",
    url: "https://saikattanti.xyz",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
];
export default projects;
