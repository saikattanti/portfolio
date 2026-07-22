import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Lead Software Engineer Intern",
    company: "Zogiraa (Zomira World Pvt. Ltd.)",
    startDate: "Feb 2026",
    isCurrentJob: true,
    location: "Remote",
    shortDescription:
      "Architect and technical lead for a Bihar Government-funded workforce marketplace — 5-component production platform, 8-person team.",
    description: [
      "Architected 5-component production platform (React Native worker app, Next.js employer + admin dashboards, landing site, Node.js/Express API) across a polyrepo of 4 repositories serving blue-collar workers and employers in Bihar",
      "Designed and implemented full backend: MongoDB, Redis caching + rate-limiting, Socket.io real-time job notifications, Cashfree payment gateway for direct wage transfers, JWT + Bcrypt + Fast2SMS OTP auth, Cloudinary CDN for KYC uploads",
      "Configured Cloudflare DNS, DDoS protection, and SSL across all production domains; deployed frontend on Vercel and backend on Render",
      "Led 8-person engineering team as primary technical decision-maker — reviewed all PRs, resolved critical production bugs, drove all architecture decisions",
      "Resolved critical Expo infinite-loading bug by diagnosing dynamic IP routing conflict and enforcing strict Axios timeouts with graceful failure states",
    ],
    techStack: [
      "React Native",
      "Expo",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Cashfree",
      "JWT",
      "TypeScript",
      "Cloudflare",
      "Vercel",
      "Render",
    ],
    badges: ["Bihar Government Funded", "Production", "Team Lead"],
  },
  {
    designation: "Co-Founder & Founding Engineer",
    company: "Gyanoda App",
    startDate: "2024",
    isCurrentJob: true,
    location: "Kolkata, India",
    shortDescription:
      "Cross-platform EdTech for WBJEE/NEET — PYQ video solutions, mock tests, freemium/subscription monetization.",
    description: [
      "Co-founded Gyanoda from zero — designed architecture, led development, and shipped to Google Play Store with 1,000+ installs",
      "Built cross-platform React Native app and Next.js website delivering WBJEE/NEET PYQ video solutions with freemium and subscription monetization via Razorpay",
      "Designed scalable content delivery architecture, real-time data sync, and Cloudinary media pipeline",
      "Led a 5-person team across mobile, backend, and deployment",
    ],
    techStack: [
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "Vercel",
    ],
    badges: ["1,000+ Play Store Installs", "Co-Founder"],
  },
];

export default experiences;
