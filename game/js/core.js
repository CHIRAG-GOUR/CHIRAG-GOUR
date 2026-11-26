// Shared engine: renderer + bloom, lights, toon materials, sound, particles, HUD helpers.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export const isTouch = matchMedia('(pointer: coarse)').matches;
export const LOW = isTouch || (navigator.deviceMemory || 8) < 4;

// ------------------------------------------------------------------ renderer
export const canvas = document.getElementById('c');
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, LOW ? 1.5 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 600);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
export const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.7, 0.45, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

export function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  bloom.resolution.set(w / 2, h / 2);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
export const render = () => composer.render();

// ------------------------------------------------------------------ lights (each world re-tunes them)
export const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x2a2440, 1.2);
export const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.castShadow = true;
sun.shadow.mapSize.set(LOW ? 1024 : 2048, LOW ? 1024 : 2048);
sun.shadow.bias = -0.0008;
sun.shadow.normalBias = 0.05;
export const rim = new THREE.DirectionalLight(0x38bdf8, 0.8);
scene.add(hemi, sun, sun.target, rim);

export function setLights({ sky = 0xcfe8ff, ground = 0x2a2440, hemiI = 1.2, sunColor = 0xffffff, sunI = 2.2,
  sunPos = [10, 18, 8], rimColor = 0x38bdf8, rimI = 0.8, rimPos = [-8, 6, -12], box = 20, exposure = 1.05, bloomStrength = 0.7 } = {}) {
  hemi.color.setHex(sky); hemi.groundColor.setHex(ground); hemi.intensity = hemiI;
  sun.color.setHex(sunColor); sun.intensity = sunI; sun.position.set(...sunPos); sun.target.position.set(0, 0, 0);
  Object.assign(sun.shadow.camera, { left: -box, right: box, top: box, bottom: -box, near: 1, far: box * 4 });
  sun.shadow.camera.updateProjectionMatrix();
  rim.color.setHex(rimColor); rim.intensity = rimI; rim.position.set(...rimPos);
  renderer.toneMappingExposure = exposure;
  bloom.strength = bloomStrength;
}

// ------------------------------------------------------------------ materials
const gradTex = new THREE.DataTexture(new Uint8Array([90, 175, 255]), 3, 1, THREE.RedFormat);
gradTex.minFilter = gradTex.magFilter = THREE.NearestFilter;
gradTex.needsUpdate = true;
export const toon = (color, extra = {}) => new THREE.MeshToonMaterial({ color, gradientMap: gradTex, ...extra });
export const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...extra });
export const glow = (color, intensity = 2) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4 });
const outlineMat = new THREE.MeshBasicMaterial({ color: 0x07090d, side: THREE.BackSide });

export function mesh(geo, mat, { shadow = true, receive = shadow, outline = 0 } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = receive;
  if (outline) {
    const o = new THREE.Mesh(geo, outlineMat);
    o.scale.setScalar(1 + outline);
    m.add(o);
  }
  return m;
}

// soft round sprite texture for glows, fireflies, particles
export const dotTexture = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)');
  r.addColorStop(0.35, 'rgba(255,255,255,0.6)');
  r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

// ------------------------------------------------------------------ deterministic random + value noise
export function rng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
export function noise2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export const fbm2 = (x, y) => noise2(x, y) * 0.55 + noise2(x * 2.1, y * 2.1) * 0.3 + noise2(x * 4.3, y * 4.3) * 0.15;

// ------------------------------------------------------------------ storage (never throws)
export const store = {
  get(k, d = 0) { try { const v = localStorage.getItem('chirag-game:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('chirag-game:' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

// ------------------------------------------------------------------ live repo names (for flavour text)
let repos = ['Podcast-Tool-New', 'SaltyRevamp', 'Eat-Better-Internship', 'ZeePrep-MobileApp', 'Olympiad-Activities', 'Mangalyan-India', 'SolarSystem3js'];
fetch('data.json').then(r => (r.ok ? r.json() : null)).then(d => {
  const names = d && Array.isArray(d.all_projects) ? d.all_projects.map(p => p.name).filter(n => n && n !== 'CHIRAG-GOUR') : null;
  if (names && names.length) repos = names;
}).catch(() => {});
export const randomRepo = () => repos[Math.floor(Math.random() * repos.length)];

// ------------------------------------------------------------------ audio (tiny synth)
export const audio = {
  ctx: null,
  muted: store.get('muted', false),
  ensure() { if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { this.ctx = null; } } },
  beep(freq = 440, dur = 0.08, type = 'square', vol = 0.05, slide = 0) {
    if (this.muted) return;
    this.ensure();
    const ctx = this.ctx;
    if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), ctx.currentTime + dur);
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + dur);
  },
};
const seq = (notes, gap, type = 'square', vol = 0.04, dur = 0.1) => notes.forEach((f, i) => setTimeout(() => audio.beep(f, dur, type, vol), i * gap));
export const sfx = {
  eat: () => seq([660, 990], 55, 'square', 0.05, 0.08),
  shoot: () => audio.beep(880, 0.05, 'square', 0.018, -500),
  boom: () => audio.beep(180, 0.25, 'sawtooth', 0.05, -140),
  hurt: () => audio.beep(220, 0.3, 'triangle', 0.08, -160),
  over: () => seq([523, 392, 330, 262], 160, 'triangle', 0.07, 0.18),
  start: () => seq([262, 330, 392, 523], 90),
  dice: () => seq([300, 360, 320, 380, 340], 60, 'triangle', 0.03, 0.05),
  hop: () => audio.beep(520, 0.05, 'sine', 0.04, 140),
  ladder: () => seq([392, 494, 587, 784], 90, 'square', 0.04),
  snake: () => audio.beep(700, 0.6, 'sawtooth', 0.04, -520),
  win: () => seq([523, 659, 784, 1047, 784, 1047], 110, 'square', 0.05, 0.14),
};

// ------------------------------------------------------------------ particles (bright → they bloom)
export const particles = (() => {
  const geo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
  const pool = [];
  const group = new THREE.Group();
  scene.add(group);
  return {
    burst(pos, color, n = 14, speed = 6, gravity = 14) {
      for (let i = 0; i < n; i++) {
        let p = pool.find(q => !q.visible);
        if (!p) { p = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color })); group.add(p); pool.push(p); }
        p.material.color.setHex(color).multiplyScalar(2.2);
        p.visible = true;
        p.position.copy(pos);
        p.userData.v = new THREE.Vector3((Math.random() - 0.5) * speed, Math.random() * speed, (Math.random() - 0.5) * speed);
        p.userData.g = gravity;
        p.userData.life = 0.6 + Math.random() * 0.5;
      }
    },
    update(dt) {
      for (const p of pool) {
        if (!p.visible) continue;
        p.userData.life -= dt;
        if (p.userData.life <= 0) { p.visible = false; continue; }
        p.userData.v.y -= p.userData.g * dt;
        p.position.addScaledVector(p.userData.v, dt);
        p.rotation.x += dt * 8;
        p.rotation.y += dt * 6;
        p.scale.setScalar(Math.max(0.05, p.userData.life));
      }
    },
    clear() { pool.forEach(p => (p.visible = false)); },
  };
})();

// ------------------------------------------------------------------ HUD helpers
export const $ = id => document.getElementById(id);
export const ui = {
  hud: $('hud'), menu: $('menu'), over: $('over'), banner: $('banner'), toast: $('toast'),
  score: $('hud-score'), best: $('hud-best'), lives: $('hud-lives'), mode: $('hud-mode'),
  scoreLbl: $('hud-score-lbl'), bestLbl: $('hud-best-lbl'),
  padSnake: $('pad-snake'), padSpace: $('pad-space'), ladders: $('ladders-ui'),
};
let toastTimer = 0, bannerTimer = 0;
export function toast(msg, ms = 1500) {
  ui.toast.textContent = msg;
  ui.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('show'), ms);
}
export function banner(msg, ms = 1400) {
  ui.banner.innerHTML = msg;
  ui.banner.classList.remove('hidden');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => ui.banner.classList.add('hidden'), ms);
}
export function setHud({ mode, scoreLabel = 'SCORE', bestLabel = 'BEST', score = 0, best = 0, lives = 0 }) {
  ui.hud.classList.remove('hidden');
  ui.mode.textContent = mode;
  ui.scoreLbl.textContent = scoreLabel;
  ui.bestLbl.textContent = bestLabel;
  setScore(score, best);
  setLives(lives);
}
export function setScore(s, best) { ui.score.textContent = s; ui.best.textContent = best; }
export function setLives(n) { ui.lives.textContent = n > 0 ? '♥'.repeat(n) : ''; }

// shared input state (main.js wires the listeners)
export const input = { dirQueue: [], left: false, right: false };

export const clock = new THREE.Clock();
