// The cast: 3D Chirag (olive CHIRAG hoodie, blue jeans, white sneakers) and the visitor's avatar.
import * as THREE from 'three';
import { toon, mesh } from './core.js';

// Same colours as engine/character.py so README sprites and 3D model match.
export const CHIRAG = {
  hair: 0x2a1f1a, skin: 0xd69e74, eye: 0x1a1423, blush: 0xf28b82, mouth: 0x9a3b3b,
  hoodie: 0x6b7a2e, hood: 0x55621f, strings: 0xeef2e2, jeans: 0x3e6fb0, cuff: 0x335d96,
  sneaker: 0xf8fafc, sole: 0xcbd5e1, text: 'CHIRAG', textStroke: '#3c4515',
};
export const VISITOR = {
  ...CHIRAG, hair: 0x5b3a29, skin: 0xe8b48f, hoodie: 0x7c3aed, hood: 0x5b21b6, jeans: 0x334155, cuff: 0x1e293b,
  text: 'YOU', textStroke: '#3b0764',
};

function backTextTexture(text, stroke) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.font = '900 170px "Arial Black", Impact, system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = 18;
  g.strokeStyle = stroke;
  g.strokeText(text, 512, 136);
  g.fillStyle = '#f8fafc';
  g.fillText(text, 512, 136);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function makeCharacter(P = CHIRAG) {
  const root = new THREE.Group();
  const rig = new THREE.Group();
  root.add(rig);
  const ol = 0.045;

  const legs = [];
  for (const s of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(0.17 * s, 0.64, 0);
    rig.add(hip);
    const leg = mesh(new THREE.CapsuleGeometry(0.135, 0.3, 6, 14), toon(P.jeans), { outline: ol });
    leg.position.y = -0.25;
    hip.add(leg);
    const cuff = mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 16), toon(P.cuff));
    cuff.position.y = -0.42;
    hip.add(cuff);
    const shoe = new THREE.Group();
    shoe.position.set(0, -0.53, 0.05);
    hip.add(shoe);
    const top = mesh(new THREE.SphereGeometry(0.17, 18, 12), toon(P.sneaker), { outline: ol });
    top.scale.set(1, 0.62, 1.45);
    shoe.add(top);
    const sole = mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.06, 18), toon(P.sole));
    sole.scale.set(1, 1, 1.45);
    sole.position.y = -0.06;
    shoe.add(sole);
    const lace = mesh(new THREE.BoxGeometry(0.12, 0.02, 0.1), toon(0x94a3b8), { shadow: false });
    lace.position.set(0, 0.09, 0.08);
    shoe.add(lace);
    legs.push(hip);
  }

  const torso = new THREE.Group();
  torso.position.y = 0.98;
  rig.add(torso);
  const body = mesh(new THREE.CapsuleGeometry(0.37, 0.28, 8, 20), toon(P.hoodie), { outline: ol });
  body.scale.set(1.06, 1, 0.86);
  torso.add(body);
  const hem = mesh(new THREE.TorusGeometry(0.36, 0.05, 8, 24), toon(P.hood));
  hem.rotation.x = Math.PI / 2;
  hem.scale.set(1.06, 0.86, 1);
  hem.position.y = -0.36;
  torso.add(hem);
  const pocket = mesh(new THREE.BoxGeometry(0.42, 0.15, 0.06), toon(P.hood), { shadow: false });
  pocket.position.set(0, -0.16, 0.3);
  torso.add(pocket);
  for (const s of [-1, 1]) {
    const str = mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.24, 6), toon(P.strings), { shadow: false });
    str.position.set(0.09 * s, 0.22, 0.31);
    torso.add(str);
    const tip = mesh(new THREE.SphereGeometry(0.03, 8, 6), toon(P.strings), { shadow: false });
    tip.position.set(0.09 * s, 0.09, 0.315);
    torso.add(tip);
  }
  const hood = mesh(new THREE.SphereGeometry(0.34, 20, 14), toon(P.hood), { outline: ol });
  hood.scale.set(1.15, 0.62, 0.75);
  hood.position.set(0, 0.42, -0.2);
  torso.add(hood);
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(0.376, 0.376, 0.2, 32, 1, true, Math.PI - 0.95, 1.9),
    new THREE.MeshBasicMaterial({ map: backTextTexture(P.text, P.textStroke), transparent: true, depthWrite: false, toneMapped: false })
  );
  band.scale.set(1.06, 1, 0.86);
  band.position.y = 0.02;
  torso.add(band);

  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(0.42 * s, 1.24, 0);
    rig.add(sh);
    const arm = mesh(new THREE.CapsuleGeometry(0.1, 0.26, 6, 12), toon(P.hoodie), { outline: ol });
    arm.position.y = -0.2;
    sh.add(arm);
    const hand = mesh(new THREE.SphereGeometry(0.105, 14, 10), toon(P.skin), { outline: ol });
    hand.position.y = -0.42;
    sh.add(hand);
    sh.rotation.z = 0.18 * s;
    arms.push(sh);
  }

  const head = new THREE.Group();
  head.position.y = 1.98;
  rig.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.62, 36, 26), toon(P.skin), { outline: 0.03 });
  skull.scale.set(1.06, 0.95, 1);
  head.add(skull);
  for (const s of [-1, 1]) {
    const ear = mesh(new THREE.SphereGeometry(0.12, 12, 10), toon(P.skin));
    ear.position.set(0.64 * s, -0.04, 0);
    head.add(ear);
  }
  const hairMat = toon(P.hair);
  const cap = mesh(new THREE.SphereGeometry(0.67, 36, 20, 0, Math.PI * 2, 0, Math.PI * 0.56), hairMat, { outline: 0.03 });
  cap.rotation.x = -0.32;
  cap.scale.set(1.06, 1, 1.02);
  cap.position.y = 0.04;
  head.add(cap);
  const backHair = mesh(new THREE.SphereGeometry(0.645, 28, 20), hairMat);
  backHair.position.set(0, -0.02, -0.1);
  backHair.scale.set(1.05, 0.95, 1);
  head.add(backHair);
  for (let i = -2; i <= 2; i++) {
    const tuft = mesh(new THREE.SphereGeometry(0.17, 12, 10), hairMat);
    const a = i * 0.32;
    tuft.position.set(Math.sin(a) * 0.5, 0.33 - Math.abs(i) * 0.03, Math.cos(a) * 0.43);
    tuft.scale.set(1, 1.15, 0.6);
    tuft.lookAt(tuft.position.clone().multiplyScalar(2).add(new THREE.Vector3(0, 0.2, 0)));
    head.add(tuft);
  }
  const curl = mesh(new THREE.TorusGeometry(0.13, 0.035, 8, 20, Math.PI * 1.3), hairMat, { shadow: false });
  curl.position.set(0.05, 0.72, 0.02);
  curl.rotation.set(0, Math.PI / 2, 0.6);
  head.add(curl);
  const eyes = [];
  for (const s of [-1, 1]) {
    const eye = mesh(new THREE.SphereGeometry(0.115, 16, 12), toon(P.eye), { shadow: false });
    eye.scale.set(0.85, 1.2, 0.45);
    eye.position.set(0.22 * s, -0.04, 0.57);
    head.add(eye);
    const spark = mesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), { shadow: false });
    spark.position.set(0.035, 0.05, 0.09);
    eye.add(spark);
    eyes.push(eye);
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.085, 16), new THREE.MeshBasicMaterial({ color: P.blush, transparent: true, opacity: 0.55, depthWrite: false }));
    blush.position.set(0.37 * s, -0.2, 0.5);
    blush.lookAt(blush.position.clone().multiplyScalar(2));
    head.add(blush);
  }
  const mouth = mesh(new THREE.TorusGeometry(0.06, 0.018, 8, 14, Math.PI), toon(P.mouth), { shadow: false });
  mouth.position.set(0, -0.24, 0.585);
  mouth.rotation.z = Math.PI;
  head.add(mouth);

  root.userData = { rig, legs, arms, head, eyes, torso, blinkAt: 2 };
  return root;
}

export const Pose = {
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
    c.userData.arms[1].rotation.z = 2.5 + Math.sin(t * 9) * 0.35;
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
  climb(c, t) {
    Pose.reset(c);
    const u = c.userData, s = Math.sin(t * 12);
    u.arms[0].rotation.x = -2.6 + s * 0.4;
    u.arms[1].rotation.x = -2.6 - s * 0.4;
    u.legs[0].rotation.x = -0.6 + s * 0.5;
    u.legs[1].rotation.x = -0.6 - s * 0.5;
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
  sad(c, t) {
    Pose.reset(c);
    const u = c.userData;
    u.head.rotation.x = 0.35;
    u.arms.forEach((a, i) => (a.rotation.z = (i ? 1 : -1) * 0.05));
    u.rig.position.y = -0.04 + Math.sin(t * 1.5) * 0.01;
    Pose.blink(c, t);
  },
};

export const chirag = makeCharacter(CHIRAG);
