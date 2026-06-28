"use client";

import dynamic from 'next/dynamic';

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/GravityHero"));
const SectionAbout = dynamic(() => import("@/components/home/SectionAbout"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const SectionEducation = dynamic(() => import("@/components/home/SectionEducation"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const SectionCertifications = dynamic(() => import("@/components/home/SectionCertifications"));
const SectionLeadership = dynamic(() => import("@/components/home/SectionLeadership"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));
const HomeFloatingNavbar = dynamic(
  () => import("@/components/home/HomeFloatingNavbar")
);

const Home = () => {
  return (
    <PageBox>
      <HomeFloatingNavbar />
      <HomeSection1 id="hero" />
      <SectionAbout id="about" />
      <HomeSection2 id="services" />
      <HomeSection3 id="experiences" />
      <SectionEducation id="education" />
      <HomeSection4 id="skills" />
      <HomeSection5 id="projects" />
      <SectionCertifications id="certifications" />
      <SectionLeadership id="leadership" />
      <HomeSection6 id="contact" />
    </PageBox>
  );
};

export default Home;
