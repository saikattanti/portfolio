import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Saikat Tanti | Entity Profile",
  description:
    "Official profile of Saikat Tanti, full stack developer and software engineer from India. Explore biography, skills, affiliations, and verified public profiles.",
  alternates: {
    canonical: "/saikat-tanti",
  },
  openGraph: {
    title: "About Saikat Tanti | Entity Profile",
    description:
      "Official profile of Saikat Tanti, full stack developer and software engineer from India.",
    url: "https://www.saikattanti.dev/saikat-tanti",
    type: "profile",
    images: [
      {
        url: "/my-image.png",
        width: 1200,
        height: 1200,
        alt: "Saikat Tanti",
      },
    ],
  },
};

const entityPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://www.saikattanti.dev/saikat-tanti#profile",
      url: "https://www.saikattanti.dev/saikat-tanti",
      name: "About Saikat Tanti",
      mainEntity: {
        "@id": "https://www.saikattanti.dev/#person",
      },
      isPartOf: {
        "@id": "https://www.saikattanti.dev/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.saikattanti.dev/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Saikat Tanti",
          item: "https://www.saikattanti.dev/saikat-tanti",
        },
      ],
    },
  ],
};

const SaikatTantiEntityPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 text-[var(--textColor)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(entityPageSchema),
        }}
      />

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Saikat Tanti</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 sm:text-lg">
        Full Stack Developer | React.js and Next.js Specialist | TypeScript and
        Node.js Engineer | Cybersecurity and Ethical Hacking Enthusiast.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          CSE student at Future Institute of Engineering and Management (FIEM),
          passionate about web and app development and building practical digital
          products. Works across React, Next.js, Node.js, and TypeScript with a
          focus on scalable engineering, modern UI, and secure backend systems.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Experience Highlights</h2>
        <div className="space-y-4 text-[var(--textColor)]/90">
          <p className="leading-7">
            <strong>Zomira World Private Limited</strong> - Full-Stack Team Lead and
            Technical Project Manager (February 2026 to Present)
          </p>
          <p className="leading-7">
            Led end-to-end engineering for Zogiraa from planning to production,
            including team hiring, multi-platform architecture, cloud operations,
            CI/CD, payment integrations, and secure distributed authentication.
          </p>
          <p className="leading-7">
            <strong>FIEM ACM Student Chapter</strong> - Core Committee Member
            (October 2025 to Present)
          </p>
          <p className="leading-7">
            <strong>Internshala</strong> - Student Partner (November 2025 to Present)
          </p>
          <p className="leading-7">
            <strong>Xplorica / FIEM</strong> - Working and Core Committee roles
            (2024 to Present)
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="space-y-3 text-[var(--textColor)]/90">
          <p className="leading-7">
            <strong>Future Institute Of Engineering and Management</strong> -
            Bachelor of Technology (B.Tech), Computer Engineering (2023 to 2027)
          </p>
          <p className="leading-7">
            <strong>Keoratala S.C.M High School</strong> - Higher Secondary,
            Science (2020 to 2022)
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--textColor)]/90">
          <li>Deloitte Australia - Cyber Job Simulation</li>
          <li>Deloitte Australia - Technology Job Simulation</li>
          <li>J.P. Morgan - Software Engineering Job Simulation</li>
          <li>Smart India Hackathon 2024</li>
          <li>Why Business Analytics As A Career Is Trending and Successful?</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Top Skills</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          Context API, Google Apps Script, GitHub, React.js, Next.js, Node.js,
          TypeScript, MongoDB, and secure web platform development.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          English (Professional Working), Bengali (Native or Bilingual).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Location and Contact</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          Kolkata, West Bengal, India.
        </p>
        <p className="leading-7 text-[var(--textColor)]/90">
          Mobile: 9883584060 | Email: saikattanti2005@gmail.com
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Official Profiles</h2>
        <ul className="mt-4 space-y-2 text-[var(--textColor)]/90">
          <li>
            <a
              href="https://github.com/saikattanti"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saikat-tanti-7375b2233/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/TantiSaikat"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              X (Twitter)
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/saikattanti.dev/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://telegram.me/SaikatTanti"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              Telegram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SaikatTantiEntityPage;