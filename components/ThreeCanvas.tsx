"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer (FundingPips Electric Cyan 3D Space)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Create 3D Architectural Wireframe Structure (Electric Cyan & Violet)
    const buildingGroup = new THREE.Group();

    // Tower 1 (Center Electric Cyan Wireframe)
    const geo1 = new THREE.BoxGeometry(4, 10, 4);
    const wire1 = new THREE.WireframeGeometry(geo1);
    const mat1 = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 });
    const tower1 = new THREE.LineSegments(wire1, mat1);
    tower1.position.set(0, -1, 0);
    buildingGroup.add(tower1);

    // Tower 2 (Left Violet Wireframe)
    const geo2 = new THREE.BoxGeometry(3, 7, 3);
    const wire2 = new THREE.WireframeGeometry(geo2);
    const mat2 = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.4 });
    const tower2 = new THREE.LineSegments(wire2, mat2);
    tower2.position.set(-5, -2.5, -2);
    buildingGroup.add(tower2);

    // Tower 3 (Right Cyan Wireframe)
    const geo3 = new THREE.BoxGeometry(3.5, 8.5, 3.5);
    const wire3 = new THREE.WireframeGeometry(geo3);
    const mat3 = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 });
    const tower3 = new THREE.LineSegments(wire3, mat3);
    tower3.position.set(5, -1.8, 1);
    buildingGroup.add(tower3);

    // FundingPips Glowing Grid Ring
    const ringGeo = new THREE.RingGeometry(8, 8.2, 32);
    const ringWire = new THREE.WireframeGeometry(ringGeo);
    const ringMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.3 });
    const ringMesh = new THREE.LineSegments(ringWire, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -5;
    buildingGroup.add(ringMesh);

    buildingGroup.rotation.x = 0.35;
    buildingGroup.rotation.y = -0.4;
    scene.add(buildingGroup);

    // 3. Create 3D Floating Electric Particle Mesh
    const particleCount = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f0ff), // Electric Cyan Aqua
      new THREE.Color(0x6366f1), // Electric Violet
      new THREE.Color(0xffffff), // Pure White
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // 4. Mouse Parallax & Scroll Depth
    let mouseX = 0;
    let mouseY = 0;
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetScrollProgress = window.scrollY / totalScroll;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    // 5. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;

      camera.position.z = 18 - currentScrollProgress * 8;
      camera.position.y = -currentScrollProgress * 3;

      buildingGroup.rotation.y = currentScrollProgress * Math.PI * 2 + mouseX * 0.05;
      buildingGroup.rotation.x = 0.35 + Math.sin(currentScrollProgress * Math.PI) * 0.3 + mouseY * 0.05;

      particles.rotation.y -= 0.001;
      particles.rotation.z = currentScrollProgress * Math.PI * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60 overflow-hidden"
    />
  );
};
