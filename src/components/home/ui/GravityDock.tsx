"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

const GravityIcon = ({ icon, mouseX, mouseY }: any) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

    useAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX.get() - centerX;
        const distanceY = mouseY.get() - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const maxDistance = 150;

        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const repelStrength = 40;

            const moveX = -(distanceX / distance) * force * repelStrength;
            const moveY = -(distanceY / distance) * force * repelStrength;

            x.set(moveX);
            y.set(moveY);
        } else {
            x.set(0);
            y.set(0);
        }
    });

    return (
        <motion.div
            ref={ref}
            style={{ x, y }}
            className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.1 }}
        >
            <Image
                src={icon}
                alt="skill-icon"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
        </motion.div>
    );
};

export const GravityDock = ({ icons, className }: { icons: string[], className?: string }) => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className={cn("flex flex-nowrap items-center gap-2 overflow-x-auto pb-4 px-4 w-full no-scrollbar", className)}>
            {icons.map((icon, i) => (
                <div key={i} className="shrink-0">
                    <GravityIcon
                        icon={icon}
                        mouseX={mouseX}
                        mouseY={mouseY}
                    />
                </div>
            ))}
        </div>
    );
};
