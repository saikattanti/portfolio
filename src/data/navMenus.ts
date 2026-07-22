import { INavItem } from "@/types";
import {
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

/** Job-seeker nav — Payment lives in footer only. */
export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "Leadership",
    link: "/#leadership",
    icon: faUsers,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
