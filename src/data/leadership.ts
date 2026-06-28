import { ILeadershipItem, IHackathonItem } from "@/types";

export const leadership: ILeadershipItem[] = [
  { role: "Chairperson", organization: "FIEM ACM Student Chapter", duration: "2026 – 2027", description: "Lead the ACM chapter at Future Institute of Engineering and Management. Organize technical events, workshops, and the annual HackSpire hackathon." },
  { role: "Core Team Member", organization: "FIEM ACM Student Chapter", duration: "2025 – 2026", description: "Served as core organizing member before becoming Chairperson." },
  { role: "Lead Organizer", organization: "HackSpire 2025 & 2026 (FIEM ACM Annual Hackathon)", duration: "2025 – 2026", description: "Organized and led HackSpire — FIEM ACM's flagship annual hackathon with 200+ participants across both editions. Also organizing HackSpire 2026 in September." },
  { role: "Tech Lead", organization: "Xplorica Techno-Management Club, FIEM", duration: "Current", description: "Technical lead of Xplorica, the techno-management club at FIEM." },
  { role: "MyGov Campus Ambassador", organization: "MyGov — Ministry of Electronics & Information Technology (MeitY), Government of India", duration: "Active", description: "Officially appointed Campus Ambassador under MeitY, Government of India's MyGov platform." },
  { role: "Organizer", organization: "Hacktonix 2025 & 2026", duration: "2025 – 2026", description: "Organized Hacktonix hackathon editions for 2025 and 2026." }
];

export const hackathons: IHackathonItem[] = [
  { name: "Smart India Hackathon 2024", result: "Top 20 — Internal Selection Round", project: "AI Interview Platform", year: "2024" },
  { name: "HackSpire '24", result: "Participant", project: "Farmly — Farmer-to-consumer marketplace (SIH problem statement)", year: "2024" },
  { name: "Hacktonix '24", result: "Participant", project: "AI Interview Platform", year: "2024" }
];
