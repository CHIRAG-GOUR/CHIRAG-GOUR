// SNAKES & LADDERS — race 3D Chirag to 100 in a lantern-lit night garden.
// House rule: Chirag always wins — see ../ladders-rules.js for the (lovingly) loaded dice.
import * as THREE from 'three';
import { scene, camera, setLights, mesh, std, glow, toon, particles, sfx, store, ui, $, banner, toast, setHud, setScore } from '../core.js';
import { chirag, Pose, makeCharacter, VISITOR } from '../character.js';
import * as W from '../world.js';
import { LADDERS, SNAKES, resolve, pickYourRoll, pickChiragRoll } from '../ladders-rules.js';

const T = 1.1; // tile size
const SNAKE_COLORS = [0xef4444, 0xf97316, 0xa855f7, 0x22c55e, 0x0ea5e9, 0xec4899, 0xeab308, 0x14b8a6];
const TAUNTS = [
  'loaded dice? me? never 😇',
  'home-field advantage: it\'s literally my README',
  'the snakes and I go way back 🐍',
  'git push --force my-way-to-100',
  'GG! (Good Game, Good Gour)',
];

const pick = (a) => a[Math.floor(Math.random() * a.length)];

function tileXZ(n) {
  const i = n - 1, row = Math.floor(i / 10), col = row % 2 === 0 ? i % 10 : 9 - (i % 10);
  return new THREE.Vector3((col - 4.5) * T, 0, (4.5 - row) * T);
}

function boardTexture() {
  const S = 1024, cw = S / 10;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const palette = ['#fde68a', '#a7f3d0', '#fbcfe8', '#bae6fd', '#fed7aa', '#ddd6fe'];
  for (let n = 1; n <= 100; n++) {
    const i = n - 1, row = Math.floor(i / 10), col = row % 2 === 0 ? i % 10 : 9 - (i % 10);
    const x = col * cw, y = (9 - row) * cw;
    g.fillStyle = palette[(row + col) % palette.length];
    g.fillRect(x, y, cw, cw);
    g.strokeStyle = 'rgba(30,20,50,0.35)';
    g.lineWidth = 3;
    g.strokeRect(x + 1.5, y + 1.5, cw - 3, cw - 3);
    g.fillStyle = 'rgba(30,20,50,0.85)';
    g.font = `900 ${n === 100 ? 30 : 34}px "Arial Black", system-ui, sans-serif`;
    g.textAlign = 'left';
    g.textBaseline = 'top';
    g.fillText(String(n), x + 10, y + 8);
    if (n === 1) { g.font = '900 20px system-ui'; g.fillText('START', x + 12, y + 66); }
    if (n === 100) { g.font = '56px system-ui'; g.textAlign = 'center'; g.fillText('🏆', x + cw / 2, y + 38); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function stripeTexture(color) {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 16;
  const g = c.getContext('2d');
  const base = '#' + new THREE.Color(color).getHexString();
  g.fillStyle = base;
  g.fillRect(0, 0, 128, 16);
  g.fillStyle = 'rgba(255,255,255,0.55)';
  for (let x = 0; x < 128; x += 32) g.fillRect(x, 0, 12, 16);
  g.fillStyle = 'rgba(0,0,0,0.2)';
  for (let x = 16; x < 128; x += 32) g.fillRect(x, 0, 4, 16);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(10, 1);
  return t;
}

function makeSnake(from, to, color, seed) {
  const a = tileXZ(from), b = tileXZ(to);
  const dir = b.clone().sub(a), len = dir.length();
  const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  const pts = [];
  const n = 7;
  for (let i = 0; i <= n; i++) {
    const k = i / n;
    const p = a.clone().lerp(b, k).addScaledVector(side, Math.sin(k * Math.PI * 2.2 + seed) * Math.min(0.65, len * 0.12) * (1 - k * 0.3));
    p.y = 0.16 + Math.sin(k * Math.PI) * 0.12;
    pts.push(p);
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const g = new THREE.Group();
  const body = mesh(new THREE.TubeGeometry(curve, 90, 0.13, 10, false), new THREE.MeshStandardMaterial({ map: stripeTexture(color), roughness: 0.55 }));
  g.add(body);
  const head = mesh(new THREE.SphereGeometry(0.24, 16, 12), toon(color), { outline: 0.05 });
  head.scale.set(1, 0.75, 1.25);
  head.position.copy(pts[0]).setY(0.26);
  head.lookAt(pts[0].clone().sub(pts[1]).add(head.position));
  g.add(head);
  for (const sx of [-1, 1]) {
    const e = mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), { shadow: false });
    e.position.set(0.11 * sx, 0.1, 0.13);
    const p = mesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: 0x111111 }), { shadow: false });
    p.position.z = 0.045;
    e.add(p);
    head.add(e);
  }
  const tongue = mesh(new THREE.BoxGeometry(0.03, 0.015, 0.18), toon(0xdc2626), { shadow: false });
  tongue.position.set(0, -0.04, 0.3);
  head.add(tongue);
  const tail = mesh(new THREE.ConeGeometry(0.12, 0.35, 8), std(color));
  tail.position.copy(pts[n]);
  tail.lookAt(pts[n].clone().add(pts[n].clone().sub(pts[n - 1])));
  tail.rotateX(Math.PI / 2);
  g.add(tail);
  g.userData = { curve, tongue };
  return g;
}

function makeLadder(from, to) {
  const a = tileXZ(from).setY(0.2), b = tileXZ(to).setY(0.2);
  const dir = b.clone().sub(a), len = dir.length();
  const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize().multiplyScalar(0.22);
  const g = new THREE.Group();
  const wood = std(0xb7793f, { roughness: 0.8 });
  const railGeo = new THREE.CylinderGeometry(0.045, 0.045, len, 8);
  const up = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize());
  for (const s of [-1, 1]) {
    const rail = mesh(railGeo, wood);
    rail.position.copy(a.clone().add(b).multiplyScalar(0.5)).addScaledVector(side, s);
    rail.quaternion.copy(q);
    g.add(rail);
  }
  const rungGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.44, 6);
  const rq = new THREE.Quaternion().setFromUnitVectors(up, side.clone().normalize());
  for (let d = 0.3; d < len - 0.15; d += 0.32) {
    const r = mesh(rungGeo, std(0xd9a066));
    r.position.copy(a).addScaledVector(dir, d / len);
    r.quaternion.copy(rq);
    g.add(r);
  }
  return g;
}

const DIE_FACES = { 1: [0, 0, 0], 6: [Math.PI, 0, 0], 2: [0, 0, Math.PI / 2], 5: [0, 0, -Math.PI / 2], 3: [-Math.PI / 2, 0, 0], 4: [Math.PI / 2, 0, 0] };
function pipTexture(n) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#fffaf0';
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = n === 1 ? '#dc2626' : '#1f1b2e';
  const P = { 1: [[64, 64]], 2: [[34, 34], [94, 94]], 3: [[30, 30], [64, 64], [98, 98]], 4: [[34, 34], [94, 34], [34, 94], [94, 94]], 5: [[32, 32], [96, 32], [64, 64], [32, 96], [96, 96]], 6: [[34, 28], [94, 28], [34, 64], [94, 64], [34, 100], [94, 100]] };
  P[n].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, n === 1 ? 17 : 12, 0, Math.PI * 2); g.fill(); });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function makeDie() {
  // BoxGeometry face order: +x, -x, +y, -y, +z, -z
  const order = [2, 5, 1, 6, 3, 4];
  const d = mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), order.map(n => new THREE.MeshStandardMaterial({ map: pipTexture(n), roughness: 0.35 })), { outline: 0.03 });
  return d;
}

let world = null;
function buildWorld() {
  world = W.worldBundle();
  world.add(W.skyDome({ top: 0x060a22, mid: 0x1f2b5c, bottom: 0x0b0918, stars: 1.5 }));
  const flat = 9.6;
  const island = world.add(W.floatingIsland({ radius: 26, flat, seed: 14, grassA: 0x234f3d, grassB: 0x3f7f4f, hills: 2.6 }));
  world.add(W.scatter(island, r => (r() < 0.6 ? W.pineTree([0x1d4a3a, 0x255e47, 0x2f7454]) : W.roundTree([0x2f6b3a, 0x3f7f3f, 0x285c30])), { count: 34, rMin: flat + 1.5, rMax: 24, seed: 41, scale: [1, 1.7], avoid: (x, z) => z > 6 && Math.abs(x) < 9 }));
  world.add(W.scatter(island, r => W.mushroom([0xef4444, 0xa855f7, 0xf59e0b][Math.floor(r() * 3)]), { count: 16, rMin: flat + 0.5, rMax: 20, seed: 8, scale: [0.9, 1.8] }));
  world.add(W.meadow(island, { count: 420, rMin: flat, rMax: 25, seed: 18 }));
  for (let i = 0; i < 8; i++) {
    const l = W.lantern(i % 2 ? 0xffb86b : 0xffd58a);
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    l.position.set(Math.cos(a) * 8.6, 0, Math.sin(a) * 8.6);
    l.rotation.y = -a + Math.PI;
    world.add(l);
  }
  world.add(W.fireflies({ count: 150, rMin: 8.8, rMax: 24, yMin: 0.8, yMax: 6, color: 0xfff2a8 }));
  world.add(W.clouds({ count: 12, rMin: 34, rMax: 80, yMin: -18, yMax: 8, color: 0x9fb4ff, opacity: 0.75 }));
  const moon = W.moon({ radius: 9 });
  moon.position.set(70, 60, -160);
  world.add(moon);

  // the board on a chunky wooden table
  const size = T * 10;
  const frame = mesh(new THREE.BoxGeometry(size + 0.7, 0.5, size + 0.7), std(0x6b4423, { roughness: 0.7 }));
  frame.position.y = -0.22; // top at +0.03, clear of the island ground
  world.add(frame);
  const top = mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({ map: boardTexture(), roughness: 0.75 }), { shadow: false, receive: true });
  top.rotation.x = -Math.PI / 2;
  top.position.y = 0.035;
  world.add(top);
  world.snakes = Object.entries(SNAKES).map(([f, t], i) => world.add(makeSnake(+f, +t, SNAKE_COLORS[i % SNAKE_COLORS.length], i * 1.7)));
  Object.entries(LADDERS).forEach(([f, t]) => world.add(makeLadder(+f, +t)));
  const crown = mesh(new THREE.OctahedronGeometry(0.22), glow(0xfacc15, 2.6), { shadow: false });
  crown.position.copy(tileXZ(100)).setY(0.9);
  world.add(crown);
  world.crown = crown;
  return world;
}

export function createLadders(api) {
  const timers = [];
  const wait = (s) => new Promise(r => timers.push({ t: s, d: s, r }));
  const tween = (s, fn) => new Promise(r => timers.push({ t: s, d: s, fn, r }));

  const M = {
    name: 'ladders',
    enter() {
      if (!world) buildWorld();
      this.alive = true;
      timers.length = 0;
      this.group = new THREE.Group();
      scene.add(world.group, this.group);
      scene.fog = new THREE.Fog(0x141b3d, 40, 170);
      setLights({ sky: 0x9fb2ff, ground: 0x1a1430, hemiI: 1.05, sunColor: 0xd6e0ff, sunI: 2.0, sunPos: [8, 16, 10], rimColor: 0xffb86b, rimI: 1.2, rimPos: [-8, 6, -10], box: 10, exposure: 1.12, bloomStrength: 0.7 });

      this.you = this.you || makeCharacter(VISITOR);
      this.tokens = { you: this.you, chirag };
      this.pos = { you: 1, chirag: 1 };
      for (const [k, tok] of Object.entries(this.tokens)) {
        tok.scale.setScalar(0.42);
        tok.rotation.set(0, 0, 0);
        tok.position.copy(this.spot(k, 1));
        this.group.add(tok);
      }
      this.die = makeDie();
      this.dieHome = new THREE.Vector3(T * 5 + 1.4, 0.45, T * 3.5);
      this.die.position.copy(this.dieHome);
      this.group.add(this.die);
      this.dieSpin = null;
      this.active = 'you';
      this.state = 'ready';
      this.anim = { you: 'idle', chirag: 'idle' };
      this.camTarget = new THREE.Vector3();

      ui.ladders.classList.remove('hidden');
      this.rollBtn = $('btn-roll');
      this.turnEl = $('ladders-turn');
      this.setTurn('you');
      setHud({ mode: 'SNAKES & LADDERS', scoreLabel: 'YOU', bestLabel: 'CHIRAG', score: 1, best: 1 });
      banner('RACE ME TO 100<br><small>roll the die · ladders up · snakes down</small>', 1800);
      sfx.start();
    },
    exit() {
      this.alive = false;
      timers.length = 0;
      chirag.removeFromParent();
      scene.remove(world.group, this.group);
      ui.ladders.classList.add('hidden');
    },
    spot(who, n) {
      return tileXZ(n).add(new THREE.Vector3(who === 'you' ? -0.24 : 0.24, 0.04, who === 'you' ? 0.18 : -0.12));
    },
    setTurn(who) {
      this.active = who;
      const mine = who === 'you' && this.state === 'ready';
      this.rollBtn.disabled = !mine;
      this.turnEl.textContent = who === 'you' ? 'YOUR TURN' : 'CHIRAG IS ROLLING…';
      this.turnEl.className = who === 'you' ? 'turn you' : 'turn chirag';
    },
    resolve(from, roll) { return resolve(from, roll); },
    pickYourRoll() { return pickYourRoll(this.pos.you, this.pos.chirag); },
    pickChiragRoll() { return pickChiragRoll(this.pos.chirag); },
    // ---------------- turn flow
    async rollFor(who) {
      if (!this.alive) return;
      this.state = 'rolling';
      this.rollBtn.disabled = true;
      if (who === 'you') this.turnEl.textContent = "YOU'RE MOVING…";
      const value = who === 'you' ? this.pickYourRoll() : this.pickChiragRoll();
      await this.rollDie(value);
      if (!this.alive) return;
      await this.move(who, value);
      if (!this.alive) return;
      if (this.pos[who] === 100) return this.finish(who);
      const next = who === 'you' ? 'chirag' : 'you';
      this.state = next === 'you' ? 'ready' : 'busy';
      this.setTurn(next);
      if (next === 'chirag') { await wait(0.7); this.rollFor('chirag'); }
    },
    rollDie(value) {
      sfx.dice();
      const d = this.die;
      const spin = new THREE.Vector3(8 + Math.random() * 6, 6 + Math.random() * 6, 7 + Math.random() * 6);
      const start = d.quaternion.clone();
      const end = new THREE.Quaternion().setFromEuler(new THREE.Euler(...DIE_FACES[value])).premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * Math.PI * 2));
      const tmp = new THREE.Quaternion();
      return tween(1.0, k => {
        const e = new THREE.Euler(spin.x * k * (1 - k), spin.y * k * (1 - k), spin.z * k * (1 - k));
        tmp.setFromEuler(e).premultiply(start);
        d.quaternion.copy(tmp).slerp(end, Math.min(1, Math.max(0, (k - 0.45) / 0.55)));
        d.position.y = this.dieHome.y + Math.abs(Math.sin(k * Math.PI * 3)) * (1 - k) * 1.4;
      }).then(() => { toast(`${this.active === 'you' ? 'You' : 'Chirag'} rolled a ${value}`, 1100); });
    },
    async move(who, roll) {
      const tok = this.tokens[who];
      const from = this.pos[who];
      const r = this.resolve(from, roll);
      if (r.overshoot) { toast(who === 'you' ? 'Need an exact roll to land on 100!' : 'Chirag needs an exact roll…', 1300); await wait(0.5); return; }
      this.anim[who] = 'run';
      for (let n = from + 1; n <= r.land; n++) {
        const a = tok.position.clone(), b = this.spot(who, n);
        tok.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
        sfx.hop();
        await tween(0.2, k => { tok.position.lerpVectors(a, b, k); tok.position.y = a.y + Math.sin(k * Math.PI) * 0.45; });
        if (!this.alive) return;
        this.pos[who] = n;
        this.updateScores();
      }
      if (LADDERS[r.land]) {
        sfx.ladder();
        banner(who === 'you' ? '🪜 LADDER!' : '🪜 CHIRAG CLIMBS!', 1000);
        this.anim[who] = 'climb';
        const a = tok.position.clone(), b = this.spot(who, r.final);
        tok.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
        await tween(1.0, k => { tok.position.lerpVectors(a, b, k); tok.position.y = 0.2 + Math.sin(k * Math.PI) * 0.6; });
        particles.burst(tok.position.clone().setY(0.6), 0xfacc15, 16, 5);
      } else if (SNAKES[r.land]) {
        sfx.snake();
        banner(who === 'you' ? '🐍 SNAKE! slide down…' : '🐍 OUCH, CHIRAG SLIPS', 1100);
        const snake = world.snakes[Object.keys(SNAKES).indexOf(String(r.land))];
        const curve = snake.userData.curve;
        this.anim[who] = 'sad';
        const off = this.spot(who, r.final).sub(tileXZ(r.final));
        await tween(1.4, k => {
          const p = curve.getPointAt(Math.min(1, k));
          tok.position.copy(p).add(off).setY(p.y + 0.1);
          tok.rotation.y += 0.25;
        });
      }
      if (!this.alive) return;
      this.pos[who] = r.final;
      tok.position.copy(this.spot(who, r.final));
      this.anim[who] = 'idle';
      this.updateScores();
    },
    updateScores() { setScore(this.pos.you, this.pos.chirag); },
    async finish(who) {
      this.state = 'over';
      this.rollBtn.disabled = true;
      this.turnEl.textContent = who === 'chirag' ? 'CHIRAG WINS!' : 'YOU WIN?!';
      this.anim[who] = 'cheer';
      this.anim[who === 'chirag' ? 'you' : 'chirag'] = 'sad';
      sfx.win();
      for (let i = 0; i < 6; i++) {
        particles.burst(this.tokens[who].position.clone().setY(1), [0xfacc15, 0x34d399, 0xf472b6, 0x38bdf8][i % 4], 26, 9, 9);
        await wait(0.22);
        if (!this.alive) return;
      }
      const record = store.get('ladders-record', { chirag: 0, you: 0 });
      record[who] += 1;
      store.set('ladders-record', record);
      await wait(1.2);
      if (!this.alive) return;
      api.finish({
        title: who === 'chirag' ? 'CHIRAG WINS! 🏆' : 'YOU WIN?!',
        big: `${record.chirag} – ${record.you}`,
        sub: who === 'chirag' ? `you made it to tile ${this.pos.you} · ${pick(TAUNTS)}` : 'this should be impossible…',
        retry: '▶ REMATCH',
      });
    },
    onKey(k, down) {
      if (down && (k === ' ' || k === 'Enter' || k === 'r' || k === 'R') && this.state === 'ready' && this.active === 'you') this.rollFor('you');
    },
    clickRoll() { if (this.state === 'ready' && this.active === 'you') this.rollFor('you'); },
    update(dt, t) {
      world.update(t, dt);
      for (let i = timers.length - 1; i >= 0; i--) {
        const tm = timers[i];
        tm.t -= dt;
        if (tm.fn) tm.fn(1 - Math.max(0, tm.t) / tm.d);
        if (tm.t <= 0) { timers.splice(i, 1); tm.r(); }
      }
      for (const [who, tok] of Object.entries(this.tokens)) {
        const a = this.anim[who];
        if (a === 'run') Pose.run(tok, t, 14);
        else if (a === 'climb') Pose.climb(tok, t);
        else if (a === 'cheer') Pose.cheer(tok, t);
        else if (a === 'sad') Pose.sad(tok, t);
        else { Pose.idle(tok, t + (who === 'you' ? 1.3 : 0)); }
      }
      if (this.state === 'ready' || this.state === 'over') {
        const face = this.state === 'over' ? 0 : Math.PI * 0.08;
        this.tokens.you.rotation.y += ((face) - this.tokens.you.rotation.y) * Math.min(1, dt * 4);
        chirag.rotation.y += ((face) - chirag.rotation.y) * Math.min(1, dt * 4);
      }
      world.snakes.forEach((s, i) => (s.userData.tongue.scale.z = Math.sin(t * 9 + i) > 0.5 ? 1 : 0.15));
      world.crown.rotation.y += dt * 2;
      world.crown.position.y = 0.9 + Math.sin(t * 2.5) * 0.12;
      if (this.state !== 'rolling') this.die.rotation.y += dt * 0.3 * (this.state === 'ready' ? 1 : 0);

      // camera: overview that leans toward whoever is moving
      const focus = this.tokens[this.active].position;
      this.camTarget.lerp(new THREE.Vector3(focus.x * 0.35, 0, focus.z * 0.35), Math.min(1, dt * 2));
      const portrait = camera.aspect < 0.9;
      camera.position.set(this.camTarget.x, portrait ? 19 : 11.8, this.camTarget.z + (portrait ? 14.5 : 10.8));
      camera.lookAt(this.camTarget.x, 0, this.camTarget.z + (portrait ? 0.6 : 0.4));
    },
  };
  return M;
}
