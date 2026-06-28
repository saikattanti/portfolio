# Antigravity Portfolio Setup — Saikat Tanti
# saikattanti.dev
# Last updated: June 28, 2026

## OVERVIEW
This file contains step-by-step instructions for populating
saikattanti.dev using Antigravity. All content lives in the
companion file: saikat_portfolio_data.json
Read both files before starting.

---

## STEP 1 — IMPORT THE DATA FILE

1. Open your Antigravity dashboard
2. Go to Settings → Import Data or Data Source
3. Upload `saikat_portfolio_data.json`
4. Map each JSON key to the corresponding Antigravity section
   (mapping guide below)

---

## STEP 2 — SECTION MAPPING

Map JSON keys to Antigravity sections as follows:

| JSON Key          | Antigravity Section        |
|-------------------|---------------------------|
| personal          | Hero / Profile / About     |
| education         | Education                  |
| experience        | Work Experience            |
| projects          | Projects / Portfolio       |
| skills            | Skills / Tech Stack        |
| certifications    | Certifications / Badges    |
| leadership        | Leadership / Community     |
| hackathons        | Achievements / Hackathons  |
| social_profiles   | Social Links / Contact     |
| target_roles      | Open To / Availability     |

---

## STEP 3 — HERO SECTION

Use these fields from personal{}:

- Display name:     "Saikat Tanti"
- Title:            "Full Stack Engineer & Co-Founder"
- Tagline:          Use personal.tagline
- Short bio:        Use personal.short_bio
- Profile photo:    Upload your photo manually
- CTA Button 1:     "View Projects" → scroll to projects
- CTA Button 2:     "Contact Me" → mailto:saikattanti2005@gmail.com
- Social icons:     GitHub, LinkedIn, Twitter, Portfolio

---

## STEP 4 — ABOUT SECTION

Use personal.long_bio as the main About text.

Add these stat cards if Antigravity supports them:
- "2+" → "Years of Experience"
- "1,000+" → "Play Store Users"
- "10+" → "Production Projects"
- "8" → "Engineers Led"
- "86+" → "GitHub Repositories"
- "2,004" → "Contributions (Last Year)"

---

## STEP 5 — EXPERIENCE SECTION

Import all 3 items from experience[].
Display order (newest first):
  1. Zogiraa — Lead Software Engineer (id: zogiraa)
  2. Gyanoda — Co-Founder & Founding Engineer (id: gyanoda_cofound)
  3. Gyanoda — App Developer Freelance (id: gyanoda_freelance)

For each experience card include:
- title, company, duration, location
- role_summary as subtitle
- responsibilities[] as bullet points
- tech_stack[] as skill tags
- funding badge for Zogiraa: "Bihar Government Funded"
- metrics badges for Gyanoda: "1,000+ Play Store Installs"

---

## STEP 6 — PROJECTS SECTION

Import all items from projects[].

PRIORITY ORDER (show these first):
  1. zogiraa_platform  → tag: "Featured"
  2. gyanoda           → tag: "Featured"
  3. shopspire         → tag: "Live · hackspire.shop"
  4. spam_detection    → tag: "AI/ML"
  5. fyn               → tag: "AI · Android"
  6. resume_analyzer   → tag: "LLM"
  7. trustless         → tag: "Web3"
  8. hackspire_platform
  9. women_safety
  10. farmly

For each project card show:
- name + tagline
- status badge (Production / Beta / MVP / Academic)
- tech_stack as pill tags
- key_features[] as bullet list
- live_url as "Live Demo" button (if not null)
- github_url as "GitHub" button (if not null)
- metrics{} as highlight badges where available

For spam_detection show:
  "~90% F1 Score" as a highlight badge

For gyanoda show:
  "1,000+ Play Store Installs" as a highlight badge

---

## STEP 7 — SKILLS SECTION

Import from skills{}.
Group exactly as defined:
  - Languages
  - Frontend
  - Backend
  - Android
  - Databases
  - AI & ML
  - Cloud & DevOps
  - Payments & APIs
  - Blockchain
  - Security
  - Tools

Display as a grid of pill/tag badges grouped by category.

---

## STEP 8 — CERTIFICATIONS SECTION

Import from certifications[].
Group by category field:
  - AI (Google Gemini, Anthropic Claude, Google AI Educator)
  - AI/ML (Ardent — Generative AI training)
  - Security (Ardent — Cyber Security & WAPT)
  - Government (MyGov Campus Ambassador)
  - Database (MongoDB)

PRIORITY display (show these prominently):
  1. Gemini Certified University Student — Google (2026–2029)
  2. Claude 101 — Anthropic
  3. Claude Code 101 — Anthropic
  4. Industrial AI/ML Training — Ardent / NASSCOM
  5. Cyber Security & WAPT — Ardent / NASSCOM
  6. MyGov Campus Ambassador — MeitY, Govt. of India

For items with credential_id — add a "Verify" link if
Antigravity supports external verification URLs.
(Ardent verification: certificate.ardentsoftware.co.in)

---

## STEP 9 — LEADERSHIP SECTION

Import from leadership[].
Display as a timeline or card grid.
Each card: role, organization, duration, description.

Also import hackathons[] and display under
"Hackathons & Competitions" subsection.

---

## STEP 10 — EDUCATION SECTION

Import from education[].
Show only the B.Tech entry prominently.
Show 10th and 12th as secondary/compact entries.

For B.Tech card include:
- relevant_coursework[] as tags
- cgpa as "CGPA: 7.9 / 10"
- status as subtitle

---

## STEP 11 — CONTACT / FOOTER SECTION

Use these from personal{} and social_profiles{}:
  - email: saikattanti2005@gmail.com
  - phone: +91 988-358-4060
  - location: Kolkata, West Bengal, India
  - github: https://github.com/saikattanti
  - linkedin: https://www.linkedin.com/in/saikat-tanti/
  - twitter: https://twitter.com/TantiSaikat
  - portfolio: https://saikattanti.dev

Add availability banner:
  "Open to Full Stack, SDE Intern & AI Engineer roles
   — Remote or Hybrid across India | Graduating June 2027"

---

## STEP 12 — SEO & META

Set these meta fields in Antigravity site settings:

  Title:       "Saikat Tanti — Full Stack Engineer & Co-Founder"
  Description: "Full Stack Engineer and CSE student (B.Tech 2027)
                building production apps. Co-Founder of Gyanoda
                (1K+ Play Store), Lead Engineer at Zogiraa
                (Bihar Gov funded). React, Next.js, Node.js, Python."
  Keywords:    "Full Stack Developer, React, Next.js, Node.js,
                TypeScript, Python, AI Engineer, SDE Intern,
                Kolkata, India, Saikat Tanti"
  OG Image:    Upload your professional photo or a project screenshot
  URL:         https://saikattanti.dev

---

## STEP 13 — FINAL CHECKLIST BEFORE PUBLISHING

[ ] Hero section — name, title, tagline, photo, CTA buttons
[ ] About — long bio + stat cards
[ ] Experience — all 3 roles with bullets and tech tags
[ ] Projects — all 10 projects, priority order, live links
[ ] Skills — all categories with pill tags
[ ] Certifications — all 15 items grouped by category
[ ] Leadership — all 6 roles + hackathons
[ ] Education — B.Tech prominent, school entries compact
[ ] Contact — all social links working
[ ] SEO meta — title, description, OG image set
[ ] Mobile responsive — check on phone before publishing
[ ] All live URLs tested: hackspire.shop, saikattanti.dev,
    Play Store link for Gyanoda, github.com/saikattanti

---

## IMPORTANT NOTES

1. Do NOT use saikattanti.dev as portfolio link in job
   applications until Step 13 checklist is complete.

2. For projects without a live_url, do NOT show a
   broken "Live Demo" button — hide it entirely.

3. For Zogiraa — do not link to internal dashboard URLs.
   Link to https://zogiraa.com (public landing page only).

4. Update the Play Store URL for Gyanoda with the
   actual listing URL before publishing.

5. Add real screenshots for each project — at minimum:
   - Zogiraa: employer dashboard screenshot
   - ShopSpire: storefront at hackspire.shop
   - Gyanoda: Play Store listing screenshot
   - Spam Detection: results UI screenshot

---

## CONTACT FOR QUESTIONS
Saikat Tanti
saikattanti2005@gmail.com
github.com/saikattanti
