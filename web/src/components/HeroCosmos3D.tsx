import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCosmos3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Light Theme Particle Constellation (Rich contrasting pigments)
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const royalBlue = new THREE.Color(0x2563EB);
    const violet = new THREE.Color(0x7C3AED);
    const emerald = new THREE.Color(0x059669);
    const amber = new THREE.Color(0xD97706);
    const palette = [royalBlue, violet, emerald, amber];

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + Math.pow(Math.random(), 1.5) * 22;
      const spinAngle = radius * 0.8;
      const branchAngle = ((i % 4) * Math.PI * 2) / 4;

      const randomX = (Math.random() - 0.5) * 1.8;
      const randomY = (Math.random() - 0.5) * 1.8;
      const randomZ = (Math.random() - 0.5) * 1.8;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY * (radius * 0.2);
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const chosenColor = palette[i % palette.length];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle inner core wireframe
    const coreGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x2563EB,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX = (clientX / window.innerWidth - 0.5) * 2;
      mouseY = (clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particles.rotation.y = elapsedTime * 0.05 + mouseX * 0.2;
      particles.rotation.x = mouseY * 0.15;

      core.rotation.y = elapsedTime * 0.15;
      core.rotation.z = elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-50 z-0 overflow-hidden"
    />
  );
};
