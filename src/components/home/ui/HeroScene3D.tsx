"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const HeroScene3D = ({ className = "" }: { className?: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x60a5fa, 1.4, 20);
    keyLight.position.set(3, 2, 4);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x14b8a6, 0.9, 20);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.25,
      metalness: 0.65,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    heroGroup.add(coreMesh);

    const shellGeometry = new THREE.TorusKnotGeometry(1.8, 0.07, 180, 24);
    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      roughness: 0.35,
      metalness: 0.7,
      transparent: true,
      opacity: 0.45,
    });
    const shellMesh = new THREE.Mesh(shellGeometry, shellMaterial);
    shellMesh.rotation.x = Math.PI / 2;
    heroGroup.add(shellMesh);

    const starsCount = 1200;
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 18;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.02,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.65,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    let rafId = 0;
    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const onPointerMove = (event: MouseEvent) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;

      gsap.to(camera.position, {
        x: pointer.x * 1.2,
        y: -pointer.y * 0.9,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onPointerMove);

    const rotateTimeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: "sine.inOut" },
    });

    if (!prefersReducedMotion) {
      rotateTimeline
        .to(heroGroup.rotation, { y: Math.PI * 2, duration: 14 }, 0)
        .to(heroGroup.rotation, { x: Math.PI * 2, duration: 20 }, 0)
        .to(shellMesh.rotation, { z: Math.PI * 2, duration: 9 }, 0)
        .to(stars.rotation, { y: Math.PI * 2, duration: 28 }, 0)
        .to(heroGroup.position, { y: 0.28, duration: 3.2, yoyo: true, repeat: -1 }, 0);
    }

    const tick = () => {
      coreMesh.rotation.z += 0.002;
      stars.rotation.z += 0.0006;
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      rotateTimeline.kill();

      coreGeometry.dispose();
      shellGeometry.dispose();
      starsGeometry.dispose();
      coreMaterial.dispose();
      shellMaterial.dispose();
      starsMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};

export default HeroScene3D;
