"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { cn } from "@/utils/cn";

const GravityLetter = ({ letter, index, mouseX, mouseY }: any) => {
    const ref = useRef<HTMLSpanElement>(null);

    // Physics values
    const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

    // Floating animation offset (randomized)
    const floatX = useRef(Math.random() * 20 - 10);
    const floatY = useRef(Math.random() * 20 - 10);
    const floatDuration = useRef(3 + Math.random() * 2);

    useAnimationFrame(() => {
        if (!ref.current) return;

        // Mouse repelling logic
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX.get() - centerX;
        const distanceY = mouseY.get() - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const maxDistance = 250; // Radius of influence

        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const repelStrength = 50; // How far it pushes

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
        <motion.span
            ref={ref}
            style={{ x, y }}
            animate={{
                x: [0, floatX.current, 0],
                y: [0, floatY.current, 0],
            }}
            transition={{
                duration: floatDuration.current,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
            className="inline-block relative select-none cursor-default"
        >
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    );
};

export const GravityText = ({ text = "SAIKAT", className }: { text?: string, className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className={cn("relative z-20", className)}>
            <h1 className={cn("flex flex-wrap items-center justify-center gap-1 sm:gap-2 leading-none", className?.includes("justify-") ? "" : "justify-center", className?.includes("justify-start") && "justify-start")}>
                {text.split("").map((letter, i) => (
                    <GravityLetter
                        key={i}
                        letter={letter}
                        index={i}
                        mouseX={mouseX}
                        mouseY={mouseY}
                    />
                ))}
            </h1>
        </div>
    );
};
