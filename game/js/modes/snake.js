// SNAKE RIDE — Chirag rides a garden snake across a lawn arena on a floating island at sunset.
import * as THREE from 'three';
import { scene, camera, setLights, mesh, std, glow, toon, particles, sfx, store, ui, isTouch, input, toast, banner, setHud, setScore, randomRepo } from '../core.js';
import { chirag, Pose } from '../character.js';
import * as W from '../world.js';

const worlds = {}; // cached per board shape (landscape / portrait)

function buildWorld(Wd, Hd) {
  const world = W.worldBundle();
  world.add(W.skyDome({ top: 0x16245a, mid: 0xe0805f, bottom: 0x2a1530, stars: 0.5 }));
  const pad = 2.2;
  const onBoard = (x, z) => Math.abs(x) < Wd / 2 + pad && Math.abs(z) < Hd / 2 + pad;
  const island = world.add(W.floatingIsland({ radius: Math.max(Wd, Hd) * 0.5 + 16, flatShape: onBoard, seed: 9, grassA: 0x3b7a33, grassB: 0x6aa84a, hills: 3 }));
  const outside = (m) => (x, z) => Math.abs(x) < Wd / 2 + pad + m && Math.abs(z) < Hd / 2 + pad + m;
  const R = Math.max(Wd, Hd) * 0.5 + 15;
  world.add(W.scatter(island, r => (r() < 0.5 ? W.pineTree([0x245a3a, 0x2f7448, 0x3d8f55]) : W.roundTree([0x4f8f2f, 0x6aa83a, 0x3c7a2a])), { count: 46, rMin: 6, rMax: R - 1, seed: 17, avoid: outside(1.5), scale: [1, 1.8] }));
  world.add(W.scatter(island, r => W.mushroom([0xef4444, 0xf59e0b][Math.floor(r() * 2)]), { count: 20, rMin: 6, rMax: R - 2, seed: 5, avoid: outside(0.6), scale: [0.8, 1.6] }));
  world.add(W.scatter(island, () => W.rock(0x7a7186), { count: 18, rMin: 6, rMax: R - 1, seed: 23, avoid: outside(0.8), scale: [0.6, 2] }));
  world.add(W.meadow(island, { count: 520, rMin: 4, rMax: R, seed: 31, avoid: outside(0.3) }));
  const pondPart = W.pond(2.6);
  pondPart.object.position.set(Wd / 2 + pad + 4.2, 0.06, -Hd / 2 + 1.5);
  if (!outside(0)(pondPart.object.position.x, pondPart.object.position.z)) world.add(pondPart);
  world.add(W.fireflies({ count: 140, rMin: Math.max(Wd, Hd) / 2 + 3, rMax: R, yMin: 0.8, yMax: 5, color: 0xffe08a }));
  world.add(W.clouds({ count: 14, rMin: R + 30, rMax: R + 90, yMin: -22, yMax: 22, color: 0xffc2a8, opacity: 0.8 }));
  world.add(W.mountains({ color: 0x2a1f45, rMin: 150, rMax: 210 }));
  const sunGlow = W.glowSprite(0xffb36b, 140);
  sunGlow.position.set(-160, 18, -260);
  world.add(sunGlow);

  // lawn arena: checkerboard grass tiles
  const tiles = new THREE.InstancedMesh(new THREE.BoxGeometry(0.96, 0.14, 0.96), std(0xffffff, { roughness: 0.95 }), Wd * Hd);
  tiles.receiveShadow = true;
  const m = new THREE.Matrix4(), c = new THREE.Color();
  let i = 0;
  for (let y = 0; y < Hd; y++) for (let x = 0; x < Wd; x++) {
    const base = (x + y) % 2 ? 0x5fae45 : 0x4f9c3c;
    c.setHex(base).offsetHSL(0, 0, (Math.random() - 0.5) * 0.04);
    tiles.setMatrixAt(i, m.makeTranslation(x - Wd / 2 + 0.5, -0.03, y - Hd / 2 + 0.5)); // top sits 4cm above the island so they never z-fight
    tiles.setColorAt(i++, c);
  }
  world.add(tiles);
  // mossy stone wall around the arena
  const stones = [];
  const wx = Wd / 2 + 0.55, wz = Hd / 2 + 0.55;
  for (let x = -wx; x <= wx + 0.01; x += 0.9) stones.push([x, -wz], [x, wz]);
  for (let z = -wz + 0.9; z < wz - 0.01; z += 0.9) stones.push([-wx, z], [wx, z]);
  const stoneMesh = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.5, 0), std(0xffffff, { flatShading: true, roughness: 1 }), stones.length);
  stoneMesh.castShadow = stoneMesh.receiveShadow = true;
  const q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  stones.forEach(([x, z], k) => {
    q.setFromEuler(new THREE.Euler(Math.random(), Math.random() * 6, Math.random()));
    s.set(0.95 + Math.random() * 0.3, 0.7 + Math.random() * 0.35, 0.95 + Math.random() * 0.3);
    stoneMesh.setMatrixAt(k, m.compose(p.set(x, 0.18, z), q, s));
    stoneMesh.setColorAt(k, c.setHex(Math.random() < 0.3 ? 0x5d7a46 : 0x8a8396).offsetHSL(0, 0, (Math.random() - 0.5) * 0.08));
  });
  world.add(stoneMesh);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
    const l = W.lantern();
    l.position.set(sx * (wx + 0.9), 0, sz * (wz + 0.9));
    l.rotation.y = Math.atan2(-sx, -sz) + Math.PI / 2;
    world.add(l);
  });
  return world;
}

export function createSnake(api) {
  const S = {
    name: 'snake',
    enter() {
      const portrait = camera.aspect < 0.9;
      this.W = portrait ? 13 : 22;
      this.H = portrait ? 19 : 14;
      const key = `${this.W}x${this.H}`;
      this.world = worlds[key] || (worlds[key] = buildWorld(this.W, this.H));
      this.group = new THREE.Group();
      scene.add(this.world.group, this.group);
      scene.fog = new THREE.Fog(0x9a5a6a, 38, 175);
      setLights({ sky: 0xffd7b5, ground: 0x2c3a2a, hemiI: 1.15, sunColor: 0xffc58a, sunI: 2.8, sunPos: [-10, 24, -8], rimColor: 0xff8a65, rimI: 0.9, rimPos: [10, 6, 12], box: Math.max(this.W, this.H) * 0.75, exposure: 1.05, bloomStrength: 0.65 });

      this.segGeo = new THREE.SphereGeometry(0.42, 18, 12);
      this.segMats = [toon(0x34d399), toon(0x059669)];
      this.segs = [];
      const cx = Math.floor(this.W / 2) - 3, cy = Math.floor(this.H / 2);
      this.body = [{ x: cx + 2, y: cy }, { x: cx + 1, y: cy }, { x: cx, y: cy }];
      this.prev = this.body.map(b => ({ ...b }));
      this.dir = { x: 1, y: 0 };
      input.dirQueue = [];
      this.stepTime = 0.17;
      this.acc = 0;
      this.score = 0;
      this.best = store.get('best-snake');
      this.dead = false;
      this.overShown = false;
      this.cam = null;

      // head: a cute garden snake with Chirag riding on top
      this.head = new THREE.Group();
      const skull = mesh(new THREE.SphereGeometry(0.5, 20, 14), toon(0x34d399), { outline: 0.04 });
      skull.scale.set(1, 0.78, 1.2);
      skull.position.y = 0.4;
      this.head.add(skull);
      for (const sx of [-1, 1]) {
        const e = mesh(new THREE.SphereGeometry(0.13, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), { shadow: false });
        e.position.set(0.24 * sx, 0.62, 0.42);
        const pupil = mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0x0d1117 }), { shadow: false });
        pupil.position.z = 0.08;
        e.add(pupil);
        this.head.add(e);
      }
      this.tongue = new THREE.Group();
      [-1, 1].forEach(sx => {
        const fork = mesh(new THREE.BoxGeometry(0.04, 0.02, 0.22), toon(0xef4444), { shadow: false });
        fork.position.set(sx * 0.04, 0, 0.11);
        fork.rotation.y = sx * 0.35;
        this.tongue.add(fork);
      });
      this.tongue.position.set(0, 0.32, 0.6);
      this.head.add(this.tongue);
      this.group.add(this.head);
      this.head.add(chirag);
      chirag.position.set(0, 0.9, -0.08);
      chirag.rotation.set(0, 0, 0);
      chirag.scale.setScalar(0.55);

      // food: a glowing commit gem
      this.food = new THREE.Group();
      this.gem = mesh(new THREE.OctahedronGeometry(0.34), glow(0x22c55e, 1.1), { shadow: false });
      this.food.add(this.gem);
      const halo = mesh(new THREE.TorusGeometry(0.42, 0.03, 6, 32), glow(0x4ade80, 1.2), { shadow: false });
      halo.rotation.x = Math.PI / 2;
      halo.position.y = -0.3;
      this.food.add(halo);
      this.group.add(this.food);
      this.golden = null;
      this.foodPos = null;
      this.placeFood();

      setHud({ mode: 'SNAKE RIDE', score: 0, best: this.best });
      if (isTouch) ui.padSnake.classList.remove('hidden');
      banner('READY?<br><small>eat the glowing commits</small>', 1200);
      sfx.start();
    },
    exit() {
      chirag.removeFromParent();
      scene.remove(this.world.group, this.group);
      ui.padSnake.classList.add('hidden');
    },
    toWorld(x, y) { return { x: x - this.W / 2 + 0.5, z: y - this.H / 2 + 0.5 }; },
    freeCell() {
      for (let k = 0; k < 500; k++) {
        const c = { x: Math.floor(Math.random() * this.W), y: Math.floor(Math.random() * this.H) };
        const clash = this.body.some(b => b.x === c.x && b.y === c.y) || (this.foodPos && this.foodPos.x === c.x && this.foodPos.y === c.y);
        if (!clash) return c;
      }
      return { x: 0, y: 0 };
    },
    placeFood() {
      this.foodPos = this.freeCell();
      const p = this.toWorld(this.foodPos.x, this.foodPos.y);
      this.food.position.set(p.x, 0.55, p.z);
      this.foodRepo = randomRepo();
    },
    spawnGolden() {
      const g = mesh(new THREE.OctahedronGeometry(0.42), glow(0xfacc15, 1.4), { shadow: false });
      g.userData = { cell: this.freeCell(), ttl: 7 };
      const p = this.toWorld(g.userData.cell.x, g.userData.cell.y);
      g.position.set(p.x, 0.6, p.z);
      this.group.add(g);
      this.golden = g;
      toast('★ golden commit — worth 5!');
    },
    turn(d) {
      const last = input.dirQueue.length ? input.dirQueue[input.dirQueue.length - 1] : this.dir;
      if ((d.x === -last.x && d.y === -last.y) || (d.x === last.x && d.y === last.y)) return;
      if (input.dirQueue.length < 3) input.dirQueue.push(d);
    },
    step() {
      if (input.dirQueue.length) this.dir = input.dirQueue.shift();
      this.prev = this.body.map(b => ({ ...b }));
      const h = this.body[0];
      const nh = { x: h.x + this.dir.x, y: h.y + this.dir.y };
      const hitWall = nh.x < 0 || nh.y < 0 || nh.x >= this.W || nh.y >= this.H;
      const willEat = nh.x === this.foodPos.x && nh.y === this.foodPos.y;
      const hitSelf = (willEat ? this.body : this.body.slice(0, -1)).some(b => b.x === nh.x && b.y === nh.y);
      if (hitWall || hitSelf) return this.die();
      this.body.unshift(nh);
      this.prev.unshift({ ...h });
      if (willEat) {
        this.score += 1;
        const p = this.toWorld(nh.x, nh.y);
        particles.burst(new THREE.Vector3(p.x, 0.7, p.z), 0x34d399, 18);
        sfx.eat();
        toast(`+1 commit → ${this.foodRepo}`);
        this.placeFood();
        this.stepTime = Math.max(0.075, this.stepTime * 0.97);
        if (!this.golden && Math.random() < 0.18) this.spawnGolden();
      } else {
        this.body.pop();
      }
      if (this.golden && nh.x === this.golden.userData.cell.x && nh.y === this.golden.userData.cell.y) {
        this.score += 5;
        particles.burst(this.golden.position.clone(), 0xfacc15, 26, 8);
        sfx.eat(); sfx.eat();
        this.group.remove(this.golden);
        this.golden = null;
        this.body.push({ ...this.body[this.body.length - 1] });
        this.prev.push({ ...this.prev[this.prev.length - 1] });
      }
      setScore(this.score, Math.max(this.best, this.score));
    },
    die() {
      this.dead = true;
      this.deathT = 0;
      sfx.hurt();
      particles.burst(this.head.position.clone().add(new THREE.Vector3(0, 0.7, 0)), 0xf87171, 24, 7);
      this.group.attach(chirag);
      this.fly = { v: new THREE.Vector3(-this.dir.x * 2.5, 7, -this.dir.y * 2.5) };
    },
    syncBody(alpha, t) {
      while (this.segs.length < this.body.length - 1) {
        const k = this.segs.length;
        const s = mesh(this.segGeo, this.segMats[k % 2], { outline: 0.04 });
        this.group.add(s);
        this.segs.push(s);
      }
      for (let i = 0; i < this.segs.length; i++) {
        const cur = this.body[i + 1], pre = this.prev[i + 1] || cur;
        const seg = this.segs[i];
        if (!cur) { seg.visible = false; continue; }
        seg.visible = true;
        const a = this.toWorld(pre.x, pre.y), b = this.toWorld(cur.x, cur.y);
        const taper = 1 - Math.min(0.45, i * 0.018);
        seg.scale.set(taper, taper * 0.85, taper);
        seg.position.set(a.x + (b.x - a.x) * alpha, 0.34 * taper + Math.sin(t * 8 - i * 0.7) * 0.04, a.z + (b.z - a.z) * alpha);
      }
      const h = this.body[0], ph = this.prev[0] || h;
      const a = this.toWorld(ph.x, ph.y), b = this.toWorld(h.x, h.y);
      this.head.position.set(a.x + (b.x - a.x) * alpha, 0, a.z + (b.z - a.z) * alpha);
      let diff = Math.atan2(this.dir.x, this.dir.y) - this.head.rotation.y;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      this.head.rotation.y += diff * 0.35;
    },
    update(dt, t) {
      this.world.update(t, dt);
      const hx = this.head.position.x, hz = this.head.position.z;
      // chase-cam tilted toward the horizon so the garden world stays in view
      const d = camera.aspect < 0.9 ? 15 : 11.5;
      const target = new THREE.Vector3(hx * 0.55, d * 0.82, hz * 0.55 + d * 1.0);
      this.cam = this.cam || target.clone();
      this.cam.lerp(target, Math.min(1, dt * 3));
      camera.position.copy(this.cam);
      camera.lookAt(this.cam.x, 0, this.cam.z - d * 1.45);

      this.food.rotation.y += dt * 1.8;
      this.gem.rotation.x += dt * 1.2;
      this.food.position.y = 0.6 + Math.sin(t * 3.5) * 0.12;
      this.tongue.scale.z = Math.sin(t * 14) > 0.4 ? 1 : 0.1;
      if (this.golden) {
        this.golden.rotation.y += dt * 3;
        this.golden.userData.ttl -= dt;
        this.golden.visible = this.golden.userData.ttl > 2 || Math.sin(t * 20) > 0;
        if (this.golden.userData.ttl <= 0) { this.group.remove(this.golden); this.golden = null; }
      }
      if (this.dead) {
        this.deathT += dt;
        this.fly.v.y -= 18 * dt;
        chirag.position.addScaledVector(this.fly.v, dt);
        chirag.rotation.x += dt * 9;
        chirag.rotation.z += dt * 5;
        if (this.deathT > 1.1 && !this.overShown) { this.overShown = true; api.gameOver('snake', this.score); }
        return;
      }
      this.acc += dt;
      while (this.acc >= this.stepTime) { this.acc -= this.stepTime; this.step(); if (this.dead) return; }
      this.syncBody(this.acc / this.stepTime, t);
      Pose.sit(chirag, t, Math.sin(t * 6) * 0.06);
      chirag.userData.arms[1].rotation.z = 2.4 + Math.sin(t * 10) * 0.25; // yee-haw
    },
    onKey(k, down) {
      if (!down) return;
      const map = { ArrowUp: [0, -1], w: [0, -1], W: [0, -1], ArrowDown: [0, 1], s: [0, 1], S: [0, 1], ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], ArrowRight: [1, 0], d: [1, 0], D: [1, 0] };
      if (map[k]) this.turn({ x: map[k][0], y: map[k][1] });
    },
  };
  return S;
}
