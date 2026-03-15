"use client";

import FloatingNavbar from "@/components/navbar/FloatingNavbar";
import { navMenus } from "@/data/navMenus";

const HomeFloatingNavbar = () => {
  return <FloatingNavbar className="app_nav" navItems={navMenus} />;
};

export default HomeFloatingNavbar;
