const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.saikattanti.dev/#person",
      name: "Saikat Tanti",
      alternateName: ["saikattanti", "Saikat"],
      description:
        "Full Stack Software Engineer and Co-Founder based in Kolkata. Builds production web and mobile apps with React, Next.js, React Native, and Node.js. Co-Founder of Gyanoda (1,000+ Play Store installs). Lead Software Engineer Intern at Zogiraa.",
      url: "https://www.saikattanti.dev/",
      mainEntityOfPage: {
        "@id": "https://www.saikattanti.dev/saikat-tanti#profile",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://www.saikattanti.dev/#person-image",
        url: "https://www.saikattanti.dev/my-image.png",
        caption: "Saikat Tanti",
      },
      jobTitle: "Full Stack Software Engineer",
      worksFor: [
        {
          "@type": "Organization",
          name: "Zomira World Pvt. Ltd.",
          url: "https://zogiraa.com",
        },
        {
          "@type": "Organization",
          name: "Gyanoda App",
        },
      ],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Future Institute of Engineering and Management",
        sameAs: "https://fiem.edu.in/",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
      },
      knowsLanguage: ["English", "Bengali", "Hindi"],
      sameAs: [
        "https://github.com/saikattanti",
        "https://www.linkedin.com/in/saikat-tanti/",
        "https://twitter.com/TantiSaikat",
        "https://www.instagram.com/saikattanti.dev",
        "https://www.facebook.com/saikat.tanti.official",
        "https://orcid.org/0009-0005-6979-1503",
        "https://dev.to/saikattanti",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "React Native",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Python",
        "PyTorch",
        "Docker",
        "AWS",
        "Tailwind CSS",
        "REST API Design",
        "System Design",
      ],
      email: "mailto:saikattanti2005@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.saikattanti.dev/#website",
      name: "Saikat Tanti Portfolio",
      url: "https://www.saikattanti.dev/",
      inLanguage: "en",
      description:
        "Portfolio of Saikat Tanti — Full Stack Engineer & Co-Founder.",
      publisher: {
        "@id": "https://www.saikattanti.dev/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.dev/saikat-tanti#profile",
      url: "https://www.saikattanti.dev/saikat-tanti",
      name: "About Saikat Tanti",
      isPartOf: {
        "@id": "https://www.saikattanti.dev/#website",
      },
      mainEntity: {
        "@id": "https://www.saikattanti.dev/#person",
      },
    },
  ],
};

export default structuredData;
