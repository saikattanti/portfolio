import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import structuredData from "@/data/structuredData";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import WebVitals from "@/components/common/WebVitals";
import ScrollToTop from "@/components/common/ScrollToTop";

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
    default: "Saikat Tanti — Full Stack Engineer & Co-Founder",
    template: "%s | Saikat Tanti",
  },
  description:
    "Full Stack Engineer (B.Tech 2027). Co-Founder Gyanoda (1K+ users). Lead Engineer Intern at Zogiraa. React, Next.js, Node.js, React Native. Open to SDE/Full Stack roles.",
  keywords: [
    "saikat tanti",
    "saikattanti",
    "full stack engineer",
    "full stack developer intern",
    "sde intern india",
    "react developer",
    "nextjs developer",
    "react native developer",
    "nodejs developer",
    "typescript developer",
    "gyanoda",
    "zogiraa",
    "kolkata developer",
    "fiem",
  ],
  authors: [{ name: "Saikat Tanti", url: "https://www.saikattanti.dev" }],
  creator: "Saikat Tanti",
  publisher: "Saikat Tanti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.saikattanti.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.saikattanti.dev",
    title: "Saikat Tanti — Full Stack Engineer & Co-Founder",
    description:
      "Full Stack Engineer & Co-Founder. Gyanoda (1,000+ Play Store installs). Lead Engineer Intern at Bihar Government-funded Zogiraa. React · Next.js · Node.js · React Native.",
    siteName: "Saikat Tanti Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Saikat Tanti — Full Stack Engineer & Co-Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saikat Tanti — Full Stack Engineer & Co-Founder",
    description:
      "Full Stack Engineer & Co-Founder. Gyanoda (1K+ installs). Lead Engineer Intern at Zogiraa. Open to SDE / Full Stack roles.",
    creator: "@TantiSaikat",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
};

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta
          name="impact-site-verification"
          content="15c13d82-8305-444a-b9bc-c5ac5fbe7ff1"
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
