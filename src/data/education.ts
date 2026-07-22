import { IEducationItem } from "@/types";

const education: IEducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    institution: "Future Institute of Engineering and Management (FIEM)",
    location: "Kolkata, West Bengal, India",
    duration: "August 2023 – July 2027",
    cgpa: "7.9 / 10",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "System Design",
      "Object Oriented Programming",
      "Machine Learning",
    ],
    status: "Currently in 4th year · Graduating July 2027",
  },
  {
    degree: "Higher Secondary (12th) — Science",
    institution: "Keoratala S.C.M High School",
    year: "2022",
    percentage: "79.71%",
  },
  {
    degree: "Secondary (10th)",
    institution: "Keoratala S.C.M High School",
    year: "2020",
    percentage: "84%",
  },
];

export default education;
