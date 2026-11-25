// Chirag: The Game — a tiny 3D arcade starring a chibi Chirag.
// Two modes: SNAKE RIDE (he rides the commit snake) and SPACE DEFENDER (he pilots a ship).
import * as THREE from 'three';

// ------------------------------------------------------------------ palette (matches engine/character.py)
const COL = {
  hair: 0x2a1f1a, skin: 0xd69e74, eye: 0x1a1423, blush: 0xf28b82, mouth: 0x9a3b3b,
  hoodie: 0x6b7a2e, hood: 0x55621f, strings: 0xeef2e2, jeans: 0x3e6fb0, sneaker: 0xf8fafc, sole: 0xcbd5e1,
  bg: 0x0d1117,
};
const GRID = [0x161b22, 0x0e4429, 0x006d32, 0x26a641, 0x39d353];
const FALLBACK_REPOS = ['POA-Skippi', 'Eat-Better-Internship', 'ZeePrep-MobileApp', 'Olympiad-Activities', 'Mangalyan-India', 'SolarSystem3js', 'physicsmotion2', 'Minty-Finance'];
let REPOS = FALLBACK_REPOS;
fetch('data.json').then(r => r.ok ? r.json() : null).then(d => {
  const names = d && Array.isArray(d.all_projects) ? d.all_projects.map(p => p.name).filter(n => n && n !== 'CHIRAG-GOUR') : null;
  if (names && names.length) REPOS = names;
}).catch(() => {});

// ------------------------------------------------------------------ storage (safe)
const store = {
  get(k, d = 0) { try { const v = localStorage.getItem('chirag-game:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('chirag-game:' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

// ------------------------------------------------------------------ renderer / scene
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(COL.bg);
scene.fog = new THREE.Fog(COL.bg, 34, 90);
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 300);

scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x1e293b, 1.1));
const sun = new THREE.DirectionalLight(0xffffff, 1.9);
sun.position.set(8, 16, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 60 });
scene.add(sun);
const rim = new THREE.DirectionalLight(0x38bdf8, 0.9);
rim.position.set(-6, 6, -10);
scene.add(rim);

// starfield
{
  const g = new THREE.BufferGeometry();
  const pts = [];
  for (let i = 0; i < 1400; i++) {
    const r = 70 + Math.random() * 60, t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
    pts.push(r * Math.sin(p) * Math.cos(t), Math.abs(r * Math.cos(p)) * 0.8 + 4, r * Math.sin(p) * Math.sin(t));
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, sizeAttenuation: true, fog: false, transparent: true, opacity: 0.8 })));
}

// toon shading
const gradTex = new THREE.DataTexture(new Uint8Array([80, 170, 255]), 3, 1, THREE.RedFormat);
gradTex.minFilter = gradTex.magFilter = THREE.NearestFilter;
gradTex.needsUpdate = true;
const toon = (color, extra = {}) => new THREE.MeshToonMaterial({ color, gradientMap: gradTex, ...extra });
const outlineMat = new THREE.MeshBasicMaterial({ color: 0x07090d, side: THREE.BackSide });

function mesh(geo, mat, { shadow = true, outline = 0 } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = shadow;
  if (outline) {
    const o = new THREE.Mesh(geo, outlineMat);
    o.scale.setScalar(1 + outline);
    m.add(o);
  }
  return m;
}

// ------------------------------------------------------------------ the lead character
function backTextTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, c.width, c.height);
  g.font = '900 170px "Arial Black", Impact, system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = 18;
  g.strokeStyle = '#3c4515';
  g.strokeText('CHIRAG', 512, 136);
  g.fillStyle = '#f8fafc';
  g.fillText('CHIRAG', 512, 136);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function makeChirag() {
  const root = new THREE.Group();
  const rig = new THREE.Group();
  root.add(rig);
  const ol = 0.045;

  // legs (pivot at hip)
  const legs = [];
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(0.17 * s, 0.64, 0);
    rig.add(hip);
    const leg = mesh(new THREE.CapsuleGeometry(0.135, 0.3, 6, 14), toon(COL.jeans), { outline: ol });
    leg.position.y = -0.25;
    hip.add(leg);
    const cuff = mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 16), toon(0x335d96));
    cuff.position.y = -0.42;
    hip.add(cuff);
    const shoe = new THREE.Group();
    shoe.position.set(0, -0.53, 0.05);
    hip.add(shoe);
    const top = mesh(new THREE.SphereGeometry(0.17, 18, 12), toon(COL.sneaker), { outline: ol });
    top.scale.set(1, 0.62, 1.45);
    shoe.add(top);
    const sole = mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.06, 18), toon(COL.sole));
    sole.scale.set(1, 1, 1.45);
    sole.position.y = -0.06;
    shoe.add(sole);
    const lace = mesh(new THREE.BoxGeometry(0.12, 0.02, 0.1), toon(0x94a3b8), { shadow: false });
    lace.position.set(0, 0.09, 0.08);
    shoe.add(lace);
    legs.push(hip);
  }

  // hoodie torso
  const torso = new THREE.Group();
  torso.position.y = 0.98;
  rig.add(torso);
  const body = mesh(new THREE.CapsuleGeometry(0.37, 0.28, 8, 20), toon(COL.hoodie), { outline: ol });
  body.scale.set(1.06, 1, 0.86);
  torso.add(body);
  const hem = mesh(new THREE.TorusGeometry(0.36, 0.05, 8, 24), toon(COL.hood));
  hem.rotation.x = Math.PI / 2;
  hem.scale.set(1.06, 0.86, 1);
  hem.position.y = -0.36;
  torso.add(hem);
  const pocket = mesh(new THREE.BoxGeometry(0.42, 0.15, 0.06), toon(COL.hood), { shadow: false });
  pocket.position.set(0, -0.16, 0.3);
  torso.add(pocket);
  for (const s of [-1, 1]) {
    const str = mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.24, 6), toon(COL.strings), { shadow: false });
    str.position.set(0.09 * s, 0.22, 0.31);
    torso.add(str);
    const tip = mesh(new THREE.SphereGeometry(0.03, 8, 6), toon(COL.strings), { shadow: false });
    tip.position.set(0.09 * s, 0.09, 0.315);
    torso.add(tip);
  }
  const hood = mesh(new THREE.SphereGeometry(0.34, 20, 14), toon(COL.hood), { outline: ol });
  hood.scale.set(1.15, 0.62, 0.75);
  hood.position.set(0, 0.42, -0.2);
  torso.add(hood);
  // CHIRAG across the back — a curved band hugging the hoodie
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(0.376, 0.376, 0.2, 32, 1, true, Math.PI - 0.95, 1.9),
    new THREE.MeshBasicMaterial({ map: backTextTexture(), transparent: true, depthWrite: false })
  );
  band.scale.set(1.06, 1, 0.86);
  band.position.y = 0.02;
  torso.add(band);

  // arms (pivot at shoulder)
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(0.42 * s, 1.24, 0);
    rig.add(sh);
    const arm = mesh(new THREE.CapsuleGeometry(0.1, 0.26, 6, 12), toon(COL.hoodie), { outline: ol });
    arm.position.y = -0.2;
    sh.add(arm);
    const hand = mesh(new THREE.SphereGeometry(0.105, 14, 10), toon(COL.skin), { outline: ol });
    hand.position.y = -0.42;
    sh.add(hand);
    sh.rotation.z = 0.18 * s;
    arms.push(sh);
  }

  // head — big chibi head
  const head = new THREE.Group();
  head.position.y = 1.98;
  rig.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.62, 36, 26), toon(COL.skin), { outline: 0.03 });
  skull.scale.set(1.06, 0.95, 1);
  head.add(skull);
  for (const s of [-1, 1]) {
    const ear = mesh(new THREE.SphereGeometry(0.12, 12, 10), toon(COL.skin));
    ear.position.set(0.64 * s, -0.04, 0);
    head.add(ear);
  }
  const hairMat = toon(COL.hair);
  const cap = mesh(new THREE.SphereGeometry(0.67, 36, 20, 0, Math.PI * 2, 0, Math.PI * 0.56), hairMat, { outline: 0.03 });
  cap.rotation.x = -0.32;
  cap.scale.set(1.06, 1, 1.02);
  cap.position.y = 0.04;
  head.add(cap);
  const backHair = mesh(new THREE.SphereGeometry(0.645, 28, 20), hairMat);
  backHair.position.set(0, -0.02, -0.1);
  backHair.scale.set(1.05, 0.95, 1);
  head.add(backHair);
  // fringe tufts
  for (let i = -2; i <= 2; i++) {
    const tuft = mesh(new THREE.SphereGeometry(0.17, 12, 10), hairMat);
    const a = i * 0.32;
    tuft.position.set(Math.sin(a) * 0.5, 0.33 - Math.abs(i) * 0.03, Math.cos(a) * 0.43);
    tuft.scale.set(1, 1.15, 0.6);
    tuft.rotation.z = -i * 0.25;
    tuft.lookAt(tuft.position.clone().multiplyScalar(2).add(new THREE.Vector3(0, 0.2, 0)));
    head.add(tuft);
  }
  // ahoge (the cute hair curl on top)
  const curl = mesh(new THREE.TorusGeometry(0.13, 0.035, 8, 20, Math.PI * 1.3), hairMat, { shadow: false });
  curl.position.set(0.05, 0.72, 0.02);
  curl.rotation.set(0, Math.PI / 2, 0.6);
  head.add(curl);
  // face
  const eyes = [];
  for (const s of [-1, 1]) {
    const eye = mesh(new THREE.SphereGeometry(0.115, 16, 12), toon(COL.eye), { shadow: false });
    eye.scale.set(0.85, 1.2, 0.45);
    eye.position.set(0.22 * s, -0.04, 0.57);
    head.add(eye);
    const spark = mesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), { shadow: false });
    spark.position.set(0.035, 0.05, 0.09);
    eye.add(spark);
    eyes.push(eye);
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.085, 16), new THREE.MeshBasicMaterial({ color: COL.blush, transparent: true, opacity: 0.55, depthWrite: false }));
    blush.position.set(0.37 * s, -0.2, 0.5);
    blush.lookAt(blush.position.clone().multiplyScalar(2));
    head.add(blush);
  }
  const mouth = mesh(new THREE.TorusGeometry(0.06, 0.018, 8, 14, Math.PI), toon(COL.mouth), { shadow: false });
  mouth.position.set(0, -0.24, 0.585);
  mouth.rotation.z = Math.PI;
  head.add(mouth);

  root.userData = { rig, legs, arms, head, eyes, torso, blinkAt: 2 };
  return root;
}

const Pose = {
  reset(c) {
    const u = c.userData;
    u.rig.position.set(0, 0, 0);
    u.rig.rotation.set(0, 0, 0);
    u.legs.forEach(l => l.rotation.set(0, 0, 0));
    u.arms.forEach((a, i) => a.rotation.set(0, 0, i ? 0.18 : -0.18));
    u.head.rotation.set(0, 0, 0);
  },
  blink(c, t) {
    const u = c.userData;
    if (t > u.blinkAt + 0.14) u.blinkAt = t + 2 + Math.random() * 3;
    const closed = t > u.blinkAt && t < u.blinkAt + 0.14;
    u.eyes.forEach(e => (e.scale.y = closed ? 0.12 : 1.2));
  },
  idle(c, t) {
    Pose.reset(c);
    const u = c.userData;
    u.rig.position.y = Math.sin(t * 2.2) * 0.035;
    u.head.rotation.y = Math.sin(t * 0.8) * 0.18;
    u.head.rotation.z = Math.sin(t * 1.1) * 0.05;
    u.arms[0].rotation.z = -0.18 - Math.sin(t * 2.2) * 0.04;
    u.arms[1].rotation.z = 0.18 + Math.sin(t * 2.2) * 0.04;
    Pose.blink(c, t);
  },
  wave(c, t) {
    Pose.idle(c, t);
    const a = c.userData.arms[1];
    a.rotation.z = 2.5 + Math.sin(t * 9) * 0.35;
  },
  run(c, t, speed = 11) {
    Pose.reset(c);
    const u = c.userData, s = Math.sin(t * speed);
    u.legs[0].rotation.x = s * 0.75;
    u.legs[1].rotation.x = -s * 0.75;
    u.arms[0].rotation.x = -s * 0.85;
    u.arms[1].rotation.x = s * 0.85;
    u.rig.position.y = Math.abs(Math.cos(t * speed)) * 0.09;
    u.rig.rotation.x = 0.08;
    Pose.blink(c, t);
  },
  sit(c, t, lean = 0) {
    Pose.reset(c);
    const u = c.userData;
    u.legs.forEach((l, i) => { l.rotation.x = -1.45; l.rotation.z = (i ? 1 : -1) * 0.12; });
    u.arms.forEach((a, i) => { a.rotation.x = -0.9; a.rotation.z = (i ? 1 : -1) * 0.25; });
    u.rig.position.y = -0.5 + Math.sin(t * 3) * 0.02;
    u.rig.rotation.z = lean;
    u.head.rotation.z = -lean * 0.6 + Math.sin(t * 1.5) * 0.04;
    Pose.blink(c, t);
  },
  cheer(c, t) {
    Pose.reset(c);
    const u = c.userData;
    u.arms[0].rotation.z = -2.6 - Math.sin(t * 12) * 0.2;
    u.arms[1].rotation.z = 2.6 + Math.sin(t * 12) * 0.2;
    u.rig.position.y = Math.abs(Math.sin(t * 7)) * 0.35;
    Pose.blink(c, t);
  },
};

const chirag = makeChirag();

// ------------------------------------------------------------------ audio (tiny synth)
const audio = {
  ctx: null, muted: store.get('muted', false),
  ensure() { if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { this.ctx = null; } } },
  beep(freq = 440, dur = 0.08, type = 'square', vol = 0.05, slide = 0) {
    if (this.muted) return;
    this.ensure();
    const ctx = this.ctx; if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), ctx.currentTime + dur);
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur);
  },
};
const sfx = {
  eat: () => { audio.beep(660, 0.06); setTimeout(() => audio.beep(990, 0.08), 55); },
  shoot: () => audio.beep(880, 0.05, 'square', 0.02, -500),
  boom: () => audio.beep(180, 0.25, 'sawtooth', 0.05, -140),
  hurt: () => audio.beep(220, 0.3, 'triangle', 0.08, -160),
  over: () => { [523, 392, 330, 262].forEach((f, i) => setTimeout(() => audio.beep(f, 0.18, 'triangle', 0.07), i * 160)); },
  start: () => { [262, 330, 392, 523].forEach((f, i) => setTimeout(() => audio.beep(f, 0.1, 'square', 0.04), i * 90)); },
};

// ------------------------------------------------------------------ particles
const particles = (() => {
  const geo = new THREE.BoxGeometry(0.16, 0.16, 0.16);
  const pool = [];
  const group = new THREE.Group();
  scene.add(group);
  return {
    burst(pos, color, n = 14, speed = 6) {
      for (let i = 0; i < n; i++) {
        let p = pool.find(q => !q.visible);
        if (!p) { p = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color })); group.add(p); pool.push(p); }
        p.material.color.setHex(color);
        p.visible = true;
        p.position.copy(pos);
        p.userData.v = new THREE.Vector3((Math.random() - 0.5) * speed, Math.random() * speed, (Math.random() - 0.5) * speed);
        p.userData.life = 0.6 + Math.random() * 0.4;
        p.scale.setScalar(1);
      }
    },
    update(dt) {
      for (const p of pool) {
        if (!p.visible) continue;
        p.userData.life -= dt;
        if (p.userData.life <= 0) { p.visible = false; continue; }
        p.userData.v.y -= 14 * dt;
        p.position.addScaledVector(p.userData.v, dt);
        p.rotation.x += dt * 8; p.rotation.y += dt * 6;
        p.scale.setScalar(Math.max(0.05, p.userData.life));
      }
    },
    clear() { pool.forEach(p => (p.visible = false)); },
  };
})();

// ------------------------------------------------------------------ UI helpers
const $ = id => document.getElementById(id);
const ui = {
  hud: $('hud'), menu: $('menu'), over: $('over'), banner: $('banner'), toast: $('toast'),
  score: $('hud-score'), best: $('hud-best'), lives: $('hud-lives'), mode: $('hud-mode'),
  padSnake: $('pad-snake'), padSpace: $('pad-space'),
};
const isTouch = matchMedia('(pointer: coarse)').matches;
let toastTimer = 0, bannerTimer = 0;
function toast(msg) { ui.toast.textContent = msg; ui.toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 1400); }
function banner(msg, ms = 1400) { ui.banner.innerHTML = msg; ui.banner.classList.remove('hidden'); clearTimeout(bannerTimer); bannerTimer = setTimeout(() => ui.banner.classList.add('hidden'), ms); }
function setScore(s, best) { ui.score.textContent = s; ui.best.textContent = best; }
function setLives(n) { ui.lives.textContent = n > 0 ? '♥'.repeat(n) : ''; ui.lives.style.color = '#f87171'; }
function refreshBests() { $('best-snake').textContent = store.get('best-snake'); $('best-space').textContent = store.get('best-space'); }

// ------------------------------------------------------------------ modes
let mode = null;
const input = { dirQueue: [], left: false, right: false };

function setMode(next) {
  if (mode && mode.exit) mode.exit();
  particles.clear();
  mode = next;
  mode.enter();
}

// ---------- TITLE: turntable showcase
const Title = {
  group: new THREE.Group(),
  built: false,
  build() {
    const g = this.group;
    const ped = mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.4, 48), toon(0x1f2937), { outline: 0.02 });
    ped.position.y = -0.2;
    g.add(ped);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.04, 8, 64), new THREE.MeshBasicMaterial({ color: 0x8a9a3e }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.01;
    g.add(ring);
    this.ring = ring;
    const floor = mesh(new THREE.CircleGeometry(30, 48), new THREE.MeshStandardMaterial({ color: 0x0b0f14, roughness: 1 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.4;
    g.add(floor);
    // orbiting commit cubes
    this.orbit = new THREE.Group();
    for (let i = 0; i < 10; i++) {
      const c = mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), toon(GRID[1 + (i % 4)], { emissive: GRID[1 + (i % 4)], emissiveIntensity: 0.25 }));
      const a = (i / 10) * Math.PI * 2;
      c.position.set(Math.cos(a) * 2.6, 1.2 + Math.sin(a * 3) * 0.5, Math.sin(a) * 2.6);
      this.orbit.add(c);
    }
    g.add(this.orbit);
    this.built = true;
  },
  enter() {
    if (!this.built) this.build();
    scene.add(this.group);
    this.group.add(chirag);
    chirag.position.set(0, 0, 0);
    chirag.rotation.set(0, 0, 0);
    chirag.scale.setScalar(1);
    ui.hud.classList.add('hidden');
    ui.menu.classList.remove('hidden');
    ui.over.classList.add('hidden');
    ui.padSnake.classList.add('hidden');
    ui.padSpace.classList.add('hidden');
    refreshBests();
    this.t0 = clock.elapsedTime;
  },
  exit() { scene.remove(this.group); ui.menu.classList.add('hidden'); },
  update(dt, t) {
    const lt = t - this.t0;
    chirag.rotation.y = Math.sin(lt * 0.45) * Math.PI; // swings round so CHIRAG on the back shows
    const facingBack = Math.cos(chirag.rotation.y) < -0.6;
    (facingBack ? Pose.idle : (Math.sin(lt * 0.9) > 0.55 ? Pose.wave : Pose.idle))(chirag, t);
    this.orbit.rotation.y += dt * 0.5;
    this.orbit.children.forEach((c, i) => { c.rotation.x += dt * (1 + i * 0.1); c.rotation.y += dt; });
    this.ring.material.color.setHSL(0.2, 0.45, 0.4 + Math.sin(t * 3) * 0.1);
    const wide = camera.aspect > 1.2;
    this.group.position.x = wide ? -2.3 : 0;
    camera.position.set(0, 2.4, wide ? 8 : 10.5);
    camera.lookAt(0, wide ? 1.2 : -0.6, 0);
  },
};

// ---------- SNAKE RIDE
const Snake = {
  group: null,
  enter() {
    const portrait = camera.aspect < 0.9;
    this.W = portrait ? 13 : 22;
    this.H = portrait ? 19 : 14;
    this.group = new THREE.Group();
    this.cam = null;
    scene.add(this.group);
    this.buildBoard();
    this.segGeo = new THREE.BoxGeometry(0.84, 0.6, 0.84);
    this.segMats = [toon(0x39d353), toon(0x26a641)];
    this.segs = [];
    const cx = Math.floor(this.W / 2) - 3, cy = Math.floor(this.H / 2);
    this.body = [{ x: cx + 2, y: cy }, { x: cx + 1, y: cy }, { x: cx, y: cy }];
    this.prev = this.body.map(p => ({ ...p }));
    this.dir = { x: 1, y: 0 };
    input.dirQueue = [];
    this.stepTime = 0.17;
    this.acc = 0;
    this.score = 0;
    this.best = store.get('best-snake');
    this.dead = false;
    this.deathT = 0;
    // head = the commit snake's head with Chirag riding it
    this.head = new THREE.Group();
    const hm = mesh(new THREE.BoxGeometry(0.96, 0.7, 0.96), toon(0x39d353), { outline: 0.04 });
    hm.position.y = 0.35;
    this.head.add(hm);
    for (const s of [-1, 1]) {
      const e = mesh(new THREE.SphereGeometry(0.11, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), { shadow: false });
      e.position.set(0.24 * s, 0.5, 0.46);
      const p = mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0x0d1117 }), { shadow: false });
      p.position.z = 0.07;
      e.add(p);
      this.head.add(e);
    }
    this.group.add(this.head);
    this.head.add(chirag);
    chirag.position.set(0, 0.98, -0.05);
    chirag.rotation.set(0, 0, 0);
    chirag.scale.setScalar(0.58);
    // food
    this.food = new THREE.Group();
    const fc = mesh(new THREE.BoxGeometry(0.55, 0.55, 0.55), toon(0x39d353, { emissive: 0x39d353, emissiveIntensity: 0.6 }), { outline: 0.06 });
    this.food.add(fc);
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.55, 32), new THREE.MeshBasicMaterial({ color: 0x39d353, transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = -0.3;
    this.food.add(halo);
    this.foodCube = fc;
    this.group.add(this.food);
    this.golden = null;
    this.placeFood();
    ui.mode.textContent = 'SNAKE RIDE';
    ui.hud.classList.remove('hidden');
    ui.over.classList.add('hidden');
    if (isTouch) ui.padSnake.classList.remove('hidden');
    setScore(0, this.best);
    setLives(0);
    banner('READY?<br><small>eat the commits</small>', 1200);
    sfx.start();
  },
  exit() {
    chirag.removeFromParent();
    scene.remove(this.group);
    ui.padSnake.classList.add('hidden');
  },
  buildBoard() {
    const n = this.W * this.H;
    const geo = new THREE.BoxGeometry(0.9, 1, 0.9);
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 });
    const inst = new THREE.InstancedMesh(geo, mat, n);
    inst.receiveShadow = true;
    const m = new THREE.Matrix4(), col = new THREE.Color();
    let i = 0;
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
      const r = Math.random();
      const lvl = r < 0.45 ? 0 : r < 0.65 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4;
      const h = 0.14 + lvl * 0.035;
      const p = this.toWorld(x, y);
      m.makeScale(1, h, 1).setPosition(p.x, -h / 2, p.z);
      inst.setMatrixAt(i, m);
      inst.setColorAt(i, col.setHex(GRID[lvl]));
      i++;
    }
    this.group.add(inst);
    // border rails
    const railMat = toon(0x30363d);
    const w = this.W + 0.6, h = this.H + 0.6;
    [[w, 0.3, 0.3, 0, -h / 2], [w, 0.3, 0.3, 0, h / 2], [0.3, 0.3, h, -w / 2, 0], [0.3, 0.3, h, w / 2, 0]].forEach(([a, b, c, x, z]) => {
      const r = mesh(new THREE.BoxGeometry(a, b, c), railMat);
      r.position.set(x, 0.05, z);
      this.group.add(r);
    });
  },
  toWorld(x, y) { return { x: x - this.W / 2 + 0.5, z: y - this.H / 2 + 0.5 }; },
  freeCell() {
    for (let k = 0; k < 500; k++) {
      const c = { x: Math.floor(Math.random() * this.W), y: Math.floor(Math.random() * this.H) };
      if (!this.body.some(b => b.x === c.x && b.y === c.y) && !(this.foodPos && this.foodPos.x === c.x && this.foodPos.y === c.y)) return c;
    }
    return { x: 0, y: 0 };
  },
  placeFood() {
    this.foodPos = this.freeCell();
    const p = this.toWorld(this.foodPos.x, this.foodPos.y);
    this.food.position.set(p.x, 0.45, p.z);
    this.foodRepo = REPOS[Math.floor(Math.random() * REPOS.length)];
  },
  spawnGolden() {
    const g = new THREE.Group();
    const s = mesh(new THREE.OctahedronGeometry(0.4), toon(0xfacc15, { emissive: 0xfacc15, emissiveIntensity: 0.6 }), { outline: 0.06 });
    g.add(s);
    g.userData = { cell: this.freeCell(), ttl: 7 };
    const p = this.toWorld(g.userData.cell.x, g.userData.cell.y);
    g.position.set(p.x, 0.5, p.z);
    this.group.add(g);
    this.golden = g;
    toast('★ golden commit — worth 5!');
  },
  turn(d) {
    const last = input.dirQueue.length ? input.dirQueue[input.dirQueue.length - 1] : this.dir;
    if (d.x === -last.x && d.y === -last.y) return;
    if (d.x === last.x && d.y === last.y) return;
    if (input.dirQueue.length < 3) input.dirQueue.push(d);
  },
  step() {
    if (input.dirQueue.length) this.dir = input.dirQueue.shift();
    this.prev = this.body.map(p => ({ ...p }));
    const h = this.body[0];
    const nh = { x: h.x + this.dir.x, y: h.y + this.dir.y };
    const hitWall = nh.x < 0 || nh.y < 0 || nh.x >= this.W || nh.y >= this.H;
    const willEat = nh.x === this.foodPos.x && nh.y === this.foodPos.y;
    const bodyToCheck = willEat ? this.body : this.body.slice(0, -1);
    const hitSelf = bodyToCheck.some(b => b.x === nh.x && b.y === nh.y);
    if (hitWall || hitSelf) return this.die();
    this.body.unshift(nh);
    this.prev.unshift({ ...h });
    if (willEat) {
      this.score += 1;
      const p = this.toWorld(nh.x, nh.y);
      particles.burst(new THREE.Vector3(p.x, 0.6, p.z), 0x39d353, 16);
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
      particles.burst(this.golden.position.clone(), 0xfacc15, 24, 8);
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
    particles.burst(this.head.position.clone().add(new THREE.Vector3(0, 0.6, 0)), 0xf87171, 22, 7);
    // Chirag gets bonked off the snake
    const wp = new THREE.Vector3();
    chirag.getWorldPosition(wp);
    this.group.attach(chirag);
    this.fly = { v: new THREE.Vector3(-this.dir.x * 2.5, 7, -this.dir.y * 2.5) };
  },
  syncSegments(alpha) {
    while (this.segs.length < this.body.length - 1) {
      const s = mesh(this.segGeo, this.segMats[this.segs.length % 2], { outline: 0.04 });
      this.group.add(s);
      this.segs.push(s);
    }
    for (let i = 0; i < this.segs.length; i++) {
      const cur = this.body[i + 1], pre = this.prev[i + 1] || cur;
      if (!cur) { this.segs[i].visible = false; continue; }
      this.segs[i].visible = true;
      const a = this.toWorld(pre.x, pre.y), b = this.toWorld(cur.x, cur.y);
      const taper = 1 - Math.min(0.35, i * 0.012);
      this.segs[i].scale.set(taper, taper, taper);
      this.segs[i].position.set(a.x + (b.x - a.x) * alpha, 0.3 * taper, a.z + (b.z - a.z) * alpha);
    }
    const h = this.body[0], ph = this.prev[0] || h;
    const a = this.toWorld(ph.x, ph.y), b = this.toWorld(h.x, h.y);
    this.head.position.set(a.x + (b.x - a.x) * alpha, 0, a.z + (b.z - a.z) * alpha);
    const target = Math.atan2(this.dir.x, this.dir.y);
    let diff = target - this.head.rotation.y;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.head.rotation.y += diff * 0.35;
  },
  update(dt, t) {
    // follow-cam: close enough to see Chirag riding, loose enough to see the board
    const aspect = camera.aspect;
    const hx = this.head.position.x, hz = this.head.position.z;
    const d = aspect < 0.9 ? 15 : 11;
    this.cam = this.cam || new THREE.Vector3(hx * 0.6, d, hz * 0.6 + d * 0.75);
    this.cam.lerp(new THREE.Vector3(hx * 0.6, d, hz * 0.6 + d * 0.75), Math.min(1, dt * 3));
    camera.position.copy(this.cam);
    camera.lookAt(this.cam.x, 0, this.cam.z - d * 0.75);
    this.food.rotation.y += dt * 2;
    this.foodCube.rotation.x += dt * 1.3;
    this.food.position.y = 0.45 + Math.sin(t * 4) * 0.1;
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
      if (this.deathT > 1.1 && !this.overShown) { this.overShown = true; gameOver('snake', this.score); }
      return;
    }
    this.overShown = false;
    this.acc += dt;
    while (this.acc >= this.stepTime) { this.acc -= this.stepTime; this.step(); if (this.dead) return; }
    this.syncSegments(this.acc / this.stepTime);
    Pose.sit(chirag, t, Math.sin(t * 6) * 0.06);
    chirag.userData.arms[1].rotation.z = 2.4 + Math.sin(t * 10) * 0.25; // yee-haw
  },
  onKey(k) {
    const map = { ArrowUp: [0, -1], w: [0, -1], W: [0, -1], ArrowDown: [0, 1], s: [0, 1], S: [0, 1], ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], ArrowRight: [1, 0], d: [1, 0], D: [1, 0] };
    if (map[k]) this.turn({ x: map[k][0], y: map[k][1] });
  },
};

// ---------- SPACE DEFENDER
const Space = {
  enter() {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.score = 0;
    this.best = store.get('best-space');
    this.lives = 3;
    this.wave = 0;
    this.inv = 0;
    this.fireCd = 0;
    this.bugCd = 2;
    this.dead = false;
    this.deathT = 0;
    this.bullets = [];
    this.bugs = [];
    this.blocks = [];
    this.vx = 0;
    // floor grid that scrolls for speed
    const grid = new THREE.GridHelper(80, 40, 0x1f6f3b, 0x163322);
    grid.position.y = -2;
    this.grid = grid;
    this.group.add(grid);
    // streak stars
    const sg = new THREE.BufferGeometry();
    const sp = [];
    for (let i = 0; i < 400; i++) sp.push((Math.random() - 0.5) * 60, Math.random() * 20 - 1, -Math.random() * 90 + 15);
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.streaks = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0x9be7ff, size: 0.12 }));
    this.group.add(this.streaks);
    // the ship
    this.ship = this.makeShip();
    this.ship.position.set(0, 0, 8);
    this.group.add(this.ship);
    this.ship.add(chirag);
    chirag.position.set(0, 0.42, 0.15);
    chirag.rotation.set(0, Math.PI, 0); // facing away from the camera: CHIRAG on his back is visible
    chirag.scale.setScalar(0.5);
    this.bulletGeo = new THREE.BoxGeometry(0.08, 0.08, 0.7);
    this.bulletMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
    this.bugGeo = new THREE.OctahedronGeometry(0.28);
    this.bugMat = toon(0xf87171, { emissive: 0xf87171, emissiveIntensity: 0.5 });
    this.blockGeo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    this.blockMats = GRID.map(c => toon(c, { emissive: c, emissiveIntensity: 0.18 }));
    this.nextWave();
    ui.mode.textContent = 'SPACE DEFENDER';
    ui.hud.classList.remove('hidden');
    ui.over.classList.add('hidden');
    if (isTouch) ui.padSpace.classList.remove('hidden');
    setScore(0, this.best);
    setLives(this.lives);
    sfx.start();
  },
  exit() {
    chirag.removeFromParent();
    scene.remove(this.group);
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
    for (const k of [-1, 1]) {
      const wing = mesh(new THREE.BoxGeometry(1.5, 0.1, 0.8), toon(0x0284c7), { outline: 0.04 });
      wing.position.set(1.0 * k, -0.05, 0.25);
      wing.rotation.z = -0.12 * k;
      wing.rotation.y = 0.25 * k;
      s.add(wing);
      const gun = mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.7, 8), toon(0x94a3b8));
      gun.rotation.x = Math.PI / 2;
      gun.position.set(1.65 * k, 0, -0.05);
      s.add(gun);
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.7, 10), new THREE.MeshBasicMaterial({ color: 0xfb923c }));
      flame.rotation.x = Math.PI / 2;
      flame.position.set(0.32 * k, -0.05, 1.3);
      s.add(flame);
      (s.userData.flames ||= []).push(flame);
    }
    const seat = mesh(new THREE.CylinderGeometry(0.34, 0.38, 0.12, 20), toon(0x55621f));
    seat.position.set(0, 0.32, 0.15);
    s.add(seat);
    return s;
  },
  nextWave() {
    this.wave += 1;
    const rows = Math.min(3 + Math.floor(this.wave / 2), 6);
    const cols = camera.aspect < 0.9 ? 6 : 9;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const hp = Math.min(4, 1 + Math.floor(Math.random() * (1 + this.wave * 0.7)));
      const b = mesh(this.blockGeo, this.blockMats[hp], { outline: 0.05 });
      b.userData = { hp, col: c - (cols - 1) / 2, row: r };
      this.group.add(b);
      this.blocks.push(b);
    }
    this.formZ = -34;
    this.formT = 0;
    this.advance = 0.55 + this.wave * 0.12;
    banner(`WAVE ${this.wave}`, 1200);
  },
  fire() {
    for (const k of [-1, 1]) {
      const b = new THREE.Mesh(this.bulletGeo, this.bulletMat);
      b.position.set(this.ship.position.x + 1.65 * k, 0, this.ship.position.z - 0.4);
      this.group.add(b);
      this.bullets.push(b);
    }
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
    particles.burst(this.ship.position.clone(), 0xfb923c, 40, 10);
  },
  update(dt, t) {
    const portrait = camera.aspect < 0.9;
    camera.position.set(this.ship.position.x * 0.35, portrait ? 7.5 : 5.2, portrait ? 21 : 17.5);
    camera.lookAt(this.ship.position.x * 0.2, 0.6, -8);
    this.grid.position.z = (this.grid.position.z + dt * 12) % 2;
    const sp = this.streaks.geometry.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      let z = sp.getZ(i) + dt * 30;
      if (z > 16) z -= 90;
      sp.setZ(i, z);
    }
    sp.needsUpdate = true;
    this.ship.userData.flames.forEach(f => (f.scale.y = 0.8 + Math.random() * 0.5));

    if (this.dead) {
      this.deathT += dt;
      chirag.position.y += dt * 3;
      chirag.rotation.z += dt * 6;
      this.ship.visible = Math.sin(t * 30) > 0;
      if (this.deathT > 1.2 && !this.overShown) { this.overShown = true; gameOver('space', this.score); }
      return;
    }
    this.overShown = false;
    // movement
    const limit = portrait ? 5.5 : 9;
    const target = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    this.vx += (target * 14 - this.vx) * Math.min(1, dt * 8);
    this.ship.position.x = THREE.MathUtils.clamp(this.ship.position.x + this.vx * dt, -limit, limit);
    this.ship.rotation.z = -this.vx * 0.035;
    this.ship.position.y = Math.sin(t * 3) * 0.08;
    this.inv = Math.max(0, this.inv - dt);
    this.ship.visible = this.inv <= 0 || Math.sin(t * 40) > 0;
    Pose.sit(chirag, t, this.vx * 0.02);
    // auto-fire
    this.fireCd -= dt;
    if (this.fireCd <= 0) { this.fire(); this.fireCd = 0.2; }
    // formation
    this.formT += dt;
    this.formZ += this.advance * dt;
    const sway = Math.sin(this.formT * 0.9) * (portrait ? 1.2 : 2.5);
    for (const b of this.blocks) {
      const u = b.userData;
      b.position.set(u.col * 1.5 + sway, 0.2 + Math.sin(t * 2 + u.col) * 0.15, this.formZ + u.row * 1.5);
      b.rotation.y += dt * 0.6;
      if (b.position.z > this.ship.position.z - 1) { this.lives = 1; this.inv = 0; this.hurt(); return; }
    }
    // bullets
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const bl = this.bullets[i];
      bl.position.z -= 42 * dt;
      let hit = false;
      for (let j = this.blocks.length - 1; j >= 0 && !hit; j--) {
        const b = this.blocks[j];
        if (Math.abs(b.position.x - bl.position.x) < 0.6 && Math.abs(b.position.z - bl.position.z) < 0.6) {
          hit = true;
          b.userData.hp -= 1;
          if (b.userData.hp <= 0) {
            particles.burst(b.position.clone(), 0x39d353, 14, 6);
            this.group.remove(b);
            this.blocks.splice(j, 1);
            this.score += 10;
            sfx.boom();
          } else {
            b.material = this.blockMats[b.userData.hp];
            b.scale.setScalar(0.85);
            this.score += 1;
          }
          setScore(this.score, Math.max(this.best, this.score));
        }
      }
      if (hit || bl.position.z < -60) { this.group.remove(bl); this.bullets.splice(i, 1); }
    }
    this.blocks.forEach(b => b.scale.lerp(new THREE.Vector3(1, 1, 1), dt * 8));
    // bugs dropped by the grid
    this.bugCd -= dt;
    if (this.bugCd <= 0 && this.blocks.length) {
      const from = this.blocks[Math.floor(Math.random() * this.blocks.length)];
      const g = mesh(this.bugGeo, this.bugMat, { outline: 0.08 });
      g.position.copy(from.position);
      const dir = new THREE.Vector3(this.ship.position.x - from.position.x, 0, this.ship.position.z - from.position.z).normalize();
      g.userData.v = dir.multiplyScalar(9 + this.wave * 1.2);
      this.group.add(g);
      this.bugs.push(g);
      this.bugCd = Math.max(0.45, 1.6 - this.wave * 0.15);
    }
    for (let i = this.bugs.length - 1; i >= 0; i--) {
      const g = this.bugs[i];
      g.position.addScaledVector(g.userData.v, dt);
      g.rotation.x += dt * 6; g.rotation.y += dt * 4;
      if (g.position.distanceTo(this.ship.position) < 0.95) { this.hurt(); this.group.remove(g); this.bugs.splice(i, 1); continue; }
      if (g.position.z > 20) { this.group.remove(g); this.bugs.splice(i, 1); }
    }
    if (!this.blocks.length) {
      this.score += 50;
      setScore(this.score, Math.max(this.best, this.score));
      toast('+50 wave bonus · grid cleared');
      this.nextWave();
    }
  },
  onKey(k, down) {
    if (['ArrowLeft', 'a', 'A'].includes(k)) input.left = down;
    if (['ArrowRight', 'd', 'D'].includes(k)) input.right = down;
  },
};

// ------------------------------------------------------------------ flow
let lastMode = 'snake';
function start(name) {
  lastMode = name;
  audio.ensure();
  ui.menu.classList.add('hidden');
  setMode(name === 'space' ? Space : Snake);
}
function gameOver(name, score) {
  const key = 'best-' + name;
  const best = store.get(key);
  const isBest = score > best;
  if (isBest) store.set(key, score);
  sfx.over();
  $('over-title').textContent = isBest ? 'NEW HIGH SCORE!' : 'GAME OVER';
  $('over-score').textContent = score;
  $('over-best').textContent = isBest ? 'Chirag is proud of you.' : `best: ${Math.max(best, score)}`;
  ui.over.classList.remove('hidden');
}
function toMenu() { setMode(Title); }

document.querySelectorAll('.mode').forEach(b => b.addEventListener('click', () => start(b.dataset.mode)));
$('btn-retry').addEventListener('click', () => start(lastMode));
$('btn-menu').addEventListener('click', toMenu);
$('btn-pause').addEventListener('click', toMenu);
const muteBtn = $('btn-mute');
const renderMute = () => (muteBtn.textContent = audio.muted ? '🔇' : '🔊');
renderMute();
muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; store.set('muted', audio.muted); renderMute(); });

window.addEventListener('keydown', e => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
  if (e.key === 'Escape') return toMenu();
  if (e.key === 'm' || e.key === 'M') return muteBtn.click();
  if (e.key === 'Enter' && !ui.over.classList.contains('hidden')) return start(lastMode);
  if (mode && mode.onKey) mode.onKey(e.key, true);
});
window.addEventListener('keyup', e => { if (mode === Space) Space.onKey(e.key, false); });

// touch: swipe + pads
let touch0 = null;
canvas.addEventListener('touchstart', e => { touch0 = e.touches[0]; }, { passive: true });
canvas.addEventListener('touchend', e => {
  if (!touch0 || mode !== Snake) return;
  const t = e.changedTouches[0], dx = t.clientX - touch0.clientX, dy = t.clientY - touch0.clientY;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
  Snake.turn(Math.abs(dx) > Math.abs(dy) ? { x: Math.sign(dx), y: 0 } : { x: 0, y: Math.sign(dy) });
});
ui.padSnake.querySelectorAll('button').forEach(b => b.addEventListener('pointerdown', e => {
  e.preventDefault();
  const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[b.dataset.dir];
  Snake.turn({ x: d[0], y: d[1] });
}));
ui.padSpace.querySelectorAll('button').forEach(b => {
  const set = v => (input[b.dataset.hold] = v);
  b.addEventListener('pointerdown', e => { e.preventDefault(); set(true); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, () => set(false)));
});

// ------------------------------------------------------------------ loop
const clock = new THREE.Clock();
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

const deepLink = new URLSearchParams(location.search).get('mode');
if (deepLink === 'snake' || deepLink === 'space') start(deepLink);
else setMode(Title);
document.getElementById('loading').remove();

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  if (mode) mode.update(dt, t);
  particles.update(dt);
  renderer.render(scene, camera);
});
