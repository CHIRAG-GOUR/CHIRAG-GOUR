import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCosmos3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hopCount, setHopCount] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Studio Lighting for High-Contrast Light Theme
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffedd5, 1.6);
    dirLight.position.set(8, 12, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x93c5fd, 0.8);
    backLight.position.set(-8, -4, -6);
    scene.add(backLight);

    // 1. Particle Constellation
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const royalBlue = new THREE.Color(0x2563EB);
    const violet = new THREE.Color(0x7C3AED);
    const emerald = new THREE.Color(0x059669);
    const amber = new THREE.Color(0xD97706);
    const palette = [royalBlue, violet, emerald, amber];

    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.pow(Math.random(), 1.5) * 16;
      const spinAngle = radius * 0.7;
      const branchAngle = ((i % 4) * Math.PI * 2) / 4;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 1.5;

      const chosenColor = palette[i % palette.length];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.45
    });

    const particles = new THREE.Points(geometry, particleMat);
    scene.add(particles);

    // 2. Stylized Low-Poly Roo Mascot (POA Series)
    const rooGroup = new THREE.Group();
    // Position Roo to the right side of the hero canvas for perfect visual balance
    rooGroup.position.set(width > 768 ? 4.8 : 0, width > 768 ? -0.8 : -2.2, 2.5);
    rooGroup.scale.set(1.1, 1.1, 1.1);

    // Materials
    const furMat = new THREE.MeshStandardMaterial({
      color: 0xD97706, // Warm Kangaroo Amber
      roughness: 0.6,
      metalness: 0.1,
      flatShading: true
    });
    const bellyMat = new THREE.MeshStandardMaterial({
      color: 0xFEF3C7, // Cream Belly & Pouch
      roughness: 0.8,
      flatShading: true
    });
    const innerEarMat = new THREE.MeshStandardMaterial({
      color: 0xF472B6, // Cute Soft Pink
      roughness: 0.5,
      flatShading: true
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1E293B, // Eyes & Nose
      roughness: 0.2
    });
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0x10B981, // Glowing Code Gem
      emissive: 0x059669,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });

    // Body
    const bodyGeo = new THREE.CylinderGeometry(0.7, 1.0, 1.7, 8);
    const body = new THREE.Mesh(bodyGeo, furMat);
    body.position.y = 0.9;
    rooGroup.add(body);

    // Pouch
    const pouchGeo = new THREE.SphereGeometry(0.65, 8, 6, 0, Math.PI);
    const pouch = new THREE.Mesh(pouchGeo, bellyMat);
    pouch.rotation.y = Math.PI / 2;
    pouch.position.set(0, 0.85, 0.45);
    pouch.scale.set(0.9, 1.1, 0.5);
    rooGroup.add(pouch);

    // Head Group (Tilts with mouse)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 2.0, 0.15);

    const headGeo = new THREE.BoxGeometry(0.9, 0.85, 0.9);
    const head = new THREE.Mesh(headGeo, furMat);
    headGroup.add(head);

    // Snout & Nose
    const snoutGeo = new THREE.BoxGeometry(0.5, 0.4, 0.6);
    const snout = new THREE.Mesh(snoutGeo, furMat);
    snout.position.set(0, -0.15, 0.6);
    headGroup.add(snout);

    const noseGeo = new THREE.BoxGeometry(0.18, 0.12, 0.1);
    const nose = new THREE.Mesh(noseGeo, darkMat);
    nose.position.set(0, -0.06, 0.92);
    headGroup.add(nose);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.09, 8, 8);
    const leftEye = new THREE.Mesh(eyeGeo, darkMat);
    leftEye.position.set(-0.3, 0.15, 0.45);
    const rightEye = new THREE.Mesh(eyeGeo, darkMat);
    rightEye.position.set(0.3, 0.15, 0.45);
    headGroup.add(leftEye, rightEye);

    // Ears
    const earGeo = new THREE.ConeGeometry(0.2, 0.85, 5);
    const leftEar = new THREE.Mesh(earGeo, furMat);
    leftEar.position.set(-0.35, 0.75, -0.1);
    leftEar.rotation.z = 0.25;
    leftEar.rotation.x = -0.15;
    const leftInnerEar = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.6, 5), innerEarMat);
    leftInnerEar.position.set(0, 0, 0.05);
    leftEar.add(leftInnerEar);

    const rightEar = new THREE.Mesh(earGeo, furMat);
    rightEar.position.set(0.35, 0.75, -0.1);
    rightEar.rotation.z = -0.25;
    rightEar.rotation.x = -0.15;
    const rightInnerEar = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.6, 5), innerEarMat);
    rightInnerEar.position.set(0, 0, 0.05);
    rightEar.add(rightInnerEar);

    headGroup.add(leftEar, rightEar);
    rooGroup.add(headGroup);

    // Arms & Glowing Code Gem
    const armGeo = new THREE.BoxGeometry(0.22, 0.6, 0.22);
    const leftArm = new THREE.Mesh(armGeo, furMat);
    leftArm.position.set(-0.55, 1.1, 0.45);
    leftArm.rotation.x = -0.8;
    leftArm.rotation.z = -0.3;

    const rightArm = new THREE.Mesh(armGeo, furMat);
    rightArm.position.set(0.55, 1.1, 0.45);
    rightArm.rotation.x = -0.8;
    rightArm.rotation.z = 0.3;

    const codeGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), gemMat);
    codeGem.position.set(0, 1.05, 0.75);
    rooGroup.add(leftArm, rightArm, codeGem);

    // Legs & Feet
    const thighGeo = new THREE.CylinderGeometry(0.35, 0.45, 0.9, 6);
    const leftThigh = new THREE.Mesh(thighGeo, furMat);
    leftThigh.position.set(-0.6, 0.4, -0.1);
    leftThigh.rotation.x = 0.3;
    const rightThigh = new THREE.Mesh(thighGeo, furMat);
    rightThigh.position.set(0.6, 0.4, -0.1);
    rightThigh.rotation.x = 0.3;

    const footGeo = new THREE.BoxGeometry(0.28, 0.18, 0.9);
    const leftFoot = new THREE.Mesh(footGeo, furMat);
    leftFoot.position.set(-0.6, 0.09, 0.3);
    const rightFoot = new THREE.Mesh(footGeo, furMat);
    rightFoot.position.set(0.6, 0.09, 0.3);
    rooGroup.add(leftThigh, rightThigh, leftFoot, rightFoot);

    // Tail
    const tailGeo = new THREE.CylinderGeometry(0.12, 0.3, 1.6, 6);
    const tail = new THREE.Mesh(tailGeo, furMat);
    tail.position.set(0, 0.35, -0.9);
    tail.rotation.x = -0.9;
    rooGroup.add(tail);

    // Ground Shadow Pedestal
    const shadowGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.04, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x0284C7,
      transparent: true,
      opacity: 0.15
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, 0.02, 0);
    rooGroup.add(shadowMesh);

    scene.add(rooGroup);

    // 3. Mouse Tilt & Raycasting Interaction
    let mouseX = 0;
    let mouseY = 0;
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      mouseVector.set(x, y);

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(rooGroup.children, true);
      setIsHovered(intersects.length > 0);
    };

    // Click / Hop Mechanics
    let hopAnim = 0; // 0 to 1
    let isHopping = false;
    let hopTargetRotation = 0;

    const triggerHop = () => {
      if (isHopping) return;
      isHopping = true;
      hopAnim = 0;
      hopTargetRotation += Math.PI * 2;
      setHopCount(prev => prev + 1);
    };

    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseVector.set(x, y);
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(rooGroup.children, true);
      if (intersects.length > 0) {
        triggerHop();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      rooGroup.position.set(newWidth > 768 ? 4.8 : 0, newWidth > 768 ? -0.8 : -2.2, 2.5);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const baseY = rooGroup.position.y;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Rotate background particles
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = mouseY * 0.1;

      // Kangaroo Idle Breathing & Float
      const idleBob = Math.sin(elapsedTime * 2.5) * 0.08;

      // Kangaroo Mouse Tilt (Smooth Lerp)
      const targetTorsoY = (mouseX * 0.6) - 0.25;
      const targetTorsoX = -mouseY * 0.3;
      rooGroup.rotation.y = THREE.MathUtils.lerp(rooGroup.rotation.y, targetTorsoY, 0.08);
      rooGroup.rotation.x = THREE.MathUtils.lerp(rooGroup.rotation.x, targetTorsoX, 0.08);

      headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, mouseX * 0.5, 0.12);
      headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, -mouseY * 0.4, 0.12);

      // Code Gem Spin
      codeGem.rotation.y = elapsedTime * 2;
      codeGem.rotation.x = elapsedTime * 1.5;

      // Hop Animation Physics
      if (isHopping) {
        hopAnim += 0.04;
        const hopHeight = Math.sin(hopAnim * Math.PI) * 2.2;
        rooGroup.position.y = baseY + hopHeight;
        rooGroup.rotation.y += 0.22; // Spin in mid-air
        
        // Squash & stretch
        if (hopAnim < 0.2) {
          rooGroup.scale.set(1.2, 0.9, 1.2);
        } else if (hopAnim < 0.8) {
          rooGroup.scale.set(0.95, 1.2, 0.95);
        } else {
          rooGroup.scale.set(1.15, 0.95, 1.15);
        }

        if (hopAnim >= 1.0) {
          isHopping = false;
          hopAnim = 0;
          rooGroup.position.y = baseY;
          rooGroup.scale.set(1.1, 1.1, 1.1);
        }
      } else {
        rooGroup.position.y = baseY + idleBob;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMat.dispose();
      bodyGeo.dispose();
      furMat.dispose();
      bellyMat.dispose();
      innerEarMat.dispose();
      darkMat.dispose();
      gemMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full cursor-pointer"
        title="Click Roo Mascot to Hop!"
      />

      {/* Floating Interactive 3D Mascot HUD */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg text-xs font-mono">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
        <span className="text-slate-700 font-bold">
          3D Roo Mascot (POA Series)
        </span>
        <span className="text-slate-400">|</span>
        <span className="text-blue-600 font-semibold">
          {isHovered ? '👉 Click Roo to Hop!' : 'Move mouse to tilt • Click to Hop'}
        </span>
        {hopCount > 0 && (
          <span className="ml-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold">
            {hopCount} {hopCount === 1 ? 'Hop' : 'Hops'}!
          </span>
        )}
      </div>
    </div>
  );
};