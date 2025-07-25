'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Saikat Tanti',
  description: 'The page you are looking for could not be found. Return to Saikat Tanti\'s portfolio homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Return Home
          </Link>
          
          <div className="text-gray-400">
            <p>or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link
                href="/#about"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                About Me
              </Link>
              <Link
                href="/#projects"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Projects
              </Link>
              <Link
                href="/#services"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Error Code: 404 | Page Not Found</p>
          <p className="mt-2">
            Need help? Contact me at{' '}
            <a
              href="mailto:contact@saikattanti.xyz"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              contact@saikattanti.xyz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
