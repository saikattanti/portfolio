import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    icons: [
      "/skills/nextjs.png",
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "/skills/typescript.svg",
      "/skills/postgresql.svg",
    ],
    shortDescription:
      "End-to-end web apps with auth, payments, and production deployment.",
    description:
      "I build production web applications with Next.js, React, Node.js, and PostgreSQL or MongoDB — including authentication, payments, admin dashboards, and deployment on Vercel. Proof: ShopSpire (hackspire.shop) and Zogiraa employer/admin dashboards.",
  },
  {
    id: 2,
    title: "React Native App Development",
    icons: [
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "/skills/mongodb.svg",
      "/skills/firebase.svg",
      "/skills/typescript.svg",
    ],
    shortDescription:
      "Cross-platform mobile apps with real-time features and payments.",
    description:
      "I ship React Native (Expo) apps for Android with real-time updates, payment gating, and backend integration. Proof: Gyanoda App (1,000+ Play Store installs) and the Zogiraa worker app.",
  },
  {
    id: 3,
    title: "Backend API Development",
    icons: [
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    ],
    shortDescription:
      "Scalable REST APIs with auth, caching, and real-time events.",
    description:
      "I design Node.js/Express and FastAPI backends with JWT auth, Redis caching and rate-limiting, Socket.io events, and payment gateways. Proof: Zogiraa backend with Cashfree, Redis, and Socket.io in production.",
  },
  {
    id: 4,
    title: "LLM API Integration",
    icons: [
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "/skills/typescript.svg",
      "/skills/javascript.svg",
    ],
    shortDescription:
      "GPT-4o, Claude, and Gemini features inside real products.",
    description:
      "I integrate LLM APIs into web apps for semantic analysis and AI-assisted workflows — not demos only. Proof: Resume Analyzer using GPT-4o and Claude 3.5 Sonnet via Puter AI SDK.",
  },
];

export default services;
