"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "@/components/common/FlipWords";
import LocalConfig from "@/constants/config";
import TalkButton from "./ui/TalkButton";
import { GravityText } from "./ui/GravityText";
import { GravityDock } from "./ui/GravityDock";

// All available skill icons
const skillIcons = [
    "/skills/react.svg",
    "/skills/nextjs.png",
    "/skills/typescript.svg",
    "/skills/javascript.svg",
    "/skills/nodejs.svg",
    "/skills/express.svg",
    "/skills/nestjs.svg",
    "/skills/mongodb.svg",
    "/skills/postgresql.svg",
    "/skills/mysql.svg",
    "/skills/redis.svg",
    "/skills/docker.svg",
    "/skills/kubernetes.svg",
    "/skills/aws.svg",
    "/skills/terraform.svg",
    "/skills/jenkins.svg",
    "/skills/git.svg",
    "/skills/github.svg",
    "/skills/kalilinux.png",
    "/skills/ubuntu.png",
    "/skills/html.svg",
    "/skills/css.svg",
    "/skills/sass.svg",
    "/skills/redux.svg",
    "/skills/firebase.svg",
    "/skills/flutter.svg",
    "/skills/dart.svg",
    "/skills/getx.png",
    "/skills/socket-io.png",
    "/skills/sqlite.svg",
    "/skills/cpp.png",
    "/skills/PHP-logo.svg",
    "/skills/photoshop.png",
    "/skills/illustrator.png",
    "/skills/aftereffects.svg",
    "/skills/DaVinci_Resolve_Studio.png",
    "/skills/canva.png"
];

const GravityHero = ({ id }: { id: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            id={id}
            className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[var(--bgColor)] bg-grid-black/[0.03] pt-24 lg:pt-32 pb-6"
        >
            <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center flex-1 gap-12 lg:gap-8">

                {/* Left Content Area */}
                <div className="flex-1 flex flex-col items-start z-20 text-left w-full lg:w-auto mt-8 lg:mt-0 lg:pl-12 xl:pl-20">
                    <p className="text-xl sm:text-2xl font-medium text-[var(--textColor)] mb-2 pl-1 italic">
                        Hi there, I am
                    </p>

                    {/* Massive Gravity Name */}
                    <div className="-ml-2 sm:-ml-4 mb-4">
                        <GravityText
                            text="Saikat Tanti"
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-8xl font-bold text-[var(--textColor)] tracking-tighter leading-none justify-start"
                        />
                    </div>

                    <div className="overflow-hidden mb-8 pl-1 w-full flex justify-start -ml-1 sm:-ml-2">
                        <FlipWords
                            words={["Full Stack Developer", "Cyber Security Expert", "UI/UX Designer"]}
                            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--primaryColor)] !text-left !justify-start"
                        />
                    </div>

                    <div className="flex gap-4 pl-1">
                        <TalkButton />

                        <Link
                            href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-black/10 bg-white dark:bg-black/10 text-[var(--textColor)] font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-sm"
                        >
                            Resume
                        </Link>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="flex-1 flex justify-center lg:justify-end items-center w-full relative lg:pr-12">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl scale-110 animate-pulse" />
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full rounded-full border-[8px] border-white/40 dark:border-white/5 shadow-2xl overflow-hidden bg-white/30 backdrop-blur-sm"
                        >
                            <Image
                                src="/my-image.png"
                                alt="Saikat Tanti"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Gravity Dock - Pinned to bottom */}
            <div className="w-full z-30 mt-auto pt-6 px-4">
                <GravityDock icons={skillIcons} className="w-full" />
            </div>
        </div>
    );
};

export default GravityHero;
