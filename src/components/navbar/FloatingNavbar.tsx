"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavItem } from "@/types";
import Row from "@/components/core/Row";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit fixed top-4 inset-x-0 mx-auto border border-black/[0.1] rounded-full bg-[var(--dialogColor90)] backdrop-blur-sm shadow-md z-[5000] px-4 py-3 items-center space-x-4",
          className
        )}
      >
        <Row classNames="w-full justify-center items-center">
          <Row classNames="gap-4 items-center">
            {navItems.map((navItem: INavItem, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center space-x-1 text-[var(--textColor)] group hover:text-[var(--primaryColor)] transition-colors"
                )}
              >
                {/* Icon with the same style and hover effect */}
                <span className="block sm:hidden relative overflow-hidden">
                  <span className="relative z-10">
                    <FontAwesomeIcon
                      id={`nav-item-icon${idx}`}
                      icon={navItem.icon}
                      title={navItem.name}
                    />
                  </span>
                  <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10">
                    <FontAwesomeIcon
                      id={`nav-item-icon${idx}-hover`}
                      icon={navItem.icon}
                      title={navItem.name}
                    />
                  </span>
                </span>

                <span className="hidden sm:block text-sm/6 lg:text-base relative overflow-hidden">
                  <span className="relative z-10">{navItem.name}</span>
                  <span className="absolute inset-0 text-[var(--primaryColor)] transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 ease-in-out z-10">
                    {navItem.name}
                  </span>
                </span>
              </Link>
            ))}
          </Row>
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
