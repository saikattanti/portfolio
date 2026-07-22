import { Metadata } from "next";

/** Alternate metadata helper — root layout.tsx is the live source of truth. */
export const metadata: Metadata = {
  title: "Saikat Tanti — Full Stack Engineer & Co-Founder",
  description:
    "Full Stack Engineer (B.Tech 2027). Co-Founder Gyanoda (1K+ users). Lead Engineer Intern at Zogiraa. React, Next.js, Node.js, React Native. Open to SDE/Full Stack roles.",
  metadataBase: new URL("https://www.saikattanti.dev"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
