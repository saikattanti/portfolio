"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "@/components/common/FlipWords";
import { personalInfo } from "@/data/personal";
import { GravityText } from "./ui/GravityText";
import LocalConfig from "@/constants/config";

const GravityHero = ({ id }: { id: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeUrl = LocalConfig.values.NEXT_PUBLIC_RESUME_LINK;

  return (
    <div
      ref={containerRef}
      id={id}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-[var(--bgColor)] bg-grid-black/[0.03] pt-24 lg:pt-32 pb-16"
    >
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center flex-1 gap-12 lg:gap-8">
        <div className="flex-1 flex flex-col items-start z-20 text-left w-full lg:w-auto mt-8 lg:mt-0 lg:pl-12 xl:pl-20">
          <p className="text-xl sm:text-2xl font-medium text-[var(--textColor)] mb-2 pl-1 italic">
            Hi there, I am
          </p>

          <div className="-ml-2 sm:-ml-4 mb-4">
            <GravityText
              text={personalInfo.name}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-8xl font-bold text-[var(--textColor)] tracking-tighter leading-none justify-start"
            />
          </div>

          <div className="overflow-hidden mb-4 pl-1 w-full flex justify-start -ml-1 sm:-ml-2">
            <FlipWords
              words={personalInfo.heroRoles}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--primaryColor)] !text-left !justify-start"
            />
          </div>

          <p className="text-base sm:text-lg text-[var(--textColor)]/80 mb-3 pl-1 max-w-2xl">
            {personalInfo.tagline}
          </p>
          <p className="text-sm sm:text-base text-[var(--textColor)]/60 mb-8 pl-1 max-w-2xl">
            {personalInfo.availability}
          </p>

          <div className="flex gap-4 pl-1 flex-wrap">
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-[var(--primaryColor)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-black/10 bg-black/5 text-[var(--textColor)] font-medium hover:bg-black/10 transition-colors"
            >
              View Resume
            </a>

            <Link
              href="#contact"
              className="px-8 py-3 rounded-full border border-black/10 bg-transparent text-[var(--textColor)] font-medium hover:bg-black/5 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center w-full relative lg:pr-12">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-[var(--primaryColor)]/15 blur-3xl scale-110" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full border-[6px] border-white/50 overflow-hidden bg-white/30 backdrop-blur-sm"
            >
              <Image
                src="/my-image.png"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GravityHero;
