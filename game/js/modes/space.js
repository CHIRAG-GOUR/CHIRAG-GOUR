// SPACE DEFENDER — Chirag pilots a ship through a nebula and blasts a neon wall spelling CHIRAG.
import * as THREE from 'three';
import { scene, camera, setLights, mesh, std, glow, toon, particles, sfx, store, ui, isTouch, input, toast, banner, setHud, setScore, setLives } from '../core.js';
import { chirag, Pose } from '../character.js';
import * as W from '../world.js';

const LETTERS = {
  C: ['.####', '#....', '#....', '#....', '#....', '#....', '.####'],
  H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  I: ['###', '.#.', '.#.', '.#.', '.#.', '.#.', '###'],
  R: ['####.', '#...#', '#...#', '####.', '#..#.', '#...#', '#...#'],
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  G: ['.####', '#....', '#....', '#.###', '#...#', '#...#', '.####'],
};
function nameCells(word = 'CHIRAG') {
  const out = [];
  let x = 0;
  for (const ch of word) {
    const rows = LETTERS[ch];
    rows.forEach((row, r) => [...row].forEach((v, c) => { if (v === '#') out.push([x + c, r]); }));
    x += rows[0].length + 2;
  }
  return out;
}

let world = null;
function buildWorld() {
  world = W.worldBundle();
  world.add(W.skyDome({ top: 0x05061a, mid: 0x0b0f2e, bottom: 0x03040f, stars: 1.6, nebula: 1, nebA: 0x6d28d9, nebB: 0x0891b2 }));
  const planet = W.ringedPlanet({ radius: 38 });
  planet.position.set(-150, 25, -260);
  world.add(planet);
  const moonlet = W.ringedPlanet({ radius: 9, colors: ['#0e7490', '#22d3ee', '#155e75', '#67e8f9'], ring: 0xa5f3fc, seed: 9 });
  moonlet.position.set(120, 55, -230);
  world.add(moonlet);
  const star = W.glowSprite(0xffd7a8, 70);
  star.position.set(170, 30, -300);
  world.add(star);
  world.add(W.glowSprite(0xfff3e0, 14)).position.set(170, 30, -299);
  world.add(W.asteroidField({}));
  // a faint glowing flight lane
  const lane = new THREE.GridHelper(120, 60, 0x2dd4bf, 0x1e3a5f);
  lane.material.transparent = true;
  lane.material.opacity = 0.25;
  lane.position.y = -2.2;
  world.add(lane);
  world.lane = lane;
  return world;
}

export function createSpace(api) {
  return {
    name: 'space',
    enter() {
      if (!world) buildWorld();
      this.group = new THREE.Group();
      scene.add(world.group, this.group);
      scene.fog = new THREE.Fog(0x070a22, 40, 140);
      setLights({ sky: 0xa5b4fc, ground: 0x120c2a, hemiI: 1.0, sunColor: 0xffe2c2, sunI: 2.4, sunPos: [12, 14, 6], rimColor: 0x22d3ee, rimI: 1.6, rimPos: [-6, 5, -12], box: 18, exposure: 1.1, bloomStrength: 1.05 });
      this.score = 0;
      this.best = store.get('best-space');
      this.lives = 3;
      this.wave = 0;
      this.inv = 0;
      this.fireCd = 0;
      this.bugCd = 2;
      this.dead = false;
      this.overShown = false;
      this.bullets = [];
      this.bugs = [];
      this.blocks = [];
      this.vx = 0;
      this.ship = this.makeShip();
      this.ship.position.set(0, 0, 8);
      this.group.add(this.ship);
      this.ship.add(chirag);
      chirag.position.set(0, 0.42, 0.15);
      chirag.rotation.set(0, Math.PI, 0); // facing away from the camera: CHIRAG on his back is visible
      chirag.scale.setScalar(0.5);
      this.bulletGeo = new THREE.CapsuleGeometry(0.06, 0.6, 4, 8);
      this.bulletGeo.rotateX(Math.PI / 2);
      this.bulletMat = glow(0x7dd3fc, 4);
      this.bugGeo = new THREE.IcosahedronGeometry(0.28, 0);
      this.bugMat = glow(0xf43f5e, 2.2);
      this.blockGeo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
      // crystal colours by hit points; brighter = tougher
      this.blockMats = [null, 0x0e7a3a, 0x16a34a, 0x22c55e, 0x86efac].map(c => (c ? new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.3, roughness: 0.25, metalness: 0.3 }) : null));
      this.nextWave();
      setHud({ mode: 'SPACE DEFENDER', score: 0, best: this.best, lives: this.lives });
      if (isTouch) ui.padSpace.classList.remove('hidden');
      sfx.start();
    },
    exit() {
      chirag.removeFromParent();
      scene.remove(world.group, this.group);
      ui.padSpace.classList.add('hidden');
      input.left = input.right = false;
    },
    makeShip() {
      const s = new THREE.Group();
      const hull = mesh(new THREE.CapsuleGeometry(0.42, 1.4, 8, 16), toon(0xe2e8f0), { outline: 0.04 });
      hull.rotation.x = Math.PI / 2;
      hull.scale.set(1.15, 1, 0.7);
      s.add(hull);
      const stripe = mesh(new THREE.CapsuleGeometry(0.43, 1.0, 6, 16), toon(0x38bdf8));
      stripe.rotation.x = Math.PI / 2;
      stripe.scale.set(1.16, 1, 0.3);
      stripe.position.y = -0.05;
      s.add(stripe);
      s.userData.flames = [];
      for (const k of [-1, 1]) {
        const wing = mesh(new THREE.BoxGeometry(1.5, 0.1, 0.8), toon(0x0284c7), { outline: 0.04 });
        wing.position.set(1.0 * k, -0.05, 0.25);
        wing.rotation.z = -0.12 * k;
        wing.rotation.y = 0.25 * k;
        s.add(wing);
        const tip = mesh(new THREE.SphereGeometry(0.08, 8, 6), glow(k < 0 ? 0xf43f5e : 0x22c55e, 3), { shadow: false });
        tip.position.set(1.72 * k, -0.02, 0.35);
        s.add(tip);
        const flame = mesh(new THREE.ConeGeometry(0.16, 0.8, 10), glow(0xfb923c, 3.5), { shadow: false });
        flame.rotation.x = Math.PI / 2;
        flame.position.set(0.32 * k, -0.05, 1.35);
        s.add(flame);
        s.userData.flames.push(flame);
      }
      const seat = mesh(new THREE.CylinderGeometry(0.34, 0.38, 0.12, 20), std(0x55621f));
      seat.position.set(0, 0.32, 0.15);
      s.add(seat);
      return s;
    },
    nextWave() {
      this.wave += 1;
      const portrait = camera.aspect < 0.9;
      this.colGap = portrait ? 0.3 : 0.5;
      this.rowGap = portrait ? 0.3 : 0.45;
      this.yGap = portrait ? 0.45 : 0.7;
      const cells = nameCells();
      const width = Math.max(...cells.map(([c]) => c)) + 1;
      for (const [c, r] of cells) {
        const hp = Math.min(4, 1 + Math.floor(Math.random() * (1 + this.wave * 0.7)));
        const b = mesh(this.blockGeo, this.blockMats[hp], { shadow: false });
        b.userData = { hp, col: c - (width - 1) / 2, row: r, s: this.colGap * 0.9 };
        b.scale.setScalar(b.userData.s);
        this.group.add(b);
        this.blocks.push(b);
      }
      this.formZ = -24;
      this.formT = 0;
      this.advance = 0.55 + this.wave * 0.12;
      banner(`WAVE ${this.wave}<br><small>blast my name</small>`, 1400);
    },
    fire() {
      const b = new THREE.Mesh(this.bulletGeo, this.bulletMat);
      b.position.set(this.ship.position.x, 0, this.ship.position.z - 1.2);
      this.group.add(b);
      this.bullets.push(b);
      sfx.shoot();
    },
    hurt() {
      if (this.inv > 0 || this.dead) return;
      this.lives -= 1;
      setLives(this.lives);
      this.inv = 1.6;
      sfx.hurt();
      particles.burst(this.ship.position.clone(), 0xf87171, 18, 7);
      if (this.lives <= 0) this.die();
    },
    die() {
      this.dead = true;
      this.deathT = 0;
      sfx.boom();
      particles.burst(this.ship.position.clone(), 0xfb923c, 44, 10);
    },
    update(dt, t) {
      world.update(t, dt);
      const portrait = camera.aspect < 0.9;
      camera.position.set(this.ship.position.x * 0.35, portrait ? 7.5 : 5.2, portrait ? 21 : 17.5);
      camera.lookAt(this.ship.position.x * 0.2, 0.6, -8);
      world.lane.position.z = (world.lane.position.z + dt * 14) % 2;
      this.ship.userData.flames.forEach(f => (f.scale.y = 0.8 + Math.random() * 0.6));

      if (this.dead) {
        this.deathT += dt;
        chirag.position.y += dt * 3;
        chirag.rotation.z += dt * 6;
        this.ship.visible = Math.sin(t * 30) > 0;
        if (this.deathT > 1.2 && !this.overShown) { this.overShown = true; api.gameOver('space', this.score); }
        return;
      }
      const limit = portrait ? 6.4 : 10.6;
      const target = (input.right ? 1 : 0) - (input.left ? 1 : 0);
      this.vx += (target * 14 - this.vx) * Math.min(1, dt * 8);
      this.ship.position.x = THREE.MathUtils.clamp(this.ship.position.x + this.vx * dt, -limit, limit);
      this.ship.rotation.z = -this.vx * 0.035;
      this.ship.position.y = Math.sin(t * 3) * 0.08;
      this.inv = Math.max(0, this.inv - dt);
      this.ship.visible = this.inv <= 0 || Math.sin(t * 40) > 0;
      Pose.sit(chirag, t, this.vx * 0.02);

      this.fireCd -= dt;
      if (this.fireCd <= 0) { this.fire(); this.fireCd = 0.12; }

      this.formT += dt;
      this.formZ += this.advance * dt;
      const sway = Math.sin(this.formT * 0.9) * (portrait ? 0.6 : 1.2);
      for (const b of this.blocks) {
        const u = b.userData;
        b.position.set(u.col * this.colGap + sway, 0.25 + (6 - u.row) * this.yGap + Math.sin(t * 2 + u.col * 0.3) * 0.08, this.formZ + u.row * this.rowGap);
        b.rotation.y = Math.sin(t * 1.5 + u.col) * 0.25;
        if (b.position.z > this.ship.position.z - 1) { this.lives = 1; this.inv = 0; this.hurt(); return; }
      }

      for (let i = this.bullets.length - 1; i >= 0; i--) {
        const bl = this.bullets[i];
        const prevZ = bl.position.z;
        bl.position.z -= 42 * dt;
        // once inside the word, the laser climbs the ramp so it can reach every letter row
        const depth = (this.formZ + 6 * this.rowGap - bl.position.z) / this.rowGap;
        bl.position.y = 0.25 + THREE.MathUtils.clamp(depth, 0, 6) * this.yGap;
        let best = -1;
        for (let j = 0; j < this.blocks.length; j++) {
          const b = this.blocks[j], h = b.userData.s * 0.6;
          if (Math.abs(b.position.x - bl.position.x) < h && b.position.z - h <= prevZ && b.position.z + h >= bl.position.z) {
            if (best < 0 || b.position.z > this.blocks[best].position.z) best = j;
          }
        }
        let hit = false;
        if (best >= 0) {
          const b = this.blocks[best];
          hit = true;
          b.userData.hp -= 1;
          if (b.userData.hp <= 0) {
            particles.burst(b.position.clone(), 0x4ade80, 14, 6);
            this.group.remove(b);
            this.blocks.splice(best, 1);
            this.score += 10;
            sfx.boom();
          } else {
            b.material = this.blockMats[b.userData.hp];
            b.scale.setScalar(b.userData.s * 0.8);
            this.score += 1;
          }
          setScore(this.score, Math.max(this.best, this.score));
        }
        if (hit || bl.position.z < -60) { this.group.remove(bl); this.bullets.splice(i, 1); }
      }
      this.blocks.forEach(b => b.scale.lerp(new THREE.Vector3(b.userData.s, b.userData.s, b.userData.s), dt * 8));

      this.bugCd -= dt;
      if (this.bugCd <= 0 && this.blocks.length) {
        const from = this.blocks[Math.floor(Math.random() * this.blocks.length)];
        const g = mesh(this.bugGeo, this.bugMat, { shadow: false });
        g.position.copy(from.position);
        const dir = new THREE.Vector3(this.ship.position.x - from.position.x, -from.position.y * 0.15, this.ship.position.z - from.position.z).normalize();
        g.userData.v = dir.multiplyScalar(9 + this.wave * 1.2);
        this.group.add(g);
        this.bugs.push(g);
        this.bugCd = Math.max(0.45, 1.6 - this.wave * 0.15);
      }
      for (let i = this.bugs.length - 1; i >= 0; i--) {
        const g = this.bugs[i];
        g.position.addScaledVector(g.userData.v, dt);
        g.position.y = Math.max(0, g.position.y);
        g.rotation.x += dt * 6;
        g.rotation.y += dt * 4;
        if (g.position.distanceTo(this.ship.position) < 0.95) { this.hurt(); this.group.remove(g); this.bugs.splice(i, 1); continue; }
        if (g.position.z > 20) { this.group.remove(g); this.bugs.splice(i, 1); }
      }
      if (!this.blocks.length) {
        this.score += 50;
        setScore(this.score, Math.max(this.best, this.score));
        toast('+50 wave bonus · name blasted');
        this.nextWave();
      }
    },
    onKey(k, down) {
      if (['ArrowLeft', 'a', 'A'].includes(k)) input.left = down;
      if (['ArrowRight', 'd', 'D'].includes(k)) input.right = down;
    },
  };
}
