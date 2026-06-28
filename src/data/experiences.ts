import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Lead Software Engineer (Intern)",
    company: "Zomira World Pvt. Ltd. (Zogiraa)",
    startDate: "Feb 2026",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Architected and led engineering for a 5-component workforce marketplace: React Native worker app, Next.js employer dashboard, Next.js admin panel, public landing site, and centralized Node.js/Express backend",
      "Designed complete backend infrastructure: JWT + Bcrypt authentication, Fast2SMS OTP, Redis caching and rate-limiting, Socket.io real-time job notifications, Cashfree payment gateway for direct employer-to-worker wage transfers",
      "Implemented Cloudflare DNS, DDoS protection, and SSL across all production domains; deployed on Vercel (frontend) and Render (backend)",
      "Led a team of 8 engineers as primary technical decision-maker — reviewed all PRs, resolved critical bugs, drove all architecture decisions across 4 specialized repositories (polyrepo structure)",
      "Resolved a critical Expo mobile app network failure by diagnosing dynamic IP routing conflicts and refactoring Axios client with strict 10-second timeout enforcement"
    ],
    techStack: [
      "React Native", "Expo", "Next.js", "Node.js", "Express.js",
      "MongoDB", "Redis", "Socket.io", "Cashfree", "JWT", "Bcrypt",
      "Fast2SMS", "Cloudinary", "Cloudflare", "Vercel", "Render", "TypeScript"
    ],
    badges: ["Bihar Government Funded"],
  },
  {
    designation: "Co-Founder & Founding Engineer",
    company: "Gyanoda App",
    startDate: "2024",
    isCurrentJob: true,
    location: "Kolkata, India",
    description: [
      "Co-founded Gyanoda from zero — designed architecture, led development, and shipped to Google Play Store with 1,000+ installs",
      "Built cross-platform React Native app and Next.js website delivering WBJEE/NEET PYQ video solutions with subscription and freemium monetization via Razorpay",
      "Designed scalable content delivery architecture, real-time data sync, Cloudinary media pipeline",
      "Led a 5-person team across frontend, backend, and deployment"
    ],
    techStack: [
      "React Native", "Next.js", "Node.js", "Express.js",
      "MongoDB", "Razorpay", "Cloudinary", "Vercel", "REST APIs"
    ],
    badges: ["1,000+ Play Store Installs"],
  },
  {
    designation: "App Developer (Freelance)",
    company: "Gyanoda App",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Kolkata, India",
    description: [
      "Developed and optimized front-end features, improving application performance and scalability",
      "Enhanced user experience by streamlining workflows and improving UI responsiveness",
      "Collaborated with core team to deliver key modules within defined timelines"
    ],
    techStack: ["React Native", "Next.js", "Node.js", "MongoDB"],
  },
];

export default experiences;
