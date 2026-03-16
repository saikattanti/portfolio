const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.saikattanti.xyz/#person",
      "name": "Saikat Tanti",
      "alternateName": ["saikattanti", "Saikat"],
      "description":
        "Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, cybersecurity, and modern web technologies.",
      "url": "https://www.saikattanti.xyz/",
      "mainEntityOfPage": {
        "@id": "https://www.saikattanti.xyz/saikat-tanti#profile"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://www.saikattanti.xyz/#person-image",
        "url": "https://www.saikattanti.xyz/my-image.png",
        "caption": "Saikat Tanti"
      },
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@id": "https://www.saikattanti.xyz/#organization"
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
      "@id": "https://www.saikattanti.xyz/#organization",
      "name": "Saikat Tanti",
      "url": "https://www.saikattanti.xyz/",
      "logo": "https://www.saikattanti.xyz/favicon-64x64.svg",
      "sameAs": [
        "https://github.com/saikattanti",
        "https://www.linkedin.com/in/saikat-tanti-7375b2233/",
        "https://x.com/TantiSaikat"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.saikattanti.xyz/#website",
      "name": "Saikat Tanti Portfolio",
      "url": "https://www.saikattanti.xyz/",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://www.saikattanti.xyz/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.saikattanti.xyz/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.xyz/#profile",
      "url": "https://www.saikattanti.xyz/",
      "name": "Saikat Tanti",
      "mainEntity": {
        "@id": "https://www.saikattanti.xyz/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.xyz/saikat-tanti#profile",
      "url": "https://www.saikattanti.xyz/saikat-tanti",
      "name": "About Saikat Tanti",
      "isPartOf": {
        "@id": "https://www.saikattanti.xyz/#website"
      },
      "mainEntity": {
        "@id": "https://www.saikattanti.xyz/#person"
      }
    }
  ]
}

export default structuredData
