import type { Metadata } from "next";
import { personalInfo } from "@/data/personal";
import Strings from "@/constants/strings";

export const metadata: Metadata = {
  title: "About Saikat Tanti | Full Stack Engineer & Co-Founder",
  description:
    "Official profile of Saikat Tanti — Full Stack Engineer & Co-Founder. Gyanoda (1,000+ Play Store installs). Lead Software Engineer Intern at Zogiraa. FIEM B.Tech CSE 2027.",
  alternates: {
    canonical: "/saikat-tanti",
  },
  openGraph: {
    title: "About Saikat Tanti | Full Stack Engineer & Co-Founder",
    description:
      "Full Stack Engineer & Co-Founder based in Kolkata. Co-founded Gyanoda; Lead Engineer Intern at Bihar Government-funded Zogiraa.",
    url: "https://www.saikattanti.dev/saikat-tanti",
    type: "profile",
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
    title: "About Saikat Tanti | Full Stack Engineer & Co-Founder",
    description:
      "Full Stack Engineer & Co-Founder based in Kolkata. Co-founded Gyanoda; Lead Engineer Intern at Bihar Government-funded Zogiraa.",
    images: ["/og.png"],
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

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Saikat Tanti
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 sm:text-lg">
        Full Stack Software Engineer & Co-Founder | React, Next.js, React Native,
        Node.js, TypeScript
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          {personalInfo.longBio}
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Experience Highlights</h2>
        <div className="space-y-4 text-[var(--textColor)]/90">
          <p className="leading-7">
            <strong>Zogiraa (Zomira World Pvt. Ltd.)</strong> — Lead Software
            Engineer Intern (February 2026 – Present)
          </p>
          <p className="leading-7">
            Architect and technical lead for a Bihar Government-funded workforce
            marketplace: 5-component production platform, 8-person engineering
            team, polyrepo of 4 repositories.
          </p>
          <p className="leading-7">
            <strong>Gyanoda App</strong> — Co-Founder & Founding Engineer (2024 –
            Present)
          </p>
          <p className="leading-7">
            Shipped React Native + Next.js EdTech platform to Google Play with
            1,000+ installs; Razorpay freemium/subscription monetization; led a
            5-person team.
          </p>
          <p className="leading-7">
            <strong>FIEM ACM Student Chapter</strong> — Chairperson (2026–2027);
            Lead Organizer of HackSpire (200+ participants).
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="space-y-3 text-[var(--textColor)]/90">
          <p className="leading-7">
            <strong>Future Institute of Engineering and Management (FIEM)</strong>{" "}
            — B.Tech, Computer Science & Engineering (August 2023 – July 2027),
            CGPA 7.9/10 · currently 4th year
          </p>
          <p className="leading-7">
            <strong>Keoratala S.C.M High School</strong> — Higher Secondary,
            Science (2022), 84%
          </p>
          <p className="leading-7">
            <strong>Keoratala S.C.M High School</strong> — Secondary (10th)
            (2020), 79.71%
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Selected certifications</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--textColor)]/90">
          <li>Gemini Certified University Student — Google for Education</li>
          <li>Claude 101 & Claude Code 101 — Anthropic</li>
          <li>
            Industrial Internship — AI/ML & Generative AI — Ardent Computech
            (ARDENT/189001)
          </li>
          <li>MyGov Campus Ambassador — MeitY, Government of India</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Core skills</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          Next.js, React.js, React Native, Node.js, TypeScript, MongoDB,
          PostgreSQL, Redis, Python, Docker, AWS, Tailwind CSS.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          Bengali (Native), Hindi (Fluent), English (Professional).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Location and contact</h2>
        <p className="leading-7 text-[var(--textColor)]/90">
          Kolkata, West Bengal, India · Open to remote / hybrid across India
          (Bengaluru, Hyderabad, Kolkata).
        </p>
        <p className="leading-7 text-[var(--textColor)]/90">
          Email:{" "}
          <a
            href={Strings.primaryEmailLink}
            className="underline decoration-[var(--primaryColor)] underline-offset-4"
          >
            {Strings.primaryEmail}
          </a>
          {" · "}
          Preferred: Email or LinkedIn DM
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Official profiles</h2>
        <ul className="mt-4 space-y-2 text-[var(--textColor)]/90">
          <li>
            <a
              href={Strings.githubLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={Strings.linkedInLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={Strings.twitterLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              X (Twitter)
            </a>
          </li>
          <li>
            <a
              href={Strings.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={Strings.facebookLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://orcid.org/0009-0005-6979-1503"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[var(--primaryColor)] underline-offset-4"
            >
              ORCID
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SaikatTantiEntityPage;
