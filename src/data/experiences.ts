import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Tech Lead & Software Engineer",
    company: "Gyanoda App",
    startDate: "Jul 2024",
    isCurrentJob: true,
    location: "Kolkata, India",
    description: [
      "I’m a freelance Tech Lead & Software Engineer at Gyanoda (https://gyanoda.com), an educational platform by Study Bloom 24 for WBJEE aspirants.",
      "Developing innovative, scalable software solutions using React Native.",
      "Leading the technical team to ensure user-focused, high-performance design.",
      "Contributing to large-scale features like video lessons, mock tests, and real-time doubt resolution.",
      "Collaborating with cross-functional teams to maintain quality and responsiveness.",
      "Following clean code practices and modern development standards."
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "FreeLiXe",
    startDate: "Feb 2024",
    // endDate: "Jul 2024",
    isCurrentJob: false,
    location: "Kolkata, India",
    description: [
      "I'm a Full Stack Web & E-Commerce Developer | Graphic Designer |Content Creator | Video Editor | Business Consultant | Cyber Security Enthusiast | Digital Marketer at FreeliXe.",
      "Designing creative visuals and building modern web & e-commerce platforms.",
      "Producing engaging multimedia content for digital campaigns.",
      "Consulting businesses on digital growth and cybersecurity.",
      "Driving brand visibility through strategic digital marketing.",
    ],
  },
  // {
  //   designation: "Tech Team member at XplOriCa",
  //   company: "XplOriCa",
  //   startDate: "Jul 2024",
  //   // endDate: "Nov 2021",
  //   isCurrentJob: true,
  //   location: "Sonarpur Station Rd, Kolkata",
  //   description: [
  //     "Phoenix Event Portfolio: Designed a dynamic event portfolio website for XplOriCa's flagship event, Phoenix, showcasing event details, schedules, and highlights.",
  //     "XplOriCa Organization Portfolio: Created a responsive and informative portfolio website for XplOriCa, highlighting the organization's activities, vision, and achievements.",
  //     "Event Management Web App: Built a web application for seamless event management, improving the coordination and execution of various events hosted by XplOriCa.",
  //     // "Collaborated with senior team members to meet and exceed project goals.",
  //   ],
  // },
    {
    designation: "Horizon Banking App",
    company: "FreeLiXe",
    startDate: "May 2023",
    endDate: "Nov 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Built and deployed a banking app using Next.js 14, featuring real-time transaction tracking and secure authentication.",
      "Integrated multiple bank accounts to view balances, transaction history, and enable money transfers.",
      "Developed a finance management dashboard with advanced features in server-side rendering, TypeScript, and responsive design.",
      // "Contributed to boosting app functionality and revenue generation.",
    ],
  },
];

export default experiences;
