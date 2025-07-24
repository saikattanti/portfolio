// pages/index.tsx or app/page.tsx (depending on your routing setup)
'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));
import { navMenus } from "@/data/navMenus";
const ThisCantBeReached = dynamic(() => import("@/components/core/ThisCantBeReached"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Duration must match animation duration (~4.5s)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <ThisCantBeReached />;

  return (
    <PageBox>
      <FloatingNavbar className="app_nav" navItems={navMenus} />
      <HomeSection1 id="hero" />
      <HomeSection2 id="services" />
      <HomeSection3 id="experiences" />
      <HomeSection4 id="skills" />
      <HomeSection5 id="projects" />
      <HomeSection6 id="contact" />
    </PageBox>
  );
};

export default Home;
