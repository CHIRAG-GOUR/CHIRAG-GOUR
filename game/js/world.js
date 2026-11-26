// World kit: skies, floating islands, foliage, lights, weather and space props.
// Everything is procedural (no downloaded models/textures) and low-poly so it runs on phones.
import * as THREE from 'three';
import { std, glow, mesh, dotTexture, rng, fbm2 } from './core.js';

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ------------------------------------------------------------------ sky dome (gradient + twinkling stars + optional nebula)
export function skyDome({ top, mid, bottom, stars = 1, nebula = 0, nebA = 0x7c3aed, nebB = 0x0ea5e9, radius = 450 }) {
  const uniforms = {
    top: { value: new THREE.Color(top) }, mid: { value: new THREE.Color(mid) }, bottom: { value: new THREE.Color(bottom) },
    nebA: { value: new THREE.Color(nebA) }, nebB: { value: new THREE.Color(nebB) },
    stars: { value: stars }, nebula: { value: nebula }, time: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform vec3 top, mid, bottom, nebA, nebB; uniform float stars, nebula, time; varying vec3 vDir;
      float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
      float fbm(vec3 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a * n3(p); p *= 2.03; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 col = h > 0.0 ? mix(mid, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(mid, bottom, pow(clamp(-h, 0.0, 1.0), 0.45));
        if (nebula > 0.0) {
          float a = fbm(d * 2.6 + vec3(0.0, time * 0.004, 0.0)), b = fbm(d * 4.5 - 7.3);
          col += nebula * (nebA * smoothstep(0.48, 0.85, a) * 0.9 + nebB * smoothstep(0.52, 0.9, b) * 0.7);
        }
        vec3 sp = d * 260.0; vec3 cell = floor(sp); float r = h3(cell);
        float dist = length(fract(sp) - 0.5);
        float star = step(0.982, r) * smoothstep(0.32, 0.0, dist) * (0.55 + 0.45 * sin(time * (1.5 + r * 3.0) + r * 60.0));
        col += stars * star * vec3(1.0, 0.95, 0.9) * 1.6 * smoothstep(-0.05, 0.25, h);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), mat);
  m.frustumCulled = false;
  return { object: m, update: (t) => (uniforms.time.value = t) };
}

// ------------------------------------------------------------------ floating island with a flat stage in the middle
export function floatingIsland({ radius = 26, flat = 6, flatShape = null, seed = 3, hills = 2.4,
  grassA = 0x2f7d3a, grassB = 0x56a83f, dirt = 0x6b4a2f, rock = 0x4b4256, depth = 16 } = {}) {
  const group = new THREE.Group();
  const isFlat = flatShape || ((x, z) => Math.hypot(x, z) < flat);
  const heightAt = (x, z) => {
    const r = Math.hypot(x, z);
    if (isFlat(x, z)) return 0;
    const bump = (fbm2(x * 0.07 + seed, z * 0.07 - seed) - 0.42) * hills;
    const toFlat = flatShape ? 1 : smooth(flat, flat + 5, r);
    return Math.max(-0.2, bump) * toFlat - smooth(radius - 3, radius, r) * 0.7;
  };
  const geo = new THREE.RingGeometry(0.01, radius, 120, 48);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, colors = [];
  const cA = new THREE.Color(grassA), cB = new THREE.Color(grassB), cD = new THREE.Color(dirt), tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, heightAt(x, z));
    const n = fbm2(x * 0.18 + 11, z * 0.18 - 5);
    tmp.copy(cA).lerp(cB, n);
    const edge = smooth(radius - 4, radius, Math.hypot(x, z));
    tmp.lerp(cD, edge * 0.8);
    colors.push(tmp.r, tmp.g, tmp.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const ground = mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }), { shadow: false, receive: true });
  group.add(ground);

  // rocky underside, slightly jagged
  const under = new THREE.ConeGeometry(radius + 0.1, depth, 40, 6, true);
  under.rotateX(Math.PI);
  const up = under.attributes.position, uc = [];
  const r0 = new THREE.Color(dirt), r1 = new THREE.Color(rock);
  for (let i = 0; i < up.count; i++) {
    const x = up.getX(i), y = up.getY(i), z = up.getZ(i);
    const k = 1 + (fbm2(x * 0.3, z * 0.3 + y * 0.2) - 0.5) * 0.22 * (1 - (y + depth / 2) / depth * 0.2);
    if (y < depth / 2 - 0.01) { up.setX(i, x * k); up.setZ(i, z * k); }
    tmp.copy(r0).lerp(r1, 1 - (y + depth / 2) / depth);
    uc.push(tmp.r, tmp.g, tmp.b);
  }
  under.setAttribute('color', new THREE.Float32BufferAttribute(uc, 3));
  under.computeVertexNormals();
  const underside = mesh(under, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }), { shadow: false });
  underside.position.y = -0.7 - depth / 2;
  group.add(underside);

  // little rocks floating beside the island
  const r = rng(seed * 31);
  const floatRocks = [];
  for (let i = 0; i < 7; i++) {
    const s = 0.6 + r() * 1.6;
    const fr = mesh(new THREE.DodecahedronGeometry(s, 0), std(rock, { flatShading: true }), { shadow: false });
    const a = r() * Math.PI * 2, d = radius + 4 + r() * 10;
    fr.position.set(Math.cos(a) * d, -3 - r() * 8, Math.sin(a) * d);
    fr.userData = { base: fr.position.y, ph: r() * 6 };
    group.add(fr);
    floatRocks.push(fr);
  }
  const update = (t) => floatRocks.forEach(f => { f.position.y = f.userData.base + Math.sin(t * 0.6 + f.userData.ph) * 0.5; f.rotation.y = t * 0.1 + f.userData.ph; });
  return { group, heightAt, update };
}

// ------------------------------------------------------------------ foliage & props
const trunkGeo = new THREE.CylinderGeometry(0.13, 0.2, 1, 6);
const coneGeo = new THREE.ConeGeometry(1, 1.4, 7);
const blobGeo = new THREE.IcosahedronGeometry(1, 0);

export function pineTree(colors = [0x1f5f46, 0x2a7a55, 0x3a9466]) {
  const g = new THREE.Group();
  const trunk = mesh(trunkGeo, std(0x5a3d2b, { flatShading: true }));
  trunk.scale.set(1, 1.2, 1);
  trunk.position.y = 0.6;
  g.add(trunk);
  [[1.1, 1.3], [0.85, 2.0], [0.6, 2.65]].forEach(([s, y], i) => {
    const c = mesh(coneGeo, std(colors[i % colors.length], { flatShading: true }));
    c.scale.set(s, s, s);
    c.position.y = y;
    g.add(c);
  });
  return g;
}

export function roundTree(colors = [0x3f8f3a, 0x56a83f, 0x2f7d3a]) {
  const g = new THREE.Group();
  const trunk = mesh(trunkGeo, std(0x6b4a2f, { flatShading: true }));
  trunk.scale.set(1.1, 1.6, 1.1);
  trunk.position.y = 0.8;
  g.add(trunk);
  [[0, 2.1, 0, 1.05], [0.6, 1.75, 0.2, 0.7], [-0.5, 1.8, -0.3, 0.75]].forEach(([x, y, z, s], i) => {
    const b = mesh(blobGeo, std(colors[i % colors.length], { flatShading: true }));
    b.position.set(x, y, z);
    b.scale.setScalar(s);
    g.add(b);
  });
  return g;
}

export function mushroom(cap = 0xef4444) {
  const g = new THREE.Group();
  const stem = mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.4, 8), std(0xf8f1e4));
  stem.position.y = 0.2;
  g.add(stem);
  const top = mesh(new THREE.SphereGeometry(0.3, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), std(cap, { emissive: cap, emissiveIntensity: 0.15 }));
  top.position.y = 0.38;
  g.add(top);
  for (let i = 0; i < 4; i++) {
    const dot = mesh(new THREE.SphereGeometry(0.045, 6, 4), std(0xffffff), { shadow: false });
    const a = i * 1.7;
    dot.position.set(Math.cos(a) * 0.17, 0.6 - (i % 2) * 0.05, Math.sin(a) * 0.17);
    g.add(dot);
  }
  return g;
}

export function rock(color = 0x6b6478, s = 1) {
  const r = mesh(new THREE.DodecahedronGeometry(0.5 * s, 0), std(color, { flatShading: true }));
  r.scale.set(1, 0.65, 1);
  return r;
}

export function lantern(color = 0xffc46b) {
  const g = new THREE.Group();
  const post = mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.6, 6), std(0x2b2233));
  post.position.y = 0.8;
  g.add(post);
  const arm = mesh(new THREE.BoxGeometry(0.5, 0.05, 0.05), std(0x2b2233));
  arm.position.set(0.22, 1.55, 0);
  g.add(arm);
  const lamp = mesh(new THREE.SphereGeometry(0.16, 12, 8), glow(color, 3.2), { shadow: false });
  lamp.position.set(0.44, 1.38, 0);
  g.add(lamp);
  const cap = mesh(new THREE.ConeGeometry(0.2, 0.15, 6), std(0x2b2233));
  cap.position.set(0.44, 1.55, 0);
  g.add(cap);
  return g;
}

/** Scatter props across an island ring, skipping a keep-out zone. */
export function scatter(island, makeFn, { count = 20, rMin = 8, rMax = 24, seed = 5, scale = [0.8, 1.4], avoid = () => false } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  let placed = 0, tries = 0;
  while (placed < count && tries++ < count * 30) {
    const a = r() * Math.PI * 2, d = rMin + r() * (rMax - rMin);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (avoid(x, z)) continue;
    const o = makeFn(r);
    o.position.set(x, island.heightAt(x, z) - 0.05, z);
    o.rotation.y = r() * Math.PI * 2;
    o.scale.multiplyScalar(scale[0] + r() * (scale[1] - scale[0]));
    g.add(o);
    placed++;
  }
  return g;
}

/** Instanced grass tufts + flowers (cheap ground detail). */
export function meadow(island, { count = 400, rMin = 6, rMax = 25, seed = 9, avoid = () => false, flowers = [0xf472b6, 0xfacc15, 0xffffff, 0x93c5fd] } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  const tuft = new THREE.InstancedMesh(new THREE.ConeGeometry(0.07, 0.35, 4), std(0x5fb84a, { flatShading: true }), count);
  const bloom = new THREE.InstancedMesh(new THREE.SphereGeometry(0.08, 6, 4), new THREE.MeshStandardMaterial({ roughness: 0.6, emissiveIntensity: 0.4 }), Math.floor(count / 3));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
  let ti = 0, fi = 0;
  for (let i = 0; i < count * 3 && (ti < count || fi < bloom.count); i++) {
    const a = r() * Math.PI * 2, d = rMin + Math.sqrt(r()) * (rMax - rMin);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (avoid(x, z)) continue;
    const y = island.heightAt(x, z);
    if (ti < count) {
      q.setFromEuler(new THREE.Euler((r() - 0.5) * 0.4, r() * 6, (r() - 0.5) * 0.4));
      s.setScalar(0.7 + r() * 0.8);
      tuft.setMatrixAt(ti++, m.compose(p.set(x, y + 0.12, z), q, s));
    } else if (fi < bloom.count) {
      bloom.setMatrixAt(fi, m.compose(p.set(x, y + 0.22, z), q.identity(), s.setScalar(0.8 + r() * 0.6)));
      bloom.setColorAt(fi++, c.setHex(flowers[Math.floor(r() * flowers.length)]));
    }
  }
  tuft.count = ti;
  bloom.count = fi;
  g.add(tuft, bloom);
  return g;
}

// ------------------------------------------------------------------ fireflies (GPU-animated, they bloom)
export function fireflies({ count = 120, rMin = 4, rMax = 26, yMin = 0.5, yMax = 6, color = 0xffd166, size = 0.5, seed = 2 } = {}) {
  const r = rng(seed), pos = [], ph = [];
  for (let i = 0; i < count; i++) {
    const a = r() * Math.PI * 2, d = rMin + r() * (rMax - rMin);
    pos.push(Math.cos(a) * d, yMin + r() * (yMax - yMin), Math.sin(a) * d);
    ph.push(r() * 100);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('phase', new THREE.Float32BufferAttribute(ph, 1));
  const uniforms = { time: { value: 0 }, color: { value: new THREE.Color(color) }, map: { value: dotTexture }, size: { value: size } };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float phase; uniform float time, size; varying float vA;
      void main(){ vec3 p = position; p.x += sin(time * 0.6 + phase) * 0.8; p.y += sin(time * 0.9 + phase * 2.0) * 0.5; p.z += cos(time * 0.5 + phase) * 0.8;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = size * (300.0 / -mv.z); gl_Position = projectionMatrix * mv;
        vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(time * 2.5 + phase * 5.0)); }`,
    fragmentShader: `uniform vec3 color; uniform sampler2D map; varying float vA;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(color * 3.0, t.a * vA); }`,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  return { object: pts, update: (t) => (uniforms.time.value = t) };
}

// ------------------------------------------------------------------ clouds drifting around (and below) the island
export function clouds({ count = 12, rMin = 30, rMax = 70, yMin = -14, yMax = 10, color = 0xf5d0fe, opacity = 0.9, seed = 4 } = {}) {
  const group = new THREE.Group();
  const r = rng(seed);
  const mat = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 1, transparent: true, opacity, emissive: color, emissiveIntensity: 0.08 });
  const geo = new THREE.IcosahedronGeometry(1, 1);
  for (let i = 0; i < count; i++) {
    const c = new THREE.Group();
    const puffs = 4 + Math.floor(r() * 4);
    for (let k = 0; k < puffs; k++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.set((k - puffs / 2) * 1.6 + r(), r() * 1.2, (r() - 0.5) * 2);
      p.scale.setScalar(1.4 + r() * 1.6);
      c.add(p);
    }
    const a = r() * Math.PI * 2, d = rMin + r() * (rMax - rMin);
    c.position.set(Math.cos(a) * d, yMin + r() * (yMax - yMin), Math.sin(a) * d);
    c.scale.setScalar(1 + r() * 1.5);
    c.userData = { a, d, speed: 0.01 + r() * 0.02 };
    group.add(c);
  }
  const update = (t) => group.children.forEach(c => {
    const a = c.userData.a + t * c.userData.speed;
    c.position.x = Math.cos(a) * c.userData.d;
    c.position.z = Math.sin(a) * c.userData.d;
  });
  return { object: group, update };
}

// distant mountain silhouettes
export function mountains({ count = 26, rMin = 110, rMax = 170, color = 0x2b2350, seed = 8 } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  for (let i = 0; i < count; i++) {
    const h = 25 + r() * 45, w = 18 + r() * 26;
    const m = new THREE.Mesh(new THREE.ConeGeometry(w, h, 5), std(color, { flatShading: true }));
    const a = (i / count) * Math.PI * 2 + r() * 0.2, d = rMin + r() * (rMax - rMin);
    m.position.set(Math.cos(a) * d, h / 2 - 18, Math.sin(a) * d);
    m.rotation.y = r() * 3;
    g.add(m);
  }
  return g;
}

export function glowSprite(color, size) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTexture, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  s.scale.setScalar(size);
  return s;
}

export function moon({ color = 0xfff1d6, radius = 7 } = {}) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(radius, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.15), fog: false }));
  g.add(body);
  const halo = glowSprite(0xffd9a0, radius * 4.2);
  halo.material.opacity = 0.55;
  g.add(halo);
  return g;
}

// animated pond
export function pond(radius = 3) {
  const uniforms = { time: { value: 0 } };
  const m = new THREE.Mesh(new THREE.CircleGeometry(radius, 40), new THREE.ShaderMaterial({
    uniforms, transparent: true,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform float time; varying vec2 vUv;
      void main(){ vec2 p = vUv * 10.0; float w = sin(p.x * 1.3 + time * 1.2) * sin(p.y * 1.1 - time * 0.9) * 0.5 + 0.5;
        vec3 c = mix(vec3(0.02, 0.12, 0.2), vec3(0.08, 0.38, 0.5), w);
        float r = length(vUv - 0.5) * 2.0; c = mix(c, vec3(0.3, 0.6, 0.55), smoothstep(0.85, 1.0, r));
        float sp = step(0.992, fract(sin(dot(floor(p * 4.0), vec2(12.9898, 78.233)) + floor(time * 2.0)) * 43758.5453));
        gl_FragColor = vec4(c + sp * 0.9, 0.92); }`,
  }));
  m.rotation.x = -Math.PI / 2;
  return { object: m, update: (t) => (uniforms.time.value = t) };
}

// ------------------------------------------------------------------ space props
function bandTexture(colors, seed = 1) {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 256;
  const g = c.getContext('2d');
  const r = rng(seed);
  for (let y = 0; y < 256; y += 4 + Math.floor(r() * 10)) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    g.fillRect(0, y, 16, 14);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function ringedPlanet({ radius = 22, colors = ['#7c3aed', '#a78bfa', '#c4b5fd', '#6d28d9', '#f0abfc'], ring = 0xe9d5ff, seed = 3 } = {}) {
  const g = new THREE.Group();
  const planet = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), new THREE.MeshStandardMaterial({ map: bandTexture(colors, seed), roughness: 0.9, emissive: 0x2e1065, emissiveIntensity: 0.25, fog: false }));
  g.add(planet);
  const rc = document.createElement('canvas');
  rc.width = rc.height = 256;
  const rg = rc.getContext('2d');
  const grad = rg.createRadialGradient(128, 128, 128 * 0.62, 128, 128, 128);
  ['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.35)', 'rgba(255,255,255,0)']
    .forEach((s, i, a) => grad.addColorStop(i / (a.length - 1), s));
  rg.fillStyle = grad;
  rg.fillRect(0, 0, 256, 256);
  const rt = new THREE.CanvasTexture(rc);
  const ringMesh = new THREE.Mesh(new THREE.RingGeometry(radius * 1.35, radius * 2.3, 96), new THREE.MeshBasicMaterial({ map: rt, color: ring, transparent: true, side: THREE.DoubleSide, depthWrite: false, fog: false }));
  ringMesh.rotation.x = Math.PI / 2.4;
  g.add(ringMesh);
  g.rotation.z = 0.35;
  return g;
}

export function asteroidField({ count = 110, xMin = 14, xMax = 46, yMin = -8, yMax = 16, zMin = -140, zMax = 25, seed = 6 } = {}) {
  const r = rng(seed);
  const inst = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), std(0x6b5b73, { flatShading: true, roughness: 1 }), count);
  inst.castShadow = false;
  const items = [];
  for (let i = 0; i < count; i++) {
    const side = r() < 0.5 ? -1 : 1;
    items.push({
      x: side * (xMin + r() * (xMax - xMin)), y: yMin + r() * (yMax - yMin), z: zMin + r() * (zMax - zMin),
      s: 0.4 + r() * r() * 3.2, rx: r() * 6, ry: r() * 6, spin: (r() - 0.5) * 1.2,
    });
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3();
  const update = (t, dt, speed = 10) => {
    items.forEach((a, i) => {
      a.z += dt * speed;
      if (a.z > zMax) a.z = zMin;
      e.set(a.rx + t * a.spin, a.ry + t * a.spin * 0.7, 0);
      inst.setMatrixAt(i, m.compose(p.set(a.x, a.y, a.z), q.setFromEuler(e), s.setScalar(a.s)));
    });
    inst.instanceMatrix.needsUpdate = true;
  };
  update(0, 0);
  return { object: inst, update };
}

/** Bundle helper: add many world parts and update them together. */
export function worldBundle() {
  const group = new THREE.Group();
  const updaters = [];
  return {
    group,
    add(part) {
      if (part && part.object) { group.add(part.object); if (part.update) updaters.push(part.update); }
      else if (part && part.group) { group.add(part.group); if (part.update) updaters.push(part.update); }
      else if (part) group.add(part);
      return part;
    },
    update(t, dt) { updaters.forEach(u => u(t, dt)); },
  };
}
