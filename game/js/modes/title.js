// Title screen: a floating island at dusk, Chirag on a glowing pedestal showing off the CHIRAG hoodie.
import * as THREE from 'three';
import { scene, camera, setLights, mesh, std, glow } from '../core.js';
import { chirag, Pose } from '../character.js';
import * as W from '../world.js';

export function createTitle() {
  let world = null, orbit, ring, t0 = 0;

  function build() {
    world = W.worldBundle();
    world.add(W.skyDome({ top: 0x0a0f2c, mid: 0x6b3a7d, bottom: 0x170d2a, stars: 1.2 }));
    const island = world.add(W.floatingIsland({ radius: 22, flat: 4.2, seed: 4, grassA: 0x2a6b4c, grassB: 0x4c9a58, hills: 2.8 }));
    const keepView = (x, z) => z > 1 && Math.abs(x) < 10; // keep the space in front of the camera open
    world.add(W.scatter(island, r => (r() < 0.55 ? W.pineTree() : W.roundTree()), { count: 30, rMin: 7, rMax: 20, seed: 3, avoid: keepView, scale: [0.9, 1.6] }));
    world.add(W.scatter(island, r => W.mushroom([0xef4444, 0xf59e0b, 0xa855f7][Math.floor(r() * 3)]), { count: 14, rMin: 4.8, rMax: 14, seed: 12, scale: [0.8, 1.8] }));
    world.add(W.scatter(island, () => W.rock(), { count: 12, rMin: 5, rMax: 19, seed: 21, scale: [0.6, 1.8] }));
    world.add(W.meadow(island, { count: 380, rMin: 4.6, rMax: 21, seed: 7 }));
    for (let i = 0; i < 4; i++) {
      const l = W.lantern();
      const a = Math.PI / 4 + (i * Math.PI) / 2;
      l.position.set(Math.cos(a) * 3.6, 0, Math.sin(a) * 3.6);
      l.rotation.y = -a;
      world.add(l);
    }
    world.add(W.fireflies({ count: 140, rMin: 2.5, rMax: 20, yMin: 0.6, yMax: 5 }));
    world.add(W.clouds({ count: 14, rMin: 30, rMax: 75, yMin: -16, yMax: 6, color: 0xe9c6f5 }));
    const moon = W.moon({ radius: 8 });
    moon.position.set(-95, 62, -170);
    world.add(moon);

    // stone pedestal with a pulsing olive rune ring
    const ped = mesh(new THREE.CylinderGeometry(1.6, 1.85, 0.45, 10), std(0x5b5368, { flatShading: true }));
    ped.position.y = -0.2;
    world.add(ped);
    ring = mesh(new THREE.TorusGeometry(1.72, 0.05, 8, 64), glow(0xb5c94a, 2.4), { shadow: false });
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.04;
    world.add(ring);

    // glowing commit cubes orbiting him
    orbit = new THREE.Group();
    const greens = [0x0e9f4f, 0x26a641, 0x39d353, 0x7ee787];
    for (let i = 0; i < 12; i++) {
      const c = mesh(new THREE.BoxGeometry(0.26, 0.26, 0.26), glow(greens[i % 4], 0.85), { shadow: false });
      const a = (i / 12) * Math.PI * 2;
      c.position.set(Math.cos(a) * 2.7, 1.3 + Math.sin(a * 3) * 0.45, Math.sin(a) * 2.7);
      orbit.add(c);
    }
    world.add(orbit);
  }

  return {
    name: 'title',
    enter(t) {
      if (!world) build();
      scene.add(world.group);
      scene.fog = new THREE.Fog(0x3d2558, 45, 190);
      setLights({ sky: 0xd8c2ff, ground: 0x2a1f3d, hemiI: 1.25, sunColor: 0xffd6b0, sunI: 2.4, sunPos: [-8, 14, 10], rimColor: 0x8b5cf6, rimI: 1.4, rimPos: [6, 5, -9], box: 14, exposure: 1.1, bloomStrength: 0.75 });
      world.group.add(chirag);
      chirag.position.set(0, 0, 0);
      chirag.rotation.set(0, 0, 0);
      chirag.scale.setScalar(1);
      t0 = t;
    },
    exit() { chirag.removeFromParent(); scene.remove(world.group); },
    update(dt, t) {
      const lt = t - t0;
      world.update(t, dt);
      chirag.rotation.y = Math.sin(lt * 0.45) * Math.PI; // swings round so CHIRAG on the back shows
      const facingBack = Math.cos(chirag.rotation.y) < -0.6;
      (facingBack ? Pose.idle : (Math.sin(lt * 0.9) > 0.55 ? Pose.wave : Pose.idle))(chirag, t);
      orbit.rotation.y += dt * 0.45;
      orbit.children.forEach((c, i) => { c.rotation.x += dt * (1 + i * 0.1); c.rotation.y += dt; });
      ring.material.emissiveIntensity = 1.8 + Math.sin(t * 3) * 0.8;
      const wide = camera.aspect > 1.2;
      const sway = Math.sin(t * 0.15) * 0.6;
      if (wide) { camera.position.set(2.6 + sway, 2.5, 8.6); camera.lookAt(2.6, 1.3, 0); }
      else { camera.position.set(sway, 3.0, 11.5); camera.lookAt(0, -0.4, 0); }
    },
  };
}
