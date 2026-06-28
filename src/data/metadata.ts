import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saikat Tanti — Full Stack Engineer & Co-Founder",
  description:
    "Full Stack Engineer and CSE student (B.Tech 2027) building production apps. Co-Founder of Gyanoda (1K+ Play Store), Lead Engineer at Zogiraa (Bihar Gov funded). React, Next.js, Node.js, Python.",
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
  icons: [
    {
      url: "/favicon-16x16.svg",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.svg",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon-48x48.svg",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon-64x64.svg",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AI Engineer",
    "SDE Intern",
    "Kolkata",
    "India",
    "Saikat Tanti",
  ],
  openGraph: {
    url: "https://saikattanti.dev",
    type: "website",
  },
};
