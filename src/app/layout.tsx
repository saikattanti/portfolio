import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import structuredData from "@/data/structuredData";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Saikat Tanti - Full Stack Developer | Software Engineer | Cybersecurity Expert",
    template: "%s | Saikat Tanti - Software Engineer"
  },
  description:
    "Saikat Tanti is a proficient Full Stack Developer and Software Engineer from India, specializing in React, Next.js, Node.js, cybersecurity, and modern web technologies. Available for freelance projects and consultations.",
  keywords: [
    "saikat tanti",
    "saikattanti",
    "full stack developer",
    "software engineer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "cybersecurity expert",
    "web developer india",
    "freelance developer",
    "javascript developer",
    "typescript developer",
    "ui ux designer",
    "seo expert",
    "graphics designer",
    "portfolio website",
    "web development services",
    "mobile app developer",
    "flutter developer",
    "api development",
    "database design",
    "cloud computing",
    "aws developer",
    "docker expert",
    "devops engineer",
    "tech consultant",
    "indian developer",
    "bengal developer",
    "software solutions",
    "custom web applications"
  ],
  authors: [{ name: "Saikat Tanti", url: "https://www.saikattanti.xyz" }],
  creator: "Saikat Tanti",
  publisher: "Saikat Tanti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.saikattanti.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.saikattanti.xyz",
    title: "Saikat Tanti - Full Stack Developer | Software Engineer",
    description: "Professional Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, cybersecurity, and modern web technologies.",
    siteName: "Saikat Tanti Portfolio",
    images: [
      {
        url: "/images/saikat-tanti-og.png",
        width: 1200,
        height: 630,
        alt: "Saikat Tanti - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saikat Tanti - Full Stack Developer | Software Engineer",
    description: "Professional Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, cybersecurity, and modern web technologies.",
    creator: "@saikattanti",
    images: ["/images/saikat-tanti-twitter.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
      type: "image/svg+xml",
    },
    {
      url: "/favicon-32x32.svg",
      rel: "icon",
      sizes: "32x32",
      type: "image/svg+xml",
    },
    {
      url: "/favicon-48x48.svg",
      rel: "icon",
      sizes: "48x48",
      type: "image/svg+xml",
    },
    {
      url: "/favicon-64x64.svg",
      rel: "icon",
      sizes: "64x64",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-icon.png",
    },
  ],
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code-here",
    yahoo: "your-yahoo-verification-code-here",
  },
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        {/* <FloatingNavbar className="app_nav" navItems={navMenus} /> */}
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
