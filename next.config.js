/** @type {import('next').NextConfig} */
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Enable standalone output for Docker

  // ✅ Add redirect from Vercel to your custom domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'saikattanti.vercel.app', // only redirect if it's the Vercel domain
          },
        ],
        destination: 'https://www.saikattanti.xyz/:path*',
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "nixlab-technologies",
  project: "portfolio-nextjs",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
