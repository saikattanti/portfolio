const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.saikattanti.dev/#person",
      "name": "Saikat Tanti",
      "alternateName": ["saikattanti", "Saikat"],
      "description":
        "Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, cybersecurity, and modern web technologies.",
      "url": "https://www.saikattanti.dev/",
      "mainEntityOfPage": {
        "@id": "https://www.saikattanti.dev/saikat-tanti#profile"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://www.saikattanti.dev/#person-image",
        "url": "https://www.saikattanti.dev/my-image.png",
        "caption": "Saikat Tanti"
      },
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@id": "https://www.saikattanti.dev/#organization"
      },
      "affiliation": {
        "@type": "CollegeOrUniversity",
        "name": "Future Institute of Engineering and Management",
        "sameAs": "https://fiem.edu.in/"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal"
      },
      "knowsLanguage": [
        "English",
        "Bengali"
      ],
      "sameAs": [
        "https://github.com/saikattanti",
        "https://www.linkedin.com/in/saikat-tanti-7375b2233/",
        "https://x.com/TantiSaikat",
        "https://www.instagram.com/saikattanti.dev/",
        "https://telegram.me/SaikatTanti"
      ],
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Cybersecurity",
        "Full Stack Development",
        "Web Development"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.saikattanti.dev/#organization",
      "name": "Saikat Tanti",
      "url": "https://www.saikattanti.dev/",
      "logo": "https://www.saikattanti.dev/favicon-64x64.svg",
      "sameAs": [
        "https://github.com/saikattanti",
        "https://www.linkedin.com/in/saikat-tanti-7375b2233/",
        "https://x.com/TantiSaikat"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.saikattanti.dev/#website",
      "name": "Saikat Tanti Portfolio",
      "url": "https://www.saikattanti.dev/",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://www.saikattanti.dev/#organization"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.dev/#profile",
      "url": "https://www.saikattanti.dev/",
      "name": "Saikat Tanti",
      "mainEntity": {
        "@id": "https://www.saikattanti.dev/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.dev/saikat-tanti#profile",
      "url": "https://www.saikattanti.dev/saikat-tanti",
      "name": "About Saikat Tanti",
      "isPartOf": {
        "@id": "https://www.saikattanti.dev/#website"
      },
      "mainEntity": {
        "@id": "https://www.saikattanti.dev/#person"
      }
    }
  ]
}

export default structuredData
